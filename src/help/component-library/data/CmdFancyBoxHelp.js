export default [`<a 
    href="#" 
    @click.prevent="showFancyBox('text','Some text', null, 'Fancybox with content')"
>
  Open Fancybox with text
</a>
<CmdFancyBox 
  :allowEscapeKey="false"
>
  Content
</CmdFancyBox>`,
`<a href="#"
    @click.prevent="showFancyBox('image', '/media/images/content-images/landscape-large.jpg', 'Alternative text')"
    title="Open Fancybox with large image"
>
    Open Fancybox with image
</a>`
]