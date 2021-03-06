// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());

/**
* @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
!function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=t.elements;return"string"==typeof a?a.split(" "):a}function e(a,b){var c=t.elements;"string"!=typeof c&&(c=c.join(" ")),"string"!=typeof a&&(a=a.join(" ")),t.elements=c+" "+a,j(b)}function f(a){var b=s[a[q]];return b||(b={},r++,a[q]=r,s[r]=b),b}function g(a,c,d){if(c||(c=b),l)return c.createElement(a);d||(d=f(c));var e;return e=d.cache[a]?d.cache[a].cloneNode():p.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!e.canHaveChildren||o.test(a)||e.tagUrn?e:d.frag.appendChild(e)}function h(a,c){if(a||(a=b),l)return a.createDocumentFragment();c=c||f(a);for(var e=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)e.createElement(h[g]);return e}function i(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return t.shivMethods?g(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-:]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(t,b.frag)}function j(a){a||(a=b);var d=f(a);return!t.shivCSS||k||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||i(a,d),a}var k,l,m="3.7.3",n=a.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,q="_html5shiv",r=0,s={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",k="hidden"in a,l=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){k=!0,l=!0}}();var t={elements:n.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:m,shivCSS:n.shivCSS!==!1,supportsUnknownElements:l,shivMethods:n.shivMethods!==!1,type:"default",shivDocument:j,createElement:g,createDocumentFragment:h,addElements:e};a.html5=t,j(b),"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:this,document);

/* PLUGINS */

/*!
* jQuery Cycle Plugin (with Transition Definitions)
* Examples and documentation at: http://jquery.malsup.com/cycle/
* Copyright (c) 2007-2013 M. Alsup
* Version: 3.0.3 (11-JUL-2013)
* Dual licensed under the MIT and GPL licenses.
* http://jquery.malsup.com/license.html
* Requires: jQuery v1.7.1 or later
*/
;(function(c,d){var b="3.0.3";function g(t){if(c.fn.cycle.debug){f(t)}}function f(){if(window.console&&console.log){console.log("[cycle] "+Array.prototype.join.call(arguments," "))}}c.expr[":"].paused=function(s){return s.cyclePause};c.fn.cycle=function(t,s){var u={s:this.selector,c:this.context};if(this.length===0&&t!="stop"){if(!c.isReady&&u.s){f("DOM not ready, queuing slideshow");c(function(){c(u.s,u.c).cycle(t,s)});return this}f("terminating; zero elements found by selector"+(c.isReady?"":" (DOM not ready)"));return this}return this.each(function(){var y=l(this,t,s);if(y===false){return}y.updateActivePagerLink=y.updateActivePagerLink||c.fn.cycle.updateActivePagerLink;if(this.cycleTimeout){clearTimeout(this.cycleTimeout)}this.cycleTimeout=this.cyclePause=0;this.cycleStop=0;var z=c(this);var A=y.slideExpr?c(y.slideExpr,this):z.children();var w=A.get();if(w.length<2){f("terminating; too few slides: "+w.length);return}var v=q(z,A,w,y,u);if(v===false){return}var x=v.continuous?10:m(w[v.currSlide],w[v.nextSlide],v,!v.backwards);if(x){x+=(v.delay||0);if(x<10){x=10}g("first timeout: "+x);this.cycleTimeout=setTimeout(function(){n(w,v,0,!y.backwards)},x)}})};function k(s,v,u){var w=c(s).data("cycle.opts");if(!w){return}var t=!!s.cyclePause;if(t&&w.paused){w.paused(s,w,v,u)}else{if(!t&&w.resumed){w.resumed(s,w,v,u)}}}function l(s,v,t){if(s.cycleStop===d){s.cycleStop=0}if(v===d||v===null){v={}}if(v.constructor==String){switch(v){case"destroy":case"stop":var x=c(s).data("cycle.opts");if(!x){return false}s.cycleStop++;if(s.cycleTimeout){clearTimeout(s.cycleTimeout)}s.cycleTimeout=0;if(x.elements){c(x.elements).stop()}c(s).removeData("cycle.opts");if(v=="destroy"){r(s,x)}return false;case"toggle":s.cyclePause=(s.cyclePause===1)?0:1;w(s.cyclePause,t,s);k(s);return false;case"pause":s.cyclePause=1;k(s);return false;case"resume":s.cyclePause=0;w(false,t,s);k(s);return false;case"prev":case"next":x=c(s).data("cycle.opts");if(!x){f('options not found, "prev/next" ignored');return false}if(typeof t=="string"){x.oneTimeFx=t}c.fn.cycle[v](x);return false;default:v={fx:v}}return v}else{if(v.constructor==Number){var u=v;v=c(s).data("cycle.opts");if(!v){f("options not found, can not advance slide");return false}if(u<0||u>=v.elements.length){f("invalid slide index: "+u);return false}v.nextSlide=u;if(s.cycleTimeout){clearTimeout(s.cycleTimeout);s.cycleTimeout=0}if(typeof t=="string"){v.oneTimeFx=t}n(v.elements,v,1,u>=v.currSlide);return false}}return v;function w(z,A,y){if(!z&&A===true){var B=c(y).data("cycle.opts");if(!B){f("options not found, can not resume");return false}if(y.cycleTimeout){clearTimeout(y.cycleTimeout);y.cycleTimeout=0}n(B.elements,B,1,!B.backwards)}}}function e(s,t){if(!c.support.opacity&&t.cleartype&&s.style.filter){try{s.style.removeAttribute("filter")}catch(u){}}}function r(s,t){if(t.next){c(t.next).unbind(t.prevNextEvent)}if(t.prev){c(t.prev).unbind(t.prevNextEvent)}if(t.pager||t.pagerAnchorBuilder){c.each(t.pagerAnchors||[],function(){this.unbind().remove()})}t.pagerAnchors=null;c(s).unbind("mouseenter.cycle mouseleave.cycle");if(t.destroy){t.destroy(t)}}function q(C,Q,z,y,J){var s;var H=c.extend({},c.fn.cycle.defaults,y||{},c.metadata?C.metadata():c.meta?C.data():{});var F=c.isFunction(C.data)?C.data(H.metaAttr):null;if(F){H=c.extend(H,F)}if(H.autostop){H.countdown=H.autostopCount||z.length}var u=C[0];C.data("cycle.opts",H);H.$cont=C;H.stopCount=u.cycleStop;H.elements=z;H.before=H.before?[H.before]:[];H.after=H.after?[H.after]:[];if(!c.support.opacity&&H.cleartype){H.after.push(function(){e(this,H)})}if(H.continuous){H.after.push(function(){n(z,H,0,!H.backwards)})}i(H);if(!c.support.opacity&&H.cleartype&&!H.cleartypeNoBg){a(Q)}if(C.css("position")=="static"){C.css("position","relative")}if(H.width){C.width(H.width)}if(H.height&&H.height!="auto"){C.height(H.height)}if(H.startingSlide!==d){H.startingSlide=parseInt(H.startingSlide,10);if(H.startingSlide>=z.length||H.startSlide<0){H.startingSlide=0}else{s=true}}else{if(H.backwards){H.startingSlide=z.length-1}else{H.startingSlide=0}}if(H.random){H.randomMap=[];for(var O=0;O<z.length;O++){H.randomMap.push(O)}H.randomMap.sort(function(S,w){return Math.random()-0.5});if(s){for(var M=0;M<z.length;M++){if(H.startingSlide==H.randomMap[M]){H.randomIndex=M}}}else{H.randomIndex=1;H.startingSlide=H.randomMap[1]}}else{if(H.startingSlide>=z.length){H.startingSlide=0}}H.currSlide=H.startingSlide||0;var B=H.startingSlide;Q.css({position:"absolute",top:0,left:0}).hide().each(function(w){var S;if(H.backwards){S=B?w<=B?z.length+(w-B):B-w:z.length-w}else{S=B?w>=B?z.length-(w-B):B-w:z.length-w}c(this).css("z-index",S)});c(z[B]).css("opacity",1).show();e(z[B],H);if(H.fit){if(!H.aspect){if(H.width){Q.width(H.width)}if(H.height&&H.height!="auto"){Q.height(H.height)}}else{Q.each(function(){var S=c(this);var w=(H.aspect===true)?S.width()/S.height():H.aspect;if(H.width&&S.width()!=H.width){S.width(H.width);S.height(H.width/w)}if(H.height&&S.height()<H.height){S.height(H.height);S.width(H.height*w)}})}}if(H.center&&((!H.fit)||H.aspect)){Q.each(function(){var w=c(this);w.css({"margin-left":H.width?((H.width-w.width())/2)+"px":0,"margin-top":H.height?((H.height-w.height())/2)+"px":0})})}if(H.center&&!H.fit&&!H.slideResize){Q.each(function(){var w=c(this);w.css({"margin-left":H.width?((H.width-w.width())/2)+"px":0,"margin-top":H.height?((H.height-w.height())/2)+"px":0})})}var I=(H.containerResize||H.containerResizeHeight)&&C.innerHeight()<1;if(I){var A=0,G=0;for(var L=0;L<z.length;L++){var t=c(z[L]),R=t[0],E=t.outerWidth(),P=t.outerHeight();if(!E){E=R.offsetWidth||R.width||t.attr("width")}if(!P){P=R.offsetHeight||R.height||t.attr("height")}A=E>A?E:A;G=P>G?P:G}if(H.containerResize&&A>0&&G>0){C.css({width:A+"px",height:G+"px"})}if(H.containerResizeHeight&&G>0){C.css({height:G+"px"})}}var x=false;if(H.pause){C.bind("mouseenter.cycle",function(){x=true;this.cyclePause++;k(u,true)}).bind("mouseleave.cycle",function(){if(x){this.cyclePause--}k(u,true)})}if(o(H)===false){return false}var v=false;y.requeueAttempts=y.requeueAttempts||0;Q.each(function(){var w=c(this);this.cycleH=(H.fit&&H.height)?H.height:(w.height()||this.offsetHeight||this.height||w.attr("height")||0);this.cycleW=(H.fit&&H.width)?H.width:(w.width()||this.offsetWidth||this.width||w.attr("width")||0);if(w.is("img")){var S=(this.cycleH===0&&this.cycleW===0&&!this.complete);if(S){if(J.s&&H.requeueOnImageNotLoaded&&++y.requeueAttempts<100){f(y.requeueAttempts," - img slide not loaded, requeuing slideshow: ",this.src,this.cycleW,this.cycleH);setTimeout(function(){c(J.s,J.c).cycle(y)},H.requeueTimeout);v=true;return false}else{f("could not determine size of image: "+this.src,this.cycleW,this.cycleH)}}}return true});if(v){return false}H.cssBefore=H.cssBefore||{};H.cssAfter=H.cssAfter||{};H.cssFirst=H.cssFirst||{};H.animIn=H.animIn||{};H.animOut=H.animOut||{};Q.not(":eq("+B+")").css(H.cssBefore);c(Q[B]).css(H.cssFirst);if(H.timeout){H.timeout=parseInt(H.timeout,10);if(H.speed.constructor==String){H.speed=c.fx.speeds[H.speed]||parseInt(H.speed,10)}if(!H.sync){H.speed=H.speed/2}var K=H.fx=="none"?0:H.fx=="shuffle"?500:250;while((H.timeout-H.speed)<K){H.timeout+=H.speed}}if(H.easing){H.easeIn=H.easeOut=H.easing}if(!H.speedIn){H.speedIn=H.speed}if(!H.speedOut){H.speedOut=H.speed}H.slideCount=z.length;H.currSlide=H.lastSlide=B;if(H.random){if(++H.randomIndex==z.length){H.randomIndex=0}H.nextSlide=H.randomMap[H.randomIndex]}else{if(H.backwards){H.nextSlide=H.startingSlide===0?(z.length-1):H.startingSlide-1}else{H.nextSlide=H.startingSlide>=(z.length-1)?0:H.startingSlide+1}}if(!H.multiFx){var N=c.fn.cycle.transitions[H.fx];if(c.isFunction(N)){N(C,Q,H)}else{if(H.fx!="custom"&&!H.multiFx){f("unknown transition: "+H.fx,"; slideshow terminating");return false}}}var D=Q[B];if(!H.skipInitializationCallbacks){if(H.before.length){H.before[0].apply(D,[D,D,H,true])}if(H.after.length){H.after[0].apply(D,[D,D,H,true])}}if(H.next){c(H.next).bind(H.prevNextEvent,function(){return h(H,1)})}if(H.prev){c(H.prev).bind(H.prevNextEvent,function(){return h(H,0)})}if(H.pager||H.pagerAnchorBuilder){p(z,H)}j(H,z);return H}function i(s){s.original={before:[],after:[]};s.original.cssBefore=c.extend({},s.cssBefore);s.original.cssAfter=c.extend({},s.cssAfter);s.original.animIn=c.extend({},s.animIn);s.original.animOut=c.extend({},s.animOut);c.each(s.before,function(){s.original.before.push(this)});c.each(s.after,function(){s.original.after.push(this)})}function o(y){var w,u,t=c.fn.cycle.transitions;if(y.fx.indexOf(",")>0){y.multiFx=true;y.fxs=y.fx.replace(/\s*/g,"").split(",");for(w=0;w<y.fxs.length;w++){var x=y.fxs[w];u=t[x];if(!u||!t.hasOwnProperty(x)||!c.isFunction(u)){f("discarding unknown transition: ",x);y.fxs.splice(w,1);w--}}if(!y.fxs.length){f("No valid transitions named; slideshow terminating.");return false}}else{if(y.fx=="all"){y.multiFx=true;y.fxs=[];for(var z in t){if(t.hasOwnProperty(z)){u=t[z];if(t.hasOwnProperty(z)&&c.isFunction(u)){y.fxs.push(z)}}}}}if(y.multiFx&&y.randomizeEffects){var v=Math.floor(Math.random()*20)+30;for(w=0;w<v;w++){var s=Math.floor(Math.random()*y.fxs.length);y.fxs.push(y.fxs.splice(s,1)[0])}g("randomized fx sequence: ",y.fxs)}return true}function j(t,s){t.addSlide=function(v,w){var u=c(v),x=u[0];if(!t.autostopCount){t.countdown++}s[w?"unshift":"push"](x);if(t.els){t.els[w?"unshift":"push"](x)}t.slideCount=s.length;if(t.random){t.randomMap.push(t.slideCount-1);t.randomMap.sort(function(z,y){return Math.random()-0.5})}u.css("position","absolute");u[w?"prependTo":"appendTo"](t.$cont);if(w){t.currSlide++;t.nextSlide++}if(!c.support.opacity&&t.cleartype&&!t.cleartypeNoBg){a(u)}if(t.fit&&t.width){u.width(t.width)}if(t.fit&&t.height&&t.height!="auto"){u.height(t.height)}x.cycleH=(t.fit&&t.height)?t.height:u.height();x.cycleW=(t.fit&&t.width)?t.width:u.width();u.css(t.cssBefore);if(t.pager||t.pagerAnchorBuilder){c.fn.cycle.createPagerAnchor(s.length-1,x,c(t.pager),s,t)}if(c.isFunction(t.onAddSlide)){t.onAddSlide(u)}else{u.hide()}}}c.fn.cycle.resetState=function(t,s){s=s||t.fx;t.before=[];t.after=[];t.cssBefore=c.extend({},t.original.cssBefore);t.cssAfter=c.extend({},t.original.cssAfter);t.animIn=c.extend({},t.original.animIn);t.animOut=c.extend({},t.original.animOut);t.fxFn=null;c.each(t.original.before,function(){t.before.push(this)});c.each(t.original.after,function(){t.after.push(this)});var u=c.fn.cycle.transitions[s];if(c.isFunction(u)){u(t.$cont,c(t.elements),t)}};function n(y,s,x,A){var v=s.$cont[0],D=y[s.currSlide],B=y[s.nextSlide];if(x&&s.busy&&s.manualTrump){g("manualTrump in go(), stopping active transition");c(y).stop(true,true);s.busy=0;clearTimeout(v.cycleTimeout)}if(s.busy){g("transition active, ignoring new tx request");return}if(v.cycleStop!=s.stopCount||v.cycleTimeout===0&&!x){return}if(!x&&!v.cyclePause&&!s.bounce&&((s.autostop&&(--s.countdown<=0))||(s.nowrap&&!s.random&&s.nextSlide<s.currSlide))){if(s.end){s.end(s)}return}var z=false;if((x||!v.cyclePause)&&(s.nextSlide!=s.currSlide)){z=true;var w=s.fx;D.cycleH=D.cycleH||c(D).height();D.cycleW=D.cycleW||c(D).width();B.cycleH=B.cycleH||c(B).height();B.cycleW=B.cycleW||c(B).width();if(s.multiFx){if(A&&(s.lastFx===d||++s.lastFx>=s.fxs.length)){s.lastFx=0}else{if(!A&&(s.lastFx===d||--s.lastFx<0)){s.lastFx=s.fxs.length-1}}w=s.fxs[s.lastFx]}if(s.oneTimeFx){w=s.oneTimeFx;s.oneTimeFx=null}c.fn.cycle.resetState(s,w);if(s.before.length){c.each(s.before,function(E,F){if(v.cycleStop!=s.stopCount){return}F.apply(B,[D,B,s,A])})}var t=function(){s.busy=0;c.each(s.after,function(E,F){if(v.cycleStop!=s.stopCount){return}F.apply(B,[D,B,s,A])});if(!v.cycleStop){C()}};g("tx firing("+w+"); currSlide: "+s.currSlide+"; nextSlide: "+s.nextSlide);s.busy=1;if(s.fxFn){s.fxFn(D,B,s,t,A,x&&s.fastOnEvent)}else{if(c.isFunction(c.fn.cycle[s.fx])){c.fn.cycle[s.fx](D,B,s,t,A,x&&s.fastOnEvent)}else{c.fn.cycle.custom(D,B,s,t,A,x&&s.fastOnEvent)}}}else{C()}if(z||s.nextSlide==s.currSlide){var u;s.lastSlide=s.currSlide;if(s.random){s.currSlide=s.nextSlide;if(++s.randomIndex==y.length){s.randomIndex=0;s.randomMap.sort(function(F,E){return Math.random()-0.5})}s.nextSlide=s.randomMap[s.randomIndex];if(s.nextSlide==s.currSlide){s.nextSlide=(s.currSlide==s.slideCount-1)?0:s.currSlide+1}}else{if(s.backwards){u=(s.nextSlide-1)<0;if(u&&s.bounce){s.backwards=!s.backwards;s.nextSlide=1;s.currSlide=0}else{s.nextSlide=u?(y.length-1):s.nextSlide-1;s.currSlide=u?0:s.nextSlide+1}}else{u=(s.nextSlide+1)==y.length;if(u&&s.bounce){s.backwards=!s.backwards;s.nextSlide=y.length-2;s.currSlide=y.length-1}else{s.nextSlide=u?0:s.nextSlide+1;s.currSlide=u?y.length-1:s.nextSlide-1}}}}if(z&&s.pager){s.updateActivePagerLink(s.pager,s.currSlide,s.activePagerClass)}function C(){var E=0,F=s.timeout;if(s.timeout&&!s.continuous){E=m(y[s.currSlide],y[s.nextSlide],s,A);if(s.fx=="shuffle"){E-=s.speedOut}}else{if(s.continuous&&v.cyclePause){E=10}}if(E>0){v.cycleTimeout=setTimeout(function(){n(y,s,0,!s.backwards)},E)}}}c.fn.cycle.updateActivePagerLink=function(s,u,t){c(s).each(function(){c(this).children().removeClass(t).eq(u).addClass(t)})};function m(x,v,w,u){if(w.timeoutFn){var s=w.timeoutFn.call(x,x,v,w,u);while(w.fx!="none"&&(s-w.speed)<250){s+=w.speed}g("calculated timeout: "+s+"; speed: "+w.speed);if(s!==false){return s}}return w.timeout}c.fn.cycle.next=function(s){h(s,1)};c.fn.cycle.prev=function(s){h(s,0)};function h(v,u){var y=u?1:-1;var t=v.elements;var x=v.$cont[0],w=x.cycleTimeout;if(w){clearTimeout(w);x.cycleTimeout=0}if(v.random&&y<0){v.randomIndex--;if(--v.randomIndex==-2){v.randomIndex=t.length-2}else{if(v.randomIndex==-1){v.randomIndex=t.length-1}}v.nextSlide=v.randomMap[v.randomIndex]}else{if(v.random){v.nextSlide=v.randomMap[v.randomIndex]}else{v.nextSlide=v.currSlide+y;if(v.nextSlide<0){if(v.nowrap){return false}v.nextSlide=t.length-1}else{if(v.nextSlide>=t.length){if(v.nowrap){return false}v.nextSlide=0}}}}var s=v.onPrevNextEvent||v.prevNextClick;if(c.isFunction(s)){s(y>0,v.nextSlide,t[v.nextSlide])}n(t,v,1,u);return false}function p(t,u){var s=c(u.pager);c.each(t,function(v,w){c.fn.cycle.createPagerAnchor(v,w,s,t,u)});u.updateActivePagerLink(u.pager,u.startingSlide,u.activePagerClass)}c.fn.cycle.createPagerAnchor=function(x,u,z,w,t){var A;if(c.isFunction(t.pagerAnchorBuilder)){A=t.pagerAnchorBuilder(x,u);g("pagerAnchorBuilder("+x+", el) returned: "+A)}else{A='<a href="#">'+(x+1)+"</a>"}if(!A){return}var v=c(A);if(v.parents("body").length===0){var y=[];if(z.length>1){z.each(function(){var D=v.clone(true);c(this).append(D);y.push(D[0])});v=c(y)}else{v.appendTo(z)}}t.pagerAnchors=t.pagerAnchors||[];t.pagerAnchors.push(v);var B=function(G){G.preventDefault();t.nextSlide=x;var F=t.$cont[0],E=F.cycleTimeout;if(E){clearTimeout(E);F.cycleTimeout=0}var D=t.onPagerEvent||t.pagerClick;if(c.isFunction(D)){D(t.nextSlide,w[t.nextSlide])}n(w,t,1,t.currSlide<x)};if(/mouseenter|mouseover/i.test(t.pagerEvent)){v.hover(B,function(){})}else{v.bind(t.pagerEvent,B)}if(!/^click/.test(t.pagerEvent)&&!t.allowPagerClickBubble){v.bind("click.cycle",function(){return false})}var C=t.$cont[0];var s=false;if(t.pauseOnPagerHover){v.hover(function(){s=true;C.cyclePause++;k(C,true,true)},function(){if(s){C.cyclePause--}k(C,true,true)})}};c.fn.cycle.hopsFromLast=function(v,u){var t,s=v.lastSlide,w=v.currSlide;if(u){t=w>s?w-s:v.slideCount-s}else{t=w<s?s-w:s+v.slideCount-w}return t};function a(u){g("applying clearType background-color hack");function t(v){v=parseInt(v,10).toString(16);return v.length<2?"0"+v:v}function s(y){for(;y&&y.nodeName.toLowerCase()!="html";y=y.parentNode){var w=c.css(y,"background-color");if(w&&w.indexOf("rgb")>=0){var x=w.match(/\d+/g);return"#"+t(x[0])+t(x[1])+t(x[2])}if(w&&w!="transparent"){return w}}return"#ffffff"}u.each(function(){c(this).css("background-color",s(this))})}c.fn.cycle.commonReset=function(y,v,x,t,u,s){c(x.elements).not(y).hide();if(typeof x.cssBefore.opacity=="undefined"){x.cssBefore.opacity=1}x.cssBefore.display="block";if(x.slideResize&&t!==false&&v.cycleW>0){x.cssBefore.width=v.cycleW}if(x.slideResize&&u!==false&&v.cycleH>0){x.cssBefore.height=v.cycleH}x.cssAfter=x.cssAfter||{};x.cssAfter.display="none";c(y).css("zIndex",x.slideCount+(s===true?1:0));c(v).css("zIndex",x.slideCount+(s===true?0:1))};c.fn.cycle.custom=function(G,A,s,w,y,u){var F=c(G),B=c(A);var v=s.speedIn,E=s.speedOut,x=s.easeIn,D=s.easeOut,t=s.animInDelay,z=s.animOutDelay;B.css(s.cssBefore);if(u){if(typeof u=="number"){v=E=u}else{v=E=1}x=D=null}var C=function(){B.delay(t).animate(s.animIn,v,x,function(){w()})};F.delay(z).animate(s.animOut,E,D,function(){F.css(s.cssAfter);if(!s.sync){C()}});if(s.sync){C()}};c.fn.cycle.transitions={fade:function(t,u,s){u.not(":eq("+s.currSlide+")").css("opacity",0);s.before.push(function(x,v,w){c.fn.cycle.commonReset(x,v,w);w.cssBefore.opacity=0});s.animIn={opacity:1};s.animOut={opacity:0};s.cssBefore={top:0,left:0}}};c.fn.cycle.ver=function(){return b};c.fn.cycle.defaults={activePagerClass:"activeSlide",after:null,allowPagerClickBubble:false,animIn:null,animInDelay:0,animOut:null,animOutDelay:0,aspect:false,autostop:0,autostopCount:0,backwards:false,before:null,center:null,cleartype:!c.support.opacity,cleartypeNoBg:false,containerResize:1,containerResizeHeight:0,continuous:0,cssAfter:null,cssBefore:null,delay:0,easeIn:null,easeOut:null,easing:null,end:null,fastOnEvent:0,fit:0,fx:"fade",fxFn:null,height:"auto",manualTrump:true,metaAttr:"cycle",next:null,nowrap:0,onPagerEvent:null,onPrevNextEvent:null,pager:null,pagerAnchorBuilder:null,pagerEvent:"click.cycle",pause:0,pauseOnPagerHover:0,prev:null,prevNextEvent:"click.cycle",random:0,randomizeEffects:1,requeueOnImageNotLoaded:true,requeueTimeout:250,rev:0,shuffle:null,skipInitializationCallbacks:false,slideExpr:null,slideResize:1,speed:1000,speedIn:null,speedOut:null,startingSlide:d,sync:1,timeout:4000,timeoutFn:null,updateActivePagerLink:null,width:null}})(jQuery);
/*!
* jQuery Cycle Plugin Transition Definitions
* This script is a plugin for the jQuery Cycle Plugin
* Examples and documentation at: http://malsup.com/jquery/cycle/
* Copyright (c) 2007-2010 M. Alsup
* Version:  2.73
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*/
(function(a){a.fn.cycle.transitions.none=function(c,d,b){b.fxFn=function(g,e,f,h){a(e).show();a(g).hide();h()}};a.fn.cycle.transitions.fadeout=function(c,d,b){d.not(":eq("+b.currSlide+")").css({display:"block",opacity:1});b.before.push(function(k,i,j,f,g,e){a(k).css("zIndex",j.slideCount+(e!==true?1:0));a(i).css("zIndex",j.slideCount+(e!==true?0:1))});b.animIn.opacity=1;b.animOut.opacity=0;b.cssBefore.opacity=1;b.cssBefore.display="block";b.cssAfter.zIndex=0};a.fn.cycle.transitions.scrollUp=function(d,e,c){d.css("overflow","hidden");c.before.push(a.fn.cycle.commonReset);var b=d.height();c.cssBefore.top=b;c.cssBefore.left=0;c.cssFirst.top=0;c.animIn.top=0;c.animOut.top=-b};a.fn.cycle.transitions.scrollDown=function(d,e,c){d.css("overflow","hidden");c.before.push(a.fn.cycle.commonReset);var b=d.height();c.cssFirst.top=0;c.cssBefore.top=-b;c.cssBefore.left=0;c.animIn.top=0;c.animOut.top=b};a.fn.cycle.transitions.scrollLeft=function(d,e,c){d.css("overflow","hidden");c.before.push(a.fn.cycle.commonReset);var b=d.width();c.cssFirst.left=0;c.cssBefore.left=b;c.cssBefore.top=0;c.animIn.left=0;c.animOut.left=0-b};a.fn.cycle.transitions.scrollRight=function(d,e,c){d.css("overflow","hidden");c.before.push(a.fn.cycle.commonReset);var b=d.width();c.cssFirst.left=0;c.cssBefore.left=-b;c.cssBefore.top=0;c.animIn.left=0;c.animOut.left=b};a.fn.cycle.transitions.scrollHorz=function(c,d,b){c.css("overflow","hidden").width();b.before.push(function(h,f,g,e){if(g.rev){e=!e}a.fn.cycle.commonReset(h,f,g);g.cssBefore.left=e?(f.cycleW-1):(1-f.cycleW);g.animOut.left=e?-h.cycleW:h.cycleW});b.cssFirst.left=0;b.cssBefore.top=0;b.animIn.left=0;b.animOut.top=0};a.fn.cycle.transitions.scrollVert=function(c,d,b){c.css("overflow","hidden");b.before.push(function(h,f,g,e){if(g.rev){e=!e}a.fn.cycle.commonReset(h,f,g);g.cssBefore.top=e?(1-f.cycleH):(f.cycleH-1);g.animOut.top=e?h.cycleH:-h.cycleH});b.cssFirst.top=0;b.cssBefore.left=0;b.animIn.top=0;b.animOut.left=0};a.fn.cycle.transitions.slideX=function(c,d,b){b.before.push(function(g,e,f){a(f.elements).not(g).hide();a.fn.cycle.commonReset(g,e,f,false,true);f.animIn.width=e.cycleW});b.cssBefore.left=0;b.cssBefore.top=0;b.cssBefore.width=0;b.animIn.width="show";b.animOut.width=0};a.fn.cycle.transitions.slideY=function(c,d,b){b.before.push(function(g,e,f){a(f.elements).not(g).hide();a.fn.cycle.commonReset(g,e,f,true,false);f.animIn.height=e.cycleH});b.cssBefore.left=0;b.cssBefore.top=0;b.cssBefore.height=0;b.animIn.height="show";b.animOut.height=0};a.fn.cycle.transitions.shuffle=function(e,f,d){var c,b=e.css("overflow","visible").width();f.css({left:0,top:0});d.before.push(function(i,g,h){a.fn.cycle.commonReset(i,g,h,true,true,true)});if(!d.speedAdjusted){d.speed=d.speed/2;d.speedAdjusted=true}d.random=0;d.shuffle=d.shuffle||{left:-b,top:15};d.els=[];for(c=0;c<f.length;c++){d.els.push(f[c])}for(c=0;c<d.currSlide;c++){d.els.push(d.els.shift())}d.fxFn=function(m,j,l,g,i){if(l.rev){i=!i}var h=i?a(m):a(j);a(j).css(l.cssBefore);var k=l.slideCount;h.animate(l.shuffle,l.speedIn,l.easeIn,function(){var o=a.fn.cycle.hopsFromLast(l,i);for(var p=0;p<o;p++){if(i){l.els.push(l.els.shift())}else{l.els.unshift(l.els.pop())}}if(i){for(var q=0,n=l.els.length;q<n;q++){a(l.els[q]).css("z-index",n-q+k)}}else{var r=a(m).css("z-index");h.css("z-index",parseInt(r,10)+1+k)}h.animate({left:0,top:0},l.speedOut,l.easeOut,function(){a(i?this:m).hide();if(g){g()}})})};a.extend(d.cssBefore,{display:"block",opacity:1,top:0,left:0})};a.fn.cycle.transitions.turnUp=function(c,d,b){b.before.push(function(g,e,f){a.fn.cycle.commonReset(g,e,f,true,false);f.cssBefore.top=e.cycleH;f.animIn.height=e.cycleH;f.animOut.width=e.cycleW});b.cssFirst.top=0;b.cssBefore.left=0;b.cssBefore.height=0;b.animIn.top=0;b.animOut.height=0};a.fn.cycle.transitions.turnDown=function(c,d,b){b.before.push(function(g,e,f){a.fn.cycle.commonReset(g,e,f,true,false);f.animIn.height=e.cycleH;f.animOut.top=g.cycleH});b.cssFirst.top=0;b.cssBefore.left=0;b.cssBefore.top=0;b.cssBefore.height=0;b.animOut.height=0};a.fn.cycle.transitions.turnLeft=function(c,d,b){b.before.push(function(g,e,f){a.fn.cycle.commonReset(g,e,f,false,true);f.cssBefore.left=e.cycleW;f.animIn.width=e.cycleW});b.cssBefore.top=0;b.cssBefore.width=0;b.animIn.left=0;b.animOut.width=0};a.fn.cycle.transitions.turnRight=function(c,d,b){b.before.push(function(g,e,f){a.fn.cycle.commonReset(g,e,f,false,true);f.animIn.width=e.cycleW;f.animOut.left=g.cycleW});a.extend(b.cssBefore,{top:0,left:0,width:0});b.animIn.left=0;b.animOut.width=0};a.fn.cycle.transitions.zoom=function(c,d,b){b.before.push(function(g,e,f){a.fn.cycle.commonReset(g,e,f,false,false,true);f.cssBefore.top=e.cycleH/2;f.cssBefore.left=e.cycleW/2;a.extend(f.animIn,{top:0,left:0,width:e.cycleW,height:e.cycleH});a.extend(f.animOut,{width:0,height:0,top:g.cycleH/2,left:g.cycleW/2})});b.cssFirst.top=0;b.cssFirst.left=0;b.cssBefore.width=0;b.cssBefore.height=0};a.fn.cycle.transitions.fadeZoom=function(c,d,b){b.before.push(function(g,e,f){a.fn.cycle.commonReset(g,e,f,false,false);f.cssBefore.left=e.cycleW/2;f.cssBefore.top=e.cycleH/2;a.extend(f.animIn,{top:0,left:0,width:e.cycleW,height:e.cycleH})});b.cssBefore.width=0;b.cssBefore.height=0;b.animOut.opacity=0};a.fn.cycle.transitions.blindX=function(d,e,c){var b=d.css("overflow","hidden").width();c.before.push(function(h,f,g){a.fn.cycle.commonReset(h,f,g);g.animIn.width=f.cycleW;g.animOut.left=h.cycleW});c.cssBefore.left=b;c.cssBefore.top=0;c.animIn.left=0;c.animOut.left=b};a.fn.cycle.transitions.blindY=function(d,e,c){var b=d.css("overflow","hidden").height();c.before.push(function(h,f,g){a.fn.cycle.commonReset(h,f,g);g.animIn.height=f.cycleH;g.animOut.top=h.cycleH});c.cssBefore.top=b;c.cssBefore.left=0;c.animIn.top=0;c.animOut.top=b};a.fn.cycle.transitions.blindZ=function(e,f,d){var c=e.css("overflow","hidden").height();var b=e.width();d.before.push(function(i,g,h){a.fn.cycle.commonReset(i,g,h);h.animIn.height=g.cycleH;h.animOut.top=i.cycleH});d.cssBefore.top=c;d.cssBefore.left=b;d.animIn.top=0;d.animIn.left=0;d.animOut.top=c;d.animOut.left=b};a.fn.cycle.transitions.growX=function(c,d,b){b.before.push(function(g,e,f){a.fn.cycle.commonReset(g,e,f,false,true);f.cssBefore.left=this.cycleW/2;f.animIn.left=0;f.animIn.width=this.cycleW;f.animOut.left=0});b.cssBefore.top=0;b.cssBefore.width=0};a.fn.cycle.transitions.growY=function(c,d,b){b.before.push(function(g,e,f){a.fn.cycle.commonReset(g,e,f,true,false);f.cssBefore.top=this.cycleH/2;f.animIn.top=0;f.animIn.height=this.cycleH;f.animOut.top=0});b.cssBefore.height=0;b.cssBefore.left=0};a.fn.cycle.transitions.curtainX=function(c,d,b){b.before.push(function(g,e,f){a.fn.cycle.commonReset(g,e,f,false,true,true);f.cssBefore.left=e.cycleW/2;f.animIn.left=0;f.animIn.width=this.cycleW;f.animOut.left=g.cycleW/2;f.animOut.width=0});b.cssBefore.top=0;b.cssBefore.width=0};a.fn.cycle.transitions.curtainY=function(c,d,b){b.before.push(function(g,e,f){a.fn.cycle.commonReset(g,e,f,true,false,true);f.cssBefore.top=e.cycleH/2;f.animIn.top=0;f.animIn.height=e.cycleH;f.animOut.top=g.cycleH/2;f.animOut.height=0});b.cssBefore.height=0;b.cssBefore.left=0};a.fn.cycle.transitions.cover=function(f,g,e){var i=e.direction||"left";var b=f.css("overflow","hidden").width();var c=f.height();e.before.push(function(j,d,h){a.fn.cycle.commonReset(j,d,h);h.cssAfter.display="";if(i=="right"){h.cssBefore.left=-b}else{if(i=="up"){h.cssBefore.top=c}else{if(i=="down"){h.cssBefore.top=-c}else{h.cssBefore.left=b}}}});e.animIn.left=0;e.animIn.top=0;e.cssBefore.top=0;e.cssBefore.left=0};a.fn.cycle.transitions.uncover=function(f,g,e){var i=e.direction||"left";var b=f.css("overflow","hidden").width();var c=f.height();e.before.push(function(j,d,h){a.fn.cycle.commonReset(j,d,h,true,true,true);if(i=="right"){h.animOut.left=b}else{if(i=="up"){h.animOut.top=-c}else{if(i=="down"){h.animOut.top=c}else{h.animOut.left=-b}}}});e.animIn.left=0;e.animIn.top=0;e.cssBefore.top=0;e.cssBefore.left=0};a.fn.cycle.transitions.toss=function(e,f,d){var b=e.css("overflow","visible").width();var c=e.height();d.before.push(function(i,g,h){a.fn.cycle.commonReset(i,g,h,true,true,true);if(!h.animOut.left&&!h.animOut.top){a.extend(h.animOut,{left:b*2,top:-c/2,opacity:0})}else{h.animOut.opacity=0}});d.cssBefore.left=0;d.cssBefore.top=0;d.animIn.left=0};a.fn.cycle.transitions.wipe=function(q,m,e){var p=q.css("overflow","hidden").width();var j=q.height();e.cssBefore=e.cssBefore||{};var g;if(e.clip){if(/l2r/.test(e.clip)){g="rect(0px 0px "+j+"px 0px)"}else{if(/r2l/.test(e.clip)){g="rect(0px "+p+"px "+j+"px "+p+"px)"}else{if(/t2b/.test(e.clip)){g="rect(0px "+p+"px 0px 0px)"}else{if(/b2t/.test(e.clip)){g="rect("+j+"px "+p+"px "+j+"px 0px)"}else{if(/zoom/.test(e.clip)){var o=parseInt(j/2,10);var f=parseInt(p/2,10);g="rect("+o+"px "+f+"px "+o+"px "+f+"px)"}}}}}}e.cssBefore.clip=e.cssBefore.clip||g||"rect(0px 0px 0px 0px)";var k=e.cssBefore.clip.match(/(\d+)/g);var s=parseInt(k[0],10),c=parseInt(k[1],10),n=parseInt(k[2],10),i=parseInt(k[3],10);e.before.push(function(v,h,t){if(v==h){return}var d=a(v),b=a(h);a.fn.cycle.commonReset(v,h,t,true,true,false);t.cssAfter.display="block";var r=1,l=parseInt((t.speedIn/13),10)-1;(function u(){var x=s?s-parseInt(r*(s/l),10):0;var y=i?i-parseInt(r*(i/l),10):0;var z=n<j?n+parseInt(r*((j-n)/l||1),10):j;var w=c<p?c+parseInt(r*((p-c)/l||1),10):p;b.css({clip:"rect("+x+"px "+w+"px "+z+"px "+y+"px)"});(r++<=l)?setTimeout(u,13):d.css("display","none")})()});a.extend(e.cssBefore,{display:"block",opacity:1,top:0,left:0});e.animIn={left:0};e.animOut={left:0}}})(jQuery);

/*!
 * jQuery Accordion 0.0.1
 * (c) 2014 Victor Fernandez <victor@vctrfrnndz.com>
 * MIT Licensed.
 */

;(function ( $, window, document, undefined ) {

    var pluginName = 'accordion',
        defaults = {
            transitionSpeed: 300,
            transitionEasing: 'ease',
            controlElement: '[data-control]',
            contentElement: '[data-content]',
            groupElement: '[data-accordion-group]',
            singleOpen: true
        };

    function Accordion(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Accordion.prototype.init = function () {
        var self = this,
            opts = self.options;

        var $accordion = $(self.element),
            $controls = $accordion.find('> ' + opts.controlElement),
            $content =  $accordion.find('> ' + opts.contentElement);

        var accordionParentsQty = $accordion.parents('[data-accordion]').length,
            accordionHasParent = accordionParentsQty > 0;

        var closedCSS = { 'max-height': 0, 'overflow': 'hidden' };

        var CSStransitions = supportsTransitions();

        function debounce(func, threshold, execAsap) {
            var timeout;

            return function debounced() {
                var obj = this,
                    args = arguments;

                function delayed() {
                    if (!execAsap) func.apply(obj, args);
                    timeout = null;
                };

                if (timeout) clearTimeout(timeout);
                else if (execAsap) func.apply(obj, args);

                timeout = setTimeout(delayed, threshold || 100);
            };
        }

        function supportsTransitions() {
            var b = document.body || document.documentElement,
                s = b.style,
                p = 'transition';

            if (typeof s[p] == 'string') {
                return true;
            }

            var v = ['Moz', 'webkit', 'Webkit', 'Khtml', 'O', 'ms'];

            p = 'Transition';

            for (var i=0; i<v.length; i++) {
                if (typeof s[v[i] + p] == 'string') {
                    return true;
                }
            }

            return false;
        }

        function requestAnimFrame(cb) {
            if(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame) {
                return  requestAnimationFrame(cb) ||
                        webkitRequestAnimationFrame(cb) ||
                        mozRequestAnimationFrame(cb);
            } else {
                return setTimeout(cb, 1000 / 60);
            }
        }

        function toggleTransition($el, remove) {
            if(!remove) {
                $content.css({
                    '-webkit-transition': 'max-height ' + opts.transitionSpeed + 'ms ' + opts.transitionEasing,
                    'transition': 'max-height ' + opts.transitionSpeed + 'ms ' + opts.transitionEasing
                });
            } else {
                $content.css({
                    '-webkit-transition': '',
                    'transition': ''
                });
            }
        }

        function calculateHeight($el) {
            var height = 0;

            $el.children().each(function() {
                height = height + $(this).outerHeight(true);
            });

            $el.data('oHeight', height);
        }

        function updateParentHeight($parentAccordion, $currentAccordion, qty, operation) {
            var $content = $parentAccordion.filter('.open').find('> [data-content]'),
                $childs = $content.find('[data-accordion].open > [data-content]'),
                $matched;

            if(!opts.singleOpen) {
                $childs = $childs.not($currentAccordion.siblings('[data-accordion].open').find('> [data-content]'));
            }

            $matched = $content.add($childs);

            if($parentAccordion.hasClass('open')) {
                $matched.each(function() {
                    var currentHeight = $(this).data('oHeight');

                    switch (operation) {
                        case '+':
                            $(this).data('oHeight', currentHeight + qty);
                            break;
                        case '-':
                            $(this).data('oHeight', currentHeight - qty);
                            break;
                        default:
                            throw 'updateParentHeight method needs an operation';
                    }

                    $(this).css('max-height', $(this).data('oHeight'));
                });
            }
        }

        function refreshHeight($accordion) {
            if($accordion.hasClass('open')) {
                var $content = $accordion.find('> [data-content]'),
                    $childs = $content.find('[data-accordion].open > [data-content]'),
                    $matched = $content.add($childs);

                calculateHeight($matched);

                $matched.css('max-height', $matched.data('oHeight'));
            }
        }

        function closeAccordion($accordion, $content) {
            $accordion.trigger('accordion.close');
            
            if(CSStransitions) {
                if(accordionHasParent) {
                    var $parentAccordions = $accordion.parents('[data-accordion]');

                    updateParentHeight($parentAccordions, $accordion, $content.data('oHeight'), '-');
                }

                $content.css(closedCSS);

                $accordion.removeClass('open');
            } else {
                $content.css('max-height', $content.data('oHeight'));

                $content.animate(closedCSS, opts.transitionSpeed);

                $accordion.removeClass('open');
            }
        }

        function openAccordion($accordion, $content) {
            $accordion.trigger('accordion.open');
            if(CSStransitions) {
                toggleTransition($content);

                if(accordionHasParent) {
                    var $parentAccordions = $accordion.parents('[data-accordion]');

                    updateParentHeight($parentAccordions, $accordion, $content.data('oHeight'), '+');
                }

                requestAnimFrame(function() {
                    $content.css('max-height', $content.data('oHeight'));
                });

                $accordion.addClass('open');
            } else {
                $content.animate({
                    'max-height': $content.data('oHeight')
                }, opts.transitionSpeed, function() {
                    $content.css({'max-height': 'none'});
                });

                $accordion.addClass('open');
            }
        }

        function closeSiblingAccordions($accordion) {
            var $accordionGroup = $accordion.closest(opts.groupElement);

            var $siblings = $accordion.siblings('[data-accordion]').filter('.open'),
                $siblingsChildren = $siblings.find('[data-accordion]').filter('.open');

            var $otherAccordions = $siblings.add($siblingsChildren);

            $otherAccordions.each(function() {
                var $accordion = $(this),
                    $content = $accordion.find(opts.contentElement);

                closeAccordion($accordion, $content);
            });

            $otherAccordions.removeClass('open');
        }

        function toggleAccordion() {
            var isAccordionGroup = (opts.singleOpen) ? $accordion.parents(opts.groupElement).length > 0 : false;

            calculateHeight($content);

            if(isAccordionGroup) {
                closeSiblingAccordions($accordion);
            }

            if($accordion.hasClass('open')) {
                closeAccordion($accordion, $content);
            } else {
                openAccordion($accordion, $content);
            }
        }

        function addEventListeners() {
            $controls.on('click', toggleAccordion);
            
            $controls.on('accordion.toggle', function() {
                if(opts.singleOpen && $controls.length > 1) {
                    return false;
                }
                
                toggleAccordion();
            });

            $(window).on('resize', debounce(function() {
                refreshHeight($accordion);
            }));
        }

        function setup() {
            $content.each(function() {
                var $curr = $(this);

                if($curr.css('max-height') != 0) {
                    if(!$curr.closest('[data-accordion]').hasClass('open')) {
                        $curr.css({ 'max-height': 0, 'overflow': 'hidden' });
                    } else {
                        toggleTransition($curr);
                        calculateHeight($curr);

                        $curr.css('max-height', $curr.data('oHeight'));
                    }
                }
            });


            if(!$accordion.attr('data-accordion')) {
                $accordion.attr('data-accordion', '');
                $accordion.find(opts.controlElement).attr('data-control', '');
                $accordion.find(opts.contentElement).attr('data-content', '');
            }
        }

        setup();
        addEventListeners();
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new Accordion( this, options ));
            }
        });
    }

})( jQuery, window, document );

/* SCRIPTS */
var fp = jQuery.noConflict();

  fp(document).ready(function(){

    fp('#top-burger').click(function(e){
        e.stopPropagation();
    });

    fp('#top-burger').click( // Trigger
    function(){

    if(!fp('#top-nav').is(':visible')) {
    fp('#top-nav').animate({width:'toggle'}, 350); //UL drops
    }

    else {
      fp('#top-nav').animate({width:'toggle'}, 350);
    }

    fp(document).click(function(){
        fp('#top-nav').fadeOut();
    });

    });

    fp('#top-nav-close a').click(function(){
      fp('#top-nav').fadeOut();
    });



    fp('.accordion [data-accordion]').accordion({
        "transitionSpeed": 400
    });
  
  });