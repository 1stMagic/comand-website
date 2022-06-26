<script setup>
// import functions
import {ref} from "vue"
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "comand-component-library/src/utils/common"

// import components
import {CmdFormElement} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import {CmdCustomHeadline} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ViewCodeData from "../../components/ViewCodeData.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdFormElementHelp"
import selectOptions from '../../assets/data/select-options.json'
import datalistOptions from '../../assets/data/datalist-options.json'
import propertyDescriptions from "../../generated/CmdFormElementPropertyDescriptions.json"

// import composables
import {useSequence} from "comand-component-library"

const sequence = useSequence()

const propertyStructures = {
    datalistOptions: {
        "id": "<string>",
        "options": "<array>"
    },
    nativeButton: {
        "text": "<string>",
        "icon": {
            "show": "<boolean>",
            "iconClass": "<string>",
            "position": "<string>",
            "tooltip": "<string>"
        }
    },
    selectOptions: [
        {
            "text": "<string>",
            "value": "<string>"
        }
    ]
}

// set consts for v-models
const inputTypeText = ref("")
const inputTypeNumber = ref("")
const inputTypeColor = ref("")
const inputTypeDate = ref("")
const inputTypeDatetimeLocal = ref("")
const inputTypePassword = ref("")
const inputTypeRange = ref(50)
const inputTypeSearch = ref("")
const checkbox = ref(false)
const replacedCheckbox = ref(false)
const radio = ref("radiobutton1")
const replacedRadio = ref("radiobutton2")
const select = ref("2")
const datalist = ref("Option 2")
const textarea = ref("")
const formElementStatus = ref("")

// TODO: formElementStatus
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Input (type text)"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode"
                :output="inputTypeText"
                :isFirstComponent="true">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <CmdFormElement
                        labelText="Input (type text):"
                        element="input"
                        type="text"
                        :status="formElementStatus"
                        placeholder="Type in text"
                        tooltipText="This is a tooltip"
                        :useCustomTooltip="false"
                        v-model="inputTypeText"
                    />
                </teleport>
            </ExampleSectionWrapper>

            <hr/>

            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Input (type number)"
                :sequence="sequence.nextSequenceValue()"
                :output="inputTypeNumber"
                :code="CmdCode">
                <CmdFormElement
                    labelText="Input (type number):"
                    element="input"
                    type="number"
                    :status="formElementStatus"
                    placeholder="Type in number"
                    tooltipText="This is a tooltip"
                    :useCustomTooltip="false"
                    v-model="inputTypeNumber"
                />
            </ExampleSectionWrapper>

            <hr/>

            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Input (type color)"
                :sequence="sequence.nextSequenceValue()"
                :output="inputTypeColor"
                :code="CmdCode">
                <CmdFormElement
                    labelText="Input (type color):"
                    element="input"
                    type="color"
                    :status="formElementStatus"
                    tooltipText="This is a tooltip"
                    :useCustomTooltip="false"
                    v-model="inputTypeColor"
                />
            </ExampleSectionWrapper>

            <hr/>

            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Input (type date)"
                :sequence="sequence.nextSequenceValue()"
                :output="inputTypeDate"
                :code="CmdCode">
                <CmdFormElement
                    labelText="Input (type date):"
                    element="input"
                    type="date"
                    :status="formElementStatus"
                    tooltipText="This is a tooltip"
                    :useCustomTooltip="false"
                    v-model="inputTypeDate"
                />
            </ExampleSectionWrapper>

            <hr/>

            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Input (type datetime-local)"
                :sequence="sequence.nextSequenceValue()"
                :output="inputTypeDatetimeLocal"
                :code="CmdCode">
                <CmdFormElement
                    labelText="Input (type datetime-local):"
                    element="input"
                    type="datetime-local"
                    :status="formElementStatus"
                    tooltipText="This is a tooltip"
                    :useCustomTooltip="false"
                    v-model="inputTypeDatetimeLocal"
                />
            </ExampleSectionWrapper>

            <hr/>

            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Input (type password)"
                :sequence="sequence.nextSequenceValue()"
                :output="inputTypePassword"
                :code="CmdCode">
                <CmdFormElement
                    labelText="Input (type password):"
                    element="input"
                    type="password"
                    fieldIconClass="icon-security-settings"
                    :status="formElementStatus"
                    placeholder="Type in password"
                    tooltipText="This is a tooltip"
                    :useCustomTooltip="false"
                    v-model="inputTypePassword"
                />
            </ExampleSectionWrapper>

            <hr/>

            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Input (type file)"
                :sequence="sequence.nextSequenceValue()"
                :output="inputTypeFile"
                :code="CmdCode">
                <CmdFormElement
                    labelText="Input (type file):"
                    element="input"
                    type="file"
                    :status="formElementStatus"
                    tooltipText="This is a tooltip"
                    :useCustomTooltip="false"
                    v-model="inputTypeFile"
                />
            </ExampleSectionWrapper>

            <hr/>

            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Input (type range)"
                :sequence="sequence.nextSequenceValue()"
                :output="inputTypeRange"
                :code="CmdCode">
                <CmdFormElement
                    labelText="Input (type range):"
                    element="input"
                    type="range"
                    :status="formElementStatus"
                    :useCustomTooltip="false"
                    v-model="inputTypeRange"
                />
            </ExampleSectionWrapper>

            <hr/>
            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Input (type search)"
                :sequence="sequence.nextSequenceValue()"
                :output="inputTypeSearch"
                :code="CmdCode">
                <CmdFormElement
                    element="input"
                    type="search"
                    :status="formElementStatus"
                    :useCustomTooltip="false"
                    v-model="inputTypeSearch"
                />
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Input (type submit)"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode">
                <CmdFormElement
                    :nativeButton="{ text: 'Submit', icon: {iconClass: 'icon-edit', show: true}}"
                    element="button"
                    type="submit"
                    :status="formElementStatus"
                    :useCustomTooltip="false"
                />
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Input (type button)"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode">
                <CmdFormElement
                    :nativeButton="{ icon: {iconClass: 'icon-edit', show: true, tooltip: 'I am a tooltip'}}"
                    element="button"
                    type="button"
                    :status="formElementStatus"
                    :useCustomTooltip="false"
                />
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Input (type checkbox)"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode"
                :output="checkbox">
                <CmdFormElement
                    labelText="Input (type checkbox)"
                    element="input"
                    type="checkbox"
                    :status="formElementStatus"
                    tooltipText="This is a tooltip"
                    :useCustomTooltip="false"
                    v-model="checkbox"
                />
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Input (type radio)"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode"
                :output="radio">
                <CmdFormElement
                    labelText="Input #1 (type radio)"
                    element="input"
                    type="radio"
                    name="radio-group"
                    id="example-radio1"
                    :status="formElementStatus"
                    tooltipText="This is a tooltip"
                    :useCustomTooltip="false"
                    v-model="radio"
                    inputValue="radiobutton1"
                />
                <CmdFormElement
                    labelText="Input #2 (type radio)"
                    element="input"
                    type="radio"
                    name="radio-group"
                    id="example-radio2"
                    :status="formElementStatus"
                    tooltipText="This is a tooltip"
                    :useCustomTooltip="false"
                    v-model="radio"
                    inputValue="radiobutton2"
                />
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Input (type checkbox (replaced))"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode"
                :output="replacedCheckbox">
                <CmdFormElement
                    labelText="Input (type checkbox)"
                    element="input"
                    type="checkbox"
                    :replace-input-type="true"
                    :status="formElementStatus"
                    tooltipText="This is a tooltip"
                    :useCustomTooltip="false"
                    v-model="replacedCheckbox"
                />
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Input (type radio (replaced))"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode"
                :output="replacedRadio">
                <CmdFormElement
                    labelText="Input #1 (type radio)"
                    element="input"
                    type="radio"
                    :replace-input-type="true"
                    name="replaced-radio-group"
                    id="example-replaced-radio1"
                    :status="formElementStatus"
                    tooltipText="This is a tooltip"
                    :useCustomTooltip="false"
                    v-model="replacedRadio"
                    inputValue="radiobutton1"
                />
                <CmdFormElement
                    labelText="Input #2 (type radio)"
                    element="input"
                    type="radio"
                    name="replaced-radio-group"
                    :replace-input-type="true"
                    id="example-replaced-radio2"
                    :status="formElementStatus"
                    tooltipText="This is a tooltip"
                    :useCustomTooltip="false"
                    v-model="replacedRadio"
                    inputValue="radiobutton2"
                />
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Select"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode"
                :output="select">
                <CmdFormElement
                    labelText="Selectbox"
                    element="select"
                    required="required"
                    :status="formElementStatus"
                    v-model="select"
                    :selectOptions="selectOptions"
                />
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Datalist"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode"
                :output="datalist">
                <CmdFormElement
                    labelText="Datalist:"
                    element="input"
                    type="text"
                    :status="formElementStatus"
                    placeholder="Type in option"
                    :datalist="datalistOptions"
                    v-model="datalist"
                    tooltipText="This is a tooltip"
                />
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Textarea"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode"
                :output="textarea">
                <CmdFormElement
                    labelText="Textarea:"
                    element="textarea"
                    :status="formElementStatus"
                    placeholder="Type in text"
                    tooltipText="This is a tooltip"
                    v-model="textarea"
                />
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdFormElement.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
        </template>
    </CmdTabs>
</template>