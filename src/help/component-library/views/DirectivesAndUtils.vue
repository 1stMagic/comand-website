<template>
    <main>
        <CmdWidthLimitationWrapper>
            <h1>Directives & Utils of Component-Library</h1>
            <div class="flex-container">
                <div>
                    <p>
                        <a href="#directives"><strong>Directives</strong></a>
                    </p>
                    <ul>
                        <li><a href="#directives-focus">focus</a></li>
                        <li><a href="#directives-scroll-padding">scrollPadding</a></li>
                        <li><a href="#directives-telephone">telephone</a></li>
                    </ul>
                </div>
                <div>
                    <p>
                        <a href="#utils"><strong>Utils</strong></a>
                    </p>
                    <ul>
                        <li><a href="#utils-common">common</a></li>
                        <li><a href="#utils-dom">dom</a></li>
                        <li><a href="#utils-get-file-extension">getFileExtension</a></li>
                        <li><a href="#utils-global-sequence">globalSequence</a></li>
                        <li><a href="#utils-string">string</a></li>
                    </ul>
                </div>
            </div>
            <hr/>
            <a id="directives"></a>
            <h2>Directives</h2>
            <p>Corresponding JS-Files can be found in Component-Library <pre>/src/directives</pre>.</p>
            <a id="directives-focus"></a>
            <h3>focus</h3>
            <dl>
                <dt>Description:</dt>
                <dd>Sets focus on specific form-elements.</dd>
                <dt>Used in:</dt>
                <dd><router-link :to="{name: 'cl-components'}">CmdFormElement</router-link></dd>
                <dt>Usage:</dt>
                <dd>Manually</dd>
                <dt>Note:</dt>
                <dd>Must be used on form-elements (input, select, textarea).</dd>
            </dl>
            <h4>Usage</h4>
            <pre class="language-bash"><code class="language-bash" v-html="usageFocus"/></pre>
            <hr />
            <a id="directives-scroll-padding"></a>
            <h3>scrollPadding</h3>
            <dl>
                <dt>Description:</dt>
                <dd>Sets scroll-padding to place anchors correctly below sticky header.</dd>
                <dt>Used on:</dt>
                <dd>&lt;html&gt;-tag by default</dd>
                <dt>Usage:</dt>
                <dd>Automatically</dd>
                <dt>Note:</dt>
                <dd>Is only necessary if a sticky element/header exist, that allows content to be scrolled behind.</dd>
            </dl>
            <hr/>
            <a id="directives-telephone"></a>
            <h3>telephone</h3>
            <dl>
                <dt>Description:</dt>
                <dd>Removes all special characters from input-fields for phone numbers.</dd>
                <dt>Used in:</dt>
                <dd><em>none</em></dd>
                <dt>Usage:</dt>
                <dd>Manually</dd>
                <dt>Note:</dt>
                <dd>Must be used on inputs with type="tel".</dd>
            </dl>
            <h4>Usage</h4>
            <pre class="language-bash"><code class="language-bash" v-html="usageTelephone"/></pre>
            <hr />
            <a id="utils"></a>
            <h2>Utils</h2>
            <p>Corresponding JS-Files can be found in Component-Library <pre>/src/utils</pre>.</p>
            <a id="utils-common"></a>
            <h3>common</h3>
            <dl>
                <dt>Description:</dt>
                <dd>Sets focus on specific form-elements.</dd>
                <dt>Used in:</dt>
                <dd><router-link :to="{name: 'cl-components'}">CmdFormElement</router-link></dd>
                <dt>Usage:</dt>
                <dd>Manually</dd>
                <dt>Note:</dt>
                <dd>Must be used on form-elements (input, select, textarea).</dd>
            </dl>
            <h4>Usage</h4>
            <pre class="language-bash"><code class="language-bash" v-html="usageFocus"/></pre>
            <hr />
            <a id="utils-get-file-extension"></a>
            <h3>getFileExtension</h3>
            <dl>
                <dt>Description:</dt>
                <dd>Returns file extension of given filename or empty string if filename is empty/undefined.</dd>
                <dt>Used in:</dt>
                <dd><router-link :to="{name: 'cl-components'}">CmdUploadForm</router-link></dd>
                <dt>Usage:</dt>
                <dd>Manually</dd>
                <dt>Note:</dt>
                <dd>Must be used on form-elements (input, select, textarea).</dd>
            </dl>
            <h4>Usage</h4>
            <pre class="language-bash"><code class="language-bash" v-html="usageGetFileExtension"/></pre>
            <hr />
            <a id="utils-global-sequence"></a>
            <h3>globalSequence</h3>
            <dl>
                <dt>Description:</dt>
                <dd>Generates a sequence (i.e. for IDs)</dd>
                <dt>Used in:</dt>
                <dd>Tooltip.js-mixin</dd>
                <dt>Usage:</dt>
                <dd>Manually</dd>
                <dt>Note:</dt>
                <dd>Can be used for every component.</dd>
            </dl>
            <h4>Usage</h4>
            <pre class="language-bash"><code class="language-bash" v-html="usageGlobalSequence"/></pre>
            <hr />
            <a id="utils-string"></a>
            <h3>string</h3>
            <dl>
                <dt>Description:</dt>
                <dd>Returns a capitalized version of a given string</dd>
                <dt>Used in:</dt>
                <dd>-</dd>
                <dt>Usage:</dt>
                <dd>Manually</dd>
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
                "# use focus-directive on input\n" +
                "<input @focus='doSomething' />",
                Prism.languages["bash"], "bash")
        },
        usageTelephone() {
            return Prism.highlight(
                "# use telephone-directive on input\n" +
                "<input type='tel' @telephone />",
                Prism.languages["bash"], "bash")
        },
        usageGetFileExtension() {
            return Prism.highlight(
                "# import util in component\n" +
                "import getFileExtension from 'component-library'\n\n", +
                "# use imported function as method (to use in template)\n" +
                "getFileExtension(filename) {\n" +
                "&tab; return getFileExtension(filename)\n" +
                "},",
                Prism.languages["bash"], "bash")
        },
        usageGlobalSequence() {
            return Prism.highlight(
                "# import util in component\n" +
                "import globalSequence from 'component-library'\n",
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