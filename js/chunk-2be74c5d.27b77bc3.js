(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2be74c5d"],{"177a":function(e,a,t){"use strict";t.r(a);t("ac1f"),t("5319");a["default"]={title:"Roles",icon:"mdi-key",table:[{text:"Display Name",align:"start",sortable:!1,value:"name"},{text:"Role",value:"role"},{text:"Actions",value:"actions",width:"100"}],form:[{label:"General",fields:[{input:"text",name:"name",bind:{label:"Role Name",prependIcon:"mdi-label",required:!0,rules:[function(e){return!!e||"Display Name is required"}]},on:{input:function(e){var a=e.replace(/\s+/g,"_").toLowerCase();window.$form.data.role=a}}},{input:"text",name:"role",bind:{label:"Role Alias",disabled:!0,autocomplete:"username",prependIcon:"mdi-key",required:!0,rules:[function(e){return!!e||"Username is required"}]}},{input:"rights",name:"rights",default:[],bind:{label:"Permissions"}}]}]}},"1b5f":function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-text-field",e._b({attrs:{value:e.value,autocomplete:"current-password","append-icon":e.show?"mdi-eye":"mdi-eye-off",type:e.show?"text":"password",counter:""},on:{input:function(a){return e.$emit("input",a)},"click:append":function(a){e.show=!e.show}}},"v-text-field",e.$attrs,!1))},i=[],o={name:"password",props:{value:String},data:function(){return{show:!1}}},r=o,c=t("2877"),d=t("6544"),u=t.n(d),l=t("8654"),s=Object(c["a"])(r,n,i,!1,null,null,null);a["a"]=s.exports;u()(s,{VTextField:l["a"]})},"445d":function(e,a,t){"use strict";a["a"]=[{name:"Afghanistan",code:"AF"},{name:"Åland Islands",code:"AX"},{name:"Albania",code:"AL"},{name:"Algeria",code:"DZ"},{name:"American Samoa",code:"AS"},{name:"AndorrA",code:"AD"},{name:"Angola",code:"AO"},{name:"Anguilla",code:"AI"},{name:"Antarctica",code:"AQ"},{name:"Antigua and Barbuda",code:"AG"},{name:"Argentina",code:"AR"},{name:"Armenia",code:"AM"},{name:"Aruba",code:"AW"},{name:"Australia",code:"AU"},{name:"Austria",code:"AT"},{name:"Azerbaijan",code:"AZ"},{name:"Bahamas",code:"BS"},{name:"Bahrain",code:"BH"},{name:"Bangladesh",code:"BD"},{name:"Barbados",code:"BB"},{name:"Belarus",code:"BY"},{name:"Belgium",code:"BE"},{name:"Belize",code:"BZ"},{name:"Benin",code:"BJ"},{name:"Bermuda",code:"BM"},{name:"Bhutan",code:"BT"},{name:"Bolivia",code:"BO"},{name:"Bosnia and Herzegovina",code:"BA"},{name:"Botswana",code:"BW"},{name:"Bouvet Island",code:"BV"},{name:"Brazil",code:"BR"},{name:"British Indian Ocean Territory",code:"IO"},{name:"Brunei Darussalam",code:"BN"},{name:"Bulgaria",code:"BG"},{name:"Burkina Faso",code:"BF"},{name:"Burundi",code:"BI"},{name:"Cambodia",code:"KH"},{name:"Cameroon",code:"CM"},{name:"Canada",code:"CA"},{name:"Cape Verde",code:"CV"},{name:"Cayman Islands",code:"KY"},{name:"Central African Republic",code:"CF"},{name:"Chad",code:"TD"},{name:"Chile",code:"CL"},{name:"China",code:"CN"},{name:"Christmas Island",code:"CX"},{name:"Cocos (Keeling) Islands",code:"CC"},{name:"Colombia",code:"CO"},{name:"Comoros",code:"KM"},{name:"Congo",code:"CG"},{name:"Congo, The Democratic Republic of the",code:"CD"},{name:"Cook Islands",code:"CK"},{name:"Costa Rica",code:"CR"},{name:"Cote D'Ivoire",code:"CI"},{name:"Croatia",code:"HR"},{name:"Cuba",code:"CU"},{name:"Cyprus",code:"CY"},{name:"Czech Republic",code:"CZ"},{name:"Denmark",code:"DK"},{name:"Djibouti",code:"DJ"},{name:"Dominica",code:"DM"},{name:"Dominican Republic",code:"DO"},{name:"Ecuador",code:"EC"},{name:"Egypt",code:"EG"},{name:"El Salvador",code:"SV"},{name:"Equatorial Guinea",code:"GQ"},{name:"Eritrea",code:"ER"},{name:"Estonia",code:"EE"},{name:"Ethiopia",code:"ET"},{name:"Falkland Islands (Malvinas)",code:"FK"},{name:"Faroe Islands",code:"FO"},{name:"Fiji",code:"FJ"},{name:"Finland",code:"FI"},{name:"France",code:"FR"},{name:"French Guiana",code:"GF"},{name:"French Polynesia",code:"PF"},{name:"French Southern Territories",code:"TF"},{name:"Gabon",code:"GA"},{name:"Gambia",code:"GM"},{name:"Georgia",code:"GE"},{name:"Germany",code:"DE"},{name:"Ghana",code:"GH"},{name:"Gibraltar",code:"GI"},{name:"Greece",code:"GR"},{name:"Greenland",code:"GL"},{name:"Grenada",code:"GD"},{name:"Guadeloupe",code:"GP"},{name:"Guam",code:"GU"},{name:"Guatemala",code:"GT"},{name:"Guernsey",code:"GG"},{name:"Guinea",code:"GN"},{name:"Guinea-Bissau",code:"GW"},{name:"Guyana",code:"GY"},{name:"Haiti",code:"HT"},{name:"Heard Island and Mcdonald Islands",code:"HM"},{name:"Holy See (Vatican City State)",code:"VA"},{name:"Honduras",code:"HN"},{name:"Hong Kong",code:"HK"},{name:"Hungary",code:"HU"},{name:"Iceland",code:"IS"},{name:"India",code:"IN"},{name:"Indonesia",code:"ID"},{name:"Iran, Islamic Republic Of",code:"IR"},{name:"Iraq",code:"IQ"},{name:"Ireland",code:"IE"},{name:"Isle of Man",code:"IM"},{name:"Israel",code:"IL"},{name:"Italy",code:"IT"},{name:"Jamaica",code:"JM"},{name:"Japan",code:"JP"},{name:"Jersey",code:"JE"},{name:"Jordan",code:"JO"},{name:"Kazakhstan",code:"KZ"},{name:"Kenya",code:"KE"},{name:"Kiribati",code:"KI"},{name:"Korea, Democratic People'S Republic of",code:"KP"},{name:"Korea, Republic of",code:"KR"},{name:"Kuwait",code:"KW"},{name:"Kyrgyzstan",code:"KG"},{name:"Lao People'S Democratic Republic",code:"LA"},{name:"Latvia",code:"LV"},{name:"Lebanon",code:"LB"},{name:"Lesotho",code:"LS"},{name:"Liberia",code:"LR"},{name:"Libyan Arab Jamahiriya",code:"LY"},{name:"Liechtenstein",code:"LI"},{name:"Lithuania",code:"LT"},{name:"Luxembourg",code:"LU"},{name:"Macao",code:"MO"},{name:"Macedonia, The Former Yugoslav Republic of",code:"MK"},{name:"Madagascar",code:"MG"},{name:"Malawi",code:"MW"},{name:"Malaysia",code:"MY"},{name:"Maldives",code:"MV"},{name:"Mali",code:"ML"},{name:"Malta",code:"MT"},{name:"Marshall Islands",code:"MH"},{name:"Martinique",code:"MQ"},{name:"Mauritania",code:"MR"},{name:"Mauritius",code:"MU"},{name:"Mayotte",code:"YT"},{name:"Mexico",code:"MX"},{name:"Micronesia, Federated States of",code:"FM"},{name:"Moldova, Republic of",code:"MD"},{name:"Monaco",code:"MC"},{name:"Mongolia",code:"MN"},{name:"Montserrat",code:"MS"},{name:"Morocco",code:"MA"},{name:"Mozambique",code:"MZ"},{name:"Myanmar",code:"MM"},{name:"Namibia",code:"NA"},{name:"Nauru",code:"NR"},{name:"Nepal",code:"NP"},{name:"Netherlands",code:"NL"},{name:"Netherlands Antilles",code:"AN"},{name:"New Caledonia",code:"NC"},{name:"New Zealand",code:"NZ"},{name:"Nicaragua",code:"NI"},{name:"Niger",code:"NE"},{name:"Nigeria",code:"NG"},{name:"Niue",code:"NU"},{name:"Norfolk Island",code:"NF"},{name:"Northern Mariana Islands",code:"MP"},{name:"Norway",code:"NO"},{name:"Oman",code:"OM"},{name:"Pakistan",code:"PK"},{name:"Palau",code:"PW"},{name:"Palestinian Territory, Occupied",code:"PS"},{name:"Panama",code:"PA"},{name:"Papua New Guinea",code:"PG"},{name:"Paraguay",code:"PY"},{name:"Peru",code:"PE"},{name:"Philippines",code:"PH"},{name:"Pitcairn",code:"PN"},{name:"Poland",code:"PL"},{name:"Portugal",code:"PT"},{name:"Puerto Rico",code:"PR"},{name:"Qatar",code:"QA"},{name:"Reunion",code:"RE"},{name:"Romania",code:"RO"},{name:"Russian Federation",code:"RU"},{name:"RWANDA",code:"RW"},{name:"Saint Helena",code:"SH"},{name:"Saint Kitts and Nevis",code:"KN"},{name:"Saint Lucia",code:"LC"},{name:"Saint Pierre and Miquelon",code:"PM"},{name:"Saint Vincent and the Grenadines",code:"VC"},{name:"Samoa",code:"WS"},{name:"San Marino",code:"SM"},{name:"Sao Tome and Principe",code:"ST"},{name:"Saudi Arabia",code:"SA"},{name:"Senegal",code:"SN"},{name:"Serbia and Montenegro",code:"CS"},{name:"Seychelles",code:"SC"},{name:"Sierra Leone",code:"SL"},{name:"Singapore",code:"SG"},{name:"Slovakia",code:"SK"},{name:"Slovenia",code:"SI"},{name:"Solomon Islands",code:"SB"},{name:"Somalia",code:"SO"},{name:"South Africa",code:"ZA"},{name:"South Georgia and the South Sandwich Islands",code:"GS"},{name:"Spain",code:"ES"},{name:"Sri Lanka",code:"LK"},{name:"Sudan",code:"SD"},{name:"Suriname",code:"SR"},{name:"Svalbard and Jan Mayen",code:"SJ"},{name:"Swaziland",code:"SZ"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Syrian Arab Republic",code:"SY"},{name:"Taiwan, Province of China",code:"TW"},{name:"Tajikistan",code:"TJ"},{name:"Tanzania, United Republic of",code:"TZ"},{name:"Thailand",code:"TH"},{name:"Timor-Leste",code:"TL"},{name:"Togo",code:"TG"},{name:"Tokelau",code:"TK"},{name:"Tonga",code:"TO"},{name:"Trinidad and Tobago",code:"TT"},{name:"Tunisia",code:"TN"},{name:"Turkey",code:"TR"},{name:"Turkmenistan",code:"TM"},{name:"Turks and Caicos Islands",code:"TC"},{name:"Tuvalu",code:"TV"},{name:"Uganda",code:"UG"},{name:"Ukraine",code:"UA"},{name:"United Arab Emirates",code:"AE"},{name:"United Kingdom",code:"GB"},{name:"United States",code:"US"},{name:"United States Minor Outlying Islands",code:"UM"},{name:"Uruguay",code:"UY"},{name:"Uzbekistan",code:"UZ"},{name:"Vanuatu",code:"VU"},{name:"Venezuela",code:"VE"},{name:"Viet Nam",code:"VN"},{name:"Virgin Islands, British",code:"VG"},{name:"Virgin Islands, U.S.",code:"VI"},{name:"Wallis and Futuna",code:"WF"},{name:"Western Sahara",code:"EH"},{name:"Yemen",code:"YE"},{name:"Zambia",code:"ZM"},{name:"Zimbabwe",code:"ZW"}]},"789d":function(e,a,t){"use strict";t.r(a),a["default"]={title:"Notefication",icon:"mdi-message-alert",table:[{text:"Type",align:"start",sortable:!1,value:"type"},{text:"Message",value:"message"},{text:"To",value:"target.displayName"},{text:"From",value:"by.displayName"},{text:"Read",value:"read"},{text:"Actions",value:"actions",width:"100"}],form:[{label:"General",fields:[{input:"select",name:"type",bind:{label:"Type",prependIcon:"mdi-label",required:!0,rules:[function(e){return!!e||"Type Name is required"}],items:["sale_assign"]}},{input:"text",name:"message",bind:{label:"Message",prependIcon:"mdi-message-text",required:!0,rules:[function(e){return!!e||"Message is required"}]}},{input:"autocomplete",name:"target",bind:{label:"To",prependIcon:"mdi-account",collection:"user",itemText:"displayName",itemValue:"_id",required:!0,rules:[function(e){return!!e||"Payment Method is required"}]}},{input:"hidden",name:"by",default:JSON.parse(localStorage.getItem("user"))._id}]}]}},"8d32":function(e,a,t){"use strict";t.r(a),a["default"]={title:"Users",icon:"mdi-account-multiple",table:[{text:"Display Name",align:"start",sortable:!1,value:"displayName"},{text:"Username",value:"username"},{text:"Business Unit",value:"business_unit"},{text:"Role",value:"role"},{text:"Active",value:"active"},{text:"Actions",value:"actions",width:"100"}],form:[{label:"General",fields:[{input:"text",name:"displayName",bind:{label:"Display Name",prependIcon:"mdi-account",required:!0,rules:[function(e){return!!e||"Display Name is required"}]}},{input:"text",name:"username",bind:{label:"Username",autocomplete:"username",prependIcon:"mdi-account-box",required:!0,rules:[function(e){return!!e||"Username is required"}]}},{input:"password",name:"password",bind:{label:"Password",prependIcon:"mdi-lock"}},{input:"autocomplete",name:"role",bind:{label:"Role",collection:"role",itemText:"name",itemValue:"role",prependIcon:"mdi-key",required:!0,rules:[function(e){return!!e||"Role is required"}]}},{input:"select",name:"business_unit",bind:{label:"Business Unit",prependIcon:"mdi-domain",required:!0,dense:!0,rules:[function(e){return!!e||"Business Unit is required"}],items:[{label:"English",value:"en"},{label:"Arabic",value:"ar"},{label:"Label 1",value:"label1"}],itemText:"label",itemValue:"value"}},{input:"switch",name:"active",default:!0,bind:{label:"Active"}}]}]}},9320:function(e,a,t){},9894:function(e,a,t){"use strict";var n=t("9320"),i=t.n(n);i.a},"9fab":function(e,a,t){var n={"./":"fb57","./affiliate":"e5f9","./affiliate.js":"e5f9","./index":"fb57","./index.js":"fb57","./notefication":"789d","./notefication.js":"789d","./payment_method":"f3ec","./payment_method.js":"f3ec","./retention":"f414","./retention.js":"f414","./role":"177a","./role.js":"177a","./sale":"e548","./sale.js":"e548","./user":"8d32","./user.js":"8d32"};function i(e){var a=o(e);return t(a)}function o(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id="9fab"},b012:function(e,a){function t(e,a,t){var n,i,o,r,c;function d(){var u=Date.now()-r;u<a&&u>=0?n=setTimeout(d,a-u):(n=null,t||(c=e.apply(o,i),o=i=null))}null==a&&(a=100);var u=function(){o=this,i=arguments,r=Date.now();var u=t&&!n;return n||(n=setTimeout(d,a)),u&&(c=e.apply(o,i),o=i=null),c};return u.clear=function(){n&&(clearTimeout(n),n=null)},u.flush=function(){n&&(c=e.apply(o,i),o=i=null,clearTimeout(n),n=null)},u}t.debounce=t,e.exports=t},bb0b:function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticStyle:{width:"100%"}},[t("v-autocomplete",e._b({attrs:{value:e.value,"search-input":e.search,items:e.dataItems,loading:e.loading,clearable:"","return-object":""},on:{"update:searchInput":function(a){e.search=a},"update:search-input":function(a){e.search=a},input:e.emit,focus:function(a){return e.makeSearch(e.search)}},scopedSlots:e._u([!e.hideAddNew&&e.writeAccess?{key:"prepend-item",fn:function(){return[t("v-list-item",{on:{click:e.addNew}},[t("v-list-item-content",[t("v-list-item-title",{staticClass:"green--text"},[t("v-icon",{attrs:{color:"green"}},[e._v("mdi-plus")]),e._v(" Add New")],1)],1)],1)]},proxy:!0}:null],null,!0)},"v-autocomplete",e.$attrs,!1)),t("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:e.dialog,callback:function(a){e.dialog=a},expression:"dialog"}},[t("v-card",[t("app-item",{attrs:{"collection-name":e.collection},on:{close:function(a){e.dialog=!1},save:e.newSave}})],1)],1)],1)},i=[],o=(t("4de4"),t("96cf"),t("1da1")),r=t("5530"),c=t("b012"),d=t.n(c),u=t("2f62"),l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-col",{staticClass:"pa-0"},[t("v-toolbar",{attrs:{dark:"",color:"primary"}},[t("v-btn",{attrs:{icon:"",dark:""},on:{click:function(a){return e.$emit("close")}}},[t("v-icon",[e._v("mdi-close")])],1),t("v-toolbar-title",[e._v(e._s(e.title))]),t("v-spacer"),e.writeAccess?t("v-toolbar-items",[t("v-btn",{attrs:{dark:"",text:""},on:{click:e.validate}},[e._v("Save")])],1):e._e()],1),e.found?t("v-card",{attrs:{flat:""}},[t("v-card-title",[e._v(" "+e._s(e.title)+" ")]),t("v-card-text",[e.tabs.length>1?t("v-tabs",{attrs:{"center-active":""},model:{value:e.tab,callback:function(a){e.tab=a},expression:"tab"}},e._l(e.tabs,(function(a,n){return t("v-tab",{key:n},[e._v(" "+e._s(a)+" ")])})),1):e._e(),t("v-form",{ref:"form"},[e.loading?e._e():t("v-tabs-items",{attrs:{"center-active":""},model:{value:e.tab,callback:function(a){e.tab=a},expression:"tab"}},e._l(e.tabs,(function(a,n){return t("v-tab-item",{key:n,staticClass:"px-5"},e._l(e.fields,(function(a,n){return t("v-row",{key:n},[t(e.inputs[a.input],e._g(e._b({ref:e.$route.params.collection+"_"+a.name,refInFor:!0,tag:"component",model:{value:e.data[a.name],callback:function(t){e.$set(e.data,a.name,t)},expression:"data[field.name]"}},"component",a.bind,!1),a.on))],1)})),1)})),1)],1)],1)],1):t("v-not-found")],1)},s=[],m=(t("4160"),t("d81d"),t("b0c0"),t("ac1f"),t("1276"),t("159b"),t("8654")),f=t("b974"),p=t("b73d"),b=t("1b5f"),v=t("e94a"),h=t("d6a0"),g=t("fb57"),x={name:"AppItem",props:{collectionName:String},data:function(){return{loading:!1,collection:null,tab:0,form:null,found:!0,title:"",data:{},inputs:{text:m["a"],select:f["a"],switch:p["a"],date:v["a"],autocomplete:J,password:b["a"],rights:h["a"]}}},computed:{tabs:function(){return this.form?this.form.map((function(e){return e.label})):[]},fields:function(){return this.form?this.form[this.tab].fields:[]},access:function(){var e=this;return this.$store.state.auth.user.rights?this.$store.state.auth.user.rights.filter((function(a){return a.value==e.collection})):[]},writeAccess:function(){return this.access.length>0&&this.access[0].write}},methods:Object(r["a"])(Object(r["a"])({},Object(u["b"])({save:"api/save",success:"success"})),{},{generateDataInputs:function(e,a){var t=this,n={},i={};e.forEach((function(e){e.fields.forEach((function(e){if("password"==e.name)return n[e.name]="";"date"==e.input&&a[e.name]&&(a[e.name]=a[e.name].split("T")[0]),n[e.name]="",a[e.name]?n[e.name]=a[e.name]:e.default&&(n[e.name]="function"==typeof e.default?e.default(t.$store.state):e.default),"date"==e.input&&(i[e.name]=!1)}))})),this.data=n,this.menu=i},validate:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var t,n,i,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t=e.data,n=e.collection,i=e.title,!e.$refs.form.validate()){a.next=12;break}return a.next=4,e.save({collection:n,data:t});case 4:if(o=a.sent,console.log(o),!o){a.next=10;break}return a.next=9,e.$store.commit("success",i+" saved successfuly");case 9:e.$emit("save",o.data);case 10:a.next=13;break;case 12:e.$store.commit("error","form not valid");case 13:case"end":return a.stop()}}),a)})))()}}),mounted:function(){window.$form=this},destroyed:function(){window.$form=null},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var t,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t=g["default"].get(e.collectionName),e.collection=e.collectionName,t?(e.title=t.title,e.form=t.form,n={},e.generateDataInputs(e.form,n)):e.found=!1;case 3:case"end":return a.stop()}}),a)})))()}},w=x,y=(t("9894"),t("2877")),I=t("6544"),A=t.n(I),S=t("8336"),T=t("b0af"),M=t("99d9"),C=t("62ad"),N=t("4bd4"),k=t("132d"),_=t("0fd9"),R=t("2fa4"),V=t("71a3"),G=t("c671"),B=t("fe57"),q=t("aac8"),P=t("71d9"),D=t("2a7f"),O=Object(y["a"])(w,l,s,!1,null,null,null),E=O.exports;A()(O,{VBtn:S["a"],VCard:T["a"],VCardText:M["d"],VCardTitle:M["e"],VCol:C["a"],VForm:N["a"],VIcon:k["a"],VRow:_["a"],VSpacer:R["a"],VTab:V["a"],VTabItem:G["a"],VTabs:B["a"],VTabsItems:q["a"],VToolbar:P["a"],VToolbarItems:D["b"],VToolbarTitle:D["c"]});var L={name:"autocomplete",components:{AppItem:E},props:{value:String,hideAddNew:Boolean,collection:{type:String}},data:function(){return{search:"",dataItems:[],loading:!1,dialog:!1}},computed:{access:function(){var e=this;return this.$store.state.auth.user.rights?this.$store.state.auth.user.rights.filter((function(a){return a.value==e.collection})):[]},writeAccess:function(){return this.access.length>0&&this.access[0].write}},methods:Object(r["a"])(Object(r["a"])({emit:function(e){this.$emit("input",e?e[this.$attrs.itemValue]:"")},addNew:function(){this.dialog=!0},newSave:function(e){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a.dialog=!1,a.dataItems.push(e),a.$emit("input",e[a.$attrs.itemValue]);case 3:case"end":return t.stop()}}),t)})))()}},Object(u["b"])({get:"api/get"})),{},{makeSearch:function(e){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a.collection){t.next=2;break}return t.abrupt("return");case 2:return a.loading=!0,console.log(e),t.next=6,a.get({collection:a.collection,search:{name:e}});case 6:n=t.sent,a.dataItems=n.data.docs,a.loading=!1;case 9:case"end":return t.stop()}}),t)})))()}}),watch:{search:function(e){this.collection&&null!==e&&d()(this.makeSearch,500)(e)}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.collection&&e.value&&e.makeSearch(),e.$attrs.items&&(e.dataItems=e.$attrs.items);case 2:case"end":return a.stop()}}),a)})))()}},U=L,$=t("c6a6"),F=t("169a"),j=t("da13"),K=t("5d23"),H=Object(y["a"])(U,n,i,!1,null,null,null),J=a["a"]=H.exports;A()(H,{VAutocomplete:$["a"],VCard:T["a"],VDialog:F["a"],VIcon:k["a"],VListItem:j["a"],VListItemContent:K["g"],VListItemTitle:K["k"]})},d6a0:function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-card",{attrs:{flat:"",width:"100%"}},[t("v-card-text",{staticClass:"text-center"},[t("v-divider"),t("h2",{staticClass:"my-5"},[e._v(e._s(e.label))]),t("v-divider"),t("v-data-table",{attrs:{headers:e.headers,items:e.data,"hide-default-footer":""},scopedSlots:e._u([{key:"item.read",fn:function(a){var n=a.item;return[t("v-switch",{on:{change:function(a){return e.handelReadRight(a,n)}},model:{value:n.read,callback:function(a){e.$set(n,"read",a)},expression:"item.read"}})]}},{key:"item.write",fn:function(a){var n=a.item;return[t("v-switch",{model:{value:n.write,callback:function(a){e.$set(n,"write",a)},expression:"item.write"}})]}},{key:"item.update",fn:function(a){var n=a.item;return[t("v-switch",{model:{value:n.update,callback:function(a){e.$set(n,"update",a)},expression:"item.update"}})]}},{key:"item.delete",fn:function(a){var n=a.item;return[t("v-switch",{model:{value:n.delete,callback:function(a){e.$set(n,"delete",a)},expression:"item.delete"}})]}}])}),e._v("> ")],1)],1)},i=[],o=(t("4de4"),t("4160"),t("159b"),{name:"Rights",props:{label:String,value:{type:Array,default:function(){return[]}}},data:function(){return{headers:[{text:"Section",value:"section",width:"50%"},{text:"Read",value:"read"},{text:"Write",value:"write"},{text:"Update",value:"update"},{text:"Delete",value:"delete"}],data:[{section:"Sales",value:"sale",read:!0,write:!0,update:!0,delete:!0},{section:"Retention",value:"retention",read:!0,write:!0,update:!0,delete:!0},{section:"Payment Methods",value:"payment_method",read:!0,write:!0,update:!0,delete:!0},{section:"Affiliate",value:"affiliate",read:!0,write:!0,update:!0,delete:!0},{section:"Users",value:"user",read:!0,write:!0,update:!0,delete:!0},{section:"Roles",value:"role",read:!0,write:!0,update:!0,delete:!0}]}},methods:{handelReadRight:function(e,a){e||(a.write=!1,a.update=!1,a.delete=!1)}},watch:{data:{deep:!0,handler:function(e){this.$emit("input",e)}}},mounted:function(){var e=this;this.value.length<1&&this.$emit("input",this.data),console.log(this.value),this.value.forEach((function(a){var t=e.data.filter((function(e){return e.value==a.value}));t[0]&&Object.assign(t[0],a)}))}}),r=o,c=t("2877"),d=t("6544"),u=t.n(d),l=t("b0af"),s=t("99d9"),m=t("8fea"),f=t("ce7e"),p=t("b73d"),b=Object(c["a"])(r,n,i,!1,null,null,null);a["a"]=b.exports;u()(b,{VCard:l["a"],VCardText:s["d"],VDataTable:m["a"],VDivider:f["a"],VSwitch:p["a"]})},e548:function(e,a,t){"use strict";t.r(a);t("ac1f"),t("1276");var n=t("445d");a["default"]={title:"Sales",icon:"mdi-printer-pos",filters:[{input:"text",name:"tpc",bind:{label:"TP Account",prependIcon:"mdi-account-box"}}],table:[{text:"TP Account",align:"start",sortable:!1,value:"tpc"},{text:"Account name",value:"name"},{text:"Amount",value:"amount"},{text:"Affiliate",value:"affiliate.name"},{text:"Payment Method",value:"payment_method.name"},{text:"Created date",value:"created_on"},{text:"Created By",value:"user.username"},{text:"Business Unit",value:"business_unit"},{text:"Actions",value:"actions",width:"100"}],form:[{label:"General",fields:[{input:"text",name:"name",bind:{label:"Account Name",prependIcon:"mdi-account-box",required:!0,rules:[function(e){return!!e||"ID is required"}]}},{input:"text",name:"tpc",bind:{label:"ID",prependIcon:"mdi-card-account-details",required:!0,rules:[function(e){return!!e||"ID is required"}]}},{input:"text",name:"amount",bind:{label:"Amount",prependIcon:"mdi-cash",required:!0,rules:[function(e){return!!e||"Amount is required"}]}},{input:"autocomplete",name:"payment_method",bind:{label:"Payment Method",prependIcon:"mdi-credit-card-settings-outline",collection:"payment_method",itemText:"name",itemValue:"_id",required:!0,rules:[function(e){return!!e||"Payment Method is required"}]}},{input:"date",name:"created_on",default:(new Date).toISOString().split("T")[0],bind:{label:"Created Date",prependIcon:"mdi-calendar",required:!0,rules:[function(e){return!!e||"Created On is required"}]}},{input:"hidden",name:"business_unit",default:function(e){return e.auth.user.business_unit}},{input:"autocomplete",name:"country",bind:{label:"Country",prependIcon:"mdi-flag",items:n["a"],itemText:"name",itemValue:"code",required:!0,hideAddNew:!0,rules:[function(e){return!!e||"Country is required"}]}},{input:"autocomplete",name:"affiliate",bind:{label:"Affiliate",collection:"affiliate",itemText:"name",itemValue:"_id",prependIcon:"mdi-account-network-outline"}}]}]}},e5f9:function(e,a,t){"use strict";t.r(a),a["default"]={title:"Affiliate",icon:"mdi-account-network-outline",table:[{text:"Name",align:"start",sortable:!1,value:"name"},{text:"Active",value:"active",width:"10%"},{text:"Actions",value:"actions",width:"100"}],form:[{label:"General",fields:[{input:"text",name:"name",bind:{label:"Name",rules:[function(e){return!!e||"Name is required"}],required:!0}},{input:"switch",name:"active",default:!0,bind:{label:"Active"}}]}]}},e94a:function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(a){var n=a.on;return[t("v-text-field",e._g(e._b({attrs:{readonly:"",value:e.value,clearable:""},on:{"click:clear":function(a){return e.input("")}}},"v-text-field",e.$attrs,!1),n))]}}]),model:{value:e.menu,callback:function(a){e.menu=a},expression:"menu"}},[t("v-date-picker",{attrs:{value:e.value},on:{input:e.input}})],1)},i=[],o={name:"date-picker",props:{value:String},data:function(){return{menu:!1}},methods:{input:function(e){this.menu=!1,this.$emit("input",e)}}},r=o,c=t("2877"),d=t("6544"),u=t.n(d),l=t("2e4b"),s=t("e449"),m=t("8654"),f=Object(c["a"])(r,n,i,!1,null,null,null);a["a"]=f.exports;u()(f,{VDatePicker:l["a"],VMenu:s["a"],VTextField:m["a"]})},f3ec:function(e,a,t){"use strict";t.r(a),a["default"]={title:"Payment Method",icon:"mdi-credit-card-settings-outline",table:[{text:"Name",align:"start",sortable:!1,value:"name"},{text:"Type",value:"type",width:"20%"},{text:"Active",value:"active",width:"10%"},{text:"Actions",value:"actions",width:"100"}],form:[{label:"General",fields:[{input:"text",name:"name",bind:{label:"Name",rules:[function(e){return!!e||"Name is required"}],required:!0}},{input:"select",name:"type",bind:{label:"Type",rules:[function(e){return!!e||"Type is required"}],items:[{label:"Credit Card",value:"cc"},{label:"Wire",value:"wire"}],itemText:"label",itemValue:"value",required:!0}},{input:"switch",name:"active",default:!0,bind:{label:"Active"}}]}]}},f414:function(e,a,t){"use strict";t.r(a);t("ac1f"),t("1276");var n=t("445d");a["default"]={title:"Retention",icon:"mdi-printer-pos",filters:[{input:"text",name:"tpc",bind:{dense:!0,label:"TP Account",prependIcon:"mdi-account-box"}}],table:[{text:"TP Account",align:"start",sortable:!1,value:"tpc"},{text:"Account name",value:"name"},{text:"Amount",value:"amount"},{text:"Affiliate",value:"affiliate.name"},{text:"Payment Method",value:"payment_method.name"},{text:"Created on",value:"created_on"},{text:"Created By",value:"user.username"},{text:"Business Unit",value:"business_unit"},{text:"Actions",value:"actions",width:"100"}],form:[{label:"General",fields:[{input:"text",name:"name",bind:{label:"Account Name",prependIcon:"mdi-account-box",required:!0,rules:[function(e){return!!e||"ID is required"}]}},{input:"text",name:"tpc",bind:{label:"ID",prependIcon:"mdi-card-account-details",required:!0,rules:[function(e){return!!e||"ID is required"}]}},{input:"text",name:"amount",bind:{label:"Amount",prependIcon:"mdi-cash",required:!0,rules:[function(e){return!!e||"Amount is required"}]}},{input:"autocomplete",name:"payment_method",bind:{label:"Payment Method",prependIcon:"mdi-credit-card-settings-outline",collection:"payment_method",itemText:"name",itemValue:"_id",required:!0,rules:[function(e){return!!e||"Payment Method is required"}]}},{input:"hidden",name:"user",default:function(e){return e.auth.user._id}},{input:"date",name:"created_on",default:(new Date).toISOString().split("T")[0],bind:{label:"Created Date",prependIcon:"mdi-calendar",required:!0,rules:[function(e){return!!e||"Created On is required"}]}},{input:"hidden",name:"business_unit",default:function(e){return e.auth.user.business_unit}},{input:"autocomplete",name:"country",bind:{label:"Country",prependIcon:"mdi-flag",items:n["a"],itemText:"name",itemValue:"code",hideAddNew:!0,required:!0,rules:[function(e){return!!e||"Country is required"}]}},{input:"autocomplete",name:"affiliate",bind:{dense:!0,label:"Affiliate",collection:"affiliate",itemText:"name",itemValue:"_id",prependIcon:"mdi-account-network-outline"}}]}]}},fb57:function(e,a,t){"use strict";t.r(a),a["default"]={get:function(e){return t("9fab")("./"+e).default}}}}]);
//# sourceMappingURL=chunk-2be74c5d.27b77bc3.js.map