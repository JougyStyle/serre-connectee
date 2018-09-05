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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "app/app-routing.module.ts",
    "revision": "a37588d28b418347c96e12827c142948"
  },
  {
    "url": "app/app.component.html",
    "revision": "667239aaf6727dcfa5c0a88e71631c3e"
  },
  {
    "url": "app/app.component.scss",
    "revision": "dc58eeaddd4c3df369556c2921b75acb"
  },
  {
    "url": "app/app.component.ts",
    "revision": "04201a95e58595cf7139d0a5a089fc98"
  },
  {
    "url": "app/app.module.ts",
    "revision": "f27933a7e0689490d2f23735524223fd"
  },
  {
    "url": "app/app.server.module.ts",
    "revision": "8296ccff982fddad6b9c3e4fe647b26d"
  },
  {
    "url": "app/chat-message/chat-message.component.html",
    "revision": "b009214de5a4e567a0816df0a1fbab1f"
  },
  {
    "url": "app/chat-message/chat-message.component.scss",
    "revision": "53671ceae5cb5d7bb02cc5664f921202"
  },
  {
    "url": "app/chat-message/chat-message.component.spec.ts",
    "revision": "60a0f09c040163286aabd7a883de3b08"
  },
  {
    "url": "app/chat-message/chat-message.component.ts",
    "revision": "a70bd51834751e036b3d36254b106ff7"
  },
  {
    "url": "app/chat-messages/chat-messages.component.html",
    "revision": "2d2fe62a169bd8c4affb2bb11e7c72ac"
  },
  {
    "url": "app/chat-messages/chat-messages.component.scss",
    "revision": "c433b3ac14d17e37abb3b25bfc2f317c"
  },
  {
    "url": "app/chat-messages/chat-messages.component.spec.ts",
    "revision": "af12ab1e0c57494a6361d278a426e81c"
  },
  {
    "url": "app/chat-messages/chat-messages.component.ts",
    "revision": "e8814682d0535e853ed39309630a8f7e"
  },
  {
    "url": "app/tutorial-create-search/tutorial-create-search.component.html",
    "revision": "abc52261e7b6e320e4e51b9ab4d4d26a"
  },
  {
    "url": "app/tutorial-create-search/tutorial-create-search.component.scss",
    "revision": "7527ccc5c78f5a279f33c972a195bd72"
  },
  {
    "url": "app/tutorial-create-search/tutorial-create-search.component.spec.ts",
    "revision": "2c5df88bdf363c4bbfdd2ec1ac0fb9d4"
  },
  {
    "url": "app/tutorial-create-search/tutorial-create-search.component.ts",
    "revision": "22af3ec64b934b178e4932ccde00bbb4"
  },
  {
    "url": "app/tutorial-get-ideas/tutorial-get-ideas.component.html",
    "revision": "79ab8f6554b8af1b54726f573d943eea"
  },
  {
    "url": "app/tutorial-get-ideas/tutorial-get-ideas.component.scss",
    "revision": "b5587dd85e027d2e91c5d5a19ddfc040"
  },
  {
    "url": "app/tutorial-get-ideas/tutorial-get-ideas.component.spec.ts",
    "revision": "fa9728e0f0a4170475be2c25011c14ec"
  },
  {
    "url": "app/tutorial-get-ideas/tutorial-get-ideas.component.ts",
    "revision": "3439ea493cb2e845ea374a8f4ff7557c"
  },
  {
    "url": "app/tutorial-get-information/tutorial-get-information.component.html",
    "revision": "de43293d1e68f31627f91c1905accb6f"
  },
  {
    "url": "app/tutorial-get-information/tutorial-get-information.component.scss",
    "revision": "9745a99024b3f70f480aaaa515abbd2b"
  },
  {
    "url": "app/tutorial-get-information/tutorial-get-information.component.spec.ts",
    "revision": "aae5ad6d2c6424e87722365c09de932b"
  },
  {
    "url": "app/tutorial-get-information/tutorial-get-information.component.ts",
    "revision": "448daaf820b7b4a7b1a5e05e7fe7efae"
  },
  {
    "url": "app/tutorial-give-opinion/tutorial-give-opinion.component.html",
    "revision": "897ae8d2aff093af34aae8bd7a685391"
  },
  {
    "url": "app/tutorial-give-opinion/tutorial-give-opinion.component.scss",
    "revision": "e8ccb979296c8325b97b22f7d1586ab1"
  },
  {
    "url": "app/tutorial-give-opinion/tutorial-give-opinion.component.spec.ts",
    "revision": "0ed12e8e4148deb80070ce6d7ab4709b"
  },
  {
    "url": "app/tutorial-give-opinion/tutorial-give-opinion.component.ts",
    "revision": "9057afb5fea6a0888fdf75b47f5c928d"
  },
  {
    "url": "app/how-to/how-to.component.html",
    "revision": "199dd0588544e27fcdaa2ebfe381c6ee"
  },
  {
    "url": "app/how-to/how-to.component.scss",
    "revision": "93e1775bb41b49fb0c3dad7e15218b3d"
  },
  {
    "url": "app/how-to/how-to.component.spec.ts",
    "revision": "928116e265b28485a0127e848022bb12"
  },
  {
    "url": "app/how-to/how-to.component.ts",
    "revision": "88c839f1b1f35918f2568b23ff068376"
  },
  {
    "url": "app/in-memory-data.service.ts",
    "revision": "1ab0e75daee341acbf9698f218edaa34"
  },
  {
    "url": "app/tutorial-invite-people/tutorial-invite-people.component.html",
    "revision": "8fcad54d66d3ea849e9d36a0c1da3ed7"
  },
  {
    "url": "app/tutorial-invite-people/tutorial-invite-people.component.scss",
    "revision": "620062050b48d25c99a2170d866b1032"
  },
  {
    "url": "app/tutorial-invite-people/tutorial-invite-people.component.spec.ts",
    "revision": "b442954001be2e12c3a63ee2aad294c2"
  },
  {
    "url": "app/tutorial-invite-people/tutorial-invite-people.component.ts",
    "revision": "0f98d7126db3089143acac0eddd5fb7f"
  },
  {
    "url": "app/page-home/page-home.component.html",
    "revision": "3108398f660c28b94de0649f6a1fa5ae"
  },
  {
    "url": "app/page-home/page-home.component.scss",
    "revision": "d03dabacf1461ab418bf78bc7a4bfb36"
  },
  {
    "url": "app/page-home/page-home.component.spec.ts",
    "revision": "6350b72019640d7af9aae46bc8c5d3d6"
  },
  {
    "url": "app/page-home/page-home.component.ts",
    "revision": "c38dd6b4c8900ac3089d5d56dc2eb1f3"
  },
  {
    "url": "app/page-prenom/page-prenom.component.html",
    "revision": "3e1a817e08262304b1998d807c98f4d1"
  },
  {
    "url": "app/page-prenom/page-prenom.component.scss",
    "revision": "1854b87e529a4ad13119b1f31f2b811a"
  },
  {
    "url": "app/page-prenom/page-prenom.component.spec.ts",
    "revision": "32e78e663b1a777f218e3baa8480efd8"
  },
  {
    "url": "app/page-prenom/page-prenom.component.ts",
    "revision": "5ad7366e32a783a699583fc16c74657c"
  },
  {
    "url": "app/page-sortie/page-sortie.component.html",
    "revision": "0b35874a4f1dc6a54a7d1c7cac5fea63"
  },
  {
    "url": "app/page-sortie/page-sortie.component.scss",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "app/page-sortie/page-sortie.component.spec.ts",
    "revision": "879c58e78d057a5253dbc5d7a89d9d0b"
  },
  {
    "url": "app/page-sortie/page-sortie.component.ts",
    "revision": "f1161c6ebdf11a619926211c34fcae52"
  },
  {
    "url": "app/page-streaming/page-streaming.component.html",
    "revision": "6e303a2a6fcfa5bc465609a567175d2c"
  },
  {
    "url": "app/page-streaming/page-streaming.component.scss",
    "revision": "8f1fdd9aff0657aa25b83c8d3e616979"
  },
  {
    "url": "app/page-streaming/page-streaming.component.spec.ts",
    "revision": "c49a5a9e272eac1ce76c60e2d9e0272b"
  },
  {
    "url": "app/page-streaming/page-streaming.component.ts",
    "revision": "4730d1dbde1e33621ffef5ea56bfe72f"
  },
  {
    "url": "app/phone-layer/phone-layer.component.html",
    "revision": "1412a9108987afdabb9cb14b999956d0"
  },
  {
    "url": "app/phone-layer/phone-layer.component.scss",
    "revision": "28d41372542480ec7251d9b129a81a8d"
  },
  {
    "url": "app/phone-layer/phone-layer.component.spec.ts",
    "revision": "f60b37307c492dd314a0bca1d3ffb16b"
  },
  {
    "url": "app/phone-layer/phone-layer.component.ts",
    "revision": "ea24df8af4ff96ee8619378f409aa098"
  },
  {
    "url": "app/scroll-to-section.directive.spec.ts",
    "revision": "bc43fef8ff57f3b68cd24e828869518a"
  },
  {
    "url": "app/scroll-to-section.directive.ts",
    "revision": "b37bd6fe6a80b86b4c21e640b0a50c48"
  },
  {
    "url": "app/seo.service.spec.ts",
    "revision": "72e937cbfa178a2f100831804bcda353"
  },
  {
    "url": "app/seo.service.ts",
    "revision": "b52f249aaa1fb2ef5dcf06116662dcee"
  },
  {
    "url": "app/tutorial-watch-result/tutorial-watch-result.component.html",
    "revision": "dddc040205698c521539f5e04d08d51c"
  },
  {
    "url": "app/tutorial-watch-result/tutorial-watch-result.component.scss",
    "revision": "6831036962fa2e7cf5c7c3cee79c6178"
  },
  {
    "url": "app/tutorial-watch-result/tutorial-watch-result.component.spec.ts",
    "revision": "4fd2f519521ea6ebfee4a8cd06fb6032"
  },
  {
    "url": "app/tutorial-watch-result/tutorial-watch-result.component.ts",
    "revision": "2b968c63ebb35b884c2200f32cb2cc99"
  },
  {
    "url": "assets/back_firstname.jpg",
    "revision": "2e8159be6923d69de7c0edad19cefb49"
  },
  {
    "url": "assets/back_hangout.png",
    "revision": "905e12e0ea872521da974f222871711b"
  },
  {
    "url": "assets/back_streaming.jpg",
    "revision": "70b11af23f3ab9e4326003440514c9b7"
  },
  {
    "url": "assets/buddiz_white.png",
    "revision": "60b24570f3881981e866ac9f5d849ef2"
  },
  {
    "url": "assets/buddiz.png",
    "revision": "5d1d8a8932d88a776989d92f65346b7b"
  },
  {
    "url": "assets/facebook.png",
    "revision": "307ff6afdc1bb9319fe0a9d8aa1dfbbd"
  },
  {
    "url": "assets/hangout.jpg",
    "revision": "25bf64f6f01d45549e6f62d129e95e6e"
  },
  {
    "url": "assets/invite.png",
    "revision": "077213060c1168ff78fb5a3227aeda92"
  },
  {
    "url": "assets/phone_layer.png",
    "revision": "cf86ff2d1debe334df424a2d1f37ec5c"
  },
  {
    "url": "assets/prenom.svg",
    "revision": "e04077052abc73e9513ff55aed80cebb"
  },
  {
    "url": "assets/resto.svg",
    "revision": "ce794753e4fd28cb2cb3776c8be94c32"
  },
  {
    "url": "assets/streaming.svg",
    "revision": "51950ccab99f8fc199200d231de7438c"
  },
  {
    "url": "assets/trademark.jpg",
    "revision": "a958b46129cca17a9166a5b6c402bc5c"
  },
  {
    "url": "assets/whatsapp.png",
    "revision": "9f7d22f86e9aacca05c5ad2ccc6bd3a5"
  },
  {
    "url": "environments/environment.prod.ts",
    "revision": "6de221395114600b523995704b7d1caa"
  },
  {
    "url": "environments/environment.ts",
    "revision": "00d67a7aa4129f04c8951c53cc4c56ec"
  },
  {
    "url": "favicon.png",
    "revision": "5d1d8a8932d88a776989d92f65346b7b"
  },
  {
    "url": "index.html",
    "revision": "57649c21ace46c282f82051ca8b62395"
  },
  {
    "url": "karma.conf.js",
    "revision": "9cd7c1aa1458a3f608f995b464dffc99"
  },
  {
    "url": "main.server.ts",
    "revision": "3ea926ff1e2c0b676bb65d3a93115f8e"
  },
  {
    "url": "main.ts",
    "revision": "3d19bfd2e6a98c7d6227e2a043ddda9d"
  },
  {
    "url": "manifest.json",
    "revision": "9dad7e8b9b1122e9cacf58792b6a437d"
  },
  {
    "url": "polyfills.ts",
    "revision": "3f3231313e5f1b4442caa2eb6ccebc89"
  },
  {
    "url": "styles.css",
    "revision": "07fd75e273e593d51140b654b9e307f9"
  },
  {
    "url": "test.ts",
    "revision": "3ddc24a1929f2cfe1b835548aaaa54f3"
  },
  {
    "url": "tsconfig.app.json",
    "revision": "919aaf2f60f34e756bf74b3fef32a9fe"
  },
  {
    "url": "tsconfig.server.json",
    "revision": "d8e6568e40df6dd0c2f5b78e70f51702"
  },
  {
    "url": "tsconfig.spec.json",
    "revision": "d5db885a7875c7e91ef18f9c7304ac4a"
  },
  {
    "url": "tslint.json",
    "revision": "076f57fdd2a3552afba0f31801729e11"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
