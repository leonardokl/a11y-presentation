// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": () => import("/home/leonardoluiz/code/a11y-presentation/node_modules/gatsby-plugin-offline/app-shell.js" /* webpackChunkName: "component---node-modules-gatsby-plugin-offline-app-shell-js" */),
  "component---src-templates-slide-js": () => import("/home/leonardoluiz/code/a11y-presentation/src/templates/slide.js" /* webpackChunkName: "component---src-templates-slide-js" */),
  "component---src-pages-index-js": () => import("/home/leonardoluiz/code/a11y-presentation/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-404-js": () => import("/home/leonardoluiz/code/a11y-presentation/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/home/leonardoluiz/code/a11y-presentation/.cache/data.json")

