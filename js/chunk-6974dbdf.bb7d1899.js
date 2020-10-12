(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6974dbdf"],{"5b8f":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-card",[n("v-card-title",[n("v-icon",{staticClass:"mx-2",attrs:{size:"36"}},[t._v(t._s(t.collectionOptions.icon))]),t._v(t._s(t.collectionOptions.title)+" "),n("v-spacer"),t.collectionOptions.import?n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""},on:{click:t.importFile}},"v-btn",o,!1),a),[n("v-icon",[t._v("mdi-database-import ")])],1)]}}],null,!1,3639177902)},[n("span",[t._v("Import")])]):t._e(),t.collectionOptions.export?n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){t.dialog=!0}}},"v-btn",o,!1),a),[n("v-icon",[t._v("mdi-database-export ")])],1)]}}],null,!1,4155484130)},[n("span",[t._v("Export")])]):t._e(),t.collectionOptions.withdraw?n("v-btn",{staticClass:"ml-6",attrs:{color:"red white--text"},on:{click:function(e){return t.$router.push("/"+t.$route.params.collection+"/new?type=withdraw")}}},[n("v-icon",[t._v("mdi-bank-transfer-out")]),t._v(" Withdraw ")],1):t._e(),n("v-btn",{staticClass:"ml-6",attrs:{color:"success"},on:{click:function(e){return t.$router.push("/"+t.$route.params.collection+"/new")}}},[n("v-icon",[t._v("mdi-plus")]),t._v(" New ")],1)],1),n("v-card-text",[n("v-row",t._l(t.filters,(function(e,a){return n("v-col",{key:a,attrs:{sm:"4"}},[n(t.inputs[e.input],t._g(t._b({tag:"component",staticClass:"mx-1",attrs:{outlined:"",rounded:"",dense:"","hide-details":"",value:t.setFilterValue(t.$route.query[e.name]||null,e.name)},on:{input:function(n){return t.filter(e.name,n)}}},"component",e.bind,!1),e.on))],1)})),1)],1)],1),n("v-data-table",{staticClass:"my-5 elevation-1",attrs:{loading:t.loading,headers:t.headers,items:t.items,"hide-default-footer":"","multi-sort":""},on:{"update:options":t.tableOptions},scopedSlots:t._u([{key:"item.payment_method.name",fn:function(e){var n=e.item;return[t._v(" "+t._s(n.payment_method?n.payment_method.name:"-")+" "+t._s(n.payment_method?"("+n.payment_method.type+")":"")+" ")]}},{key:"item.amount",fn:function(e){var n=e.item;return[t._v(" "+t._s(new Intl.NumberFormat("en-US",{style:"currency",currency:t.collectionOptions.currency||"USD"}).format(n.amount))+" ")]}},{key:"item.active",fn:function(t){var e=t.item;return[n("v-badge",{attrs:{color:e.active?"green":"grey"}})]}},{key:"item.read",fn:function(t){var e=t.item;return[n("v-badge",{attrs:{color:e.read?"green":"grey"}})]}},{key:"item.created_on",fn:function(e){var n=e.item;return[t._v(" "+t._s(t.dateformat(new Date(n.created_on),"yyyy-mm-dd"))+" ")]}},{key:"item.country",fn:function(e){var n=e.item;return[t._v(" "+t._s(t.countries.filter((function(t){return t.code==n.country}))[0].name)+" ")]}},{key:"item.type",fn:function(e){var a=e.item;return[n("v-icon",{attrs:{color:"withdraw"==a.type?"red":"green"}},[t._v(" "+t._s("withdraw"==a.type?"mdi-bank-transfer-out":"mdi-bank-transfer-in")+" ")])]}},{key:"item.actions",fn:function(e){var a=e.item;return[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-icon",t._g(t._b({staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.cloneItem(a)}}},"v-icon",r,!1),o),[t._v(" mdi-content-copy ")])]}}],null,!0)},[n("span",[t._v("Copy")])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-icon",t._g(t._b({staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(a)}}},"v-icon",r,!1),o),[t._v(" mdi-pencil ")])]}}],null,!0)},[n("span",[t._v("Edit")])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-icon",t._g(t._b({attrs:{small:""},on:{click:function(e){return t.deleteItem(a)}}},"v-icon",r,!1),o),[t._v(" mdi-delete ")])]}}],null,!0)},[n("span",[t._v("Delete")])]),t.hasAssignTo(a)?n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-icon",t._g(t._b({staticClass:"mx-2",attrs:{color:a.assign?"green":"blue",small:""},on:{click:function(e){return t.assignTo(a)}}},"v-icon",r,!1),o),[t._v(t._s(a.assign?"mdi-clipboard-check":"mdi-clipboard-account"))])]}}],null,!0)},[n("span",[t._v("Assign to")])]):t._e()]}},{key:"loading",fn:function(){return[n("v-skeleton-loader",{staticClass:"mt-6",attrs:{height:"94",type:"list-item-three-line"}})]},proxy:!0},{key:"footer",fn:function(){return[n("v-pagination",{staticClass:"pa-4",attrs:{value:Number(t.$route.query.page)||1,length:t.totalPages,"total-visible":10,circle:""},on:{input:t.page}})]},proxy:!0}])}),t.collectionOptions.total&&t.total?n("v-sheet",{staticClass:"pa-3",attrs:{elevation:"1"}},[n("v-simple-table",[n("thead",[n("tr",[t.total.subtotal[0]?n("th",[t._v("Subtotal SAR")]):t._e(),t.total.withdraw[0]?n("th",[t._v("Withdraw SAR")]):t._e(),n("th",[t._v("Total SAR")]),n("th",[t._v("Total USD")])])]),n("tbody",[n("tr",[t.total.subtotal[0]?n("td",[t._v(" "+t._s(new Intl.NumberFormat("en-US",{style:"currency",currency:"SAR"}).format(t.total.subtotal[0].amount)))]):t._e(),t.total.withdraw[0]?n("td",[t._v(" "+t._s(new Intl.NumberFormat("en-US",{style:"currency",currency:"SAR"}).format(t.total.withdraw[0].amount)))]):t._e(),n("td",[t._v(" "+t._s(new Intl.NumberFormat("en-US",{style:"currency",currency:"SAR"}).format(t.total.amount)))]),n("td",[t._v(" "+t._s(new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t.total.amount/3.9)))])])])])],1):t._e(),n("v-dialog",{attrs:{"max-width":"650"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[t._v("Assign to :-")]),n("v-card-text",[t.dialog?n(t.inputs.autocomplete,{tag:"component",staticClass:"mx-1",attrs:{label:"User",prependIcon:"mdi-account",collection:"user",itemText:"displayName",itemValue:"_id",outlined:"",rounded:"",dense:"","hide-details":""},model:{value:t.assign.user,callback:function(e){t.$set(t.assign,"user",e)},expression:"assign.user"}}):t._e()],1),n("v-divider"),n("v-card-actions",[n("v-btn",{attrs:{color:"green white--text"},on:{click:t.saveAssignTo}},[t._v(" Save ")]),n("v-btn",{on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")])],1)],1)],1)],1)},o=[],r=(n("4de4"),n("a15b"),n("ac1f"),n("5319"),n("841c"),n("1276"),n("96cf"),n("1da1")),i=n("5530"),s=n("fb57"),c=n("2f62"),l=n("b9b9"),u=n.n(l),d=n("8654"),m=n("b974"),p=n("b73d"),v=n("bb0b"),f=n("e94a"),y=n("9db7"),h=n("445d"),g=n("1157"),b=n.n(g),_={name:"Items",data:function(){return{dialog:!1,assign:{user:null,item:null},countries:h["a"],dateformat:u.a,collectionOptions:{},loading:!1,items:[],inputs:{text:d["a"],select:m["a"],switch:p["a"],date:f["a"],range:y["a"],autocomplete:v["a"]},totalPages:1,total:null}},computed:{filters:function(){var t=this;return!!this.collectionOptions.filters&&this.collectionOptions.filters.filter((function(e){return"function"!=typeof e.if||e.if(t.$store.state)}))},headers:function(){return this.collectionOptions.table},collection:function(){return this.$route.params.collection}},watch:{$route:{handler:"updateComponent",immediate:!0}},methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])({get:"api/get",update:"api/update",remove:"api/remove"})),{},{saveAssignTo:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.update({collection:"deposit",data:{assign:t.assign.user||null},id:t.assign.item});case 2:return e.next=4,t.fetchData();case 4:t.dialog=!1,t.assign.user=null,t.assign.item=null;case 7:case"end":return e.stop()}}),e)})))()},hasAssignTo:function(t){if("deposit"==this.collection){var e="ftd"==t.department.type,n=!this.$store.state.auth.user.department;return e&&n}return!1},assignTo:function(t){this.dialog=!0,this.assign.user=t.assign,this.assign.item=t._id},importFile:function(){},fetchData:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.collection,console.log("Fetching data"),t.items=[],t.loading=!0,e.next=6,t.get({collection:n+window.location.search});case 6:if(a=e.sent,!t.collectionOptions.total){e.next=13;break}return e.next=10,t.get({collection:n+"/total"+window.location.search});case 10:o=e.sent,console.log(o),o&&200==o.status&&(t.total=o.data[0]);case 13:a&&200==a.status&&(t.items=a.data.docs,t.totalPages=a.data.totalPages),t.loading=!1;case 15:case"end":return e.stop()}}),e)})))()},updateComponent:function(){this.collectionOptions=s["default"].get(this.collection),this.collectionOptions?this.fetchData():this.$router.replace("./404")},page:function(t){var e=Object.assign({},this.$route.query);e.page=t;var n="/"+this.collection+"?"+b.a.param(e);console.log(n),this.$router.push(n)},tableOptions:function(t){console.log("table");var e=Object.assign({},this.$route.query);e["sortBy[]"]&&delete e["sortBy[]"],e["sortDesc[]"]&&delete e["sortDesc[]"],e.sortBy=t.sortBy,e.sortDesc=t.sortDesc;var n="/"+this.collection+"?"+b.a.param(e);this.$router.replace(n).catch((function(){}))},setFilterValue:function(t,e){return"created_on"==e&&t&&(t=t.split("|")),t},filter:function(t,e){"created_on"==t&&Array.isArray(e)&&(e=e.join("|"));var n=Object.assign({},this.$route.query);!e&&n[t]?delete n[t]:n[t]=e,n.page=1;var a="/"+this.collection+"?"+b.a.param(n);this.$router.replace(a)},editItem:function(t){this.$router.push("/"+this.$route.params.collection+"/"+t._id)},cloneItem:function(t){this.$router.push("/"+this.$route.params.collection+"/new?clone="+t._id)},deleteItem:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$confirm("Are you sure do you want to delete this item ?",{title:"Warning"});case 2:if(a=n.sent,!a){n.next=9;break}return e.loading=!0,n.next=7,e.remove({collection:e.$route.params.collection,id:t._id});case 7:o=n.sent,200===o.status&&(e.fetchData(),e.loading=!1,e.$store.commit("success","Item deleted successfuly"));case 9:case"end":return n.stop()}}),n)})))()}})},w=_,k=n("2877"),T=n("6544"),D=n.n(T),M=n("4ca6"),S=n("8336"),x=n("b0af"),O=n("99d9"),C=n("62ad"),N=n("a523"),$=n("8fea"),A=n("169a"),V=n("ce7e"),F=n("132d"),I=n("891e"),H=n("0fd9"),R=n("8dd9"),U=n("1f4f"),j=n("3129"),P=n("2fa4"),J=n("3a2f"),E=Object(k["a"])(w,a,o,!1,null,null,null);e["default"]=E.exports;D()(E,{VBadge:M["a"],VBtn:S["a"],VCard:x["a"],VCardActions:O["b"],VCardText:O["d"],VCardTitle:O["e"],VCol:C["a"],VContainer:N["a"],VDataTable:$["a"],VDialog:A["a"],VDivider:V["a"],VIcon:F["a"],VPagination:I["a"],VRow:H["a"],VSheet:R["a"],VSimpleTable:U["a"],VSkeletonLoader:j["a"],VSpacer:P["a"],VTooltip:J["a"]})},"9db7":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{prependInnerIcon:"mdi-calendar",rounded:"",outlined:"",dense:"",value:t.dateRangeText,label:"Date",readonly:"","hide-details":"",clearable:""},on:{"click:clear":t.clear}},"v-text-field",o,!1),a))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[n("v-date-picker",{attrs:{range:""},on:{input:t.input},model:{value:t.dates,callback:function(e){t.dates=e},expression:"dates"}})],1)},o=[],r=(n("a15b"),{name:"date-picker",props:{value:Array},data:function(){return{menu:!1,dates:[]}},methods:{input:function(t){t.length>1&&(this.menu=!1,this.$emit("input",t))},clear:function(){this.dates=[],this.$emit("input",[])}},computed:{dateRangeText:function(){return this.dates.join(" ~ ")}},created:function(){this.value&&(this.dates=this.value)}}),i=r,s=n("2877"),c=n("6544"),l=n.n(c),u=n("2e4b"),d=n("e449"),m=n("8654"),p=Object(s["a"])(i,a,o,!1,null,null,null);e["a"]=p.exports;l()(p,{VDatePicker:u["a"],VMenu:d["a"],VTextField:m["a"]})},b9b9:function(t,e,n){var a;(function(o){"use strict";var r=function(){var t=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g,e=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,n=/[^-+\dA-Z]/g;return function(a,o,u,d){if(1!==arguments.length||"string"!==l(a)||/\d/.test(a)||(o=a,a=void 0),a=a||new Date,a instanceof Date||(a=new Date(a)),isNaN(a))throw TypeError("Invalid date");o=String(r.masks[o]||o||r.masks["default"]);var m=o.slice(0,4);"UTC:"!==m&&"GMT:"!==m||(o=o.slice(4),u=!0,"GMT:"===m&&(d=!0));var p=u?"getUTC":"get",v=a[p+"Date"](),f=a[p+"Day"](),y=a[p+"Month"](),h=a[p+"FullYear"](),g=a[p+"Hours"](),b=a[p+"Minutes"](),_=a[p+"Seconds"](),w=a[p+"Milliseconds"](),k=u?0:a.getTimezoneOffset(),T=s(a),D=c(a),M={d:v,dd:i(v),ddd:r.i18n.dayNames[f],dddd:r.i18n.dayNames[f+7],m:y+1,mm:i(y+1),mmm:r.i18n.monthNames[y],mmmm:r.i18n.monthNames[y+12],yy:String(h).slice(2),yyyy:h,h:g%12||12,hh:i(g%12||12),H:g,HH:i(g),M:b,MM:i(b),s:_,ss:i(_),l:i(w,3),L:i(Math.round(w/10)),t:g<12?r.i18n.timeNames[0]:r.i18n.timeNames[1],tt:g<12?r.i18n.timeNames[2]:r.i18n.timeNames[3],T:g<12?r.i18n.timeNames[4]:r.i18n.timeNames[5],TT:g<12?r.i18n.timeNames[6]:r.i18n.timeNames[7],Z:d?"GMT":u?"UTC":(String(a).match(e)||[""]).pop().replace(n,""),o:(k>0?"-":"+")+i(100*Math.floor(Math.abs(k)/60)+Math.abs(k)%60,4),S:["th","st","nd","rd"][v%10>3?0:(v%100-v%10!=10)*v%10],W:T,N:D};return o.replace(t,(function(t){return t in M?M[t]:t.slice(1,t.length-1)}))}}();function i(t,e){t=String(t),e=e||2;while(t.length<e)t="0"+t;return t}function s(t){var e=new Date(t.getFullYear(),t.getMonth(),t.getDate());e.setDate(e.getDate()-(e.getDay()+6)%7+3);var n=new Date(e.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var a=e.getTimezoneOffset()-n.getTimezoneOffset();e.setHours(e.getHours()-a);var o=(e-n)/6048e5;return 1+Math.floor(o)}function c(t){var e=t.getDay();return 0===e&&(e=7),e}function l(t){return null===t?"null":void 0===t?"undefined":"object"!==typeof t?typeof t:Array.isArray(t)?"array":{}.toString.call(t).slice(8,-1).toLowerCase()}r.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},r.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},a=function(){return r}.call(e,n,e,t),void 0===a||(t.exports=a)})()}}]);
//# sourceMappingURL=chunk-6974dbdf.bb7d1899.js.map