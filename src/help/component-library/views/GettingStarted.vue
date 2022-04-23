<template>
    <main>
    <h1>Getting Started</h1>
    <h2>What is CoManD Component Library</h2>
    <p>Description <strong><a href="https://vuejs.org/" target="vue"><span class="icon-export"></span><span>VUE3</span></a></strong></p>
    <hr />
        <h2>Installation <small>(with <a href="https://www.npmjs.com/" target="npm" title="Open npmjs.com in new tab"><span class="icon-export"></span><span>npm</span></a>)</small></h2>
        <h3>Install CoManD-dependencies</h3>
        <pre class="language-bash"><code class="language-bash" v-html="installationComand" /></pre>
        <h3>Install additional dependencies</h3>
        <pre class="language-bash"><code class="language-bash" v-html="installationDependencies" /></pre>
    <h2>CSS-Setup</h2>
        <p>Adding frontend-framework- and component-library-styles in main.js is required!</p>
        <pre class="language-javascript"><code class="language-javascript" v-html="cssSetup" /></pre>
        <hr />
        <h2>Usage</h2>
        <pre class="language-javascript"><code class="language-javascript" v-html="usage" /></pre>
        <hr />
    <h2>Download on GitHub</h2>
    <a href="#">Link to GitHub</a>
    </main>
</template>

<script>
import Prism from "prismjs"
import "prismjs/components/prism-bash"

export default {
    name: "GettingStarted.vue",
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
                "/* import css from comand-frontend-framework */",
                "import 'comand-frontend-framework/src/assets/css/normalize.css'",
                "import 'comand-frontend-framework/src/assets/css/framework.css'",
                "import 'comand-frontend-framework/src/assets/css/framework-iconfont.css'",
                "",
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
                "import 'comand-component-library/dist/comand-component-library.css'"
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
        }
    }
}
</script>

<style scoped>

</style>