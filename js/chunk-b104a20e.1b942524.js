(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b104a20e"],{"1dde3":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{flat:"",color:e.color+" white--text lighten-2",elevation:"1"}},[e.loading?a("v-card-title",{staticClass:"pb-0"},[a("v-skeleton-loader",{attrs:{type:"heading"}})],1):a("v-card-title",{staticClass:"pb-0"},[e._v(e._s(e.title))]),a("v-card-text",[e.loading?a("v-row",[e.deposit?a("v-col",{staticClass:" white--text"},[a("v-skeleton-loader",{attrs:{type:"heading"}})],1):e._e(),a("v-col",{staticClass:" white--text"},[a("v-skeleton-loader",{attrs:{type:"heading"}})],1)],1):a("v-row",[e.deposit?a("v-col",{staticClass:" white--text"},[a("small",[e._v("Deposits")]),a("h1",[e._v(e._s(e.count))])]):e._e(),a("v-col",{staticClass:" white--text"},[a("small",[e._v("Total")]),a("h1",[e._v(e._s(new Intl.NumberFormat("en-US",{style:"currency",currency:e.currency}).format(e.amount)))])])],1)],1)],1)},o=[],i=(a("a9e3"),{name:"Panel",props:{title:{type:String,default:"Total"},count:{type:Number,default:0},amount:{type:Number,default:0},color:{type:String,default:"green"},deposit:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},currency:{type:String,default:"USD"}}}),l=i,r=a("2877"),s=a("6544"),u=a.n(s),c=a("b0af"),d=a("99d9"),m=a("62ad"),f=a("0fd9"),p=a("3129"),v=Object(r["a"])(l,n,o,!1,null,null,null);t["a"]=v.exports;u()(v,{VCard:c["a"],VCardText:d["d"],VCardTitle:d["e"],VCol:m["a"],VRow:f["a"],VSkeletonLoader:p["a"]})},"2e17":function(e,t,a){"use strict";a("99af");t["a"]={pad:function(e,t){var a=""+e;while(a.length<t)a="0"+a;return a},get today(){var e=new Date;return e.setHours(0,0,0,0),e},get first_day_of_the_month(){var e=new Date;return new Date(e.getFullYear(),e.getMonth(),1)},get todayString(){var e=this.today,t=this.pad;return["".concat(e.getFullYear(),"-").concat(t(e.getMonth()+1,2),"-").concat(t(e.getDate(),2)),"".concat(e.getFullYear(),"-").concat(t(e.getMonth()+1,2),"-").concat(t(e.getDate(),2))]},get last7daysString(){var e=this.today,t=new Date(this.today.getTime());t.setDate(t.getDate()-7);var a=this.pad;return["".concat(t.getFullYear(),"-").concat(a(t.getMonth()+1,2),"-").concat(a(t.getDate(),2)),"".concat(e.getFullYear(),"-").concat(a(e.getMonth()+1,2),"-").concat(a(e.getDate(),2))]},get currentDateRange(){var e=this.today,t=this.pad;return["".concat(e.getFullYear(),"-").concat(t(e.getMonth()+1,2),"-01"),"".concat(e.getFullYear(),"-").concat(t(e.getMonth()+1,2),"-").concat(t(e.getDate(),2))]}}},"9db7":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,o=t.attrs;return[a("v-text-field",e._g(e._b({attrs:{prependInnerIcon:"mdi-calendar",rounded:"",outlined:"",dense:"",value:e.dateRangeText,label:"Date",readonly:"","hide-details":"",clearable:""},on:{"click:clear":e.clear}},"v-text-field",o,!1),n))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[a("v-date-picker",{attrs:{range:""},on:{input:e.input},model:{value:e.dates,callback:function(t){e.dates=t},expression:"dates"}})],1)},o=[],i=(a("a15b"),{name:"date-picker",props:{value:Array},data:function(){return{menu:!1,dates:[]}},methods:{input:function(e){e.length>1&&(this.menu=!1,this.$emit("input",e))},clear:function(){this.dates=[],this.$emit("input",[])}},computed:{dateRangeText:function(){return this.dates.join(" ~ ")}},created:function(){this.value&&(this.dates=this.value)}}),l=i,r=a("2877"),s=a("6544"),u=a.n(s),c=a("2e4b"),d=a("e449"),m=a("8654"),f=Object(r["a"])(l,n,o,!1,null,null,null);t["a"]=f.exports;u()(f,{VDatePicker:c["a"],VMenu:d["a"],VTextField:m["a"]})},b1e1:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card",{staticClass:"mt-2",attrs:{elevation:"1"}},[a("v-card-title",[a("v-icon",{staticClass:"mx-2"},[e._v(" mdi-file-chart ")]),a("v-toolbar-title",[e._v("Report")])],1),a("v-card-text",[e.gLoading?a("v-row",[a("v-col",{attrs:{cols:"12",sm:"7"}},[a("v-skeleton-loader",{attrs:{type:"card-heading"}})],1),a("v-col",{attrs:{cols:"12",sm:"5"}},[a("v-skeleton-loader",{attrs:{type:"card-heading"}})],1),a("v-col",{attrs:{cols:"12",sm:"5"}},[a("v-skeleton-loader",{attrs:{type:"card-heading"}})],1),a("v-col",{attrs:{cols:"12",sm:"7"}},[a("v-skeleton-loader",{attrs:{type:"card-heading"}})],1)],1):a("v-row",[a("v-col",{attrs:{cols:"12",sm:"7"}},[a("app-date-picker",{model:{value:e.dates,callback:function(t){e.dates=t},expression:"dates"}})],1),a("v-col",{attrs:{cols:"12",sm:"5"}},[a("app-auto-complete",{attrs:{hideAddNew:"",outlined:"","hide-details":"",rounded:"",dense:"",label:"Department",collection:"department",itemText:"name",itemValue:"_id"},model:{value:e.department,callback:function(t){e.department=t},expression:"department"}})],1),a("v-col",{attrs:{cols:"12",sm:"5"}},[a("v-select",{attrs:{label:"Report by",outlined:"","hide-details":"",rounded:"",dense:"",items:e.byItems},model:{value:e.by,callback:function(t){e.by=t},expression:"by"}})],1),a("v-col",{attrs:{cols:"12",sm:"7"}},[a("app-auto-complete",e._g(e._b({attrs:{hideAddNew:"",outlined:"","hide-details":"",rounded:"",dense:""},model:{value:e.autocomplete.value,callback:function(t){e.$set(e.autocomplete,"value",t)},expression:"autocomplete.value"}},"app-auto-complete",e.autocomplete.bind,!1),e.autocomplete.on))],1),e.isAffiliate?a("v-col",{attrs:{cols:"12",sm:"7"}},[a("app-auto-complete",e._b({ref:"subaffiliate",attrs:{rounded:"",outlined:"",dense:"",hideAddNew:"",label:"Tag",collection:"subaffiliate",itemText:"name",itemValue:"_id"},model:{value:e.subaffiliateValue,callback:function(t){e.subaffiliateValue=t},expression:"subaffiliateValue"}},"app-auto-complete",e.subaffiliateBind,!1))],1):e._e(),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-btn",{attrs:{large:"",rounded:"",color:"green white--text",width:"100%"},on:{click:e.submit}},[e._v("Submit")])],1)],1)],1)],1),a("app-panel",{attrs:{title:"Total",count:e.totals.count,amount:e.totals.amount}}),a("v-card",{staticClass:"my-4",attrs:{elevation:"1"}},[a("v-data-table",{staticClass:"my-5 elevation-1",attrs:{loading:e.loading,headers:e.headers,"single-expand":!0,expanded:e.expanded,"show-expand":"","item-key":"_id",items:e.items},on:{"update:expanded":function(t){e.expanded=t}},scopedSlots:e._u([{key:"loading",fn:function(){return[a("v-skeleton-loader",{staticClass:"mt-6",attrs:{height:"94",type:"list-item-three-line"}})]},proxy:!0},{key:"item.amount",fn:function(t){var a=t.item;return[e._v(" "+e._s(new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(a.amount))+" ")]}},{key:"expanded-item",fn:function(t){var n=t.headers,o=t.item;return[a("td",{staticClass:"pa-4",attrs:{colspan:n.length}},[a("v-data-table",{attrs:{headers:e.dataHeaders,items:o.child},on:{"click:row":function(t){return e.innerListClick(t,o)}},scopedSlots:e._u([{key:"item.amount",fn:function(t){var a=t.item;return[e._v(" "+e._s(new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(a.amount))+" ")]}},{key:"item.created_on",fn:function(t){var a=t.item;return[e._v(" "+e._s(e.dateformat(new Date(a.created_on),"yyyy-mm-dd"))+" ")]}}],null,!0)})],1)]}}])})],1),a("v-dialog",{attrs:{"max-width":"960"},model:{value:e.dialog.value,callback:function(t){e.$set(e.dialog,"value",t)},expression:"dialog.value"}},[a("v-card",[a("v-card-title",[e._v(" "+e._s(e.dialog.title)+" "),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(t){e.dialog.value=!1}}},[a("v-icon",[e._v("mdi-close")])],1),a("v-card-text",[a("v-data-table",{attrs:{headers:e.dialog.headers,items:e.dialog.items},scopedSlots:e._u([{key:"item.amount",fn:function(t){var a=t.item;return[e._v(" "+e._s(new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(a.amount))+" ")]}},{key:"item.created_on",fn:function(t){var a=t.item;return[e._v(" "+e._s(e.dateformat(new Date(a.created_on),"yyyy-mm-dd"))+" ")]}}])})],1)],1)],1)],1)],1)},o=[],i=(a("99af"),a("a15b"),a("b0c0"),a("96cf"),a("1da1")),l=a("5530"),r=a("2909"),s=a("2e17"),u=a("bb0b"),c=a("9db7"),d=a("1dde3"),m=a("2f62"),f=a("b9b9"),p=a.n(f),v={customer:[{text:"TP Account",align:"start",value:"customer.tpc"},{text:"Account name",align:"start",value:"customer.name"},{text:"Deposits",value:"count"},{text:"Total",value:"amount"}],affiliate:[{text:"Affiliate",align:"start",value:"affiliate.name"},{text:"Deposits",value:"count"},{text:"Total",value:"amount"}],user:[{text:"Agent",align:"start",value:"user.displayName"},{text:"Deposits",value:"count"},{text:"Total",value:"amount"}]},y={customer:[{text:"Department",value:"department.name"},{text:"Date",value:"created_on"},{text:"Amount",value:"amount"},{text:"Owner",value:"user.displayName"}],affiliate:[{text:"TP Account",align:"start",value:"customer.tpc"},{text:"Account name",value:"customer.name"},{text:"Tag",value:"subaffiliate.name"},{text:"Deposits",value:"count"},{text:"Total",value:"amount"}],user:[{text:"TP Account",align:"start",value:"customer.tpc"},{text:"Account name",align:"start",value:"customer.name"},{text:"Deposits",value:"count"},{text:"Total",value:"amount"}]},g=[{text:"Customer",value:"customer"},{text:"Affiliate",value:"affiliate"},{text:"Agent",value:"user"}],h={customer:{label:"Customer",collection:"customer",itemText:"name",itemValue:"_id"},affiliate:{label:"Affiliate",collection:"affiliate",itemText:"name",itemValue:"_id"},user:{label:"Agent",collection:"user",itemText:"displayName",itemValue:"_id",or:!1,query:{role:["!wakel","!affiliate"]}}},b={customer:function(){return{}},affiliate:function(e){return{input:function(t){e.$refs.subaffiliate.query.affiliate=t||"!",t||(e.subaffiliateValue=null)}}},user:function(){return{}}},x={name:"Report",components:{AppDatePicker:c["a"],AppAutoComplete:u["a"],appPanel:d["a"]},data:function(){return{dateformat:p.a,dates:Object(r["a"])(s["a"].currentDateRange),department:"",byItems:g,by:"customer",autocomplete:{value:"",bind:h.customer,on:b.customer()},loading:!1,gLoading:!1,headers:v.customer,dataHeaders:y.customer,items:[],expanded:[],totals:{amount:0,count:0},dialog:{value:!1,title:"",items:[],headers:y.customer},subaffiliateValue:null,subaffiliateBind:{or:!1,query:{affiliate:"!"}}}},computed:{isAffiliate:function(){return"affiliate"==this.by}},watch:{by:function(){this.autocomplete.value="",this.autocomplete.bind=h[this.by],this.autocomplete.on=b[this.by](this),this.headers=v[this.by],this.dataHeaders=y[this.by],this.items=[]}},methods:Object(l["a"])(Object(l["a"])({},Object(m["b"])({get:"api/get"})),{},{submit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,e.items=[],e.expanded=[],t.next=5,e.get({collection:"report_new",query:{department:e.department||null,by:e.by,created_on:e.dates.join("|"),id:e.autocomplete.value||null,subaffiliate:e.subaffiliateValue||null}});case 5:return a=t.sent,t.next=8,e.get({collection:"report_new/total",query:{department:e.department||null,by:e.by,created_on:e.dates.join("|"),id:e.autocomplete.value||null,subaffiliate:e.subaffiliateValue||null}});case 8:n=t.sent,console.log(a.data),e.totals.amount=n.data[0].amount,e.totals.count=n.data[0].count,e.items=a.data,e.loading=!1;case 14:case"end":return t.stop()}}),t)})))()},innerListClick:function(e){"customer"!=this.by&&(this.dialog.value=!0,this.dialog.items=e.child,this.dialog.title="(".concat(e.customer.tpc,") ").concat(e.customer.name))}}),created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.gLoading=!0,t.next=3,e.get({collection:"department",query:{type:"rtn"}});case 3:a=t.sent,a&&200==a.status&&(e.department=a.data.docs[0]._id),e.gLoading=!1;case 6:case"end":return t.stop()}}),t)})))()}},T=x,_=a("2877"),D=a("6544"),w=a.n(D),M=a("8336"),k=a("b0af"),S=a("99d9"),V=a("62ad"),C=a("a523"),A=a("8fea"),N=a("169a"),H=a("132d"),F=a("0fd9"),O=a("b974"),U=a("3129"),j=a("2fa4"),P=a("2a7f"),R=Object(_["a"])(T,n,o,!1,null,null,null);t["default"]=R.exports;w()(R,{VBtn:M["a"],VCard:k["a"],VCardText:S["d"],VCardTitle:S["e"],VCol:V["a"],VContainer:C["a"],VDataTable:A["a"],VDialog:N["a"],VIcon:H["a"],VRow:F["a"],VSelect:O["a"],VSkeletonLoader:U["a"],VSpacer:j["a"],VToolbarTitle:P["c"]})},b9b9:function(e,t,a){var n;(function(o){"use strict";var i=function(){var e=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g,t=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,a=/[^-+\dA-Z]/g;return function(n,o,c,d){if(1!==arguments.length||"string"!==u(n)||/\d/.test(n)||(o=n,n=void 0),n=n||new Date,n instanceof Date||(n=new Date(n)),isNaN(n))throw TypeError("Invalid date");o=String(i.masks[o]||o||i.masks["default"]);var m=o.slice(0,4);"UTC:"!==m&&"GMT:"!==m||(o=o.slice(4),c=!0,"GMT:"===m&&(d=!0));var f=c?"getUTC":"get",p=n[f+"Date"](),v=n[f+"Day"](),y=n[f+"Month"](),g=n[f+"FullYear"](),h=n[f+"Hours"](),b=n[f+"Minutes"](),x=n[f+"Seconds"](),T=n[f+"Milliseconds"](),_=c?0:n.getTimezoneOffset(),D=r(n),w=s(n),M={d:p,dd:l(p),ddd:i.i18n.dayNames[v],dddd:i.i18n.dayNames[v+7],m:y+1,mm:l(y+1),mmm:i.i18n.monthNames[y],mmmm:i.i18n.monthNames[y+12],yy:String(g).slice(2),yyyy:g,h:h%12||12,hh:l(h%12||12),H:h,HH:l(h),M:b,MM:l(b),s:x,ss:l(x),l:l(T,3),L:l(Math.round(T/10)),t:h<12?i.i18n.timeNames[0]:i.i18n.timeNames[1],tt:h<12?i.i18n.timeNames[2]:i.i18n.timeNames[3],T:h<12?i.i18n.timeNames[4]:i.i18n.timeNames[5],TT:h<12?i.i18n.timeNames[6]:i.i18n.timeNames[7],Z:d?"GMT":c?"UTC":(String(n).match(t)||[""]).pop().replace(a,""),o:(_>0?"-":"+")+l(100*Math.floor(Math.abs(_)/60)+Math.abs(_)%60,4),S:["th","st","nd","rd"][p%10>3?0:(p%100-p%10!=10)*p%10],W:D,N:w};return o.replace(e,(function(e){return e in M?M[e]:e.slice(1,e.length-1)}))}}();function l(e,t){e=String(e),t=t||2;while(e.length<t)e="0"+e;return e}function r(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var a=new Date(t.getFullYear(),0,4);a.setDate(a.getDate()-(a.getDay()+6)%7+3);var n=t.getTimezoneOffset()-a.getTimezoneOffset();t.setHours(t.getHours()-n);var o=(t-a)/6048e5;return 1+Math.floor(o)}function s(e){var t=e.getDay();return 0===t&&(t=7),t}function u(e){return null===e?"null":void 0===e?"undefined":"object"!==typeof e?typeof e:Array.isArray(e)?"array":{}.toString.call(e).slice(8,-1).toLowerCase()}i.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},i.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},n=function(){return i}.call(t,a,t,e),void 0===n||(e.exports=n)})()}}]);
//# sourceMappingURL=chunk-b104a20e.1b942524.js.map