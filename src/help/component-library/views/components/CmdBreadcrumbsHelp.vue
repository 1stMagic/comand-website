<script setup>
// import functions
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "comand-component-library/src/utils/common"

// import components
import CmdBreadcrumbs from "../../../components/CmdBreadcrumbs"
import ComponentProperties from "../../components/ComponentProperties.vue"
import ViewCodeData from "../../components/ViewCodeData.vue"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"

// import example-data
import breadcrumbs from '../../../assets/data/breadcrumbs.json'
import CmdCode from "../../data/CmdBreadcrumbsHelp"
import propertyDescriptions from "../../generated/CmdBreadcrumbsPropertyDescriptions.json"

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
            <ExampleSectionWrapper componentName="CmdBreadcrumbs" headlineText="Breadcrumbs">
                <ViewCodeData :isFirstComponent="true" :code="CmdCode[0]" :data="breadcrumbs">
                    <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                        <CmdBreadcrumbs
                            :breadcrumbLinks="breadcrumbs"
                            breadcrumbLabel="You are here:"
                        />
                    </teleport>
                </ViewCodeData>
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdBreadcrumbs.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
        </template>
    </CmdTabs>
</template>