(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d207b64"],{a263:function(e,r,t){"use strict";t.r(r);var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-progress-linear",{attrs:{height:"20",striped:"",color:e.color,value:e.progress}},[t("span",{class:["caption"]},[e._v(" "+e._s(e.progress.toFixed(2))+"% ")])])},s=[],i=(t("a9e3"),{name:"TableFieldSparkline",props:{field:String,value:Number,item:{type:Object},header:{type:Object}},data:function(){return{height:10,striped:!0}},computed:{color:function(){var e=this.progress;return e<=15?"red":e>15&&e<=30?"orange":e>30&&e<=45?"orange lighten-1":e>45&&e<=60?"yellow darken-1":e>60&&e<=75?"green lighten-2":e>75&&e<=90?"green lighten-1":"green"},progress:function(){var e=this.$getNestedValue(this.item,this.header.value),r=this.$getNestedValue(this.item,this.field);return 100*r/e}}}),a=i,l=t("2877"),o=t("6544"),u=t.n(o),p=t("8e36"),c=Object(l["a"])(a,n,s,!1,null,null,null);r["default"]=c.exports;u()(c,{VProgressLinear:p["a"]})}}]);
//# sourceMappingURL=chunk-2d207b64.de2ea514.js.map