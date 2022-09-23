<template>
    <CmdWidthLimitationWrapper>
        <h2>VUE</h2>
        <p>
            <a href="https://vuejs.org/" target="vue" title="Open vuejs.org in a new tab">VUE</a> is the so called "Progressive JavaScript-Framework", but of course there are also other great ones out
            there.
            We decided to build our components (and this web site) with <a href="https://vuejs.org/guide/introduction.html" target="vue3" title="Open vue3 introduction in a new tab">VUE3</a>, because
            it fits best to our needs and requirements and geared perfectly with
            our use of
            <a href="#anchor-html">HTML</a>
            and
            <a href="#anchor-css">CSS</a>
            to create a full functional and still very flexible frontend.
        </p>
        <h3>Philosophy</h3>
        <p>To follow the recent way of building web sites and web projects by (re)using components, the structure and logic of VUE fits great to this aspect of modern coding.
            To have full support of the newest features and functionalities, we preferred the latest version 3. We think, as many other designer and developers out there too,
            that reacting to trends and technologies in its best way, happens by keeping up with long existing and proven standards on one hand,
            and being flexible and open for upcoming progress and features on the other hand.
        </p>
        <h3>Responsiveness, SEO and accessibility</h3>
        <p>To be as flexible and responsive for many devices as possible, the code is based on the following aspects:</p>
        <ul>
            <li>Taking advantage of VUE3 features</li>
            <li>Not creating native html-tags again as components</li>
            <li>Avoiding redundancies as far as possible</li>
            <li>Making many features of components configurable</li>
            <li>Making translations easy to replace and to add</li>
            <li>Making all used icons replaceable by properties</li>
            <li>No reinvention of native HTML-tags</li>
            <li>Scalability for different sizes of projects</li>
            <li>Customization of nested components possible</li>
        </ul>
    </CmdWidthLimitationWrapper>
</template>

<script>
// import components
import {CmdWidthLimitationWrapper} from "comand-component-library"

export default {
    name: "Html",
    components: {CmdWidthLimitationWrapper}
}
</script>