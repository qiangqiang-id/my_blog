(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{538:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"历史背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#历史背景"}},[t._v("#")]),t._v(" 历史背景")]),t._v(" "),s("p",[t._v("HTML5 时代，Video、Audio 标签，可以让我们有直接播放音视频能力，提供了播放控制（如播放、暂停、音量调整）等基本功能，但是没有办法去访问音视频底层数据，限制了精细化的数据操作和交互。\n随着视频发展迅速，web 端需要承担越来越多的音视频交互的需求")]),t._v(" "),s("h2",{attrs:{id:"需求例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#需求例子"}},[t._v("#")]),t._v(" 需求例子")]),t._v(" "),s("ul",[s("li",[t._v("视频转码")]),t._v(" "),s("li",[t._v("视频水印")]),t._v(" "),s("li",[t._v("视频抠像")]),t._v(" "),s("li",[t._v("......")])]),t._v(" "),s("p",[t._v("在之前这些需求在 web 端都是没办法直接做到，只能采用服务端处理的方式。")]),t._v(" "),s("h2",{attrs:{id:"传统视频转码流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#传统视频转码流程"}},[t._v("#")]),t._v(" 传统视频转码流程")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/img/media/001/01.png"),alt:""}}),t._v(" "),s("blockquote",[s("p",[t._v("流程图箭头颜色对应步骤顺序")])]),t._v(" "),s("ol",[s("li",[s("font",{attrs:{color:"#dc9b04"}},[t._v("用户上传视频，不符合要求，上传完成后，通知服务端转码")])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#2ea121"}},[t._v(" 服务端从云服务下载视频，并转码")])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#245bdb"}},[t._v(" 把转码后的视频重新上传至云服务，并支持客户端转码完成")])],1)]),t._v(" "),s("h2",{attrs:{id:"存在的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存在的问题"}},[t._v("#")]),t._v(" 存在的问题")]),t._v(" "),s("ul",[s("li",[t._v("一个视频需要存储两次，占用云资源")]),t._v(" "),s("li",[t._v("多次的上传下载，占用宽带资源，等待焦虑")]),t._v(" "),s("li",[t._v("需要专门的转码服务器，增加服务器成本")])]),t._v(" "),s("p",[s("strong",[t._v("在 web 端处理，会是怎么样呢？")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/img/media/001/02.png"),alt:""}})]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("节约成本：")]),t._v(" 不存在浪费资源（存储、宽带、服务器）问题")]),t._v(" "),s("li",[s("strong",[t._v("节约时间：")]),t._v(" 不存在重复 上传/下载 问题")])]),t._v(" "),s("h1",{attrs:{id:"音视频基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#音视频基础"}},[t._v("#")]),t._v(" 音视频基础")]),t._v(" "),s("h2",{attrs:{id:"视频结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#视频结构"}},[t._v("#")]),t._v(" 视频结构")]),t._v(" "),s("p",[t._v("这是一个 mp4 视频结构\n"),s("img",{attrs:{src:t.$withBase("/img/media/001/03.png"),alt:""}})]),t._v(" "),s("h3",{attrs:{id:"容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器"}},[t._v("#")]),t._v(" 容器")]),t._v(" "),s("p",[t._v("视频文件格式，可以理解为 容器，容器包裹着 元数据 和 编码数据（音视频、字幕...），常见的容器有：mp4、mov、webm。")]),t._v(" "),s("h3",{attrs:{id:"元数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#元数据"}},[t._v("#")]),t._v(" 元数据")]),t._v(" "),s("p",[t._v("类似视频文件的铭牌，储存着视频文件的容器格式、编码格式、时长、码率、帧率...")]),t._v(" "),s("h3",{attrs:{id:"编码数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编码数据"}},[t._v("#")]),t._v(" 编码数据")]),t._v(" "),s("p",[t._v("包括视频轨道数据、音频轨道数据、字幕轨道数据 等等，这些数据如果不进行压缩，会非常庞大，不利于储存与传输。编码可以理解为将这些数据进行压缩，不同的编码格式，对应着不同的压缩算法，常见视频编码格式：avc(h264)、hevc(h265)、vp8、vp9、av1，常见音频编码格式：mp3、aac、wav。")]),t._v(" "),s("h3",{attrs:{id:"容器与编码对应关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器与编码对应关系"}},[t._v("#")]),t._v(" 容器与编码对应关系")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/img/media/001/04.jpg"),alt:""}}),t._v(" "),s("p",[s("a",{attrs:{href:"https://gpac.github.io/mp4box.js/test/filereader.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("视频结构检测"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"视频消费链路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#视频消费链路"}},[t._v("#")]),t._v(" 视频消费链路")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/img/media/001/05.png"),alt:""}}),t._v(" "),s("ul",[s("li",[s("strong",[t._v("采集：")]),t._v(" 从摄像头或麦克风采集原始音视频数据")]),t._v(" "),s("li",[s("strong",[t._v("编码：")]),t._v(" 将原始数据压缩成特定的编码格式，减少文件大小。")]),t._v(" "),s("li",[s("strong",[t._v("封装：")]),t._v(" 将编码后的音视频流封装成容器格式，方便播放和传输。")]),t._v(" "),s("li",[s("strong",[t._v("解封：")]),t._v(" 在播放或处理时，分离封装文件中的音视频流。")]),t._v(" "),s("li",[s("strong",[t._v("解码：")]),t._v(" 将压缩的音视频数据解码，还原为可播放格式，并输出到屏幕和扬声器。")])]),t._v(" "),s("h1",{attrs:{id:"webassembly-ffmpeg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webassembly-ffmpeg"}},[t._v("#")]),t._v(" WebAssembly + FFmpeg")]),t._v(" "),s("h2",{attrs:{id:"ffmpeg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ffmpeg"}},[t._v("#")]),t._v(" FFmpeg")]),t._v(" "),s("ul",[s("li",[t._v("强大的、开源的音视频处理工具， c/c++ 所编写")]),t._v(" "),s("li",[t._v("持多种音视频编解码器和容器格式")]),t._v(" "),s("li",[t._v("可对视频、音频做各种滤镜变换")])]),t._v(" "),s("h2",{attrs:{id:"webassembly"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webassembly"}},[t._v("#")]),t._v(" WebAssembly")]),t._v(" "),s("ul",[s("li",[t._v("WebAssembly（简称 Wasm）是一种新的代码格式")]),t._v(" "),s("li",[t._v("被编译成二进制格式，可以在浏览器中快速下载和执行，接近原生代码的速度，通常用来处理密集型计算")]),t._v(" "),s("li",[t._v("支持从多种高级语言（如 C、C++、Rust 等）编译而来")])]),t._v(" "),s("p",[t._v("FFmpeg 本身不能直接在浏览器执行，通过将 ffmpeg 编码成 wasm 二进制文件，实现在浏览器的沙箱中运行\n"),s("img",{attrs:{src:t.$withBase("/img/media/001/06.png"),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"优势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优势"}},[t._v("#")]),t._v(" 优势")]),t._v(" "),s("ul",[s("li",[t._v("实现了在浏览器侧精细化处理音视频")]),t._v(" "),s("li",[t._v("命令性执行，使用简单，不需要关心具体的实现逻辑")])]),t._v(" "),s("h2",{attrs:{id:"劣势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#劣势"}},[t._v("#")]),t._v(" 劣势")]),t._v(" "),s("ul",[s("li",[t._v("低性能（无法发挥完全的性能）")]),t._v(" "),s("li",[t._v("高功耗")]),t._v(" "),s("li",[t._v("资源加载消耗")])]),t._v(" "),s("h1",{attrs:{id:"webcodecs-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webcodecs-api"}},[t._v("#")]),t._v(" WebCodecs API")]),t._v(" "),s("h2",{attrs:{id:"是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#是什么"}},[t._v("#")]),t._v(" 是什么？")]),t._v(" "),s("ul",[s("li",[t._v("是一种技术规范，21 年 9 月份在 Chrome 94 中实现")]),t._v(" "),s("li",[t._v("为开发者提供了对音视频流的单个帧和音频数据块的底层能力")])]),t._v(" "),s("p",[t._v("看下 WebCodecs API 消费路径所处位置\n"),s("img",{attrs:{src:t.$withBase("/img/media/001/07.png"),alt:""}})]),t._v(" "),s("blockquote",[s("p",[t._v("WebCodecs 控制着视频的编解码过程，并且可操作其底层原始数据")])]),t._v(" "),s("h2",{attrs:{id:"怎么用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#怎么用"}},[t._v("#")]),t._v(" 怎么用？")]),t._v(" "),s("p",[s("strong",[t._v("需求：给视频植入水印")])]),t._v(" "),s("p",[t._v("图的下方是整个植入水印的步骤， 看下 WebCodecs API 所处位置\n"),s("img",{attrs:{src:t.$withBase("/img/media/001/08.png"),alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("步骤：")])]),t._v(" "),s("ol",[s("li",[s("font",{attrs:{color:"#dc9b04"}},[t._v(" 采用 mp4box.js 将视频解封，可以拿到编码数据 ")])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#2ea121"}},[t._v(" 通过 webCodecs 解码数据，可以拿到帧数据")])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#245bdb"}},[t._v(" 逐帧绘制水印，并导出")])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#6425d0"}},[t._v(" webCodecs 编码数据")])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#d83931"}},[t._v(" mp4-muxer 封装成 mp4 视频")])],1)]),t._v(" "),s("ul",[s("li",[t._v("视频解封/封装")])]),t._v(" "),s("div",{staticClass:"language-ts line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 解封")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mp4boxFile "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mp4box"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmp4boxFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onReady")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("info"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MP4Info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'元信息已经准备完毕'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取到视频文件的元信息，可以做一些准备工作")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开始解封")]),t._v("\n    mp4boxFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n mp4boxFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onSamples")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("unknown")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" samples"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MP4Sample"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'数据采集完毕'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拿到解封数据")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 将 buffer 传递给 MP4Box */")]),t._v("\nmp4boxFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendBuffer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmp4boxFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("flush")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br")])]),s("div",{staticClass:"language-ts line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 封装")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" muxer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MuxerMp4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  target"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayBufferTargetMp4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  video"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    codec"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'avc'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  audio"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    codec"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aac'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    numberOfChannels"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    sampleRate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("48000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  fastStart"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'in-memory'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加音视频数据块")]),t._v("\nmuxer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addVideoChunk")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chunk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" meta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmuxer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAudioChunk")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chunk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" meta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 完成")]),t._v("\noutHandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("muxer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("finalize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" buffer "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" outHandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("muxer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br")])]),s("ul",[s("li",[t._v("视频编码/解码")])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/img/media/001/09.png"),alt:""}}),t._v(" "),s("div",{staticClass:"language-ts line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 解码")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" videoDecoder "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VideoDecoder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("output")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拿到帧数据  VideoFrame")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 解码配置")]),t._v("\nvideoDecoder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("configure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    codec"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'avc1.42E01F'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    codedWidth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1280")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    codedHeight"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("720")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加视频块数据")]),t._v("\n videoDecoder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("decode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chunk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" videoDecoder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("flush")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br")])]),s("div",{staticClass:"language-ts line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 编码")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" videoEncoder "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VideoEncoder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("output")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chunk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" meta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拿到编码后的块数据 和 元信息")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Video encoding error'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 编码配置")]),t._v("\n videoEncoder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("configure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    codec"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'avc1.42E01F'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1280")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("720")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bitrate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1e6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加编码帧")]),t._v("\nvideoEncoder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" keyFrame"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" videoEncoder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("flush")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])]),s("h2",{attrs:{id:"何时用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#何时用"}},[t._v("#")]),t._v(" 何时用？")]),t._v(" "),s("p",[t._v("从三个方面来演示 webCodecs 的用途")]),t._v(" "),s("ol",[s("li",[t._v("视频生产：视频剪辑、视频录制、直播")]),t._v(" "),s("li",[t._v("视频消费：自定义播放器")]),t._v(" "),s("li",[t._v("视频处理：视频压缩、植入水印、帧率调整")])]),t._v(" "),s("h2",{attrs:{id:"优势-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优势-2"}},[t._v("#")]),t._v(" 优势")]),t._v(" "),s("ul",[s("li",[t._v("速度快、性能好")]),t._v(" "),s("li",[t._v("完全可实现精细化控制")]),t._v(" "),s("li",[t._v("和 webRtc、canvas（webGl、webGpu）、完美融合")])]),t._v(" "),s("h2",{attrs:{id:"劣势-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#劣势-2"}},[t._v("#")]),t._v(" 劣势")]),t._v(" "),s("ul",[s("li",[t._v("兼容性较差（支持谷歌和 edge 102+、Electron）")]),t._v(" "),s("li",[t._v("受限浏览器（取决浏览器提供什么编解码器，编码配置也受限制）")]),t._v(" "),s("li",[t._v("生态不够完善（"),s("a",{attrs:{href:"https://github.com/bilibili/WebAV",target:"_blank",rel:"noopener noreferrer"}},[t._v("webAV"),s("OutboundLink")],1),t._v("）")])]),t._v(" "),s("h1",{attrs:{id:"附录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#附录"}},[t._v("#")]),t._v(" 附录")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/WebCodecs_API",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebCodecs Api"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://hughfenghen.github.io/posts/2023/07/16/webav-0-overview/",target:"_blank",rel:"noopener noreferrer"}},[t._v("web 音视频概述"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.chrome.com/docs/web-platform/best-practices/webcodecs?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 WebCodecs 处理视频"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/0voice/audio_video_streaming",target:"_blank",rel:"noopener noreferrer"}},[t._v("audio_video_streaming"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://jameshfisher.com/2020/08/11/production-ready-green-screen-in-the-browser/",target:"_blank",rel:"noopener noreferrer"}},[t._v("绿幕抠图"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://sjzn.feishu.cn/wiki/IjOTwOCo0iRtTLkoZxHcpqbanPe",target:"_blank",rel:"noopener noreferrer"}},[t._v("花影"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);