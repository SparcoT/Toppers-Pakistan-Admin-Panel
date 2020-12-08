(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{506:function(t,e,r){"use strict";r.d(e,"a",(function(){return f}));var n=r(522),o=r(1),c=Object(o.h)("v-card__actions"),l=Object(o.h)("v-card__subtitle"),d=Object(o.h)("v-card__text"),f=Object(o.h)("v-card__title");n.a},511:function(t,e,r){"use strict";r.d(e,"g",(function(){return n})),r.d(e,"d",(function(){return o})),r.d(e,"f",(function(){return c})),r.d(e,"e",(function(){return l})),r.d(e,"a",(function(){return d})),r.d(e,"c",(function(){return f})),r.d(e,"b",(function(){return h}));var n=function(t){return!!t||"Please provide some value"},o=function(t){return+t>0||"You have entered an invalid price"},c=function(t){return+t>0||"You have entered an invalid quantity"},l=function(t){return+t>=0||"You have entered an invalid number"};function d(t){return!!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.exec(t)||"Enter valid email"}function f(t){return void 0!==t&&t.length>=12&&t.length<=15||"Enter valid phone"}function h(t){return t.length>=8||"Enter at least 8 characters"}},531:function(t,e,r){"use strict";r(13),r(9),r(10);var n=r(4),o=(r(99),r(8),r(5),r(128),r(34),r(37),r(6)),c=r(53),l=r(69);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},788:function(t,e,r){"use strict";r.r(e);r(52);var n=r(14),o={name:"PurchaseReturn",data:function(){return{to:null,from:null,showError:!1,error:null,data:[],dataColumns:[{text:"Date",value:"invoice_date"},{text:"Ref No.",value:"invoice_id"},{text:"Name",value:"customer.name"},{text:"Branch",value:"purchase_order.branch.name"},{text:"Total",value:"total"},{text:"Paid",value:"paid"},{text:"Balance",value:"balance"},{text:"",value:"actions"}]}},computed:{total:function(){return this.unpaid+this.paid}},mounted:function(){this.getData()},methods:{required:r(511).g,filterData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.form.validate()){e.next=13;break}if((data={}).to=t.to,data.from=t.from,"Sub Admin"!==t.$auth.user.type){e.next=10;break}return e.next=7,t.$axios.$post("/purchaseReturn/filter/"+t.$auth.user.branch_id,data);case 7:t.data=e.sent,e.next=13;break;case 10:return e.next=12,t.$axios.$post("/purchaseReturn/filter/-1",data);case 12:t.data=e.sent;case 13:case"end":return e.stop()}}),e)})))()},getData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Sub Admin"!==t.$auth.user.type){e.next=6;break}return e.next=3,t.$axios.$get("/purchaseReturn/branch/"+t.$auth.user.branch_id);case 3:t.data=e.sent,e.next=9;break;case 6:return e.next=8,t.$axios.$get("/purchaseReturn/branch/-1");case 8:t.data=e.sent;case 9:case"end":return e.stop()}}),e)})))()},handleCreateEvent:function(){this.$router.push("/purchase/purchaseReturn/add")},handleUpdateEvent:function(t){this.$router.push("/purchase/purchaseReturn/edit/"+t.id)},removeItem:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(window.console.log(t),!confirm("Are you sure?")){r.next=6;break}return r.next=4,e.$axios.$delete("/purchaseReturn/delete/"+t.id);case 4:(n=r.sent).error?(e.showError=!0,e.error=n.error):e.$emit("update");case 6:case"end":return r.stop()}}),r)})))()}}},c=r(51),l=r(68),d=r.n(l),f=r(499),h=r(522),v=r(506),m=r(775),_=r(770),x=r(531),w=r(129),y=r(505),O=r(496),$=r(46),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{padding:"20px"}},[r("div",[r("v-data-table",{staticClass:"elevation-1",attrs:{height:"58vh",items:t.data,headers:t.dataColumns,"disable-pagination":"","hide-default-footer":"",dense:""},scopedSlots:t._u([{key:"top",fn:function(){return[r("v-form",{ref:"form"},[r("div",{staticStyle:{display:"grid","grid-template-columns":"1fr 1fr",width:"60%","grid-column-gap":"15px",padding:"10px 20px"}},[r("v-text-field",{attrs:{dense:"",rules:[t.required],type:"date",outlined:"",label:"From"},on:{change:t.filterData},model:{value:t.from,callback:function(e){t.from=e},expression:"from"}}),t._v(" "),r("v-text-field",{attrs:{rules:[t.required],dense:"",type:"date",outlined:"",label:"To"},on:{change:t.filterData},model:{value:t.to,callback:function(e){t.to=e},expression:"to"}})],1)]),t._v(" "),r("v-toolbar",{attrs:{dense:"",flat:""}},[r("p",{staticStyle:{margin:"0"}},[t._v("Transactions")])]),t._v(" "),r("v-toolbar",{attrs:{flat:"",color:"white"}},[r("div",{staticStyle:{width:"250px"}},[r("v-text-field",{attrs:{placeholder:"Search","prepend-inner-icon":"mdi-magnify",outlined:"","hide-details":"","aria-hidden":"true",dense:"",clearable:""}})],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"mb-2",staticStyle:{"margin-bottom":"0 !important"},attrs:{color:"primary",dark:"",elevation:"0","aria-hidden":"true"},on:{click:t.handleCreateEvent}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-plus")]),t._v("New Purchase Return")],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var n=e.item;return[r("v-icon",{staticClass:"mr-2",attrs:{color:"green",small:"","aria-hidden":"true"},on:{click:function(e){return t.handleUpdateEvent(n)}}},[t._v("\n          mdi-pencil\n        ")]),t._v(" "),r("v-icon",{attrs:{"aria-hidden":"true",color:"red",small:""},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.removeItem(n)}}},[t._v("\n          mdi-delete\n        ")])]}},{key:"item.action_type",fn:function(e){var n=e.item;return[r("p",{staticStyle:{margin:"0"}},[t._v("\n          "+t._s(t.getType(n.action_type))+"\n        ")])]}},{key:"item.value",fn:function(e){var n=e.item;return[r("p",{staticStyle:{margin:"0"}},[t._v("Rs. "+t._s(n.value))])]}}])})],1),t._v(" "),r("v-dialog",{model:{value:t.showError,callback:function(e){t.showError=e},expression:"showError"}},[r("v-card",[r("v-card-title",[t._v("Error: "+t._s(t.error))])],1)],1)],1)}),[],!1,null,"b5c02a2e",null),j=component.exports;d()(component,{VBtn:f.a,VCard:h.a,VCardTitle:v.a,VDataTable:m.a,VDialog:_.a,VForm:x.a,VIcon:w.a,VSpacer:y.a,VTextField:O.a,VToolbar:$.a});var k={name:"Index",components:{PurchaseReturn:j},middleware:"isAdmin"},E=Object(c.a)(k,(function(){var t=this.$createElement;return(this._self._c||t)("PurchaseReturn")}),[],!1,null,"9c83105a",null);e.default=E.exports}}]);