<template>
    <div class="home-wrapper">
        <CmdWidthLimitationWrapper id="products">
            <CmdHeadline
                preHeadlineText="Build professional projects faster and better"
                headlineText="A next generation web-engine"
                headlineLevel="1"
            />
            <div class="flex-container">
                <CmdBoxHome
                    :cmdHeadline="{
                    headlineText: 'Frontend Framework',
                    headlineLevel: 3
                }"
                    textDescription="Pure HTML5/CSS3 Frontend"
                    additionalText="&nbsp;"
                    urlGit="https://github.com/1stMagic/comand-frontend-framework"
                    shapeIconClass="icon-cmd_ff"
                />
                <CmdBoxHome
                    :cmdHeadline="{
                    headlineText: 'Component Library',
                    headlineLevel: 3
                }"
                    textDescription="Library of VUE3-components"
                    additionalText="(includes Frontend Framework as dependency)"
                    urlGit="https://github.com/1stMagic/comand-component-library"
                    shapeIconClass="icon-cmd_cl"
                />
                <CmdBoxHome
                    :cmdHeadline="{
                    headlineText: 'One-Pager',
                    headlineLevel: 3
                }"
                    textDescription="One-Pager for simple websites"
                    additionalText="(includes Frontend Framework and Component Library as dependency)"
                    urlGit="https://github.com/1stMagic/comand-onepager"
                    shapeIconClass="icon-cmd_op"
                />
            </div>
            <router-link :to="{name: 'cl-getting-started'}" class="button">
                <span class="icon-check"></span>
                <span>Getting started</span>
            </router-link>
        </CmdWidthLimitationWrapper>
        <CmdWidthLimitationWrapper>
            <CmdHeadline
                headlineText="Easy to use for everyone"
                headlineLevel="2"
            />
            <div class="flex-container">
                <CmdBoxHome
                    :cmdHeadline="{
                    headlineText: 'For Content Creators',
                    headlineLevel: 3
                }"
                    shapeIconClass="icon-edit"
                    :checkList="['Placeholder data in JSON-files']"
                />
                <CmdBoxHome
                    :cmdHeadline="{
                    headlineText: 'For Website Designers',
                    headlineLevel: 3
                }"
                    shapeIconClass="icon-image"
                    :checkList="[
                    'Structure and layout separated',
                    'Corporate Design settings stored in variables'
                    ]"
                />
                <CmdBoxHome
                    :cmdHeadline="{
                    headlineText: 'For Developers',
                    headlineLevel: 3
                }"
                    shapeIconClass="icon-cog"
                    :checkList="[
                    'Configurable components',
                    'Detailed documentation',
                    'Automated tests'
                 ]"
                />
            </div>
            <router-link :to="{name: 'faq'}" class="button">
                <span class="icon-questionmark-circle"></span>
                <span>View FAQ for coding details</span>
            </router-link>
        </CmdWidthLimitationWrapper>
        <CmdWidthLimitationWrapper>
            <CmdHeadline
                headlineText="Modern web-standards implemented"
                headlineLevel="2"
            />
            <div class="flex-container">
                <CmdBoxHome
                    :cmdHeadline="{
                    headlineText: 'SEO-friendly',
                    headlineLevel: 3
                }"
                    shapeIconClass="icon-seo"
                    :checkList="[
                    'Native HMTL',
                    'HTML-valid',
                    'Fast loading code'
                ]"
                />
                <CmdBoxHome
                    :cmdHeadline="{
                    headlineText: 'Responsive',
                    headlineLevel: 3
                }"
                    shapeIconClass="icon-responsive"
                    :checkList="[
                    'Fits to each screen',
                    'Breakpoint.css separated',
                    'Supporting hi-resolution displays'
                ]"
                />
                <CmdBoxHome
                    :cmdHeadline="{
                    headlineText: 'Accessible',
                    headlineLevel: 3
                }"
                    shapeIconClass="icon-accessibility"
                    :checkList="[
                    'WCAG AAA standards',
                    'Full keyboard-access',
                    'Describable texts for screen readers'
                ]"
                />
            </div>
        </CmdWidthLimitationWrapper>
        <CmdWidthLimitationWrapper>
            <CmdHeadline
                headlineText="40+ customizable components and growing"
                headlineLevel="2"
            />
            <div class="flex-container">
                <CmdBoxHome
                    class="box-html"
                    :cmdHeadline="{
                    headlineText: 'HTML5',
                    headlineLevel: 3
                }"
                    shapeIconClass="icon-html5"
                />
                <CmdBoxHome
                    class="box-css"
                    :cmdHeadline="{
                    headlineText: 'CSS3',
                    headlineLevel: 3
                }"
                    shapeIconClass="icon-css3"
                />
                <CmdBoxHome
                    class="box-vue"
                    :cmdHeadline="{
                    headlineText: 'VUE3',
                    headlineLevel: 3
                }"
                    shapeIconClass="icon-vue"
                />
            </div>
            <CmdHeadline
                headlineText="Works with the current browser-versions"
                headlineLevel="3"
                class="text-align-center"
            />
            <div class="flex-container">
                <div class="box box-browsers">
                    <h4>Mozilla Firefox</h4>
                    <span class="icon-firefox" title="Logo Mozilla Firefox"></span>
                    <span>Version: 105+</span>
                </div>
                <div class="box box-browsers">
                    <h4>Google Chrome</h4>
                    <span class="icon-chrome" title="Logo Google Chrome"></span>
                    <span>Version: 105+</span>
                </div>
                <div class="box box-browsers">
                    <h4>Microsoft Edge</h4>
                    <span class="icon-edge" title="Logo Microsoft Edge"></span>
                    <span>Version: 105+</span>
                </div>
                <div class="box box-browsers">
                    <h4>Apple Safari</h4>
                    <span class="icon-safari" title="Logo Apple Safari"></span>
                    <span>Version: 16.0+</span>
                </div>
                <div class="box box-browsers">
                    <h4>Opera</h4>
                    <span class="icon-opera" title="Logo Opera"></span>
                    <span>Version: 91+</span>
                </div>
            </div>
            <router-link :to="{name: 'cl-components'}" class="button">
                <span class="icon-file-text"></span>
                <span>View component documentation</span>
            </router-link>
        </CmdWidthLimitationWrapper>
    </div>
</template>

<script>
// import components
import {CmdHeadline} from "comand-component-library"
import {CmdWidthLimitationWrapper} from "comand-component-library"
import CmdBoxHome from "./BoxHome.vue"

export default {
    name: "home",
    components: {
        CmdHeadline,
        CmdWidthLimitationWrapper,
        CmdBoxHome
    }
}
</script>

<style lang="scss">
.home-wrapper {
    color: var(--primary-color) !important;

    .cmd-width-limitation-wrapper {
        &:nth-child(1) {
            background: url(../assets/images/bg-home-wrapper.jpg) no-repeat top center var(--primary-color);
            background-size: cover;
        }

        &#products {
          color: var(--pure-white);
        }

        section {
            display: flex;
            flex-direction: column;
            gap: var(--default-gap);

            > .cmd-headline {
                margin-bottom: 0;
            }

            h2 {
                width: 100%;
                text-align: center;
            }

            > .flex-container {
                & + .button {
                    align-self: center;
                        box-shadow:inset 0px 1px 0px 0px #97c4fe;
                        background:linear-gradient(to bottom, var(--primary-color) 5%, #1e62d0 100%);
                        border:1px solid #337fed;
                    font-size: 2rem;
                    transition: var(--default-transition);

                    &:hover, &:active, &:focus {
                        background:var(--pure-white);
                        transition: var(--default-transition);

                        span, span[class*="icon"] {
                            color: var(--primary-color)
                        }
                    }
                }
            }

            .box-html {
                color: var(--pure-white);
                background: linear-gradient(to bottom,  #fc603a 0%,#dd4b25 100%);
            }

            .box-css {
                color: var(--pure-white);
                background: linear-gradient(to bottom,  #289fe0 0%,#1b6dad 100%);
            }

            .box-vue {
                color: var(--pure-white);
                background: linear-gradient(to bottom,  #42c940 0%,#33a06f 100%);
            }

            .box-browsers {
                h4 {
                    margin: 0;
                }

                color: var(--pure-white);

                span[class*="icon"] {
                    font-size: 4rem;
                }

                &:nth-child(1) {
                    background: linear-gradient(to bottom,  hsl(26,91%,64%) 0%, hsl(26,91%,44%) 100%);
                }

                &:nth-child(2) {
                    background: linear-gradient(to bottom,  hsl(48,80%,65%) 0%, hsl(48,80%,55%) 100%);
                }

                &:nth-child(3) {
                    background: linear-gradient(to bottom,  hsl(209,83%,50%) 0%, hsl(209,83%,30%) 100%);
                }

                &:nth-child(4) {
                    background: linear-gradient(to bottom,  hsl(219,87%,73%) 0%, hsl(219,87%,53%) 100%);
                }

                &:nth-child(5) {
                    background: linear-gradient(to bottom,  hsl(358, 72%, 66%) 0%, hsl(358, 72%, 46%) 100%);
                }
            }
        }
    }
}
</style>