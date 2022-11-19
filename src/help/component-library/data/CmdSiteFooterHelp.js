export default [`<CmdSiteFooter>
    <CmdListOfLinks 
        :links="listOfLinks"
        :cmdHeadline="{headlineText: 'List of links', headlineLevel: 6}"
    />
    <CmdOpeningHours 
        :openingHours="openingHours"
        :closed="true"
        :cmdHeadline="{headlineText: 'Opening hours', headlineLevel: 6}"
        textOpen="Open right now!"
        textClosed="Closed right now!"
        textMiscInfo="Miscellaneous information"
    />
    <CmdAddressData 
        :addressData="addressData"
        :linkGoogleMaps="true"
        :cmdHeadline="{headlineText: 'Address data', headlineLevel: 6}"
    />
</CmdSiteFooter>`
]