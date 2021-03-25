将JavaScript插入HTML的主要方法是使用`<script>`元素

属性：
- async：可选。表示应该立即开始下载脚本，但不能阻止其他页面动作，比如下载资源或等待其他脚本加载。只对外部脚本文件有效。
- charset：可选。使用src属性指定的代码字符集。
- crossorigin：可选。配置相关请求的CORS（跨源资源共享）设置。默认不使用CORS。
- defer：可选。表示脚本可以延迟到文档完全被解析和显示之后再执行。只对外部脚本文件有效。
- integrity：可选。允许比对接收到的资源和指定的加密签名以验证子资源完整性（SRI，Subresource Integrity）。这个属性可以用于确保内容分发网络（CDN，Content Delivery Network）不会提供恶意内容。
- ~~language：废弃。~~
- src：可选。表示包含要执行的代码的外部文件。
- type：可选。代替language，表示代码块中脚本语言的内容类型（也称MIME类型）。

行内代码与外部文件，推荐使用外部文件的理由：

- 可维护性
- 缓存
  
- 适应未来

文档模式可以使用**doctype**切换文档模式

- 混杂模式（quirks mode）
- 标准模式（standards mode）
- 准标准模式（almost standards mode）
