<template>
    <CmdSiteHeader :cmd-main-navigation="{navigationEntries: mainNavigation}"/>
    <router-view></router-view>
</template>

<script>
// import components
import {CmdSiteHeader} from "comand-component-library"

export default {
    components: {
        CmdSiteHeader
    },
    data() {
        return {
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
    }
}
</script>
