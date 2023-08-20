(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{501:function(t,e,a){"use strict";a.r(e);var r=a(20),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"frontmatter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter"}},[t._v("#")]),t._v(" Frontmatter")]),t._v(" "),a("p",[t._v("Any Markdown file that contains a YAML frontmatter block will be processed by "),a("a",{attrs:{href:"https://github.com/jonschlinkert/gray-matter",target:"_blank",rel:"noopener noreferrer"}},[t._v("gray-matter"),a("OutboundLink")],1),t._v(". The frontmatter must be at the top of the Markdown file, and must take the form of valid YAML set between triple-dashed lines. Example:")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token front-matter-block"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token front-matter yaml language-yaml"}},[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Blogging with VuePress\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" en"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("US")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])])]),a("p",[t._v("Between the triple-dashed lines, you can set "),a("a",{attrs:{href:"#predefined-variables"}},[t._v("predefined variables")]),t._v(", or even create custom ones of your own. These variables can be used via the "),a("code",[a("RouterLink",{attrs:{to:"/guide/global-computed.html#frontmatter"}},[t._v("$frontmatter")])],1),t._v(" variable.")]),t._v(" "),a("p",[t._v("Here’s an example of how you could use it in your Markdown file:")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token front-matter-block"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token front-matter yaml language-yaml"}},[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Blogging with VuePress\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" en"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("US")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" {{ $frontmatter.title }}")]),t._v("\n\nMy blog post is written in {{ $frontmatter.lang }}.\n")])])]),a("h2",{attrs:{id:"alternative-frontmatter-formats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alternative-frontmatter-formats"}},[t._v("#")]),t._v(" Alternative frontmatter Formats")]),t._v(" "),a("p",[t._v("VuePress also supports JSON and "),a("a",{attrs:{href:"https://github.com/toml-lang/toml",target:"_blank",rel:"noopener noreferrer"}},[t._v("TOML"),a("OutboundLink")],1),t._v(" frontmatter syntax.")]),t._v(" "),a("p",[t._v("JSON frontmatter needs to start and end in curly braces:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('---\n{\n  "title": "Blogging Like a Hacker",\n  "lang": "en-US"\n}\n---\n')])])]),a("p",[t._v("TOML frontmatter needs to be explicitly marked as TOML:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('---toml\ntitle = "Blogging Like a Hacker"\nlang = "en-US"\n---\n')])])]),a("h2",{attrs:{id:"predefined-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#predefined-variables"}},[t._v("#")]),t._v(" Predefined Variables")]),t._v(" "),a("h3",{attrs:{id:"title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#title"}},[t._v("#")]),t._v(" title")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("h1_title || siteConfig.title")])])]),t._v(" "),a("p",[t._v("Title of the current page.")]),t._v(" "),a("h3",{attrs:{id:"lang"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lang"}},[t._v("#")]),t._v(" lang")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("en-US")])])]),t._v(" "),a("p",[t._v("Language of the current page.")]),t._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("siteConfig.description")])])]),t._v(" "),a("p",[t._v("Description of the current page.")]),t._v(" "),a("h3",{attrs:{id:"layout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#layout"}},[t._v("#")]),t._v(" layout")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("Layout")])])]),t._v(" "),a("p",[t._v("Set the layout component of the current page.")]),t._v(" "),a("h3",{attrs:{id:"permalink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permalink"}},[t._v("#")]),t._v(" permalink")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("siteConfig.permalink")])])]),t._v(" "),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/guide/permalinks.html"}},[t._v("Permalinks")]),t._v(" for details.")],1),t._v(" "),a("h3",{attrs:{id:"metatitle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metatitle"}},[t._v("#")]),t._v(" metaTitle")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("`${page.title} | ${siteConfig.title}`")])])]),t._v(" "),a("p",[t._v("Override the default meta title.")]),t._v(" "),a("h3",{attrs:{id:"meta"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meta"}},[t._v("#")]),t._v(" meta")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("array")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("Specify extra meta tags to be injected:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("meta")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" description\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hello\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" keywords\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" super duper SEO\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])]),a("h3",{attrs:{id:"canonicalurl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#canonicalurl"}},[t._v("#")]),t._v(" canonicalUrl "),a("Badge",{attrs:{text:"1.7.1+"}})],1),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("Set the canonical URL for the current page.")]),t._v(" "),a("h2",{attrs:{id:"predefined-variables-powered-by-default-theme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#predefined-variables-powered-by-default-theme"}},[t._v("#")]),t._v(" Predefined Variables Powered By Default Theme")]),t._v(" "),a("h3",{attrs:{id:"navbar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#navbar"}},[t._v("#")]),t._v(" navbar")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/theme/default-theme-config.html#disable-the-navbar"}},[t._v("Default Theme Config > Disable the Navbar")]),t._v(" for details.")],1),t._v(" "),a("h3",{attrs:{id:"sidebar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sidebar"}},[t._v("#")]),t._v(" sidebar")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("boolean|'auto'")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/theme/default-theme-config.html#sidebar"}},[t._v("Default Theme Config > Sidebar")]),t._v(" for details.")],1),t._v(" "),a("h3",{attrs:{id:"prev"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prev"}},[t._v("#")]),t._v(" prev")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("boolean|string")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/theme/default-theme-config.html#prev-next-links"}},[t._v("Default Theme Config > Prev / Next Links")]),t._v(" for details.")],1),t._v(" "),a("h3",{attrs:{id:"next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[t._v("#")]),t._v(" next")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("boolean|string")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/theme/default-theme-config.html#prev-next-links"}},[t._v("Default Theme Config > Prev / Next Links")]),t._v(" for details.")],1),t._v(" "),a("h3",{attrs:{id:"search"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#search"}},[t._v("#")]),t._v(" search")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/theme/default-theme-config.html#built-in-search"}},[t._v("Default Theme Config > Built-in Search")]),t._v(" for details.")],1),t._v(" "),a("h3",{attrs:{id:"tags"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tags"}},[t._v("#")]),t._v(" tags")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("array")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/theme/default-theme-config.html#built-in-search"}},[t._v("Default Theme Config > Built-in Search")]),t._v(". For details.")],1)])}),[],!1,null,null,null);e.default=s.exports}}]);