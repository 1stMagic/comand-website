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
        </CmdSiteHeader>
        <router-view></router-view>
    </div>
</template>

<script>
import {isFrameMode} from "comand-component-library/src/utils/common"

// import components
import {CmdCompanyLogo} from "comand-component-library"
import {CmdSiteHeader} from "comand-component-library"

// import graphics
import defaultLogo from "./help/component-library/assets/images/logo.svg"
import darkmodeLogo from "./help/component-library/assets/images/logo-darkmode.svg"


export default {
    components: {
        CmdCompanyLogo,
        CmdSiteHeader
    },
    data() {
        return {
            defaultLogo,
            darkmodeLogo,
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
