<script setup>
// import functions
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "../../../../utils/common"

// import components
import {CmdListOfLinks} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import {CmdHeadline} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdListOfLinksHelp"
import listOfLinks from "../../assets/data/list-of-links.json"
import listOfLinksSectionAnchors from "../../assets/data/list-of-links-section-anchors.json"
import propertyDescriptions from "comand-component-library/src/documentation/generated/CmdListOfLinksPropertyDescriptions.json"

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
            <ExampleSectionWrapper
                componentName="CmdListOfLinks"
                headlineText="Vertical"
                preHeadlineText="1"
                :code="CmdCode"
                :data="listOfLinks"
                :isFirstComponent="true">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <CmdListOfLinks
                        :links="listOfLinks"
                        :cmdHeadline="{
                            headlineText: 'Links',
                            headlineLevel: 5
                        }"
                    />
                </teleport>
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdListOfLinks"
                headlineText="Horizontal"
                preHeadlineText="2"
                :code="CmdCode"
                :data="listOfLinks">
                <CmdListOfLinks
                    :links="listOfLinks" orientation="horizontal"
                    :cmdHeadline="{
                        headlineText: 'Links',
                        headlineLevel: 5
                    }"
                />
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdListOfLinks"
                headlineText="Styled as box"
                preHeadlineText="3"
                :code="CmdCode"
                :data="listOfLinks">
                <CmdListOfLinks
                    :links="listOfLinks"
                    :styleAsBox="true"
                    :cmdHeadline="{
                        headlineText: 'Links',
                        headlineLevel: 5
                    }"
                />
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdListOfLinks"
                headlineText="Use as section anchors"
                preHeadlineText="4"
                :code="CmdCode"
                :data="listOfLinksSectionAnchors">
                <CmdListOfLinks
                    :links="listOfLinksSectionAnchors"
                    :sectionAnchors="true"
                />
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdListOfLinks.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
        </template>
    </CmdTabs>
</template>