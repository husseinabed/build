(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-066d82d2"],{"90c8":function(e,t,a){},ca47:function(e,t,a){"use strict";var n=a("90c8"),s=a.n(n);s.a},f0df:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-col",[e.found?a("v-card",{attrs:{flat:""}},[e.buttons&&e.buttons.length&&!e.isNew?a("v-card-actions",e._l(e.buttons,(function(t,n){return a("v-btn",e._g(e._b({key:n},"v-btn",t.bind,!1),t.on(e.vm)),[t.icon?a("v-icon",[e._v(e._s(t.icon))]):e._e(),e._v(" "+e._s(t.text)+" ")],1)})),1):e._e(),a("v-card-title",[e._v(" "+e._s(e.title)+" ")]),a("v-card-text",[e.tabs.length>1?a("v-tabs",{attrs:{"center-active":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.tabs,(function(t,n){return a("v-tab",{key:n},[e._v(" "+e._s(t)+" ")])})),1):e._e(),a("v-form",{ref:"form",on:{submit:e.validate}},[e.loading?e._e():a("v-tabs-items",{attrs:{"center-active":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.tabs,(function(t,n){return a("v-tab-item",{key:n,staticClass:"px-5"},e._l(e.filteredFields,(function(t,n){return a("v-row",{key:n},[e.loading?a("v-skeleton-loader",{attrs:{loading:e.loading,width:"100%",height:"50",type:"table-heading"}}):e._e(),a(e.inputs[t.input],e._g(e._b({directives:[{name:"show",rawName:"v-show",value:e.showFields[t.name],expression:"showFields[field.name]"}],ref:e.$route.params.collection+"_"+t.name,refInFor:!0,tag:"component",attrs:{disabled:e.saveLoading},model:{value:e.data[t.name],callback:function(a){e.$set(e.data,t.name,a)},expression:"data[field.name]"}},"component",e.getProps("function"==typeof t.bind?t.bind(e.vm):t.bind,e.$route.params.collection+"_"+t.name),!1),"function"==typeof t.on?t.on(e.vm):t.on))],1)})),1)})),1)],1)],1)],1):a("v-not-found"),a("br"),a("v-toolbar",{staticClass:"bottom-toolbar",attrs:{width:"100%"}},[!e.isNew&&e.updateAccess?a("v-btn",{staticClass:"mr-4",attrs:{color:"primary",disabled:e.saveLoading,loading:e.saveLoading},on:{click:e.validate}},[e._v(" Update ")]):e._e(),e.isNew&&e.writeAccess?a("v-btn",{staticClass:"mr-4",attrs:{color:"primary",disabled:e.saveLoading,loading:e.saveLoading},on:{click:e.validate}},[e._v(" Save ")]):e._e(),a("v-spacer"),!e.isNew&&"user"!==e.$route.params.collection&&e.deleteAccess?a("v-btn",{staticClass:"mr-4 white--text",attrs:{color:"red"},on:{click:e.removeItem}},[e._v(" Delete ")]):e._e(),a("v-btn",{staticClass:"mr-4",attrs:{disabled:e.saveLoading},on:{click:function(t){return e.$router.go(-1)}}},[e._v(" Cancel ")])],1)],1)},s=[],i=(a("4de4"),a("4160"),a("d81d"),a("b0c0"),a("b64b"),a("ac1f"),a("1276"),a("159b"),a("96cf"),a("1da1")),o=a("5530"),r=a("8654"),c=a("b974"),l=a("b73d"),u=a("a844"),d=a("bb0b"),f=a("1b5f"),m=a("89e6"),p=a("e94a"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-input",[e._v("ss")])},h=[],b=a("2877"),g=a("6544"),w=a.n(g),x=a("b675"),_={},y=Object(b["a"])(_,v,h,!1,null,null,null),$=y.exports;w()(y,{VInput:x["a"]});var k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("fieldset",{staticClass:"pa-3",staticStyle:{width:"100%"}},[a("legend",[e._v(e._s(e.$attrs.label))]),a("v-text-field",{attrs:{outlined:"",dense:"","append-icon":"mdi-plus"},on:{"click:append":e.add,keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.add(t)}},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),e.items.length?a("v-expansion-panels",e._l(e.items,(function(t,n){return a("v-expansion-panel",{key:n},[a("v-expansion-panel-header",[a("v-row",{staticClass:"pa-0 ma-0",staticStyle:{width:"100%"}},[a("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"11"}},[a("h4",[a("v-icon",{domProps:{innerHTML:e._s(t.icon)}}),e._v(" "+e._s(t.name))],1)]),a("v-col",{staticClass:"pa-0 ma-0"},[n<e.items.length-1?a("v-btn",{attrs:{icon:"",small:""},on:{click:function(t){return t.stopPropagation(),e.moveDown(n)}}},[a("v-icon",{staticClass:"tomato"},[e._v("mdi-arrow-down-thick")])],1):e._e()],1),a("v-col",{staticClass:"pa-0 ma-0"},[n?a("v-btn",{attrs:{icon:"",small:""},on:{click:function(t){return t.stopPropagation(),e.moveUp(n)}}},[a("v-icon",{staticClass:"tomato"},[e._v("mdi-arrow-up-thick")])],1):e._e()],1)],1),a("v-spacer")],1),a("v-expansion-panel-content",[a("v-text-field",{attrs:{outlined:"",dense:"",label:"Name"},model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"item.name"}}),a("v-text-field",{attrs:{outlined:"",dense:"",label:"Icon","append-icon":t.icon},model:{value:t.icon,callback:function(a){e.$set(t,"icon",a)},expression:"item.icon"}}),a("v-text-field",{attrs:{outlined:"",dense:"",label:"Path"},model:{value:t.path,callback:function(a){e.$set(t,"path",a)},expression:"item.path"}}),a("v-btn",{attrs:{icon:""},on:{click:function(t){return e.remove(n)}}},[a("v-icon",[e._v("mdi-delete ")])],1)],1)],1)})),1):a("v-sheet",{attrs:{color:"grey lighten-5 pa-6"}},[e._v("Menu list is empty!")])],1)},V=[],C=(a("a434"),{name:"MenuItemInput",props:{value:Array},data:function(){return{text:"",items:[]}},watch:{items:{handler:"input",deep:!0}},methods:{moveUp:function(e){this.move(this.items,e,e-1)},moveDown:function(e){this.move(this.items,e,e+1)},move:function(e,t,a){if(a>=e.length){var n=a-e.length+1;while(n--)e.push(void 0)}return e.splice(a,0,e.splice(t,1)[0]),e},input:function(){this.$emit("input",this.items)},remove:function(e){this.items.length&&(this.items=this.items.filter((function(t,a){return a!==e})))},add:function(){this.text&&this.items.push({name:this.text,icon:"mdi-home",path:"/"}),this.text=""}},created:function(){this.items=this.value}}),A=C,I=a("8336"),E=a("62ad"),N=a("cd55"),O=a("49e2"),T=a("c865"),j=a("0393"),L=a("132d"),F=a("0fd9"),P=a("8dd9"),D=a("2fa4"),R=Object(b["a"])(A,k,V,!1,null,null,null),S=R.exports;w()(R,{VBtn:I["a"],VCol:E["a"],VExpansionPanel:N["a"],VExpansionPanelContent:O["a"],VExpansionPanelHeader:T["a"],VExpansionPanels:j["a"],VIcon:L["a"],VRow:F["a"],VSheet:P["a"],VSpacer:D["a"],VTextField:r["a"]});var q=a("d6a0"),B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{staticClass:"pa-12"},[e.value.length?a("v-data-table",{staticStyle:{width:"100%"},attrs:{"hide-default-footer":"",items:e.value,headers:e.headers},scopedSlots:e._u([{key:"item.createdAt",fn:function(t){var a=t.item;return[e._v(" "+e._s(e.dateformat(a.createdAt,"yyyy-mm-dd hh:MM:ss"))+" ")]}}],null,!1,4152344405)}):a("v-alert",{attrs:{type:"warning",width:"100%"}},[e._v("No data available ")])],1)},M=[],U=a("b9b9"),H=a.n(U),J={name:"Assignment",props:{value:Array,default:function(){return[]}},data:function(){return{dateformat:H.a,headers:[{text:"Assigned To",value:"assignedTo.displayName"},{text:"Assigned By",value:"assignedBy.displayName"},{text:"Date",value:"createdAt"}]}}},W=J,z=a("0798"),G=a("8fea"),K=Object(b["a"])(W,B,M,!1,null,null,null),Q=K.exports;w()(K,{VAlert:z["a"],VDataTable:G["a"],VRow:F["a"]});var X=a("2f62"),Y=a("fb57"),Z={name:"Item",data:function(){return{props:{},showFields:{},loading:!1,saveLoading:!1,collection:null,tab:0,form:null,found:!0,title:"",data:{},inputs:{text:r["a"],select:c["a"],switch:l["a"],date:p["a"],autocomplete:d["a"],password:f["a"],rights:q["a"],icon:$,menu_item:S,assignment:Q,"profile-image":m["a"],textarea:u["a"]}}},watch:{$route:{handler:"updateComponent",immediate:!0}},computed:{vm:function(){return this},buttons:function(){var e=Y["default"].get(this.$route.params.collection);return!!e&&e.buttons},filteredFields:function(){var e=this;return this.fields.filter((function(t){return"function"==typeof t.if?t.if(e.$store.state,e):"boolean"!=typeof t.if||t.if}))},tabs:function(){var e=this;return this.form?this.form.filter((function(t){return"function"==typeof t.if?t.if(e):"boolean"!=typeof t.if||t.if})).map((function(e){return e.label})):[]},fields:function(){return this.form?this.form[this.tab].fields:[]},isNew:function(){return!this.$route.params.id},access:function(){var e=this;return this.$store.state.auth.user.rights?this.$store.state.auth.user.rights.filter((function(t){return t.collection==e.$route.params.collection})):[]},updateAccess:function(){return this.access.length>0&&this.access[0].update.value},writeAccess:function(){return this.access.length>0&&this.access[0].write.value},deleteAccess:function(){return this.access.length>0&&this.access[0].delete.value}},methods:Object(o["a"])(Object(o["a"])({},Object(X["b"])({getItem:"api/getById",save:"api/save",remove:"api/remove",update:"api/update",success:"success"})),{},{removeItem:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$confirm("Are you sure do you want to delete this item ?",{title:"Warning"});case 2:if(a=t.sent,!a){t.next=8;break}return t.next=6,e.remove({collection:e.$route.params.collection,id:e.$route.params.id});case 6:e.$router.go(-1),e.$store.commit("success",e.title+" deleted successfuly");case 8:case"end":return t.stop()}}),t)})))()},getProps:function(e,t){return this.props[t]?Object.assign({},e,this.props[t]):e},generateDataInputs:function(e,t){var a=this,n={};e.forEach((function(e){e.fields.forEach((function(e){if("password"==e.name)return n[e.name]="";"date"==e.input&&t[e.name]&&(t[e.name]=t[e.name].split("T")[0]),n[e.name]="",t[e.name]?n[e.name]=t[e.name]:e.default&&(n[e.name]="function"==typeof e.default?e.default(a.$store.state):e.default)}))})),e.forEach((function(e){e.fields.forEach((function(e){a.showFields[e.name]=void 0===e.show||("function"==typeof e.show?e.show(a):e.show)}))})),this.data=n},validate:function(e){var t=arguments,a=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var s,i,o,r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(s=t.length>1&&void 0!==t[1]&&t[1],e.preventDefault(),a.saveLoading=!0,i=a.data,o=a.collection,r=a.title,!a.$refs.form.validate()){n.next=18;break}if(!a.isNew){n.next=11;break}return n.next=8,a.save({collection:o,data:i});case 8:n.t0=n.sent,n.next=14;break;case 11:return n.next=13,a.update({collection:o,data:i,id:a.$route.params.id});case 13:n.t0=n.sent;case 14:c=n.t0,c&&(a.$store.commit("success",r+(a.isNew?" saved":" updated")+" successfuly"),s?a.isNew?(a.generateDataInputs(a.form,{}),a.$refs.form.resetValidation()):a.$router.push("/"+a.$route.params.collection+"/new"):a.$router.go(-1)),n.next=19;break;case 18:a.$store.commit("error","form not valid");case 19:a.saveLoading=!1;case 20:case"end":return n.stop()}}),n)})))()},updateComponent:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,n,s,i,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.showFields={},e.props={},a=Y["default"].get(e.$route.params.collection),e.collection=e.$route.params.collection,!a){t.next=21;break}if(e.title=a.title,e.form=a.form,n={},!e.$route.params.id&&!e.$route.query.clone){t.next=17;break}return s=e.$route.params.id||e.$route.query.clone,e.loading=!0,t.next=13,e.getItem({collection:e.$route.params.collection,id:s});case 13:i=t.sent,o=e.$route.query.fields,o?Array.isArray(o)?o.forEach((function(e){n[e]=i.data[e]})):n[o]=i.data[o]:n=i.data,e.loading=!1;case 17:e.isNew&&(r=Object.keys(e.$route.query),r.forEach((function(t){var a=e.fields.filter((function(e){return e.name===t}));a.length&&(n[t]=e.$route.query[t])}))),e.generateDataInputs(e.form,n),t.next=22;break;case 21:e.found=!1;case 22:case"end":return t.stop()}}),t)})))()}}),mounted:function(){window.$form=this},destroyed:function(){window.$form=null}},ee=Z,te=(a("ca47"),a("b0af")),ae=a("99d9"),ne=a("4bd4"),se=a("3129"),ie=a("71a3"),oe=a("c671"),re=a("fe57"),ce=a("aac8"),le=a("71d9"),ue=Object(b["a"])(ee,n,s,!1,null,null,null);t["default"]=ue.exports;w()(ue,{VBtn:I["a"],VCard:te["a"],VCardActions:ae["b"],VCardText:ae["d"],VCardTitle:ae["e"],VCol:E["a"],VForm:ne["a"],VIcon:L["a"],VRow:F["a"],VSkeletonLoader:se["a"],VSpacer:D["a"],VTab:ie["a"],VTabItem:oe["a"],VTabs:re["a"],VTabsItems:ce["a"],VToolbar:le["a"]})}}]);
//# sourceMappingURL=chunk-066d82d2.fd7011bd.js.map