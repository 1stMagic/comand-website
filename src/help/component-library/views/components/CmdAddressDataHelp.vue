<script setup>
// import functions
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "../../../../utils/common"

// import components
import {CmdAddressData} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdAddressDataHelp.js"
import addressData from '../../assets/data/address-data.json'
import propertyDescriptions from "comand-component-library/src/documentation/generated/CmdAddressDataPropertyDescriptions.json"

const propertyStructures = {
    addressData: {
        "company": "<string>",
        "address": {
            "streetNo": "<string>",
            "zip": "<number>",
            "city": "<string>"
        },
        "telephone": "<string>",
        "mobilephone": "<string>",
        "fax": "<string>",
        "email": "<string>"
    }
}
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper
                componentName="CmdAddressData"
                headlineText="List with labels"
                :code="CmdCode"
                :isFirstComponent="true"
                :data="addressData"
                preHeadlineText="1">
                    <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                        <CmdAddressData
                            :addressData="addressData"
                            :linkGoogleMaps="true"
                            :cmdHeadline="{ headlineText: 'Address', headlineLevel: 5}"
                        />
                    </teleport>
            </ExampleSectionWrapper>
            <hr />
            <ExampleSectionWrapper
                componentName="CmdAddressData"
                headlineText="List without labels"
                :code="CmdCode"
                :data="addressData"
                preHeadlineText="2">
                    <CmdAddressData
                        :addressData="addressData"
                        :showLabels="false"
                        :linkGoogleMaps="false"
                        :cmdHeadline="{ headlineText: 'Address', headlineLevel: 5}"
                    />
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdAddressData.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures" />
        </template>
    </CmdTabs>
</template>