<script setup>
// import functions
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "../../../../utils/common"
// import components

import {CmdOpeningHours} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdOpeningHoursHelp"
import openingHours from '../../assets/data/opening-hours.json'
import propertyDescriptions from "comand-component-library/src/documentation/generated/CmdOpeningHoursPropertyDescriptions.json"

const propertyStructures = {
    openingHours: [
        {
            "day": "<string>",
            "fromTime": "<string>",
            "tillTime": "<string>"
        }
    ]
}
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper
                componentName="CmdOpeningHours"
                headlineText="Opening Hours"
                preHeadlineText="1"
                :code="CmdCode"
                :data="openingHours"
                :isFirstComponent="true">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <CmdOpeningHours
                        :openingHours="openingHours"
                        :closed="true"
                        :cmdHeadline="{headlineText: 'Opening hours', headlineLevel: 5}"
                        textOpen="Open right now!"
                        textClosed="Closed right now!"
                        textHolidaysClosed="Closed on holidays"
                        textMiscInfo="Miscellaneous information"
                    />
                </teleport>
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdOpeningHours.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
        </template>
    </CmdTabs>
</template>