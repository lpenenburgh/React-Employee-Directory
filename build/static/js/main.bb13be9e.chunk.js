(this.webpackJsonpemployeedir1=this.webpackJsonpemployeedir1||[]).push([[0],{23:function(e,t,s){},24:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){},47:function(e,t,s){"use strict";s.r(t);var r=s(2),n=s.n(r),c=s(12),a=s.n(c),i=(s(22),s(23),s(24),s(0));var l=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"jumbotron jumbotron-fluid",id:"header",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{className:"display-4",children:"Employee Directory"}),Object(i.jsx)("p",{className:"lead",children:"Click on the carrots to filter by heading or use the search box to narrow your results"})]})})})},o=s(13),d=s(14),h=s(17),j=s(16),u=s(15),b=s.n(u),m=function(){return b.a.get("https://randomuser.me/api/?results=60&nat=us")};s(44);var O=function(e){return Object(i.jsx)("form",{children:Object(i.jsx)("div",{className:"form-group",children:Object(i.jsx)("input",{onChange:e.searchByName,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search for an Employee",id:"search"})})})},x=(s(45),function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(o.a)(this,s);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={search:"",results:[],sortOrder:""},e.searchByName=function(t){if("search"===t.target.name){var s=t.target.value.toLowerCase();e.setState({search:s})}},e.sortFirstName=function(){var t=e.state.results.sort((function(e,t){return t.name.first>e.name.first?-1:e.name.first>t.name.first?1:0}));"decending"===e.state.sortOrder?(t.reverse(),e.setState({sortOrder:"ascending"})):e.setState({sortOrder:"decending"}),e.setState({results:t})},e.sortLastName=function(){var t=e.state.results.sort((function(e,t){return t.name.last>e.name.last?-1:e.name.last>t.name.last?1:0}));"decending"===e.state.sortOrder?(t.reverse(),e.setState({sortOrder:"ascending"})):e.setState({sortOrder:"decending"}),e.setState({results:t})},e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;m().then((function(t){e.setState({results:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{children:[Object(i.jsx)(O,{searchByName:this.searchByName,search:this.state.search}),Object(i.jsx)("div",{className:"table-responsive",children:Object(i.jsxs)("table",{className:"table table-resposive text-center table-hover",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Image"}),Object(i.jsxs)("th",{children:["First Name  ",Object(i.jsx)("button",{onClick:this.sortFirstName,children:"^"})]}),Object(i.jsxs)("th",{children:["Last Name ",Object(i.jsx)("button",{onClick:this.sortLastName,children:"^"})]}),Object(i.jsx)("th",{children:"Phone"}),Object(i.jsx)("th",{children:"Email"})]})}),this.state.results&&this.state.results.map((function(t){return t.name.first.toLowerCase().includes(e.state.search)?Object(i.jsx)("tbody",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("img",{src:t.picture.thumbnail,alt:"user thumbnail"})}),Object(i.jsx)("td",{children:t.name.first}),Object(i.jsx)("td",{children:t.name.last}),Object(i.jsx)("td",{children:t.phone}),Object(i.jsx)("td",{children:t.email})]})},t.login.uuid):t.name.last.toLowerCase().includes(e.state.search)?Object(i.jsx)("tbody",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("img",{src:t.picture.thumbnail,alt:"user thumbnail"})}),Object(i.jsx)("td",{children:t.name.first}),Object(i.jsx)("td",{children:t.name.last}),Object(i.jsxs)("td",{children:[t.phone," "]}),Object(i.jsx)("td",{children:t.email})]})},t.login.uuid):null}))]})})]})}}]),s}(r.Component));s(46);var f=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(l,{}),Object(i.jsx)(x,{})]})},v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,48)).then((function(t){var s=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,a=t.getTTFB;s(e),r(e),n(e),c(e),a(e)}))};a.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root")),v()}},[[47,1,2]]]);
//# sourceMappingURL=main.bb13be9e.chunk.js.map