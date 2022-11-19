<template>
    <div id="page-wrapper">
        <CmdSiteHeader
            v-if="!isFrameMode()"
            :cmd-company-logo="companyLogo"
            :cmd-main-navigation="{navigationEntries: mainNavigation}"
            :navigation-inline="true"
        />
        <router-view></router-view>
        <CmdSiteFooter>
            <div class="copyright">
                <span>&copy; 2022 CoManD - All rights reserved</span>
                <CmdCompanyLogo
                    :link="companyLogo.link"
                    altText="CoManD Logo"
                    :pathDefaultLogo="companyLogo.pathDefaultLogo"
                    :pathDarkmodeLogo="companyLogo.pathDarkmodeLogo"
                />
                <a href="mailto:mail@comand-cms.com">mail@comand-cms.com</a>
            </div>
            <!--
            <CmdFormElement
                element="input"
                type="checkbox"
                labelText="Toggle Template"
                v-model="styledTemplate"
                :toggleSwitch="true"
            />
            -->
        </CmdSiteFooter>
        <CmdBackToTopButton/>
    </div>
</template>

<script>
// import functions
import {isFrameMode} from "./utils/common"

// import components
import {CmdCompanyLogo} from "comand-component-library"
import {CmdSiteFooter} from "comand-component-library"
import {CmdFormElement} from "comand-component-library"
import {CmdSiteHeader} from "comand-component-library"
import {CmdBackToTopButton} from "comand-component-library"

export default {
    components: {
        CmdCompanyLogo,
        CmdSiteFooter,
        CmdFormElement,
        CmdSiteHeader,
        CmdBackToTopButton
    },
    data() {
        return {
            companyLogo: {
                "link": {
                    "type": "href",
                    "path": "/",
                    "tooltip": "To homepage"
                },
               "pathDefaultLogo": "/media/images/logos/logo.svg",
                "pathDarkmodeLogo": "/media/images/logos/logo-darkmode.svg",
                "altText": "Company Logo"
            },
            styledTemplate: false,
            mainNavigation: [
                {
                    "type": "router",
                    "text": "Home",
                    "route": {
                        name: "company"
                    }
                },
                {
                    "type": "href",
                    "text": "Component-Library",
                    "subentries": [
                        {
                            "type": "router",
                            "text": "Getting Started",
                            "route": {
                                name: "cl-getting-started"
                            }
                        },
                        {
                            "type": "router",
                            "text": "Components",
                            "route": {
                                name: "cl-components"
                            }
                        },
                        {
                            "type": "router",
                            "text": "Directives and Utils",
                            "route": {
                                name: "cl-directives-and-utils",
                                path: ""
                            }
                        }
                    ]
                },
                {
                    "type": "router",
                    "text": "Code",
                    "route": {
                        name: "code"
                    }
                },
                {
                    "type": "router",
                    "text": "Iconfonts",
                    "route": {
                        name: "iconfonts"
                    }
                },
                {
                    "type": "router",
                    "text": "FAQ",
                    "route": {
                        name: "faq"
                    }
                }
            ]
        }
    },
    methods: {
        isFrameMode() {
            return isFrameMode()
        },
        loadStyledTemplate() {
            const linkTag = document.createElement("link")
            linkTag.setAttribute("rel", "stylesheet")
            linkTag.setAttribute("href", "/css/template.css")
            linkTag.setAttribute("id", "link-tag")
            document.querySelector("head").append(linkTag)
        }
    },
    watch: {
        styledTemplate() {
            if(this.styledTemplate) {
                this.loadStyledTemplate()
            } else {
                document.getElementById("link-tag").remove()
            }
        }
    }
}
</script>

<style lang="scss">
html {
    scroll-padding-top: 2rem; /* height of header minus height of section-padding */
}

#page-wrapper {
    min-height: 100%;

    > .cmd-site-header {
        z-index: 400;
    }

    .copyright {
        display: flex;
        flex-direction: column;
        gap: var(--default-gap);
        align-items: center;

        img {
            height: 5.2rem;
        }
    }

    .cmd-site-header {
        .router-link-exact-active {
            background: var(--primary-color);

            span {
                color: var(--pure-white);
            }
        }
    }
}
</style>
