/*! 2016 Baidu Inc. All Rights Reserved */
define("infoConstruct/include/component",["require","infoConstruct/include/util"],function(require){var e=require("infoConstruct/include/util");return{cacheOperator:e.cacheOperator,initWndScroll:function(){var t=e.registerWndScroll();$(window).off("scroll").on("scroll",function(){for(var e=0,n=t.length;n>e;e++)t[e]()})},fnInitCrossWndLink:function(e){if(e&&e.length)for(var t in e)e[t].undelegate("a","click").delegate("a","click",function(){$(this).attr("target","_blank")})},initImgLazyLoad:function(e){e=e||$(document);var t=$(".ys-img-lazy-temporary",e);if(t)t.each(function(e,t){$(t).load(function(){$(this).removeClass("ys-img-lazy-temporary").css("height","100%")}),$(t).attr("src",$(t).data("img-lazy-src"))})},initRegionFilter:function(t){t=t||$(document);var n=this,i=$(".ys-region-filter",t),r=$(".container-filter",i),a=$(".block-region dd",i),o=r.find('input[type="hidden"]'),s=JSON.parse(this.cacheOperator.get("_region_filter_")),l=function(e,t){if(e)for(var n in e)if(e[n].name==t.name)return{data:{parentName:t.name,parentValue:t.value,dataSet:e[n].children}};return{}};i.off("mouseenter").on("mouseenter",function(){$(this).addClass("state-hover"),r.show(),s=JSON.parse(n.cacheOperator.get("_region_filter_")),a.off("click").on("click",function(t){var n=$(this);n.siblings(".item-selected").removeClass("item-selected"),n.addClass("item-selected"),e.renderContainer(".ys-region-filter .block-city","#Template_Region_Filter",l(s.allRegion,{name:n.find("a").text(),value:n.find("a").data("value")}))}),r.find('.block-region [data-value="'+o.attr("data-provid")+'"]').click()}).off("mouseleave").on("mouseleave",function(){$(this).removeClass("state-hover"),r.hide(),r.find('.block-region [data-value="'+o.attr("data-provid")+'"]').click()})},initCatlog:function(t,n){var i=this;$(document).undelegate("[data-catlog-click]","click").delegate("[data-catlog-click]","click",{path:t,maq:n},function(t){var n=$(this),r="",a=t.target.tagName;if("a"==a&&n.attr("href"))r=n.attr("href");else r=document.location.href;var o={url:encodeURI(r),txt:n.text().replace(/[\r\n\s]/g,""),rsv:{axisX:n.offset().left,axisY:n.offset().top}};e.doCatlog(t.data.path,$.extend(t.data.maq,JSON.parse($(this).attr("data-catlog-click")||"{}"),i.calcDomXpath(this),o))}),e.doCatlog(t,$.extend(n,{act:"pv"}))},calcDomXpath:function(e){var exports={};for(exports.xpath="";e&&1==e.nodeType;e=e.parentNode){for(var t=1,n=e.previousSibling;n;n=n.previousSibling)if(1==n.nodeType&&n.tagName==e.tagName)t++;var i=e.tagName.toLowerCase();if(i+="["+t+"]",exports.xpath="-"+i+exports.xpath,!exports.mod&&e.getAttribute("data-mod"))exports.mod=e.getAttribute("data-mod")}return exports.xpath=exports.xpath.replace("-html[1]-body[1]-","html-body-"),exports}}});