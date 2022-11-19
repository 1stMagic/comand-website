<script setup>
// import functions
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "../../../../utils/common"

// import components
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdTabsHelp"
import tabs from "../../assets/data/tabs.json"
import propertyDescriptions from "comand-component-library/src/documentation/generated/CmdTabsPropertyDescriptions.json"

const propertyStructures = {
    tabs: [
        {
            "name": "<string>",
            "headline": "<string>",
            "htmlContent": "<string>"
        }
    ]
}
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper
                componentName="CmdTabs"
                headlineText="Tabs (data given by property, tabs not stretched)"
                preHeadlineText="1"
                :code="CmdCode"
                :data="tabs"
                :isFirstComponent="true">
                    <CmdTabs
                        :stretchTabs="false"
                        :tabs="tabs"
                    />
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdTabs"
                headlineText="Tabs (content given slot, tabs stretched)"
                preHeadlineText="2"
                :code="CmdCode">
                <CmdTabs :stretchTabs="true" :tabs="[{name: 'Tab 1'}, {name: 'Tab 2'}, {name: 'Tab 3'}]" :useSlot="true">
                    <template v-slot:tab-content-0>
                        <h3>Tab 1</h3>
                        <p>Content</p>
                    </template>
                    <template v-slot:tab-content-1>
                        <h3>Tab 2</h3>
                        <p>Content</p>
                        <p>Content</p>
                    </template>
                    <template v-slot:tab-content-2>
                        <h3>Tab 3</h3>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                    </template>
                </CmdTabs>
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdTabs.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
        </template>
    </CmdTabs>
</template>