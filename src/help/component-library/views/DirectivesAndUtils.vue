<template>
    <main>
        <CmdWidthLimitationWrapper>
            <h1>Directives & Utils of Component-Library</h1>
            <p>
                <a href="#directives"><strong>Directives</strong></a>
            </p>
            <ul>
                <li><a href="#directives-focus">focus</a></li>
                <li><a href="#directives-telephone">telephone</a></li>
            </ul>
            <p>
                <a href="#utils"><strong>Utils</strong></a>
            </p>
            <ul>
                <li><a href="#utils-common">common.js</a>
                    <ul>
                        <li><a href="#common-create-uuid">createUuid()</a></li>
                        <li><a href="#common-create-html-id">createHtmlId()</a></li>
                    </ul>
                </li>
                <li><a href="#utils-dom">dom.js</a></li>
                <li><a href="#utils-get-file-extension">getFileExtension.js</a></li>
                <li><a href="#utils-global-sequence">globalSequence.js</a></li>
                <li><a href="#utils-string">string.js</a></li>
            </ul>
            <hr/>
            <a id="directives"></a>
            <h2>Directives</h2>
            <p>Listed files can be found in Component-Library <code>/src/directives</code>.</p>
            <a id="directives-focus"></a>
            <h3>focus.js</h3>
            <dl>
                <dt>Description:</dt>
                <dd>Sets focus on specific form-elements, because autofocus-attribute will not work for subsequent rendered components.</dd>
                <dt>Used in:</dt>
                <dd>-</dd>
                <dt>Note:</dt>
                <dd>Must be used on form-elements (input, select, textarea).</dd>
            </dl>
            <h4>Usage</h4>
            <pre class="language-bash"><code class="language-bash" v-html="usageFocus"/></pre>
            <hr />
            <a id="directives-telephone"></a>
            <h3>telephone.js</h3>
            <dl>
                <dt>Description:</dt>
                <dd>Removes all all characters expect numbers from input-fields for phone numbers.</dd>
                <dt>Used in:</dt>
                <dd>-</dd>
                <dt>Note:</dt>
                <dd>Must be used on inputs with type="tel".</dd>
            </dl>
            <h4>Usage</h4>
            <pre class="language-bash"><code class="language-bash" v-html="usageTelephone"/></pre>
            <hr />
            <a id="utils"></a>
            <h2>Utils</h2>
            <p>Listed files can be found in Component-Library <code>/src/utils</code>.</p>
            <a id="utils-common"></a>
            <h3>common.js</h3>
            <a id="common-create-uuid"></a>
            <dl>
                <dt>Function:</dt>
                <dd>createUuid()</dd>
                <dt>Description:</dt>
                <dd>Creates a pseudo-Uuid using <code>Math.random()</code></dd>
                <dt>Used in:</dt>
                <dd><router-link :to="{name: 'cl-components'}">CmdFormElement</router-link></dd>
                <dt>Note:</dt>
                <dd>Must be used on form-elements (input, select, textarea).</dd>
            </dl>
            <a id="common-create-html-id"></a>
            <dl>
                <dt>Function:</dt>
                <dd><code>createHtmlId()</code></dd>
                <dt>Description:</dt>
                <dd>Creates a dynamic id to use in HTML based on the <a href="#common-create-uuid">createUuid()-function</a> and adding a <abbr>'cmd-'</abbr>-prefix to it.</dd>
                <dt>Used in:</dt>
                <dd>-</dd>
                <dt>Note:</dt>
                <dd>-</dd>
            </dl>

            <h3>dom.js</h3>
            <a id="utils-dom"></a>
            <dl>
                <dt>Function:</dt>
                <dd>getOffsetTop()</dd>
                <dt>Description:</dt>
                <dd>Adds <code>offsetTop</code> of given element and al its parent elements.</dd>
                <dt>Used in:</dt>
                <dd>Scrollspy-composable</dd>
                <dt>Note:</dt>
                <dd>-</dd>
            </dl>

            <h4>Usage</h4>
            <pre class="language-bash"><code class="language-bash" v-html="usageFocus"/></pre>
            <hr />
            <a id="utils-get-file-extension"></a>
            <h3>getFileExtension.js</h3>
            <dl>
                <dt>Function:</dt>
                <dd><code>getFileExtension()</code></dd>
                <dt>Description:</dt>
                <dd>Returns file extension of given filename or empty string if filename is empty/undefined.</dd>
                <dt>Used in:</dt>
                <dd><router-link :to="{name: 'cl-components'}">CmdUploadForm</router-link></dd>
                <dt>Note:</dt>
                <dd>Must be used on form-elements (input, select, textarea).</dd>
            </dl>
            <h4>Usage</h4>
            <pre class="language-bash"><code class="language-bash" v-html="usageGetFileExtension"/></pre>
            <hr />
            <a id="utils-global-sequence"></a>
            <h3>globalSequence.js</h3>
            <dl>
                <dt>Function:</dt>
                <dd><code>globalSequence()</code></dd>
                <dt>Description:</dt>
                <dd>Generates a sequence (i.e. for IDs)</dd>
                <dt>Used in:</dt>
                <dd>Tooltip.js-mixin</dd>
                <dt>Note:</dt>
                <dd>Can be used for every component.</dd>
            </dl>
            <h4>Usage</h4>
            <pre class="language-bash"><code class="language-bash" v-html="usageGlobalSequence"/></pre>
            <hr />
            <a id="utils-string"></a>
            <h3>string.js</h3>
            <dl>
                <dt>Function:</dt>
                <dd><code>capitalize()</code></dd>
                <dt>Description:</dt>
                <dd>Returns a capitalized version of a given string</dd>
                <dt>Used in:</dt>
                <dd>-</dd>
                <dt>Note:</dt>
                <dd>-</dd>
            </dl>
        </CmdWidthLimitationWrapper>
    </main>
</template>

<script>
import Prism from "prismjs"
import "prismjs/components/prism-bash"
import packageJson from "../../../../package.json"

import {CmdWidthLimitationWrapper} from "comand-component-library"

export default {
    name: "DirectivesAndUtils",
    components: {
        CmdWidthLimitationWrapper
    },
    computed: {
        usageFocus() {
            return Prism.highlight(
                "<!-- use focus-directive on input -->\n" +
                "<input v-focus />",
                Prism.languages["html"], "html")
        },
        usageTelephone() {
            return Prism.highlight(
                "<!-- use telephone-directive on input -->\n" +
                "<input type='tel' v-telephone />",
                Prism.languages["html"], "html")
        },
        usageGetFileExtension() {
            return Prism.highlight(
                "// import function in component\n" +
                "import {getFileExtension} from 'component-library'\n\n" +
                "const result = getFileExtension('filename.jpg')\n" +
                "// result equals 'jpg'",
                Prism.languages["javascript"], "javascript")
        },
        usageGlobalSequence() {
            return Prism.highlight(
                "// import function in component\n" +
                "import {globalSequence} from 'component-library'\n",
                Prism.languages["javascript"], "javascript")
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
                Prism.languages["css"], "css")
        },
        usage() {
            const usage = [
                "<template>",
                "    <CmdHeadline headlineText=\"My Headline\" headlineLevel=\"1\" />",
                "</template>",
                "",
                "<script>",
                "import {CmdHeadline} from \"comand-component-library\"",
                "export default {",
                "    components: {CmdHeadline}",
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