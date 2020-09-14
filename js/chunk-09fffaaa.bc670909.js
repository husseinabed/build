(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09fffaaa"],{"177a":function(e,a,n){"use strict";n.r(a);n("ac1f"),n("5319");a["default"]={title:"Roles",icon:"mdi-key",table:[{text:"Display Name",align:"start",sortable:!1,value:"name"},{text:"Role",value:"role"},{text:"Actions",value:"actions",width:"100"}],form:[{label:"General",fields:[{input:"text",name:"name",bind:{label:"Role Name",prependIcon:"mdi-label",required:!0,rules:[function(e){return!!e||"Display Name is required"}]},on:{input:function(e){var a=e.replace(/\s+/g,"_").toLowerCase();window.$form.data.role=a}}},{input:"text",name:"role",bind:{label:"Role Alias",disabled:!0,autocomplete:"username",prependIcon:"mdi-key",required:!0,rules:[function(e){return!!e||"Username is required"}]}},{input:"rights",name:"rights",default:[],bind:{label:"Permissions"}}]}]}},"445d":function(e,a,n){"use strict";a["a"]=[{name:"Afghanistan",code:"AF"},{name:"Åland Islands",code:"AX"},{name:"Albania",code:"AL"},{name:"Algeria",code:"DZ"},{name:"American Samoa",code:"AS"},{name:"AndorrA",code:"AD"},{name:"Angola",code:"AO"},{name:"Anguilla",code:"AI"},{name:"Antarctica",code:"AQ"},{name:"Antigua and Barbuda",code:"AG"},{name:"Argentina",code:"AR"},{name:"Armenia",code:"AM"},{name:"Aruba",code:"AW"},{name:"Australia",code:"AU"},{name:"Austria",code:"AT"},{name:"Azerbaijan",code:"AZ"},{name:"Bahamas",code:"BS"},{name:"Bahrain",code:"BH"},{name:"Bangladesh",code:"BD"},{name:"Barbados",code:"BB"},{name:"Belarus",code:"BY"},{name:"Belgium",code:"BE"},{name:"Belize",code:"BZ"},{name:"Benin",code:"BJ"},{name:"Bermuda",code:"BM"},{name:"Bhutan",code:"BT"},{name:"Bolivia",code:"BO"},{name:"Bosnia and Herzegovina",code:"BA"},{name:"Botswana",code:"BW"},{name:"Bouvet Island",code:"BV"},{name:"Brazil",code:"BR"},{name:"British Indian Ocean Territory",code:"IO"},{name:"Brunei Darussalam",code:"BN"},{name:"Bulgaria",code:"BG"},{name:"Burkina Faso",code:"BF"},{name:"Burundi",code:"BI"},{name:"Cambodia",code:"KH"},{name:"Cameroon",code:"CM"},{name:"Canada",code:"CA"},{name:"Cape Verde",code:"CV"},{name:"Cayman Islands",code:"KY"},{name:"Central African Republic",code:"CF"},{name:"Chad",code:"TD"},{name:"Chile",code:"CL"},{name:"China",code:"CN"},{name:"Christmas Island",code:"CX"},{name:"Cocos (Keeling) Islands",code:"CC"},{name:"Colombia",code:"CO"},{name:"Comoros",code:"KM"},{name:"Congo",code:"CG"},{name:"Congo, The Democratic Republic of the",code:"CD"},{name:"Cook Islands",code:"CK"},{name:"Costa Rica",code:"CR"},{name:"Cote D'Ivoire",code:"CI"},{name:"Croatia",code:"HR"},{name:"Cuba",code:"CU"},{name:"Cyprus",code:"CY"},{name:"Czech Republic",code:"CZ"},{name:"Denmark",code:"DK"},{name:"Djibouti",code:"DJ"},{name:"Dominica",code:"DM"},{name:"Dominican Republic",code:"DO"},{name:"Ecuador",code:"EC"},{name:"Egypt",code:"EG"},{name:"El Salvador",code:"SV"},{name:"Equatorial Guinea",code:"GQ"},{name:"Eritrea",code:"ER"},{name:"Estonia",code:"EE"},{name:"Ethiopia",code:"ET"},{name:"Falkland Islands (Malvinas)",code:"FK"},{name:"Faroe Islands",code:"FO"},{name:"Fiji",code:"FJ"},{name:"Finland",code:"FI"},{name:"France",code:"FR"},{name:"French Guiana",code:"GF"},{name:"French Polynesia",code:"PF"},{name:"French Southern Territories",code:"TF"},{name:"Gabon",code:"GA"},{name:"Gambia",code:"GM"},{name:"Georgia",code:"GE"},{name:"Germany",code:"DE"},{name:"Ghana",code:"GH"},{name:"Gibraltar",code:"GI"},{name:"Greece",code:"GR"},{name:"Greenland",code:"GL"},{name:"Grenada",code:"GD"},{name:"Guadeloupe",code:"GP"},{name:"Guam",code:"GU"},{name:"Guatemala",code:"GT"},{name:"Guernsey",code:"GG"},{name:"Guinea",code:"GN"},{name:"Guinea-Bissau",code:"GW"},{name:"Guyana",code:"GY"},{name:"Haiti",code:"HT"},{name:"Heard Island and Mcdonald Islands",code:"HM"},{name:"Holy See (Vatican City State)",code:"VA"},{name:"Honduras",code:"HN"},{name:"Hong Kong",code:"HK"},{name:"Hungary",code:"HU"},{name:"Iceland",code:"IS"},{name:"India",code:"IN"},{name:"Indonesia",code:"ID"},{name:"Iran, Islamic Republic Of",code:"IR"},{name:"Iraq",code:"IQ"},{name:"Ireland",code:"IE"},{name:"Isle of Man",code:"IM"},{name:"Israel",code:"IL"},{name:"Italy",code:"IT"},{name:"Jamaica",code:"JM"},{name:"Japan",code:"JP"},{name:"Jersey",code:"JE"},{name:"Jordan",code:"JO"},{name:"Kazakhstan",code:"KZ"},{name:"Kenya",code:"KE"},{name:"Kiribati",code:"KI"},{name:"Korea, Democratic People'S Republic of",code:"KP"},{name:"Korea, Republic of",code:"KR"},{name:"Kuwait",code:"KW"},{name:"Kyrgyzstan",code:"KG"},{name:"Lao People'S Democratic Republic",code:"LA"},{name:"Latvia",code:"LV"},{name:"Lebanon",code:"LB"},{name:"Lesotho",code:"LS"},{name:"Liberia",code:"LR"},{name:"Libyan Arab Jamahiriya",code:"LY"},{name:"Liechtenstein",code:"LI"},{name:"Lithuania",code:"LT"},{name:"Luxembourg",code:"LU"},{name:"Macao",code:"MO"},{name:"Macedonia, The Former Yugoslav Republic of",code:"MK"},{name:"Madagascar",code:"MG"},{name:"Malawi",code:"MW"},{name:"Malaysia",code:"MY"},{name:"Maldives",code:"MV"},{name:"Mali",code:"ML"},{name:"Malta",code:"MT"},{name:"Marshall Islands",code:"MH"},{name:"Martinique",code:"MQ"},{name:"Mauritania",code:"MR"},{name:"Mauritius",code:"MU"},{name:"Mayotte",code:"YT"},{name:"Mexico",code:"MX"},{name:"Micronesia, Federated States of",code:"FM"},{name:"Moldova, Republic of",code:"MD"},{name:"Monaco",code:"MC"},{name:"Mongolia",code:"MN"},{name:"Montserrat",code:"MS"},{name:"Morocco",code:"MA"},{name:"Mozambique",code:"MZ"},{name:"Myanmar",code:"MM"},{name:"Namibia",code:"NA"},{name:"Nauru",code:"NR"},{name:"Nepal",code:"NP"},{name:"Netherlands",code:"NL"},{name:"Netherlands Antilles",code:"AN"},{name:"New Caledonia",code:"NC"},{name:"New Zealand",code:"NZ"},{name:"Nicaragua",code:"NI"},{name:"Niger",code:"NE"},{name:"Nigeria",code:"NG"},{name:"Niue",code:"NU"},{name:"Norfolk Island",code:"NF"},{name:"Northern Mariana Islands",code:"MP"},{name:"Norway",code:"NO"},{name:"Oman",code:"OM"},{name:"Pakistan",code:"PK"},{name:"Palau",code:"PW"},{name:"Palestinian Territory, Occupied",code:"PS"},{name:"Panama",code:"PA"},{name:"Papua New Guinea",code:"PG"},{name:"Paraguay",code:"PY"},{name:"Peru",code:"PE"},{name:"Philippines",code:"PH"},{name:"Pitcairn",code:"PN"},{name:"Poland",code:"PL"},{name:"Portugal",code:"PT"},{name:"Puerto Rico",code:"PR"},{name:"Qatar",code:"QA"},{name:"Reunion",code:"RE"},{name:"Romania",code:"RO"},{name:"Russian Federation",code:"RU"},{name:"RWANDA",code:"RW"},{name:"Saint Helena",code:"SH"},{name:"Saint Kitts and Nevis",code:"KN"},{name:"Saint Lucia",code:"LC"},{name:"Saint Pierre and Miquelon",code:"PM"},{name:"Saint Vincent and the Grenadines",code:"VC"},{name:"Samoa",code:"WS"},{name:"San Marino",code:"SM"},{name:"Sao Tome and Principe",code:"ST"},{name:"Saudi Arabia",code:"SA"},{name:"Senegal",code:"SN"},{name:"Serbia and Montenegro",code:"CS"},{name:"Seychelles",code:"SC"},{name:"Sierra Leone",code:"SL"},{name:"Singapore",code:"SG"},{name:"Slovakia",code:"SK"},{name:"Slovenia",code:"SI"},{name:"Solomon Islands",code:"SB"},{name:"Somalia",code:"SO"},{name:"South Africa",code:"ZA"},{name:"South Georgia and the South Sandwich Islands",code:"GS"},{name:"Spain",code:"ES"},{name:"Sri Lanka",code:"LK"},{name:"Sudan",code:"SD"},{name:"Suriname",code:"SR"},{name:"Svalbard and Jan Mayen",code:"SJ"},{name:"Swaziland",code:"SZ"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Syrian Arab Republic",code:"SY"},{name:"Taiwan, Province of China",code:"TW"},{name:"Tajikistan",code:"TJ"},{name:"Tanzania, United Republic of",code:"TZ"},{name:"Thailand",code:"TH"},{name:"Timor-Leste",code:"TL"},{name:"Togo",code:"TG"},{name:"Tokelau",code:"TK"},{name:"Tonga",code:"TO"},{name:"Trinidad and Tobago",code:"TT"},{name:"Tunisia",code:"TN"},{name:"Turkey",code:"TR"},{name:"Turkmenistan",code:"TM"},{name:"Turks and Caicos Islands",code:"TC"},{name:"Tuvalu",code:"TV"},{name:"Uganda",code:"UG"},{name:"Ukraine",code:"UA"},{name:"United Arab Emirates",code:"AE"},{name:"United Kingdom",code:"GB"},{name:"United States",code:"US"},{name:"United States Minor Outlying Islands",code:"UM"},{name:"Uruguay",code:"UY"},{name:"Uzbekistan",code:"UZ"},{name:"Vanuatu",code:"VU"},{name:"Venezuela",code:"VE"},{name:"Viet Nam",code:"VN"},{name:"Virgin Islands, British",code:"VG"},{name:"Virgin Islands, U.S.",code:"VI"},{name:"Wallis and Futuna",code:"WF"},{name:"Western Sahara",code:"EH"},{name:"Yemen",code:"YE"},{name:"Zambia",code:"ZM"},{name:"Zimbabwe",code:"ZW"}]},"789d":function(e,a,n){"use strict";n.r(a),a["default"]={title:"Notefication",icon:"mdi-message-alert",table:[{text:"Type",align:"start",sortable:!1,value:"type"},{text:"Message",value:"message"},{text:"To",value:"target.displayName"},{text:"From",value:"by.displayName"},{text:"Read",value:"read"},{text:"Actions",value:"actions",width:"100"}],form:[{label:"General",fields:[{input:"select",name:"type",bind:{label:"Type",prependIcon:"mdi-label",required:!0,rules:[function(e){return!!e||"Type Name is required"}],items:["sale_assign"]}},{input:"text",name:"message",bind:{label:"Message",prependIcon:"mdi-message-text",required:!0,rules:[function(e){return!!e||"Message is required"}]}},{input:"autocomplete",name:"target",bind:{label:"To",prependIcon:"mdi-account",collection:"user",itemText:"displayName",itemValue:"_id",required:!0,rules:[function(e){return!!e||"Payment Method is required"}]}},{input:"hidden",name:"by",default:JSON.parse(localStorage.getItem("user"))._id}]}]}},"8d32":function(e,a,n){"use strict";n.r(a),a["default"]={title:"Users",icon:"mdi-account-multiple",table:[{text:"Display Name",align:"start",sortable:!1,value:"displayName"},{text:"Username",value:"username"},{text:"Business Unit",value:"business_unit"},{text:"Role",value:"role"},{text:"Active",value:"active"},{text:"Actions",value:"actions",width:"100"}],form:[{label:"General",fields:[{input:"text",name:"displayName",bind:{label:"Display Name",prependIcon:"mdi-account",required:!0,rules:[function(e){return!!e||"Display Name is required"}]}},{input:"text",name:"username",bind:{label:"Username",autocomplete:"username",prependIcon:"mdi-account-box",required:!0,rules:[function(e){return!!e||"Username is required"}]}},{input:"password",name:"password",bind:{label:"Password",prependIcon:"mdi-lock"}},{input:"autocomplete",name:"role",bind:{label:"Role",collection:"role",itemText:"name",itemValue:"role",prependIcon:"mdi-key",required:!0,rules:[function(e){return!!e||"Role is required"}]}},{input:"select",name:"business_unit",bind:{label:"Business Unit",prependIcon:"mdi-domain",required:!0,dense:!0,rules:[function(e){return!!e||"Business Unit is required"}],items:[{label:"English",value:"en"},{label:"Arabic",value:"ar"},{label:"Label 1",value:"label1"}],itemText:"label",itemValue:"value"}},{input:"switch",name:"active",default:!0,bind:{label:"Active"}}]}]}},"9fab":function(e,a,n){var t={"./":"fb57","./affiliate":"e5f9","./affiliate.js":"e5f9","./index":"fb57","./index.js":"fb57","./notefication":"789d","./notefication.js":"789d","./payment_method":"f3ec","./payment_method.js":"f3ec","./retention":"f414","./retention.js":"f414","./role":"177a","./role.js":"177a","./sale":"e548","./sale.js":"e548","./user":"8d32","./user.js":"8d32"};function o(e){var a=i(e);return n(a)}function i(e){if(!n.o(t,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t[e]}o.keys=function(){return Object.keys(t)},o.resolve=i,e.exports=o,o.id="9fab"},a66e:function(e,a,n){"use strict";n.r(a);var t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("v-content",{staticClass:"ma-0 pa-0"},[n("v-sheet",{attrs:{color:"blue lighten-5 px-4 py-9"}},[n("h2",[e._v(' Welcome back "'+e._s(e.$store.state.auth.user.displayName)+'"')])]),n("v-row",[n("v-col",[n("app-panel",{attrs:{title:"Today",count:e.total.daily.count,amount:e.total.daily.amount}})],1),n("v-col",[n("app-panel",{attrs:{title:"This month",count:e.total.monthly.count,amount:e.total.monthly.amount}})],1)],1),n("v-row",[n("v-col",[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",[e._v(" Today users ")]),n("v-spacer"),n("v-btn",{attrs:{color:"green white--text"},on:{click:function(a){e.$router.push("/"+("agent_retention"==e.$store.state.auth.user.role?"retention":"sale")+"/new")}}},[n("v-icon",[e._v("mdi-plus")]),e._v(" Add new")],1)],1),n("v-data-table",{attrs:{headers:e.headers,items:e.items},on:{"click:row":function(a){return e.goTo("today",a)}},scopedSlots:e._u([{key:"item.created_on",fn:function(a){var n=a.item;return[e._v(" "+e._s(n.created_on.split("T")[0])+" ")]}},{key:"item.amount",fn:function(a){var n=a.item;return[e._v(" "+e._s(new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(n.amount))+" ")]}}])})],1)],1),n("v-row",[n("v-col",[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",[e._v(" This month users ")])],1),n("v-data-table",{attrs:{headers:e.mheaders,items:e.mitems},on:{"click:row":function(a){return e.goTo("month",a)}},scopedSlots:e._u([{key:"item._id",fn:function(a){var n=a.item;return[e._v(" "+e._s(n._id.split("T")[0])+" ")]}},{key:"item.amount",fn:function(a){var n=a.item;return[e._v(" "+e._s(new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(n.amount))+" ")]}}])})],1)],1)],1)},o=[],i=(n("4de4"),n("c975"),n("96cf"),n("1da1")),d=n("5530"),r=n("2f62"),c=n("1dde3"),u=n("fb57"),l=n("1157"),m=n.n(l),s={name:"UserDashboard",components:{AppPanel:c["a"]},data:function(){return{headers:[],items:[],mheaders:[{text:"Date",align:"start",value:"_id",width:"30%"},{text:"Users",value:"count",width:"30%"},{text:"Total",value:"amount"}],mitems:[],total:{daily:{amount:0,count:0},monthly:{amount:0,count:0}},dialog:{value:!1,title:"",collection:"sale"}}},computed:{},methods:Object(d["a"])(Object(d["a"])({},Object(r["b"])({get:"api/get"})),{},{goTo:function(e,a){if("today"==e&&this.$router.push("/"+("agent_retention"==this.$store.state.auth.user.role?"retention":"sale")+"/"+a._id),"month"==e){console.log(a);var n={filterBy:["user","created_on"],filterValue:[this.$store.state.auth.user._id,a._id],sortBy:["created_on"],sortDesc:[!1]};this.$router.push("/"+("agent_retention"==this.$store.state.auth.user.role?"retention":"sale")+"?"+m.a.param(n))}},writeAccess:function(e){var a=this.access(e);return a.length>0&&a[0].write},access:function(e){return this.$store.state.auth.user.rights?this.$store.state.auth.user.rights.filter((function(a){return a.value==e})):[]},openDialog:function(e){this.dialog.title=e,this.dialog.collection=e,this.dialog.value=!0},newSave:function(){this.dialog.value=!1}}),created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n,t,o,i,d,r,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.get({collection:"dashboard/user_daily"});case 2:return n=a.sent,a.next=5,e.get({collection:"dashboard/user_monthly"});case 5:return t=a.sent,n&&n.data&&(e.total.daily.amount=n.data.length?n.data[0].amount:0,e.total.daily.count=n.data.length?n.data[0].count:0),t&&t.data&&(e.total.monthly.amount=t.data.length?t.data[0].amount:0,e.total.monthly.count=t.data.length?t.data[0].count:0),o=e.$store.state.auth.user.role,i=u["default"].get("agent_retention"==o?"retention":"sale"),e.headers=Object.assign([],i.table),e.headers=e.headers.filter((function(e){return-1===["actions","business_unit","user.username"].indexOf(e.value)})),console.log(e.headers,i.table),d=new Date,d.setHours(0,0,0,0),a.next=17,e.get({collection:"agent_retention"==o?"retention":"sale",query:{query:{user:{type:"normal",value:e.$store.state.auth.user._id},created_on:{type:"gte",value:d}},limit:10}});case 17:return r=a.sent,r&&r.data&&(e.items=r.data.docs),a.next=21,e.get({collection:"dashboard/user_monthly_deals"});case 21:c=a.sent,c&&c.data&&(e.mitems=c.data);case 23:case"end":return a.stop()}}),a)})))()}},p=s,b=n("2877"),f=n("6544"),h=n.n(f),v=n("8336"),y=n("62ad"),g=n("a75b"),A=n("8fea"),I=n("132d"),S=n("0fd9"),x=n("8dd9"),T=n("2fa4"),M=n("71d9"),C=n("2a7f"),N=Object(b["a"])(p,t,o,!1,null,null,null);a["default"]=N.exports;h()(N,{VBtn:v["a"],VCol:y["a"],VContent:g["a"],VDataTable:A["a"],VIcon:I["a"],VRow:S["a"],VSheet:x["a"],VSpacer:T["a"],VToolbar:M["a"],VToolbarTitle:C["c"]})},e548:function(e,a,n){"use strict";n.r(a);n("ac1f"),n("1276");var t=n("445d");a["default"]={title:"Sales",icon:"mdi-printer-pos",filters:[{input:"text",name:"tpc",bind:{label:"TP Account",prependIcon:"mdi-account-box"}}],table:[{text:"TP Account",align:"start",sortable:!1,value:"tpc"},{text:"Account name",value:"name"},{text:"Amount",value:"amount"},{text:"Affiliate",value:"affiliate.name"},{text:"Payment Method",value:"payment_method.name"},{text:"Created date",value:"created_on"},{text:"Created By",value:"user.username"},{text:"Business Unit",value:"business_unit"},{text:"Actions",value:"actions",width:"100"}],form:[{label:"General",fields:[{input:"text",name:"name",bind:{label:"Account Name",prependIcon:"mdi-account-box",required:!0,rules:[function(e){return!!e||"ID is required"}]}},{input:"text",name:"tpc",bind:{label:"ID",prependIcon:"mdi-card-account-details",required:!0,rules:[function(e){return!!e||"ID is required"}]}},{input:"text",name:"amount",bind:{label:"Amount",prependIcon:"mdi-cash",required:!0,rules:[function(e){return!!e||"Amount is required"}]}},{input:"autocomplete",name:"payment_method",bind:{label:"Payment Method",prependIcon:"mdi-credit-card-settings-outline",collection:"payment_method",itemText:"name",itemValue:"_id",required:!0,rules:[function(e){return!!e||"Payment Method is required"}]}},{input:"date",name:"created_on",default:(new Date).toISOString().split("T")[0],bind:{label:"Created Date",prependIcon:"mdi-calendar",required:!0,rules:[function(e){return!!e||"Created On is required"}]}},{input:"hidden",name:"business_unit",default:function(e){return e.auth.user.business_unit}},{input:"autocomplete",name:"country",bind:{label:"Country",prependIcon:"mdi-flag",items:t["a"],itemText:"name",itemValue:"code",required:!0,hideAddNew:!0,rules:[function(e){return!!e||"Country is required"}]}},{input:"autocomplete",name:"affiliate",bind:{label:"Affiliate",collection:"affiliate",itemText:"name",itemValue:"_id",prependIcon:"mdi-account-network-outline"}}]}]}},e5f9:function(e,a,n){"use strict";n.r(a),a["default"]={title:"Affiliate",icon:"mdi-account-network-outline",table:[{text:"Name",align:"start",sortable:!1,value:"name"},{text:"Active",value:"active",width:"10%"},{text:"Actions",value:"actions",width:"100"}],form:[{label:"General",fields:[{input:"text",name:"name",bind:{label:"Name",rules:[function(e){return!!e||"Name is required"}],required:!0}},{input:"switch",name:"active",default:!0,bind:{label:"Active"}}]}]}},f3ec:function(e,a,n){"use strict";n.r(a),a["default"]={title:"Payment Method",icon:"mdi-credit-card-settings-outline",table:[{text:"Name",align:"start",sortable:!1,value:"name"},{text:"Type",value:"type",width:"20%"},{text:"Active",value:"active",width:"10%"},{text:"Actions",value:"actions",width:"100"}],form:[{label:"General",fields:[{input:"text",name:"name",bind:{label:"Name",rules:[function(e){return!!e||"Name is required"}],required:!0}},{input:"select",name:"type",bind:{label:"Type",rules:[function(e){return!!e||"Type is required"}],items:[{label:"Credit Card",value:"cc"},{label:"Wire",value:"wire"}],itemText:"label",itemValue:"value",required:!0}},{input:"switch",name:"active",default:!0,bind:{label:"Active"}}]}]}},f414:function(e,a,n){"use strict";n.r(a);n("ac1f"),n("1276");var t=n("445d");a["default"]={title:"Retention",icon:"mdi-printer-pos",filters:[{input:"text",name:"tpc",bind:{dense:!0,label:"TP Account",prependIcon:"mdi-account-box"}}],table:[{text:"TP Account",align:"start",sortable:!1,value:"tpc"},{text:"Account name",value:"name"},{text:"Amount",value:"amount"},{text:"Affiliate",value:"affiliate.name"},{text:"Payment Method",value:"payment_method.name"},{text:"Created on",value:"created_on"},{text:"Created By",value:"user.username"},{text:"Business Unit",value:"business_unit"},{text:"Actions",value:"actions",width:"100"}],form:[{label:"General",fields:[{input:"text",name:"name",bind:{label:"Account Name",prependIcon:"mdi-account-box",required:!0,rules:[function(e){return!!e||"ID is required"}]}},{input:"text",name:"tpc",bind:{label:"ID",prependIcon:"mdi-card-account-details",required:!0,rules:[function(e){return!!e||"ID is required"}]}},{input:"text",name:"amount",bind:{label:"Amount",prependIcon:"mdi-cash",required:!0,rules:[function(e){return!!e||"Amount is required"}]}},{input:"autocomplete",name:"payment_method",bind:{label:"Payment Method",prependIcon:"mdi-credit-card-settings-outline",collection:"payment_method",itemText:"name",itemValue:"_id",required:!0,rules:[function(e){return!!e||"Payment Method is required"}]}},{input:"hidden",name:"user",default:function(e){return e.auth.user._id}},{input:"date",name:"created_on",default:(new Date).toISOString().split("T")[0],bind:{label:"Created Date",prependIcon:"mdi-calendar",required:!0,rules:[function(e){return!!e||"Created On is required"}]}},{input:"hidden",name:"business_unit",default:function(e){return e.auth.user.business_unit}},{input:"autocomplete",name:"country",bind:{label:"Country",prependIcon:"mdi-flag",items:t["a"],itemText:"name",itemValue:"code",hideAddNew:!0,required:!0,rules:[function(e){return!!e||"Country is required"}]}},{input:"autocomplete",name:"affiliate",bind:{dense:!0,label:"Affiliate",collection:"affiliate",itemText:"name",itemValue:"_id",prependIcon:"mdi-account-network-outline"}}]}]}},fb57:function(e,a,n){"use strict";n.r(a),a["default"]={get:function(e){return n("9fab")("./"+e).default}}}}]);
//# sourceMappingURL=chunk-09fffaaa.bc670909.js.map