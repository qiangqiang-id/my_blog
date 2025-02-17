(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{523:function(s,t,a){"use strict";a.r(t);var n=a(1),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("strong",[s._v("背景：")]),s._v(" 前端 dom 截图。如果 dom 中存在 gif 情况下，常规截图只能是静态的。所以在 dom 中存在 gif 图时，就需要特殊处理。")]),s._v(" "),t("h3",{attrs:{id:"技术方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#技术方案"}},[s._v("#")]),s._v(" 技术方案")]),s._v(" "),t("ul",[t("li",[s._v("解析 dom 中的 gif 元素")]),s._v(" "),t("li",[s._v("截图 gif 的每一帧图片")]),s._v(" "),t("li",[s._v("合成 gif 图")])]),s._v(" "),t("p",[t("strong",[s._v("步骤图：")]),s._v(" "),t("img",{attrs:{src:s.$withBase("/img/editor/004/01.png"),alt:"screenshot-gif"}})]),s._v(" "),t("h4",{attrs:{id:"解析-dom-中的-gif-元素"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解析-dom-中的-gif-元素"}},[s._v("#")]),s._v(" 解析 dom 中的 gif 元素")]),s._v(" "),t("p",[s._v("对应步骤图中的第一步，解析数据。使用"),t("a",{attrs:{href:"https://github.com/buzzfeed/libgif-js",target:"_blank",rel:"noopener noreferrer"}},[s._v("libgif.js"),t("OutboundLink")],1),s._v(" 解析 dom 中的 gif ，通过实例上的 get_frames 方法能拿到 gif 图每一帧的数据，数据格式如下：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" frames "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("data")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" ImageData\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("delay")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("data")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" ImageData\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("delay")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[t("strong",[s._v("data：")]),s._v(" 表示当前帧的图片数据，数据格式为: Uint8ClampedArray ，可以通过 canvas 中的"),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/putImageData",target:"_blank",rel:"noopener noreferrer"}},[s._v("putImageData"),t("OutboundLink")],1),s._v("方法在 canvas 中渲染。")]),s._v(" "),t("blockquote",[t("p",[s._v("Uint8ClampedArray（8 位无符号整型固定数组） 类型化数组表示一个由值固定在 0-255 区间的 8 位无符号整型组成的数组；如果你指定一个在 [0,255] 区间外的值，它将被替换为 0 或 255；如果你指定一个非整数，那么它将被设置为最接近它的整数。（数组）内容被初始化为 0。一旦（数组）被创建，你可以使用对象的方法引用数组里的元素，或使用标准的数组索引语法（即使用方括号标记）")])]),s._v(" "),t("p",[t("strong",[s._v("delay：")]),s._v(" 表示当前帧的时长。")]),s._v(" "),t("h4",{attrs:{id:"截图-gif-的每一帧图片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#截图-gif-的每一帧图片"}},[s._v("#")]),s._v(" 截图 gif 的每一帧图片")]),s._v(" "),t("p",[s._v("对应步骤图中第二步，拿到每一帧数据，画到 canvas 中导出图片，将图片替换 dom 中的 gif，然后截图。")]),s._v(" "),t("h4",{attrs:{id:"合成-gif-图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#合成-gif-图"}},[s._v("#")]),s._v(" 合成 gif 图")]),s._v(" "),t("p",[s._v("对应步骤图中的第三步，通过"),t("a",{attrs:{href:"https://github.com/jnordberg/gif.js/",target:"_blank",rel:"noopener noreferrer"}},[s._v("gif.js"),t("OutboundLink")],1),s._v(" 将截的所有图片合成 gif 图片。此插件没有 npm 包，只能文件拷贝到项目中。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" gif "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GIF")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("workers")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("quality")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 添加图片")]),s._v("\ngif"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addFrame")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("imageElement1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("delay")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ngif"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addFrame")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("imageElement2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("delay")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 合成成功回调")]),s._v("\ngif"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'finished'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("blob")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("URL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createObjectURL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("blob"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 开始合成")]),s._v("\ngif"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("render")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h4",{attrs:{id:"问题-dom-中存在多张-gif-时怎么办"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题-dom-中存在多张-gif-时怎么办"}},[s._v("#")]),s._v(" 问题： dom 中存在多张 gif 时怎么办？")]),s._v(" "),t("p",[s._v("以上都是 dom 中为一张 gif 图的情况，如果是多张 gif 的情况，每个 gif 的总时长是不一致，如何保证同时结束，这是需要考虑的。")]),s._v(" "),t("h5",{attrs:{id:"场景一"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#场景一"}},[s._v("#")]),s._v(" 场景一：")]),s._v(" "),t("ul",[t("li",[s._v("GIF_A 时长 1000ms")]),s._v(" "),t("li",[s._v("GIF_B 时长 800ms\n假设最后生成的 GIF 时长为 1000ms ，那么 GIF_B 少了 200ms，假设最后生成的 GIF 时长为 800ms，那么 GIF_A 丢失 200ms")])]),s._v(" "),t("p",[t("strong",[s._v("解决方案：取平均值")])]),s._v(" "),t("ol",[t("li",[s._v("平均值：（1000 + 800）/ 2 = 900 ms")]),s._v(" "),t("li",[s._v("GIF_A 减少 100 ms，假设总共 20 帧，单帧时长 50ms，则每帧减少 100 / 20 = 5 ms ,则每帧实际时长为 45ms。")]),s._v(" "),t("li",[s._v("GIF_B 增加 100 ms，假设总共 15 帧，单帧时长 50ms，则每帧减少 100 / 16 = 6 ms ,则每帧实际时长为 56ms。")])]),s._v(" "),t("h5",{attrs:{id:"场景二"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#场景二"}},[s._v("#")]),s._v(" 场景二：")]),s._v(" "),t("ul",[t("li",[s._v("GIF_A 时长 1000ms")]),s._v(" "),t("li",[s._v("GIF_B 时长 2600ms\n假设生成 GIF 时长 1000ms，GIF_A 就丢失了 1600ms ，假设 GIF_A 轮播 2 次，时长为 2000ms，GIF_A 还是丢失 600ms，假设 GIF_A 轮播 3 次，时长为 3000ms，那么 GIF_B 就会丢失 400ms。")])]),s._v(" "),t("p",[t("strong",[s._v("解决方案：取合理倍数")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 计算总时长\n * @param { min} 最短的gif时长\n * @param  { max } 最长的gif时长\n * @return  生成gif的总时长\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("computeTotalTime")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("min")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" number"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("max")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" number")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" div "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" max "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" min\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" decimal "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" div "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 与整倍数越靠近，说明差值越小")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" multiple "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" decimal "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" Math"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ceil")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("div"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Math"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("floor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("div"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" min "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" multiple\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("ol",[t("li",[s._v("合理倍数关系，GIF_A 与 GIF_B 的合理倍数应该是 2 还是 3？")]),s._v(" "),t("li",[s._v("如果是 2，则二者差距是 2600 - (1000 * 2) = 600 ms")]),s._v(" "),t("li",[s._v("如果是 3，则二者差距是 (1000 * 3 ) - 2600 = 400ms")]),s._v(" "),t("li",[s._v("差距越小越好，所以合理倍数关系为 3，总时长为 3000ms。")]),s._v(" "),t("li",[s._v("那么 GIF_A 直接 播 3 次就好了，GIF_B 需要补 400ms（补时长和场景一是一样的）")])]),s._v(" "),t("h4",{attrs:{id:"问题-生成-gif-图时-总共多少帧-每帧的-delay-时长多少"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题-生成-gif-图时-总共多少帧-每帧的-delay-时长多少"}},[s._v("#")]),s._v(" 问题：生成 GIF 图时，总共多少帧？ 每帧的 delay 时长多少？")]),s._v(" "),t("p",[s._v("理想情况下，每帧延时时长为 50ms，但所使用的 GIF 图来源不一，无法保证其一致性。另外总时长越长，帧数就越多，体积就越大，GIF 图生成时间就越长。\n所以限制帧数最大值为 100，如果超过 100，则每帧增加相应时长")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 计算gif数据\n * @param { gifsData} 所有的gif图解析之后的数据集合\n * @return { totalTime, frameLen, delay} 总时长、总帧数、每帧的延迟时间\n */")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 每帧的默认时长")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DEFAULT_GIF_DELAY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 最大帧数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MAX_GIF_FRAME")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("computeGifData")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("gifsData")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" GifData"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" times "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" gifsData"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("map")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("gif")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" gif"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("totalTime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" minTime "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Math"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("min")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("times"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" maxTime "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Math"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("max")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("times"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" div "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" maxTime "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" minTime\n\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" totalTime "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("div "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 计算最大时长")]),s._v("\n    totalTime "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("computeTotalTime")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("minTime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" maxTime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取平均时长")]),s._v("\n    totalTime "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" times"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("reduce")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("pre"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cur")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" pre "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" cur"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" times"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" delay "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DEFAULT_GIF_DELAY")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" frameLen "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" totalTime "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" delay "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 帧数")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("frameLen "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MAX_GIF_FRAME")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    delay "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" delay "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("frameLen "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MAX_GIF_FRAME")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    frameLen "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MAX_GIF_FRAME")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" totalTime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" frameLen"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" delay "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);