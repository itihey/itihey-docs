/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "07cf3c9c8ecb6848f78994ed99b1126b"
  },
  {
    "url": "api/cli.html",
    "revision": "00a2cc782a8263a20e41f879ebd58a06"
  },
  {
    "url": "api/node.html",
    "revision": "9d1ffc1901f4bd6927f7a8d85b41b58c"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/1.9-lang.png",
    "revision": "9a95306985d4954fe54bc8de5512d3ba"
  },
  {
    "url": "assets/1.9-official-plugin-options.png",
    "revision": "55243b507656a5c36b45b7d4b27c1cab"
  },
  {
    "url": "assets/1.9-official-plugin-tuple-usage.png",
    "revision": "252870643841d8bac56aac10d1a9d91f"
  },
  {
    "url": "assets/1.9-overview.png",
    "revision": "f3534cdf12b0474265fd296bdc82c225"
  },
  {
    "url": "assets/css/0.styles.fe2d8e19.css",
    "revision": "397d471da6517347e031580b93a123b6"
  },
  {
    "url": "assets/img/img_1.8e63a6f2.png",
    "revision": "8e63a6f2c800b1fa3c559d1959423d6c"
  },
  {
    "url": "assets/img/img_1.d6cf09f8.png",
    "revision": "d6cf09f839ec4d2c8ec65787c8b9587d"
  },
  {
    "url": "assets/img/img_2.2481e79a.png",
    "revision": "2481e79ad61f555eff7ac23c75b06184"
  },
  {
    "url": "assets/img/img_2.ac9dc64b.png",
    "revision": "ac9dc64b21579b89ab74e30dfa959244"
  },
  {
    "url": "assets/img/img_3.53d44898.png",
    "revision": "53d448984d9cf71d580edf04b09934ed"
  },
  {
    "url": "assets/img/img_3.ae4599fe.png",
    "revision": "ae4599fe9fad249a31719373401c00ae"
  },
  {
    "url": "assets/img/img_4.197878ad.png",
    "revision": "197878ad5ba4c51307b6e68d6db8054a"
  },
  {
    "url": "assets/img/img_4.cb0159f1.png",
    "revision": "cb0159f12cc2e5d9af13adbd11cb93b0"
  },
  {
    "url": "assets/img/img_5.df977b3f.png",
    "revision": "df977b3fa15287c9ae2aa538d5a4a380"
  },
  {
    "url": "assets/img/img_6.a096134c.png",
    "revision": "a096134ce9f7642e194725aa04a69401"
  },
  {
    "url": "assets/img/img_7.304abf01.png",
    "revision": "304abf01ad4557735b6aaa38a3de9a62"
  },
  {
    "url": "assets/img/img_8.d4e04418.png",
    "revision": "d4e044188c2893f2a9459293861d723e"
  },
  {
    "url": "assets/img/img_9.eef0d6c6.png",
    "revision": "eef0d6c6b7b38d61bc626b42118eab51"
  },
  {
    "url": "assets/img/img.49dff3a4.png",
    "revision": "49dff3a460cc954b5e5ccf730b53b046"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.75af1257.js",
    "revision": "8b31d4a95b6f32fbf8ddf66df2167981"
  },
  {
    "url": "assets/js/100.486bb714.js",
    "revision": "7b16ceebbba6a3975f566c4969609525"
  },
  {
    "url": "assets/js/101.6630bffa.js",
    "revision": "b83edb48b0b8ef96ba76b53560375836"
  },
  {
    "url": "assets/js/102.35c7991c.js",
    "revision": "a36d2dafe96370e815e39576bb008a5d"
  },
  {
    "url": "assets/js/103.66038d48.js",
    "revision": "ad48190380e710a68e6b09bc61c240d9"
  },
  {
    "url": "assets/js/104.a1394e4c.js",
    "revision": "8d5b9f0c940757342925089ea5c97223"
  },
  {
    "url": "assets/js/105.73afac83.js",
    "revision": "5b06e2aa7107aa3eac3e335934d378f7"
  },
  {
    "url": "assets/js/106.1e1f8fd6.js",
    "revision": "58fddb06e9aa19b71186ff43802cad32"
  },
  {
    "url": "assets/js/107.8310a2e2.js",
    "revision": "35dd302ed8b03d43ae2055b31d2791e3"
  },
  {
    "url": "assets/js/108.c12338a6.js",
    "revision": "35d8637f9291c891b242e7d9ab3f6f6a"
  },
  {
    "url": "assets/js/109.8fc50645.js",
    "revision": "b7b16383ce7fa2f50324693f22b06251"
  },
  {
    "url": "assets/js/11.eea6aafc.js",
    "revision": "8f6295884493e9f821a63cf9f7b45a28"
  },
  {
    "url": "assets/js/110.1bd8a824.js",
    "revision": "67503fd9476628c08bcab4022e3cd5b2"
  },
  {
    "url": "assets/js/111.c10e0256.js",
    "revision": "6cce60d2e258e9f9541b80b51db5c28c"
  },
  {
    "url": "assets/js/112.7460b307.js",
    "revision": "fbe49099cc0aa1e7f54ce4269f0b345b"
  },
  {
    "url": "assets/js/113.17f15dae.js",
    "revision": "21a6759575f333fdd591678b10b7154c"
  },
  {
    "url": "assets/js/114.7efb6754.js",
    "revision": "808d7706885cea48afbe0e8f738f6d35"
  },
  {
    "url": "assets/js/115.8c0d3c56.js",
    "revision": "3f5eb6f955594eba44ce1b56dee4775e"
  },
  {
    "url": "assets/js/12.62eab393.js",
    "revision": "8b31ad0a8e2e5c38bc0222750cdbf4a8"
  },
  {
    "url": "assets/js/13.3b23f2bd.js",
    "revision": "ea241adcba7f5166264158f779e6b72f"
  },
  {
    "url": "assets/js/14.03153586.js",
    "revision": "1f35a169676eb12ccc91085a1cd3dafb"
  },
  {
    "url": "assets/js/15.a7479312.js",
    "revision": "3f4fdf90b62ae098276806b049cff39d"
  },
  {
    "url": "assets/js/16.0338eba8.js",
    "revision": "c5911db1ff3472f4f0a9e9ef17fb8349"
  },
  {
    "url": "assets/js/17.028ff720.js",
    "revision": "8cf599b5ac6e34ac3cfb99bb1f990bdf"
  },
  {
    "url": "assets/js/18.ab5d9792.js",
    "revision": "aa63333776f345cf0b74676a92c19ed0"
  },
  {
    "url": "assets/js/19.dd209c84.js",
    "revision": "c597c41b93bfbfd72a73cee5349f65a4"
  },
  {
    "url": "assets/js/20.cc6691b7.js",
    "revision": "cb0fc758ca6f27872f3aa866bbd0b077"
  },
  {
    "url": "assets/js/21.56b15b43.js",
    "revision": "fdfafc5df9fe7475ceabb90d26f6dcd0"
  },
  {
    "url": "assets/js/22.d573f612.js",
    "revision": "5d921dc98d0317a67f2c86219d6888f6"
  },
  {
    "url": "assets/js/23.04507b4b.js",
    "revision": "48b2215ad9956c9ae452cffbf0f6709f"
  },
  {
    "url": "assets/js/24.362ddd6c.js",
    "revision": "3f4c762785ecc017945f56056b0676e2"
  },
  {
    "url": "assets/js/25.01c88d66.js",
    "revision": "5e04a0ca9847f7fa7fa5ba42ccc740ee"
  },
  {
    "url": "assets/js/26.ff9feceb.js",
    "revision": "7abb5fdc00bada0c5ec344563745306f"
  },
  {
    "url": "assets/js/27.b0dd43e7.js",
    "revision": "b862d3db60914390e32c453e6f945b69"
  },
  {
    "url": "assets/js/28.59d4fa9e.js",
    "revision": "d8446ca6ef69f81a4363c9d5ad1ec1d6"
  },
  {
    "url": "assets/js/29.cadb42d7.js",
    "revision": "ebaa21f4b3bb3d87521fd51c0bb232b9"
  },
  {
    "url": "assets/js/30.0bc0f15c.js",
    "revision": "e25c42453e83ed6e782cb1e981aa01b5"
  },
  {
    "url": "assets/js/31.3912c50d.js",
    "revision": "1ff4dad13c20832d93f5e775afc926d2"
  },
  {
    "url": "assets/js/32.e8c3d7e7.js",
    "revision": "49911eb64c481ffce1cde3c580dacb96"
  },
  {
    "url": "assets/js/33.d75f0bac.js",
    "revision": "3c7e1514cda9e1e3205b959ce3db39fb"
  },
  {
    "url": "assets/js/34.d334e45c.js",
    "revision": "d62f5f7c3451c3135d29611f1070992f"
  },
  {
    "url": "assets/js/35.0e77a23f.js",
    "revision": "7c5e3cfc242228b2856b6ea72a0500fb"
  },
  {
    "url": "assets/js/36.89a063d9.js",
    "revision": "99ad760585c2aaad779d05075a5bf0ac"
  },
  {
    "url": "assets/js/37.bae8a924.js",
    "revision": "902f01424131d2ad5aaf3addedabb51a"
  },
  {
    "url": "assets/js/38.99ac06dd.js",
    "revision": "e7117c7454bde31e3546df5911013e07"
  },
  {
    "url": "assets/js/39.bb1043fa.js",
    "revision": "ab093674e4373bff4273a137fbcf928d"
  },
  {
    "url": "assets/js/40.d96415e7.js",
    "revision": "4532927c68d297abc6d0e161f151d948"
  },
  {
    "url": "assets/js/41.4a439775.js",
    "revision": "c0d1cc462fa09682ea35d99627ad0a2b"
  },
  {
    "url": "assets/js/42.55a47e04.js",
    "revision": "7157c2460f13d0149872a8478325d84c"
  },
  {
    "url": "assets/js/43.3ce923cf.js",
    "revision": "fef77d141528f7856815df239a8a9002"
  },
  {
    "url": "assets/js/44.78954394.js",
    "revision": "c954801bacb93547ec6b63fb7daecb61"
  },
  {
    "url": "assets/js/45.ac92c8e0.js",
    "revision": "8663b9097818d76a1396a0c25921019b"
  },
  {
    "url": "assets/js/46.db337b22.js",
    "revision": "bde5dd6d869ecd5229d30c829d658102"
  },
  {
    "url": "assets/js/47.26c4bedb.js",
    "revision": "7483271e038f229ce2cb7310f5b0b59f"
  },
  {
    "url": "assets/js/48.2ff14510.js",
    "revision": "b3a9ddaa1be18e8cb1b66f9d8f141727"
  },
  {
    "url": "assets/js/49.e59ecde7.js",
    "revision": "a02618650cea0151d5045980fd022336"
  },
  {
    "url": "assets/js/5.2d5bebee.js",
    "revision": "5df22d31542fa2b29fb3611a98caa304"
  },
  {
    "url": "assets/js/50.e871f5da.js",
    "revision": "6ec7eef39727981b3645658a3108c13a"
  },
  {
    "url": "assets/js/51.e8e42311.js",
    "revision": "0943cbfcea9b957a73829171ac3e54df"
  },
  {
    "url": "assets/js/52.fafe460a.js",
    "revision": "2a2c3bc4d016ee7dcc28432265478b27"
  },
  {
    "url": "assets/js/53.d0f24c7e.js",
    "revision": "75e2317b07c112acdc62be1ec82efd7b"
  },
  {
    "url": "assets/js/54.2c205494.js",
    "revision": "102994343d561c6aa485f4ba67761112"
  },
  {
    "url": "assets/js/55.670a86dd.js",
    "revision": "4bad0667273aafeeb6b7cac46ca6af33"
  },
  {
    "url": "assets/js/56.3a2c3379.js",
    "revision": "45c3cf1d3078ff2d8da3364ac7e24a1a"
  },
  {
    "url": "assets/js/57.54084d3c.js",
    "revision": "bbc277a5b03b1cfcf32f1aa31f334574"
  },
  {
    "url": "assets/js/58.f0d3feb2.js",
    "revision": "eec6897fe9c3ad9640155f237af8f1ca"
  },
  {
    "url": "assets/js/59.82d19da2.js",
    "revision": "a4f22a63a3f5da9636f6afa8c58b42df"
  },
  {
    "url": "assets/js/6.4aff6a94.js",
    "revision": "7abec89aa89c7ee2ed9e390b09ee814e"
  },
  {
    "url": "assets/js/60.77bd4a73.js",
    "revision": "7f3e60676e120d1a62de33055134a2fe"
  },
  {
    "url": "assets/js/61.505a4e44.js",
    "revision": "85578c9816f810cf64f8015d3e0d917c"
  },
  {
    "url": "assets/js/62.1b2a32a7.js",
    "revision": "a8dac2a2ae9e208bbd0931ac00a62f17"
  },
  {
    "url": "assets/js/63.ff9113e1.js",
    "revision": "8b1370f0be49192f7d72b90b82e590c4"
  },
  {
    "url": "assets/js/64.e8e5f992.js",
    "revision": "afc84481b399501218a69b3323f4c77c"
  },
  {
    "url": "assets/js/65.eadd6b43.js",
    "revision": "4809dc7ddc7aa3c185fb4d5cb7266432"
  },
  {
    "url": "assets/js/66.a0b9501d.js",
    "revision": "6d8d8faa8dc31877e51c795dbf176822"
  },
  {
    "url": "assets/js/67.234b6c8c.js",
    "revision": "5f413ab81384f9e63b3c2e3c59c546e7"
  },
  {
    "url": "assets/js/68.1f63210b.js",
    "revision": "0287c65800b3a82498d4a7d957d2b8b9"
  },
  {
    "url": "assets/js/69.b9ffae61.js",
    "revision": "87ba35068a2561d8b1ac710782a9b2fe"
  },
  {
    "url": "assets/js/7.e03a6640.js",
    "revision": "11b26f17cc66b4f2f6f804b2fc91bd39"
  },
  {
    "url": "assets/js/70.eecd900c.js",
    "revision": "c6a9633fe639168b29fd7536331ddd54"
  },
  {
    "url": "assets/js/71.6dd7bfe2.js",
    "revision": "413694848683b23b7ff8d10f3d3a7d48"
  },
  {
    "url": "assets/js/72.09813721.js",
    "revision": "25a15b08fa09ea952df0829ff3b8c4e6"
  },
  {
    "url": "assets/js/73.f23dd159.js",
    "revision": "dbf85faa05bc170776af4c182c6237ab"
  },
  {
    "url": "assets/js/74.e51cb3e3.js",
    "revision": "ed0eea5ce9daae01e0a0889695d2920c"
  },
  {
    "url": "assets/js/75.fde52bf5.js",
    "revision": "5c88b0ac3865fb9241f80b68a82ee446"
  },
  {
    "url": "assets/js/76.057e4b69.js",
    "revision": "f7cf6d7f4f57a967eab84dbcd32466f6"
  },
  {
    "url": "assets/js/77.3a391dc6.js",
    "revision": "c1a2f32319c5163e6325ba96a81ecca1"
  },
  {
    "url": "assets/js/78.12dcada8.js",
    "revision": "4ca894e6936c6fe78e629836b1d5e93a"
  },
  {
    "url": "assets/js/79.ae110863.js",
    "revision": "38e057e3836db73d1a2ca16935b84c9d"
  },
  {
    "url": "assets/js/8.41f6f54e.js",
    "revision": "5c7241b8f15945195f9adac73684bbd5"
  },
  {
    "url": "assets/js/80.d052a08f.js",
    "revision": "1ac8d88fdcdeacff43811f8f2f02afe1"
  },
  {
    "url": "assets/js/81.e3e10075.js",
    "revision": "ecd0fa54fed10488beeaaa56414da78d"
  },
  {
    "url": "assets/js/82.48d7f790.js",
    "revision": "408840b452994725109120eae9873cce"
  },
  {
    "url": "assets/js/83.1f2b438d.js",
    "revision": "4f76ca69ce1fac8a65c5053904550b1b"
  },
  {
    "url": "assets/js/84.5a45dac6.js",
    "revision": "9418b219e3563a5992f9352eff117dba"
  },
  {
    "url": "assets/js/85.0c451bef.js",
    "revision": "03c7f626d69a3a4789306c313c502295"
  },
  {
    "url": "assets/js/86.126e4667.js",
    "revision": "bc25168a11341ca703f7cc0b29d923b5"
  },
  {
    "url": "assets/js/87.aef99b77.js",
    "revision": "5f7ea5747e0ff34386819e3270ee45c0"
  },
  {
    "url": "assets/js/88.3ca3b34c.js",
    "revision": "ae75fdaaa4f4aee57ae34bee09bcac92"
  },
  {
    "url": "assets/js/89.b0937d70.js",
    "revision": "d6f9426a879ef5b353c8853f6a54a084"
  },
  {
    "url": "assets/js/9.6fd611f6.js",
    "revision": "9456ea2cbdd821b6fef7c43519fc01a7"
  },
  {
    "url": "assets/js/90.fd22cd1e.js",
    "revision": "192a6a87f85e75e1e5c2a4d7c153e10b"
  },
  {
    "url": "assets/js/91.147df013.js",
    "revision": "f542f94d8cf3f8db95cb1224790ad7ad"
  },
  {
    "url": "assets/js/92.671dde0f.js",
    "revision": "15aa30a6eff80d55262b9713ad7d2b76"
  },
  {
    "url": "assets/js/93.813316d9.js",
    "revision": "4d8400267e65948b4ac90a8b3976c4f5"
  },
  {
    "url": "assets/js/94.15dd9061.js",
    "revision": "68b794b6d9a08146a1b349c857d6d7f2"
  },
  {
    "url": "assets/js/95.1e09418c.js",
    "revision": "664f78cc0d09c6f8ee66f65af3178740"
  },
  {
    "url": "assets/js/96.0453f56c.js",
    "revision": "c5c8cbc1c90c5532db1a504f848017a5"
  },
  {
    "url": "assets/js/97.f2b79a45.js",
    "revision": "4c4623e9bd268d507bd28adbe949ce62"
  },
  {
    "url": "assets/js/98.17f56fca.js",
    "revision": "d36a31e51c1fbf55077f1fdc73a82c2a"
  },
  {
    "url": "assets/js/99.3db60f98.js",
    "revision": "e3a4901aa22887bea335708fd992060d"
  },
  {
    "url": "assets/js/app.8ca6e9b0.js",
    "revision": "1310c73d19cee4399f3aff92debd8622"
  },
  {
    "url": "assets/js/vendors~docsearch.4bb58024.js",
    "revision": "382c1560187a093b09b1e31fbae6e3c7"
  },
  {
    "url": "assets/js/vendors~flowchart.4b005e38.js",
    "revision": "bb348dc2bd0e07897351d2e313d71aee"
  },
  {
    "url": "assets/js/vendors~notification.399778e1.js",
    "revision": "ea54bae09220b7a116dfbe85d7e0da5e"
  },
  {
    "url": "config/index.html",
    "revision": "e63881a280c2a01f61a74e43ee6f2e91"
  },
  {
    "url": "faq/index.html",
    "revision": "0da2f30a27f0a65dba3cbd793152542c"
  },
  {
    "url": "guide/assets.html",
    "revision": "2b12bf81f249729287efa49a34ef8536"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "9d3ad862735661413fe3753c1ec27979"
  },
  {
    "url": "guide/deploy.html",
    "revision": "eb72ccb0bc2386ec1bcc4f3ecde183a2"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "3e95c0eaa2faabe850ba48667c6682c5"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "a1cf084e5ab24fce0386ba8aa60d3797"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "98f1f1eb1b3463469c14d95cf7e94e95"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "d54261b394cacf06e9c0e5370f658e4f"
  },
  {
    "url": "guide/i18n.html",
    "revision": "57cab9d2b550ac27a211826afa28e563"
  },
  {
    "url": "guide/index.html",
    "revision": "bf8da01d94cea1b7a15a0a51802c078c"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "c76cd2da89b4f4a132e7bd5cc21be313"
  },
  {
    "url": "guide/markdown.html",
    "revision": "ec3bd6c81c6af2c291a3d3668b54970b"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "0cc2a7391b568b7c0128cce418302fbe"
  },
  {
    "url": "guide/typescript-as-config.html",
    "revision": "6b77ee3f21bd74545adffef7abbcf6a3"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "b6d96865dfd3c4a74bdd6351f35daa10"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "bf115c21a57d0c41c8633577e6907a94"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "34083ef2ef145d804c4ea1fba5e9464f"
  },
  {
    "url": "miscellaneous/design-concepts.html",
    "revision": "0cf8508d02133da3e3d5fe833d6ce642"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "c85d9ce6f2ba9c252a127edf6c489cc7"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "a2394f653df921ebedacd3fcfbea7ada"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "d1ff2f7f0653fb9b0c93a0a787045742"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "ac5ff8148365d807d22d7139f98478f3"
  },
  {
    "url": "plugin/index.html",
    "revision": "912408f4872e225b670e62cd49f47253"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "1bfa111e063a06a5aa6bbe46ce0602ca"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "167e5ab9d099ac53f11a3ad20dae3519"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "539d43d33b9878bd2599fb8bcc48b4cf"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "4f1ee7fd023709a31e9cbaa5bfe67229"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "ad5aef3554fdc54504da9f8be1778485"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "e566ad77b81733758f8989b8437c2ca0"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "d8e847cf07afeaf09102c1fe65907c52"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "d3cbb260b18b7c334215927a30036f3e"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "1d0979a4ff4cebb93c055adedd912f12"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "67a7a849e39b1d5cac872e85498ace2e"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "c34da9ed99c979183fd299473ecad5d1"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "be1ecfb48354c547db02a70e17569d80"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "86e1cd538f60bdda6b64444665e51fe1"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "f41083a5d790bcee274a8de6b3afdd67"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "a02ebdc4d56be82233f60ed68cdae29f"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "91acc438afac7a9b043d3ae5a5858e0e"
  },
  {
    "url": "theme/index.html",
    "revision": "dcce2c05297c7a238f9337a1352762de"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "aaec4b07d0f1a79e1855802650b3dfb0"
  },
  {
    "url": "theme/option-api.html",
    "revision": "358404b4fcf872a367ddcd919723f77c"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "97356b21340440e6192948e872ddcd0c"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "333465c788a6f48e9681083c7ca2f945"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "02f84859a2e1a05c97907c375edf3c4a"
  },
  {
    "url": "zh/api/node.html",
    "revision": "b842431aa57478835a13925e04ff1076"
  },
  {
    "url": "zh/config/index.html",
    "revision": "80cc8c5a1f3fb9ec180d6a7e4b43ca17"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "8207919f4fa998282b8d611ca7872a7c"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "edeb8d6b5259aef93a61e5cb34315dc5"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "c2be0e475af4bdb55f84e81a503be3e2"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "ab5306df19dd053f88e81f08d5cd449a"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "ee6d583ca8f3c24e4a63b702cf3a5561"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "3f925d4f67a9823d2ee388edf660bb5c"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "ff2d336c5a523aa2c9e9a1ede984577a"
  },
  {
    "url": "zh/guide/hc/faq.html",
    "revision": "ee666375e04b5c52b45ba44db3291651"
  },
  {
    "url": "zh/guide/hc/install.html",
    "revision": "b588240372b8de7fe5687cce78309b06"
  },
  {
    "url": "zh/guide/hc/use.html",
    "revision": "bac49b501fc2e373a44f48bf8608f6b2"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "36c62d639f2069aedd42eda3f902ee0d"
  },
  {
    "url": "zh/guide/img.html",
    "revision": "bd103ee948890cedbbdbf3093837d4d8"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "28c12918309d1f7b6e1a0c6aa11581b3"
  },
  {
    "url": "zh/guide/install.html",
    "revision": "735e3f5dd1ada2a82d21c07910525197"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "5fadbd19b4d63f2f4460f933332f0f7a"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "64158e6a9ddf7d71782c5f3bb90e8b95"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "170fb43ddc6d7306446d46a320d21505"
  },
  {
    "url": "zh/guide/typescript-as-config.html",
    "revision": "4175baaaa5e496bc46ec2d9b2d0b9522"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "4f6637092131a0c66b34fee7bff4c3db"
  },
  {
    "url": "zh/index.html",
    "revision": "229aa408e3f457297d091c9e487620c0"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "aa827372e885b8630865dc88cd50e1c3"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "e667da1b57046968178a445bcbf43569"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "bbc717f664d8723a92ae9502b704f6df"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "f4e6de789b65f7d5e07a4dc108b98de8"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "222e83aae8d79067c767f51034a73af2"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "9c7e7eec2d07cbd3d21ef55d656dec8e"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "19452c910ff7fbf4a5e2312c4c38fc1e"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "72a436af3a19afd00ae555d98f9974ad"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "a4e73f74143ba916d64669c507c69722"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "95f80dddfed3a1253fa8cd08a02cb840"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "54a75ba3b15fc98e8feda860ff1ada41"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "96ad4a2813d53253b3513b2a5de8e8dc"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "3819110e66564911359b1cc6abd7dece"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "85bd2b23f670118c44ed9c1b7475a129"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "34220d90aed9b662190ac55848893192"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "275019f0ec143e3d32c5c5b0f08e27bd"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "49acd8d0cf3ee33b0448e6ffdab2bdb9"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "956c3d2e63a6c533b98b40b8d339eba8"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "b1485c261aa14a38533f50c70ea9b1dd"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "dcdd647633b357e304116d3191a9df9d"
  },
  {
    "url": "zh/report/index.html",
    "revision": "0c2c19a6de2aee8efa812518f625b82c"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "ec6954f6ff6061435dc41f8c0dcb4dad"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "73ae49d7d8b081feacc4deb0ba28107f"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "623ceacacd8fc34a6723af881c32b4e9"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "1cf27f7760eea6933be55e242d53ce58"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "3218871599070ae4a6dd74fe07d2229d"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "bfdd469393db4e06b108949ac36962ce"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "d7286814b4e84261f05142463897dbdb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
