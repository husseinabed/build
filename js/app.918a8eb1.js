(function(e){function n(n){for(var t,r,i=n[0],u=n[1],s=n[2],d=0,m=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t]);l&&l(n);while(m.length)m.shift()();return c.push.apply(c,s||[]),a()}function a(){for(var e,n=0;n<c.length;n++){for(var a=c[n],t=!0,r=1;r<a.length;r++){var i=a[r];0!==o[i]&&(t=!1)}t&&(c.splice(n--,1),e=u(u.s=a[0]))}return e}var t={},r={app:0},o={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b3dec":"ff530230","chunk-2d0e95df":"0196858d","chunk-2d217357":"736e0510","chunk-3730d4f7":"841164c1","chunk-3f4ead26":"f4032447","chunk-5538d51c":"0ca35f3d","chunk-972748b4":"1c6858dd","chunk-4ec6eace":"8ddf0985","chunk-4ec75e8e":"b697a670","chunk-6978b90c":"645d006e","chunk-b01cf3e4":"36117dc0","chunk-b01faab8":"4c3d6410","chunk-b046b0d0":"fc1ba6d0","chunk-c8cb5782":"f4e0e096","chunk-6e999f0f":"81e8e22d","chunk-7f2dd66f":"01a9e123","chunk-2d0b6994":"8e8153fe","chunk-2d21a061":"fa1962bc","chunk-2d0c45c8":"608e1c0b"}[e]+".js"}function u(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(e){var n=[],a={"chunk-3f4ead26":1,"chunk-972748b4":1,"chunk-6978b90c":1,"chunk-6e999f0f":1,"chunk-7f2dd66f":1};r[e]?n.push(r[e]):0!==r[e]&&a[e]&&n.push(r[e]=new Promise((function(n,a){for(var t="css/"+({}[e]||e)+"."+{"chunk-2d0b3dec":"31d6cfe0","chunk-2d0e95df":"31d6cfe0","chunk-2d217357":"31d6cfe0","chunk-3730d4f7":"31d6cfe0","chunk-3f4ead26":"a67f25ad","chunk-5538d51c":"31d6cfe0","chunk-972748b4":"7b229630","chunk-4ec6eace":"31d6cfe0","chunk-4ec75e8e":"31d6cfe0","chunk-6978b90c":"154e1c96","chunk-b01cf3e4":"31d6cfe0","chunk-b01faab8":"31d6cfe0","chunk-b046b0d0":"31d6cfe0","chunk-c8cb5782":"31d6cfe0","chunk-6e999f0f":"bc391096","chunk-7f2dd66f":"c93559e0","chunk-2d0b6994":"31d6cfe0","chunk-2d21a061":"31d6cfe0","chunk-2d0c45c8":"31d6cfe0"}[e]+".css",o=u.p+t,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===t||d===o))return n()}var m=document.getElementsByTagName("style");for(i=0;i<m.length;i++){s=m[i],d=s.getAttribute("data-href");if(d===t||d===o)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var t=n&&n.target&&n.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=t,delete r[e],l.parentNode.removeChild(l),a(c)},l.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(l)})).then((function(){r[e]=0})));var t=o[e];if(0!==t)if(t)n.push(t[2]);else{var c=new Promise((function(n,a){t=o[e]=[n,a]}));n.push(t[2]=c);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=i(e);var m=new Error;s=function(n){d.onerror=d.onload=null,clearTimeout(l);var a=o[e];if(0!==a){if(a){var t=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;m.message="Loading chunk "+e+" failed.\n("+t+": "+r+")",m.name="ChunkLoadError",m.type=t,m.request=r,a[1](m)}o[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(n)},u.m=e,u.c=t,u.d=function(e,n,a){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)u.d(a,t,function(n){return e[n]}.bind(null,t));return a},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=n,s=s.slice();for(var m=0;m<s.length;m++)n(s[m]);var l=d;c.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},"034f":function(e,n,a){"use strict";var t=a("8a23"),r=a.n(t);r.a},1:function(e,n){},"2e17":function(e,n,a){"use strict";a("99af"),a("ac1f"),a("5319"),a("1276");n["a"]={pad:function(e,n){var a=""+e;while(a.length<n)a="0"+a;return a},money:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"USD";return new Intl.NumberFormat("en-US",{style:"currency",currency:n}).format(e)},get today(){var e=new Date;return e.setHours(0,0,0,0),e},get first_day_of_the_month(){var e=new Date;return new Date(e.getFullYear(),e.getMonth(),1)},get todayString(){var e=this.today,n=this.pad;return["".concat(e.getFullYear(),"-").concat(n(e.getMonth()+1,2),"-").concat(n(e.getDate(),2)),"".concat(e.getFullYear(),"-").concat(n(e.getMonth()+1,2),"-").concat(n(e.getDate(),2))]},get last7daysString(){var e=this.today,n=new Date(this.today.getTime());n.setDate(n.getDate()-7);var a=this.pad;return["".concat(n.getFullYear(),"-").concat(a(n.getMonth()+1,2),"-").concat(a(n.getDate(),2)),"".concat(e.getFullYear(),"-").concat(a(e.getMonth()+1,2),"-").concat(a(e.getDate(),2))]},get currentDateRange(){var e=this.today,n=this.pad;return["".concat(e.getFullYear(),"-").concat(n(e.getMonth()+1,2),"-01"),"".concat(e.getFullYear(),"-").concat(n(e.getMonth()+1,2),"-").concat(n(e.getDate(),2))]},findColorBetween:function(e,n,a){for(var t={},r=["r","g","b"],o=0;o<r.length;o++){var c=r[o];t[c]=Math.round(e[c]+(n[c]-e[c])*a/100)}return t},getNestedValue:function(e,n,a){var t=n.length-1;if(t<0)return void 0===e?a:e;for(var r=0;r<t;r++){if(null==e)return a;e=e[n[r]]}return null==e||void 0===e[n[t]]?a:e[n[t]]},getObjectValueByPath:function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return null!=e&&n&&"string"===typeof n?void 0!==e[n]?e[n]:(n=n.replace(/\[(\w+)\]/g,".$1"),n=n.replace(/^\./,""),this.getNestedValue(e,n.split("."),a)):a}}},4360:function(e,n,a){"use strict";var t=a("a026"),r=a("2f62"),o=a("5530"),c=(a("96cf"),a("1da1")),i=a("bc3a"),u=a.n(i),s=a("db49"),d=s["a"].baseURL,m=function(){var e=u.a.create({baseURL:d});return e};function l(e){var n=document.createElement("DIV");return n.innerHTML=e,n.textContent||n.innerText||""}var f={namespaced:!0,state:{user:JSON.parse(localStorage.getItem("user"))||null,token:localStorage.getItem("token")||null,menu:JSON.parse(localStorage.getItem("menu"))||[]},mutations:{user:function(e,n){n&&localStorage.setItem("user",JSON.stringify(n)),e.user=n},token:function(e,n){n&&localStorage.setItem("token",n),e.token=n},menu:function(e,n){n&&localStorage.setItem("menu",JSON.stringify(n)),e.menu=n}},getters:{isAuthenticated:function(e){return!!e.token}},actions:{register:function(e,n){return Object(c["a"])(regeneratorRuntime.mark((function a(){var t,r,o,c,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t=e.commit,r=n.username,o=n.password,c=m(),a.next=5,c.post("/auth/register",{username:r,password:o});case 5:i=a.sent,t("token",i.data.token),t("user",i.data.user);case 8:case"end":return a.stop()}}),a)})))()},login:function(e,n){return Object(c["a"])(regeneratorRuntime.mark((function a(){var t,r,o,c,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t=e.commit,r=n.username,o=n.password,c=m(),a.next=5,c.post("/auth/login",{username:r,password:o});case 5:i=a.sent,t("token",i.data.token),t("user",i.data.user),t("menu",i.data.menu);case 9:case"end":return a.stop()}}),a)})))()},logout:function(e){return Object(c["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a=e.commit,localStorage.removeItem("user"),localStorage.removeItem("token"),a("token",null),a("user",null);case 5:case"end":return n.stop()}}),n)})))()},dark:function(e,n){return Object(c["a"])(regeneratorRuntime.mark((function a(){var t,r,c,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t=e.commit,r=e.state,r.user.dark_theme=n,c=m(),a.next=5,c.put("/auth/dark",{id:r.user._id,dark_theme:n}).catch((function(e){return t("error",l(e.response?e.response.data:e),{root:!0})}));case 5:i=a.sent,200==i.status&&t("user",Object(o["a"])({},r.user));case 7:case"end":return a.stop()}}),a)})))()}}},p=a("3835"),h=a("56d7"),b={namespaced:!0,state:{text:"",value:!1,absolute:!1,x:"center",y:"top",timeout:6e3,mode:"multi-line",color:"error"},mutations:{text:function(e,n){e.text=n},value:function(e,n){e.value=n},absolute:function(e,n){e.absolute=n},x:function(e,n){e.x=n},y:function(e,n){e.y=n},timeout:function(e,n){e.timeout=n},mode:function(e,n){e.mode=n},color:function(e,n){e.color=n}},actions:{open:function(e,n){var a=e.commit,t=Object(p["a"])(n,4),r=t[0],o=t[1],c=t[2],i=t[3];i=i||(h["default"].$vuetify.breakpoint.xsOnly?"bottom":"top"),a("color",o),a("text",r),a("x",c),a("y",i),a("value",!0)},close:function(e){var n=e.commit;n("x","center"),n("y","top"),n("value",!1),n("text",""),n("color","error")}}},g=(a("d3b7"),a("ac1f"),a("25f0"),a("841c"),a("8055")),v=a.n(g),k=s["a"].baseURL,y=v()(k);function w(e){var n=document.createElement("DIV");return n.innerHTML=e,n.textContent||n.innerText||""}y.on("connect",(function(){return console.log("socket io connected")}));var S=function(){var e=localStorage.getItem("token"),n=u.a.create({baseURL:k,headers:{Authorization:"Bearer "+e}});return n},A=function(e,n){n("error",w(e.response&&e.response.data.length?e.response.data:e.toString()),{root:!0})},I={namespaced:!0,state:{io:y},mutations:{},actions:{save:function(e,n){return Object(c["a"])(regeneratorRuntime.mark((function a(){var t,r,o,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t=e.commit,r=n.collection,o=n.data,r){a.next=4;break}return a.abrupt("return",t("error",'missing collection name in action "api/save"',{root:!0}));case 4:if(o){a.next=6;break}return a.abrupt("return",t("error",'missing data in action "api/save"',{root:!0}));case 6:return c=S(),a.next=9,c.post(r,o).catch((function(e){return A(e,t)}));case 9:return a.abrupt("return",a.sent);case 10:case"end":return a.stop()}}),a)})))()},update:function(e,n){return Object(c["a"])(regeneratorRuntime.mark((function a(){var t,r,o,c,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t=e.commit,r=n.collection,o=n.data,c=n.id,console.log(r+"/"+c,o),r){a.next=5;break}return a.abrupt("return",t("error",'missing collection name in action "api/update"',{root:!0}));case 5:if(o){a.next=7;break}return a.abrupt("return",t("error",'missing data in action "api/update"',{root:!0}));case 7:if(c){a.next=9;break}return a.abrupt("return",t("error",'missing id in action "api/update"',{root:!0}));case 9:return i=S(),a.next=12,i.put(r+"/"+c,o).catch((function(e){return A(e,t)}));case 12:return a.abrupt("return",a.sent);case 13:case"end":return a.stop()}}),a)})))()},remove:function(e,n){return Object(c["a"])(regeneratorRuntime.mark((function a(){var t,r,o,c,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t=e.commit,r=n.collection,o=n.id,c=n.data,r){a.next=4;break}return a.abrupt("return",t("error",'missing collection name in action "api/save"',{root:!0}));case 4:if(o){a.next=6;break}return a.abrupt("return",t("error",'missing id in action "api/remove"',{root:!0}));case 6:return i=S(),a.next=9,i.delete(r+"/"+o,{data:c}).catch((function(e){return A(e,t)}));case 9:return a.abrupt("return",a.sent);case 10:case"end":return a.stop()}}),a)})))()},getById:function(e,n){return Object(c["a"])(regeneratorRuntime.mark((function a(){var t,r,o,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t=e.commit,r=n.collection,o=n.id,r){a.next=4;break}return a.abrupt("return",t("error",'missing collection name in action "api/getById"',{root:!0}));case 4:if(o){a.next=6;break}return a.abrupt("return",t("error",'missing id in action "api/getById"',{root:!0}));case 6:return c=S(),a.next=9,c.get(r+"/"+o).catch((function(e){return A(e,t)}));case 9:return a.abrupt("return",a.sent);case 10:case"end":return a.stop()}}),a)})))()},get:function(e,n){return Object(c["a"])(regeneratorRuntime.mark((function a(){var t,r,o,c,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t=e.commit,r=n.collection,o=n.query,c=n.search,o=o||{},c&&(o.search=c),r){a.next=6;break}return a.abrupt("return",t("error",'missing collection name in action "api/get"',{root:!0}));case 6:return i=S(),a.next=9,i.get(r,{params:o}).catch((function(e){return A(e,t)}));case 9:return a.abrupt("return",a.sent);case 10:case"end":return a.stop()}}),a)})))()}}};t["a"].use(r["a"]);n["a"]=new r["a"].Store({state:{error:"",success:"",ftd:null,rtn:null},mutations:{error:function(e,n){e.error=n},success:function(e,n){e.success=n},ftd:function(e,n){e.ftd=n},rtn:function(e,n){e.rtn=n}},modules:{snackbar:b,auth:f,api:I}})},"445d":function(e,n,a){"use strict";n["a"]=[{name:"Afghanistan",code:"AF"},{name:"Åland Islands",code:"AX"},{name:"Albania",code:"AL"},{name:"Algeria",code:"DZ"},{name:"American Samoa",code:"AS"},{name:"AndorrA",code:"AD"},{name:"Angola",code:"AO"},{name:"Anguilla",code:"AI"},{name:"Antarctica",code:"AQ"},{name:"Antigua and Barbuda",code:"AG"},{name:"Argentina",code:"AR"},{name:"Armenia",code:"AM"},{name:"Aruba",code:"AW"},{name:"Australia",code:"AU"},{name:"Austria",code:"AT"},{name:"Azerbaijan",code:"AZ"},{name:"Bahamas",code:"BS"},{name:"Bahrain",code:"BH"},{name:"Bangladesh",code:"BD"},{name:"Barbados",code:"BB"},{name:"Belarus",code:"BY"},{name:"Belgium",code:"BE"},{name:"Belize",code:"BZ"},{name:"Benin",code:"BJ"},{name:"Bermuda",code:"BM"},{name:"Bhutan",code:"BT"},{name:"Bolivia",code:"BO"},{name:"Bosnia and Herzegovina",code:"BA"},{name:"Botswana",code:"BW"},{name:"Bouvet Island",code:"BV"},{name:"Brazil",code:"BR"},{name:"British Indian Ocean Territory",code:"IO"},{name:"Brunei Darussalam",code:"BN"},{name:"Bulgaria",code:"BG"},{name:"Burkina Faso",code:"BF"},{name:"Burundi",code:"BI"},{name:"Cambodia",code:"KH"},{name:"Cameroon",code:"CM"},{name:"Canada",code:"CA"},{name:"Cape Verde",code:"CV"},{name:"Cayman Islands",code:"KY"},{name:"Central African Republic",code:"CF"},{name:"Chad",code:"TD"},{name:"Chile",code:"CL"},{name:"China",code:"CN"},{name:"Christmas Island",code:"CX"},{name:"Cocos (Keeling) Islands",code:"CC"},{name:"Colombia",code:"CO"},{name:"Comoros",code:"KM"},{name:"Congo",code:"CG"},{name:"Congo, The Democratic Republic of the",code:"CD"},{name:"Cook Islands",code:"CK"},{name:"Costa Rica",code:"CR"},{name:"Cote D'Ivoire",code:"CI"},{name:"Croatia",code:"HR"},{name:"Cuba",code:"CU"},{name:"Cyprus",code:"CY"},{name:"Czech Republic",code:"CZ"},{name:"Denmark",code:"DK"},{name:"Djibouti",code:"DJ"},{name:"Dominica",code:"DM"},{name:"Dominican Republic",code:"DO"},{name:"Ecuador",code:"EC"},{name:"Egypt",code:"EG"},{name:"El Salvador",code:"SV"},{name:"Equatorial Guinea",code:"GQ"},{name:"Eritrea",code:"ER"},{name:"Estonia",code:"EE"},{name:"Ethiopia",code:"ET"},{name:"Falkland Islands (Malvinas)",code:"FK"},{name:"Faroe Islands",code:"FO"},{name:"Fiji",code:"FJ"},{name:"Finland",code:"FI"},{name:"France",code:"FR"},{name:"French Guiana",code:"GF"},{name:"French Polynesia",code:"PF"},{name:"French Southern Territories",code:"TF"},{name:"Gabon",code:"GA"},{name:"Gambia",code:"GM"},{name:"Georgia",code:"GE"},{name:"Germany",code:"DE"},{name:"Ghana",code:"GH"},{name:"Gibraltar",code:"GI"},{name:"Greece",code:"GR"},{name:"Greenland",code:"GL"},{name:"Grenada",code:"GD"},{name:"Guadeloupe",code:"GP"},{name:"Guam",code:"GU"},{name:"Guatemala",code:"GT"},{name:"Guernsey",code:"GG"},{name:"Guinea",code:"GN"},{name:"Guinea-Bissau",code:"GW"},{name:"Guyana",code:"GY"},{name:"Haiti",code:"HT"},{name:"Heard Island and Mcdonald Islands",code:"HM"},{name:"Holy See (Vatican City State)",code:"VA"},{name:"Honduras",code:"HN"},{name:"Hong Kong",code:"HK"},{name:"Hungary",code:"HU"},{name:"Iceland",code:"IS"},{name:"India",code:"IN"},{name:"Indonesia",code:"ID"},{name:"Iran, Islamic Republic Of",code:"IR"},{name:"Iraq",code:"IQ"},{name:"Ireland",code:"IE"},{name:"Isle of Man",code:"IM"},{name:"Israel",code:"IL"},{name:"Italy",code:"IT"},{name:"Jamaica",code:"JM"},{name:"Japan",code:"JP"},{name:"Jersey",code:"JE"},{name:"Jordan",code:"JO"},{name:"Kazakhstan",code:"KZ"},{name:"Kenya",code:"KE"},{name:"Kiribati",code:"KI"},{name:"Korea, Democratic People'S Republic of",code:"KP"},{name:"Korea, Republic of",code:"KR"},{name:"Kuwait",code:"KW"},{name:"Kyrgyzstan",code:"KG"},{name:"Lao People'S Democratic Republic",code:"LA"},{name:"Latvia",code:"LV"},{name:"Lebanon",code:"LB"},{name:"Lesotho",code:"LS"},{name:"Liberia",code:"LR"},{name:"Libyan Arab Jamahiriya",code:"LY"},{name:"Liechtenstein",code:"LI"},{name:"Lithuania",code:"LT"},{name:"Luxembourg",code:"LU"},{name:"Macao",code:"MO"},{name:"Macedonia, The Former Yugoslav Republic of",code:"MK"},{name:"Madagascar",code:"MG"},{name:"Malawi",code:"MW"},{name:"Malaysia",code:"MY"},{name:"Maldives",code:"MV"},{name:"Mali",code:"ML"},{name:"Malta",code:"MT"},{name:"Marshall Islands",code:"MH"},{name:"Martinique",code:"MQ"},{name:"Mauritania",code:"MR"},{name:"Mauritius",code:"MU"},{name:"Mayotte",code:"YT"},{name:"Mexico",code:"MX"},{name:"Micronesia, Federated States of",code:"FM"},{name:"Moldova, Republic of",code:"MD"},{name:"Monaco",code:"MC"},{name:"Mongolia",code:"MN"},{name:"Montserrat",code:"MS"},{name:"Morocco",code:"MA"},{name:"Mozambique",code:"MZ"},{name:"Myanmar",code:"MM"},{name:"Namibia",code:"NA"},{name:"Nauru",code:"NR"},{name:"Nepal",code:"NP"},{name:"Netherlands",code:"NL"},{name:"Netherlands Antilles",code:"AN"},{name:"New Caledonia",code:"NC"},{name:"New Zealand",code:"NZ"},{name:"Nicaragua",code:"NI"},{name:"Niger",code:"NE"},{name:"Nigeria",code:"NG"},{name:"Niue",code:"NU"},{name:"Norfolk Island",code:"NF"},{name:"Northern Mariana Islands",code:"MP"},{name:"Norway",code:"NO"},{name:"Oman",code:"OM"},{name:"Pakistan",code:"PK"},{name:"Palau",code:"PW"},{name:"Palestinian Territory, Occupied",code:"PS"},{name:"Panama",code:"PA"},{name:"Papua New Guinea",code:"PG"},{name:"Paraguay",code:"PY"},{name:"Peru",code:"PE"},{name:"Philippines",code:"PH"},{name:"Pitcairn",code:"PN"},{name:"Poland",code:"PL"},{name:"Portugal",code:"PT"},{name:"Puerto Rico",code:"PR"},{name:"Qatar",code:"QA"},{name:"Reunion",code:"RE"},{name:"Romania",code:"RO"},{name:"Russian Federation",code:"RU"},{name:"RWANDA",code:"RW"},{name:"Saint Helena",code:"SH"},{name:"Saint Kitts and Nevis",code:"KN"},{name:"Saint Lucia",code:"LC"},{name:"Saint Pierre and Miquelon",code:"PM"},{name:"Saint Vincent and the Grenadines",code:"VC"},{name:"Samoa",code:"WS"},{name:"San Marino",code:"SM"},{name:"Sao Tome and Principe",code:"ST"},{name:"Saudi Arabia",code:"SA"},{name:"Senegal",code:"SN"},{name:"Serbia and Montenegro",code:"CS"},{name:"Seychelles",code:"SC"},{name:"Sierra Leone",code:"SL"},{name:"Singapore",code:"SG"},{name:"Slovakia",code:"SK"},{name:"Slovenia",code:"SI"},{name:"Solomon Islands",code:"SB"},{name:"Somalia",code:"SO"},{name:"South Africa",code:"ZA"},{name:"South Georgia and the South Sandwich Islands",code:"GS"},{name:"Spain",code:"ES"},{name:"Sri Lanka",code:"LK"},{name:"Sudan",code:"SD"},{name:"Suriname",code:"SR"},{name:"Svalbard and Jan Mayen",code:"SJ"},{name:"Swaziland",code:"SZ"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Syrian Arab Republic",code:"SY"},{name:"Taiwan, Province of China",code:"TW"},{name:"Tajikistan",code:"TJ"},{name:"Tanzania, United Republic of",code:"TZ"},{name:"Thailand",code:"TH"},{name:"Timor-Leste",code:"TL"},{name:"Togo",code:"TG"},{name:"Tokelau",code:"TK"},{name:"Tonga",code:"TO"},{name:"Trinidad and Tobago",code:"TT"},{name:"Tunisia",code:"TN"},{name:"Turkey",code:"TR"},{name:"Turkmenistan",code:"TM"},{name:"Turks and Caicos Islands",code:"TC"},{name:"Tuvalu",code:"TV"},{name:"Uganda",code:"UG"},{name:"Ukraine",code:"UA"},{name:"United Arab Emirates",code:"AE"},{name:"United Kingdom",code:"GB"},{name:"United States",code:"US"},{name:"United States Minor Outlying Islands",code:"UM"},{name:"Uruguay",code:"UY"},{name:"Uzbekistan",code:"UZ"},{name:"Vanuatu",code:"VU"},{name:"Venezuela",code:"VE"},{name:"Viet Nam",code:"VN"},{name:"Virgin Islands, British",code:"VG"},{name:"Virgin Islands, U.S.",code:"VI"},{name:"Wallis and Futuna",code:"WF"},{name:"Western Sahara",code:"EH"},{name:"Yemen",code:"YE"},{name:"Zambia",code:"ZM"},{name:"Zimbabwe",code:"ZW"}]},"56d7":function(e,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var t=a("a026"),r=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("v-app",[a("router-view"),a("v-snackbar",{attrs:{absolute:e.snackbar.absolute,color:e.snackbar.color,bottom:"bottom"===e.snackbar.y,left:"left"===e.snackbar.x,"multi-line":"multi-line"===e.snackbar.mode,right:"right"===e.snackbar.x,timeout:e.snackbar.timeout,top:"top"===e.snackbar.y,vertical:"vertical"===e.snackbar.mode},model:{value:e.snackbar.value,callback:function(n){e.$set(e.snackbar,"value",n)},expression:"snackbar.value"}},[e._v(" "+e._s(e.snackbar.text)+" "),a("v-btn",{attrs:{dark:"",icon:""},on:{click:e.snackbarClose}},[a("v-icon",[e._v("mdi-close")])],1)],1)],1)},o=[],c=a("5530"),i=a("2f62"),u={name:"App",computed:Object(c["a"])(Object(c["a"])({},Object(i["d"])({user:function(e){return e.auth.user},snackbar:function(e){return e.snackbar},error:function(e){return e.error},success:function(e){return e.success},io:function(e){return e.api.io}})),Object(i["c"])({isAuthenticated:"auth/isAuthenticated"})),methods:Object(c["a"])({},Object(i["b"])({snackbarOpen:"snackbar/open",snackbarClose:"snackbar/close"})),watch:{isAuthenticated:function(e){e?(console.log("isAuthenticated --\x3e",e),this.$router.push("/"),this.io.emit("setUser",this.user._id)):this.$router.push("/login")},error:function(e){var n=this;e.length&&this.snackbarOpen([e,"red"]).then((function(){setTimeout((function(){n.$store.commit("error","")}),n.snackbar.timeout)}))},success:function(e){var n=this;e.length&&this.snackbarOpen([e,"green"]).then((function(){setTimeout((function(){n.$store.commit("success","")}),n.snackbar.timeout)}))}},created:function(){this.user&&(this.$vuetify.theme.dark=this.user.dark_theme,this.io.emit("setUser",this.user._id))}},s=u,d=(a("034f"),a("2877")),m=a("6544"),l=a.n(m),f=a("7496"),p=a("8336"),h=a("132d"),b=a("2db4"),g=Object(d["a"])(s,r,o,!1,null,null,null),v=g.exports;l()(g,{VApp:f["a"],VBtn:p["a"],VIcon:h["a"],VSnackbar:b["a"]});var k=a("9483");Object(k["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});a("4de4"),a("b0c0"),a("d3b7");var y=a("8c4f"),w=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("v-app",[e.user&&e.user.rights?a("v-navigation-drawer",{attrs:{clipped:e.primaryDrawer.clipped,floating:e.primaryDrawer.floating,"mini-variant":e.primaryDrawer.mini,permanent:"permanent"===e.primaryDrawer.type,temporary:"temporary"===e.primaryDrawer.type,app:"",overflow:""},model:{value:e.primaryDrawer.model,callback:function(n){e.$set(e.primaryDrawer,"model",n)},expression:"primaryDrawer.model"}},[a("v-list",[e._l(e.drawerList,(function(n,t){return[a("v-list-item",{key:t,attrs:{to:n.path}},[a("v-list-item-icon",[a("v-icon",[e._v(e._s(n.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(n.name))])],1)],1)]}))],2)],1):e._e(),a("v-app-bar",{attrs:{"clipped-left":e.primaryDrawer.clipped,app:""}},["permanent"!==e.primaryDrawer.type?a("v-app-bar-nav-icon",{on:{click:function(n){n.stopPropagation(),e.primaryDrawer.model=!e.primaryDrawer.model}}}):e._e(),a("v-toolbar-title",[e._v("Roaa")]),a("v-spacer"),e.user?a("v-menu",{attrs:{"close-on-content-click":!1},scopedSlots:e._u([{key:"activator",fn:function(n){var t=n.on;return[a("v-list",{staticClass:"ma-0",attrs:{dense:"",color:"transparent"}},[a("v-list-item",e._g({},t),[a("v-list-item-avatar",[a("profile-image",{staticClass:"mt-5",attrs:{value:e.user.profileImage,size:35,disabled:""}})],1),a("v-list-item-content",[a("v-list-item-title",[e._v(" "+e._s(e.displayName)+" ")]),a("v-list-item-subtitle",[e._v(" "+e._s(e.user.role)+" ")])],1)],1)],1)]}}],null,!1,2584626912),model:{value:e.menu,callback:function(n){e.menu=n},expression:"menu"}},[e.user?a("v-card",[a("v-list",[a("v-list-item",[a("v-list-item-icon",[a("profile-image",{staticClass:"mt-5",attrs:{value:e.user.profileImage,size:55,disabled:""}})],1),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(e.displayName))]),a("v-list-item-subtitle",[e._v(e._s(e.user.role))])],1),a("v-list-item-action")],1)],1),a("v-divider"),a("v-list",[a("v-list-item",[a("v-list-item-action",[a("v-switch",{attrs:{primary:""},model:{value:e.$vuetify.theme.dark,callback:function(n){e.$set(e.$vuetify.theme,"dark",n)},expression:"$vuetify.theme.dark"}})],1),a("v-list-item-title",[e._v("Dark Theme")])],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:e.logout}},[a("v-icon",[e._v("mdi-logout")]),e._v(" Logout")],1)],1)],1):e._e()],1):e._e()],1),a("v-content",{class:{grey:!e.$vuetify.theme.dark,"lighten-4":!e.$vuetify.theme.dark}},[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1)],1)},S=[],A=(a("4160"),a("498a"),a("159b"),a("96cf"),a("1da1")),I=a("89e6"),M={components:{ProfileImage:I["a"]},data:function(){return{drawers:["Default (no property)","Permanent","Temporary"],primaryDrawer:{model:null,type:"default (no property)",clipped:!0,floating:!1,mini:!1},fav:!0,menu:!1,message:!1,hints:!0,drawerList:[{name:"Dashboard",icon:"mdi-view-dashboard",path:"/"},{name:"Deposit",icon:"mdi-bank-transfer-in",path:"/deposit"},{name:"Reports",icon:"mdi-file-chart",path:"/report"},{name:"Customer",icon:"mdi-account-box",path:"/customer"},{name:"Payment Method",icon:"mdi mdi-credit-card-settings-outline",path:"/payment_method"},{name:"Affiliate",icon:"mdi-account-network-outline",path:"/affiliate"},{name:"Users",icon:"mdi-account-multiple",path:"/user"},{name:"Roles",icon:"mdi-key",path:"/role"},{name:"Menus",icon:"mdi-menu",path:"/menu"},{name:"Business",icon:"mdi-domain",path:"/business"},{name:"Department",icon:"mdi-briefcase-account-outline",path:"/department"}]}},computed:Object(c["a"])(Object(c["a"])({},Object(i["d"])({user:function(e){return e.auth.user}})),{},{displayName:function(){if(this.user&&this.user.displayName){var e=this.user.displayName.trim().length>0;return e?this.user.displayName:this.user.username}return""}}),methods:Object(c["a"])({},Object(i["b"])({logout:"auth/logout",dark:"auth/dark",get:"api/get"})),watch:{"$vuetify.theme.dark":function(e){this.dark(e)}},created:function(){var e=this;return Object(A["a"])(regeneratorRuntime.mark((function n(){var a,t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.$store.state.auth.menu,a.menu_item&&a.menu_item.length&&(e.drawerList=e.$store.state.auth.menu.menu_item),n.next=4,e.get({collection:"department"});case 4:t=n.sent,t.data.docs.forEach((function(n){e.$store.commit(n.type,n._id)}));case 6:case"end":return n.stop()}}),n)})))()}},C=M,x=a("40dc"),O=a("5bc1"),R=a("b0af"),T=a("99d9"),N=a("a523"),P=a("a75b"),B=a("ce7e"),D=a("8860"),V=a("da13"),L=a("1800"),_=a("8270"),G=a("5d23"),j=a("34c3"),E=a("e449"),F=a("f774"),U=a("2fa4"),K=a("b73d"),$=a("2a7f"),H=Object(d["a"])(C,w,S,!1,null,null,null),q=H.exports;l()(H,{VApp:f["a"],VAppBar:x["a"],VAppBarNavIcon:O["a"],VBtn:p["a"],VCard:R["a"],VCardActions:T["b"],VContainer:N["a"],VContent:P["a"],VDivider:B["a"],VIcon:h["a"],VList:D["a"],VListItem:V["a"],VListItemAction:L["a"],VListItemAvatar:_["a"],VListItemContent:G["g"],VListItemIcon:j["a"],VListItemSubtitle:G["j"],VListItemTitle:G["k"],VMenu:E["a"],VNavigationDrawer:F["a"],VSpacer:U["a"],VSwitch:K["a"],VToolbarTitle:$["c"]});var z=a("4360");t["a"].use(y["a"]);var J=[{path:"/login",name:"Login",component:function(){return a.e("chunk-6e999f0f").then(a.bind(null,"a55b"))}},{path:"/screen",name:"Screen",component:function(){return a.e("chunk-7f2dd66f").then(a.bind(null,"b30e"))}},{path:"/screen/:data",name:"ScreenView",component:function(){return a.e("chunk-2d0b3dec").then(a.bind(null,"29e4"))}},{path:"/",component:q,meta:{requierAuth:!0},children:[{path:"/",name:"Dashboard",component:function(){return Promise.all([a.e("chunk-3730d4f7"),a.e("chunk-3f4ead26")]).then(a.bind(null,"7277"))},meta:{requierAuth:!0}},{path:"/profile",name:"Profile",component:function(){return a.e("chunk-2d217357").then(a.bind(null,"c66d"))},meta:{requierAuth:!0}},{path:"/404",name:"404",component:function(){return a.e("chunk-2d0e95df").then(a.bind(null,"8cdb"))}},{path:"/retention",name:"Retention",component:function(){return Promise.all([a.e("chunk-5538d51c"),a.e("chunk-3730d4f7"),a.e("chunk-972748b4"),a.e("chunk-b046b0d0")]).then(a.bind(null,"751b"))},meta:{requierAuth:!0}},{path:"/ftd",name:"FTD",component:function(){return Promise.all([a.e("chunk-5538d51c"),a.e("chunk-3730d4f7"),a.e("chunk-972748b4"),a.e("chunk-b01cf3e4")]).then(a.bind(null,"e280"))},meta:{requierAuth:!0}},{path:"/redeposit",name:"Redeposit",component:function(){return Promise.all([a.e("chunk-5538d51c"),a.e("chunk-c8cb5782")]).then(a.bind(null,"b13d"))},meta:{requierAuth:!0}},{path:"/report",name:"Report",component:function(){return Promise.all([a.e("chunk-5538d51c"),a.e("chunk-3730d4f7"),a.e("chunk-972748b4"),a.e("chunk-4ec6eace")]).then(a.bind(null,"762c"))},meta:{requierAuth:!0}},{path:"/report2",name:"Report2",component:function(){return Promise.all([a.e("chunk-5538d51c"),a.e("chunk-3730d4f7"),a.e("chunk-972748b4"),a.e("chunk-b01faab8")]).then(a.bind(null,"b1e1"))},meta:{requierAuth:!0}},{path:"/:collection",name:"Items",component:function(){return Promise.all([a.e("chunk-5538d51c"),a.e("chunk-3730d4f7"),a.e("chunk-972748b4"),a.e("chunk-6978b90c")]).then(a.bind(null,"29ce"))},meta:{requierAuth:!0}},{path:"/:collection/new",name:"Item",component:function(){return Promise.all([a.e("chunk-5538d51c"),a.e("chunk-3730d4f7"),a.e("chunk-972748b4"),a.e("chunk-4ec75e8e")]).then(a.bind(null,"5cce"))},meta:{requierAuth:!0}},{path:"/:collection/:id",name:"ItemUpdate",component:function(){return Promise.all([a.e("chunk-5538d51c"),a.e("chunk-3730d4f7"),a.e("chunk-972748b4"),a.e("chunk-4ec75e8e")]).then(a.bind(null,"5cce"))},meta:{requierAuth:!0}}]}],Y=new y["a"]({mode:"history",base:"/",routes:J});Y.beforeEach((function(e,n,a){var t=e.meta.requierAuth;if(t&&!z["a"].getters["auth/isAuthenticated"])return a("/login");if("Login"==e.name&&z["a"].getters["auth/isAuthenticated"])return a("/");if(e.params.collection){var r=z["a"].state.auth.user.rights;if(!r||r&&!r.length)return a();var o=r.filter((function(n){return n.collection==e.params.collection}));return o.length?o[0].read.value?a():a("/404"):a()}return a()}));var Z=Y,W=a("f309");t["a"].use(W["a"]);var Q=new W["a"]({}),X=a("9eed"),ee=a.n(X),ne=(a("99af"),a("d81d"),a("a9e3"),a("2909")),ae=a("2e17"),te=a("b9b9"),re=a.n(te),oe=a("445d"),ce=a("eea2"),ie={install:function(e){e.prototype.$getNestedValue=ae["a"].getObjectValueByPath.bind(ae["a"]),e.mixin({components:{CountryFlag:ce["a"]},methods:Object(c["a"])(Object(c["a"])({},Object(i["b"])({get:"api/get",save:"api/save",update:"api/update",remove:"api/remove",getItem:"api/getById"})),{},{getFormatArgs:function(e,n){var a=this;return e&&(e=e.map((function(e){return"string"==typeof e&&"$"==e.substr(0,1)?a.$getNestedValue(n,e.substr(1,e.length)):e}))),e||[]}}),computed:{user:function(){return this.$store.state.auth.user}},filters:{dynamic:function(n,a,t){return a?e.filter(a).apply(void 0,[n].concat(Object(ne["a"])(t))):n||"-"},country:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,r=oe["a"].filter((function(n){return n.code==e}));return r.length?n?'<small class=" text-center d-flex" style="width:auto"><span class="flag f-'.concat(e.toLowerCase(),' normal-flag" style="\n                                        transform: scale(').concat(t,');\n                                        margin: -10px -15px;\n                                    "></span>\n                                    ').concat(a?'<span class="align-self-center">'.concat(r[0].name,"</span>"):"","\n                                    \n                                    \n                                    </small>"):r[0].name:e},money:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"USD",a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],t=0==Number(e),r=Number(e)<0,o=r?"red--text":"green--text";return a&&t?"-":'<span class="'.concat(o,'">').concat(ae["a"].money(e,n),"</span>")},date:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dd/mm/yyyy";return e?re()(e,n):"-"},depositType:function(e){return'<i aria-hidden="true" class="v-icon notranslate mdi mdi-bank-transfer-'.concat("wtd"==e?"out":"in","  ").concat("wtd"==e?"red":"green",'--text"></i>')}}})}};t["a"].config.productionTip=!1,t["a"].use(ie),t["a"].use(ee.a,{vuetify:Q});n["default"]=new t["a"]({router:Z,store:z["a"],vuetify:Q,render:function(e){return e(v)}}).$mount("#app")},"89e6":function(e,n,a){"use strict";var t=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("v-input",e._b({style:{width:e.size+"px"}},"v-input",e.$attrs,!1),[a("v-avatar",{attrs:{size:e.size}},[a("v-hover",{staticStyle:{position:"absolute"},scopedSlots:e._u([{key:"default",fn:function(n){var t=n.hover;return[a("v-img",{ref:"img",attrs:{src:e.src}},[a("v-fade-transition",[t?a("v-overlay",{attrs:{absolute:"",color:"#036358"}},[e.value?a("v-btn",{attrs:{icon:""},on:{click:e.removeImg}},[a("v-icon",[e._v("mdi-delete")])],1):a("v-btn",{attrs:{icon:""},on:{click:e.selectImg}},[a("v-icon",[e._v("mdi-camera")])],1)],1):e._e()],1)],1)]}}])})],1)],1)},r=[],o=(a("99af"),a("a9e3"),a("bc3a")),c=a.n(o),i=a("db49"),u=i["a"].baseURL,s=function(){var e=localStorage.getItem("token"),n=c.a.create({baseURL:u,headers:{Authorization:"Bearer "+e}});return n},d={name:"ProfileImage",props:{size:{type:Number,default:75},value:{type:String}},data:function(){return{overlay:!1}},computed:{src:function(){var e="".concat(location.protocol,"//").concat(location.hostname);return this.value?e+":3000"+this.value:"/img/blank-profile-picture.png"}},methods:{removeImg:function(){var e=this,n=s();n.delete("files",{params:{path:this.value}}).then((function(n){console.log(n),e.$emit("input",null)})).catch((function(e){return console.log(e)}))},selectImg:function(){var e=document.createElement("input");e.type="file",e.accept=".jpg,.jpeg,.png",e.onchange=this.onChange,e.click()},onChange:function(e){var n=this;console.log(e);var a=s(),t=e.target.files[0],r=new FormData;r.append("file",t),a.post("files",r,{onUploadProgress:this.onUploadProgress}).then((function(e){n.$emit("input",e.data.path)})).catch((function(e){return console.log(e)}))},onUploadProgress:function(e){var n=Math.round(e.loaded/e.total*100)+"%";console.log(n)}}},m=d,l=a("2877"),f=a("6544"),p=a.n(f),h=a("8212"),b=a("8336"),g=a("0789"),v=a("ce87"),k=a("132d"),y=a("adda"),w=a("b675"),S=a("a797"),A=Object(l["a"])(m,t,r,!1,null,null,null);n["a"]=A.exports;p()(A,{VAvatar:h["a"],VBtn:b["a"],VFadeTransition:g["h"],VHover:v["a"],VIcon:k["a"],VImg:y["a"],VInput:w["a"],VOverlay:S["a"]})},"8a23":function(e,n,a){},db49:function(e,n,a){"use strict";n["a"]={baseURL:"https://mti24-report.com:3000/"}}});
//# sourceMappingURL=app.918a8eb1.js.map