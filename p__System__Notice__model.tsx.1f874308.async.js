(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[31],{W4RA:function(t,e,a){"use strict";var n=a("mZ4U");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("mK77")),u=n(a("Ico4")),c=a("x6M/"),i={namespace:"notice",state:{list:[],total:0},effects:{list:u.default.mark(function t(e,a){var n,r,i,l,s;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=e.callback,i=a.call,l=a.put,t.next=4,i(c.getNoticeList,n);case 4:return s=t.sent,t.next=7,l({type:"show",payload:{list:s.data.list||[],total:s.data.count}});case 7:r&&r(s);case 8:case"end":return t.stop()}},t)}),add:u.default.mark(function t(e,a){var n,r,i,l;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=e.callback,i=a.call,a.put,t.next=4,i(c.addNotice,n);case 4:l=t.sent,r&&r(l);case 6:case"end":return t.stop()}},t)}),edit:u.default.mark(function t(e,a){var n,r,i,l;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=e.callback,i=a.call,a.put,t.next=4,i(c.editNotice,n);case 4:l=t.sent,r&&r(l);case 6:case"end":return t.stop()}},t)}),enable:u.default.mark(function t(e,a){var n,r,i,l;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=e.callback,i=a.call,a.put,t.next=4,i(c.enableNotice,n);case 4:l=t.sent,r&&r(l);case 6:case"end":return t.stop()}},t)})},reducers:{show:function(t,e){return(0,r.default)({},t,e.payload)}}};e.default=i},"x6M/":function(t,e,a){"use strict";var n=a("mZ4U");Object.defineProperty(e,"__esModule",{value:!0}),e.getNoticeList=s,e.addNotice=d,e.editNotice=f,e.enableNotice=h;var r=n(a("mK77")),u=n(a("Ico4")),c=n(a("UWy3")),i=n(a("sy1d")),l=a("os2Q");function s(t){return o.apply(this,arguments)}function o(){return o=(0,c.default)(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,i.default)("/api/admin/notice/list?".concat((0,l.stringify)(e)),{method:"GET"}));case 1:case"end":return t.stop()}},t)})),o.apply(this,arguments)}function d(t){return p.apply(this,arguments)}function p(){return p=(0,c.default)(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,i.default)("/api/admin/notice/create",{method:"POST",body:(0,r.default)({},e)}));case 1:case"end":return t.stop()}},t)})),p.apply(this,arguments)}function f(t){return w.apply(this,arguments)}function w(){return w=(0,c.default)(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,i.default)("/api/admin/notice/edit",{method:"PUT",body:(0,r.default)({},e)}));case 1:case"end":return t.stop()}},t)})),w.apply(this,arguments)}function h(t){return y.apply(this,arguments)}function y(){return y=(0,c.default)(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,i.default)("/api/admin/notice/off",{method:"PUT",body:(0,r.default)({},e)}));case 1:case"end":return t.stop()}},t)})),y.apply(this,arguments)}}}]);