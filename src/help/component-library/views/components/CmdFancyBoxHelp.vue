<script setup>
// import functions
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "../../../../utils/common"
import {openFancyBox} from "comand-component-library"

// import components
import {CmdFancyBox} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdFancyBoxHelp"
import propertyDescriptions from "comand-component-library/src/documentation/generated/CmdFancyBoxPropertyDescriptions.json"

const propertyStructures = {
    fancyboxOptions: {
        closeIcon: {
            "iconClass": "<string>",
            "tooltip": "<string>"
        },
        printButtons: {
            "color": {
                "iconClass": "<string>",
                "tooltip": "<string>"
            },
            "grayscale": {
                "iconClass": "<string>",
                "tooltip": "<string>"
            }
        }
    }
}

function showFancyBox(type, content, altText, ariaLabelText) {
    const defaultOptions = {
        ariaLabelText: ariaLabelText
    }
    if (type === 'text') {
        openFancyBox({...defaultOptions, content: content})
    } else if (type === 'image') {
        openFancyBox({...defaultOptions, url: content, altText: altText})
    }
}
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper
                componentName="CmdFancyBox"
                headlineText="Fancybox with text"
                preHeadlineText="1"
                :code="CmdCode"
                :isFirstComponent="true"
            >
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <div>
                        <a href="#"
                           @click.prevent="showFancyBox('text','Some text', null, 'Fancybox with content')"
                        >
                            Open Fancybox with text
                        </a>
                        <CmdFancyBox
                            :allowEscapeKey="false"
                        >
                            Content
                        </CmdFancyBox>
                    </div>
                </teleport>
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdFancyBox"
                headlineText="Fancybox with image"
                preHeadlineText="2"
                :code="CmdCode"
            >
                <a href="#"
                   @click.prevent="showFancyBox('image', '/media/images/content-images/landscape-large.jpg', 'Alternative text')"
                   title="Open Fancybox with large image"
                >
                    Open Fancybox with image
                </a>
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdFancyBox.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
        </template>
    </CmdTabs>
</template>