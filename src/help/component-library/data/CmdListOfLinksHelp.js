export default [
`<CmdListOfLinks 
    :links="listOfLinks" 
    :cmdHeadline="{
      text: 'Links', 
      level: 5
    }" 
/>`,
`<CmdListOfLinks 
    :links="listOfLinks" 
    orientation="horizontal" 
    :cmdHeadline="{
        headlineText: 'Links', 
        headlineLevel: 5
    }" 
/>`,
`<CmdListOfLinks 
    :links="listOfLinks" 
    :styleAsBox="true" 
    :cmdHeadline="{
      headlineText: 'Links', 
      headlineLevel: 5
    }"
/>`,
`<CmdListOfLinks 
  :links="listOfLinksSectionAnchors" 
  :sectionAnchors="true"
/>`
]