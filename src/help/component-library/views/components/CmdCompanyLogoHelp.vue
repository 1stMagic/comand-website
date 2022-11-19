<script setup>
// import functions
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "../../../../utils/common"

// import components
import {CmdCompanyLogo} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import companyLogo from '../../assets/data/company-logo.json'
import CmdCode from "../../data/CmdCompanyLogoHelp"
import propertyDescriptions from "comand-component-library/src/documentation/generated/CmdCompanyLogoPropertyDescriptions.json"

// import graphics
import defaultLogo from "../../../../company/assets/images/logo.svg"
import darkmodeLogo from "../../../../company/assets/images/logo-darkmode.svg"

const propertyStructures = {
    link: {
        "type": "<string>",
        "path": "<string>",
        "tooltip": "<string>"
    }
}
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper
                componentName="CmdCompanyLogo"
                headlineText="Company Logo"
                preHeadlineText="1"
                :code="CmdCode"
                :data="companyLogo"
                :isFirstComponent="true"
            >
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <CmdCompanyLogo
                        :link="companyLogo.link"
                        altText="CoManD Logo"
                        :pathDefaultLogo="defaultLogo"
                        :pathDarkmodeLogo="darkmodeLogo"
                    />
                </teleport>
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdCompanyLogo.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
        </template>
    </CmdTabs>
</template>