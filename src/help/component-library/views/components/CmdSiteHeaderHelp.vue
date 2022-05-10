<script setup>
// import functions
import {ref} from "vue"
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "comand-component-library/src/utils/common"

// import components
import {CmdSiteHeader} from "comand-component-library"
import {CmdCompanyLogo} from "comand-component-library"
import {CmdListOfLinks} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ViewCodeData from "../../components/ViewCodeData.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdSiteHeaderHelp"
import mainNavigation from '../../assets/data/main-navigation.json'
import listOfLinks from '../../assets/data/list-of-links-top-header-navigation.json'
import companyLogo from '../../assets/data/company-logo.json'
import propertyDescriptions from "../../generated/CmdSiteHeaderPropertyDescriptions.json"

// import graphics
import defaultLogo from "../../../../company/assets/images/logo.svg"
import darkmodeLogo from "../../../../company/assets/images/logo-darkmode.svg"

// import composables
import {useSequence} from "comand-component-library"

const sequence = useSequence()

const propertyStructures = {
    mainNavigationEntries: [
        {
            "name": "<string>",
            "href": "<string>",
            "target": "<string>",
            "subentries": [
                {
                    "name": "<string>",
                    "href": "<string>",
                    "target": "<string>"
                }
            ]
        }
    ]
}

const navigationEntries = ref(mainNavigation)
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper
                componentName="CmdSiteHeader"
                headlineText="Site Header"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode"
                :isFirstComponent="true">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <CmdSiteHeader :cmdMainNavigation="{navigationEntries}" :sticky="true">
                        <template v-slot:top-header>
                            <CmdListOfLinks
                                :links="listOfLinks"
                                orientation="horizontal"
                                align="right"
                            />
                        </template>
                        <template v-slot:logo>
                            <CmdCompanyLogo
                                :link="companyLogo.link"
                                altText="CoManD Logo"
                                :pathDefaultLogo="defaultLogo"
                                :pathDarkmodeLogo="darkmodeLogo"
                            />
                        </template>
                    </CmdSiteHeader>
                </teleport>
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdSiteHeader.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
        </template>
    </CmdTabs>
</template>