(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{22:function(e,t,a){},24:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(16),s=a.n(r),c=a(3),i=a(4),l=a(6),d=a(5),o=(a(22),a(0));var h=function(e){var t=e.users;function a(e){var t=e.split("-"),a=t[0];return[t[1],t[2].split("T")[0],a].join("-")}return Object(o.jsx)("body",{children:void 0!==t[0]&&void 0!==t[0].name?t.map((function(e){var t=e.login,n=e.name,r=e.picture,s=e.phone,c=e.email,i=e.dob;return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{"data-th":"Image",className:"fixed-center",children:Object(o.jsx)("img",{src:r.medium,alt:"profile image for "+n.first+" "+n.last,className:""})}),Object(o.jsxs)("td",{"data-th":"Name",className:"name-cell fixed-center",children:[n.first," ",n.last]}),Object(o.jsx)("p",{}),Object(o.jsx)("td",{"data-th":"DOB",className:"fixed-center",children:a(i.date)}),Object(o.jsx)("td",{"data-th":"Phone",className:"fixed-center",children:s}),Object(o.jsx)("td",{"data-th":"Email",className:"fixed-center",children:Object(o.jsx)("a",{href:"mailto:"+c,target:"__blank",children:c})})]},t.uuid)})):Object(o.jsx)(o.Fragment,{})})};a(24);var j=function(e){var t=e.headings,a=e.users,n=e.sortHandler;return Object(o.jsx)("div",{className:"table",children:Object(o.jsxs)("table",{id:"table",className:"table",children:[Object(o.jsx)("thead",{children:Object(o.jsx)("tr",{children:t.map((function(e){var t=e.name,a=e.width;return Object(o.jsxs)("th",{className:"col",style:{width:a},onClick:function(){n(t.toLowerCase())},children:[t,Object(o.jsx)("span",{})]},t)}))})}),Object(o.jsx)(h,{users:a})]})})},u=a(17),b=a.n(u),f=function(){return b.a.get("https://randomuser.me/api/?results=200&nat=us")};a(43);var m=function(e){var t=e.handleSearchChange;return Object(o.jsx)("div",{className:"searchbox",children:Object(o.jsx)("form",{className:"form-inline",children:Object(o.jsx)("input",{className:"form-control",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(e){return t(e)}})})})};a(44);var O=function(e){var t=e.handleSearchChange;return Object(o.jsx)("nav",{className:"navbar navbar-expand navbar-light bg-light",children:Object(o.jsx)("div",{className:"navbar-collapse row",id:"navbarNav",children:Object(o.jsx)(m,{handleSearchChange:t})})})},v=(a(45),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={users:[{}],order:"descend",filteredUsers:[{}]},e.headings=[{name:"Image",width:"10%"},{name:"Name",width:"10%"},{name:"DOB",width:"10%"},{name:"Phone",width:"20%"},{name:"Email",width:"20%"}],e.sortHandler=function(t){"descend"===e.state.order?e.setState({order:"ascend"}):e.setState({order:"descend"});var a=e.state.filteredUsers.sort((function(a,n){return"ascend"===e.state.order?void 0===a[t]?1:void 0===n[t]?-1:"name"===t?a[t].first.localeCompare(n[t].first):a[t]-n[t]:void 0===a[t]?1:void 0===n[t]?-1:"name"===t?n[t].first.localeCompare(a[t].first):n[t]-a[t]}));e.setState({filteredUsers:a})},e.handleSearchChange=function(t){console.log(t.target.value);var a=t.target.value,n=e.state.users.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(a.toLowerCase())}));e.setState({filteredUsers:n})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){e.setState({users:t.data.results,filteredUsers:t.data.results})}))}},{key:"render",value:function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(O,{handleSearchChange:this.handleSearchChange}),Object(o.jsx)("div",{className:"data-area",children:Object(o.jsx)(j,{headings:this.headings,users:this.state.filteredUsers,sortHandler:this.sortHandler})})]})}}]),a}(n.Component)),x=(a(46),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(v,{})})}}]),a}(n.Component));a(47);var p=function(e){var t=e.children;return Object(o.jsx)("div",{className:"wrapper",children:t})},g=(a(48),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"head",children:[Object(o.jsx)("h1",{children:"Employee Directory"}),Object(o.jsx)("span",{children:Object(o.jsx)("p",{children:"Filter by Name or use the search box for more specific results!"})})]})}}]),a}(n.Component));a(49);var N=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(p,{children:[Object(o.jsx)(g,{}),Object(o.jsx)(x,{})]})})};a(50),a(51);s.a.render(Object(o.jsx)(N,{}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.870be7d1.chunk.js.map