(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c407b20"],{"1b5f":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-text-field",e._b({attrs:{value:e.value,autocomplete:"current-password","append-icon":e.show?"mdi-eye":"mdi-eye-off",type:e.show?"text":"password",counter:""},on:{input:function(t){return e.$emit("input",t)},"click:append":function(t){e.show=!e.show}}},"v-text-field",e.$attrs,!1))},l=[],i={name:"password",props:{value:String},data:function(){return{show:!1}}},r=i,c=a("2877"),o=a("6544"),s=a.n(o),u=a("8654"),d=Object(c["a"])(r,n,l,!1,null,null,null);t["a"]=d.exports;s()(d,{VTextField:u["a"]})},9320:function(e,t,a){},9894:function(e,t,a){"use strict";var n=a("9320"),l=a.n(n);l.a},b012:function(e,t){function a(e,t,a){var n,l,i,r,c;function o(){var s=Date.now()-r;s<t&&s>=0?n=setTimeout(o,t-s):(n=null,a||(c=e.apply(i,l),i=l=null))}null==t&&(t=100);var s=function(){i=this,l=arguments,r=Date.now();var s=a&&!n;return n||(n=setTimeout(o,t)),s&&(c=e.apply(i,l),i=l=null),c};return s.clear=function(){n&&(clearTimeout(n),n=null)},s.flush=function(){n&&(c=e.apply(i,l),i=l=null,clearTimeout(n),n=null)},s}a.debounce=a,e.exports=a},bb0b:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{width:"100%"}},[a("v-autocomplete",e._b({attrs:{value:e.value,"search-input":e.search,items:e.dataItems,loading:e.loading,clearable:"","no-filter":Boolean(e.collection),"return-object":""},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t},input:e.emit,focus:function(t){return e.makeSearch(e.search)}},scopedSlots:e._u([!e.hideAddNew&&e.writeAccess?{key:"prepend-item",fn:function(){return[a("v-list-item",{on:{click:e.addNew}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"green--text"},[a("v-icon",{attrs:{color:"green"}},[e._v("mdi-plus")]),e._v(" Add New")],1)],1)],1)]},proxy:!0}:null,"customer"==e.collection?{key:"item",fn:function(t){var n=t.parent,l=t.item;return[a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(l[n.$props.itemText]))]),a("v-list-item-subtitle",[e._v(" "+e._s(l.tpc)+" ")]),a("v-list-item-subtitle",[e._v(" "+e._s(l.affiliate.name)+" ")])],1)]}}:null,"customer"==e.collection?{key:"selection",fn:function(t){var n=t.parent,l=t.item;return[a("small",{staticClass:"pr-1"},[e._v(" ("+e._s(l.tpc)+") ")]),e._v(" "+e._s(l[n.$props.itemText])+" ")]}}:null],null,!0)},"v-autocomplete",e.$attrs,!1)),a("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("app-item",{attrs:{"collection-name":e.collection},on:{close:function(t){e.dialog=!1},save:e.newSave}})],1)],1)],1)},l=[],i=(a("4de4"),a("4160"),a("159b"),a("2909")),r=a("ade3"),c=(a("96cf"),a("1da1")),o=a("5530"),s=a("b012"),u=a.n(s),d=a("2f62"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-col",{staticClass:"pa-0"},[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){return e.$emit("close")}}},[a("v-icon",[e._v("mdi-close")])],1),a("v-toolbar-title",[e._v(e._s(e.title))]),a("v-spacer"),e.writeAccess?a("v-toolbar-items",[a("v-btn",{attrs:{dark:"",text:""},on:{click:e.validate}},[e._v("Save")])],1):e._e()],1),e.found?a("v-card",{attrs:{flat:""}},[a("v-card-title",[e._v(" "+e._s(e.title)+" ")]),a("v-card-text",[e.tabs.length>1?a("v-tabs",{attrs:{"center-active":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.tabs,(function(t,n){return a("v-tab",{key:n},[e._v(" "+e._s(t)+" ")])})),1):e._e(),a("v-form",{ref:"form"},[e.loading?e._e():a("v-tabs-items",{attrs:{"center-active":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.tabs,(function(t,n){return a("v-tab-item",{key:n,staticClass:"px-5"},e._l(e.fields,(function(t,n){return a("v-row",{key:n},[a(e.inputs[t.input],e._g(e._b({ref:e.$route.params.collection+"_"+t.name,refInFor:!0,tag:"component",model:{value:e.data[t.name],callback:function(a){e.$set(e.data,t.name,a)},expression:"data[field.name]"}},"component",t.bind,!1),t.on))],1)})),1)})),1)],1)],1)],1):a("v-not-found")],1)},f=[],v=(a("d81d"),a("b0c0"),a("ac1f"),a("1276"),a("8654")),p=a("b974"),h=a("b73d"),b=a("1b5f"),w=a("e94a"),g=a("d6a0"),x=a("fb57"),k={name:"AppItem",props:{collectionName:String},data:function(){return{loading:!1,collection:null,tab:0,form:null,found:!0,title:"",data:{},inputs:{text:v["a"],select:p["a"],switch:h["a"],date:w["a"],autocomplete:X,password:b["a"],rights:g["a"]}}},computed:{tabs:function(){return this.form?this.form.map((function(e){return e.label})):[]},fields:function(){return this.form?this.form[this.tab].fields:[]},access:function(){var e=this;return this.$store.state.auth.user.rights?this.$store.state.auth.user.rights.filter((function(t){return t.collection==e.collection})):[]},writeAccess:function(){return this.access.length>0&&this.access[0].write.value}},methods:Object(o["a"])(Object(o["a"])({},Object(d["b"])({save:"api/save",success:"success"})),{},{generateDataInputs:function(e,t){var a=this,n={},l={};e.forEach((function(e){e.fields.forEach((function(e){if("password"==e.name)return n[e.name]="";"date"==e.input&&t[e.name]&&(t[e.name]=t[e.name].split("T")[0]),n[e.name]="",t[e.name]?n[e.name]=t[e.name]:e.default&&(n[e.name]="function"==typeof e.default?e.default(a.$store.state):e.default),"date"==e.input&&(l[e.name]=!1)}))})),this.data=n,this.menu=l},validate:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a,n,l,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.data,n=e.collection,l=e.title,!e.$refs.form.validate()){t.next=12;break}return t.next=4,e.save({collection:n,data:a});case 4:if(i=t.sent,console.log(i),!i){t.next=10;break}return t.next=9,e.$store.commit("success",l+" saved successfuly");case 9:e.$emit("save",i.data);case 10:t.next=13;break;case 12:e.$store.commit("error","form not valid");case 13:case"end":return t.stop()}}),t)})))()}}),mounted:function(){window.$form=this},destroyed:function(){window.$form=null},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=x["default"].get(e.collectionName),e.collection=e.collectionName,a?(e.title=a.title,e.form=a.form,n={},e.generateDataInputs(e.form,n)):e.found=!1;case 3:case"end":return t.stop()}}),t)})))()}},_=k,O=(a("9894"),a("2877")),$=a("6544"),V=a.n($),y=a("8336"),A=a("b0af"),T=a("99d9"),j=a("62ad"),I=a("4bd4"),S=a("132d"),R=a("0fd9"),C=a("2fa4"),E=a("71a3"),F=a("c671"),D=a("fe57"),N=a("aac8"),L=a("71d9"),B=a("2a7f"),J=Object(O["a"])(_,m,f,!1,null,null,null),q=J.exports;V()(J,{VBtn:y["a"],VCard:A["a"],VCardText:T["d"],VCardTitle:T["e"],VCol:j["a"],VForm:I["a"],VIcon:S["a"],VRow:R["a"],VSpacer:C["a"],VTab:E["a"],VTabItem:F["a"],VTabs:D["a"],VTabsItems:N["a"],VToolbar:L["a"],VToolbarItems:B["b"],VToolbarTitle:B["c"]});var M=a("1157"),P=a.n(M),U={name:"autocomplete",components:{AppItem:q},props:{value:String,searchFields:[String,Array],hideAddNew:Boolean,collection:{type:String}},data:function(){return{search:"",dataItems:[],loading:!1,dialog:!1}},computed:{access:function(){var e=this;return this.$store.state.auth.user.rights?this.$store.state.auth.user.rights.filter((function(t){return t.collection==e.collection})):[]},writeAccess:function(){return this.access.length>0&&this.access[0].write.value}},methods:Object(o["a"])(Object(o["a"])({emit:function(e){this.$emit("input",e?e[this.$attrs.itemValue]:"")},addNew:function(){this.dialog=!0},newSave:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.dialog=!1,t.dataItems.push(e),t.$emit("input",e[t.$attrs.itemValue]);case 3:case"end":return a.stop()}}),a)})))()}},Object(d["b"])({get:"api/get"})),{},{makeSearch:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var n,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.collection){a.next=2;break}return a.abrupt("return");case 2:return t.loading=!0,console.log("AC --\x3e",e),n={},console.log(t.searchFields),t.searchFields?Array.isArray(t.searchFields)?t.searchFields.forEach((function(t){e&&(n[t]="^"+e)})):e&&(n[t.searchFields]="^"+e):e&&(n[t.$attrs.itemText]="^"+e),console.log(P.a.param(n)),a.next=10,t.get({collection:t.collection+"?"+P.a.param(n)+"&or=true"});case 10:l=a.sent,console.log(l),t.dataItems=l.data.docs,t.loading=!1;case 14:case"end":return a.stop()}}),a)})))()}}),watch:{search:function(e){this.collection&&null!==e&&u()(this.makeSearch,500)(e)}},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.collection||!e.value){t.next=6;break}return t.next=3,e.get({collection:e.collection,query:Object(r["a"])({},e.$attrs.itemValue,e.value)});case 3:a=t.sent,console.log(a),a&&a.data&&a.data.docs?e.dataItems=Object(i["a"])(a.data.docs):a&&a.data&&(e.dataItems=Object(i["a"])(a.data));case 6:e.$attrs.items&&(e.dataItems=e.$attrs.items);case 7:case"end":return t.stop()}}),t)})))()}},W=U,z=a("c6a6"),G=a("169a"),H=a("da13"),K=a("5d23"),Q=Object(O["a"])(W,n,l,!1,null,null,null),X=t["a"]=Q.exports;V()(Q,{VAutocomplete:z["a"],VCard:A["a"],VDialog:G["a"],VIcon:S["a"],VListItem:H["a"],VListItemContent:K["g"],VListItemSubtitle:K["j"],VListItemTitle:K["k"]})},d6a0:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{flat:"",width:"100%"}},[a("v-card-text",{staticClass:"text-center"},[a("v-divider"),a("h2",{staticClass:"my-5"},[e._v(e._s(e.label))]),a("v-divider"),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.data,expanded:e.expanded,"item-key":"collection","show-expand":""},on:{"update:expanded":function(t){e.expanded=t}},scopedSlots:e._u([{key:"expanded-item",fn:function(t){var n=t.headers,l=t.item;return[a("td",{staticClass:"pa-0",attrs:{colspan:n.length}},[a("v-simple-table",[a("tr",[a("th",[e._v("Read")]),a("td",[a("v-switch",{on:{change:function(t){return e.handelReadRight(t,l)}},model:{value:l.read.value,callback:function(t){e.$set(l.read,"value",t)},expression:"item.read.value"}})],1),a("td",[a("v-select",{attrs:{label:"Own / All",items:e.AllOwn},model:{value:l.read.allOwn,callback:function(t){e.$set(l.read,"allOwn",t)},expression:"item.read.allOwn"}})],1)]),a("tr",[a("th",[e._v("Write")]),a("td",[a("v-switch",{model:{value:l.write.value,callback:function(t){e.$set(l.write,"value",t)},expression:"item.write.value"}})],1),a("td",[a("v-select",{attrs:{label:"Own / All",items:e.AllOwn},model:{value:l.write.allOwn,callback:function(t){e.$set(l.write,"allOwn",t)},expression:"item.write.allOwn"}})],1)]),a("tr",[a("th",[e._v("Update")]),a("td",[a("v-switch",{model:{value:l.update.value,callback:function(t){e.$set(l.update,"value",t)},expression:"item.update.value"}})],1),a("td",[a("v-select",{attrs:{label:"Own / All",items:e.AllOwn},model:{value:l.update.allOwn,callback:function(t){e.$set(l.update,"allOwn",t)},expression:"item.update.allOwn"}})],1)]),a("tr",[a("th",[e._v("Delete")]),a("td",[a("v-switch",{model:{value:l.delete.value,callback:function(t){e.$set(l.delete,"value",t)},expression:"item.delete.value"}})],1),a("td",[a("v-select",{attrs:{label:"Own / All",items:e.AllOwn},model:{value:l.delete.allOwn,callback:function(t){e.$set(l.delete,"allOwn",t)},expression:"item.delete.allOwn"}})],1)])])],1)]}},{key:"item.read",fn:function(t){var n=t.item;return[a("v-switch",{on:{change:function(t){return e.handelReadRight(t,n)}},model:{value:n.read,callback:function(t){e.$set(n,"read",t)},expression:"item.read"}})]}},{key:"item.write",fn:function(t){var n=t.item;return[a("v-switch",{model:{value:n.write,callback:function(t){e.$set(n,"write",t)},expression:"item.write"}})]}},{key:"item.update",fn:function(t){var n=t.item;return[a("v-switch",{model:{value:n.update,callback:function(t){e.$set(n,"update",t)},expression:"item.update"}})]}},{key:"item.delete",fn:function(t){var n=t.item;return[a("v-switch",{model:{value:n.delete,callback:function(t){e.$set(n,"delete",t)},expression:"item.delete"}})]}}])})],1)],1)},l=[],i=(a("4de4"),a("4160"),a("c975"),a("d81d"),a("159b"),a("96cf"),a("1da1")),r={name:"Rights",props:{label:String,value:{type:Array,default:function(){return[]}}},data:function(){return{AllOwn:[{text:"All",value:"all"},{text:"Own",value:"own"}],expanded:[],singleExpand:!1,selected:"",collections:[],headers:[{text:"Collection",value:"collection",width:"100%",sortable:!1}],data:[]}},computed:{filteredCollections:function(){var e=this;return this.collections.filter((function(t){return-1===e.data.indexOf(t.collection)}))}},methods:{select:function(e){var t=this;setTimeout((function(){return t.selected=""}),10),this.data.push({collection:e}),console.log({value:e})},handelReadRight:function(e,t){e||(t.write=!1,t.update=!1,t.delete=!1)}},watch:{data:{deep:!0,handler:function(e){this.$emit("input",e)}}},mounted:function(){var e=this;this.value.length<1&&this.$emit("input",this.data),console.log(this.value),this.value.forEach((function(t){var a=e.data.filter((function(e){return e.value==t.value}));a[0]&&Object.assign(a[0],t)}))},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("api/get",{collection:"collections"});case 2:a=t.sent,a&&a.data&&(e.data=a.data.map((function(e){return{collection:e,read:{value:!0,allOwn:"all"},write:{value:!0,allOwn:"all"},update:{value:!0,allOwn:"all"},delete:{value:!0,allOwn:"all"}}}))),e.value&&(e.data=Object.assign([],e.data,e.value));case 5:case"end":return t.stop()}}),t)})))()}},c=r,o=a("2877"),s=a("6544"),u=a.n(s),d=a("b0af"),m=a("99d9"),f=a("8fea"),v=a("ce7e"),p=a("b974"),h=a("1f4f"),b=a("b73d"),w=Object(o["a"])(c,n,l,!1,null,null,null);t["a"]=w.exports;u()(w,{VCard:d["a"],VCardText:m["d"],VDataTable:f["a"],VDivider:v["a"],VSelect:p["a"],VSimpleTable:h["a"],VSwitch:b["a"]})},e94a:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-text-field",e._g(e._b({attrs:{readonly:"",value:e.value,clearable:""},on:{"click:clear":function(t){return e.input("")}}},"v-text-field",e.$attrs,!1),n))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[a("v-date-picker",{attrs:{value:e.value},on:{input:e.input}})],1)},l=[],i={name:"date-picker",props:{value:String},data:function(){return{menu:!1}},methods:{input:function(e){this.menu=!1,this.$emit("input",e)}}},r=i,c=a("2877"),o=a("6544"),s=a.n(o),u=a("2e4b"),d=a("e449"),m=a("8654"),f=Object(c["a"])(r,n,l,!1,null,null,null);t["a"]=f.exports;s()(f,{VDatePicker:u["a"],VMenu:d["a"],VTextField:m["a"]})}}]);
//# sourceMappingURL=chunk-3c407b20.43375e50.js.map