/* import css from comand-frontend-framework */
import 'comand-frontend-framework/src/assets/css/normalize.css'
import 'comand-frontend-framework/src/assets/css/framework.css'
import 'comand-frontend-framework/src/assets/css/framework-iconfont.css'

import { createApp } from 'vue'
import App from './App.vue'

/* import directives */
// directive to format telephone- and fax-number
import directiveTelephone from "comand-component-library/src/directives/telephone"
// directive to set focus on specific form-elements
import directiveFocus from "comand-component-library/src/directives/focus"

/* import additional iconfont containing company-logos */
import 'comand-component-library/src/assets/styles/logos-iconfont.css'

/* import css for global-styles */
import 'comand-component-library/src/assets/styles/global-styles.scss'

/* import css for global transitions */
import 'comand-component-library/src/assets/styles/transitions.scss'

/* import generated css from components */
import 'comand-component-library/dist/comand-component-library.css'

/* import css for your custom styles */
import 'comand-component-library/src/assets/styles/template.css'

/* import css for prism-library (for styling syntax) */
import "prismjs/themes/prism.css"

/* import css for demopage only */
import 'comand-frontend-framework/public/demopage-only.css'

import router from "./router"

createApp(App).use(router).directive('telephone', directiveTelephone).directive('focus', directiveFocus).mount('#app')
