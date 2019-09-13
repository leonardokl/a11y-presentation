const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/home/leonardoluiz/code/a11y-presentation/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-templates-slide-js": hot(preferDefault(require("/home/leonardoluiz/code/a11y-presentation/src/templates/slide.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/leonardoluiz/code/a11y-presentation/src/pages/index.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/leonardoluiz/code/a11y-presentation/src/pages/404.js")))
}

