(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{ZoV4:function(e,t,a){"use strict";var n=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("mK77")),l=n(a("Ico4")),u=a("u/PS"),i={namespace:"deal",state:{globalDetail:{}},effects:{detail:l.default.mark(function e(t,a){var n,r,i,c,o;return l.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=t.callback,i=a.call,c=a.put,e.next=4,i(u.getGlobalDetail,n);case 4:if(o=e.sent,!o||!o.data){e.next=8;break}return e.next=8,c({type:"show",payload:{globalDetail:o.data.detail||{}}});case 8:r&&r(o);case 9:case"end":return e.stop()}},e)}),edit:l.default.mark(function e(t,a){var n,r,i,c;return l.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=t.callback,i=a.call,a.put,e.next=4,i(u.editGlobalDetail,n);case 4:c=e.sent,r&&r(c);case 6:case"end":return e.stop()}},e)})},reducers:{show:function(e,t){return(0,r.default)({},e,t.payload)}}};t.default=i},"u/PS":function(e,t,a){"use strict";var n=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.getGlobalDetail=o,t.editGlobalDetail=d;var r=n(a("mK77")),l=n(a("Ico4")),u=n(a("UWy3")),i=n(a("sy1d")),c=a("os2Q");function o(e){return s.apply(this,arguments)}function s(){return s=(0,u.default)(l.default.mark(function e(t){return l.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.default)("/api/admin/site/globalDetail?".concat((0,c.stringify)(t)),{method:"GET"}));case 1:case"end":return e.stop()}},e)})),s.apply(this,arguments)}function d(e){return p.apply(this,arguments)}function p(){return p=(0,u.default)(l.default.mark(function e(t){return l.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.default)("/api/admin/site/global",{method:"PUT",body:(0,r.default)({},t)}));case 1:case"end":return e.stop()}},e)})),p.apply(this,arguments)}}}]);