// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-pages-js": preferDefault(require("/home/pumpkin/slf-project/src/templates/pages.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/home/pumpkin/slf-project/.cache/dev-404-page.js")),
  "component---src-pages-accordion-js": preferDefault(require("/home/pumpkin/slf-project/src/pages/accordion.js")),
  "component---src-pages-button-js": preferDefault(require("/home/pumpkin/slf-project/src/pages/button.js")),
  "component---src-pages-contact-js": preferDefault(require("/home/pumpkin/slf-project/src/pages/contact.js")),
  "component---src-pages-feature-js": preferDefault(require("/home/pumpkin/slf-project/src/pages/feature.js")),
  "component---src-pages-header-js": preferDefault(require("/home/pumpkin/slf-project/src/pages/header.js")),
  "component---src-pages-headerpart-2-js": preferDefault(require("/home/pumpkin/slf-project/src/pages/headerpart2.js")),
  "component---src-pages-howto-js": preferDefault(require("/home/pumpkin/slf-project/src/pages/howto.js")),
  "component---src-pages-index-js": preferDefault(require("/home/pumpkin/slf-project/src/pages/index.js")),
  "component---src-pages-milestone-2-js": preferDefault(require("/home/pumpkin/slf-project/src/pages/milestone2.js")),
  "component---src-pages-tabs-js": preferDefault(require("/home/pumpkin/slf-project/src/pages/tabs.js"))
}

