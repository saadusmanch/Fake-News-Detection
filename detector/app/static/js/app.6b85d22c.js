(function(t){function e(e){for(var r,o,l=e[0],s=e[1],c=e[2],d=0,p=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,l=1;l<n.length;l++){var s=n[l];0!==i[s]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var r=n("2b0e"),i=n("5f5b");n("ab8b"),n("2dd8");r["default"].use(i["a"]);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Fake News logo",src:n("87d3"),width:"400",height:"200"}}),r("HelloWorld",{attrs:{msg:"Fake News Detector For Reddit"}})],1)},o=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v(t._s(t.msg))]),n("br"),n("b-form",{staticClass:"form-inline justify-content-center"},[n("b-input-group",{staticClass:"w-25 mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:"https://"}},[n("b-input",{class:{"is-invalid":t.attemptSubmit&&!t.validation},attrs:{id:"inline-form-input-url",placeholder:"Enter Reddit URL"},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}})],1),n("b-button",{attrs:{variant:"danger"},on:{click:t.onClick}},[t._v("Detect "),n("b-spinner",{attrs:{small:""}})],1),n("b-form-invalid-feedback",{attrs:{state:t.validation}},[t._v(" URL must not be empty ")])],1),n("div",{staticClass:"mt-2"},[t._v("URL: "+t._s(t.url))]),n("br"),n("div",{staticClass:"text-center"},[n("div",{staticClass:"mt-2"},[t._v("Prediction: "+t._s(t.prediction))]),n("br"),n("div",{staticClass:"mt-2"},[t._v("Title: "+t._s(t.title))])]),n("div",{staticClass:"row align-items-center justify-content-center"},[n("b-card",{staticStyle:{"max-width":"60rem"},attrs:{"border-variant":"primary",header:t.header,"header-bg-variant":"primary","header-text-variant":"white",align:"center"}},[n("b-card-text",[t._v("Title: "+t._s(t.title))])],1)],1)],1)},s=[],c=n("bc3a"),u=n.n(c),d={name:"HelloWorld",props:{msg:String},data:function(){return{url:"",attemptSubmit:!1,prediction:"",title:""}},computed:{validation:function(){return this.url.length>0||!this.attemptSubmit},header:function(){return"Prediction: "+this.prediction},body:function(){return"Title"+this.title}},methods:{onClick:function(){var t=this;this.attemptSubmit=!0,this.validation?(this.attemptSubmit=!1,u.a.post("http://127.0.0.1:5000/ajax",{url:this.url}).then((function(e){console.log(e),t.prediction=e.data.tag,t.title=e.data.title}))):event.preventDefault()}}},p=d,f=(n("d009"),n("2877")),b=Object(f["a"])(p,l,s,!1,null,"1948c1fc",null),m=b.exports,v={name:"App",components:{HelloWorld:m}},h=v,g=(n("034f"),Object(f["a"])(h,a,o,!1,null,null,null)),y=g.exports;r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(y)}}).$mount("#app")},"85ec":function(t,e,n){},"87d3":function(t,e,n){t.exports=n.p+"../static/img/fakenews.102ddecf.png"},a4f2:function(t,e,n){},d009:function(t,e,n){"use strict";var r=n("a4f2"),i=n.n(r);i.a}});
//# sourceMappingURL=app.6b85d22c.js.map