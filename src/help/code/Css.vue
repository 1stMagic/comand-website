<template>
        <CmdWidthLimitationWrapper>
            <a id="anchor-css"></a>
            <h2>CSS</h2>
            <p>
                All CoManD-products share the same CSS. The foundation is provided by Frontend Framework, which uses pure CSS3.
                The Component-Library uses styles from the Frontend Framework in SCSS and some additional styles (i.e. for vue-transitions).
            </p>
            <h3>Philosophy</h3>
            <p>The CSS is desktop first and follows the concept of graceful degradation, which means, it supports newest CSS3 for desktop browsers first.
                Media Queries handle responsiveness for mobile devices. Polyfills and vendor-specific code (if required) handle different browser behaviors as far as possible.
                All current versions of major browsers (Chrome, Edge, Firefox, Opera and Safari (iOS only)) are supported. We try to support new features and new browser-versions
                as soon as possible.
            </p>
            <h3>Responsiveness</h3>
            <p>To be as flexible and responsive for many devices as possible, the code is based on the following aspects:</p>
            <ul>
                <li>Structure, styles and logic strictly separated</li>
                <li>Only relative units like root-em (rem), percentage (%) or fractions (fr) are used (no pixels (px))</li>
                <li>All logos are vector-files (SVG)</li>
                <li>Different version of pixel-graphics used for different screen-resolutions</li>
                <li>Iconfont for scalable, crisp icons</li>
                <li>Usage of CSS-Flexbox and CSS-Grid</li>
                <li>No floats/clears used (clearfix still supported)</li>
                <li>Global definition of font-styles and colors</li>
                <li>All colors defined in HSL/HSLA</li>
            </ul>
            <h3>Variables</h3>
            <p>All CoManD-products use native CSS-variables <code>(--variable)</code>, so the Frontend Framework can be used inside the Component Library.</p>
            <p>The only need of SCSS-variables <code>($variable)</code> is required for <a href="#anchor-media-query-breakpoints">Media Query Breakpoints</a>.</p>
            <a id="anchor-media-query-breakpoints"></a>
            <h3>Media Query Breakpoints</h3>
            <p>
                The media query breakpoints to deliver CSS for different screen resolutions and they are defined inside <code>breakpoints.css</code>
                from Frontend Framework and inside <code>variables.scss</code> from Component-Library.<br/>
                If you want to use different or additional breakpoints, do not import these files to avoid overwriting all media query styles and just include
                your own file with custom media queries instead. The default breakpoints for the desktop-first layout are defined as written below:
            </p>
            <table class="full-width">
                <thead>
                <tr>
                    <th>Resolution name</th>
                    <th>Resolution in pixels</th>
                    <th>Defined in Frontend Framework</th>
                    <th>Defined in Component Library</th>
                    <th>Additional information</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Large/Default<sup>*</sup></td>
                    <td>1024px-unlimited</td>
                    <td>framework.css</td>
                    <td>-</td>
                    <td>No special media query (default styles)</td>
                </tr>
                <tr>
                    <td>Medium</td>
                    <td>601px-1023px</td>
                    <td>breakpoints.css</td>
                    <td>variables.scss</td>
                    <td>scss-variables are used inside components only</td>
                </tr>
                <tr>
                    <td>Small</td>
                    <td>0px-600px</td>
                    <td>breakpoints.css</td>
                    <td>variables.scss</td>
                    <td>scss-variables are used inside components only</td>
                </tr>
                </tbody>
            </table>
            <p>
                <sup>*</sup>Additionally a global maximum width is defined as css-variable (--max-width) in <code>framework.css</code> to avoid far spreading content
                (end especially text) to improve usability and readability on screens with high resolution.
            </p>
            <hr/>
            <section id="grid">
                <h3>The grid</h3>
                <p>The grid is a modern CSS-grid provided by Frontend Framework and is based on twelve columns.</p>
                <h4>Regular Grid</h4>
                <div class="grid-container-create-columns" id="grid-regular">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>10</div>
                    <div>11</div>
                    <div>12</div>
                </div>

                <h4>Grid based on default classes</h4>
                <div class="grid-container-create-columns" id="grid-default">
                    <div class="grid-small-item">Small item</div>
                    <div class="grid-large-item">Large item</div>
                </div>

                <h4>Grid two fractions (with same width)</h4>
                <div class="grid-container-create-columns" id="grid-two-fractions">
                    <div class="grid-item-half-width">grid-item</div>
                    <div class="grid-item-half-width">grid-item</div>
                </div>

                <h4>Complex Grid</h4>
                <div class="grid-container" id="grid-complex">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>10</div>
                    <div>11</div>
                    <div>12</div>
                </div>
            </section>
        </CmdWidthLimitationWrapper>
</template>

<script>
// import components
import {CmdWidthLimitationWrapper} from "comand-component-library"

export default {
    name: "Css",
    components: {CmdWidthLimitationWrapper}
}
</script>

<style lang="scss">
#grid {
    [id^="grid"] div {
        border: var(--default-border);
        text-align: center;
    }
}

.cmd-width-limitation-wrapper:nth-of-type(odd) {
    background: var(--default-background-color);
}
</style>