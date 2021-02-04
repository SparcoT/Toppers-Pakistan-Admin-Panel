(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{803:function(e,t,r){"use strict";r.r(t);r(51);var n=r(11),o=r(493),c=r(691),l=r(615),d={components:{ChangePasswordError:l.a,ChangePasswordSuccess:c.a},layout:function(e){return"none"},props:{id:{type:String,default:null}},data:function(){return{loading:!1,errors:[],change:{changePassword:"",password:"",id:""},success:null,type1:"password",type2:"password",icon1:"mdi-eye-off",icon2:"mdi-eye-off",message:"Your Password was changed!",messageCheck:!1}},methods:{required:o.g,emailValidator:o.a,togglePassword1:function(){"password"===this.type1?(this.type1="text",this.icon1="mdi-eye"):(this.type1="password",this.icon1="mdi-eye-off")},togglePassword2:function(){"password"===this.type2?(this.type2="text",this.icon2="mdi-eye"):(this.type2="password",this.icon2="mdi-eye-off")},userChangePassword:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.form.validate()){t.next=19;break}return t.prev=1,e.loading=!0,e.errors=[],e.messageCheck=!1,e.change.id=e.id,t.next=8,e.$axios.$post("reset-password",e.change);case 8:r=t.sent,console.log("After Response"),console.log(r),e.success=!0===r,t.next=19;break;case 14:t.prev=14,t.t0=t.catch(1),e.loading=!1,window.console.log(t.t0),t.t0.response?e.errors.push(t.t0.response.data.message):e.errors.push("Unable to process, Try again later");case 19:case"end":return t.stop()}}),t,null,[[1,14]])})))()}}},h=r(50),f=r(64),w=r.n(f),m=r(477),y=r(494),v=r(487),P=r(543),x=r(511),k=r(567),_=r(512),component=Object(h.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticStyle:{height:"100%",display:"flex","align-items":"center","justify-content":"center"}},[null===e.success?n("v-card",{staticStyle:{padding:"50px",width:"400px"}},[n("v-container",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[n("img",{attrs:{alt:"toppers-logo",src:r(348),width:"130px"}})]),e._v(" "),n("v-container",{staticStyle:{display:"flex","justify-content":"center",padding:"0"}},[n("v-card-title",[e._v("Change Password")])],1),e._v(" "),e.loading?n("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"#313F53"}}):e._e(),e._v(" "),e.loading?e._e():n("v-form",{ref:"form"},[e.messageCheck?n("ul",{staticStyle:{color:"green","margin-bottom":"15px"}},[n("li",[e._v("\n          "+e._s(e.message)+"\n        ")])]):e._e(),e._v(" "),e.errors.length?n("ul",{staticStyle:{color:"red","margin-bottom":"15px"}},e._l(e.errors,(function(t,i){return n("li",{key:i},[e._v("\n          "+e._s(t)+"\n        ")])})),0):e._e(),e._v(" "),n("v-text-field",{staticStyle:{color:"#313F53"},attrs:{color:"#313F53",outlined:"",rules:[e.required],type:e.type1,label:"Password",dense:"","append-icon":e.icon1},on:{"click:append":e.togglePassword1},model:{value:e.change.password,callback:function(t){e.$set(e.change,"password",t)},expression:"change.password"}}),e._v(" "),n("v-text-field",{staticStyle:{color:"#313F53"},attrs:{color:"#313F53",outlined:"",rules:[e.required,!e.change.password||function(t){return t===e.change.password||"Could Not Confirm Password"}],type:e.type2,label:"Confirm Password",dense:"","append-icon":e.icon2},on:{"click:append":e.togglePassword2,keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.userChangePassword(t)}},model:{value:e.change.confirmPassword,callback:function(t){e.$set(e.change,"confirmPassword",t)},expression:"change.confirmPassword"}}),e._v(" "),n("v-btn",{staticStyle:{color:"#494237"},attrs:{width:"100%",color:"#4f6318",large:"",elevation:"0",disabled:e.change.password!==e.change.confirmPassword},on:{click:e.userChangePassword}},[e._v("\n        Submit\n      ")])],1)],1):!0===e.success?n("ChangePasswordSuccess"):n("ChangePasswordError")],1)}),[],!1,null,null,null),C=component.exports;w()(component,{VBtn:m.a,VCard:y.a,VCardTitle:v.a,VContainer:P.a,VForm:x.a,VProgressLinear:k.a,VTextField:_.a});var S={name:"ForgetPassword",components:{ChangePasswordError:l.a,ChangePasswordForm:C},auth:!1,layout:"none",asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$axios,n=e.route,t.next=3,r.$get("forgetPassword/"+n.query.id);case 3:return t.t0=t.sent,t.abrupt("return",{token:t.t0});case 5:case"end":return t.stop()}}),t)})))()},head:{title:"Apna Pos"}},$=Object(h.a)(S,(function(){var e=this.$createElement,t=this._self._c||e;return this.$route.query.token===this.token.token?t("change-password-form",{attrs:{id:this.$route.query.id}}):t("change-password-error",{attrs:{token:""}})}),[],!1,null,"0451e058",null);t.default=$.exports}}]);