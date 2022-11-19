<script setup>
// import functions
import {ref} from "vue"
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "../../../../utils/common"

// import components
import {CmdFormElement} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdFormElementHelp"
import selectOptions from '../../assets/data/select-options.json'
import datalistOptions from '../../assets/data/datalist-options.json'
import propertyDescriptions from "comand-component-library/src/documentation/generated/CmdFormElementPropertyDescriptions.json"

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
const toggleSwitchCheckbox = ref(true)
const toggleSwitchWithLabelsCheckbox = ref(true)
const toggleSwitchWithColoredLabelsCheckbox = ref(true)
const toggleSwitchRadio = ref("1")
const select = ref("2")
const datalist = ref("Option 2")
const textarea = ref("")
const validationStatus = ref("")
const disabledStatus = ref(false)

function setStatus(validationStatus, disabledStatus) {
    this.validationStatus = validationStatus
    this.disabledStatus = disabledStatus
}
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ul class="list-status">
                <li><a href="#" @click.prevent="setStatus('', false)" :class="{'active' : validationStatus === '' && disabledStatus === false}"
                       id="status-default">Default</a>
                </li>
                <li class="error">
                    <a href="#" @click.prevent="setStatus('error', false)"
                                     :class="{'active' : validationStatus === 'error'}" id="status-error">Error</a>
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
                componentName="CmdFormElement"
                headlineText="Input (type text)"
                preHeadlineText="1"
                :code="CmdCode"
                :output="inputTypeText"
                :isFirstComponent="true">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <CmdFormElement
                        labelText="Input (type text):"
                        element="input"
                        type="text"
                        :status="validationStatus"
                        :disabled="disabledStatus"
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
                preHeadlineText="2"
                :output="inputTypeNumber"
                :code="CmdCode">
                <CmdFormElement
                    labelText="Input (type number):"
                    element="input"
                    type="number"
                    :status="validationStatus"
                    :disabled="disabledStatus"
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
                preHeadlineText="3"
                :output="inputTypeColor"
                :code="CmdCode">
                <CmdFormElement
                    labelText="Input (type color):"
                    element="input"
                    type="color"
                    :status="validationStatus"
                    :disabled="disabledStatus"
                    tooltipText="This is a tooltip"
                    :useCustomTooltip="false"
                    v-model="inputTypeColor"
                />
            </ExampleSectionWrapper>

            <hr/>

            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Input (type date)"
                preHeadlineText="4"
                :output="inputTypeDate"
                :code="CmdCode">
                <CmdFormElement
                    labelText="Input (type date):"
                    element="input"
                    type="date"
                    :status="validationStatus"
                    :disabled="disabledStatus"
                    tooltipText="This is a tooltip"
                    :useCustomTooltip="false"
                    v-model="inputTypeDate"
                />
            </ExampleSectionWrapper>

            <hr/>

            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Input (type datetime-local)"
                preHeadlineText="5"
                :output="inputTypeDatetimeLocal"
                :code="CmdCode">
                <CmdFormElement
                    labelText="Input (type datetime-local):"
                    element="input"
                    type="datetime-local"
                    :status="validationStatus"
                    :disabled="disabledStatus"
                    tooltipText="This is a tooltip"
                    :useCustomTooltip="false"
                    v-model="inputTypeDatetimeLocal"
                />
            </ExampleSectionWrapper>

            <hr/>

            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Input (type password)"
                preHeadlineText="6"
                :output="inputTypePassword"
                :code="CmdCode">
                <CmdFormElement
                    labelText="Input (type password):"
                    element="input"
                    type="password"
                    fieldIconClass="icon-security-settings"
                    :status="validationStatus"
                    :disabled="disabledStatus"
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
                preHeadlineText="7"
                :output="inputTypeFile"
                :code="CmdCode">
                <CmdFormElement
                    labelText="Input (type file):"
                    element="input"
                    type="file"
                    :status="validationStatus"
                    :disabled="disabledStatus"
                    tooltipText="This is a tooltip"
                    :useCustomTooltip="false"
                    v-model="inputTypeFile"
                />
            </ExampleSectionWrapper>

            <hr/>

            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Input (type range)"
                preHeadlineText="8"
                :output="inputTypeRange"
                :code="CmdCode">
                <CmdFormElement
                    labelText="Input (type range):"
                    element="input"
                    type="range"
                    :status="validationStatus"
                    :disabled="disabledStatus"
                    :useCustomTooltip="false"
                    v-model="inputTypeRange"
                />
            </ExampleSectionWrapper>

            <hr/>
            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Input (type search)"
                preHeadlineText="9"
                :output="inputTypeSearch"
                :code="CmdCode">
                <CmdFormElement
                    element="input"
                    type="search"
                    labelText="Search"
                    :showLabel="false"
                    placeholder="Search"
                    :status="validationStatus"
                    :disabled="disabledStatus"
                    :useCustomTooltip="false"
                    v-model="inputTypeSearch"
                />
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Input (type button)"
                preHeadlineText="10"
                :code="CmdCode">
                <CmdFormElement
                    :nativeButton="{ icon: {iconClass: 'icon-edit', show: true, tooltip: 'I am a tooltip'}}"
                    element="button"
                    type="button"
                    :status="validationStatus"
                    :disabled="disabledStatus"
                    :useCustomTooltip="false"
                />
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Input (type checkbox)"
                preHeadlineText="11"
                :code="CmdCode"
                :output="checkbox">
                <CmdFormElement
                    labelText="Input (type checkbox)"
                    element="input"
                    type="checkbox"
                    :status="validationStatus"
                    :disabled="disabledStatus"
                    :useCustomTooltip="false"
                    v-model="checkbox"
                />
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Input (type radio)"
                preHeadlineText="12"
                :code="CmdCode"
                :output="radio">
                <CmdFormElement
                    labelText="Input #1 (type radio)"
                    element="input"
                    type="radio"
                    name="radio-group"
                    id="example-radio1"
                    :status="validationStatus"
                    :disabled="disabledStatus"
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
                    :status="validationStatus"
                    :disabled="disabledStatus"
                    :useCustomTooltip="false"
                    v-model="radio"
                    inputValue="radiobutton2"
                />
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Input (type checkbox (replaced))"
                preHeadlineText="13"
                :code="CmdCode"
                :output="replacedCheckbox">
                <CmdFormElement
                    labelText="Input (type checkbox (replaced))"
                    element="input"
                    type="checkbox"
                    :replace-input-type="true"
                    :status="validationStatus"
                    :disabled="disabledStatus"
                    :useCustomTooltip="false"
                    v-model="replacedCheckbox"
                />
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Input (type radio (replaced))"
                preHeadlineText="14"
                :code="CmdCode"
                :output="replacedRadio">
                <div class="flex-container no-flex">
                    <CmdFormElement
                        labelText="Input #1 (type radio (replaced))"
                        element="input"
                        type="radio"
                        :replace-input-type="true"
                        name="replaced-radio-group"
                        id="example-replaced-radio1"
                        :status="validationStatus"
                        :disabled="disabledStatus"
                        :useCustomTooltip="false"
                        v-model="replacedRadio"
                        inputValue="radiobutton1"
                    />
                    <CmdFormElement
                        labelText="Input #2 (type radio (replaced))"
                        element="input"
                        type="radio"
                        name="replaced-radio-group"
                        :replace-input-type="true"
                        id="example-replaced-radio2"
                        :status="validationStatus"
                        :disabled="disabledStatus"
                        :useCustomTooltip="false"
                        v-model="replacedRadio"
                        inputValue="radiobutton2"
                    />
                </div>
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Input (type checkbox (toggle-switch))"
                preHeadlineText="15"
                :code="CmdCode"
                :output="toggleSwitchCheckbox">
                <CmdFormElement
                    labelText="Input (type checkbox, toggle-switch)"
                    element="input"
                    type="checkbox"
                    :toggleSwitch="true"
                    name="toggle-switch-checkbox-group"
                    id="example-toggle-switch-checkbox"
                    :status="validationStatus"
                    :disabled="disabledStatus"
                    :useCustomTooltip="false"
                    v-model="toggleSwitchCheckbox"
                />
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Input (type checkbox (toggle-switch with labels))"
                preHeadlineText="16"
                :code="CmdCode"
                :output="toggleSwitchWithLabelsCheckbox">
                <CmdFormElement
                    labelText="Input (type checkbox, toggle-switch with labels)"
                    element="input"
                    type="checkbox"
                    :toggleSwitch="true"
                    onLabel="Active"
                    offLabel="Inactive"
                    name="toggle-switch-with-labels-checkbox-group"
                    id="example-toggle-switch-with-labels-checkbox"
                    :status="validationStatus"
                    :disabled="disabledStatus"
                    :useCustomTooltip="false"
                    v-model="toggleSwitchWithLabelsCheckbox"
                />
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Input (type checkbox (toggle-switch with colored labels))"
                preHeadlineText="17"
                :code="CmdCode"
                :output="toggleSwitchWithColoredLabelsCheckbox">
                <CmdFormElement
                    labelText="Input (type checkbox, toggle-switch with colored labels)"
                    element="input"
                    type="checkbox"
                    :toggleSwitch="true"
                    onLabel="Yes"
                    offLabel="No"
                    :colored="true"
                    name="toggle-switch-with-colored-labels-checkbox-group"
                    id="example-toggle-switch-with-colored-labels-checkbox"
                    :status="validationStatus"
                    :disabled="disabledStatus"
                    :useCustomTooltip="false"
                    v-model="toggleSwitchWithColoredLabelsCheckbox"
                />
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Input (type radio (toggle-switch))"
                preHeadlineText="18"
                :code="CmdCode"
                :output="toggleSwitchRadio">
                <div class="flex-container no-flex">
                    <CmdFormElement
                        labelText="Input #1 (type radio, toggle-switch)"
                        element="input"
                        type="radio"
                        :toggleSwitch="true"
                        name="toggle-switch-radio-group"
                        id="example-toggle-switch-radio1"
                        :status="validationStatus"
                        :disabled="disabledStatus"
                        :useCustomTooltip="false"
                        v-model="toggleSwitchRadio"
                        inputValue="1"
                    />
                    <CmdFormElement
                        labelText="Input #2 (type radio, toggle-switch)"
                        element="input"
                        type="radio"
                        :toggleSwitch="true"
                        name="toggle-switch-radio-group"
                        id="example-toggle-switch-radio2"
                        :status="validationStatus"
                        :disabled="disabledStatus"
                        :useCustomTooltip="false"
                        v-model="toggleSwitchRadio"
                        inputValue="2"
                    />
                </div>
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Select"
                preHeadlineText="19"
                :code="CmdCode"
                :output="select">
                <CmdFormElement
                    labelText="Selectbox"
                    element="select"
                    required="required"
                    :status="validationStatus"
                    :disabled="disabledStatus"
                    v-model="select"
                    :selectOptions="selectOptions"
                />
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Datalist"
                preHeadlineText="20"
                :code="CmdCode"
                :output="datalist">
                <CmdFormElement
                    labelText="Datalist:"
                    element="input"
                    type="text"
                    :status="validationStatus"
                    :disabled="disabledStatus"
                    placeholder="Type in option"
                    :datalist="datalistOptions"
                    v-model="datalist"
                />
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdFormElement"
                headlineText="Textarea"
                preHeadlineText="21"
                :code="CmdCode"
                :output="textarea">
                <CmdFormElement
                    labelText="Textarea:"
                    element="textarea"
                    :status="validationStatus"
                    :disabled="disabledStatus"
                    placeholder="Type in text"
                    v-model="textarea"
                />
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdFormElement.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
        </template>
    </CmdTabs>
</template>