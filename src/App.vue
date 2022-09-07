<template>
    <div id="page-wrapper">
        <CmdSiteHeader v-if="!isFrameMode()" :cmd-main-navigation="{navigationEntries: mainNavigation}">
            <template v-slot:logo>
                <CmdCompanyLogo
                    link="/"
                    altText="CoManD Logo"
                    :pathDefaultLogo="defaultLogo"
                    :pathDarkmodeLogo="darkmodeLogo"
                />
            </template>
            <template v-slot:header>
                <input type="checkbox" v-model="styledTemplate" />
            </template>
        </CmdSiteHeader>
        <router-view></router-view>
        <CmdSiteFooter>
            <CmdCompanyLogo
                link="/"
                altText="CoManD Logo"
                :pathDefaultLogo="defaultLogo"
                :pathDarkmodeLogo="darkmodeLogo"
            />
            <span>&copy; 2022 CoManD</span>
            <span>All rights reserved</span>
        </CmdSiteFooter>
    </div>
</template>

<script>
import {isFrameMode} from "comand-component-library/src/utils/common"

// import components
import {CmdCompanyLogo} from "comand-component-library"
import {CmdSiteFooter} from "comand-component-library"
import {CmdSiteHeader} from "comand-component-library"

// import graphics
import defaultLogo from "./help/component-library/assets/images/logo.svg"
import darkmodeLogo from "./help/component-library/assets/images/logo-darkmode.svg"


export default {
    components: {
        CmdCompanyLogo,
        CmdSiteFooter,
        CmdSiteHeader
    },
    data() {
        return {
            defaultLogo,
            darkmodeLogo,
            styledTemplate: false,
            mainNavigation: [
                {
                    "type": "router",
                    "text": "Company",
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
                        }
                    ]
                },
                {
                    "type": "href",
                    "text": "Code",
                    "subentries": [
                        {
                            "type": "router",
                            "text": "HTML",
                            "route": {
                                name: "html"
                            }
                        },
                        {
                            "type": "router",
                            "text": "CSS",
                            "route": {
                                name: "css"
                            }
                        },
                        {
                            "type": "router",
                            "text": "VUE",
                            "route": {
                                name: "vue"
                            }
                        }
                    ]
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
#page-wrapper {
    min-height: 100%;

    > .cmd-site-header {
        z-index: 400;
    }
}
</style>
