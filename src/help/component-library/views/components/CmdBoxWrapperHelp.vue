<script setup>
// import functions
import {ref, computed} from "vue"
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "comand-component-library/src/utils/common"

// import components
import {CmdBox} from "comand-component-library"
import {CmdBoxWrapper} from "comand-component-library"
import {CmdFormElement} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ViewCodeData from "../../components/ViewCodeData.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdBoxWrapperHelp"
import boxProduct from '../../assets/data/box-product.json'
import boxUser from '../../assets/data/box-user.json'
import boxUserFakeData from '../../assets/data/box-user-fake-data.json'
import propertyDescriptions from "comand-component-library/src/documentation/generated/CmdAddressDataPropertyDescriptions.json"

// import composables
import {useSequence} from "comand-component-library"

const sequence = useSequence()

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

const fakeData = ref(false)

const userData = computed(() => {
    return fakeData.value ? boxUserFakeData : boxUser
})
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper
                componentName="CmdBoxWrapper"
                headlineText="Box Wrapper with Box 'content' using Flexbox"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode"
                :isFirstComponent="true">
                    <CmdBoxWrapper :useFlexbox="true">
                        <CmdBox v-for="index in 14" :key="index" textBody="Content" :cmd-headline="{headlineText: 'Headline ' + index, headlineLevel: 5}" />
                    </CmdBoxWrapper>
            </ExampleSectionWrapper>
            <hr />
            <ExampleSectionWrapper componentName="CmdBoxWrapper" headlineText="Box Wrapper with Box 'content (collapsible)' using the default grid" :sequence="sequence.nextSequenceValue()" :code="CmdCode">
                    <CmdBoxWrapper :allowTogglingCollapsingBoxes="true" v-slot="slotprops">
                        <CmdBox v-for="index in 7"
                                :key="index"
                                textBody="Content"
                                :collapsible="true"
                                :collapsingBoxesOpen="slotprops.collapsingBoxesOpen"
                                :cmd-headline="{
                                    headlineText: 'Headline ' + index,
                                    headlineLevel: 4
                                }"
                        />
                    </CmdBoxWrapper>
            </ExampleSectionWrapper>
            <hr />
            <ExampleSectionWrapper
                componentName="CmdBoxWrapper"
                headlineText="Box Wrapper with single box open at once using the default grid"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode">
                    <CmdBoxWrapper v-slot="slotprops">
                        <CmdBox v-for="index in 7"
                                :key="index"
                                textBody="Content"
                                :collapsible="true"
                                :collapsingBoxesOpen="slotprops.currentOpenBox === index || (slotprops.currentOpenBox === 0 && index === 1)"
                                :cmd-headline="{
                                    headlineText: 'Headline ' + index,
                                    headlineLevel: 3
                                }"
                                @toggle-collapse="slotprops.boxToggled(index, $event)"
                        />
                    </CmdBoxWrapper>
            </ExampleSectionWrapper>
            <hr />
            <ExampleSectionWrapper componentName="CmdBoxWrapper" headlineText="Box Wrapper with Box 'content' using a custom grid" :sequence="sequence.nextSequenceValue()" :code="CmdCode">
                    <CmdBoxWrapper :boxesPerRow="[5, 2, 1]">
                        <CmdBox v-for="index in 7" :key="index" textBody="Content" :cmd-headline="{headlineText: 'Headline ' + index, headlineLevel: 4}" />
                    </CmdBoxWrapper>
            </ExampleSectionWrapper>
            <hr />
            <ExampleSectionWrapper componentName="CmdBoxWrapper"
                                   headlineText="Box Wrapper with Box 'product' using a custom grid"
                                   :sequence="sequence.nextSequenceValue()"
                                   :code="CmdCode"
                                   :data="boxProduct">
                    <CmdBoxWrapper :boxesPerRow="[5, 2, 1]">
                        <CmdBox v-for="index in boxProduct.length" :key="index" boxType="product" :product="boxProduct[index - 1]" :cmdHeadline="{headlineLevel: 5}" />
                    </CmdBoxWrapper>
            </ExampleSectionWrapper>
            <hr />
            <ExampleSectionWrapper
                componentName="CmdBoxWrapper"
                headlineText="Box Wrapper with Box 'user' using a custom grid"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode"
                :data="userData"
            >
                <CmdFormElement element="input" type="checkbox" :toggleSwitch="true" labelText="Show fake data for user-profiles" v-model="fakeData" />
                    <CmdBoxWrapper :boxesPerRow="[5, 2, 1]">
                        <CmdBox v-for="index in userData.length" :key="index" boxType="user" :user="userData[index - 1]" :cmdHeadline="{headlineLevel: 5}" />
                    </CmdBoxWrapper>
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdBoxWrapper.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures" />
        </template>
    </CmdTabs>
</template>