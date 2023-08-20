(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{483:function(e,t,a){"use strict";a.r(t);var s=a(20),n=function(e){e.options.__data__block__={flowchart_382ee14a:"stage1=>operation: palette.styl\nstage2=>operation: default app styles\nstage3=>operation: index.styl\n\nstage1->stage2->stage3"}},r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),a("h2",{attrs:{id:"why-can-t-palette-styl-and-index-styl-merge-into-one-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-can-t-palette-styl-and-index-styl-merge-into-one-api"}},[e._v("#")]),e._v(" Why can’t "),a("code",[e._v("palette.styl")]),e._v(" and "),a("code",[e._v("index.styl")]),e._v(" merge into one API?")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("palette.styl")]),e._v(" is responsible for global color settings. During compilation, theme color constants should be resolved by the preprocessor first and then be applied to the global context.")]),e._v(" "),a("p",[e._v("But for "),a("code",[e._v("index.styl")]),e._v(", its job is to override the default styles of application. According to the priority principle of CSS, the later style has a higher priority, so it should be generated at the end of the CSS file.")]),e._v(" "),a("p",[e._v("A simple diagram describing the Stylus compiler’s compilation order as follows:")]),e._v(" "),a("FlowChart",{attrs:{id:"flowchart_382ee14a",code:e.$dataBlock.flowchart_382ee14a,preset:"vue"}}),a("br"),e._v(" "),a("h2",{attrs:{id:"what-s-the-differences-between-the-clientdynamicmodules-and-enhanceappfiles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-s-the-differences-between-the-clientdynamicmodules-and-enhanceappfiles"}},[e._v("#")]),e._v(" What’s the differences between the "),a("code",[e._v("clientDynamicModules")]),e._v(" and "),a("code",[e._v("enhanceAppFiles")]),e._v("?")]),e._v(" "),a("p",[e._v("Let’s take a look back first, both "),a("code",[e._v("clientDynamicModules")]),e._v(" and "),a("code",[e._v("enhanceAppFiles")]),e._v(" can generate modules with dynamic JavaScript code during compile time.")]),e._v(" "),a("p",[e._v("The difference is that the files generated by "),a("code",[e._v("enhanceAppFiles")]),e._v(" will be loaded and applied automatically when the application is initialized on the client-side, while the files generated by "),a("code",[e._v("clientDynamicModules")]),e._v(" need to be imported as "),a("code",[e._v("@dynamic/xxx")]),e._v(" by the users themselves.")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[e._v("exports")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" ctx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Import by entry file automatically.")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("enhanceAppFiles")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'constans-a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("content")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("...")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")])]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Need to use via: import '@dynamic/constans-b'")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("clientDynamicModules")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'constans-b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("content")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("...")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")])]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("h2",{attrs:{id:"when-do-i-need-to-use-enhanceappfiles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when-do-i-need-to-use-enhanceappfiles"}},[e._v("#")]),e._v(" When do I need to use "),a("code",[e._v("enhanceAppFiles")]),e._v("?")]),e._v(" "),a("ol",[a("li",[e._v("I want to execute some code on the client-side automatically.")]),e._v(" "),a("li",[e._v("I don’t need to reuse this module.")])]),e._v(" "),a("p",[a("strong",[e._v("Example:")])]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-register-components/index.js#L24",target:"_blank",rel:"noopener noreferrer"}},[e._v("@vuepress/plugin-register-components"),a("OutboundLink")],1),e._v(": Automatically registering components on the client-side.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vuepress/blob/master/packages/@vuepress/plugin-google-analytics/enhanceAppFile.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("@vuepress/plugin-google-analytics"),a("OutboundLink")],1),e._v(": Automatically set up Google Analytics.")])]),e._v(" "),a("h2",{attrs:{id:"when-do-i-need-to-use-clientdynamicmodules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when-do-i-need-to-use-clientdynamicmodules"}},[e._v("#")]),e._v(" When do I need to use "),a("code",[e._v("clientDynamicModules")]),e._v("?")]),e._v(" "),a("ol",[a("li",[e._v("I want to generate a dynamic module that needs to be invoked at a specific time.")]),e._v(" "),a("li",[e._v("I want to use this module in different modules.")])]),e._v(" "),a("p",[a("strong",[e._v("Example:")])]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuepressjs/vuepress-plugin-blog/blob/master/src/node/index.ts#L208",target:"_blank",rel:"noopener noreferrer"}},[e._v("@vuepress/plugin-blog"),a("OutboundLink")],1),e._v(": Using compile-time metadata to generate some dynamic blog-related modules and initialize them on the client-side by using "),a("code",[e._v("enhanceAppFiles")]),e._v(".")])])],1)}),[],!1,null,null,null);"function"==typeof n&&n(r);t.default=r.exports}}]);