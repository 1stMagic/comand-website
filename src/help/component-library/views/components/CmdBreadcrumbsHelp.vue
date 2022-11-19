<script setup>
// import functions
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "../../../../utils/common"

// import components
import {CmdBreadcrumbs} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import breadcrumbs from '../../assets/data/breadcrumbs.json'
import CmdCode from "../../data/CmdBreadcrumbsHelp"
import propertyDescriptions from "comand-component-library/src/documentation/generated/CmdBreadcrumbsPropertyDescriptions.json"

const propertyStructures = {
    breadcrumbLinks: {
        "text": "<string>",
        "type": "<string>",
        "path": "<string>",
        "route": {
            "params": {
                "lang": "<string>"
            }
        }
    }
}
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper
                componentName="CmdBreadcrumbs"
                headlineText="Breadcrumbs"
                preHeadlineText="1"
                :code="CmdCode"
                :data="breadcrumbs"
                :isFirstComponent="true"
            >
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <CmdBreadcrumbs
                        :breadcrumbLinks="breadcrumbs"
                        breadcrumbLabel="You are here:"
                    />
                </teleport>
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdBreadcrumbs.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
        </template>
    </CmdTabs>
</template>