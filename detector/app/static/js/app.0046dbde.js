(function(t){function e(e){for(var r,i,u=e[0],l=e[1],s=e[2],p=0,f=[];p<u.length;p++)i=u[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,u=1;u<n.length;u++){var l=n[u];0!==a[l]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var c=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var r=n("2b0e"),a=n("5f5b");n("ab8b"),n("2dd8");r["default"].use(a["a"]);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Fake News logo",src:n("87d3"),width:"400",height:"200"}}),r("HelloWorld",{attrs:{msg:"Fake News Detector For Reddit"}})],1)},i=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v(t._s(t.msg))]),n("br"),n("b-form",{staticClass:"form-inline justify-content-center"},[n("b-input-group",{staticClass:"w-25 mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:"https://"}},[n("b-input",{class:{"is-invalid":t.attemptSubmit&&!t.validation},attrs:{id:"inline-form-input-url",placeholder:"Enter Reddit URL"},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}})],1),n("b-button",{attrs:{variant:"danger"},on:{click:t.onClick}},[t._v("Detect")]),n("b-form-invalid-feedback",{attrs:{state:t.validation}},[t._v(" URL must not be empty ")])],1),n("div",{staticClass:"mt-2"},[t._v("URL: "+t._s(t.url))])],1)},l=[],s=n("bc3a"),c=n.n(s),p={name:"HelloWorld",props:{msg:String},data:function(){return{url:"",attemptSubmit:!1}},computed:{validation:function(){return this.url.length>0||!this.attemptSubmit}},methods:{onClick:function(){this.attemptSubmit=!0,this.validation?(this.attemptSubmit=!1,c.a.post("http://127.0.0.1:5000/ajax",{url:this.url})):event.preventDefault()}}},f=p,d=(n("a374"),n("2877")),b=Object(d["a"])(f,u,l,!1,null,"21293363",null),m=b.exports,v={name:"App",components:{HelloWorld:m}},h=v,g=(n("034f"),Object(d["a"])(h,o,i,!1,null,null,null)),y=g.exports;r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(y)}}).$mount("#app")},"85ec":function(t,e,n){},"87d3":function(t,e,n){t.exports=n.p+"../static/img/fakenews.102ddecf.png"},a374:function(t,e,n){"use strict";var r=n("dfaa"),a=n.n(r);a.a},dfaa:function(t,e,n){}});
//# sourceMappingURL=app.0046dbde.js.map