(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b382a"],{"294a":function(n,t,a){"use strict";a("1bc7");var e=a("b775");function c(n){return Object(e["a"])({url:"/admin/dict/type/"+n,method:"get"})}a.d(t,"a",(function(){return u}));var u={methods:{dict:function(n,t){c(n).then((function(n){var a=JSON.parse(JSON.stringify(n.data));a.forEach((function(n){t.push({value:parseInt(n.value),label:n.label})}))}))}}}}}]);