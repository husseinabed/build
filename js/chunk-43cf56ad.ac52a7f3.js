(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43cf56ad"],{"90c8":function(e,t,a){},b9b9:function(e,t,a){var n;(function(i){"use strict";var s=function(){var e=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g,t=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,a=/[^-+\dA-Z]/g;return function(n,i,u,d){if(1!==arguments.length||"string"!==l(n)||/\d/.test(n)||(i=n,n=void 0),n=n||new Date,n instanceof Date||(n=new Date(n)),isNaN(n))throw TypeError("Invalid date");i=String(s.masks[i]||i||s.masks["default"]);var m=i.slice(0,4);"UTC:"!==m&&"GMT:"!==m||(i=i.slice(4),u=!0,"GMT:"===m&&(d=!0));var f=u?"getUTC":"get",v=n[f+"Date"](),p=n[f+"Day"](),h=n[f+"Month"](),y=n[f+"FullYear"](),b=n[f+"Hours"](),g=n[f+"Minutes"](),w=n[f+"Seconds"](),x=n[f+"Milliseconds"](),_=u?0:n.getTimezoneOffset(),T=o(n),k=c(n),M={d:v,dd:r(v),ddd:s.i18n.dayNames[p],dddd:s.i18n.dayNames[p+7],m:h+1,mm:r(h+1),mmm:s.i18n.monthNames[h],mmmm:s.i18n.monthNames[h+12],yy:String(y).slice(2),yyyy:y,h:b%12||12,hh:r(b%12||12),H:b,HH:r(b),M:g,MM:r(g),s:w,ss:r(w),l:r(x,3),L:r(Math.round(x/10)),t:b<12?s.i18n.timeNames[0]:s.i18n.timeNames[1],tt:b<12?s.i18n.timeNames[2]:s.i18n.timeNames[3],T:b<12?s.i18n.timeNames[4]:s.i18n.timeNames[5],TT:b<12?s.i18n.timeNames[6]:s.i18n.timeNames[7],Z:d?"GMT":u?"UTC":(String(n).match(t)||[""]).pop().replace(a,""),o:(_>0?"-":"+")+r(100*Math.floor(Math.abs(_)/60)+Math.abs(_)%60,4),S:["th","st","nd","rd"][v%10>3?0:(v%100-v%10!=10)*v%10],W:T,N:k};return i.replace(e,(function(e){return e in M?M[e]:e.slice(1,e.length-1)}))}}();function r(e,t){e=String(e),t=t||2;while(e.length<t)e="0"+e;return e}function o(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var a=new Date(t.getFullYear(),0,4);a.setDate(a.getDate()-(a.getDay()+6)%7+3);var n=t.getTimezoneOffset()-a.getTimezoneOffset();t.setHours(t.getHours()-n);var i=(t-a)/6048e5;return 1+Math.floor(i)}function c(e){var t=e.getDay();return 0===t&&(t=7),t}function l(e){return null===e?"null":void 0===e?"undefined":"object"!==typeof e?typeof e:Array.isArray(e)?"array":{}.toString.call(e).slice(8,-1).toLowerCase()}s.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},s.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},n=function(){return s}.call(t,a,t,e),void 0===n||(e.exports=n)})()},ca47:function(e,t,a){"use strict";var n=a("90c8"),i=a.n(n);i.a},f0df:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-col",[e.found?a("v-card",{attrs:{flat:""}},[e.buttons&&e.buttons.length&&!e.isNew?a("v-card-actions",e._l(e.buttons,(function(t,n){return a("v-btn",e._g(e._b({key:n},"v-btn",t.bind,!1),t.on(e.vm)),[t.icon?a("v-icon",[e._v(e._s(t.icon))]):e._e(),e._v(" "+e._s(t.text)+" ")],1)})),1):e._e(),a("v-card-title",[e._v(" "+e._s(e.title)+" ")]),a("v-card-text",[e.tabs.length>1?a("v-tabs",{attrs:{"center-active":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.tabs,(function(t,n){return a("v-tab",{key:n},[e._v(" "+e._s(t)+" ")])})),1):e._e(),a("v-form",{ref:"form",on:{submit:e.validate}},[e.loading?e._e():a("v-tabs-items",{attrs:{"center-active":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.tabs,(function(t,n){return a("v-tab-item",{key:n,staticClass:"px-5"},e._l(e.filteredFields,(function(t,n){return a("v-row",{key:n},[e.loading?a("v-skeleton-loader",{attrs:{loading:e.loading,width:"100%",height:"50",type:"table-heading"}}):e._e(),a(e.inputs[t.input],e._g(e._b({directives:[{name:"show",rawName:"v-show",value:e.showFields[t.name],expression:"showFields[field.name]"}],ref:e.$route.params.collection+"_"+t.name,refInFor:!0,tag:"component",attrs:{disabled:e.saveLoading},model:{value:e.data[t.name],callback:function(a){e.$set(e.data,t.name,a)},expression:"data[field.name]"}},"component",t.bind,!1),"function"==typeof t.on?t.on(e.vm):t.on))],1)})),1)})),1)],1)],1)],1):a("v-not-found"),a("br"),a("v-toolbar",{staticClass:"bottom-toolbar",attrs:{width:"100%"}},[!e.isNew&&e.updateAccess?a("v-btn",{staticClass:"mr-4",attrs:{color:"primary",disabled:e.saveLoading,loading:e.saveLoading},on:{click:e.validate}},[e._v(" Update ")]):e._e(),e.isNew&&e.writeAccess?a("v-btn",{staticClass:"mr-4",attrs:{color:"primary",disabled:e.saveLoading,loading:e.saveLoading},on:{click:e.validate}},[e._v(" Save ")]):e._e(),a("v-spacer"),!e.isNew&&"user"!==e.$route.params.collection&&e.deleteAccess?a("v-btn",{staticClass:"mr-4 white--text",attrs:{color:"red"},on:{click:e.removeItem}},[e._v(" Delete ")]):e._e(),a("v-btn",{staticClass:"mr-4",attrs:{disabled:e.saveLoading},on:{click:function(t){return e.$router.go(-1)}}},[e._v(" Cancel ")])],1)],1)},i=[],s=(a("4de4"),a("4160"),a("d81d"),a("b0c0"),a("b64b"),a("ac1f"),a("1276"),a("159b"),a("96cf"),a("1da1")),r=a("5530"),o=a("8654"),c=a("b974"),l=a("b73d"),u=a("bb0b"),d=a("1b5f"),m=a("89e6"),f=a("e94a"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-input",[e._v("ss")])},p=[],h=a("2877"),y=a("6544"),b=a.n(y),g=a("b675"),w={},x=Object(h["a"])(w,v,p,!1,null,null,null),_=x.exports;b()(x,{VInput:g["a"]});var T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("fieldset",{staticClass:"pa-3",staticStyle:{width:"100%"}},[a("legend",[e._v(e._s(e.$attrs.label))]),a("v-text-field",{attrs:{outlined:"",dense:"","append-icon":"mdi-plus"},on:{"click:append":e.add,keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.add(t)}},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),e.items.length?a("v-expansion-panels",e._l(e.items,(function(t,n){return a("v-expansion-panel",{key:n},[a("v-expansion-panel-header",[a("v-row",{staticClass:"pa-0 ma-0",staticStyle:{width:"100%"}},[a("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"11"}},[a("h4",[a("v-icon",{domProps:{innerHTML:e._s(t.icon)}}),e._v(" "+e._s(t.name))],1)]),a("v-col",{staticClass:"pa-0 ma-0"},[n<e.items.length-1?a("v-btn",{attrs:{icon:"",small:""},on:{click:function(t){return t.stopPropagation(),e.moveDown(n)}}},[a("v-icon",{staticClass:"tomato"},[e._v("mdi-arrow-down-thick")])],1):e._e()],1),a("v-col",{staticClass:"pa-0 ma-0"},[n?a("v-btn",{attrs:{icon:"",small:""},on:{click:function(t){return t.stopPropagation(),e.moveUp(n)}}},[a("v-icon",{staticClass:"tomato"},[e._v("mdi-arrow-up-thick")])],1):e._e()],1)],1),a("v-spacer")],1),a("v-expansion-panel-content",[a("v-text-field",{attrs:{outlined:"",dense:"",label:"Name"},model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"item.name"}}),a("v-text-field",{attrs:{outlined:"",dense:"",label:"Icon","append-icon":t.icon},model:{value:t.icon,callback:function(a){e.$set(t,"icon",a)},expression:"item.icon"}}),a("v-text-field",{attrs:{outlined:"",dense:"",label:"Path"},model:{value:t.path,callback:function(a){e.$set(t,"path",a)},expression:"item.path"}}),a("v-btn",{attrs:{icon:""},on:{click:function(t){return e.remove(n)}}},[a("v-icon",[e._v("mdi-delete ")])],1)],1)],1)})),1):a("v-sheet",{attrs:{color:"grey lighten-5 pa-6"}},[e._v("Menu list is empty!")])],1)},k=[],M=(a("a434"),{name:"MenuItemInput",props:{value:Array},data:function(){return{text:"",items:[]}},watch:{items:{handler:"input",deep:!0}},methods:{moveUp:function(e){this.move(this.items,e,e-1)},moveDown:function(e){this.move(this.items,e,e+1)},move:function(e,t,a){if(a>=e.length){var n=a-e.length+1;while(n--)e.push(void 0)}return e.splice(a,0,e.splice(t,1)[0]),e},input:function(){this.$emit("input",this.items)},remove:function(e){this.items.length&&(this.items=this.items.filter((function(t,a){return a!==e})))},add:function(){this.text&&this.items.push({name:this.text,icon:"mdi-home",path:"/"}),this.text=""}},created:function(){this.items=this.value}}),$=M,D=a("8336"),N=a("62ad"),C=a("cd55"),V=a("49e2"),A=a("c865"),S=a("0393"),H=a("132d"),I=a("0fd9"),E=a("8dd9"),F=a("2fa4"),O=Object(h["a"])($,T,k,!1,null,null,null),L=O.exports;b()(O,{VBtn:D["a"],VCol:N["a"],VExpansionPanel:C["a"],VExpansionPanelContent:V["a"],VExpansionPanelHeader:A["a"],VExpansionPanels:S["a"],VIcon:H["a"],VRow:I["a"],VSheet:E["a"],VSpacer:F["a"],VTextField:o["a"]});var P=a("d6a0"),j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{staticClass:"pa-12"},[e.value.length?a("v-data-table",{staticStyle:{width:"100%"},attrs:{"hide-default-footer":"",items:e.value,headers:e.headers},scopedSlots:e._u([{key:"item.createdAt",fn:function(t){var a=t.item;return[e._v(" "+e._s(e.dateformat(a.createdAt,"yyyy-mm-dd hh:MM:ss"))+" ")]}}],null,!1,4152344405)}):a("v-alert",{attrs:{type:"warning",width:"100%"}},[e._v("No data available ")])],1)},R=[],U=a("b9b9"),J=a.n(U),Z={name:"Assignment",props:{value:Array,default:function(){return[]}},data:function(){return{dateformat:J.a,headers:[{text:"Assigned To",value:"assignedTo.displayName"},{text:"Assigned By",value:"assignedBy.displayName"},{text:"Date",value:"createdAt"}]}}},q=Z,B=a("0798"),W=a("8fea"),G=Object(h["a"])(q,j,R,!1,null,null,null),z=G.exports;b()(G,{VAlert:B["a"],VDataTable:W["a"],VRow:I["a"]});var Y=a("2f62"),K=a("fb57"),Q={name:"Item",data:function(){return{showFields:{},loading:!1,saveLoading:!1,collection:null,tab:0,form:null,found:!0,title:"",data:{},inputs:{text:o["a"],select:c["a"],switch:l["a"],date:f["a"],autocomplete:u["a"],password:d["a"],rights:P["a"],icon:_,menu_item:L,assignment:z,"profile-image":m["a"]}}},watch:{$route:{handler:"updateComponent",immediate:!0}},computed:{vm:function(){return this},buttons:function(){var e=K["default"].get(this.$route.params.collection);return!!e&&e.buttons},filteredFields:function(){var e=this;return this.fields.filter((function(t){return"function"==typeof t.if?t.if(e.$store.state,e):"boolean"!=typeof t.if||t.if}))},tabs:function(){var e=this;return this.form?this.form.filter((function(t){return"function"==typeof t.if?t.if(e):"boolean"!=typeof t.if||t.if})).map((function(e){return e.label})):[]},fields:function(){return this.form?this.form[this.tab].fields:[]},isNew:function(){return!this.$route.params.id},access:function(){var e=this;return this.$store.state.auth.user.rights?this.$store.state.auth.user.rights.filter((function(t){return t.collection==e.$route.params.collection})):[]},updateAccess:function(){return this.access.length>0&&this.access[0].update.value},writeAccess:function(){return this.access.length>0&&this.access[0].write.value},deleteAccess:function(){return this.access.length>0&&this.access[0].delete.value}},methods:Object(r["a"])(Object(r["a"])({},Object(Y["b"])({getItem:"api/getById",save:"api/save",remove:"api/remove",update:"api/update",success:"success"})),{},{removeItem:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$confirm("Are you sure do you want to delete this item ?",{title:"Warning"});case 2:if(a=t.sent,!a){t.next=8;break}return t.next=6,e.remove({collection:e.$route.params.collection,id:e.$route.params.id});case 6:e.$router.go(-1),e.$store.commit("success",e.title+" deleted successfuly");case 8:case"end":return t.stop()}}),t)})))()},generateDataInputs:function(e,t){var a=this,n={};e.forEach((function(e){e.fields.forEach((function(e){if("password"==e.name)return n[e.name]="";"date"==e.input&&t[e.name]&&(t[e.name]=t[e.name].split("T")[0]),n[e.name]="",t[e.name]?n[e.name]=t[e.name]:e.default&&(n[e.name]="function"==typeof e.default?e.default(a.$store.state):e.default)}))})),e.forEach((function(e){e.fields.forEach((function(e){a.showFields[e.name]=void 0===e.show||("function"==typeof e.show?e.show(a):e.show)}))})),this.data=n},validate:function(e){var t=arguments,a=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var i,s,r,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=t.length>1&&void 0!==t[1]&&t[1],e.preventDefault(),a.saveLoading=!0,s=a.data,r=a.collection,o=a.title,!a.$refs.form.validate()){n.next=18;break}if(!a.isNew){n.next=11;break}return n.next=8,a.save({collection:r,data:s});case 8:n.t0=n.sent,n.next=14;break;case 11:return n.next=13,a.update({collection:r,data:s,id:a.$route.params.id});case 13:n.t0=n.sent;case 14:c=n.t0,c&&(a.$store.commit("success",o+(a.isNew?" saved":" updated")+" successfuly"),i?a.isNew?(a.generateDataInputs(a.form,{}),a.$refs.form.resetValidation()):a.$router.push("/"+a.$route.params.collection+"/new"):a.$router.go(-1)),n.next=19;break;case 18:a.$store.commit("error","form not valid");case 19:a.saveLoading=!1;case 20:case"end":return n.stop()}}),n)})))()},updateComponent:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,n,i,s,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.showFields={},a=K["default"].get(e.$route.params.collection),e.collection=e.$route.params.collection,!a){t.next=20;break}if(e.title=a.title,e.form=a.form,n={},!e.$route.params.id&&!e.$route.query.clone){t.next=16;break}return i=e.$route.params.id||e.$route.query.clone,e.loading=!0,t.next=12,e.getItem({collection:e.$route.params.collection,id:i});case 12:s=t.sent,r=e.$route.query.fields,r?Array.isArray(r)?r.forEach((function(e){n[e]=s.data[e]})):n[r]=s.data[r]:n=s.data,e.loading=!1;case 16:e.isNew&&(o=Object.keys(e.$route.query),o.forEach((function(t){var a=e.fields.filter((function(e){return e.name===t}));a.length&&(n[t]=e.$route.query[t])}))),e.generateDataInputs(e.form,n),t.next=21;break;case 20:e.found=!1;case 21:case"end":return t.stop()}}),t)})))()}}),mounted:function(){window.$form=this},destroyed:function(){window.$form=null}},X=Q,ee=(a("ca47"),a("b0af")),te=a("99d9"),ae=a("4bd4"),ne=a("3129"),ie=a("71a3"),se=a("c671"),re=a("fe57"),oe=a("aac8"),ce=a("71d9"),le=Object(h["a"])(X,n,i,!1,null,null,null);t["default"]=le.exports;b()(le,{VBtn:D["a"],VCard:ee["a"],VCardActions:te["b"],VCardText:te["d"],VCardTitle:te["e"],VCol:N["a"],VForm:ae["a"],VIcon:H["a"],VRow:I["a"],VSkeletonLoader:ne["a"],VSpacer:F["a"],VTab:ie["a"],VTabItem:se["a"],VTabs:re["a"],VTabsItems:oe["a"],VToolbar:ce["a"]})}}]);
//# sourceMappingURL=chunk-43cf56ad.ac52a7f3.js.map