(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f2a6a5ba"],{"51cd":function(t,e,n){},"5b8f":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",[t.readAccess?n("v-col",{staticClass:"pa-0 ma-0"},[t.found?n("items-header",{attrs:{icon:this.icon,collection:t.collection,title:t.title,writeAccess:t.writeAccess,"has-filters":t.hasFilters},on:{query:function(e){t.options.query=e}}}):t._e(),t.found?n("v-data-table",{staticClass:"my-5 elevation-1",attrs:{loading:t.loading,headers:t.headers,items:t.items,"items-per-page":t.options.limit,"hide-default-footer":"","multi-sort":""},on:{"update:sort-by":t.sortBy,"update:sort-desc":t.sortDesc},scopedSlots:t._u([{key:"item.created_on",fn:function(e){var n=e.item;return[t._v(" "+t._s((new Intl.DateTimeFormat).format(new Date(n.created_on)))+" ")]}},t.hasAmount?{key:"item.payment_method",fn:function(e){var n=e.item;return[t._v(" "+t._s(n.payment_method.name)+" ("+t._s(n.payment_method.type)+") ")]}}:null,t.hasAmount?{key:"item.amount",fn:function(e){var n=e.item;return[t._v(" "+t._s(new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(n.amount))+" ")]}}:null,{key:"item.active",fn:function(t){var e=t.item;return[n("v-badge",{attrs:{color:e.active?"green":"grey"}})]}},{key:"item.read",fn:function(t){var e=t.item;return[n("v-badge",{attrs:{color:e.read?"green":"grey"}})]}},t.hasAmount?{key:"body.append",fn:function(e){return[n("tr",[n("td",{staticClass:"font-weight-bold"},[t._v("Total Amount")]),n("td"),n("td",{staticClass:"font-weight-bold"},[t._v(" "+t._s(new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e.items.length?e.items.map((function(t){return t.amount})).reduce((function(t,e){return t+e})):0))+" ")]),n("td",{attrs:{colspan:"5"}})])]}}:null,{key:"item.actions",fn:function(e){var a=e.item;return[t.readAccess?n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.cloneItem(a)}}},[t._v(" mdi-content-copy ")]):t._e(),t.updateAccess?n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(a)}}},[t._v(" mdi-pencil ")]):t._e(),t.deleteAccess?n("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(a)}}},[t._v(" mdi-delete ")]):t._e()]}}],null,!0)}):n("v-not-found"),t.found?n("v-toolbar",{attrs:{short:"",elevation:"1"}},[n("v-pagination",{staticClass:"my-4",attrs:{length:t.totalPages},model:{value:t.options.page,callback:function(e){t.$set(t.options,"page",e)},expression:"options.page"}}),n("v-spacer"),n("v-select",{attrs:{label:"Limit",dense:"",outlined:"","hide-details":"",items:[10,20,50]},on:{input:function(e){t.options.page=1}},model:{value:t.options.limit,callback:function(e){t.$set(t.options,"limit",e)},expression:"options.limit"}})],1):t._e()],1):n("v-col",[n("v-card",{attrs:{width:"100%"}},[n("v-card-text",{staticClass:"text-center pa-12"},[n("v-icon",{attrs:{size:"70"}},[t._v("mdi-lock")]),n("h2",[t._v("Access Denied")]),n("p",[t._v(" you dont have the right to view this content ")])],1)],1)],1)],1)},o=[],s=(n("4de4"),n("c975"),n("d81d"),n("96cf"),n("1da1")),i=n("5530"),r=n("2f62"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-toolbar",{attrs:{elevation:"1"}},[n("h2",{staticClass:"mb-3"},[n("v-icon",{attrs:{size:"30"}},[t._v(" "+t._s(this.icon)+" ")]),t._v(" "+t._s(this.title))],1),n("v-spacer"),t.writeAccess?n("v-btn",{attrs:{color:"success"},on:{click:function(e){return t.$router.push("/"+t.$route.params.collection+"/new")}}},[n("v-icon",[t._v("mdi-plus")]),t._v(" New ")],1):t._e(),t.hasFilters?n("v-btn",{staticClass:"ml-3",class:{"grey ":t.openPanel,"white--text":t.openPanel,"blue--text":t.filtersHasValues},attrs:{icon:""},on:{click:function(e){t.openPanel=!t.openPanel}}},[n("v-icon",[t._v("mdi-filter")])],1):t._e()],1),t.openPanel&&t.hasFilters?n("v-toolbar",{staticClass:"py-4",attrs:{elevation:"1",height:"70"}},t._l(t.collection.filters,(function(e,a){return n("v-col",{key:a},[n(t.inputs[e.input],t._g(t._b({tag:"component",attrs:{value:t.data[e.name].value},on:{input:function(n){return t.input(n,e.name)}}},"component",e.bind,!1),e.on))],1)})),1):t._e()],1)},l=[],u=(n("4160"),n("b0c0"),n("b64b"),n("07ac"),n("159b"),n("8654")),d=n("b974"),m=n("b73d"),f=n("bb0b"),h=n("e94a"),p={name:"ItemsHeader",props:{writeAccess:Boolean,hasFilters:Boolean,collection:Object,icon:String,title:String},data:function(){return{openPanel:!1,data:{},inputs:{text:u["a"],select:d["a"],switch:m["a"],date:h["a"],autocomplete:f["a"]}}},watch:{},computed:{filtersHasValues:function(){return Object.values(this.data).filter((function(t){return Boolean(t.value)})).length}},methods:{input:function(t,e){this.data[e].value=t,this.emitPreparedData()},emitPreparedData:function(){var t=this,e={};Object.keys(this.data).forEach((function(n){t.data[n].value&&(e[n]=t.data[n])})),this.$emit("query",e)},generateDataInputs:function(){var t={};this.collection.filters&&this.collection.filters.forEach((function(e){t[e.name]={type:e.input,value:""}})),this.data=t}},created:function(){this.generateDataInputs()}},v=p,g=n("2877"),b=n("6544"),_=n.n(b),y=n("8336"),w=n("62ad"),k=n("132d"),$=n("2fa4"),A=n("71d9"),x=Object(g["a"])(v,c,l,!1,null,null,null),C=x.exports;_()(x,{VBtn:y["a"],VCol:w["a"],VIcon:k["a"],VSpacer:$["a"],VToolbar:A["a"]});var V=n("fb57"),I={components:{ItemsHeader:C},data:function(){return{options:{query:{},sortBy:[],sortDesc:[],page:1,limit:10},totalPages:1,collection:null,filterOn:!1,loading:!1,title:"",icon:"",found:!0,headers:[],items:[]}},computed:{hasFilters:function(){return!!this.collection&&(this.collection.filters&&this.collection.filters.length>-1)},filters:function(){return this.hasFilters?this.collection.filters:[]},access:function(){var t=this;return this.$store.state.auth.user.rights?this.$store.state.auth.user.rights.filter((function(e){return e.value==t.$route.params.collection})):[]},writeAccess:function(){return this.access.length>0&&this.access[0].write},readAccess:function(){return this.access.length>0&&this.access[0].read},updateAccess:function(){return this.access.length>0&&this.access[0].update},deleteAccess:function(){return this.access.length>0&&this.access[0].delete},hasAmount:function(){var t=["sales","retention"];return-1!==t.indexOf(this.$route.params.collection)}},watch:{$route:{handler:"updateComponent",immediate:!0},options:{handler:"fetch",deep:!0}},methods:Object(i["a"])(Object(i["a"])({sortBy:function(t){this.options.sortBy=t},sortDesc:function(t){this.options.sortDesc=t.map((function(t){return t?-1:1}))}},Object(r["b"])({get:"api/get",remove:"api/remove"})),{},{fetch:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Fetching"),t.loading=!0,e.next=4,t.get({collection:t.$route.params.collection,query:t.options});case 4:n=e.sent,n&&200===n.status&&(t.items=n.data.docs,t.totalPages=n.data.totalPages),t.loading=!1;case 7:case"end":return e.stop()}}),e)})))()},editItem:function(t){this.$router.push("/"+this.$route.params.collection+"/"+t._id)},cloneItem:function(t){this.$router.push("/"+this.$route.params.collection+"/new?clone="+t._id)},deleteItem:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$confirm("Are you sure do you want to delete this item ?",{title:"Warning"});case 2:if(a=n.sent,!a){n.next=9;break}return e.loading=!0,n.next=7,e.remove({collection:e.$route.params.collection,id:t._id});case 7:o=n.sent,200===o.status&&(e.fetch(),e.loading=!1,e.$store.commit("success","Item deleted successfuly"));case 9:case"end":return n.stop()}}),n)})))()},updateComponent:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=V["default"].get(t.$route.params.collection),t.collection=n,n?(t.title=n.title,t.icon=n.icon,t.headers=n.table,t.fetch()):t.found=!1;case 3:case"end":return e.stop()}}),e)})))()}})},D=I,O=(n("62b8"),n("4ca6")),P=n("b0af"),j=n("99d9"),F=n("8fea"),S=n("891e"),B=Object(g["a"])(D,a,o,!1,null,"20d157a9",null);e["default"]=B.exports;_()(B,{VBadge:O["a"],VCard:P["a"],VCardText:j["d"],VCol:w["a"],VDataTable:F["a"],VIcon:k["a"],VPagination:S["a"],VSelect:d["a"],VSpacer:$["a"],VToolbar:A["a"]})},"62b8":function(t,e,n){"use strict";var a=n("51cd"),o=n.n(a);o.a}}]);
//# sourceMappingURL=chunk-f2a6a5ba.38952742.js.map