<script setup>
// import functions
import {ref} from "vue"
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "comand-component-library/src/utils/common"

// import components
import {CmdFormElement} from "comand-component-library"
import {CmdInputGroup} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ViewCodeData from "../../components/ViewCodeData.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import inputGroupRadiobuttons from '../../assets/data/input-group-radiobuttons.json'
import inputGroupCheckboxes from '../../assets/data/input-group-checkboxes.json'
import CmdCode from "../../data/CmdInputGroupHelp"
import propertyDescriptions from "../../generated/CmdInputGroupPropertyDescriptions.json"

// import composables
import {useSequence} from "comand-component-library"

// set consts for v-models
const inputGroupWithSlotValue = ref("")
const inputGroupRadioValue = ref("")
const inputGroupRadioReplacedValue = ref("")
const inputGroupCheckbox = ref("")
const inputGroupCheckboxReplacedValue = ref("")
const inputGroupRadioMultipleSwitch = ref("")
const inputGroupCheckboxesMultipleSwitch = ref("")

const sequence = useSequence()
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper
                componentName="CmdInputGroup"
                headlineText="Input Group (radio, given by slot)"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode"
                :isFirstComponent="true">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <CmdInputGroup
                        labelText="Group label for radio-group given by slot"
                        :useSlot="true"
                    >
                        <CmdFormElement element="input"
                                        labelText="Label for radiobutton"
                                        type="radio"
                                        id="input-group-radiobutton1"
                                        name="radiogroup"
                                        inputValue="radiobuttonValue1"
                                        v-model="inputGroupWithSlotValue"/>
                        <CmdFormElement element="input"
                                        labelText="Label for radiobutton"
                                        type="radio"
                                        id="input-group-radiobutton2"
                                        name="radiogroup"
                                        inputValue="radiobuttonValue2"
                                        v-model="inputGroupWithSlotValue"/>
                    </CmdInputGroup>
                </teleport>
            </ExampleSectionWrapper>
            <hr />
            <ExampleSectionWrapper
                componentName="CmdInputGroup"
                headlineText="Input Group (radio, given by property)"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode">
                    <CmdInputGroup
                        labelText="Grouplabel for radio-group given by property"
                        :inputElements="inputGroupRadiobuttons"
                        inputTypes="radio"
                        v-model="inputGroupRadioValue"
                    />
            </ExampleSectionWrapper>
            <hr />
            <ExampleSectionWrapper
                componentName="CmdInputGroup"
                headlineText="Input Group (radio, replaced-input-type)"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode">
                    <CmdInputGroup
                        labelText="Grouplabel for radio-group styled as replaced-input-type"
                        :inputElements="inputGroupRadiobuttons"
                        inputTypes="radio"
                        :replaceInputType="true"
                        v-model="inputGroupRadioReplacedValue"

                    />
            </ExampleSectionWrapper>
            <hr />
            <ExampleSectionWrapper
                componentName="CmdInputGroup"
                headlineText="Input Group (checkbox)"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode">
                <CmdInputGroup
                    labelText="Grouplabel for checkbox-group"
                    :inputElements="inputGroupCheckboxes"
                    inputTypes="checkbox"
                    v-model="inputGroupCheckboxValue"
                />
            </ExampleSectionWrapper>
            <hr />
            <ExampleSectionWrapper
                componentName="CmdInputGroup"
                headlineText="Input Group (checkbox, replaced)"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode">
                <CmdInputGroup
                    labelText="Grouplabel for checkbox-group styled as replaced-input-type"
                    :inputElements="inputGroupCheckbox"
                    inputTypes="checkbox"
                    :replaceInputType="true"
                    v-model="inputGroupCheckboxReplacedValue"
                />
            </ExampleSectionWrapper>
            <hr />
            <ExampleSectionWrapper
                componentName="CmdInputGroup"
                headlineText="Input Group (radio, multiple-switch)"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode">
                <CmdInputGroup
                    labelText="Grouplabel for radio-group given by property styled as multiple-switch"
                    :inputElements="inputGroupRadiobuttons.map(item => ({...item, id: item.id + '-multi', name: item.name + '-multi'}))"
                    inputTypes="radio"
                    :multipleSwitch="true"
                    v-model="inputGroupRadioMultipleSwitch"
                />
            </ExampleSectionWrapper>
            <hr />
            <ExampleSectionWrapper
                componentName="CmdInputGroup"
                headlineText="Input Group (radio, multiple-switch, stretched)"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode">
                <CmdInputGroup
                    labelText="Grouplabel for checkbox-group styled as multiple-switch (stretched horizontally)"
                    :inputElements="inputGroupCheckboxes"
                    inputTypes="checkbox"
                    :multipleSwitch="true"
                    v-model="inputGroupCheckboxesMultipleSwitch"
                    :stretchHorizontally="true"
                />
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdInputGroup.props" :propertyDescriptions="propertyDescriptions"/>
        </template>
    </CmdTabs>
</template>