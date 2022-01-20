import React, { useState } from 'react';
import Head from 'next/head'
import Header from '../components/Header.js'
import axios from 'axios';
import Image from 'next/image';

function index() {
  const [query, setquery] = useState("")
  const [DataNeeded, setDataIWant] = useState(
    {
      "total": 1251674,
      "totalHits": 500,
      "hits": [
      {
      "id": 6792528,
      "pageURL": "https://pixabay.com/photos/tree-park-bench-autumn-fall-season-6792528/",
      "type": "photo",
      "tags": "tree, park bench, autumn",
      "previewURL": "https://cdn.pixabay.com/photo/2021/11/13/23/06/tree-6792528_150.jpg",
      "previewWidth": 150,
      "previewHeight": 100,
      "webformatURL": "https://pixabay.com/get/gc486f876987a76e6ac621f221e09d3a5a98ffed187cebe8cce4c462f4d27e4eae0cfb89ca409f32cabc38501ba8b183aa0aaecb76e07df02d3f107bec53966f4_640.jpg",
      "webformatWidth": 640,
      "webformatHeight": 427,
      "largeImageURL": "https://pixabay.com/get/g7d707cdf4411268cf308a50cc28406a31c4b8db0884eba54bc339ae193e23275535444c59d4f415fe20348f90952b107514ef51d04a256abfa3d9c2c000f17fa_1280.jpg",
      "imageWidth": 6000,
      "imageHeight": 4000,
      "imageSize": 11775993,
      "views": 431197,
      "downloads": 379283,
      "collections": 8494,
      "likes": 368,
      "comments": 75,
      "user_id": 7645255,
      "user": "jplenio",
      "userImageURL": "https://cdn.pixabay.com/user/2021/02/03/19-57-56-895_250x250.jpg"
      },
      {
      "id": 6835828,
      "pageURL": "https://pixabay.com/photos/tree-snow-winter-christmas-branch-6835828/",
      "type": "photo",
      "tags": "tree, snow, winter",
      "previewURL": "https://cdn.pixabay.com/photo/2021/11/30/17/06/tree-6835828_150.jpg",
      "previewWidth": 150,
      "previewHeight": 100,
      "webformatURL": "https://pixabay.com/get/gbf406e6590ef43961291edc4111c695c8c77522b056706e0343c00d59bc8ef4a383e27e5100ee4a152096c2d7516788326fbf45e13fbc2b8373ca40fe4276284_640.jpg",
      "webformatWidth": 640,
      "webformatHeight": 427,
      "largeImageURL": "https://pixabay.com/get/g1ca3095330af44b6e248e75ed3ed097cca21ae778129174a9edf85f393eade82314af502a8d93239f8864385989ef9dfe7de26146c685253e7432da496125046_1280.jpg",
      "imageWidth": 5760,
      "imageHeight": 3840,
      "imageSize": 2899210,
      "views": 362619,
      "downloads": 308702,
      "collections": 5666,
      "likes": 245,
      "comments": 49,
      "user_id": 334088,
      "user": "JillWellington",
      "userImageURL": "https://cdn.pixabay.com/user/2018/06/27/01-23-02-27_250x250.jpg"
      },
      {
      "id": 6862969,
      "pageURL": "https://pixabay.com/photos/northern-lights-norway-nature-6862969/",
      "type": "photo",
      "tags": "northern lights, norway, nature",
      "previewURL": "https://cdn.pixabay.com/photo/2021/12/11/15/06/northern-lights-6862969_150.jpg",
      "previewWidth": 150,
      "previewHeight": 84,
      "webformatURL": "https://pixabay.com/get/gcbc8a83331ed233bdffeab19130ccabae26f41d63598d1058400867d22579f063c5b4595b0349865117f654c8eaf4842d5ed06b5e6cd1e63f9c528200e62cf45_640.jpg",
      "webformatWidth": 640,
      "webformatHeight": 360,
      "largeImageURL": "https://pixabay.com/get/g54e4abfaba7383d1a06cdd3dba83d54b56fd90353e774d3b1764e157138bf934a90e9da4276fc77f27a0aa3758532bbc70b33b29be0bba00c84d9118112d8bba_1280.jpg",
      "imageWidth": 6000,
      "imageHeight": 3374,
      "imageSize": 4349372,
      "views": 204496,
      "downloads": 181363,
      "collections": 3594,
      "likes": 160,
      "comments": 21,
      "user_id": 7444623,
      "user": "Photo-View",
      "userImageURL": "https://cdn.pixabay.com/user/2018/11/20/18-14-40-20_250x250.jpg"
      },
      {
      "id": 6574455,
      "pageURL": "https://pixabay.com/photos/field-morning-sunrise-dawn-nature-6574455/",
      "type": "photo",
      "tags": "field, morning, sunrise",
      "previewURL": "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_150.jpg",
      "previewWidth": 150,
      "previewHeight": 100,
      "webformatURL": "https://pixabay.com/get/g6a60f459e299b264ddd9bca33b1e5085942214ed8911bf3bd1981bde4ae3010cd954c66c1ce516fae7792116009c4d3f49e09e29189f861ff3ac42c41684d03e_640.jpg",
      "webformatWidth": 640,
      "webformatHeight": 426,
      "largeImageURL": "https://pixabay.com/get/g226bf730aad0c04df89e73f3f069ec3cb72261b15025f7aea440ac5ef1d7b2cd4f908f40c89f2fd2980da61fb180ee7a4abf3baa18b6342e96181a42e7dc6aa6_1280.jpg",
      "imageWidth": 5967,
      "imageHeight": 3972,
      "imageSize": 4584508,
      "views": 1012510,
      "downloads": 902238,
      "collections": 15021,
      "likes": 613,
      "comments": 108,
      "user_id": 22927133,
      "user": "LagrangeHervé",
      "userImageURL": ""
      },
      {
      "id": 6924072,
      "pageURL": "https://pixabay.com/photos/mont-saint-michel-castle-chateau-6924072/",
      "type": "photo",
      "tags": "mont saint michel, castle, chateau",
      "previewURL": "https://cdn.pixabay.com/photo/2022/01/08/14/09/mont-saint-michel-6924072_150.jpg",
      "previewWidth": 150,
      "previewHeight": 96,
      "webformatURL": "https://pixabay.com/get/g8377c3260e95265a2255a2e6fba1a613494bccec3afab3eb9f5d058cddc4e8197b4696a7838ad14c18c0f5c5080dae21889abccc32ca2baefd9bd13e7f60fa54_640.jpg",
      "webformatWidth": 640,
      "webformatHeight": 409,
      "largeImageURL": "https://pixabay.com/get/g8e9381f1ae1d641a04959f08588c166865bb9fb569384cc954355547dbd8796e91534a7bf87451f8588675a65fb96a7bd9041bcbc405c9f290dec7c29cde78ff_1280.jpg",
      "imageWidth": 3065,
      "imageHeight": 1961,
      "imageSize": 1855646,
      "views": 36440,
      "downloads": 33542,
      "collections": 603,
      "likes": 35,
      "comments": 7,
      "user_id": 22758146,
      "user": "Dylanleagh",
      "userImageURL": "https://cdn.pixabay.com/user/2021/08/02/20-30-59-27_250x250.png"
      },
      {
      "id": 6842159,
      "pageURL": "https://pixabay.com/photos/nature-winter-season-snow-tree-6842159/",
      "type": "photo",
      "tags": "nature, winter, season",
      "previewURL": "https://cdn.pixabay.com/photo/2021/12/03/08/50/nature-6842159_150.jpg",
      "previewWidth": 150,
      "previewHeight": 100,
      "webformatURL": "https://pixabay.com/get/gc6c3c39c0b5ba9d69088c7ea636fd83cbdd69fefc3402e284da98432c5ab7ef80a6baf056c0ccf9180652a9d76c6d21c67517b421c3090a3f0913ed1a91141d3_640.jpg",
      "webformatWidth": 640,
      "webformatHeight": 427,
      "largeImageURL": "https://pixabay.com/get/gdc75ddd69b5ad2cf1be971943252546f3922f956fca81f5d63f3f36fbed21ce4a747abb8bb3828513e0fde79db61ef3cc458d29c76badd73c84a0a753a0c45a3_1280.jpg",
      "imageWidth": 4752,
      "imageHeight": 3168,
      "imageSize": 2948677,
      "views": 226109,
      "downloads": 196278,
      "collections": 3101,
      "likes": 197,
      "comments": 80,
      "user_id": 127419,
      "user": "cocoparisienne",
      "userImageURL": "https://cdn.pixabay.com/user/2021/08/04/18-39-41-925_250x250.jpeg"
      },
      {
      "id": 6923417,
      "pageURL": "https://pixabay.com/photos/lily-flower-orange-flower-petals-6923417/",
      "type": "photo",
      "tags": "lily, flower, orange flower",
      "previewURL": "https://cdn.pixabay.com/photo/2022/01/08/07/27/lily-6923417_150.jpg",
      "previewWidth": 150,
      "previewHeight": 100,
      "webformatURL": "https://pixabay.com/get/g105f888d807e3a17183c61682c4e7f555166edce1587ad4fe3ae7368dd36ff166a0f4b6c101e97ca460990d4313f5daf55a3ec0c22e7166b978087b8c9591267_640.jpg",
      "webformatWidth": 640,
      "webformatHeight": 427,
      "largeImageURL": "https://pixabay.com/get/g5045d04dd66f87ef4ea9bdf2d4415383a4d50c95f2bb224bb3bf5bd76cef6ccbc0e2785e0bb24e626d614ee2848f4d6f4f2e5979ccc66148e5edd2068498a92d_1280.jpg",
      "imageWidth": 6000,
      "imageHeight": 4000,
      "imageSize": 3128923,
      "views": 30785,
      "downloads": 26718,
      "collections": 478,
      "likes": 48,
      "comments": 8,
      "user_id": 25131118,
      "user": "Mbaria_Arts",
      "userImageURL": "https://cdn.pixabay.com/user/2022/01/06/12-39-35-925_250x250.png"
      },
      {
      "id": 6935773,
      "pageURL": "https://pixabay.com/photos/road-trees-winter-frost-snow-path-6935773/",
      "type": "photo",
      "tags": "road, trees, winter",
      "previewURL": "https://cdn.pixabay.com/photo/2022/01/13/18/05/road-6935773_150.jpg",
      "previewWidth": 150,
      "previewHeight": 113,
      "webformatURL": "https://pixabay.com/get/gbd9462af66bb0a0426b634230102af4f5c5f2a48b5bfc234cb9863514f1eac8a7995ed671e6556c9b8440f5caecdf7072a566cf97e528987822357fe735f3c48_640.jpg",
      "webformatWidth": 640,
      "webformatHeight": 480,
      "largeImageURL": "https://pixabay.com/get/g1d7b684be1315524f2f9092be0ec8dfe599e017a968bf056895b3cd94f09f0957501b5cd9a4112d6b83ea16d86360d1dad324d9032af26214beb51cf8b010ec0_1280.jpg",
      "imageWidth": 5095,
      "imageHeight": 3821,
      "imageSize": 9547188,
      "views": 8859,
      "downloads": 7376,
      "collections": 270,
      "likes": 36,
      "comments": 9,
      "user_id": 6795508,
      "user": "fietzfotos",
      "userImageURL": "https://cdn.pixabay.com/user/2017/10/24/21-58-51-377_250x250.jpg"
      },
      {
      "id": 6860582,
      "pageURL": "https://pixabay.com/photos/star-christmas-decoration-advent-6860582/",
      "type": "photo",
      "tags": "star, christmas, decoration",
      "previewURL": "https://cdn.pixabay.com/photo/2021/12/10/13/59/star-6860582_150.jpg",
      "previewWidth": 150,
      "previewHeight": 100,
      "webformatURL": "https://pixabay.com/get/gbdfbd7b10473ac28377e50404a4ec6902513ef30a1a952aa9e753783b72987cf6d5597ba0f8c09edc87d33c07b0a4d8d424c755b74fe1bbd7f7e9a19bc8be260_640.jpg",
      "webformatWidth": 640,
      "webformatHeight": 425,
      "largeImageURL": "https://pixabay.com/get/gfb1c523d5d588958638c5af272f9761a56865d09c6c7b12d461bffa1f18bb1ae1625e884ba10a47d97b82066e00f6d548626078b981c6bf2fb0affba66294ed9_1280.jpg",
      "imageWidth": 4288,
      "imageHeight": 2848,
      "imageSize": 4180729,
      "views": 113899,
      "downloads": 90956,
      "collections": 2501,
      "likes": 155,
      "comments": 40,
      "user_id": 12138562,
      "user": "wal_172619",
      "userImageURL": "https://cdn.pixabay.com/user/2021/08/13/07-59-58-955_250x250.jpg"
      },
      {
      "id": 6911736,
      "pageURL": "https://pixabay.com/photos/sunset-sea-horizon-dawn-sky-6911736/",
      "type": "photo",
      "tags": "sunset, sea, horizon",
      "previewURL": "https://cdn.pixabay.com/photo/2022/01/03/05/45/sunset-6911736_150.jpg",
      "previewWidth": 150,
      "previewHeight": 100,
      "webformatURL": "https://pixabay.com/get/gad2e335fb36e406316cca025c7e0689303a4f224b678c8b71182bc0be2825bf0872faabf61f4ff1980b22aca0948c9eff2db51c0adb473cba453c07f44ac37ef_640.jpg",
      "webformatWidth": 640,
      "webformatHeight": 427,
      "largeImageURL": "https://pixabay.com/get/g5cd932e700a333b2386264fb40103299ba58ef5978259ddd7f4fc38c05931146bc8ba6be45e872f25e2c71403866c13f23fd051a43f192049c6115e40721423c_1280.jpg",
      "imageWidth": 6000,
      "imageHeight": 4000,
      "imageSize": 8738964,
      "views": 18205,
      "downloads": 14643,
      "collections": 727,
      "likes": 46,
      "comments": 5,
      "user_id": 11514282,
      "user": "sanyoks",
      "userImageURL": "https://cdn.pixabay.com/user/2021/04/08/05-27-53-832_250x250.jpg"
      },
      {
      "id": 6891549,
      "pageURL": "https://pixabay.com/photos/nature-winter-tree-season-outdoors-6891549/",
      "type": "photo",
      "tags": "nature, winter, tree",
      "previewURL": "https://cdn.pixabay.com/photo/2021/12/24/17/14/nature-6891549_150.jpg",
      "previewWidth": 150,
      "previewHeight": 96,
      "webformatURL": "https://pixabay.com/get/gbae341278ceba26fc1517054df5e257cb149fe502a4dd21fdf2024eb4ef237523ae60e3a7fd7cfd226a40c27d694dcc3ac935d6584b272eb2354e0b2cabb37bb_640.jpg",
      "webformatWidth": 640,
      "webformatHeight": 409,
      "largeImageURL": "https://pixabay.com/get/g3f78d1f017fa2b9e774a18350fe3da576a31360cae5d5b13cccc8618275554cecb3668e703ea0a740e66e1adf75d2a022dc7183a09e88276263f56622320e657_1280.jpg",
      "imageWidth": 5184,
      "imageHeight": 3311,
      "imageSize": 3217836,
      "views": 76995,
      "downloads": 68981,
      "collections": 1307,
      "likes": 108,
      "comments": 55,
      "user_id": 4994132,
      "user": "adege",
      "userImageURL": "https://cdn.pixabay.com/user/2019/11/12/18-53-20-554_250x250.jpg"
      },
      {
      "id": 6786741,
      "pageURL": "https://pixabay.com/photos/year-2022-track-new-year-calendar-6786741/",
      "type": "photo",
      "tags": "year, 2022, track",
      "previewURL": "https://cdn.pixabay.com/photo/2021/11/11/17/14/year-6786741_150.jpg",
      "previewWidth": 150,
      "previewHeight": 84,
      "webformatURL": "https://pixabay.com/get/g1ebf31fed8c5345c70de34a8b341c953c019f5efff6c7f1556a300ed85e662b9faeb3a0630640643d4b3c69a6621cb53ac884110ab9b629007d0c08212cc9e64_640.jpg",
      "webformatWidth": 640,
      "webformatHeight": 360,
      "largeImageURL": "https://pixabay.com/get/gf10a5fb899faa9dc57f0175aa9f4526320eba179416ec4e7bf4e387f083bb40e2ca072545335f194a7673fa04e4594d111e0884942a4d8a912e1cb37937086ff_1280.jpg",
      "imageWidth": 5076,
      "imageHeight": 2855,
      "imageSize": 3713084,
      "views": 133339,
      "downloads": 99854,
      "collections": 4287,
      "likes": 154,
      "comments": 33,
      "user_id": 148124,
      "user": "Tumisu",
      "userImageURL": "https://cdn.pixabay.com/user/2020/01/12/12-31-35-440_250x250.png"
      },
      {
      "id": 6826687,
      "pageURL": "https://pixabay.com/photos/lantern-sea-heaven-beach-water-6826687/",
      "type": "photo",
      "tags": "lantern, sea, heaven",
      "previewURL": "https://cdn.pixabay.com/photo/2021/11/26/20/44/lantern-6826687_150.jpg",
      "previewWidth": 150,
      "previewHeight": 100,
      "webformatURL": "https://pixabay.com/get/g74805158f77b57fe192829c29ea39481de60e7e2f90126fa390af7def54a8003a4bec390da3bb3e64ec6752ce186b8b7a0aef09300006712b913ee3382e29c29_640.jpg",
      "webformatWidth": 640,
      "webformatHeight": 427,
      "largeImageURL": "https://pixabay.com/get/g63d58c5466bc15eccd337ca79f841d1ea2d39cd91d7b65a98093dce17f19adfe3bbff97f04e282c02fc7a4ce729b568e7b4e9737936f11e4483dc1d390ad083a_1280.jpg",
      "imageWidth": 5908,
      "imageHeight": 3939,
      "imageSize": 7222142,
      "views": 213942,
      "downloads": 201040,
      "collections": 3140,
      "likes": 158,
      "comments": 26,
      "user_id": 2780243,
      "user": "Lars_Nissen",
      "userImageURL": "https://cdn.pixabay.com/user/2018/08/16/21-35-32-742_250x250.jpg"
      },
      {
      "id": 6881040,
      "pageURL": "https://pixabay.com/photos/road-houses-city-village-old-town-6881040/",
      "type": "photo",
      "tags": "road, houses, city",
      "previewURL": "https://cdn.pixabay.com/photo/2021/12/19/12/27/road-6881040_150.jpg",
      "previewWidth": 150,
      "previewHeight": 100,
      "webformatURL": "https://pixabay.com/get/gb4d3ae003d98f29b54f36a4bc697214047617698ddbdd8563d94058ed426d32e4432922b2b7f9caeaa4a281546e8ecda509d74ce3eb3d86711dde5f163fce488_640.jpg",
      "webformatWidth": 640,
      "webformatHeight": 426,
      "largeImageURL": "https://pixabay.com/get/g61586e28766a081cfd36b38c6a97b728a2a2cb27845904f83775f8894436eb5182d9e016c175ee806be8d6796050e8b8deaf4fe2374f79ddb4f739d0981c327d_1280.jpg",
      "imageWidth": 6048,
      "imageHeight": 4024,
      "imageSize": 10382925,
      "views": 52689,
      "downloads": 44131,
      "collections": 1456,
      "likes": 123,
      "comments": 66,
      "user_id": 1032521,
      "user": "Tama66",
      "userImageURL": "https://cdn.pixabay.com/user/2022/01/04/10-58-00-805_250x250.jpg"
      },
      {
      "id": 6940364,
      "pageURL": "https://pixabay.com/photos/grey-crowned-crane-6940364/",
      "type": "photo",
      "tags": "grey crowned crane, balearica regulorum, tanzania",
      "previewURL": "https://cdn.pixabay.com/photo/2022/01/15/18/04/grey-crowned-crane-6940364_150.jpg",
      "previewWidth": 150,
      "previewHeight": 100,
      "webformatURL": "https://pixabay.com/get/g69d756342008f9041d1aca0908e6f37e925b08acd2c8ff1b16e8120ed012b1db490615743e47ceff3c00b7032a756197040639a3051cd2785f5d9eea52f072fb_640.jpg",
      "webformatWidth": 640,
      "webformatHeight": 427,
      "largeImageURL": "https://pixabay.com/get/gcd1a31354cf339363dbbc916e0865c0145dad58709c83fe146c038947cd2a00b6c068d2dc233013bd3f4da6a4f151688746beda558eca2332845b336a5eac89d_1280.jpg",
      "imageWidth": 5552,
      "imageHeight": 3701,
      "imageSize": 5203084,
      "views": 4638,
      "downloads": 4012,
      "collections": 119,
      "likes": 16,
      "comments": 6,
      "user_id": 12720469,
      "user": "patrickgregerson",
      "userImageURL": "https://cdn.pixabay.com/user/2021/11/16/01-31-26-927_250x250.jpeg"
      },
      {
      "id": 6918707,
      "pageURL": "https://pixabay.com/photos/katun-river-altai-mountains-6918707/",
      "type": "photo",
      "tags": "katun river, altai mountains, landscape",
      "previewURL": "https://cdn.pixabay.com/photo/2022/01/06/06/08/katun-river-6918707_150.jpg",
      "previewWidth": 150,
      "previewHeight": 100,
      "webformatURL": "https://pixabay.com/get/gf57f17e0727980e07ce266e2600a853a52e74706822ddcb3287a44ec21993627502d73783ec884aefbb7cbafa8a51e7b347d16d751af5faf38120668fa4bf917_640.jpg",
      "webformatWidth": 640,
      "webformatHeight": 427,
      "largeImageURL": "https://pixabay.com/get/g17d8772d26e5cfabb2b2d25ce1dd2cfacc81ea1c1767c2510fecba096f4b05f98beb98af5c5f4e94de129684b84fac4cec8a5baa294ec853749233a278268b6c_1280.jpg",
      "imageWidth": 6048,
      "imageHeight": 4032,
      "imageSize": 13707494,
      "views": 24354,
      "downloads": 21797,
      "collections": 491,
      "likes": 33,
      "comments": 8,
      "user_id": 3558116,
      "user": "stafichukanatoly",
      "userImageURL": "https://cdn.pixabay.com/user/2016/10/19/12-37-18-437_250x250.jpg"
      },
      {
      "id": 6939870,
      "pageURL": "https://pixabay.com/photos/lantern-festival-decoration-6939870/",
      "type": "photo",
      "tags": "lantern, festival, decoration",
      "previewURL": "https://cdn.pixabay.com/photo/2022/01/15/15/30/lantern-6939870_150.jpg",
      "previewWidth": 150,
      "previewHeight": 100,
      "webformatURL": "https://pixabay.com/get/g63554fae76e6e753c16c7a5f36e2bc7ef916bc0bce6f8648292f24ff7fb11a28f0c72f8965a5675403ed181f309f4d94c53f5c80938a45240f229f86f7217997_640.jpg",
      "webformatWidth": 640,
      "webformatHeight": 427,
      "largeImageURL": "https://pixabay.com/get/g4044843d78f2242da64a8e2afa60893d046fd4be5d25d0593c7895de8d3a3af150264434c60583b56b670abf851dbc6114103ce2e1c7b44da9cdcdf2d0bf2cb8_1280.jpg",
      "imageWidth": 5568,
      "imageHeight": 3712,
      "imageSize": 3330799,
      "views": 1630,
      "downloads": 1106,
      "collections": 105,
      "likes": 11,
      "comments": 2,
      "user_id": 24972920,
      "user": "airtank",
      "userImageURL": "https://cdn.pixabay.com/user/2021/12/25/02-27-02-323_250x250.jpg"
      },
      {
      "id": 6688901,
      "pageURL": "https://pixabay.com/photos/wine-glasses-toast-holiday-6688901/",
      "type": "photo",
      "tags": "wine, glasses, toast",
      "previewURL": "https://cdn.pixabay.com/photo/2021/10/07/15/12/wine-6688901_150.jpg",
      "previewWidth": 150,
      "previewHeight": 100,
      "webformatURL": "https://pixabay.com/get/g740b79af176e6484a7060bcd7746903a437cfe7055d86711643e81839e597f32a8a14df0f67bf1149e78e5169347b1c90d2771dc5b89fcd8865088e8d621bc4e_640.jpg",
      "webformatWidth": 640,
      "webformatHeight": 427,
      "largeImageURL": "https://pixabay.com/get/gbc03d211b790fe480ce297dd8bcf553c6ccd72b16927fa08482f7a688e738481538f3eb3960c79ee5a5f66c27dd34d2c76da0788e198bbb1d679bbef045d9b58_1280.jpg",
      "imageWidth": 6000,
      "imageHeight": 4000,
      "imageSize": 6701234,
      "views": 152579,
      "downloads": 82679,
      "collections": 6147,
      "likes": 261,
      "comments": 69,
      "user_id": 4638469,
      "user": "VisionPics",
      "userImageURL": "https://cdn.pixabay.com/user/2021/04/30/08-23-21-995_250x250.jpg"
      },
      {
      "id": 6898585,
      "pageURL": "https://pixabay.com/photos/snow-winter-cold-closeup-nature-6898585/",
      "type": "photo",
      "tags": "snow, winter, cold",
      "previewURL": "https://cdn.pixabay.com/photo/2021/12/28/04/12/snow-6898585_150.jpg",
      "previewWidth": 150,
      "previewHeight": 84,
      "webformatURL": "https://pixabay.com/get/g1b792ded65d17631840696683cad08fab5b8f3feb51633027057426d04dd1f5f2a5dd20a7bc938114d31c23e75b4038a34f840f12d569cf8e49fa6ce6ec142ce_640.jpg",
      "webformatWidth": 640,
      "webformatHeight": 360,
      "largeImageURL": "https://pixabay.com/get/gf971fb9a46bfd9c04e2a47e0f770d4d57f050773b9bd78688fc809202dfdb642f17cea61f8f39f51efce776a145083dfd7a92a2ddb0a55dd34f0616fd2cce548_1280.jpg",
      "imageWidth": 4608,
      "imageHeight": 2592,
      "imageSize": 3002841,
      "views": 79657,
      "downloads": 74414,
      "collections": 987,
      "likes": 61,
      "comments": 37,
      "user_id": 9538909,
      "user": "BlenderTimer",
      "userImageURL": "https://cdn.pixabay.com/user/2021/10/08/03-21-11-186_250x250.png"
      },
      {
      "id": 6887936,
      "pageURL": "https://pixabay.com/photos/landscape-winter-forest-snow-6887936/",
      "type": "photo",
      "tags": "landscape, winter, forest",
      "previewURL": "https://cdn.pixabay.com/photo/2021/12/22/16/50/landscape-6887936_150.jpg",
      "previewWidth": 150,
      "previewHeight": 100,
      "webformatURL": "https://pixabay.com/get/g09cce68618cc7db397a850ad8e4cfe5ce290f685da86e01e3eebe6e7ec7591487ee80a604a08b2e7743b29cbb3d6fa48268b7800d602500e96edcfca8958d15f_640.jpg",
      "webformatWidth": 640,
      "webformatHeight": 427,
      "largeImageURL": "https://pixabay.com/get/g356a1f4c56158bb30898043fb07322110e3cdb2620cb8794065df7b381bb29be1c1490f66028a62b1cf8eb34a928278301af05ebae204d5812993fbe9a8e5af9_1280.jpg",
      "imageWidth": 3301,
      "imageHeight": 2200,
      "imageSize": 3319598,
      "views": 62414,
      "downloads": 52843,
      "collections": 1198,
      "likes": 123,
      "comments": 45,
      "user_id": 4749850,
      "user": "Kanenori",
      "userImageURL": "https://cdn.pixabay.com/user/2021/07/31/07-04-28-942_250x250.jpg"
      }
      ]
      }
  )
  
  const fetchData = () => {
    axios.get(`https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_CLIENT_IT}&q=${query}&image_type=photo`).then((res)=>{
      setDataIWant(res["data"])
      console.log(res);
      
    })
  }
  // fetchData()
  return (
    <div>
      <div className="">
              <div className='md:flex bg-gray-800 px-5 py-2 sticky left-0 top-0 z-50 shadow-lg shadow-blue-700'>
                  <div className='flex md:mx-0 mx-auto w-max'>
                      <img src="./logo123.png" className='h-14'/>
                      <h1 className='text-3xl font-bold text-white my-auto ml-3'>Bhavik's Gallery</h1>
                  </div>
                  <div className='flex bg-gray-900 rounded-full h-10 ml-auto my-auto mt-2 md:mr-24'>
                      <input
                      value={query}
                      onChange={e => setquery(e.target.value)}
                      className='bg-gray-900 rounded-full h-full text-white px-3 font-semibold outline-none flex-1'/>
                      <div className="cursor-pointer h-full flex place place-content-center px-3 rounded-r-full" onClick={fetchData}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                      </div>
                  </div>
              </div>


              <div className='bg-gray-900 min-h-screen max-h-auto text-white grid grid-cols-1 md:grid-cols-2 lg:grid-col-4 xl:grid-cols-5'>
                {DataNeeded["hits"].map((datum) => (
                  // <Link to=>
                    <a className='px-5 py-3' href={`/ShowImage?userImageURL=${(datum["userImageURL"]).toString()}&user=${(datum["user"]).toString()}&image=${(datum["largeImageURL"]).toString()}&tags=${(datum["tags"]).toString()}`}>
                    
                      <div className='w-full'key={datum.id}>
                        <Image
                        className='rounded-t-lg object-cover'
                          src={datum["largeImageURL"]}
                          width= {700}
                          height={400}
                        />
                        <div className='bg-gray-800 rounded-b-md -translate-y-2 shadow-md
                        shadow-blue-600'>
                          <h1 className='py-1 mx-3 capitalize'>
                            {datum["tags"]}
                          </h1>
                        </div>
                      </div>
                    </a>
                  // </Link>

                    
                ))}
              </div>
          </div>
    </div>
  )
}

export default index

