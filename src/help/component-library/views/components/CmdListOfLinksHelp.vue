<script setup>
// import functions
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "comand-component-library/src/utils/common"

// import components
import {CmdListOfLinks} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import {CmdCustomHeadline} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ViewCodeData from "../../components/ViewCodeData.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdListOfLinksHelp"
import listOfLinks from "../../assets/data/list-of-links.json"
import listOfLinksSectionAnchors from "../../assets/data/list-of-links-section-anchors.json"
import propertyDescriptions from "../../generated/CmdListOfLinksPropertyDescriptions.json"

const propertyStructures = {
    listOfLinks: [
        {
            "iconClass": "<string>",
            "type": "<string>",
            "text": "<string>",
            "path": "<string>",
            "target": "<string>",
            "tooltip": "<string>",
            "fancybox": "<boolean>"
        }
    ]
}
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper componentName="CmdListOfLinks" headlineText="Vertical">
                <ViewCodeData :isFirstComponent="true" :code="CmdCode[0]" :data="listOfLinks">
                    <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                        <CmdListOfLinks :links="listOfLinks" :cmdCustomHeadline="{headlineText: 'Links', headlineLevel: 5}"/>
                    </teleport>
                </ViewCodeData>
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper componentName="CmdListOfLinks" headlineText="Horizontal">
                <ViewCodeData :code="CmdCode[1]" :data="listOfLinks">
                    <CmdListOfLinks :links="listOfLinks" orientation="horizontal" :cmdCustomHeadline="{headlineText: 'Links', headlineLevel: 5}"/>
                </ViewCodeData>
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper componentName="CmdListOfLinks" headlineText="Styled as box">
                <ViewCodeData :code="CmdCode[2]" :data="listOfLinks">
                    <CmdListOfLinks :links="listOfLinks" :styleAsBox="true" :cmdCustomHeadline="{headlineText: 'Links', headlineLevel: 5}"/>
                </ViewCodeData>
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper componentName="CmdListOfLinks" headlineText="Use as section anchors">
                <ViewCodeData :code="CmdCode[2]" :data="listOfLinksSectionAnchors">
                    <CmdListOfLinks :links="listOfLinksSectionAnchors" :sectionAnchors="true"/>
                </ViewCodeData>
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdListOfLinks.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
        </template>
    </CmdTabs>
</template>