(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-216807d0"],{"1b5f":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-text-field",t._b({attrs:{value:t.value,autocomplete:"current-password","append-icon":t.show?"mdi-eye":"mdi-eye-off",type:t.show?"text":"password",counter:""},on:{input:function(e){return t.$emit("input",e)},"click:append":function(e){t.show=!t.show}}},"v-text-field",t.$attrs,!1))},i=[],r={name:"password",props:{value:String},data:function(){return{show:!1}}},s=r,o=a("2877"),c=a("6544"),l=a.n(c),u=a("8654"),d=Object(o["a"])(s,n,i,!1,null,null,null);e["a"]=d.exports;l()(d,{VTextField:u["a"]})},"5b8f":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-col",[t.readAccess?a("v-col",{staticClass:"pa-0 ma-0"},[t.found?a("items-header",{attrs:{icon:this.icon,collection:t.collection,title:t.title,writeAccess:t.writeAccess,"has-filters":t.hasFilters},on:{filter:t.startFiltering}}):t._e(),t.found?a("v-data-table",{staticClass:"my-5 elevation-1",attrs:{loading:t.loading,headers:t.headers,items:t.items,"items-per-page":t.pagination.limit,"hide-default-footer":""},scopedSlots:t._u([{key:"item.created_on",fn:function(e){var a=e.item;return[t._v(" "+t._s((new Intl.DateTimeFormat).format(new Date(a.created_on)))+" ")]}},t.hasAmount?{key:"item.payment_method",fn:function(e){var a=e.item;return[t._v(" "+t._s(a.payment_method.name)+" ("+t._s(a.payment_method.type)+") ")]}}:null,t.hasAmount?{key:"item.amount",fn:function(e){var a=e.item;return[t._v(" "+t._s(new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(a.amount))+" ")]}}:null,{key:"item.active",fn:function(t){var e=t.item;return[a("v-badge",{attrs:{color:e.active?"green":"grey"}})]}},{key:"item.read",fn:function(t){var e=t.item;return[a("v-badge",{attrs:{color:e.read?"green":"grey"}})]}},t.hasAmount?{key:"body.append",fn:function(e){return[a("tr",[a("td",{staticClass:"font-weight-bold"},[t._v("Total Amount")]),a("td"),a("td",{staticClass:"font-weight-bold"},[t._v(" "+t._s(new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e.items.length?e.items.map((function(t){return t.amount})).reduce((function(t,e){return t+e})):0))+" ")]),a("td",{attrs:{colspan:"5"}})])]}}:null,{key:"item.actions",fn:function(e){var n=e.item;return[t.readAccess?a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.cloneItem(n)}}},[t._v(" mdi-content-copy ")]):t._e(),t.updateAccess?a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(n)}}},[t._v(" mdi-pencil ")]):t._e(),t.deleteAccess?a("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(n)}}},[t._v(" mdi-delete ")]):t._e()]}}],null,!0)}):a("v-not-found"),t.found?a("v-toolbar",{attrs:{short:"",elevation:"1"}},[a("v-pagination",{staticClass:"my-4",attrs:{length:t.pagination.totalPages},on:{input:t.changePage},model:{value:t.pagination.page,callback:function(e){t.$set(t.pagination,"page",e)},expression:"pagination.page"}}),a("v-spacer"),a("v-select",{attrs:{label:"Limit",dense:"",outlined:"","hide-details":"",items:[5,10,15]},on:{input:t.changeLimit},model:{value:t.pagination.limit,callback:function(e){t.$set(t.pagination,"limit",e)},expression:"pagination.limit"}})],1):t._e()],1):a("v-col",[a("v-card",{attrs:{width:"100%"}},[a("v-card-text",{staticClass:"text-center pa-12"},[a("v-icon",{attrs:{size:"70"}},[t._v("mdi-lock")]),a("h2",[t._v("Access Denied")]),a("p",[t._v(" you dont have the right to view this content ")])],1)],1)],1),a("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog=!1}}},[a("v-icon",[t._v("mdi-close")])],1)],1),a("v-card-text",[t._v(" asdsaddd ")])],1)],1)],1)},i=[],r=(a("4de4"),a("c975"),a("96cf"),a("1da1")),s=a("5530"),o=a("2f62"),c=a("8654"),l=a("b974"),u=a("b73d"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-toolbar",{attrs:{elevation:"1"}},[a("h2",{staticClass:"mb-3"},[a("v-icon",{attrs:{size:"30"}},[t._v(" "+t._s(this.icon)+" ")]),t._v(" "+t._s(this.title))],1),a("v-spacer"),t.writeAccess?a("v-btn",{attrs:{color:"success"},on:{click:function(e){return t.$router.push("/"+t.$route.params.collection+"/new")}}},[a("v-icon",[t._v("mdi-plus")]),t._v(" New ")],1):t._e(),t.hasFilters?a("v-btn",{staticClass:"ml-3",class:{"grey ":t.filterOn,"white--text":t.filterOn},attrs:{icon:""},on:{click:function(e){t.filterOn=!t.filterOn}}},[a("v-icon",[t._v("mdi-filter")])],1):t._e()],1),t.filterOn&&t.hasFilters?a("v-toolbar",{staticClass:"py-4",attrs:{elevation:"1",height:"70"}},t._l(t.collection.filters,(function(e,n){return a("v-col",{key:n},[a(t.inputs[e.input],t._g(t._b({tag:"component",on:{input:function(a){return t.input(a,e.name,e.input)}}},"component",e.bind,!1),e.on))],1)})),1):t._e()],1)},m=[],f=a("bb0b"),h=a("e94a"),p={name:"ItemsHeader",props:{writeAccess:Boolean,hasFilters:Boolean,collection:Object,icon:String,title:String},data:function(){return{filterOn:!1,filtersData:{},inputs:{text:c["a"],select:l["a"],switch:u["a"],date:h["a"],autocomplete:f["a"]}}},methods:{input:function(t,e,a){this.filtersData[e]={type:a,value:t},this.$emit("filter",this.filtersData)}}},v=p,g=a("2877"),b=a("6544"),w=a.n(b),_=a("8336"),x=a("62ad"),k=a("132d"),y=a("2fa4"),$=a("71d9"),V=Object(g["a"])(v,d,m,!1,null,null,null),O=V.exports;w()(V,{VBtn:_["a"],VCol:x["a"],VIcon:k["a"],VSpacer:y["a"],VToolbar:$["a"]});var I=a("fb57"),C={components:{ItemsHeader:O},data:function(){return{collection:null,filterOn:!1,dialog:!1,loading:!1,title:"",icon:"",found:!0,headers:[],items:[],filtersData:{},pagination:{page:1,limit:5,totalPages:1},inputs:{text:c["a"],select:l["a"],switch:u["a"],date:h["a"],autocomplete:f["a"]}}},computed:{hasFilters:function(){return!!this.collection&&(this.collection.filters&&this.collection.filters.length>-1)},filters:function(){return this.hasFilters?this.collection.filters:[]},access:function(){var t=this;return this.$store.state.auth.user.rights?this.$store.state.auth.user.rights.filter((function(e){return e.value==t.$route.params.collection})):[]},writeAccess:function(){return this.access.length>0&&this.access[0].write},readAccess:function(){return this.access.length>0&&this.access[0].read},updateAccess:function(){return this.access.length>0&&this.access[0].update},deleteAccess:function(){return this.access.length>0&&this.access[0].delete},hasAmount:function(){var t=["sales","retention"];return-1!==t.indexOf(this.$route.params.collection)}},watch:{$route:function(){this.updateComponent()}},methods:Object(s["a"])(Object(s["a"])({},Object(o["b"])({get:"api/get",remove:"api/remove"})),{},{startFiltering:function(t){this.filtersData=t,this.fetch(t)},fetch:function(){var t=arguments,e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n,i,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:{},i={page:e.pagination.page,limit:e.pagination.limit},n=Object.assign(i,n),e.loading=!0,a.next=6,e.get({collection:e.$route.params.collection,query:n});case 6:r=a.sent,console.log(r),r&&200===r.status&&(e.items=r.data.docs,e.pagination.totalPages=r.data.totalPages),e.loading=!1;case 10:case"end":return a.stop()}}),a)})))()},changePage:function(t){this.fetch(Object(s["a"])({page:t},this.filtersData))},changeLimit:function(t){this.fetch(Object(s["a"])({page:1,limit:t},this.filtersData))},editItem:function(t){this.$router.push("/"+this.$route.params.collection+"/"+t._id)},showItem:function(){this.dialog=!0},cloneItem:function(t){this.$router.push("/"+this.$route.params.collection+"/new?clone="+t._id)},deleteItem:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$confirm("Are you sure do you want to delete this item ?",{title:"Warning"});case 2:if(n=a.sent,!n){a.next=9;break}return e.loading=!0,a.next=7,e.remove({collection:e.$route.params.collection,id:t._id});case 7:i=a.sent,200===i.status&&(e.fetch(),e.loading=!1,e.$store.commit("success","Item deleted successfuly"));case 9:case"end":return a.stop()}}),a)})))()},updateComponent:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=I["default"].get(t.$route.params.collection),t.collection=a,!a){e.next=10;break}return t.title=a.title,t.icon=a.icon,t.headers=a.table,e.next=8,t.fetch();case 8:e.next=11;break;case 10:t.found=!1;case 11:case"end":return e.stop()}}),e)})))()}}),created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.updateComponent();case 1:case"end":return e.stop()}}),e)})))()}},A=C,j=(a("ac1b"),a("4ca6")),S=a("b0af"),T=a("99d9"),R=a("8fea"),D=a("169a"),F=a("891e"),N=Object(g["a"])(A,n,i,!1,null,"81bf80d0",null);e["default"]=N.exports;w()(N,{VBadge:j["a"],VBtn:_["a"],VCard:S["a"],VCardText:T["d"],VCardTitle:T["e"],VCol:x["a"],VDataTable:R["a"],VDialog:D["a"],VIcon:k["a"],VPagination:F["a"],VSelect:l["a"],VSpacer:y["a"],VToolbar:$["a"]})},9320:function(t,e,a){},9894:function(t,e,a){"use strict";var n=a("9320"),i=a.n(n);i.a},ac1b:function(t,e,a){"use strict";var n=a("ca24"),i=a.n(n);i.a},b012:function(t,e){function a(t,e,a){var n,i,r,s,o;function c(){var l=Date.now()-s;l<e&&l>=0?n=setTimeout(c,e-l):(n=null,a||(o=t.apply(r,i),r=i=null))}null==e&&(e=100);var l=function(){r=this,i=arguments,s=Date.now();var l=a&&!n;return n||(n=setTimeout(c,e)),l&&(o=t.apply(r,i),r=i=null),o};return l.clear=function(){n&&(clearTimeout(n),n=null)},l.flush=function(){n&&(o=t.apply(r,i),r=i=null,clearTimeout(n),n=null)},l}a.debounce=a,t.exports=a},bb0b:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"100%"}},[a("v-autocomplete",t._b({attrs:{value:t.value,"search-input":t.search,items:t.dataItems,loading:t.loading,clearable:"","return-object":""},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e},input:t.emit},scopedSlots:t._u([!t.hideAddNew&&t.writeAccess?{key:"prepend-item",fn:function(){return[a("v-list-item",{on:{click:t.addNew}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"green--text"},[a("v-icon",{attrs:{color:"green"}},[t._v("mdi-plus")]),t._v(" Add New")],1)],1)],1)]},proxy:!0}:null],null,!0)},"v-autocomplete",t.$attrs,!1)),a("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("app-item",{attrs:{"collection-name":t.collection},on:{close:function(e){t.dialog=!1},save:t.newSave}})],1)],1)],1)},i=[],r=(a("4de4"),a("96cf"),a("1da1")),s=a("5530"),o=a("b012"),c=a.n(o),l=a("2f62"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-col",{staticClass:"pa-0"},[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){return t.$emit("close")}}},[a("v-icon",[t._v("mdi-close")])],1),a("v-toolbar-title",[t._v(t._s(t.title))]),a("v-spacer"),t.writeAccess?a("v-toolbar-items",[a("v-btn",{attrs:{dark:"",text:""},on:{click:t.validate}},[t._v("Save")])],1):t._e()],1),t.found?a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v(" "+t._s(t.title)+" ")]),a("v-card-text",[t.tabs.length>1?a("v-tabs",{attrs:{"center-active":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.tabs,(function(e,n){return a("v-tab",{key:n},[t._v(" "+t._s(e)+" ")])})),1):t._e(),a("v-form",{ref:"form"},[t.loading?t._e():a("v-tabs-items",{attrs:{"center-active":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.tabs,(function(e,n){return a("v-tab-item",{key:n,staticClass:"px-5"},t._l(t.fields,(function(e,n){return a("v-row",{key:n},[a(t.inputs[e.input],t._g(t._b({ref:t.$route.params.collection+"_"+e.name,refInFor:!0,tag:"component",model:{value:t.data[e.name],callback:function(a){t.$set(t.data,e.name,a)},expression:"data[field.name]"}},"component",e.bind,!1),e.on))],1)})),1)})),1)],1)],1)],1):a("v-not-found")],1)},d=[],m=(a("4160"),a("d81d"),a("b0c0"),a("ac1f"),a("1276"),a("159b"),a("8654")),f=a("b974"),h=a("b73d"),p=a("1b5f"),v=a("e94a"),g=a("d6a0"),b=a("fb57"),w={name:"AppItem",props:{collectionName:String},data:function(){return{loading:!1,collection:null,tab:0,form:null,found:!0,title:"",data:{},inputs:{text:m["a"],select:f["a"],switch:h["a"],date:v["a"],autocomplete:M,password:p["a"],rights:g["a"]}}},computed:{tabs:function(){return this.form?this.form.map((function(t){return t.label})):[]},fields:function(){return this.form?this.form[this.tab].fields:[]},access:function(){var t=this;return this.$store.state.auth.user.rights?this.$store.state.auth.user.rights.filter((function(e){return e.value==t.collection})):[]},writeAccess:function(){return this.access.length>0&&this.access[0].write}},methods:Object(s["a"])(Object(s["a"])({},Object(l["b"])({save:"api/save",success:"success"})),{},{generateDataInputs:function(t,e){var a={},n={};t.forEach((function(t){t.fields.forEach((function(t){if("password"==t.name)return a[t.name]="";"date"==t.input&&e[t.name]&&(e[t.name]=e[t.name].split("T")[0]),a[t.name]=e[t.name]?e[t.name]:t.default||"","date"==t.input&&(n[t.name]=!1)}))})),this.data=a,this.menu=n},validate:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.data,n=t.collection,i=t.title,!t.$refs.form.validate()){e.next=12;break}return e.next=4,t.save({collection:n,data:a});case 4:if(r=e.sent,console.log(r),!r){e.next=10;break}return e.next=9,t.$store.commit("success",i+" saved successfuly");case 9:t.$emit("save",r.data);case 10:e.next=13;break;case 12:t.$store.commit("error","form not valid");case 13:case"end":return e.stop()}}),e)})))()}}),mounted:function(){window.$form=this},destroyed:function(){window.$form=null},created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=b["default"].get(t.collectionName),t.collection=t.collectionName,a?(t.title=a.title,t.form=a.form,n={},t.generateDataInputs(t.form,n)):t.found=!1;case 3:case"end":return e.stop()}}),e)})))()}},_=w,x=(a("9894"),a("2877")),k=a("6544"),y=a.n(k),$=a("8336"),V=a("b0af"),O=a("99d9"),I=a("62ad"),C=a("4bd4"),A=a("132d"),j=a("0fd9"),S=a("2fa4"),T=a("71a3"),R=a("c671"),D=a("fe57"),F=a("aac8"),N=a("71d9"),E=a("2a7f"),P=Object(x["a"])(_,u,d,!1,null,null,null),B=P.exports;y()(P,{VBtn:$["a"],VCard:V["a"],VCardText:O["d"],VCardTitle:O["e"],VCol:I["a"],VForm:C["a"],VIcon:A["a"],VRow:j["a"],VSpacer:S["a"],VTab:T["a"],VTabItem:R["a"],VTabs:D["a"],VTabsItems:F["a"],VToolbar:N["a"],VToolbarItems:E["b"],VToolbarTitle:E["c"]});var L={name:"autocomplete",components:{AppItem:B},props:{value:String,hideAddNew:Boolean,collection:{type:String}},data:function(){return{search:"",dataItems:[],loading:!1,dialog:!1}},computed:{access:function(){var t=this;return this.$store.state.auth.user.rights?this.$store.state.auth.user.rights.filter((function(e){return e.value==t.collection})):[]},writeAccess:function(){return this.access.length>0&&this.access[0].write}},methods:Object(s["a"])(Object(s["a"])({emit:function(t){this.$emit("input",t?t[this.$attrs.itemValue]:"")},addNew:function(){this.dialog=!0},newSave:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.dialog=!1,console.log(e.dataItems),e.dataItems.push(t),e.$emit("input",t[e.$attrs.itemValue]);case 4:case"end":return a.stop()}}),a)})))()}},Object(l["b"])({get:"api/get"})),{},{makeSearch:function(t,e){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a.loading=!0,n.next=3,a.get({collection:e,search:{name:t}});case 3:i=n.sent,a.dataItems=i.data.docs,a.loading=!1;case 6:case"end":return n.stop()}}),n)})))()}}),watch:{search:function(t){this.collection&&c()(this.makeSearch,500)(t,this.collection)}},created:function(){this.collection?this.makeSearch("",this.collection):this.$attrs.items&&(this.dataItems=this.$attrs.items)}},U=L,z=a("c6a6"),H=a("169a"),J=a("da13"),W=a("5d23"),q=Object(x["a"])(U,n,i,!1,null,null,null),M=e["a"]=q.exports;y()(q,{VAutocomplete:z["a"],VCard:V["a"],VDialog:H["a"],VIcon:A["a"],VListItem:J["a"],VListItemContent:W["g"],VListItemTitle:W["k"]})},ca24:function(t,e,a){},d6a0:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{flat:"",width:"100%"}},[a("v-card-text",{staticClass:"text-center"},[a("v-divider"),a("h2",{staticClass:"my-5"},[t._v(t._s(t.label))]),a("v-divider"),a("v-data-table",{attrs:{headers:t.headers,items:t.data,"hide-default-footer":""},scopedSlots:t._u([{key:"item.read",fn:function(e){var n=e.item;return[a("v-switch",{on:{change:function(e){return t.handelReadRight(e,n)}},model:{value:n.read,callback:function(e){t.$set(n,"read",e)},expression:"item.read"}})]}},{key:"item.write",fn:function(e){var n=e.item;return[a("v-switch",{model:{value:n.write,callback:function(e){t.$set(n,"write",e)},expression:"item.write"}})]}},{key:"item.update",fn:function(e){var n=e.item;return[a("v-switch",{model:{value:n.update,callback:function(e){t.$set(n,"update",e)},expression:"item.update"}})]}},{key:"item.delete",fn:function(e){var n=e.item;return[a("v-switch",{model:{value:n.delete,callback:function(e){t.$set(n,"delete",e)},expression:"item.delete"}})]}}])}),t._v("> ")],1)],1)},i=[],r=(a("4de4"),a("4160"),a("159b"),{name:"Rights",props:{label:String,value:{type:Array,default:function(){return[]}}},data:function(){return{headers:[{text:"Section",value:"section",width:"50%"},{text:"Read",value:"read"},{text:"Write",value:"write"},{text:"Update",value:"update"},{text:"Delete",value:"delete"}],data:[{section:"Sales",value:"sale",read:!0,write:!0,update:!0,delete:!0},{section:"Retention",value:"retention",read:!0,write:!0,update:!0,delete:!0},{section:"Payment Methods",value:"payment_method",read:!0,write:!0,update:!0,delete:!0},{section:"Affiliate",value:"affiliate",read:!0,write:!0,update:!0,delete:!0},{section:"Users",value:"user",read:!0,write:!0,update:!0,delete:!0},{section:"Roles",value:"role",read:!0,write:!0,update:!0,delete:!0}]}},methods:{handelReadRight:function(t,e){t||(e.write=!1,e.update=!1,e.delete=!1)}},watch:{data:{deep:!0,handler:function(t){this.$emit("input",t)}}},mounted:function(){var t=this;this.value.length<1&&this.$emit("input",this.data),console.log(this.value),this.value.forEach((function(e){var a=t.data.filter((function(t){return t.value==e.value}));a[0]&&Object.assign(a[0],e)}))}}),s=r,o=a("2877"),c=a("6544"),l=a.n(c),u=a("b0af"),d=a("99d9"),m=a("8fea"),f=a("ce7e"),h=a("b73d"),p=Object(o["a"])(s,n,i,!1,null,null,null);e["a"]=p.exports;l()(p,{VCard:u["a"],VCardText:d["d"],VDataTable:m["a"],VDivider:f["a"],VSwitch:h["a"]})}}]);
//# sourceMappingURL=chunk-216807d0.9c537894.js.map