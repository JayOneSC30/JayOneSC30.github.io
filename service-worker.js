if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const l=e=>s(e,r),f={module:{uri:r},exports:c,require:l};i[r]=Promise.all(a.map((e=>f[e]||l(e)))).then((e=>(d(...e),c)))}}define(["./workbox-b4970c4e"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/11/15/hello-world/index.html",revision:"890303299eec16c9740ef401d870ae86"},{url:"about/index.html",revision:"9db57cc6d41f1257358cfed3da10f41d"},{url:"archives/2021/11/index.html",revision:"442d7e8be9912e938ea0e9b8986bebf7"},{url:"archives/2021/index.html",revision:"57b7e8babc2832c89df3b6bf2a325f5a"},{url:"archives/index.html",revision:"3042a95847fd1267d68949c3a493ba3f"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/index.html",revision:"d1668cd70dade6ab2c2548459501d329"},{url:"css/index.css",revision:"38ea3eb71088c0ea767c100f0eb6563e"},{url:"css/Jarry.css",revision:"be923230b45ca53bac34861ef263a61b"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/Logo.png",revision:"071c55aa8238ef0573b212667f67aa27"},{url:"index.html",revision:"375f6322ed4b85bf8373d9d485cdb013"},{url:"js/Jarry.js",revision:"3bb31318085a5d60568b0ef7cc54e9ef"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"ef69a7f769b09713af4f9f8f4f16c8ee"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"4fd99561eb1cfbee5f987a5440e5a438"},{url:"live2d-widget/demo/demo.html",revision:"180275f4ed193ab8a4713040b0a649c6"},{url:"live2d-widget/demo/login.html",revision:"5bcdd7f2471429e8dac7e866aab2b94b"},{url:"live2d-widget/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget/README.html",revision:"3d7233f7971913d0ec0f363a14a11cc3"},{url:"live2d-widget/waifu-tips.js",revision:"e01c75f70a9465389471f638b1356bf8"},{url:"live2d-widget/waifu.css",revision:"bb66afd3c8edead1aa90208e549818c1"},{url:"live2dw/assets/moc/shizuku.1024/texture_00.png",revision:"ca0698ca5a3bf2400e5cf8a1f456a61c"},{url:"live2dw/assets/moc/shizuku.1024/texture_01.png",revision:"c960c28ee3f0353023d9498d2362d23c"},{url:"live2dw/assets/moc/shizuku.1024/texture_02.png",revision:"efb0515bcaee933f8c38e750d2c4bd3b"},{url:"live2dw/assets/moc/shizuku.1024/texture_03.png",revision:"f735487e72e73a0ea528975041548a14"},{url:"live2dw/assets/moc/shizuku.1024/texture_04.png",revision:"5b282aa9f7d4fa68cc24c946c0556b87"},{url:"live2dw/assets/moc/shizuku.1024/texture_05.png",revision:"16f7b74f1e61bf2b21d91ea5c3ee71de"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"tags/index.html",revision:"0a35b6bb0acf7c701b5fe416cb047e81"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
