<script setup>
// import functions
import {tabProps, tabHandlers} from "../../tabs"
import {isFrameMode} from "comand-component-library/src/utils/common"

// import components
import {CmdUploadForm} from "comand-component-library"
import {CmdTabs} from "comand-component-library"
import {CmdCustomHeadline} from "comand-component-library"
import ExampleSectionWrapper from "../../components/ExampleSectionWrapper.vue"
import ViewCodeData from "../../components/ViewCodeData.vue"
import ComponentProperties from "../../components/ComponentProperties.vue"

// import example-data
import CmdCode from "../../data/CmdUploadFormHelp"
import propertyDescriptions from "../../generated/CmdUploadFormPropertyDescriptions.json"

// import composables
import {useSequence} from "comand-component-library"

const sequence = useSequence()

const propertyStructures = {
    uploadOptions: {
        url: "<string>",
        filesParam: "<string>",
        additionalParams: "<object>",
    }
}
</script>

<template>
    <CmdTabs v-show="!isFrameMode()" v-bind="tabProps" :active-tab="tabProps.activeTab" v-on="tabHandlers">
        <template v-slot:tab-content-0>
            <h2>Component</h2>
            <ExampleSectionWrapper
                componentName="CmdUploadForm"
                headlineText="Upload Form (advanced mode)"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode"
                :isFirstComponent="true">
                <teleport to="#frame-component-target" :disabled="!isFrameMode()">
                    <CmdUploadForm
                        :cmdCustomHeadline="{headlineText: 'Select files to upload', headlineLevel: 5}"
                        :enableDragAndDrop="true"
                        :allowedFileExtensions="['gif','png','jpg']"
                        :allowMultipleFileUploads="true"
                        :uploadOptions="{url: 'some url'}"
                    />
                </teleport>
            </ExampleSectionWrapper>
            <hr/>
            <ExampleSectionWrapper
                componentName="CmdUploadForm"
                headlineText="Upload Form (simple mode)"
                :sequence="sequence.nextSequenceValue()"
                :code="CmdCode">
                <CmdUploadForm
                    :advancedMode="false"
                    :maxFileUploadSize="5242880"
                    :enableDragAndDrop="true"
                    :allowedFileExtensions="['pdf']"
                    :allowMultipleFileUploads="false"
                    :uploadOptions="{url: 'some url'}"
                />
            </ExampleSectionWrapper>
        </template>
        <template v-slot:tab-content-1>
            <ComponentProperties :properties="CmdUploadForm.props" :propertyDescriptions="propertyDescriptions" :propertyStructures="propertyStructures"/>
        </template>
    </CmdTabs>
</template>