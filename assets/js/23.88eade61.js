(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{554:function(t,r,s){"use strict";s.r(r);var a=s(5),n=Object(a.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"如何理解-tcp-长连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何理解-tcp-长连接"}},[t._v("#")]),t._v(" 如何理解 TCP 长连接？")]),t._v(" "),s("h3",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("首先我们知道，http 是基于 TCP 连接 的基础上发送请求的，所谓的 TCP 连接的过程就是我们熟知面试常提的"),s("strong",[t._v("三次握手")]),t._v("。")]),t._v(" "),s("p",[t._v("在 http1.1 版本之前，浏览器的工作方式是每次 TCP 连接只能发送一个请求，当服务器响应后就会关闭这次连接，下一次请求需要再次建立 TCP 连接。")]),t._v(" "),s("p",[t._v("TCP 新建连接的成本是很高的，需要服务端和客户端来回三次握手。随着网页的请求越来越多，浏览器的性能就会越来越差，用户体验也就会随之下降。")]),t._v(" "),s("h3",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),s("p",[t._v("为了解决三次握手的性能问题，在 http1.1 版本中，在建立一次 TCP 连接之后，可以设置当前这次连接的过期时间，也就是发送完请求，TCP 连接并不会自动断开，在有效时间内可以重复使用这次连接发送请求。这就是所谓的长链接。")]),t._v(" "),s("p",[t._v("在"),s("strong",[t._v("chorem")]),t._v("浏览器中，可以并行同时开启"),s("strong",[t._v("六个")]),t._v("TCP 连接，也就是可以并行发起 6 个请求，一个 TCP 连接只能在同一时间发起一个请求，下一个请求，需要等到当前这个请求完毕，再去请求。")]),t._v(" "),s("p",[t._v("打开调试工具中的 network 这个 connection ID 就是 TCP 连接的 id 号。")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/img/connection-id.png"),alt:"connection-id"}})])}),[],!1,null,null,null);r.default=n.exports}}]);