export default [
    `<CmdFormElement
    labelText="Input (type text):"
    element="input"
    type="text"
    :status="formElementStatus"
    placeholder="Type in text"
    tooltipText="This is a tooltip"
    :useCustomTooltip="false"
/>`,
    `<CmdFormElement
    labelText="Input (type number):"
    element="input"
    type="number"
    :status="formElementStatus"
    placeholder="Type in number"
    tooltipText="This is a tooltip"
    :useCustomTooltip="false"
/>`,
    `<CmdFormElement
    labelText="Input (type color):"
    element="input"
    type="color"
    :status="formElementStatus"
    tooltipText="This is a tooltip"
    :useCustomTooltip="false"
/>`,
    `<CmdFormElement
    labelText="Input (type date):"
    element="input"
    type="date"
    :status="formElementStatus"
    tooltipText="This is a tooltip"
    :useCustomTooltip="false"
/>`,
    `<CmdFormElement
    labelText="Input (type datetime-local):"
    element="input"
    type="datetime-local"
    :status="formElementStatus"
    tooltipText="This is a tooltip"
    :useCustomTooltip="false"
/>`,
    `<CmdFormElement
    labelText="Input (type password):"
    element="input"
    type="password"
    :status="formElementStatus"
    placeholder="Type in password"
    tooltipText="This is a tooltip"
    :useCustomTooltip="false"
/>`,
    `<CmdFormElement
    labelText="Input (type file):"
    element="input"
    type="file"
    :status="formElementStatus"
    tooltipText="This is a tooltip"
    :useCustomTooltip="false"
/>`,
    `<CmdFormElement
    labelText="Input (type range):"
    element="input"
    type="range"
    :status="formElementStatus"
    :useCustomTooltip="false"
    v-model="range"
/>`,
`<CmdFormElement
    labelText="Search"
    element="input"
    type="search"
    :showLabel="false"
    placeholder="Search"
    :status="validationStatus"
    :disabled="disabledStatus"
    :useCustomTooltip="false"
    v-model="inputTypeSearch"
/>`,
 `<CmdFormElement
    :nativeButton="{ 
        text: 'Submit', 
        icon: {
          iconClass: 'icon-edit', 
          show: true
        }
    }"
    element="button"
    type="submit"
    :status="formElementStatus"
    :useCustomTooltip="false"
/>`,
    `<CmdFormElement
    :nativeButton="{ 
      icon: {
        iconClass: 'icon-edit', 
        show: true, 
        tooltip: 'I am a tooltip'
      }
    }"
    element="button"
    type="button"
    :status="formElementStatus"
    :useCustomTooltip="false"
/>`, `<CmdFormElement
    labelText="Input (type checkbox)"
    element="input"
    type="checkbox"
    :replace-input-type="true"
    :status="formElementStatus"
    :useCustomTooltip="false"
    v-model="checkbox"
/>`,
`<CmdFormElement
    labelText="Input #1 (type radio)"
    element="input"
    type="radio"
    name="radio-group"
    id="example-radio1"
    :status="formElementStatus"
    :useCustomTooltip="false"
    v-model="radio"
    inputValue="Radiobutton1"
/>
<CmdFormElement
    labelText="Input #2 (type radio)"
    element="input"
    type="radio"
    name="radio-group"
    id="example-radio2"
    :status="formElementStatus"
    :useCustomTooltip="false"
    v-model="radio"
    inputValue="Radiobutton2"
/>`,
`<CmdFormElement
    labelText="Input (type checkbox (replaced))"
    element="input"
    type="checkbox"
    :replace-input-type="true"
    :status="validationStatus"
    :disabled="disabledStatus"
    :useCustomTooltip="false"
    v-model="replacedCheckbox"
/>`,
`<CmdFormElement
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
/>`,
`<CmdFormElement
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
/>`,
`<CmdFormElement
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
/>`,
`<CmdFormElement
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
/>`,
`<CmdFormElement
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
/>`,
`<CmdFormElement
    labelText="Selectbox"
    element="select"
    required="required"
    :status="validationStatus"
    :disabled="disabledStatus"
    v-model="select"
    :selectOptions="selectOptions"
/>`,
`<CmdFormElement
    labelText="Datalist:"
    element="input"
    type="text"
    :status="validationStatus"
    :disabled="disabledStatus"
    placeholder="Type in option"
    :datalist="datalistOptions"
    v-model="datalist"
/>`,
`<CmdFormElement
    labelText="Textarea:"
    element="textarea"
    :status="validationStatus"
    :disabled="disabledStatus"
    placeholder="Type in text"
    v-model="textarea" 
/>`
]