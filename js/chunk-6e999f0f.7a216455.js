(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e999f0f"],{"2e9c":function(e,t,a){"use strict";var r=a("76a8"),n=a.n(r);n.a},"76a8":function(e,t,a){},a55b:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-img",{staticStyle:{position:"fixed"},attrs:{src:"/img/Mountain-top-rocks-trees-sunrise-fog_1920x1200.jpg"}},[a("v-app",{staticStyle:{background:"transparent"}},[a("v-content",[a("v-container",{staticClass:"fill-height pa-0",attrs:{fluid:""}},[a("v-row",{staticStyle:{height:"100%"},attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"pa-0  center-element",attrs:{cols:"12",sm:"9",md:"4"}},[a("v-card",{staticClass:"px-6",staticStyle:{width:"100%"},attrs:{flat:"",color:"transparent"}},[a("v-card-text",[a("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{outlined:"",disabled:e.loading,label:"Username",name:"login",autocomplete:"username",rules:e.rules.username,"prepend-icon":"mdi-account",type:"text",required:""},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit(t)}},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),a("v-text-field",{attrs:{outlined:"",disabled:e.loading,label:"Password",name:"password",autocomplete:"current-password","prepend-icon":"mdi-lock",type:"password",rules:e.rules.password,required:""},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit(t)}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),a("v-card-actions",[e.$route.query.reg?a("v-btn",{attrs:{loading:e.loading,"x-large":"",color:"green",disabled:!e.valid||e.loading},on:{click:function(t){return e.submit(t,!0)}}},[e._v("register")]):e._e(),a("v-spacer"),a("v-btn",{attrs:{loading:e.loading,"x-large":"",color:"primary",disabled:!e.valid||e.loading},on:{click:e.submit}},[e._v("Login")])],1)],1)],1),a("v-col")],1)],1)],1)],1)],1)},n=[],s=a("5530"),o=a("2f62"),i={name:"Login",data:function(){return{loading:!1,valid:!1,username:"",password:"",rules:{username:[function(e){return!!e||"Username is required"}],password:[function(e){return!!e||"Password is required"},function(e){return e.length>=6||"Password must be more or equal to 6 characters"}]}}},methods:Object(s["a"])(Object(s["a"])({},Object(o["b"])({register:"auth/register",login:"auth/login"})),{},{submit:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.preventDefault(),this.loading=!0,this.$refs.form.validate()){var r=this.username,n=this.password,s=a?this.register({username:r,password:n}):this.login({username:r,password:n});s.catch((function(e){console.log(e),t.$store.commit("error",e.response.data)}))}else this.$store.commit("error","INVALID FORM PLEASE CHECK THE FORM AND TRY AGAIN!");this.loading=!1}})},l=i,d=(a("2e9c"),a("2877")),c=a("6544"),u=a.n(c),p=a("7496"),m=a("8336"),f=a("b0af"),g=a("99d9"),v=a("62ad"),b=a("a523"),h=a("a75b"),w=a("4bd4"),k=a("adda"),y=a("0fd9"),x=a("2fa4"),V=a("8654"),C=Object(d["a"])(l,r,n,!1,null,"6f8fc5e1",null);t["default"]=C.exports;u()(C,{VApp:p["a"],VBtn:m["a"],VCard:f["a"],VCardActions:g["b"],VCardText:g["d"],VCol:v["a"],VContainer:b["a"],VContent:h["a"],VForm:w["a"],VImg:k["a"],VRow:y["a"],VSpacer:x["a"],VTextField:V["a"]})}}]);
//# sourceMappingURL=chunk-6e999f0f.7a216455.js.map