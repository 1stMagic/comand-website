<script setup>
// import functions
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "../../../../utils/common"

// import components
import {CmdGoogleMaps} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdGoogleMapsHelp"
import propertyDescriptions from "comand-component-library/src/documentation/generated/CmdFormFiltersPropertyDescriptions.json"
import addressData from '../../assets/data/address-data.json'

const propertyStructures = {
    "address": {
        "streetNo": "<string>",
        "zip": "<number>",
        "city": "<string>",
        "longitude": "<string>",
        "latitude": "<string>",
        "location": "<string>"
    }
}

function coordinates(address) {
    return {
        longitude: address.longitude,
        latitude: address.latitude
    }
}
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper
                componentName="CmdGoogleMaps"
                headlineText="Google Maps&trade;"
                preHeadlineText="1"
                :code="CmdCode"
                :isFirstComponent="true">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <CmdGoogleMaps class="ratio-16-9"
                        :address="coordinates(addressData.address)"
                    />
                </teleport>
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdGoogleMaps.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
        </template>
    </CmdTabs>
</template>