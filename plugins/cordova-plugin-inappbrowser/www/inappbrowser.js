cordova.define("cordova-plugin-inappbrowser.inappbrowser",function(e,n,r){function o(){this.channels={loadstart:t.create("loadstart"),loadstop:t.create("loadstop"),loaderror:t.create("loaderror"),exit:t.create("exit")}}var i=e("cordova/exec"),t=e("cordova/channel"),l=e("cordova/modulemapper"),c=e("cordova/urlutil");o.prototype={_eventHandler:function(e){e&&e.type in this.channels&&this.channels[e.type].fire(e)},close:function(e){i(null,null,"InAppBrowser","close",[])},show:function(e){i(null,null,"InAppBrowser","show",[])},addEventListener:function(e,n){e in this.channels&&this.channels[e].subscribe(n)},removeEventListener:function(e,n){e in this.channels&&this.channels[e].unsubscribe(n)},executeScript:function(e,n){if(e.code)i(n,null,"InAppBrowser","injectScriptCode",[e.code,!!n]);else{if(!e.file)throw new Error("executeScript requires exactly one of code or file to be specified");i(n,null,"InAppBrowser","injectScriptFile",[e.file,!!n])}},insertCSS:function(e,n){if(e.code)i(n,null,"InAppBrowser","injectStyleCode",[e.code,!!n]);else{if(!e.file)throw new Error("insertCSS requires exactly one of code or file to be specified");i(n,null,"InAppBrowser","injectStyleFile",[e.file,!!n])}}},r.exports=function(e,n,r,t){if(window.frames&&window.frames[n]){var s=l.getOriginalSymbol(window,"open");return s.apply(window,arguments)}e=c.makeAbsolute(e);var a=new o;t=t||{};for(var p in t)a.addEventListener(p,t[p]);var d=function(e){a._eventHandler(e)};return r=r||"",i(d,d,"InAppBrowser","open",[e,n,r]),a}});