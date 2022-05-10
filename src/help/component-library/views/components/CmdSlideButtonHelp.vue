<script setup>
import {ref} from "vue"
// import functions
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "comand-component-library/src/utils/common"

// import components
import {CmdSlideButton} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ViewCodeData from "../../components/ViewCodeData.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdSlideButtonHelp"
import propertyDescriptions from "../../generated/CmdSlideButtonPropertyDescriptions.json"

// import composables
import {useSequence} from "comand-component-library"

const sequence = useSequence()

const propertyStructures = {
    slideButtons: {
        prev: {
            iconClass: "<string>",
            tooltip: "<string>"
        },
        next: {
            iconClass: "<string>",
            tooltip: "<string>"
        }
    }
}

const currentItem = ref(1)
const totalItems = 4

function showPrevItem() {
    if (currentItem.value === 1) {
        currentItem.value = totalItems
    } else {
        currentItem.value--
    }
}

function showNextItem() {
    if (currentItem.value === totalItems) {
        currentItem.value = 1
    } else {
        currentItem.value++
    }
}
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper
                componentName="CmdSlideButton"
                headlineText="Slide Button"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode"
                :isFirstComponent="true">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <div class="flex-container" id="slider">
                        <CmdSlideButton
                            slideButtonType="prev"
                            @click.prevent="showPrevItem"
                        />
                        <p>
                            Content {{ currentItem }}
                        </p>
                        <CmdSlideButton
                            slideButtonType="next"
                            @click.prevent="showNextItem"
                        />
                    </div>
                </teleport>
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdSlideButton.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
        </template>
    </CmdTabs>
</template>

<style lang="scss" scoped>
.cmd-slide-button {
    &.button {
        position: relative;
    }
}

#slider {
    align-items: center;
    border: var(--default-border);
    border-style: dotted;

    p {
        margin: 0;
        text-align: center;
    }
}
</style>