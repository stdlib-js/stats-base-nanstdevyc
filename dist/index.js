"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=i(function(R,s){
var y=require('@stdlib/stats-base-nanvarianceyc/dist').ndarray,d=require('@stdlib/math-base-special-sqrt/dist');function o(e,r,n,a,q){return d(y(e,r,n,a,q))}s.exports=o
});var v=i(function(b,u){
var f=require('@stdlib/strided-base-stride2offset/dist'),p=t();function x(e,r,n,a){return p(e,r,n,a,f(e,a))}u.exports=x
});var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=v(),m=t();l(c,"ndarray",m);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
