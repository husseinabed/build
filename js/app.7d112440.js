(function(e){function t(t){for(var r,a,c=t[0],u=t[1],s=t[2],l=0,m=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(m.length)m.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0bd56a":"31116e79","chunk-2d0e95df":"b5c6ee1f","chunk-2d2086b7":"8f9d8d20","chunk-4cea52d7":"e1459ccb","chunk-3c407b20":"620a5dce","chunk-1c693520":"88fc8761","chunk-6974dbdf":"e74e0518","chunk-69751eb4":"6de6e83d","chunk-74f41715":"044372cf","chunk-69886368":"5eaca6cd","chunk-5a855d0e":"a8dd684c"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-3c407b20":1,"chunk-1c693520":1,"chunk-69886368":1,"chunk-5a855d0e":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0bd56a":"31d6cfe0","chunk-2d0e95df":"31d6cfe0","chunk-2d2086b7":"31d6cfe0","chunk-4cea52d7":"31d6cfe0","chunk-3c407b20":"7b229630","chunk-1c693520":"7b229630","chunk-6974dbdf":"31d6cfe0","chunk-69751eb4":"31d6cfe0","chunk-74f41715":"31d6cfe0","chunk-69886368":"82c2e1da","chunk-5a855d0e":"9c0eca70"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var m=document.getElementsByTagName("style");for(c=0;c<m.length;c++){s=m[c],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var m=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",m.name="ChunkLoadError",m.type=r,m.request=a,n[1](m)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var m=0;m<s.length;m++)t(s[m]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("router-view"),n("v-snackbar",{attrs:{absolute:e.snackbar.absolute,color:e.snackbar.color,bottom:"bottom"===e.snackbar.y,left:"left"===e.snackbar.x,"multi-line":"multi-line"===e.snackbar.mode,right:"right"===e.snackbar.x,timeout:e.snackbar.timeout,top:"top"===e.snackbar.y,vertical:"vertical"===e.snackbar.mode},model:{value:e.snackbar.value,callback:function(t){e.$set(e.snackbar,"value",t)},expression:"snackbar.value"}},[e._v(" "+e._s(e.snackbar.text)+" "),n("v-btn",{attrs:{dark:"",icon:""},on:{click:e.snackbarClose}},[n("v-icon",[e._v("mdi-close")])],1)],1)],1)},o=[],i=n("5530"),c=n("2f62"),u={name:"App",computed:Object(i["a"])(Object(i["a"])({},Object(c["d"])({user:function(e){return e.auth.user},snackbar:function(e){return e.snackbar},error:function(e){return e.error},success:function(e){return e.success},io:function(e){return e.api.io}})),Object(c["c"])({isAuthenticated:"auth/isAuthenticated"})),methods:Object(i["a"])({},Object(c["b"])({snackbarOpen:"snackbar/open",snackbarClose:"snackbar/close"})),watch:{isAuthenticated:function(e){e?(this.$router.push("/"),this.io.emit("setUser",this.user._id)):this.$router.push("/login")},error:function(e){var t=this;e.length&&this.snackbarOpen([e,"red"]).then((function(){setTimeout((function(){t.$store.commit("error","")}),t.snackbar.timeout)}))},success:function(e){var t=this;e.length&&this.snackbarOpen([e,"green"]).then((function(){setTimeout((function(){t.$store.commit("success","")}),t.snackbar.timeout)}))}},created:function(){var e=this,t=this;this.io.on("sale_assign",(function(n){e.snackbarOpen([n.message,"white black--text"]),console.log(n.message,t)})),this.user&&(this.$vuetify.theme.dark=this.user.dark_theme,this.io.emit("setUser",this.user._id))}},s=u,l=n("2877"),m=n("6544"),d=n.n(m),p=n("7496"),f=n("8336"),h=n("132d"),b=n("2db4"),v=Object(l["a"])(s,a,o,!1,null,null,null),k=v.exports;d()(v,{VApp:p["a"],VBtn:f["a"],VIcon:h["a"],VSnackbar:b["a"]});var g=n("9483");Object(g["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("b0c0"),n("d3b7");var w=n("8c4f"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"sandbox"}},[e.user&&e.user.rights?n("v-navigation-drawer",{attrs:{clipped:e.primaryDrawer.clipped,floating:e.primaryDrawer.floating,"mini-variant":e.primaryDrawer.mini,permanent:"permanent"===e.primaryDrawer.type,temporary:"temporary"===e.primaryDrawer.type,app:"",overflow:""},model:{value:e.primaryDrawer.model,callback:function(t){e.$set(e.primaryDrawer,"model",t)},expression:"primaryDrawer.model"}},[n("v-list",[e._l(e.drawerList,(function(t,r){return[n("v-list-item",{key:r,attrs:{to:t.path}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.name))])],1)],1)]}))],2)],1):e._e(),n("v-app-bar",{attrs:{"clipped-left":e.primaryDrawer.clipped,app:""}},["permanent"!==e.primaryDrawer.type?n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.primaryDrawer.model=!e.primaryDrawer.model}}}):e._e(),n("v-toolbar-title",[e._v("Roaa")]),n("v-spacer"),e.user?n("v-menu",{attrs:{"close-on-content-click":!1},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-list",{staticClass:"ma-0",attrs:{dense:"",color:"transparent"}},[n("v-list-item",e._g({},r),[n("v-list-item-avatar",{staticClass:"ml-1"},[n("v-avatar",e._g({attrs:{color:"red",size:"35"}},r),[n("span",{staticClass:"white--text "},[e._v(e._s(e.displayName.substring(0,2).toUpperCase()))])])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(" "+e._s(e.displayName)+" ")]),n("v-list-item-subtitle",[e._v(" "+e._s(e.user.role)+" ")])],1)],1)],1)]}}],null,!1,1220985458),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e.user?n("v-card",[n("v-list",[n("v-list-item",[n("v-list-item-icon",[n("v-avatar",{attrs:{color:"red"}},[n("span",{staticClass:"white--text "},[e._v(e._s(e.displayName.substring(0,2).toUpperCase()))])])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(e.displayName))]),n("v-list-item-subtitle",[e._v(e._s(e.user.role))])],1),n("v-list-item-action")],1)],1),n("v-divider"),n("v-list",[n("v-list-item",[n("v-list-item-action",[n("v-switch",{attrs:{primary:""},model:{value:e.$vuetify.theme.dark,callback:function(t){e.$set(e.$vuetify.theme,"dark",t)},expression:"$vuetify.theme.dark"}})],1),n("v-list-item-title",[e._v("Dark Theme")])],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",text:""},on:{click:e.logout}},[n("v-icon",[e._v("mdi-logout")]),e._v(" Logout")],1)],1)],1):e._e()],1):e._e()],1),n("v-content",{class:{grey:!e.$vuetify.theme.dark,"lighten-4":!e.$vuetify.theme.dark}},[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1)],1)},x=[],_=(n("498a"),n("96cf"),n("1da1")),O={data:function(){return{drawers:["Default (no property)","Permanent","Temporary"],primaryDrawer:{model:null,type:"default (no property)",clipped:!0,floating:!1,mini:!1},fav:!0,menu:!1,message:!1,hints:!0,drawerList:[{name:"Dashboard",icon:"mdi-view-dashboard",path:"/"},{name:"Deposit",icon:"mdi-bank-transfer-in",path:"/deposit"},{name:"Reports",icon:"mdi-file-chart",path:"/report"},{name:"Customer",icon:"mdi-account-box",path:"/customer"},{name:"Payment Method",icon:"mdi mdi-credit-card-settings-outline",path:"/payment_method"},{name:"Affiliate",icon:"mdi-account-network-outline",path:"/affiliate"},{name:"Users",icon:"mdi-account-multiple",path:"/user"},{name:"Roles",icon:"mdi-key",path:"/role"},{name:"Menus",icon:"mdi-menu",path:"/menu"},{name:"Business",icon:"mdi-domain",path:"/business"},{name:"Department",icon:"mdi-briefcase-account-outline",path:"/department"}]}},computed:Object(i["a"])(Object(i["a"])({},Object(c["d"])({user:function(e){return e.auth.user}})),{},{displayName:function(){if(this.user&&this.user.displayName){var e=this.user.displayName.trim().length>0;return e?this.user.displayName:this.user.username}return""}}),methods:Object(i["a"])({},Object(c["b"])({logout:"auth/logout",dark:"auth/dark",get:"api/get"})),watch:{"$vuetify.theme.dark":function(e){this.dark(e)}},created:function(){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.$store.state.auth.menu,n.menu_item&&n.menu_item.length&&(e.drawerList=e.$store.state.auth.menu.menu_item);case 2:case"end":return t.stop()}}),t)})))()}},j=O,A=n("40dc"),S=n("5bc1"),R=n("8212"),V=n("b0af"),I=n("99d9"),L=n("a523"),D=n("a75b"),C=n("ce7e"),N=n("8860"),P=n("da13"),T=n("1800"),$=n("8270"),E=n("5d23"),q=n("34c3"),B=n("e449"),U=n("f774"),M=n("2fa4"),J=n("b73d"),F=n("2a7f"),H=Object(l["a"])(j,y,x,!1,null,null,null),z=H.exports;d()(H,{VApp:p["a"],VAppBar:A["a"],VAppBarNavIcon:S["a"],VAvatar:R["a"],VBtn:f["a"],VCard:V["a"],VCardActions:I["b"],VContainer:L["a"],VContent:D["a"],VDivider:C["a"],VIcon:h["a"],VList:N["a"],VListItem:P["a"],VListItemAction:T["a"],VListItemAvatar:$["a"],VListItemContent:E["g"],VListItemIcon:q["a"],VListItemSubtitle:E["j"],VListItemTitle:E["k"],VMenu:B["a"],VNavigationDrawer:U["a"],VSpacer:M["a"],VSwitch:J["a"],VToolbarTitle:F["c"]});var K=n("bc3a"),G=n.n(K),Q={baseURL:"http://193.46.199.181:3000/"},W=Q.baseURL,X=function(){var e=G.a.create({baseURL:W,timeout:1e3});return e};function Y(e){var t=document.createElement("DIV");return t.innerHTML=e,t.textContent||t.innerText||""}var Z={namespaced:!0,state:{user:JSON.parse(localStorage.getItem("user"))||null,token:localStorage.getItem("token")||null,menu:JSON.parse(localStorage.getItem("menu"))||[]},mutations:{user:function(e,t){t&&localStorage.setItem("user",JSON.stringify(t)),e.user=t},token:function(e,t){t&&localStorage.setItem("token",t),e.token=t},menu:function(e,t){t&&localStorage.setItem("menu",JSON.stringify(t)),e.menu=t}},getters:{isAuthenticated:function(e){return!!e.token}},actions:{register:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function n(){var r,a,o,i,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=t.username,o=t.password,i=X(),n.next=5,i.post("/auth/register",{username:a,password:o});case 5:c=n.sent,console.log(c.data),r("token",c.data.token),r("user",c.data.user);case 9:case"end":return n.stop()}}),n)})))()},login:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function n(){var r,a,o,i,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=t.username,o=t.password,i=X(),console.log({username:a,password:o}),n.next=6,i.post("/auth/login",{username:a,password:o});case 6:c=n.sent,console.log("user data --\x3e",c.data),r("token",c.data.token),r("user",c.data.user),r("menu",c.data.menu);case 11:case"end":return n.stop()}}),n)})))()},logout:function(e){return Object(_["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,localStorage.removeItem("user"),localStorage.removeItem("token"),n("token",null),n("user",null);case 5:case"end":return t.stop()}}),t)})))()},dark:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.state,a.user.dark_theme=t,o=X(),n.next=5,o.put("/auth/dark",{id:a.user._id,dark_theme:t}).catch((function(e){return r("error",Y(e.response?e.response.data:e),{root:!0})}));case 5:c=n.sent,200==c.status&&r("user",Object(i["a"])({},a.user));case 7:case"end":return n.stop()}}),n)})))()}}},ee=n("3835"),te={namespaced:!0,state:{text:"",value:!1,absolute:!1,x:"center",y:"top",timeout:6e3,mode:"multi-line",color:"error"},mutations:{text:function(e,t){e.text=t},value:function(e,t){e.value=t},absolute:function(e,t){e.absolute=t},x:function(e,t){e.x=t},y:function(e,t){e.y=t},timeout:function(e,t){e.timeout=t},mode:function(e,t){e.mode=t},color:function(e,t){e.color=t}},actions:{open:function(e,t){var n=e.commit,r=Object(ee["a"])(t,4),a=r[0],o=r[1],i=r[2],c=r[3];n("color",o),n("text",a),n("x",i),n("y",c),n("value",!0)},close:function(e){var t=e.commit;console.log("closed"),t("x","center"),t("y","top"),t("value",!1),t("text",""),t("color","error")}}},ne=(n("ac1f"),n("25f0"),n("841c"),n("8055")),re=n.n(ne),ae=Q.baseURL,oe=re()(ae);function ie(e){var t=document.createElement("DIV");return t.innerHTML=e,t.textContent||t.innerText||""}oe.on("connect",(function(){return console.log("socket io connected")}));var ce=function(){var e=localStorage.getItem("token"),t=G.a.create({baseURL:ae,timeout:1e3,headers:{Authorization:"Bearer "+e}});return t},ue=function(e,t){t("error",ie(e.response&&e.response.data.length?e.response.data:e.toString()),{root:!0})},se={namespaced:!0,state:{io:oe},mutations:{},actions:{save:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function n(){var r,a,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.commit,a=t.collection,o=t.data,a){n.next=4;break}return n.abrupt("return",r("error",'missing collection name in action "api/save"',{root:!0}));case 4:if(o){n.next=6;break}return n.abrupt("return",r("error",'missing data in action "api/save"',{root:!0}));case 6:return i=ce(),n.next=9,i.post(a,o).catch((function(e){return ue(e,r)}));case 9:return n.abrupt("return",n.sent);case 10:case"end":return n.stop()}}),n)})))()},update:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function n(){var r,a,o,i,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.commit,a=t.collection,o=t.data,i=t.id,a){n.next=4;break}return n.abrupt("return",r("error",'missing collection name in action "api/update"',{root:!0}));case 4:if(o){n.next=6;break}return n.abrupt("return",r("error",'missing data in action "api/update"',{root:!0}));case 6:if(i){n.next=8;break}return n.abrupt("return",r("error",'missing id in action "api/update"',{root:!0}));case 8:return c=ce(),n.next=11,c.put(a+"/"+i,o).catch((function(e){return ue(e,r)}));case 11:return n.abrupt("return",n.sent);case 12:case"end":return n.stop()}}),n)})))()},remove:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function n(){var r,a,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.commit,a=t.collection,o=t.id,a){n.next=4;break}return n.abrupt("return",r("error",'missing collection name in action "api/save"',{root:!0}));case 4:if(o){n.next=6;break}return n.abrupt("return",r("error",'missing id in action "api/remove"',{root:!0}));case 6:return i=ce(),n.next=9,i.delete(a+"/"+o).catch((function(e){return ue(e,r)}));case 9:return n.abrupt("return",n.sent);case 10:case"end":return n.stop()}}),n)})))()},getById:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function n(){var r,a,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.commit,a=t.collection,o=t.id,a){n.next=4;break}return n.abrupt("return",r("error",'missing collection name in action "api/getById"',{root:!0}));case 4:if(o){n.next=6;break}return n.abrupt("return",r("error",'missing id in action "api/getById"',{root:!0}));case 6:return i=ce(),n.next=9,i.get(a+"/"+o).catch((function(e){return ue(e,r)}));case 9:return n.abrupt("return",n.sent);case 10:case"end":return n.stop()}}),n)})))()},get:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function n(){var r,a,o,i,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.commit,a=t.collection,o=t.query,i=t.search,o=o||{},i&&(o.search=i),a){n.next=6;break}return n.abrupt("return",r("error",'missing collection name in action "api/get"',{root:!0}));case 6:return c=ce(),n.next=9,c.get(a,{params:o}).catch((function(e){return ue(e,r)}));case 9:return n.abrupt("return",n.sent);case 10:case"end":return n.stop()}}),n)})))()}}};r["a"].use(c["a"]);var le=new c["a"].Store({state:{error:"",success:""},mutations:{error:function(e,t){e.error=t},success:function(e,t){e.success=t}},modules:{snackbar:te,auth:Z,api:se}});r["a"].use(w["a"]);var me=[{path:"/login",name:"Login",component:function(){return n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))}},{path:"/screen",name:"Screen",component:function(){return n.e("chunk-5a855d0e").then(n.bind(null,"b30e"))}},{path:"/store",name:"Store",component:function(){return n.e("chunk-2d0bd56a").then(n.bind(null,"2c25"))}},{path:"/",component:z,meta:{requierAuth:!0},children:[{path:"/",name:"Dashboard",component:function(){return Promise.all([n.e("chunk-4cea52d7"),n.e("chunk-69886368")]).then(n.bind(null,"7277"))},meta:{requierAuth:!0}},{path:"/404",name:"404",component:function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))},meta:{requierAuth:!0}},{path:"/report",name:"Report",component:function(){return Promise.all([n.e("chunk-4cea52d7"),n.e("chunk-3c407b20"),n.e("chunk-69751eb4")]).then(n.bind(null,"762c"))},meta:{requierAuth:!0}},{path:"/report2",name:"Report2",component:function(){return Promise.all([n.e("chunk-4cea52d7"),n.e("chunk-3c407b20"),n.e("chunk-74f41715")]).then(n.bind(null,"0b02"))},meta:{requierAuth:!0}},{path:"/:collection",name:"Items",component:function(){return Promise.all([n.e("chunk-4cea52d7"),n.e("chunk-3c407b20"),n.e("chunk-6974dbdf")]).then(n.bind(null,"5b8f"))},meta:{requierAuth:!0}},{path:"/:collection/new",name:"Item",component:function(){return Promise.all([n.e("chunk-4cea52d7"),n.e("chunk-3c407b20"),n.e("chunk-1c693520")]).then(n.bind(null,"f0df"))},meta:{requierAuth:!0}},{path:"/:collection/:id",name:"ItemUpdate",component:function(){return Promise.all([n.e("chunk-4cea52d7"),n.e("chunk-3c407b20"),n.e("chunk-1c693520")]).then(n.bind(null,"f0df"))},meta:{requierAuth:!0}}]}],de=new w["a"]({mode:"history",base:"/",routes:me});de.beforeEach((function(e,t,n){var r=e.meta.requierAuth;return r&&!le.getters["auth/isAuthenticated"]?n("/login"):"Login"==e.name&&le.getters["auth/isAuthenticated"]?n("/"):n()}));var pe=de,fe=n("f309");r["a"].use(fe["a"]);var he=new fe["a"]({}),be=n("9eed"),ve=n.n(be);r["a"].config.productionTip=!1,r["a"].use(ve.a,{vuetify:he}),new r["a"]({router:pe,store:le,vuetify:he,render:function(e){return e(k)}}).$mount("#app")}});
//# sourceMappingURL=app.7d112440.js.map