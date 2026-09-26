"use strict";var o=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var n=o(function(g,l){
var c=require('@stdlib/array-base-resolve-getter/dist');function f(e,r,s){var v,i,u,a,t;if(i=e.length,i===0)return[];for(v=c(e),u=[[],[]],t=0;t<i;t++)a=v(e,t),r.call(s,a,t,e)?u[0].push(a):u[1].push(a);return u}l.exports=f
});var p=n();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
