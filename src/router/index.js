import { createRouter, createWebHistory } from "vue-router"
// import {routeHandler as tabsRouteHandler} from "../documentation/tabs"

// import components/pages
import Company from "../company/Company.vue"
import CompanyHome from "../company/pages/Home.vue"
import Help from "../help/Help.vue"

// begin 'component-library'-pages
import ComponentLibrary from "../help/component-library/ComponentLibrary.vue"
import ComponentLibraryGettingStarted from "../help/component-library/views/GettingStarted.vue"
import ComponentLibraryComponentDocumentation from "../help/component-library/ComponentDocumentation.vue"
// end 'component-library'-pages

// begin 'code'-pages
import Code from "../help/code/Code.vue"
import Html from "../help/code/Html.vue"
import Css from "../help/code/Css.vue"
import Vue from "../help/code/Vue.vue"
// end 'code'-pages

import IconFonts from "../help/iconfonts/IconFonts.vue"
import FAQ from "../help/faq/Faq.vue"
import ContainerPage from "../help/component-library/views/ContainerPage.vue"

// import data
import componentsDescription from "../help/component-library/data/componentsDescription.json"

const routes = []

routes.push({
    path: "/",
    name: "company",
    component: Company,
    redirect: {
        name: "company-home"
    },
    children: [
        {
            name: "company-home",
            path: "home",
            component: CompanyHome
        }
    ]
})

const componentNames = Object.keys(componentsDescription)
const componentRoutes = []

for(let i = 0 ; i < componentNames.length ; i++) {
    componentRoutes.push(
        {
            path: componentNames[i] + "/:tab?",
            name: componentNames[i],
            component: ContainerPage,
            props: () => ({
                componentName: componentNames[i],
                previousComponentName: i === 0 ? componentNames[componentNames.length - 1] : componentNames[i - 1],
                nextComponentName: i === componentNames.length - 1 ? componentNames[0] : componentNames[i + 1]
            })
        }
    )
}

routes.push({
    path: "/help",
    name: "help",
    component: Help,
    children: [
        {
            name: "component-library",
            path: "component-library",
            component: ComponentLibrary,
            children:   [
                {
                    name: "cl-getting-started",
                    path: "getting-started",
                    component: ComponentLibraryGettingStarted
                },
                {
                    name: "cl-components",
                    path: "component-documentation",
                    component: ComponentLibraryComponentDocumentation,
                    redirect: {
                        name: componentNames[0]
                    },
                    children: componentRoutes
                }
            ]
        },
        {
            name: "code",
            path: "code",
            component: Code,
            children:   [
                {
                    name: "html",
                    path: "html",
                    component: Html
                },
                {
                    name: "css",
                    path: "css",
                    component: Css
                },
                {
                    name: "vue",
                    path: "vue",
                    component: Vue
                }
            ]
        },
        {
            name: "iconfonts",
            path: "iconfonts",
            component: IconFonts,
        },
        {
            name: "faq",
            path: "faq",
            component: FAQ,
        }
    ]
})

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router