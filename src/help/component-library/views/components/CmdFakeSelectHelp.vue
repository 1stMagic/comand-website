<script setup>
// import functions
import {ref} from "vue"
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "comand-component-library/src/utils/common"

// import components
import {CmdFakeSelect} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ViewCodeData from "../../components/ViewCodeData.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdFakeSelectHelp"
import fakeSelectOptions from "../../assets/data/fake-select-options.json"
import fakeSelectColors from '../../assets/data/fake-select-colors.json'
import fakeSelectCountries from '../../assets/data/fake-select-countries.json'
import fakeSelectOptionsWithIcons from '../../assets/data/fake-select-options-with-icons.json'
import propertyDescriptions from "comand-component-library/src/documentation/generated/CmdFakeSelectPropertyDescriptions.json"

// import composables
import {useSequence} from "comand-component-library"

const sequence = useSequence()

const propertyStructures = {
    dropdownIcon: {
        "iconClass": "<string>",
        "tooltip": "<string>"
    },
    selectData: [
        {
            "text": "<string>",
            "value": "<number>"
        }
    ]
}

// set consts for v-models
const fakeSelectDefault = ref("")
const fakeSelectDefaultWithIcons = ref("2")
const fakeSelectCheckbox = ref([1])
const formElementStatus = ref("")
const fakeSelectCountry = ref("")
const fakeSelectColor = ref("")
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper
                componentName="CmdFakeSelect"
                headlineText="Selectbox 'default'"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode"
                :data="fakeSelectOptions"
                :isFirstComponent="true">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <CmdFakeSelect
                        labelText="Labeltext for default selectbox:"
                        :status="formElementStatus"
                        :selectData="fakeSelectOptions"
                        v-model="fakeSelectDefault"
                        required
                        defaultOptionName="Select an option:"
                    />
                    <h4>v-model</h4>
                    <dl class="vmodel box">
                        <dt>Current value:</dt>
                        <dd>
                            <output>{{ fakeSelectDefault }}</output>
                        </dd>
                    </dl>
                </teleport>
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdFakeSelect"
                headlineText="Selectbox 'default' (with icons)"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode"
                :data="fakeSelectOptions"
                :isFirstComponent="true">
                <CmdFakeSelect
                    labelText="Selectbox with icons:"
                    :status="formElementStatus"
                    :selectData="fakeSelectOptionsWithIcons"
                    v-model="fakeSelectDefaultWithIcons"
                    defaultOptionName="Select an option:"
                />
                <dl class="vmodel box">
                    <dt>v-model:</dt>
                    <dd>
                        <output>{{ fakeSelectDefaultWithIcons }}</output>
                    </dd>
                </dl>
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdFakeSelect"
                headlineText="Selectbox 'checkboxOptions' (shows checkboxes)"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode">
                <CmdFakeSelect
                    labelText="Selectbox with checkboxes:"
                    :status="formElementStatus"
                    :selectData="fakeSelectOptions"
                    v-model="fakeSelectCheckbox"
                    defaultOptionName="Options:"
                    :required="true"
                    id="selectbox-with-checkboxes"
                    type="checkboxOptions"
                    :useCustomTooltip="true"
                />
                <dl class="vmodel box">
                    <dt>v-model:</dt>
                    <dd>
                        <output>{{ fakeSelectCheckbox }}</output>
                    </dd>
                </dl>
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdFakeSelect"
                headlineText="Selectbox 'content' (content given by slot)"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode">
                <CmdFakeSelect
                    labelText="Selectbox with slot-content:"
                    :status="formElementStatus"
                    type="content"
                    defaultOptionName="HTML-Content:"
                >
                    <ul class="custom-fake-select-content">
                        <li>
                            <div>
                                <h3>Headline</h3>
                                <p>Some content inside a paragraph</p>
                            </div>
                            <img src="media/images/thumbnail-scroller/thumbnail/logo-cmd-blue-landscape.jpg" alt="image"/>
                        </li>
                    </ul>
                </CmdFakeSelect>
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdFakeSelect"
                headlineText="Selectbox 'country' (shows country flags)"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode">
                <CmdFakeSelect
                    labelText="Selectbox with country flags:"
                    :status="formElementStatus"
                    :selectData="fakeSelectCountries"
                    v-model="fakeSelectCountry"
                    defaultOptionName="Select country:"
                    type="country"
                />
                <dl class="vmodel box">
                    <dt>v-model:</dt>
                    <dd>
                        <output>{{ fakeSelectCountry }}</output>
                    </dd>
                </dl>
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdFakeSelect"
                headlineText="Selectbox 'colors' (show squares with colors)"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode">
                <CmdFakeSelect
                    labelText="Selectbox with colors:"
                    :status="formElementStatus"
                    :selectData="fakeSelectColors"
                    v-model="fakeSelectColor"
                    required="required"
                    type="color"
                />
                <dl class="vmodel box">
                    <dt>v-model:</dt>
                    <dd>
                        <output>{{ fakeSelectColor }}</output>
                    </dd>
                </dl>
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdFakeSelect.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
        </template>
    </CmdTabs>
</template>