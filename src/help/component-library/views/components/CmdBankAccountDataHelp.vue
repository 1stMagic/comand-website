<script setup>
// import functions
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "../../../../utils/common"

// import components
import {CmdBankAccountData} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

import * as componentPropertiesFunctions from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdBankAccountDataHelp"
import bankAccountData from "../../assets/data/bank-account-data.json"
import propertyDescriptions from "comand-component-library/src/documentation/generated/CmdBankAccountDataPropertyDescriptions.json"

const propertyStructures = {
    accountData: [
        {
            "text": "<string>",
            "value": "<string>",
            "allowCopy": "<boolean>"
        }
    ],
    cmdHeadline: "Description for CmdHeadline",
    iconCopy: {
        "iconClass": "<string>",
        "tooltip": "<string>"
    }
}
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper
                componentName="CmdBankAccountData"
                headlineText="Band Account Data"
                :isFirstComponent="true"
                :code="CmdCode"
                preHeadlineText="1"
                :data="bankAccountData">
                    <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                        <CmdBankAccountData
                            :account-data="bankAccountData"
                            :allow-copy-by-click="true"
                            :cmd-headline="{ headlineText: 'Bank Account', headlineLevel: 5}"
                        />
                    </teleport>
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdBankAccountData.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
            <a id="accountData"></a>
            <h4>accountData</h4>
            <dl>
                <dt>Type:</dt>
                <dd>{{ componentPropertiesFunctions.getPropertyTypeName(CmdBankAccountData.props.accountData.type) }}</dd>
                <dt>Default:</dt>
                <dd v-if="componentPropertiesFunctions.getPropertyDefault(CmdBankAccountData.props.accountData.default)">
                    {{ componentPropertiesFunctions.getPropertyDefault(CmdBankAccountData.props.accountData.default) }}
                </dd>
                <dd v-else><em>(none)</em></dd>
                <dt>Required:</dt>
                <dd>
                    <span :class="componentPropertiesFunctions.getIcon(CmdBankAccountData.props.accountData.required)"
                          :title="componentPropertiesFunctions.getTooltip(CmdBankAccountData.props.accountData.required)">
                    </span>
                </dd>
                <dt>Structure:</dt>
                <dd>
                    <pre>{{ componentPropertiesFunctions.getPropertyStructure(propertyStructures, "accountData") }}</pre>
                </dd>
                <dt>Description:</dt>
                <dd>{{ componentPropertiesFunctions.getPropertyDescription(propertyDescriptions, "accountData") }}</dd>
            </dl>
            <h5>Description for structure</h5>
            <dl>
                <dt>text:</dt>
                <dd>Description for text</dd>
                <dt>value:</dt>
                <dd>Description for value</dd>
                <dt>allowCopy:</dt>
                <dd>Description for allowCopy</dd>
            </dl>
        </template>
    </CmdTabs>
</template>