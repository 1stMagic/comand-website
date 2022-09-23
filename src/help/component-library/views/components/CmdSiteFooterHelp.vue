<script setup>
// import functions
import {ref} from "vue"
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "comand-component-library/src/utils/common"

// import components
import {CmdSiteFooter} from "comand-component-library"
import {CmdListOfLinks} from "comand-component-library"
import {CmdOpeningHours} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ViewCodeData from "../../components/ViewCodeData.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdSiteFooterHelp"
import addressDataData from '../../assets/data/address-data.json'
import listOfLinksData from '../../assets/data/list-of-links.json'
import openingHoursData from '../../assets/data/opening-hours.json'
import propertyDescriptions from "comand-component-library/src/documentation/generated/CmdSiteFooterPropertyDescriptions.json"

// import composables
import {useSequence} from "comand-component-library"

const sequence = useSequence()

const addressData = ref(addressDataData)
const listOfLinks = ref(listOfLinksData)
const openingHours = ref(openingHoursData)
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper
                componentName="CmdSiteFooter"
                headlineText="Site Footer"
                :code="CmdCode"
                :sequence="sequence.nextSequenceValue()"
                :isFirstComponent="true">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <CmdSiteFooter>
                            <CmdListOfLinks :links="listOfLinks"
                                            :cmdHeadline="{headlineText: 'List of links', headlineLevel: 6}"
                            />
                            <CmdOpeningHours :openingHours="openingHours"
                                             :closed="true"
                                             :cmdHeadline="{headlineText: 'Opening hours', headlineLevel: 6}"
                                             textOpenClosed="Closed right now!"
                                             textHolidaysClosed="Closed on holidays"
                                             textMiscInfo="Miscellaneous information"
                            />
                            <CmdAddressData :addressData="addressData"
                                            :linkGoogleMaps="true"
                                            :cmdHeadline="{headlineText: 'Address data', headlineLevel: 6}"
                            />
                    </CmdSiteFooter>
                </teleport>
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdSiteFooter.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
        </template>
    </CmdTabs>
</template>