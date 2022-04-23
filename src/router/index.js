import { createRouter, createWebHistory } from "vue-router"
// import {routeHandler as tabsRouteHandler} from "../documentation/tabs"
import Company from "../company/Company.vue"
import CompanyHome from "../company/pages/Home.vue"

import Help from "../help/Help.vue"
import IconFont from "../help/iconfont/IconFont.vue"
import componentsDescription from "../help/component-library/data/componentsDescription.json"
import ComponentLibrary from "../help/component-library/ComponentLibrary.vue"
import ComponentLibraryGettingStarted from "../help/component-library/views/GettingStarted.vue"
import ComponentLibraryComponentDocumentation from "../help/component-library/ComponentDocumentation.vue"
import FAQ from "../help/faq/Faq.vue"
import ContainerPage from "../help/component-library/views/ContainerPage.vue"

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
            name: "iconfont",
            path: "iconfont",
            component: IconFont,
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