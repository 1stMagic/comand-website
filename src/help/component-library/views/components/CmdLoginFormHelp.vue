<script setup>
// import functions
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "comand-component-library/src/utils/common"

// import components
import {CmdLoginForm} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ViewCodeData from "../../components/ViewCodeData.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdLoginFormHelp"
import propertyDescriptions from "comand-component-library/src/documentation/generated/CmdLoginFormPropertyDescriptions.json"

// import composables
import {useSequence} from "comand-component-library"

const sequence = useSequence()

const propertyStructures = {
    cmdHeadlineLoginForm: {
        show: "<boolean>",
        text: "<string>",
        level: "<number>"
    },
    cmdHeadlineSendLoginForm: {
        show: "<boolean>",
        text: "<string>",
        level: "<number>"
    },
    cmdFormElementUsername: {
        labelText: "<string>",
        placeholder: "<string>",
        innerIconClass: "<string>",
        name: "<string>",
        id: "<string>"
    },
    cmdFormElementPassword: {
        labelText: "<string>",
        placeholder: "<string>",
        innerIconClass: "<string>",
        name: "<string>",
        id: "<string>"
    },
    cmdFormElementSendLogin: "-",
    options: {
        forgotPassword: {
            icon: {
                show: "<boolean>",
                iconClass: "<string>",
                tooltip: "<string>",
            },
            text: "<string>",
        },
        createAccount: {
            linkType: "href | router | button",
            path: "<string>",
            icon: {
                show: "<boolean>",
                iconClass: "<string>",
                tooltip: "<string>",
            },
            text: "<string>",
        },
        backToLoginForm: {
            icon: {
                show: "<boolean>",
                iconClass: "<string>",
                tooltip: "<string>",
            },
            text: "<string>",
        }
    },
    buttons: {
        login: {
            linkType: "<string>",
            type: "<string>",
            path: "<string>",
            text: "<string>",
            primary: "<boolean>",
            icon: {
                show: "<boolean>",
                iconClass: "<string>",
                tooltip: "<string>",
            }
        },
        sendLogin: {
            linkType: "<string>",
            type: "<string>",
            path: "<string>",
            text: "<string>",
            primary: "<boolean>",
            icon: {
                show: "<boolean>",
                iconClass: "<string>",
                tooltip: "<string>",
            }
        }
    }
}

const loginData = {}
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <ExampleSectionWrapper
                componentName="CmdLoginForm"
                headlineText="Login Form"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode"
                :isFirstComponent="true">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <CmdLoginForm
                        :cmdHeadline="{headlineText: 'Login', headlineLevel: 5}"
                        v-model="loginData"
                        v-focus
                    />
                </teleport>
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdLoginForm.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
        </template>
    </CmdTabs>
</template>