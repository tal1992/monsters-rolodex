(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),c=n.n(s),o=n(7),a=n.n(o),i=(n(13),n(2)),u=n(3),h=n(5),l=n(4),p=(n(14),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"card-container",children:[Object(r.jsx)("img",{alt:"monsters",src:"https://robohash.org/".concat(this.props.monster.id,"?set=2&size=180x180")}),Object(r.jsx)("h2",{children:this.props.monster.name},this.props.monster.id),Object(r.jsx)("p",{children:this.props.monster.email})]})}}]),n}(s.Component)),j=(n(15),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"card-list",children:this.props.monsters.map((function(e){return Object(r.jsx)(p,{monster:e},e.id)}))})}}]),n}(s.Component)),d=(n(16),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsx)("input",{className:"search",type:"search",placeholder:this.props.placeholder,onChange:this.props.handleChange})}}]),n}(s.Component)),b=(n(17),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={monsters:[],searchField:""},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"updateSearch",value:function(e){this.setState({searchField:e})}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,s=t.searchField,c=n.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())}));return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{children:"Monster Rolodex"}),Object(r.jsx)(d,{placeholder:"Search Monsters",handleChange:function(t){return e.updateSearch(t.target.value)}}),Object(r.jsx)(j,{monsters:c})]})}}]),n}(s.Component)),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),s(e),c(e),o(e)}))};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root")),f()}],[[18,1,2]]]);
//# sourceMappingURL=main.04feb2bc.chunk.js.map