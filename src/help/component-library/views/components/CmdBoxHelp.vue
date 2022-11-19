<script setup>
// import functions
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "../../../../utils/common"
import {currentSequenceValue} from "comand-component-library/src/utils/globalSequence"

// import components
import {CmdBox} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdBoxHelp"
import boxesProduct from "../../assets/data/box-product.json"
import boxesUser from "../../assets/data/box-user.json"
import propertyDescriptions from "comand-component-library/src/documentation/generated/CmdBoxPropertyDescriptions.json"

const propertyStructures = {
    product: {
        "name": "<string>",
        "img": {
            "src": "<string>",
            "alt": "<string>"
        },
        "articleNumber": "<string>",
        "price": "<number>",
        "description": "<string>",
        "new": "<boolean>",
        "discount": "<number>"
    },
    user: {
        "name": "<string>",
        "img": {
            "src": "<string>",
            "alt": "<string>"
        },
        "profession": "<string>",
        "position": "<string>",
        "description": "<string>",
        "links": [
            {
                "href": "<string>",
                "target": "<string>",
                "iconClass": "<string>",
                "title": "<string>"
            }
        ]
    }
}

function clickedOnProduct(event) {
    console.log("event", event)
}
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper
                componentName="CmdBox"
                headlineText="Box 'content' (content given by property)"
                preHeadlineText="1"
                :code="CmdCode"
                :isFirstComponent="true"
            >
                    <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                        <CmdBox
                            :cmdHeadline="{
                            headlineText: 'Headline given by property',
                            headlineLevel: 5
                        }"
                            textBody="Content given by property"
                        />
                    </teleport>
            </ExampleSectionWrapper>
            <hr/>
                <ExampleSectionWrapper
                    componentName="CmdBox"
                    headlineText="Box 'content' (collapsible)"
                    :code="CmdCode"
                    preHeadlineText="2"
                >
                        <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                            <CmdBox
                                :cmdHeadline="{
                                headlineText: 'Headline given by property',
                                headlineLevel: 5
                            }"
                                textBody="Content given by property"
                                :collapsible="true"
                            />
                        </teleport>
                </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdBox"
                headlineText="Box 'content' (content given by slot)"
                :code="CmdCode"
                preHeadlineText="3"
            >
                <CmdBox :useSlots="['header', 'body', 'footer']">
                    <template v-slot:header>
                        <h5>
                            Headline given by slot
                        </h5>
                    </template>
                    <template v-slot:body>
                        <p class="padding">
                            Content given by slot
                        </p>
                    </template>
                    <template v-slot:footer>
                        <p>
                            Footer given by slot
                        </p>
                    </template>
                </CmdBox>
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdBox"
                headlineText="Box 'product'"
                :code="CmdCode"
                :data="boxesProduct[0]"
                preHeadlineText="4"
            >
                <CmdBox
                    boxType="product"
                    :product="boxesProduct[0]"
                    :cmdHeadline="{ headlineLevel: 5}"
                    @click="clickedOnProduct"
                />
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdBox"
                headlineText="Box 'user'"
                :code="CmdCode"
                :data="boxesUser[0]"
                preHeadlineText="5"
            >
                <CmdBox
                    boxType="user"
                    :user="boxesUser[0]"
                    :cmdHeadline="{ headlineLevel: 5}"
                />
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdBox.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
        </template>
    </CmdTabs>
</template>