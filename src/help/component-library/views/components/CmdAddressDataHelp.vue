<script setup>
// import functions
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "comand-component-library/src/utils/common"

// import components
import {CmdAddressData} from "comand-component-library"
import ComponentProperties from "../../components/ComponentProperties.vue"
import ViewCodeData from "../../components/ViewCodeData.vue"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"

// import example-data
import CmdCode from "../../data/CmdAddressDataHelp"
import addressData from '../../assets/data/address-data.json'
import propertyDescriptions from "../../generated/CmdAddressDataPropertyDescriptions.json"

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
            <ExampleSectionWrapper componentName="CmdAddressData" headlineText="List with labels">
                <ViewCodeData :isFirstComponent="true" :code="CmdCode[0]" :data="addressData">
                    <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                        <CmdAddressData
                            :addressData="addressData"
                            :linkGoogleMaps="true"
                            :cmdCustomHeadline="{ headlineText: 'Address', headlineLevel: 5}"
                        />
                    </teleport>
                </ViewCodeData>
            </ExampleSectionWrapper>
            <hr />
            <ExampleSectionWrapper componentName="CmdAddressData" headlineText="List without labels">
                <ViewCodeData :code="CmdCode[1]" :data="addressData">
                    <CmdAddressData
                        :addressData="addressData"
                        :showLabels="false"
                        :linkGoogleMaps="false"
                        :cmdCustomHeadline="{ headlineText: 'Address', headlineLevel: 5}"
                    />
                </ViewCodeData>
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdAddressData.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures" />
        </template>
    </CmdTabs>
</template>