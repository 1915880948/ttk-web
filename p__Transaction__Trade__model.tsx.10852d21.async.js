(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[39],{VJmB:function(t,e,a){"use strict";var r=a("mZ4U");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(a("mK77")),u=r(a("Ico4")),s=a("irxV"),c={namespace:"trade",state:{list:[],total:0,userDetail:{}},effects:{list:u.default.mark(function t(e,a){var r,n,c,i,l;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,n=e.callback,c=a.call,i=a.put,t.next=4,c(s.getTradeList,r);case 4:return l=t.sent,t.next=7,i({type:"show",payload:{list:l.data.list||[],total:l.data.total}});case 7:n&&n(l);case 8:case"end":return t.stop()}},t)}),toDetail:u.default.mark(function t(e,a){var r,n,c,i,l;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,n=e.callback,c=a.call,i=a.put,t.next=4,c(s.getUserDetail,r);case 4:if(l=t.sent,!l||!l.data){t.next=8;break}return t.next=8,i({type:"show",payload:{userDetail:l.data.detail||{}}});case 8:n&&n(l);case 9:case"end":return t.stop()}},t)}),editStatus:u.default.mark(function t(e,a){var r,n,c,i;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,n=e.callback,c=a.call,a.put,t.next=4,c(s.editStatus,r);case 4:i=t.sent,n&&n(i);case 6:case"end":return t.stop()}},t)}),clearCode:u.default.mark(function t(e,a){var r,n,c,i;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,n=e.callback,c=a.call,a.put,t.next=4,c(s.clearCode,r);case 4:i=t.sent,n&&n(i);case 6:case"end":return t.stop()}},t)})},reducers:{show:function(t,e){return(0,n.default)({},t,e.payload)}}};e.default=c},irxV:function(t,e,a){"use strict";var r=a("mZ4U");Object.defineProperty(e,"__esModule",{value:!0}),e.getTradeList=l,e.getUserDetail=o,e.editStatus=f,e.clearCode=w;var n=r(a("mK77")),u=r(a("Ico4")),s=r(a("UWy3")),c=r(a("sy1d")),i=a("os2Q");function l(t){return d.apply(this,arguments)}function d(){return d=(0,s.default)(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.default)("/api/admin/trans/transList?".concat((0,i.stringify)(e)),{method:"GET"}));case 1:case"end":return t.stop()}},t)})),d.apply(this,arguments)}function o(t){return p.apply(this,arguments)}function p(){return p=(0,s.default)(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.default)("/api/admin/site/user?".concat((0,i.stringify)(e)),{method:"GET"}));case 1:case"end":return t.stop()}},t)})),p.apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return h=(0,s.default)(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.default)("/api/admin/site/isAuth",{method:"PUT",body:(0,n.default)({},e)}));case 1:case"end":return t.stop()}},t)})),h.apply(this,arguments)}function w(t){return y.apply(this,arguments)}function y(){return y=(0,s.default)(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.default)("/api/admin/site/clear",{method:"PUT",body:(0,n.default)({},e)}));case 1:case"end":return t.stop()}},t)})),y.apply(this,arguments)}}}]);