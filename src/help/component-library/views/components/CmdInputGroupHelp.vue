<script setup>
// import functions
import {ref} from "vue"
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "../../../../utils/common"

// import components
import {CmdFormElement} from "comand-component-library"
import {CmdInputGroup} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import inputGroupRadiobuttons from '../../assets/data/input-group-radiobuttons.json'
import inputGroupCheckboxes from '../../assets/data/input-group-checkboxes.json'
import CmdCode from "../../data/CmdInputGroupHelp"
import propertyDescriptions from "comand-component-library/src/documentation/generated/CmdInputGroupPropertyDescriptions.json"

// import composables
import {useSequence} from "comand-component-library"

// set consts for v-models
const inputGroupWithSlotValue = ref("radiobuttonValue1")
const inputGroupRadioValue = ref("website")
const inputGroupRadioReplacedValue = ref("email")
const inputGroupCheckboxValue = ref(["email"])
const inputGroupCheckboxReplacedValue = ref([])
const inputGroupRadioMultipleSwitch = ref("website")
const inputGroupCheckboxesMultipleSwitch = ref(["phone"])
const validationStatus = ref("")
const disabledStatus = ref(false)

const sequence = useSequence()

function setStatus(validationStatus, disabledStatus) {
    this.validationStatus = validationStatus
    this.disabledStatus = disabledStatus
}

function assignNewIds(data, counter) {
    return data.map(item => {
        const itemCopy = {...item}
        itemCopy.id = itemCopy.id + "-" + counter
        itemCopy.name = itemCopy.name + "-" + counter
        return itemCopy
    })
}
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ul class="list-status">
                <li><a href="#" @click.prevent="setStatus('', false)" :class="{'active' : validationStatus === '' && disabledStatus === false}"
                       id="status-default">Default</a></li>
                <li class="error">
                    <a href="#"
                       @click.prevent="setStatus('error', false)"
                       class="{'active' : validationStatus === 'error'}" id="status-error">Error</a>
                </li>
                <li><a href="#" @click.prevent="setStatus('warning', false)"
                       :class="{'active' : validationStatus === 'warning'}" id="status-warning">Warning</a></li>
                <li><a href="#" @click.prevent="setStatus('success', false)"
                       :class="{'active' : validationStatus === 'success'}" id="status-success">Success</a></li>
                <li><a href="#" @click.prevent="setStatus('info', false)"
                       :class="{'active' : validationStatus === 'info'}" id="status-info">Info</a></li>
                <li><a href="#" @click.prevent="setStatus('', true)"
                       :class="{'active' : disabledStatus === true}" id="status-disabled">Disabled</a></li>
            </ul>
            <ExampleSectionWrapper
                componentName="CmdInputGroup"
                headlineText="Input Group (radio, given by slot)"
                preHeadlineText="1"
                :code="CmdCode"
                :output="inputGroupWithSlotValue"
                :isFirstComponent="true">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <CmdInputGroup
                        labelText="Group label for radio-group given by slot"
                        :useSlot="true"
                        :status="validationStatus"
                        :disabled="disabledStatus"
                    >
                        <CmdFormElement
                            element="input"
                            labelText="Label for radiobutton #1"
                            type="radio"
                            id="input-group-radiobutton1"
                            name="radiogroup"
                            inputValue="radiobuttonValue1"
                            v-model="inputGroupWithSlotValue"
                        />
                        <CmdFormElement
                            element="input"
                            labelText="Label for radiobutton #2"
                            type="radio"
                            id="input-group-radiobutton2"
                            name="radiogroup"
                            inputValue="radiobuttonValue2"
                            v-model="inputGroupWithSlotValue"
                        />
                    </CmdInputGroup>
                </teleport>
            </ExampleSectionWrapper>
            <hr />
            <ExampleSectionWrapper
                componentName="CmdInputGroup"
                headlineText="Input Group (radio, given by property)"
                preHeadlineText="2"
                :code="CmdCode"
                :data="inputGroupRadiobuttons"
                :output="inputGroupRadioValue">
                    <CmdInputGroup
                        labelText="Grouplabel for radio-group given by property"
                        :inputElements="assignNewIds(inputGroupRadiobuttons, 1)"
                        inputTypes="radio"
                        v-model="inputGroupRadioValue"
                        :status="validationStatus"
                        :disabled="disabledStatus"
                    />
            </ExampleSectionWrapper>
            <hr />
            <ExampleSectionWrapper
                componentName="CmdInputGroup"
                headlineText="Input Group (radio, replaced-input-type)"
                preHeadlineText="3"
                :code="CmdCode"
                :data="inputGroupRadiobuttons"
                :output="inputGroupRadioReplacedValue">
                    <CmdInputGroup
                        labelText="Grouplabel for radio-group styled as replaced-input-type"
                        :inputElements="assignNewIds(inputGroupRadiobuttons, 2)"
                        inputTypes="radio"
                        :replaceInputType="true"
                        v-model="inputGroupRadioReplacedValue"
                        :status="validationStatus"
                        :disabled="disabledStatus"
                    />
            </ExampleSectionWrapper>
            <hr />
            <ExampleSectionWrapper
                componentName="CmdInputGroup"
                headlineText="Input Group (checkbox)"
                preHeadlineText="4"
                :code="CmdCode"
                :data="inputGroupCheckboxes"
                :output="inputGroupCheckboxValue">
                <CmdInputGroup
                    labelText="Grouplabel for checkbox-group"
                    :inputElements="assignNewIds(inputGroupCheckboxes, 1)"
                    inputTypes="checkbox"
                    v-model="inputGroupCheckboxValue"
                    :status="validationStatus"
                    :disabled="disabledStatus"
                />
            </ExampleSectionWrapper>
            <hr />
            <ExampleSectionWrapper
                componentName="CmdInputGroup"
                headlineText="Input Group (checkbox, replaced-input-type)"
                preHeadlineText="5"
                :code="CmdCode"
                :data="inputGroupCheckboxes"
                :output="inputGroupCheckboxReplacedValue">
                <CmdInputGroup
                    labelText="Grouplabel for checkbox-group styled as replaced-input-type"
                    :inputElements="assignNewIds(inputGroupCheckboxes, 2)"
                    inputTypes="checkbox"
                    :replaceInputType="true"
                    v-model="inputGroupCheckboxReplacedValue"
                    :status="validationStatus"
                    :disabled="disabledStatus"
                />
            </ExampleSectionWrapper>
            <hr />
            <ExampleSectionWrapper
                componentName="CmdInputGroup"
                headlineText="Input Group (radio, multiple-switch)"
                preHeadlineText="6"
                :code="CmdCode"
                :data="inputGroupRadiobuttons"
                :output="inputGroupRadioMultipleSwitch">
                <CmdInputGroup
                    labelText="Grouplabel for radio-group given by property styled as multiple-switch"
                    :inputElements="inputGroupRadiobuttons.map(item => ({...item, id: item.id + '-multi', name: item.name + '-multi'}))"
                    inputTypes="radio"
                    :multipleSwitch="true"
                    v-model="inputGroupRadioMultipleSwitch"
                    :status="validationStatus"
                    :disabled="disabledStatus"
                />
            </ExampleSectionWrapper>
            <hr />
            <ExampleSectionWrapper
                componentName="CmdInputGroup"
                headlineText="Input Group (radio, multiple-switch, stretched)"
                preHeadlineText="7"
                :code="CmdCode"
                :data="inputGroupCheckboxes"
                :output="inputGroupCheckboxesMultipleSwitch">
                <CmdInputGroup
                    labelText="Grouplabel for checkbox-group styled as multiple-switch (stretched horizontally)"
                    :inputElements="inputGroupCheckboxes"
                    inputTypes="checkbox"
                    :multipleSwitch="true"
                    v-model="inputGroupCheckboxesMultipleSwitch"
                    :stretchHorizontally="true"
                    :status="validationStatus"
                    :disabled="disabledStatus"
                />
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdInputGroup.props" :propertyDescriptions="propertyDescriptions"/>
        </template>
    </CmdTabs>
</template>