import { wrapFunctional } from './utils'

export { default as Logo } from '../../components/Logo.vue'
export { default as SiteHeader } from '../../components/SiteHeader.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazySiteHeader = import('../../components/SiteHeader.vue' /* webpackChunkName: "components/site-header" */).then(c => wrapFunctional(c.default || c))
