/* begin imports from comand-frontend-framework ---------------------------------------------------------------------------------------- */
/* import normalize to set same default styles for all browsers */
import 'comand-frontend-framework/src/assets/css/normalize.css'

/* import framework-styles */
import 'comand-frontend-framework/src/assets/css/framework.css'

/* import breakpoints */
import 'comand-frontend-framework/src/assets/css/breakpoints.css'

/* import framework-iconfont */
import 'comand-frontend-framework/src/assets/css/framework-iconfont.css'
/* end imports from comand-frontend-framework ---------------------------------------------------------------------------------------- */

import { createApp } from 'vue'
import App from './App.vue'

/* begin imports from comand-component-library ---------------------------------------------------------------------------------------- */
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
/* end imports from comand-component-library ---------------------------------------------------------------------------------------- */

/* begin imports from comand-website and cms ---------------------------------------------------------------------------------------- */
/* import cms-iconfont */
import './company/assets/css/iconfonts/cms-iconfont.css'
/* end imports from comand-website and cms ---------------------------------------------------------------------------------------- */

/* begin imports from prims-plugin (for styling syntax) ---------------------------------------------------------------------------------------- */
import "prismjs/themes/prism-twilight.css"
/* end imports from prims-plugin (for styling syntax) ---------------------------------------------------------------------------------------- */

/* import css for demopage only */
import 'comand-frontend-framework/public/demopage-only.css'

import router from "./router"

createApp(App).use(router).directive('telephone', directiveTelephone).directive('focus', directiveFocus).mount('#app')
