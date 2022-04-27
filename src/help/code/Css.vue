<template>
    <main>
        <CmdWidthLimitationWrapper>
     <h1>CSS</h1>
            <p>
                All CoManD-products share the same CSS. The foundation is provided by <a href="">Frontend Framework</a>, which uses pure CSS3.
                The <a href="">Component Library</a> uses styles from the Frontend Framework in SCSS and some additional styles (i.e. for vue-transitions).
            </p>
            <h2>Philosophy</h2>
            <p>The CSS is desktop first and follows the concept of graceful degradation, which means, it supports newest CSS3 for desktop browsers first.
            Media Queries handle responsiveness for mobile devices. Polyfills and vendor-specific code (if required) handle different browser behaviors as far as possible.
            All current versions of major browsers (Chrome, Edge, Firefox, Opera and Safari (iOS only)) are supported. We try to support new features and new browser-versions
            as soon as possible.
            </p>
            <h2>Responsiveness</h2>
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
            <h2>Variables</h2>
            <p>All CoManD-products use native CSS-variables <code>(--variable)</code>, so the Frontend Framework can be used inside the Component Library.</p>
            <p>The only need of SCSS-variables <code>($variable)</code> is required for <a href="">Media Query Breakpoints</a>.</p>
            <h2>Media Query Breakpoints</h2>
            <p>
                The media query breakpoints to deliver CSS for different screen resolutions are defined as written below:
            </p>
            <dl>
                <dt>Small:</dt><dd>0px-600px</dd>
                <dt>Medium:</dt><dd>601px-1023px</dd>
                <dt>Large/Default:</dt><dd>1024px-1440px</dd>
                <dt>Extra Large:</dt><dd>1441px+</dd>
            </dl>
            <p>
                The breakpoints are defined inside <code>framework.css</code> from <a href="">Frontend Framework</a> and inside <code>variables.scss</code> from
                <a href="">Component Library</a>.
            </p>

            <h2>The grid</h2>
            <p>The grid is a modern CSS-grid provided by <a href="">Frontend Framework</a> and is based on twelve columns.</p>
            <h3>Regular Grid</h3>
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

            <h3>Grid based on default classes</h3>
            <div class="grid-container-create-columns" id="grid-default">
                <div class="grid-small-item">Small item</div>
                <div class="grid-large-item">Large item</div>
            </div>

            <h3>Grid two fractions (with same width)</h3>
            <div class="grid-container-create-columns">
                <div class="grid-item-half-width">grid-item</div>
                <div class="grid-item-half-width">grid-item</div>
            </div>

            <h3>Complex Grid</h3>
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
        </CmdWidthLimitationWrapper>
    </main>
</template>

<script>
// import components
import {CmdWidthLimitationWrapper} from "comand-component-library"

export default {
    name: "Css",
    components: {CmdWidthLimitationWrapper}
}
</script>

<style scoped>

</style>