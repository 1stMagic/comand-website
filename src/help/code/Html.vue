<template>
        <CmdWidthLimitationWrapper>
            <CmdHeadline headlineLevel="1" headlineText="Code & Standards" />
            <a id="anchor-html"></a>
            <h2>HTML</h2>
            <p>
                While the basic styles and classes for HTML-elements are provided by the Frontend Framework,
                all aspects of modern and native HTML5-structure come together inside the components of the Component-Library.
            </p>
            <h3>Philosophy</h3>
            <p>Because all starts with a valid HTML-structure, it is one of our most important aspects of coding, to keep the HTML clean and semantic correct.<br />
                We try to code as responsive, seo-friendly and accessible as possible and do our best to be up-to-date to newest trends and features of still evolving HTML and browsers.
            </p>
            <h3>Responsiveness, SEO and accessibility</h3>
            <p>To be as flexible and responsive for many devices as possible, the code is based on the following aspects:</p>
            <ul>
                <li>Structure, styles and logic strictly separated</li>
                <li>Code is HTML5 and XHTML 1.0 (transitional) valid by w3c</li>
                <li>Native tags are always used if possible</li>
                <li>The structure is as simple as it can be</li>
                <li>As few classes as necessary were used</li>
                <li>Headline levels follow w3c-rules and can be configured inside components</li>
                <li>Form and navigations can be used by keyboard</li>
                <li>role- and aria-attributes for accessibility were added where necessary</li>
                <li>Many components allow content given by slot to customize your own HTML</li>
            </ul>
        </CmdWidthLimitationWrapper>
</template>

<script>
// import components
import {CmdHeadline} from "comand-component-library"
import {CmdWidthLimitationWrapper} from "comand-component-library"

export default {
    name: "Html",
    components: {
        CmdHeadline,
        CmdWidthLimitationWrapper
    }
}
</script>