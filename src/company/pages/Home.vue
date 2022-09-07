<template>
    <CmdWidthLimitationWrapper>
        <CmdHeadline
            preHeadlineText="Build professional projects"
            headlineText="A next generation web-engine"
            headlineLevel="1"
        />
        <div class="flex-container">
            <div class="box">
                <CmdHeadline
                    headlineText="Frontend Framework"
                    headlineLevel="3"
                />
                <span class="icon-home"></span>
                <p>Pure HTML5/CSS3 Frontend</p>
                <a href="#">Download on GIT</a>
            </div>
            <div class="box">
                <CmdHeadline
                    headlineText="Component Library"
                    headlineLevel="3"
                />
                <span class="icon-home"></span>
                <p>Library of VUE3-components</p>
                <small>(includes Frontend Framework)</small>
                <a href="#">Download on GIT</a>
            </div>
            <div class="box">
                <CmdHeadline
                    headlineText="One-Pager"
                    headlineLevel="3"
                />
                <span class="icon-home"></span>
                <p>One-Pager for simple websites</p>
                <small>(includes Frontend Framework and Component Library)</small>
                <a href="#">Download on GIT</a>
            </div>
        </div>
        <a href="/help/component-library/getting-started" class="button">
            <span class="icon-check"></span>
            <span>Getting started</span>
        </a>
    </CmdWidthLimitationWrapper>
    <CmdWidthLimitationWrapper>
        <CmdHeadline
            headlineText="Easy to use for everyone"
            headlineLevel="2"
        />
        <div class="flex-container">
            <div class="box">
                <CmdHeadline
                    headlineText="Content Creators"
                    headlineLevel="3"
                />
                <span class="icon-edit"></span>
                <ul class="checks">
                    <li>Placeholder data in JSON-files</li>
                </ul>
            </div>
            <div class="box">
                <CmdHeadline
                    headlineText="Website Designers"
                    headlineLevel="3"
                />
                <span class="icon-image"></span>
                <ul class="checks">
                    <li>Structure and layout separated</li>
                </ul>
            </div>
            <div class="box">
                <CmdHeadline
                    headlineText="Developers"
                    headlineLevel="3"
                />
                <span class="icon-cog"></span>
                <ul class="checks">
                    <li>Placeholder data in JSON-files</li>
                </ul>
            </div>
        </div>
        <a href="#" class="button">
            <span class="icon-file-text"></span>
            <span>View component documentation</span>
        </a>
    </CmdWidthLimitationWrapper>
    <CmdWidthLimitationWrapper>
        <CmdHeadline
            headlineText="Modern web-standards implemented"
            headlineLevel="2"
        />
        <div class="flex-container">
            <div class="box">
                <CmdHeadline
                    headlineText="SEO-friendly"
                    headlineLevel="3"
                />
                <span class="icon-responsive-devices"></span>
                <ul class="checks">
                    <li>Native HMTL</li>
                    <li>HTML-valid</li>
                    <li>Fast loading code</li>
                </ul>
            </div>
            <div class="box">
                <CmdHeadline
                    headlineText="Responsive"
                    headlineLevel="3"
                />
                <span class="icon-responsive-devices"></span>
                <ul class="checks">
                    <li>Fits to each screen</li>
                    <li>Breakpoint.css separated</li>
                    <li>Supporting hi-resolution displays</li>
                </ul>
            </div>
            <div class="box">
                <CmdHeadline
                    headlineText="Accessible"
                    headlineLevel="3"
                />
                <span class="icon-responsive-devices"></span>
                <ul class="checks">
                    <li>WCAG AAA standards</li>
                    <li>Full keyboard-access</li>
                    <li>Describable texts (incl. aria-attributes)</li>
                </ul>
            </div>
        </div>
        <a href="#" class="button">
            <span class="icon-home"></span>
            <span>View coding standards</span>
        </a>
    </CmdWidthLimitationWrapper>
    <CmdWidthLimitationWrapper>
        <CmdHeadline
            headlineText="40+ customizable components and growing"
            headlineLevel="2"
        />
        <div class="flex-container">
            <div class="box">
                <CmdHeadline
                    headlineText="HTML5"
                    headlineLevel="3"
                />
                <span class="icon-html5"></span>
            </div>
            <div class="box">
                <CmdHeadline
                    headlineText="CSS3"
                    headlineLevel="3"
                />
                <span class="icon-css3"></span>
            </div>
            <div class="box">
                <CmdHeadline
                    headlineText="VUE3"
                    headlineLevel="3"
                />
                <span class="icon-responsive-devices"></span>
            </div>
        </div>
        <a href="#" class="button">
            <span class="icon-file-text"></span>
            <span>View component documentation</span>
        </a>
    </CmdWidthLimitationWrapper>
</template>

<script>
// import components
import {CmdHeadline} from "comand-component-library"
import {CmdWidthLimitationWrapper} from "comand-component-library"

export default {
    name: "home",
    components: {
        CmdHeadline,
        CmdWidthLimitationWrapper
    }
}
</script>

<style lang="scss" scoped>
    section {
        h2 {
            width: 100%;
            text-align: center;
        }

        .box {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;

            .cmd-headline {
                text-align: center;

                & + [class*="icon"] {
                    display: block;
                    font-size: 5rem;
                }
            }
        }
    }
</style>