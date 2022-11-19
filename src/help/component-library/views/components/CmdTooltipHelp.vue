<script setup>
// import functions
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "../../../../utils/common"

// import components
import {CmdTooltip} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import {CmdHeadline} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdTooltipHelp"
import propertyDescriptions from "comand-component-library/src/documentation/generated/CmdTooltipPropertyDescriptions.json"

const propertyStructures = {
    iconClose: {
        show: "<boolean>",
        iconClass: "<string>",
        tooltip: "<string>"
    }
}
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper
                componentName="CmdTooltip"
                headlineText="Tooltip (opened by hover)"
                preHeadlineText="1"
                :code="CmdCode"
                :isFirstComponent="true">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <p>
                        <a href="#" @click.prevent id="hoverme">Hover me!</a><br/>
                    </p>
                    <CmdTooltip
                        related-id="hoverme">
                        Tooltip for hover
                    </CmdTooltip>
                </teleport>
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdTooltip"
                headlineText="Tooltip (opened (and closed) by click)"
                preHeadlineText="2"
                :code="CmdCode">
                <p>
                    <a href="#" @click.prevent id="clickme" title="Native tooltip">Click me!</a>
                </p>
                <CmdTooltip
                    related-id="clickme"
                    :toggle-visibility-by-click="true">
                    Tooltip for click
                </CmdTooltip>
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdTooltip.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
        </template>
    </CmdTabs>
</template>