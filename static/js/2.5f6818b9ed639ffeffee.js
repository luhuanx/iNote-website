webpackJsonp([2],{QbV2:function(e,s){},xJsL:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=r("Dd8w"),t=r.n(i),o=new(r("7+uW").default),n=r("NYxO"),a={name:"Login",data:function(){return{isShowLogin:!0,isShowRegister:!1,login:{username:"",password:"",notice:"输入用户名和密码",isError:!1},register:{username:"",password:"",notice:"创建账户后，请记住用户名和密码",isError:!1}}},methods:t()({},Object(n.b)({loginUser:"login",registerUser:"register"}),{showLogin:function(){this.isShowLogin=!0,this.isShowRegister=!1},showRegister:function(){this.isShowLogin=!1,this.isShowRegister=!0},onRegister:function(){var e=this;return/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.register.username)?/^.{6,16}$/.test(this.register.password)?void this.registerUser({username:this.register.username,password:this.register.password}).then(function(){e.register.isError=!1,e.register.notice="",e.$router.push({path:"notebooks"})}).catch(function(s){e.register.isError=!0,e.register.notice=s.msg}):(this.register.isError=!0,void(this.register.notice="密码长度为6~16个字符")):(this.register.isError=!0,void(this.register.notice="用户名3~15个字符，仅限于字母、数字、下划线和中文"))},onLogin:function(){var e=this;return/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.login.username)?/^.{6,16}$/.test(this.login.password)?void this.loginUser({username:this.login.username,password:this.login.password}).then(function(){e.login.isError=!1,e.login.notice="",o.$emit("userInfo",{username:e.login.username}),e.$router.push({path:"notebooks"})}).catch(function(s){e.login.isError=!0,e.login.notice=s.msg}):(this.login.isError=!0,void(this.login.notice="密码长度为6~16个字符")):(this.login.isError=!0,void(this.login.notice="用户名3~15个字符，仅限于字母、数字、下划线和中文"))}})},l={render:function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{attrs:{id:"login"}},[r("div",{staticClass:"modal-mask"},[r("div",{staticClass:"modal-wrapper"},[r("div",{staticClass:"modal-container"},[r("div",{staticClass:"main"}),e._v(" "),r("div",{staticClass:"form"},[r("h3",{on:{click:e.showRegister}},[e._v("创建账户")]),e._v(" "),r("transition",{attrs:{name:"slide"}},[r("div",{staticClass:"register",class:{show:e.isShowRegister}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.username,expression:"register.username"}],attrs:{type:"text",placeholder:"用户名"},domProps:{value:e.register.username},on:{input:function(s){s.target.composing||e.$set(e.register,"username",s.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.password,expression:"register.password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:e.register.password},on:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.onRegister.apply(null,arguments)},input:function(s){s.target.composing||e.$set(e.register,"password",s.target.value)}}}),e._v(" "),r("p",{class:{error:e.register.isError}},[e._v(e._s(e.register.notice))]),e._v(" "),r("div",{staticClass:"button",on:{click:e.onRegister}},[e._v("创建账号")])])]),e._v(" "),r("h3",{on:{click:e.showLogin}},[e._v("登录")]),e._v(" "),r("transition",{attrs:{name:"slide"}},[r("div",{staticClass:"login",class:{show:e.isShowLogin}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.login.username,expression:"login.username"}],attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:e.login.username},on:{input:function(s){s.target.composing||e.$set(e.login,"username",s.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.login.password,expression:"login.password"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:e.login.password},on:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.onLogin.apply(null,arguments)},input:function(s){s.target.composing||e.$set(e.login,"password",s.target.value)}}}),e._v(" "),r("p",{class:{error:e.login.isError}},[e._v(e._s(e.login.notice))]),e._v(" "),r("div",{staticClass:"button",on:{click:e.onLogin}},[e._v("登录")])])])],1)])])])])},staticRenderFns:[]};var g=r("VU/8")(a,l,!1,function(e){r("QbV2")},null,null);s.default=g.exports}});
//# sourceMappingURL=2.5f6818b9ed639ffeffee.js.map