export default [`<CmdInputGroup
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
</CmdInputGroup>`,
`<CmdInputGroup
    labelText="Grouplabel for radio-group given by property"
    :inputElements="assignNewIds(inputGroupRadiobuttons, 1)"
    inputTypes="radio"
    v-model="inputGroupRadioValue"
    :status="validationStatus"
    :disabled="disabledStatus"
/>`,
`<CmdInputGroup
    labelText="Grouplabel for radio-group styled as replaced-input-type"
    :inputElements="assignNewIds(inputGroupRadiobuttons, 2)"
    inputTypes="radio"
    :replaceInputType="true"
    v-model="inputGroupRadioReplacedValue"
    :status="validationStatus"
    :disabled="disabledStatus"
/>`,
`<CmdInputGroup
    labelText="Grouplabel for checkbox-group"
    :inputElements="assignNewIds(inputGroupCheckboxes, 1)"
    inputTypes="checkbox"
    v-model="inputGroupCheckboxValue"
    :status="validationStatus"
    :disabled="disabledStatus"
/>`,
`<CmdInputGroup
    labelText="Grouplabel for checkbox-group styled as replaced-input-type"
    :inputElements="assignNewIds(inputGroupCheckboxes, 2)"
    inputTypes="checkbox"
    :replaceInputType="true"
    v-model="inputGroupCheckboxReplacedValue"
    :status="validationStatus"
    :disabled="disabledStatus"
/>`,
`<CmdInputGroup
    labelText="Grouplabel for radio-group given by property styled as multiple-switch"
    :inputElements="inputGroupRadiobuttons.map(item => ({...item, id: item.id + '-multi', name: item.name + '-multi'}))"
    inputTypes="radio"
    :multipleSwitch="true"
    v-model="inputGroupRadioMultipleSwitch"
    :status="validationStatus"
    :disabled="disabledStatus"
/>`,
`<CmdInputGroup
    labelText="Grouplabel for checkbox-group styled as multiple-switch (stretched horizontally)"
    :inputElements="inputGroupCheckboxes"
    inputTypes="checkbox"
    :multipleSwitch="true"
    v-model="inputGroupCheckboxesMultipleSwitch"
    :stretchHorizontally="true"
    :status="validationStatus"
    :disabled="disabledStatus"
/>`
]