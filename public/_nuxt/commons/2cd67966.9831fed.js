(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{507:function(t,e,r){var content=r(514);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("7fd56a46",content,!0,{sourceMap:!1})},508:function(t,e,r){var content=r(516);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("4e15c4d2",content,!0,{sourceMap:!1})},509:function(t,e,r){var content=r(518);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("f65596ce",content,!0,{sourceMap:!1})},510:function(t,e,r){var content=r(520);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("13aa003d",content,!0,{sourceMap:!1})},512:function(t,e,r){"use strict";r.d(e,"g",(function(){return n})),r.d(e,"d",(function(){return o})),r.d(e,"f",(function(){return l})),r.d(e,"e",(function(){return c})),r.d(e,"a",(function(){return d})),r.d(e,"c",(function(){return f})),r.d(e,"b",(function(){return m}));var n=function(t){return!!t||"Please provide some value"},o=function(t){return+t>0||"You have entered an invalid price"},l=function(t){return+t>0||"You have entered an invalid quantity"},c=function(t){return+t>=0||"You have entered an invalid number"};function d(t){return!!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.exec(t)||"Enter valid email"}function f(t){return void 0!==t&&t.length>=12&&t.length<=15||"Enter valid phone"}function m(t){return t.length>=8||"Enter at least 8 characters"}},513:function(t,e,r){"use strict";var n=r(507);r.n(n).a},514:function(t,e,r){(e=r(11)(!1)).push([t.i,".card[data-v-3f1472ea]{padding:20px!important}",""]),t.exports=e},515:function(t,e,r){"use strict";var n=r(508);r.n(n).a},516:function(t,e,r){(e=r(11)(!1)).push([t.i,".loading-dialog[data-v-5f9945f6]{padding:20px!important}.loading-dialog__message[data-v-5f9945f6]{font-size:18px!important;padding-left:15px!important;display:inline-block!important;font-family:google-sans,sans-serif!important}",""]),t.exports=e},517:function(t,e,r){"use strict";var n=r(509);r.n(n).a},518:function(t,e,r){(e=r(11)(!1)).push([t.i,".form{width:550px}.form__body{grid-template-columns:calc(50% - 10px) calc(50% - 10px)}@media(max-width:525px){.form__body{display:flex!important;flex-direction:column}}.span-2{grid-column:1/3!important}",""]),t.exports=e},519:function(t,e,r){"use strict";var n=r(510);r.n(n).a},520:function(t,e,r){(e=r(11)(!1)).push([t.i,".form[data-v-464b7779]{overflow:hidden!important;background:#fff!important;position:relative!important;border-radius:8px!important;padding:40px 40px 36px!important;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)!important}@media(max-width:525px){.form[data-v-464b7779]{box-shadow:none!important}}.form__loading[data-v-464b7779]{top:0!important;left:0!important;z-index:5!important;width:100%!important;height:100%!important;position:absolute!important;background:hsla(0,0%,100%,.8)!important}.form__header[data-v-464b7779]{color:#202124!important;text-align:center!important}.form__title[data-v-464b7779]{display:block!important;font-size:24px!important;line-height:32px!important;font-weight:400!important;padding-bottom:8px!important;font-family:google-sans,sans-serif!important}.form__message[data-v-464b7779]{display:block!important;font-size:16px!important;line-height:24px!important;letter-spacing:.1px!important;padding:0 70px 24px!important;font-family:Roboto,sans-serif!important}.form__body[data-v-464b7779]{display:grid;grid-column-gap:20px!important}.form__actions[data-v-464b7779]{display:flex!important;justify-content:flex-end!important}",""]),t.exports=e},521:function(t,e,r){"use strict";r(13),r(9),r(8),r(5),r(10),r(52);var n=r(4),o=r(14),l=r(159),c=Object(l.b)({name:"ErrorDialog",props:{error:{type:[Error,Object],default:null}},setup:function(t,e){var r=Object(l.e)(null);return Object(l.g)((function(){return t.error}),(function(){r.value=t.error})),Object(l.g)(r,(function(){null===r.value&&e.emit("close",!1)})),{localError:r}}}),d=(r(513),r(51)),f=r(68),m=r.n(f),v=r(523),h=r(753),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{width:"400"},model:{value:t.localError,callback:function(e){t.localError=e},expression:"localError"}},[r("v-card",{staticClass:"card",attrs:{width:"400"}},[t._v("\n    "+t._s(t.error)+"\n  ")])],1)}),[],!1,null,"3f1472ea",null),x=component.exports;m()(component,{VCard:v.a,VDialog:h.a});var _=Object(l.b)({name:"LoadingDialog",model:{prop:"loading",event:"loading"},props:{loading:{type:Boolean,default:!1},message:{type:String,default:"Loading ..."}}}),y=(r(515),r(148)),w=Object(d.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-dialog",{attrs:{width:"400",persistent:""}},[e("v-card",{staticClass:"loading-dialog",attrs:{width:"400"}},[e("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}}),this._v(" "),e("span",{staticClass:"loading-dialog__message"},[this._v(this._s(this.message))])],1)],1)}),[],!1,null,"5f9945f6",null),O=w.exports;function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}m()(w,{VCard:v.a,VDialog:h.a,VProgressCircular:y.a});var C=Object(l.b)({name:"SimpleForm",components:{ErrorDialog:x,LoadingDialog:O},props:{title:{type:String,default:"Form Title"},message:{type:String,required:!1},method:{type:String,default:"post"},data:{type:[Object,Function],required:!0},endpoint:{type:String,required:!0},return:{type:Boolean,default:!1},clear:{type:Boolean,default:!0},showError:{type:Boolean,default:!0}},setup:function(t,e){var r=Object(l.e)(null),n=Object(l.d)({error:null,valid:!1,loading:!1});function c(){return(c=Object(o.a)(regeneratorRuntime.mark((function o(){var data,l;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(n.loading=!0,o.prev=1,!(t.data instanceof Function)){o.next=8;break}return o.next=5,t.data();case 5:data=o.sent,o.next=9;break;case 8:data=t.data;case 9:if(null!==data){o.next=12;break}return t.showError&&(n.error="Provide valid data 'null' was provided",this.valid=!0),o.abrupt("return");case 12:l=null,o.t0=t.method.toLowerCase(),o.next="post"===o.t0?16:"patch"===o.t0?27:38;break;case 16:if(this.valid=!1,!(data instanceof FormData)){o.next=23;break}return o.next=20,e.root.$axios.post(t.endpoint,data,{headers:{"content-type":"multipart/form-data;"}});case 20:l=o.sent,o.next=26;break;case 23:return o.next=25,e.root.$axios.post(t.endpoint,data);case 25:l=o.sent;case 26:return o.abrupt("break",41);case 27:if(this.valid=!1,!(data instanceof FormData)){o.next=34;break}return o.next=31,e.root.$axios.patch(t.endpoint,data,{headers:{"content-type":"multipart/form-data;"}});case 31:l=o.sent,o.next=37;break;case 34:return o.next=36,e.root.$axios.patch(t.endpoint,data);case 36:l=o.sent;case 37:return o.abrupt("break",41);case 38:return n.error="Unknown METHOD was specified.",this.valid=!1,o.abrupt("return");case 41:l&&e.emit("response",l),t.return?e.root.$router.back():(e.emit("reset"),this.clear&&r.value.reset()),o.next=49;break;case 45:o.prev=45,o.t1=o.catch(1),this.valid=!0,n.error=o.t1;case 49:return o.prev=49,this.valid=!0,n.loading=!1,o.finish(49);case 53:case"end":return o.stop()}}),o,this,[[1,45,49,53]])})))).apply(this,arguments)}return j(j({myForm:r},Object(l.f)(n)),{},{trigger:function(){return c.apply(this,arguments)}})}}),S=(r(517),r(519),r(499)),E=r(533),V=Object(d.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{height:"fit-content",margin:"0 0"}},[r("v-form",{ref:"myForm",staticClass:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[t._t("header",[r("header",{staticClass:"form__header"},[t._t("logo"),t._v(" "),r("span",{staticClass:"form__title"},[t._v(t._s(t.title))]),t._v(" "),r("span",{staticClass:"form__message"},[t._v(t._s(t.message))])],2)]),t._v(" "),r("main",{staticClass:"form__body"},[t._t("default")],2),t._v(" "),t._t("actions",[r("footer",{staticClass:"form__actions"},[r("v-btn",{attrs:{color:"primary",elevation:"0",disabled:!t.valid},on:{click:t.trigger}},[t._v("\n          Submit\n        ")])],1)]),t._v(" "),r("error-dialog",{attrs:{error:t.error}}),t._v(" "),r("v-dialog",{attrs:{width:"400",persistent:""},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[r("v-card",{staticClass:"loading-dialog",staticStyle:{padding:"20px"},attrs:{width:"400"}},[r("v-progress-circular",{staticStyle:{"margin-right":"20px"},attrs:{indeterminate:"",color:"primary"}}),t._v(" "),r("span",{staticClass:"loading-dialog__message"},[t._v("Loading...")])],1)],1)],2)],1)}),[],!1,null,"464b7779",null);e.a=V.exports;m()(V,{VBtn:S.a,VCard:v.a,VDialog:h.a,VForm:E.a,VProgressCircular:y.a})},670:function(t,e,r){"use strict";r(8),r(5),r(10);var n=r(521),o=(r(26),r(20)),l=function t(){Object(o.a)(this,t),this.name=void 0},c=r(512),d={name:"UnitForm",components:{SimpleForm:n.a},props:{unit:{type:[Object,l],default:function(){return new l}},isUpdate:{type:Boolean,default:!1},title:{type:String,default:"Form"}},data:function(){return{imageFile:null,sendImage:null}},methods:{emailValidator:c.a,required:c.g,phoneValidator:c.c,returnBack:function(){this.$router.back()},formData:function(){for(var t=new FormData,e=0,r=Object.keys(this.unit);e<r.length;e++){var n=r[e];"id"===n||t.append(n,this.unit[n])}return t.forEach((function(t){return window.console.log(t)})),t}}},f=r(51),m=r(68),v=r.n(m),h=r(499),x=r(523),_=r(506),y=r(608),w=r(574),O=r(129),k=r(609),j=r(496),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticStyle:{display:"flex","justify-content":"center"}},[r("SimpleForm",{staticStyle:{margin:"30px 0"},attrs:{method:"post",data:t.formData,return:"",endpoint:t.isUpdate?"/unit/update/"+t.unit.id:"/unit/store"},scopedSlots:t._u([{key:"header",fn:function(){return[r("v-row",[r("v-col",{staticStyle:{display:"flex","align-items":"center","justify-content":"center"},attrs:{cols:"12",md:"1",sm:"1"}},[r("v-btn",{attrs:{icon:""},on:{click:t.returnBack}},[r("v-icon",[t._v("mdi-keyboard-backspace")])],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"11",sm:"11"}},[r("v-card-title",[t._v(t._s(t.title))])],1)],1)]},proxy:!0}])},[t._v(" "),r("div",{staticClass:"span-2"},[r("v-card",{staticStyle:{padding:"20px","margin-bottom":"30px","box-shadow":"none"}},[r("v-card-title",[t._v("Unit Information")]),t._v(" "),r("v-text-field",{staticStyle:{"align-items":"center !important"},attrs:{rules:[t.required],outlined:"",label:"Name",value:t.unit.name,dense:""},model:{value:t.unit.name,callback:function(e){t.$set(t.unit,"name",e)},expression:"unit.name"}})],1)],1)])],1)}),[],!1,null,null,null);e.a=component.exports;v()(component,{VBtn:h.a,VCard:x.a,VCardTitle:_.a,VCol:y.a,VContainer:w.a,VIcon:O.a,VRow:k.a,VTextField:j.a})}}]);