webpackJsonp([19],{198:function(t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={methods:{confirm:function(){var t=this;this.$Modal.confirm({title:"确认对话框标题",content:"<p>一些对话框内容</p><p>一些对话框内容</p>",onOk:function(){t.$Message.info("点击了确定")},onCancel:function(){t.$Message.info("点击了取消")}})},custom:function(){this.$Modal.confirm({title:"确认对话框标题",content:"<p>一些对话框内容</p><p>一些对话框内容</p>",okText:"OK",cancelText:"Cancel"})},async:function(){var t=this;this.$Modal.confirm({title:"确认对话框标题",content:"<p>对话框将在 2秒 后关闭</p>",loading:!0,onOk:function(){setTimeout(function(){t.$Modal.remove(),t.$Message.info("异步关闭了对话框")},2e3)}})}}}},397:function(t,o){t.exports=" <i-button @click=confirm>标准</i-button> <i-button @click=custom>自定义按钮文字</i-button> <i-button @click=async>异步关闭</i-button> "},511:function(t,o,n){var e,i,c={};e=n(198),i=n(397),t.exports=e||{},t.exports.__esModule&&(t.exports=t.exports.default);var s="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(s.template=i),s.computed||(s.computed={}),Object.keys(c).forEach(function(t){var o=c[t];s.computed[t]=function(){return o}})}});