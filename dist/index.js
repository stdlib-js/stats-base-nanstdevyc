"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=t(function(h,s){
var o=require('@stdlib/stats-base-nanvarianceyc/dist'),p=require('@stdlib/math-base-special-sqrt/dist');function x(e,r,a,n){return p(o(e,r,a,n))}s.exports=x
});var c=t(function(j,u){
var f=require('@stdlib/stats-base-nanvarianceyc/dist').ndarray,l=require('@stdlib/math-base-special-sqrt/dist');function m(e,r,a,n,d){return l(f(e,r,a,n,d))}u.exports=m
});var y=t(function(k,q){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=i(),R=c();O(v,"ndarray",R);q.exports=v
});var b=y();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
