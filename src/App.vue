<template>
    <CmdSiteHeader :cmd-main-navigation="{navigationEntries: mainNavigation}" />
  <router-view></router-view>
</template>

<script>
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
                    "type": "router",
                    "text": "Iconfont",
                    "route": {
                        name: "iconfont"
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
