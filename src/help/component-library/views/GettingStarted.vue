<template>
    <main>
        <CmdWidthLimitationWrapper>
            <h1>Getting Started</h1>
            <h2>What is CoManD Component Library?</h2>
            <p>The Component Library is a free package including dozens of configurable, responsive and accessible components of often used elements (i.e. boxes, form elements, navigations) in webprojects.
                It is based on <a href="#">CoManD Frontend Framework</a>, which is a required dependency. The Component Library will not work without it.
                Besides the HTML5 and CSS3 from the Frontend Framework, the Component Library itself uses SCSS and
                <a href="https://vuejs.org/" target="vue"><span class="icon-export"></span><span>VUE3</span></a>.
                It also provides an <router-link :to="{name: 'iconfonts'}">additional iconfont</router-link>.
             </p>
            <hr/>
            <h2>Installation <small>(with <a class="link-with-icon" href="https://www.npmjs.com/" target="npm" title="Open npmjs.com in new tab"><span class="icon-export"></span><span>npm</span></a>)</small></h2>
            <h3>Install CoManD-dependencies</h3>
            <pre class="language-bash"><code class="language-bash" v-html="installationComand"/></pre>
            <h3>Install additional dependencies</h3>
            <pre class="language-bash"><code class="language-bash" v-html="installationDependencies"/></pre>
            <hr />
            <h2>CSS-Setup</h2>
            <p><strong>Adding imports for frontend-framework- and component-library-styles in main.js is required for your project!</strong></p>
            <pre class="language-javascript"><code class="language-javascript" v-html="cssSetup"/></pre>
            <hr/>
            <h2>Usage</h2>
            <pre class="language-javascript"><code class="language-javascript" v-html="usage"/></pre>
            <hr/>
            <h2>Get project on GitHub</h2>
            <dl>
                <dt>Latest version:</dt>
                <dd>{{ clVersion }}</dd>
            </dl>
            <a href="https://github.com/1stMagic/comand-website" target="git"><span class="icon-export"></span><span>Link to GitHub</span></a>
        </CmdWidthLimitationWrapper>
    </main>
</template>

<script>
import Prism from "prismjs"
import "prismjs/components/prism-bash"
import packageJson from "../../../../package.json"

import {CmdWidthLimitationWrapper} from "comand-component-library"

export default {
    name: "GettingStarted",
    components: {
        CmdWidthLimitationWrapper
    },
    computed: {
        installationComand() {
            return Prism.highlight(
                "# install frontend-framework (required)\n npm install comand-frontend-framework\n\n" +
                "# install component-library\n npm install comand-component-library",
                Prism.languages["bash"], "bash")
        },
        installationDependencies() {
            return Prism.highlight(
                "# install scss-preprocessor (i.e. 'sass')\n" +
                "npm install sass",
                Prism.languages["bash"], "bash")
        },
        cssSetup() {
            const cssImports = [
                "/* begin imports css from comand-frontend-framework ---------------------------------------------------------------------------------------- */",
                "/* import normalize to set same default styles for all browsers - REQUIRED */",
                "import 'comand-frontend-framework/src/assets/css/normalize.css'",
                "",
                "/* import framework-styles - REQUIRED */",
                "import 'comand-frontend-framework/src/assets/css/framework.css'",
                "",
                "/* import breakpoints - OPTIONAL */",
                "import 'comand-frontend-framework/src/assets/css/breakpoints.css'",
                "",
                "/* import framework-iconfont - OPTIONAL */",
                "import 'comand-frontend-framework/src/assets/css/framework-iconfont.css'",
                "/* end imports css from comand-frontend-framework ---------------------------------------------------------------------------------------- */",
                "",
                "/* begin imports css from comand-component-library ---------------------------------------------------------------------------------------- */",
                "/* import additional iconfont containing company-logos */",
                "import 'comand-component-library/src/assets/styles/logos-iconfont.css'",
                "",
                "/* import css for global-styles */",
                "import 'comand-component-library/src/assets/styles/global-styles.scss'",
                "",
                " /* import css for global transitions */",
                "import 'comand-component-library/src/assets/styles/transitions.scss'",
                "",
                "/* import generated css from components */",
                "import 'comand-component-library/dist/comand-component-library.css'",
                "/* end imports css from comand-component-library ---------------------------------------------------------------------------------------- */"
            ]
            return Prism.highlight(
                cssImports.join("\n"),
                Prism.languages["javascript"], "javascript")
        },
        usage() {
            const usage = [
                "<template>",
                "    <CmdCustomHeadline headlineText=\"My Headline\" headlineLevel=\"1\" />",
                "</template>",
                "",
                "<script>",
                "import {CmdCustomHeadline} from \"comand-component-library\"",
                "export default {",
                "    components: {CmdCustomHeadline}",
                "}",
                "<\/script>"
            ]
            return Prism.highlight(usage.join("\n"), Prism.languages["javascript"], "javascript")
        },
        clVersion() {
            return packageJson.dependencies["comand-component-library"].replace("^", "")
        }
    }
}
</script>

<style scoped>

</style>