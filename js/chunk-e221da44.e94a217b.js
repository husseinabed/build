(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e221da44"],{"1dde3":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{flat:"",color:t.color+" white--text lighten-2",elevation:"1"}},[t.loading?a("v-card-title",{staticClass:"pb-0"},[a("v-skeleton-loader",{attrs:{type:"heading"}})],1):a("v-card-title",{staticClass:"pb-0"},[t._v(t._s(t.title))]),a("v-card-text",[t.loading?a("v-row",[t.deposit?a("v-col",{staticClass:" white--text"},[a("v-skeleton-loader",{attrs:{type:"heading"}})],1):t._e(),a("v-col",{staticClass:" white--text"},[a("v-skeleton-loader",{attrs:{type:"heading"}})],1)],1):a("v-row",[t.deposit?a("v-col",{staticClass:" white--text"},[a("small",[t._v("Deposits")]),a("h1",[t._v(t._s(t.count))])]):t._e(),a("v-col",{staticClass:" white--text"},[a("small",[t._v("Total")]),a("h1",[t._v(t._s(new Intl.NumberFormat("en-US",{style:"currency",currency:t.currency}).format(t.amount)))])])],1)],1)],1)},r=[],o=(a("a9e3"),{name:"Panel",props:{title:{type:String,default:"Total"},count:{type:Number,default:0},amount:{type:Number,default:0},color:{type:String,default:"green"},deposit:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},currency:{type:String,default:"USD"}}}),s=o,i=a("2877"),l=a("6544"),c=a.n(l),u=a("b0af"),d=a("99d9"),p=a("62ad"),m=a("0fd9"),h=a("3129"),g=Object(i["a"])(s,n,r,!1,null,null,null);e["a"]=g.exports;c()(g,{VCard:u["a"],VCardText:d["d"],VCardTitle:d["e"],VCol:p["a"],VRow:m["a"],VSkeletonLoader:h["a"]})},"2e17":function(t,e,a){"use strict";a("99af");e["a"]={pad:function(t,e){var a=""+t;while(a.length<e)a="0"+a;return a},get today(){var t=new Date;return t.setHours(0,0,0,0),t},get first_day_of_the_month(){var t=new Date;return new Date(t.getFullYear(),t.getMonth(),1)},get todayString(){var t=this.today,e=this.pad;return["".concat(t.getFullYear(),"-").concat(e(t.getMonth()+1,2),"-").concat(e(t.getDate(),2)),"".concat(t.getFullYear(),"-").concat(e(t.getMonth()+1,2),"-").concat(e(t.getDate(),2))]},get last7daysString(){var t=this.today,e=new Date(this.today.getTime());e.setDate(e.getDate()-7);var a=this.pad;return["".concat(e.getFullYear(),"-").concat(a(e.getMonth()+1,2),"-").concat(a(e.getDate(),2)),"".concat(t.getFullYear(),"-").concat(a(t.getMonth()+1,2),"-").concat(a(t.getDate(),2))]},get currentDateRange(){var t=this.today,e=this.pad;return["".concat(t.getFullYear(),"-").concat(e(t.getMonth()+1,2),"-01"),"".concat(t.getFullYear(),"-").concat(e(t.getMonth()+1,2),"-").concat(e(t.getDate(),2))]}}},"751b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"pa-0"},[a("v-card",{staticClass:"my-6"},[a("v-card-title",[a("v-icon",{staticClass:"mx-2",attrs:{size:"36"}},[t._v("mdi-cash-multiple")]),t._v("Retention "),a("v-spacer"),t._v(" "+t._s(this.$route.query.created_on.split("|").join(" ~ "))+" ")],1),a("v-card-text",[a("v-row",[a("v-col",{attrs:{sm:"4"}},[a("app-auto-complete",t._b({ref:"user",attrs:{outlined:"",rounded:"",dense:"","hide-details":"",value:t.setFilterValue(t.$route.query["user"]||null,"user")},on:{input:function(e){return t.filter("user",e)}}},"app-auto-complete",t.userFilter,!1))],1),a("v-col",{attrs:{sm:"4"}},[a("app-date-range",{attrs:{outlined:"",rounded:"",dense:"","hide-details":"",value:t.setFilterValue(t.$route.query["created_on"]||t.dates.join("|"),"created_on")},on:{input:function(e){return t.filter("created_on",e)}}})],1)],1)],1)],1),a("app-panel",{attrs:{title:"Total",count:t.totals.count,amount:t.totals.amount}}),a("v-data-table",{staticClass:"elevation-1",attrs:{loading:t.loading,headers:t.headers,items:t.items,"multi-sort":"","hide-default-footer":""},on:{"click:row":t.goTo},scopedSlots:t._u([{key:"loading",fn:function(){return[a("v-skeleton-loader",{staticClass:"mt-6",attrs:{height:"94",type:"list-item-three-line"}})]},proxy:!0},{key:"item.amount",fn:function(e){var a=e.item;return[t._v(" "+t._s(new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(a.amount))+" ")]}},{key:"footer",fn:function(){return[a("v-pagination",{staticClass:"pa-4",attrs:{value:Number(t.$route.query.page)||1,length:t.totalPages,"total-visible":10,circle:""},on:{input:t.page}})]},proxy:!0}])})],1)},r=[],o=(a("a15b"),a("ac1f"),a("5319"),a("841c"),a("1276"),a("96cf"),a("1da1")),s=a("5530"),i=a("bb0b"),l=a("9db7"),c=a("1dde3"),u=a("2e17"),d=a("2f62"),p=a("1157"),m=a.n(p),h=a("b012"),g=a.n(h),v={components:{AppAutoComplete:i["a"],AppDateRange:l["a"],AppPanel:c["a"]},data:function(){return{loading:!1,dates:u["a"].currentDateRange,userFilter:{label:"Owner",prependInnerIcon:"mdi-account",hideDetails:!0,collection:"user",itemText:"displayName",itemValue:"_id",hideAddNew:!0,or:!1,query:{role:["!wakel","!affiliate"]}},headers:[{text:"Owner",align:"start",sortable:!1,value:"user.displayName"},{text:"Deposits",sortable:!1,value:"count"},{text:"Amount",sortable:!1,value:"amount"}],items:[],totalPages:0,totals:{count:0,amount:0}}},watch:{$route:{handler:"updateComponent",immediate:!0}},methods:Object(s["a"])(Object(s["a"])({},Object(d["b"])({get:"api/get"})),{},{fetchData:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.items=[],t.loading=!0,e.next=4,t.get({collection:"department",query:{type:"rtn"}});case 4:return a=e.sent,n=a.data.docs[0]._id,t.$refs.user.query.department=n,e.next=9,t.get({collection:"retention"+window.location.search,query:{department:n}});case 9:return r=e.sent,e.next=12,t.get({collection:"retention/total"+window.location.search,query:{department:n}});case 12:o=e.sent,o&&200==o.status&&o.data[0]?(t.totals.count=o.data[0].count,t.totals.amount=o.data[0].amount):(t.totals.count=0,t.totals.amount=0),r&&200==r.status&&(t.items=r.data.docs,t.totalPages=r.data.totalPages),t.loading=!1;case 16:case"end":return e.stop()}}),e)})))()},page:function(t){var e=Object.assign({},this.$route.query);e.page=t;var a="/retention?"+m.a.param(e);this.$router.push(a)},goTo:function(t){var e=this.$route.query.created_on,a={user:t._id,department:t.user.department,created_on:e,sortBy:["created_on"],sortDesc:[!1]};this.$router.push("/deposit?"+m.a.param(a))},setFilterValue:function(t,e){return"created_on"==e&&t&&(t=t.split("|")),t},filter:g()((function(t,e){"created_on"==t&&Array.isArray(e)&&(e=e.join("|"));var a=Object.assign({},this.$route.query);!e&&a[t]?delete a[t]:a[t]=e,a.page=1;var n="/retention?"+m.a.param(a);this.$router.replace(n)}),500),updateComponent:function(){if(this.$route.query["created_on"])this.fetchData();else{var t="/retention?"+m.a.param({created_on:this.dates.join("|")});this.$router.replace(t)}}})},f=v,y=a("2877"),_=a("6544"),b=a.n(_),w=a("b0af"),x=a("99d9"),D=a("62ad"),C=a("a523"),V=a("8fea"),k=a("132d"),$=a("891e"),F=a("0fd9"),T=a("3129"),j=a("2fa4"),S=Object(y["a"])(f,n,r,!1,null,null,null);e["default"]=S.exports;b()(S,{VCard:w["a"],VCardText:x["d"],VCardTitle:x["e"],VCol:D["a"],VContainer:C["a"],VDataTable:V["a"],VIcon:k["a"],VPagination:$["a"],VRow:F["a"],VSkeletonLoader:T["a"],VSpacer:j["a"]})},"9db7":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{prependInnerIcon:"mdi-calendar",rounded:"",outlined:"",dense:"",value:t.dateRangeText,label:"Date",readonly:"","hide-details":"",clearable:""},on:{"click:clear":t.clear}},"v-text-field",r,!1),n))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-date-picker",{attrs:{range:""},on:{input:t.input},model:{value:t.dates,callback:function(e){t.dates=e},expression:"dates"}})],1)},r=[],o=(a("a15b"),{name:"date-picker",props:{value:Array},data:function(){return{menu:!1,dates:[]}},methods:{input:function(t){t.length>1&&(this.menu=!1,this.$emit("input",t))},clear:function(){this.dates=[],this.$emit("input",[])}},computed:{dateRangeText:function(){return this.dates.join(" ~ ")}},created:function(){this.value&&(this.dates=this.value)}}),s=o,i=a("2877"),l=a("6544"),c=a.n(l),u=a("2e4b"),d=a("e449"),p=a("8654"),m=Object(i["a"])(s,n,r,!1,null,null,null);e["a"]=m.exports;c()(m,{VDatePicker:u["a"],VMenu:d["a"],VTextField:p["a"]})}}]);
//# sourceMappingURL=chunk-e221da44.e94a217b.js.map