(this["webpackJsonpmonster-rolodex"]=this["webpackJsonpmonster-rolodex"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),c=n(4),a=n.n(c),o=(n(13),n(5)),i=n(6),h=n(2),l=n(8),u=n(7),d=(n(14),n(15),n(0)),j=function(e){return Object(d.jsxs)("div",{className:"card-container",children:[Object(d.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"set=set2&size=180x180")}),Object(d.jsxs)("h2",{children:[e.monster.name,e.monster.id]}),Object(d.jsx)("p",{children:e.monster.email})]})},m=function(e){return Object(d.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(d.jsx)(j,{monster:e},e.id)}))})},b=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return Object(d.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=(n(18),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={monsters:[],searchField:""},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"handleChange",value:function(e){this.setState({searchField:e.target.value})}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Monster Rolodex - Gia Binh"}),Object(d.jsx)(b,{placeholder:"search",handleChange:this.handleChange}),Object(d.jsx)(m,{monsters:s})]})}}]),n}(s.Component)),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),s(e),r(e),c(e),a(e)}))};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),p()}],[[19,1,2]]]);
//# sourceMappingURL=main.67a6707a.chunk.js.map