<script setup>
// import functions
import {ref} from "vue"
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "../../../../utils/common"

// import components
import {CmdSwitchLanguage} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdSwitchLanguageHelp"
import switchLanguage from '../../assets/data/switch-language.json'
import propertyDescriptions from "comand-component-library/src/documentation/generated/CmdSwitchLanguagePropertyDescriptions.json"

const currentLanguage = ref("")

const propertyStructures = {
    languages: [
        {
            "iso2": "<string>",
            "name": "<string>",
            "tooltip": "<string>",
            "link": {
                "type": "<string>",
                "path": "<string>"
            }
        }
    ]
}

function selectLanguage(event) {
    // event contains the original event and the language as an object
    event.originalEvent.preventDefault() // prevent original event
    currentLanguage.value = event.language
}
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper
                componentName="CmdSwitchLanguage"
                headlineText="Switch Language"
                preHeadlineText="1"
                :code="CmdCode"
                :data="switchLanguage"
                :isFirstComponent="true">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <CmdSwitchLanguage
                        :languages="switchLanguage"
                        @click="selectLanguage"
                    />
                </teleport>
                <dl class="v-model" v-if="currentLanguage">
                    <dt>Current language:</dt>
                    <dd>
                        <output>{{ currentLanguage.name }}</output>
                    </dd>
                </dl>
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdSwitchLanguage.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
        </template>
    </CmdTabs>
</template>