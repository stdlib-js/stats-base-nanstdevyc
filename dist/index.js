"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=n(function(h,i){
var o=require('@stdlib/stats-base-nanvarianceyc/dist').ndarray,f=require('@stdlib/math-base-special-sqrt/dist');function p(e,r,t,a,d){return f(o(e,r,t,a,d))}i.exports=p
});var v=n(function(j,u){
var x=require('@stdlib/strided-base-stride2offset/dist'),l=s();function m(e,r,t,a){return l(e,r,t,a,x(e,a))}u.exports=m
});var y=n(function(k,q){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=v(),R=s();O(c,"ndarray",R);q.exports=c
});var b=y();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
