export default [`
 <CmdBoxWrapper :useFlexbox="true">
    <CmdBox v-for="index in 14" :key="index" textBody="Content" :cmd-headline="{headlineText: 'Headline ' + index, headlineLevel: 3}" />
</CmdBoxWrapper>`,

    `<CmdBoxWrapper :allowTogglingCollapsingBoxes="true" v-slot="slotprops">
    <CmdBox v-for="index in 7"
    :key="index"
textBody="Content"
:collapsible="true"
:collapsingBoxesOpen="slotprops.collapsingBoxesOpen"
:cmd-headline="{
headlineText: 'Headline ' + index,
    headlineLevel: 3
}"
/>
</CmdBoxWrapper>`,

    `<CmdBoxWrapper v-slot="slotprops">
    <CmdBox v-for="index in 7"
            :key="index"
            textBody="Content"
            :collapsible="true"
            :collapsingBoxesOpen="slotprops.currentOpenBox === index || (slotprops.currentOpenBox === 0 && index === 1)"
            :cmd-headline="{
                headlineText: 'Headline ' + index,
                headlineLevel: 3
            }"
            @toggle-collapse="slotprops.boxToggled(index, $event)"
    />
</CmdBoxWrapper>`,

    `<CmdBoxWrapper :boxesPerRow="[5, 2, 1]">
    <CmdBox v-for="index in 7" :key="index" textBody="Content" :cmd-headline="{headlineText: 'Headline ' + index, headlineLevel: 3}" />
    </CmdBoxWrapper>`,

    `<CmdBoxWrapper :boxesPerRow="[5, 2, 1]">
    <CmdBox v-for="index in boxProduct.length" :key="index" boxType="product" :product="boxProduct[index - 1]" :cmdHeadline="{headlineLevel: 5}" />
    </CmdBoxWrapper>`,

    `<CmdBoxWrapper :boxesPerRow="[5, 2, 1]">
    <CmdBox v-for="index in boxUser.length" :key="index" boxType="user" :user="boxUser[index - 1]" :cmdHeadline="{headlineLevel: 5}" />
    </CmdBoxWrapper>`
]