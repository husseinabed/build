(function(e){function t(t){for(var n,a,c=t[0],u=t[1],s=t[2],l=0,m=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);d&&d(t);while(m.length)m.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-25b5739c":"b0334c11","chunk-2be74c5d":"27b77bc3","chunk-066d82d2":"2c6f0be4","chunk-1d4f97bb":"383447ea","chunk-2d2086b7":"b86d1492","chunk-67995150":"6435cae1","chunk-09fffaaa":"bc670909","chunk-cb3362da":"a3ecc73c"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={"chunk-25b5739c":1,"chunk-2be74c5d":1,"chunk-066d82d2":1,"chunk-1d4f97bb":1,"chunk-cb3362da":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-25b5739c":"4bd81cc8","chunk-2be74c5d":"7b229630","chunk-066d82d2":"7b229630","chunk-1d4f97bb":"a5fbd58d","chunk-2d2086b7":"31d6cfe0","chunk-67995150":"31d6cfe0","chunk-09fffaaa":"31d6cfe0","chunk-cb3362da":"288928d5"}[e]+".css",o=u.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===o))return t()}var m=document.getElementsByTagName("style");for(c=0;c<m.length;c++){s=m[c],l=s.getAttribute("data-href");if(l===n||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],d.parentNode.removeChild(d),r(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var m=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",m.name="ChunkLoadError",m.type=n,m.request=a,r[1](m)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var m=0;m<s.length;m++)t(s[m]);var d=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1:function(e,t){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("router-view"),r("v-snackbar",{attrs:{absolute:e.snackbar.absolute,color:e.snackbar.color,bottom:"bottom"===e.snackbar.y,left:"left"===e.snackbar.x,"multi-line":"multi-line"===e.snackbar.mode,right:"right"===e.snackbar.x,timeout:e.snackbar.timeout,top:"top"===e.snackbar.y,vertical:"vertical"===e.snackbar.mode},model:{value:e.snackbar.value,callback:function(t){e.$set(e.snackbar,"value",t)},expression:"snackbar.value"}},[e._v(" "+e._s(e.snackbar.text)+" "),r("v-btn",{attrs:{dark:"",icon:""},on:{click:e.snackbarClose}},[r("v-icon",[e._v("mdi-close")])],1)],1)],1)},o=[],i=r("5530"),c=r("2f62"),u={name:"App",computed:Object(i["a"])(Object(i["a"])({},Object(c["d"])({user:function(e){return e.auth.user},snackbar:function(e){return e.snackbar},error:function(e){return e.error},success:function(e){return e.success},io:function(e){return e.api.io}})),Object(c["c"])({isAuthenticated:"auth/isAuthenticated"})),methods:Object(i["a"])({},Object(c["b"])({snackbarOpen:"snackbar/open",snackbarClose:"snackbar/close"})),watch:{isAuthenticated:function(e){e?(this.$router.push("/"),this.io.emit("setUser",this.user._id)):this.$router.push("/login")},error:function(e){var t=this;e.length&&this.snackbarOpen([e,"red"]).then((function(){setTimeout((function(){t.$store.commit("error","")}),t.snackbar.timeout)}))},success:function(e){var t=this;e.length&&this.snackbarOpen([e,"green"]).then((function(){setTimeout((function(){t.$store.commit("success","")}),t.snackbar.timeout)}))}},created:function(){var e=this,t=this;this.io.on("sale_assign",(function(r){e.snackbarOpen([r.message,"white black--text"]),console.log(r.message,t)})),this.user&&(this.$vuetify.theme.dark=this.user.dark_theme,this.io.emit("setUser",this.user._id))}},s=u,l=r("2877"),m=r("6544"),d=r.n(m),p=r("7496"),f=r("8336"),h=r("132d"),b=r("2db4"),v=Object(l["a"])(s,a,o,!1,null,null,null),g=v.exports;d()(v,{VApp:p["a"],VBtn:f["a"],VIcon:h["a"],VSnackbar:b["a"]});var k=r("9483");Object(k["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("c975"),r("b0c0"),r("d3b7");var w=r("8c4f"),y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"sandbox"}},[e.user.rights?r("v-navigation-drawer",{attrs:{clipped:e.primaryDrawer.clipped,floating:e.primaryDrawer.floating,"mini-variant":e.primaryDrawer.mini,permanent:"permanent"===e.primaryDrawer.type,temporary:"temporary"===e.primaryDrawer.type,app:"",overflow:""},model:{value:e.primaryDrawer.model,callback:function(t){e.$set(e.primaryDrawer,"model",t)},expression:"primaryDrawer.model"}},[r("v-list",[e._l(e.drawerList,(function(t,n){return[e.user.rights.filter((function(e){return t.value==e.value&&e.read})).length||"dashboard"==t.value?r("v-list-item",{key:n,attrs:{to:t.path}},[r("v-list-item-icon",[r("v-icon",[e._v(e._s(t.icon))])],1),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(t.label))])],1)],1):e._e()]}))],2)],1):e._e(),r("v-app-bar",{attrs:{"clipped-left":e.primaryDrawer.clipped,app:""}},["permanent"!==e.primaryDrawer.type?r("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.primaryDrawer.model=!e.primaryDrawer.model}}}):e._e(),r("v-toolbar-title",[e._v("Roaa")]),r("v-spacer"),e.user?r("v-menu",{attrs:{"close-on-content-click":!1},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-list",{staticClass:"ma-0",attrs:{dense:"",color:"transparent"}},[r("v-list-item",e._g({},n),[r("v-list-item-avatar",{staticClass:"ml-1"},[r("v-avatar",e._g({attrs:{color:"red",size:"35"}},n),[r("span",{staticClass:"white--text "},[e._v(e._s(e.displayName.substring(0,2).toUpperCase()))])])],1),r("v-list-item-content",[r("v-list-item-title",[e._v(" "+e._s(e.displayName)+" ")]),r("v-list-item-subtitle",[e._v(" "+e._s(e.user.role)+" ")])],1)],1)],1)]}}],null,!1,1220985458),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e.user?r("v-card",[r("v-list",[r("v-list-item",[r("v-list-item-icon",[r("v-avatar",{attrs:{color:"red"}},[r("span",{staticClass:"white--text "},[e._v(e._s(e.displayName.substring(0,2).toUpperCase()))])])],1),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(e.displayName))]),r("v-list-item-subtitle",[e._v(e._s(e.user.role))])],1),r("v-list-item-action")],1)],1),r("v-divider"),r("v-list",[r("v-list-item",[r("v-list-item-action",[r("v-switch",{attrs:{primary:""},model:{value:e.$vuetify.theme.dark,callback:function(t){e.$set(e.$vuetify.theme,"dark",t)},expression:"$vuetify.theme.dark"}})],1),r("v-list-item-title",[e._v("Dark Theme")])],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary",text:""},on:{click:e.logout}},[r("v-icon",[e._v("mdi-logout")]),e._v(" Logout")],1)],1)],1):e._e()],1):e._e()],1),r("v-content",{class:{grey:!e.$vuetify.theme.dark,"lighten-4":!e.$vuetify.theme.dark}},[r("v-container",{staticClass:"pa-9",attrs:{fluid:""}},[r("router-view")],1)],1)],1)},x=[],_=(r("498a"),r("96cf"),r("1da1")),O={data:function(){return{drawers:["Default (no property)","Permanent","Temporary"],primaryDrawer:{model:null,type:"default (no property)",clipped:!0,floating:!1,mini:!1},fav:!0,menu:!1,message:!1,hints:!0,drawerList:[{label:"Dashboard",path:"/",icon:"mdi-view-dashboard",value:"dashboard"},{label:"Sales",path:"/sale",icon:"mdi-printer-pos",value:"sale"},{label:"Retention",path:"/retention",icon:"mdi-printer-pos",value:"retention"},{label:"Payment Methods",path:"/payment_method",icon:"mdi-credit-card-settings-outline",value:"payment_method"},{label:"Affiliate",path:"/affiliate",icon:"mdi-account-network-outline",value:"affiliate"},{label:"Users",path:"/user",icon:"mdi-account-multiple",value:"user"},{label:"Roles",path:"/role",icon:"mdi-key",value:"role"}]}},computed:Object(i["a"])(Object(i["a"])({},Object(c["d"])({user:function(e){return e.auth.user}})),{},{displayName:function(){if(this.user&&this.user.displayName){var e=this.user.displayName.trim().length>0;return e?this.user.displayName:this.user.username}return""}}),methods:Object(i["a"])({},Object(c["b"])({logout:"auth/logout",dark:"auth/dark",get:"api/get"})),watch:{"$vuetify.theme.dark":function(e){this.dark(e)}},created:function(){return Object(_["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},j=O,A=r("40dc"),V=r("5bc1"),C=r("8212"),R=r("b0af"),S=r("99d9"),I=r("a523"),D=r("a75b"),L=r("ce7e"),N=r("8860"),T=r("da13"),P=r("1800"),$=r("8270"),E=r("5d23"),B=r("34c3"),U=r("e449"),q=r("f774"),M=r("2fa4"),F=r("b73d"),H=r("2a7f"),J=Object(l["a"])(j,y,x,!1,null,null,null),z=J.exports;d()(J,{VApp:p["a"],VAppBar:A["a"],VAppBarNavIcon:V["a"],VAvatar:C["a"],VBtn:f["a"],VCard:R["a"],VCardActions:S["b"],VContainer:I["a"],VContent:D["a"],VDivider:L["a"],VIcon:h["a"],VList:N["a"],VListItem:T["a"],VListItemAction:P["a"],VListItemAvatar:$["a"],VListItemContent:E["g"],VListItemIcon:B["a"],VListItemSubtitle:E["j"],VListItemTitle:E["k"],VMenu:U["a"],VNavigationDrawer:q["a"],VSpacer:M["a"],VSwitch:F["a"],VToolbarTitle:H["c"]});var K=r("bc3a"),G=r.n(K),Q={baseURL:"http://193.46.199.181:3000/"},W=Q.baseURL,X=function(){var e=G.a.create({baseURL:W,timeout:1e3});return e};function Y(e){var t=document.createElement("DIV");return t.innerHTML=e,t.textContent||t.innerText||""}var Z={namespaced:!0,state:{user:JSON.parse(localStorage.getItem("user"))||null,token:localStorage.getItem("token")||null},mutations:{user:function(e,t){t&&localStorage.setItem("user",JSON.stringify(t)),e.user=t},token:function(e,t){t&&localStorage.setItem("token",t),e.token=t}},getters:{isAuthenticated:function(e){return!!e.token}},actions:{register:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function r(){var n,a,o,i,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=t.username,o=t.password,i=X(),r.next=5,i.post("/auth/register",{username:a,password:o});case 5:c=r.sent,console.log(c.data),n("token",c.data.token),n("user",c.data.user);case 9:case"end":return r.stop()}}),r)})))()},login:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function r(){var n,a,o,i,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=t.username,o=t.password,i=X(),console.log({username:a,password:o}),r.next=6,i.post("/auth/login",{username:a,password:o});case 6:c=r.sent,console.log(c.data),n("token",c.data.token),n("user",c.data.user);case 10:case"end":return r.stop()}}),r)})))()},logout:function(e){return Object(_["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=e.commit,localStorage.removeItem("user"),localStorage.removeItem("token"),r("token",null),r("user",null);case 5:case"end":return t.stop()}}),t)})))()},dark:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function r(){var n,a,o,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.state,a.user.dark_theme=t,o=X(),r.next=5,o.put("/auth/dark",{id:a.user._id,dark_theme:t}).catch((function(e){return n("error",Y(e.response?e.response.data:e),{root:!0})}));case 5:c=r.sent,200==c.status&&n("user",Object(i["a"])({},a.user));case 7:case"end":return r.stop()}}),r)})))()}}},ee=r("3835"),te={namespaced:!0,state:{text:"",value:!1,absolute:!1,x:"center",y:"top",timeout:6e3,mode:"multi-line",color:"error"},mutations:{text:function(e,t){e.text=t},value:function(e,t){e.value=t},absolute:function(e,t){e.absolute=t},x:function(e,t){e.x=t},y:function(e,t){e.y=t},timeout:function(e,t){e.timeout=t},mode:function(e,t){e.mode=t},color:function(e,t){e.color=t}},actions:{open:function(e,t){var r=e.commit,n=Object(ee["a"])(t,4),a=n[0],o=n[1],i=n[2],c=n[3];r("color",o),r("text",a),r("x",i),r("y",c),r("value",!0)},close:function(e){var t=e.commit;console.log("closed"),t("x","center"),t("y","top"),t("value",!1),t("text",""),t("color","error")}}},re=(r("ac1f"),r("25f0"),r("841c"),r("8055")),ne=r.n(re),ae=Q.baseURL;console.log(ae);var oe=ne()(ae);function ie(e){var t=document.createElement("DIV");return t.innerHTML=e,t.textContent||t.innerText||""}oe.on("connect",(function(){return console.log("socket io connected")}));var ce=function(){var e=localStorage.getItem("token"),t=G.a.create({baseURL:ae,timeout:1e3,headers:{Authorization:"Bearer "+e}});return t},ue=function(e,t){t("error",ie(e.response&&e.response.data.length?e.response.data:e.toString()),{root:!0})},se={namespaced:!0,state:{io:oe},mutations:{},actions:{save:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function r(){var n,a,o,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=e.commit,a=t.collection,o=t.data,a){r.next=4;break}return r.abrupt("return",n("error",'missing collection name in action "api/save"',{root:!0}));case 4:if(o){r.next=6;break}return r.abrupt("return",n("error",'missing data in action "api/save"',{root:!0}));case 6:return i=ce(),r.next=9,i.post(a,o).catch((function(e){return ue(e,n)}));case 9:return r.abrupt("return",r.sent);case 10:case"end":return r.stop()}}),r)})))()},update:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function r(){var n,a,o,i,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=e.commit,a=t.collection,o=t.data,i=t.id,a){r.next=4;break}return r.abrupt("return",n("error",'missing collection name in action "api/update"',{root:!0}));case 4:if(o){r.next=6;break}return r.abrupt("return",n("error",'missing data in action "api/update"',{root:!0}));case 6:if(i){r.next=8;break}return r.abrupt("return",n("error",'missing id in action "api/update"',{root:!0}));case 8:return c=ce(),r.next=11,c.put(a+"/"+i,o).catch((function(e){return ue(e,n)}));case 11:return r.abrupt("return",r.sent);case 12:case"end":return r.stop()}}),r)})))()},remove:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function r(){var n,a,o,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=e.commit,a=t.collection,o=t.id,a){r.next=4;break}return r.abrupt("return",n("error",'missing collection name in action "api/save"',{root:!0}));case 4:if(o){r.next=6;break}return r.abrupt("return",n("error",'missing id in action "api/remove"',{root:!0}));case 6:return console.log(a+"/"+o),i=ce(),r.next=10,i.delete(a+"/"+o).catch((function(e){return ue(e,n)}));case 10:return r.abrupt("return",r.sent);case 11:case"end":return r.stop()}}),r)})))()},getById:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function r(){var n,a,o,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=e.commit,a=t.collection,o=t.id,a){r.next=4;break}return r.abrupt("return",n("error",'missing collection name in action "api/getById"',{root:!0}));case 4:if(o){r.next=6;break}return r.abrupt("return",n("error",'missing id in action "api/getById"',{root:!0}));case 6:return i=ce(),r.next=9,i.get(a+"/"+o).catch((function(e){return ue(e,n)}));case 9:return r.abrupt("return",r.sent);case 10:case"end":return r.stop()}}),r)})))()},get:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function r(){var n,a,o,i,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=e.commit,a=t.collection,o=t.query,i=t.search,o=o||{},i&&(o.search=i),a){r.next=6;break}return r.abrupt("return",n("error",'missing collection name in action "api/get"',{root:!0}));case 6:return c=ce(),console.log(o),r.next=10,c.get(a,{params:o}).catch((function(e){return ue(e,n)}));case 10:return r.abrupt("return",r.sent);case 11:case"end":return r.stop()}}),r)})))()}}};n["default"].use(c["a"]);var le=new c["a"].Store({state:{error:"",success:""},mutations:{error:function(e,t){e.error=t},success:function(e,t){e.success=t}},modules:{snackbar:te,auth:Z,api:se}});n["default"].use(w["a"]);var me=[{path:"/login",name:"Login",component:function(){return r.e("chunk-2d2086b7").then(r.bind(null,"a55b"))}},{path:"/screen",name:"Screen",component:function(){return r.e("chunk-25b5739c").then(r.bind(null,"b30e"))}},{path:"/",component:z,meta:{requierAuth:!0},children:[{path:"/",name:"Dashboard",component:function(){return Promise.all([r.e("chunk-67995150"),r.e("chunk-cb3362da")]).then(r.bind(null,"7277"))},meta:{requierAuth:!0}},{path:"/dashboard",name:"Agent Dashboard",component:function(){return Promise.all([r.e("chunk-67995150"),r.e("chunk-09fffaaa")]).then(r.bind(null,"a66e"))},meta:{requierAuth:!0}},{path:"/:collection",name:"Items",component:function(){return Promise.all([r.e("chunk-2be74c5d"),r.e("chunk-1d4f97bb")]).then(r.bind(null,"5b8f"))},meta:{requierAuth:!0}},{path:"/:collection/new",name:"Item",component:function(){return Promise.all([r.e("chunk-2be74c5d"),r.e("chunk-066d82d2")]).then(r.bind(null,"f0df"))},meta:{requierAuth:!0}},{path:"/:collection/:id",name:"ItemUpdate",component:function(){return Promise.all([r.e("chunk-2be74c5d"),r.e("chunk-066d82d2")]).then(r.bind(null,"f0df"))},meta:{requierAuth:!0}}]}],de=new w["a"]({mode:"history",base:"/",routes:me}),pe=["admin","manager"];de.beforeEach((function(e,t,r){var n=e.meta.requierAuth;return n&&!le.getters["auth/isAuthenticated"]?r("/login"):"Login"==e.name&&le.getters["auth/isAuthenticated"]?r("/"):le.state.auth.user&&"/"==e.path&&-1==pe.indexOf(le.state.auth.user.role)?r("/dashboard"):r()}));var fe=de,he=r("f309");n["default"].use(he["a"]);var be=new he["a"]({}),ve=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{attrs:{flat:""}},[r("v-card-text",{staticClass:"text-center"},[r("h1",[e._v(" 404 Not Found! ")]),r("br"),r("p",[e._v("Opps somthing went worng!")]),r("br"),r("v-divider"),r("br"),r("v-btn",{staticClass:"primary"},[e._v(" Back To Home ")])],1)],1)},ge=[],ke={name:"NotFound"},we=ke,ye=Object(l["a"])(we,ve,ge,!1,null,null,null),xe=ye.exports;d()(ye,{VBtn:f["a"],VCard:R["a"],VCardText:S["d"],VDivider:L["a"]});var _e=r("9eed"),Oe=r.n(_e);n["default"].config.productionTip=!1,n["default"].use(Oe.a,{vuetify:be}),n["default"].component("v-not-found",xe),new n["default"]({router:fe,store:le,vuetify:be,render:function(e){return e(g)}}).$mount("#app")}});
//# sourceMappingURL=app.c2bde84e.js.map