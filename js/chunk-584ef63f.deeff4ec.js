(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-584ef63f"],{"2a1d":function(t,e,a){"use strict";var s=a("3ca7"),r=a.n(s);r.a},"3ca7":function(t,e,a){},b30e:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{class:t.mainClass,attrs:{column:"","d-flex":""}},[t.started?a("v-flex",{staticClass:" align-center ",style:t.style.item0,attrs:{"d-flex":""}},[a("v-container",{staticClass:"pa-0 d-flex"},[a("v-progress-circular",{staticClass:"mx-2",attrs:{value:t.time_to_change}}),a("v-slide-x-reverse-transition",[a("span",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"headline"},[t._v(" "+t._s(t.department)+" ")])]),a("v-spacer"),a("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.attrs,r=e.on;return[a("v-input",t._g(t._b({staticClass:"primary--text",attrs:{"prepend-icon":"mdi-calendar","hide-details":"",width:"100px"}},"v-input",s,!1),r),[t._v(t._s(t.formatedDate))])]}}],null,!1,1096678114)},[a("v-date-picker",{attrs:{range:""},model:{value:t.dates,callback:function(e){t.dates=e},expression:"dates"}})],1),a("v-switch",{staticClass:"ma-0",model:{value:t.$vuetify.theme.dark,callback:function(e){t.$set(t.$vuetify.theme,"dark",e)},expression:"$vuetify.theme.dark"}})],1)],1):t._e(),t.started?a("v-flex",{style:t.style.item1,attrs:{"d-flex":""}},[a("v-container",{staticClass:"pa-0 d-flex"},[a("v-layout",t._l(t.topThree,(function(e,s){return a("v-flex",{key:s,attrs:{"d-flex":""}},[a("v-slide-y-transition",[t.show?a("span",{staticClass:"pa-p10",style:{width:"100%",height:"100%",margin:"0 2%"}},[a("v-sheet",{class:["flex elevation-2 d-flex flex-column full-height",{zoom:1==s,"zoom-out":0==s}]},[e?a("v-row",{staticClass:"pa-0 mx-0 text-center align-center flex"},[a("v-col",{staticClass:"py-0 font-weight-bold",attrs:{cols:"3"}},[a("v-chip",{staticStyle:{"font-size":"1.2vw",border:"solid 2.5px",background:"transparent"}},[t._v(t._s(t.place[s]))])],1),a("v-col",{staticClass:"pa-0 text-center font-weight-bold",staticStyle:{"font-size":"1.3"}},[e&&e.user?a("span",[t._v(" "+t._s(e.user.displayName)+" ")]):t._e()]),a("v-col",{staticClass:"py-0",attrs:{cols:"3"}},[a("span",{staticStyle:{"font-size":"2vw"}},[t._v(t._s(t.badge[s]))])])],1):t._e(),a("v-divider"),a("v-row",{staticClass:"pa-0 mx-0 text-center align-center flex"},[a("v-col",{staticClass:"py-0 ",attrs:{cols:"12"}},[e&&e.user?a("v-avatar",{staticClass:"mx-auto ",attrs:{size:"17vh"}},[a("v-img",{attrs:{src:t.getImageSrc(e.user.profileImage)}})],1):a("v-alert",{staticClass:"ma-0 mx-auto",staticStyle:{"max-width":"200px"},attrs:{icon:"mdi-alert"}},[t._v(" No Data Avilable ! ")])],1)],1),e?a("v-row",{staticClass:"pa-0 mx-0 text-center align-center flex ",staticStyle:{"font-size":"1.1vw"}},[a("v-col",{staticClass:"d-flex align-end ",attrs:{cols:"12"}},[a("v-row",{staticClass:" mx-0 text-center"},[a("v-col",{staticClass:"pa-0 font-weight-bold d-flex flex-column text-center",attrs:{cols:"3"}},[a("span",{staticClass:"caption flex",style:t.style.item0},[t._v("Deposits")]),e&&e.count?a("span",{attrs:{color:"primary lighten-2 grow"}},[t._v(t._s(e.count))]):t._e()]),a("v-col",{staticClass:"pa-0 text-center  d-flex  flex-column",staticStyle:{"font-size":"1.1vw"}},[a("span",{staticClass:"caption flex"},[t._v("Total")]),e&&e.amount?a("span",{staticClass:"green--text flex grow"},[t._v(t._s(t.utility.money(e.amount)))]):t._e()]),a("v-col",{staticClass:"py-0 d-flex flex-column text-center",attrs:{cols:"3"}},[a("span",{staticClass:"caption flex"},[t._v("Achievement")]),e&&e.percentage?a("span",{staticClass:"flex",style:[t.getColor(e.percentage),"font-size: 1.1vw"]},[t._v(" "+t._s(e.percentage?e.percentage.toFixed(2):0)+"% ")]):t._e()])],1)],1)],1):t._e()],1)],1):t._e()])],1)})),1)],1)],1):t._e(),a("v-flex",{class:{"primary lighten-2":!t.$vuetify.theme.dark,"grey darken-2":t.$vuetify.theme.dark,"justify-center":!0},style:t.style.item2,attrs:{"d-flex":""}},[t.started?a("v-container",{staticClass:"pa-0"},[a("v-list",{staticClass:"py-0",attrs:{color:"transparent"}},[a("v-list-item",{class:["my-0","py-0"]},[a("v-list-item-icon",{staticClass:"mx-1 white--text font-weight-bold py-0"},[t._v(" # ")]),a("v-list-item-avatar",{staticClass:"mx-2 my-0 py-0"}),a("v-list-item-content",[a("v-row",{staticClass:"py-0 white--text"},[a("v-col",{staticClass:"py-0",attrs:{cols:"6"}},[t._v(" Agent ")]),a("v-col",{staticClass:"py-0 "},[t._v(" Deposits ")]),a("v-col",{staticClass:"py-0  text-center ",attrs:{cols:"2"}},[t._v(" Total ")]),a("v-col",{staticClass:"py-0  d-flex  align-end flex-column"},[a("span",[t._v(" Achievement ")])])],1)],1)],1)],1),a("v-list",{staticClass:"pa-0",attrs:{color:"transparent"}},[t.restOfUser.length?t._e():a("v-slide-y-reverse-transition",[a("v-list-item",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:["my-2","v-sheet",{"theme--dark":t.isDark}]},[a("v-alert",{staticClass:"ma-0",attrs:{icon:"mdi-alert"}},[t._v(" No Data Avilable ! ")])],1)],1),t._l(t.restOfUser,(function(e,s){return a("v-slide-y-reverse-transition",{key:s},[a("v-list-item",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:["my-2","v-sheet",{"theme--dark":t.isDark}]},[a("v-list-item-icon",{staticClass:"mx-1 font-weight-bold"},[a("v-chip",{staticStyle:{border:"solid 1.5px",background:"transparent"}},[t._v(t._s(s+4))])],1),a("v-list-item-avatar",{staticClass:"mx-2"},[a("v-img",{attrs:{src:t.getImageSrc(e.user.profileImage)}})],1),a("v-list-item-content",[a("v-row",{staticClass:"py-0"},[a("v-col",{staticClass:"py-0",attrs:{cols:"6"}},[t._v(" "+t._s(e.user.displayName)+" ")]),a("v-col",{staticClass:"py-0 font-weight-bold"},[a("span",{attrs:{color:"primary lighten-2"}},[t._v(" "+t._s(e.count)+" ")])]),a("v-col",{staticClass:"py-0 green--text text-center ",attrs:{cols:"2"}},[t._v(" "+t._s(t.utility.money(e.amount))+" ")]),a("v-col",{staticClass:"py-0  d-flex  align-end flex-column",style:t.getColor(e.percentage)},[a("span",[t._v(" "+t._s(e.percentage?e.percentage.toFixed(2):0)+"% ")])])],1)],1)],1)],1)}))],2)],1):a("v-flex",{staticClass:"align-self-center text-center",staticStyle:{"max-width":"30%"}},[a("v-btn",{attrs:{"x-large":""},on:{click:t.start}},[t._v(" Click here to start ")])],1)],1),a("v-dialog",{attrs:{fullscreen:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.data?a("v-card",[a("v-progress-linear",{attrs:{value:100*t.data.loader/t.qeueu.dialog}}),a("v-card-title",[a("div",{staticClass:" text-center d-flex align-center"},[a("country-flag",{attrs:{country:t.data.item.customer.country,size:"big",rounded:""}}),t._v(" "+t._s(t._f("countryName")(t.data.item.customer.country))+" ")],1),a("v-spacer"),a("v-icon",[t._v("mdi-calendar-month")]),t._v(" "+t._s(t._f("date")(t.data.dateRange[0]))+" - "+t._s(t._f("date")(t.data.dateRange[1]))+" ")],1),a("v-card-text",[a("v-row",{staticStyle:{height:"100%"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"4",id:"user"}},[a("v-avatar",{staticClass:"mx-auto",attrs:{size:"54vh"}},[a("v-img",{attrs:{src:t.getImageSrc(t.data.user.profileImage)}})],1),a("h1",{staticClass:"mx-auto display-size"},[t._v(t._s(t.data.user.displayName)+" "+t._s(t.badge[t.data.user.position-1]))]),a("table",{staticClass:"mx-auto",staticStyle:{width:"80%"}},[a("tbody",[a("tr",[a("td",{staticClass:"font-weight-bold"},[t._v("Desk")]),a("td",[t._v(t._s(t.data.user.desk))])]),a("tr",[a("td",{staticClass:"font-weight-bold"},[t._v("Department")]),a("td",[t._v(t._s(t.data.user.department))])]),a("tr",[a("td",{staticClass:"font-weight-bold"},[t._v("Target")]),a("td",[t._v(t._s(t.utility.money(t.data.user.target))+" ")])]),a("tr",[a("td",{staticClass:"font-weight-bold"},[t._v("Total "),a("small",[t._v("(Deposits)")])]),a("td",[t._v(t._s(t.utility.money(t.data.user.total))+" "),a("small",[t._v("("+t._s(t.data.user.deposits)+")")])])]),a("tr",[a("td",{staticClass:"font-weight-bold"},[t._v("Achievement")]),a("td",[t._v(t._s(t.data.user.percentage?t.data.user.percentage.toFixed(2):0)+"%")])])])])],1),a("v-divider",{attrs:{vertical:""}}),a("v-col",{staticClass:"text-center d-flex flex-column",staticStyle:{flex:"0 0 66.5%"},attrs:{cols:"8"}},[a("div",{staticStyle:{width:"100%",flex:"0.2"}},[a("p",{staticClass:"deposit-title"},[t._v(" 🎉New Deposit🎉 ")])]),a("div",{staticStyle:{width:"100%",flex:"0.2"}},[a("p",{staticClass:"deposit-title font-weight-bold"},[t._v(" "+t._s(t.data.item.department.name)+" ")])]),a("div",{staticClass:" text-center deposit-title",staticStyle:{width:"100%",flex:"0.2"}},[a("v-icon",{staticStyle:{"font-size":"5vh"}},[t._v("mdi-calendar")]),t._v(" "+t._s(t._f("date")(t.data.item.created_on))+" ")],1),a("div",{staticStyle:{width:"100%",flex:"0.3"}},[a("p",{staticClass:"green--text font-weight-bold money-title"},[t._v(t._s(t.utility.money(t.data.item.amount)))])]),a("div",{staticStyle:{width:"100%",flex:"0.1"}},[a("table",{attrs:{width:"100%"}},[a("tr",[a("th",[t._v("Desk")]),a("th",[t._v("Desk Target")]),a("th",[t._v("Desk Total "),a("small",[t._v("(Deposits)")])]),a("th",[t._v("Desk Achievement")]),a("th",[t._v(t._s(t.data.user.displayName)+" from Desk ")])]),a("tr",[a("td",[t._v(" "+t._s(t.data.desk.name)+" ")]),a("td",[t._v(" "+t._s(t.utility.money(t.data.desk.target))+" ")]),a("td",[t._v(" "+t._s(t.utility.money(t.data.desk.total))+" "),a("small",[t._v("("+t._s(t.data.desk.deposits)+")")])]),a("td",[t._v(" "+t._s(t.data.desk.percentage?t.data.desk.percentage.toFixed(2):0)+"% ")]),a("td",[t._v(" "+t._s(t.data.desk.userPercentage?t.data.desk.userPercentage.toFixed(2):0)+"% ")])])])])])],1)],1)],1):t._e()],1)],1)},r=[],i=(a("99af"),a("4de4"),a("a15b"),a("d81d"),a("fb6a"),a("d3b7"),a("3ca3"),a("ddb0"),a("96cf"),a("1da1")),n=a("2e17"),l=a("b9b9"),o=a.n(l),c=new Audio("/Ding-ding-sound.mp3"),d={item0:{flex:"1 1 10%",maxHeight:"64px"},item1:{flex:"1 1 calc(30% - 64px)",height:"calc(30% - 64px)"},item2:{flex:"1 1 50%",height:"50%"}},u={name:"Screen",data:function(){return{data:null,qeueu:{started:!1,items:[],dialog:30},started:!1,utility:n["a"],style:d,timers:{interval:null,count:0,change:10},top_users:[[],[]],tab:0,dialog:!1,dates:n["a"].currentDateRange}},watch:{"qeueu.started":function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(console.log("Watch started!!!!!!!!!!",t),!t){a.next=8;break}s=regeneratorRuntime.mark((function t(){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.qeueu.items.shift(),a.loader=e.qeueu.dialog-1,e.data=a,e.dialog=!0,s=setInterval((function(){return e.data.loader--}),1e3),c.play(),t.next=8,new Promise((function(t){setTimeout((function(){e.dialog=!1,c.pause(),c.currentTime=0,clearInterval(s),setTimeout(t,1e3)}),1e3*e.qeueu.dialog)}));case 8:e.qeueu.items.length||(e.qeueu.started=!1);case 9:case"end":return t.stop()}}),t)}));case 3:if(!e.qeueu.items.length){a.next=7;break}return a.delegateYield(s(),"t0",5);case 5:a.next=3;break;case 7:case 8:case"end":return a.stop()}}),a)})))()},dates:function(t){console.log(t.length),t.length>1&&this.fetch()}},computed:{io:function(){return this.$store.state.api.io},show:function(){return this.time_to_change>0},place:function(){return[3,1,2]},badge:function(){return["🥉","👑","🥈"]},users:function(){return this.top_users[this.tab]},department:function(){var t=["Sales","Retention"];return t[this.tab]},topThree:function(){var t=this.users.filter((function(t,e){return t&&e<3})),e=new Array(3);return e[1]=t[0],e[0]=t[2],e[2]=t[1],e},hasTopThree:function(){return this.topThree.filter((function(t){return t})).length>0},restOfUser:function(){var t=this.users.slice(3);return t},formatedDate:function(){return this.dates.map((function(t){return o()(t,"dd/mm/yyyy")})).join(" - ")},time_to_change:function(){var t=100/this.timers.change,e=100/(this.timers.change-1)/t,a=100*e,s=this.timers.count*a/this.timers.change;return s}},methods:{start:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Started listening"),t.started=!0,t.io.on("notefy",t.notefy),e.next=5,t.fetch();case 5:t.timers.interval=setInterval((function(){t.timers.count++,t.timers.count%t.timers.change||(setTimeout((function(){t.tab=t.tab?0:1}),1e3),t.timers.count=0)}),1e3);case 6:case"end":return e.stop()}}),e)})))()},stop:function(){this.started=!1,console.log("stoped listening"),this.io.off("notefy",this.notefy)},notefy:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.fetch(t);case 2:e.qeueu.items.push(t),e.qeueu.started||(e.qeueu.started=!0);case 4:case"end":return a.stop()}}),a)})))()},getColor:function(t){var e=n["a"].findColorBetween({r:255,g:0,b:0},{r:0,g:200,b:0},t);return{color:"rgb(".concat(e.r,",").concat(e.g,",").concat(e.b,")")}},styleItem:function(t){return t},fetch:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.get({collection:"screen",query:{type:"ftd",created_on:t.dates.join("|")}});case 2:return a=e.sent,e.next=5,t.get({collection:"screen",query:{type:"rtn",created_on:t.dates.join("|")}});case 5:s=e.sent,t.top_users=[a.data,s.data],console.log(t.top_users);case 8:case"end":return e.stop()}}),e)})))()}},destroyed:function(){this.timers.interval&&clearInterval(this.timers.interval)}},v=u,m=(a("2a1d"),a("2877")),f=a("6544"),p=a.n(f),h=a("0798"),g=a("8212"),_=a("8336"),x=a("b0af"),y=a("99d9"),w=a("cc20"),C=a("62ad"),b=a("a523"),k=a("2e4b"),V=a("169a"),S=a("ce7e"),D=a("0e8f"),T=a("132d"),I=a("adda"),R=a("b675"),q=a("a722"),z=a("8860"),A=a("da13"),N=a("8270"),j=a("5d23"),O=a("34c3"),$=a("e449"),L=a("490a"),F=a("8e36"),P=a("0fd9"),U=a("8dd9"),Y=a("0789"),B=a("2fa4"),J=a("b73d"),E=Object(m["a"])(v,s,r,!1,null,"83651512",null);e["default"]=E.exports;p()(E,{VAlert:h["a"],VAvatar:g["a"],VBtn:_["a"],VCard:x["a"],VCardText:y["d"],VCardTitle:y["e"],VChip:w["a"],VCol:C["a"],VContainer:b["a"],VDatePicker:k["a"],VDialog:V["a"],VDivider:S["a"],VFlex:D["a"],VIcon:T["a"],VImg:I["a"],VInput:R["a"],VLayout:q["a"],VList:z["a"],VListItem:A["a"],VListItemAvatar:N["a"],VListItemContent:j["g"],VListItemIcon:O["a"],VMenu:$["a"],VProgressCircular:L["a"],VProgressLinear:F["a"],VRow:P["a"],VSheet:U["a"],VSlideXReverseTransition:Y["o"],VSlideYReverseTransition:Y["q"],VSlideYTransition:Y["r"],VSpacer:B["a"],VSwitch:J["a"]})}}]);
//# sourceMappingURL=chunk-584ef63f.deeff4ec.js.map