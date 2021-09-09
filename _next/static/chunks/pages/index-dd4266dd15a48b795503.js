(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4576:function(e,n,r){"use strict";r.d(n,{Z:function(){return u}});var l=r(7294),t=r(3789),a=r(318),i=r(777),s=r.n(i),d=r(5893);function o(e){var n=e.selectedIL,r=e.levelData,i=e.controlledSelectedWorld,o=l.useState("none"),c=i||o,h=(0,a.Z)(c,2),u=h[0],x=h[1],j=(0,t.Z)(new Set(r.filter((function(e){return!!e})).map((function(e){return e.world})))),p=l.useCallback((function(n){x(n.currentTarget.value),e.onSelectedILChange(-1)}),[e.onSelectedILChange]),m=l.useCallback((function(n){e.onSelectedILChange(parseInt(n.currentTarget.value))}),[e.onSelectedILChange]),_=[];return"none"!=u&&r.forEach((function(e){(null===e||void 0===e?void 0:e.world)==u&&_.push(e)})),(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:s().ilSelector,children:[(0,d.jsx)("label",{htmlFor:"world-select",children:"World"}),(0,d.jsxs)("select",{name:"world",id:"world-select",onChange:p,children:[(0,d.jsx)("option",{value:"none"},"none"),j.map((function(e){return(0,d.jsx)("option",{value:e,children:e},e)}))]}),(0,d.jsx)("label",{htmlFor:"episode-select",children:"Episode"}),(0,d.jsxs)("select",{name:"episode",id:"episode-select",value:n,disabled:0==_.length,onChange:m,children:[(0,d.jsx)("option",{value:"-1"},"none"),_.map((function(e){return(0,d.jsx)("option",{value:e.id,children:e.episode+(e.subCategory?" // "+e.subCategory:"")},e.id)}))]})]})})}var c=r(208),h=r.n(c);function u(e){var n=e.selectedIL,r=e.onSelectedILChange,l=e.levelData,t=e.headerText,a=e.controlledSelectedWorld;return(0,d.jsxs)("header",{className:h().ilHeader,children:[(0,d.jsx)(o,{selectedIL:n,controlledSelectedWorld:a,onSelectedILChange:r,levelData:l}),(0,d.jsx)("h2",{children:t})]})}},4668:function(e,n,r){"use strict";r.d(n,{Z:function(){return s}});var l=r(8634),t=r.n(l),a=r(7275),i=(r(6350),r(5893));function s(e){return(0,i.jsxs)("footer",{className:t().ilFooter,children:["Created with \ud83c\udf1e by Lego |"," ",(0,i.jsx)(a.ZP,{content:"This website updates approximately every 15 minutes.",children:(0,i.jsxs)("span",{style:{padding:"0 4px"},children:[" ","Last Updated: ",e.dateStamp.toLocaleString()]})})," ","| ",(0,i.jsx)("a",{href:"https://github.com/Lego6245/sms.il",children:"Github"})," |"," ",(0,i.jsx)("a",{href:"https://sunmar.io/il",children:"Main Sheet"})]})}},3355:function(e,n,r){"use strict";r.d(n,{Z:function(){return x}});var l=r(6469),t=r.n(l),a=(r(7294),r(8175)),i=r.n(a),s=r(1664),d=r(5893);function o(e){var n=e.data,r=e.showWorld,l=e.showEpisode,a=e.hidePlayer,o=n.playerData,h=n.time,u=n.link,x=n.comment,j=n.rank,p=o.name;return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("tr",{className:t().ilRow+" "+(1==j?t().ilFirst:2==j?t().ilSecond:3==j?t().ilThird:""),children:[(0,d.jsx)("td",{className:t().center,children:1==j?"\ud83e\udd47":2==j?"\ud83e\udd48":3==j?"\ud83e\udd49":j}),!a&&(0,d.jsx)("td",{children:(0,d.jsx)(s.default,{href:"/player/"+p,children:p})}),r&&(0,d.jsx)("td",{children:n.ilData.world}),l&&(0,d.jsx)("td",{children:n.ilData.episode+(n.ilData.subCategory?" // "+n.ilData.subCategory:"")}),(0,d.jsx)("td",{className:t().center,children:c(h)}),(0,d.jsx)("td",{className:t().center,children:u?(0,d.jsx)("a",{href:u,children:"\u2705"}):"\u274c"}),(0,d.jsx)("td",{className:t().comments,children:(0,d.jsx)(i(),{children:x})})]})})}function c(e){var n=Math.floor(e/6e4),r=Math.floor(e%6e4/1e3),l=Math.floor(e%6e4%1e3/10);return(n>0?n+":":"")+(r<10?"0"+r:r)+"."+(l>0?l<10?"0"+l:l:"00")}var h=r(6300),u=r.n(h);function x(e){var n=e.ils,r=e.showWorld,l=e.showEpisode,t=e.hidePlayer;return(0,d.jsx)("div",{style:{maxHeight:"100%"},children:(0,d.jsxs)("table",{className:u().ilTable,children:[(0,d.jsx)("thead",{className:u().ilTableHeader,children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Rank"}),!t&&(0,d.jsx)("th",{children:"Player"}),r&&(0,d.jsx)("th",{children:"World"}),l&&(0,d.jsx)("th",{children:"Episode"}),(0,d.jsx)("th",{children:"Time"}),(0,d.jsx)("th",{children:"VOD"}),(0,d.jsx)("th",{children:"Comment"})]})}),(0,d.jsx)("tbody",{children:n.length>0&&n.map((function(e){return(0,d.jsx)(o,{data:e,showWorld:r,showEpisode:l,hidePlayer:t},e.playerData.name+e.ilData.id)}))})]})})}},8821:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return v},default:function(){return b}});var l=r(318),t=r(7294),a=r(3355),i=r(4473),s=r.n(i),d=r(9008),o=r(4668),c=r(4576),h=r(6469),u=r.n(h),x=r(1664),j=r(5893);function p(e){var n=e.data,r=n.name,l=n.rank,t=n.points,a=n.medals;return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("tr",{className:u().ilRow+" "+(1==l?u().ilFirst:2==l?u().ilSecond:3==l?u().ilThird:""),children:[(0,j.jsx)("td",{className:u().center,children:1==l?"\ud83e\udd47":2==l?"\ud83e\udd48":3==l?"\ud83e\udd49":l}),(0,j.jsx)("td",{children:(0,j.jsx)(x.default,{href:"/player/"+r,children:r})}),(0,j.jsx)("td",{className:u().center,children:t}),(0,j.jsx)("td",{children:(0,j.jsxs)("div",{className:u().medalHolder,children:[(0,j.jsx)("span",{children:"\ud83e\udd47"+a.gold}),(0,j.jsx)("span",{children:"\ud83e\udd48"+a.silver}),(0,j.jsx)("span",{children:"\ud83e\udd49"+a.bronze})]})})]})})}var m=r(1126),_=r.n(m);function f(e){var n=e.players;return(0,j.jsx)("div",{style:{maxHeight:"100%"},children:(0,j.jsxs)("table",{className:_().playerTable,children:[(0,j.jsx)("thead",{className:_().playerTableHeader,children:(0,j.jsxs)("tr",{children:[(0,j.jsx)("th",{children:"Rank"}),(0,j.jsx)("th",{children:"Player"}),(0,j.jsx)("th",{children:"Points"}),(0,j.jsx)("th",{children:"Medals"})]})}),(0,j.jsx)("tbody",{children:n.length>0&&n.map((function(e){return(0,j.jsx)(p,{data:e},e.name)}))})]})})}var v=!0,b=function(e){var n,r=e.ilData,i=e.levelData,h=e.playerData,u=e.timestamp,x=new Date(u),p=t.useState(-1),m=(0,l.Z)(p,2),_=m[0],v=m[1],b=[];-1!=_?(n=i[_-7],b=r[_-7]):(n=void 0,b=[]);var w=n?n.world+" - "+n.episode+(n.subCategory?" ("+n.subCategory+")":""):"Super Mario Sunshine IL Leaderboards";return(0,j.jsxs)("div",{className:s().indexContainer,children:[(0,j.jsx)(d.default,{children:(0,j.jsx)("title",{children:"Super Mario Sunshine IL Leaderboard"})}),(0,j.jsx)(c.Z,{selectedIL:_,levelData:i,onSelectedILChange:v,headerText:w}),(0,j.jsx)("div",{children:b.length>0?(0,j.jsx)(a.Z,{ils:b}):(0,j.jsx)(f,{players:h})}),(0,j.jsx)(o.Z,{dateStamp:x})]})}},5301:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(8821)}])},777:function(e){e.exports={ilSelector:"FilterControl_ilSelector__3xqHn"}},208:function(e){e.exports={ilHeader:"FilterHeader_ilHeader__300XD"}},6469:function(e){e.exports={ilRow:"ILRow_ilRow__11NZ4",center:"ILRow_center__3S7dU",comments:"ILRow_comments__2HhR7",ilFirst:"ILRow_ilFirst__1-vj6",ilSecond:"ILRow_ilSecond__3MnFN",ilThird:"ILRow_ilThird__X8obq",medalHolder:"ILRow_medalHolder__15Dwq"}},6300:function(e){e.exports={ilTable:"ILTable_ilTable__1ZmNk",ilTableHeader:"ILTable_ilTableHeader__2n7ss"}},1126:function(e){e.exports={playerTable:"PlayerTable_playerTable__1Eax6",playerTableHeader:"PlayerTable_playerTableHeader__iHhM2"}},8634:function(e){e.exports={ilFooter:"footer_ilFooter__z8PnP"}},4473:function(e){e.exports={indexContainer:"styles_indexContainer__38mLt"}},9008:function(e,n,r){e.exports=r(639)}},function(e){e.O(0,[525,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);