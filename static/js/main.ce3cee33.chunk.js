(this.webpackJsonp2nd_class=this.webpackJsonp2nd_class||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),c=a(15),n=a.n(c),i=(a(22),a(5)),o=a(6),l=a(7),p=a(9),h=a(8),j=(a(23),a(4)),d=a(1),g=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light ",style:{backgroundColor:"#f7f7f7",color:"yellow"},children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(j.b,{className:"navbar-brand",to:"/",children:"News Spider"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(j.b,{className:"nav-link","aria-current":"page",to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(j.b,{className:"nav-link",onClick:{},"aria-current":"page",to:"/business",children:"Business"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(j.b,{className:"nav-link","aria-current":"page",to:"/entertainment",children:"Entertainment"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(j.b,{className:"nav-link","aria-current":"page",to:"/health",children:"Health"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(j.b,{className:"nav-link","aria-current":"page",to:"/science",children:"Science"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(j.b,{className:"nav-link","aria-current":"page",to:"/sports",children:"Sports"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(j.b,{className:"nav-link","aria-current":"page",to:"/technology",children:"Technology"})})]})})]})})})}}]),a}(s.Component),b=g,u=a(11),m=a.n(u),x=a(14),O=a(16),y=a.p+"static/media/breakingNews.8cc9ed8e.jpg",v=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e,t=this.props,a=t.title,s=t.description,r=t.imageUrl,c=t.siteLink,n=t.author,o=t.date,l=t.source;return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"card ",style:{borderWidth:0},children:[Object(d.jsx)("span",(e={style:{float:"right"},className:"badge  bg-warning text-dark"},Object(i.a)(e,"style",{borderTopLeftRadius:"50rem",borderTopRightRadius:"50rem"}),Object(i.a)(e,"children",l),e)),Object(d.jsx)("img",{src:r,className:"card-img-top",alt:a}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:a}),Object(d.jsx)("p",{className:"card-text",children:s}),Object(d.jsx)("p",{className:"card-text",children:Object(d.jsxs)("small",{className:"text-muted",children:["By ",n||"UnKnown"," on ",new Date(o).toLocaleDateString()]})}),Object(d.jsx)("a",{href:c,target:"_blank",className:"btn btn-sm btn-primary",children:"Read More"})]})]})})}}]),a}(s.Component),f=a.p+"static/media/spinner.5e77d520.gif";function S(e){return Object(d.jsx)("div",{style:{textAlign:"center",textShadow:"30px",marginTop:e.margin},children:Object(d.jsx)("img",{src:f,style:{height:"70px"},alt:"loading"})})}var N=0,P=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).fetchMoreData=Object(x.a)(m.a.mark((function t(){var a,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({page:e.state.page+1}),"https://newsapi.org/v2/top-headlines?country=".concat(e.props.country,"&category=").concat(e.props.category,"&apiKey=").concat(e.props.useApi,"&page=").concat(e.state.page,"&page_size=").concat(e.props.pageSize),console.log("well you are here"),t.next=5,fetch("https://free-news.p.rapidapi.com/v1/search?lang=en&q=".concat(e.props.category,"&page=").concat(e.state.page,"&page_size=").concat(e.props.pageSize),{method:"GET",headers:{"x-rapidapi-host":"free-news.p.rapidapi.com","x-rapidapi-key":"d966ca72e2msh74c212375cf5e08p1ab4d4jsn5daae3919c09"}});case 5:return a=t.sent,t.next=8,a.json();case 8:s=t.sent,console.log("ok"+s),e.setState({articles:e.state.articles.concat(s.articles),loading:!1});case 11:case"end":return t.stop()}}),t)}))),e.state={articles:[],loading:!1,page:1,totalResults:0},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(x.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.querySelector("title").text="".concat(this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1),"-NewsSpider"),this.props.setProgress(10),this.setState({loading:!0}),e.next=5,fetch("https://free-news.p.rapidapi.com/v1/search?lang=en&q=".concat(this.props.category,"&page=").concat(this.state.page,"&page_size=").concat(this.props.pageSize),{method:"GET",headers:{"x-rapidapi-host":"free-news.p.rapidapi.com","x-rapidapi-key":"d966ca72e2msh74c212375cf5e08p1ab4d4jsn5daae3919c09"}});case 5:return t=e.sent,e.next=8,t.json();case 8:a=e.sent,console.log(a),this.setState({articles:a.articles,totalResults:a.total_pages,loading:!1}),this.props.setProgress(100);case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"container my-3",children:[Object(d.jsxs)("div",{className:"heading my-3 mx-4",children:[Object(d.jsx)("h1",{className:"col-md-6",children:"Top Headlines"}),Object(d.jsx)("h3",{className:"my-2",style:{textAlign:"right"},children:this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)})]}),this.state.loading&&Object(d.jsx)(S,{margin:"200px"}),Object(d.jsx)(O.a,{dataLength:this.state.articles.length,next:this.fetchMoreData,hasMore:this.state.totalResults-this.state.articles.length>2,loader:Object(d.jsx)(S,{margin:"10px"}),children:Object(d.jsx)("div",{className:"row my-3 mx-3",children:!this.state.loading&&this.state.articles.map((function(e){if(void 0!==e)return e.media&&void 0!==e.media||(e.media=y),e.summary?e.summary.length>88&&(e.summary=e.summary.substring(0,88)+"..."):e.summary="",e.title?e.title.length>60&&(e.title=e.title.substring(0,60)+"..."):e.title="Breaking News",N++,Object(d.jsx)("div",{className:"col-md-4 my-2",children:Object(d.jsx)(v,{title:e.title,description:e.summary,siteLink:e.link,imageUrl:e.media,author:e.author,date:e.published_date,source:e.clean_url})},e.media+N)}))})})]})}}]),a}(s.Component);P.defaultsProps={country:"in",pageSize:9,category:"news",api:"d83d3319d9c540b3bf5a492670aa841"};var k=a(2),w=a(17),z=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).SetPageSize=5,e.api="db05e412641f4991a294284f82c1e131",e.state={progress:0},e.setProgress=function(t){e.setState({progress:t})},e}return Object(l.a)(a,[{key:"render",value:function(){var e;return Object(d.jsx)("div",{children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(b,{}),Object(d.jsx)(w.a,{color:"rgb(235, 118, 9)",height:3,progress:this.state.progress}),Object(d.jsxs)(k.c,{children:[Object(d.jsx)(k.a,{exact:!0,path:"/",element:Object(d.jsx)(P,(e={setProgress:this.setProgress},Object(i.a)(e,"setProgress",this.setProgress),Object(i.a)(e,"useApi",this.api),Object(i.a)(e,"setProgress",this.setProgress),Object(i.a)(e,"pageSize",this.SetPageSize),Object(i.a)(e,"country","in"),Object(i.a)(e,"category","general"),e),"news")}),Object(d.jsx)(k.a,{exact:!0,path:"/business",element:Object(d.jsx)(P,{setProgress:this.setProgress,useApi:this.api,pageSize:this.SetPageSize,country:"in",category:"business"},"business")}),Object(d.jsx)(k.a,{exact:!0,path:"/entertainment",element:Object(d.jsx)(P,{setProgress:this.setProgress,useApi:this.api,pageSize:this.SetPageSize,country:"in",category:"entertainment"},"entertainment")}),Object(d.jsx)(k.a,{exact:!0,path:"/health",element:Object(d.jsx)(P,{setProgress:this.setProgress,useApi:this.api,pageSize:this.SetPageSize,country:"in",category:"health"},"health")}),Object(d.jsx)(k.a,{exact:!0,path:"/science",element:Object(d.jsx)(P,{setProgress:this.setProgress,useApi:this.api,pageSize:this.SetPageSize,country:"in",category:"science"},"science")}),Object(d.jsx)(k.a,{exact:!0,path:"/sports",element:Object(d.jsx)(P,{setProgress:this.setProgress,useApi:this.api,pageSize:this.SetPageSize,country:"in",category:"sports"},"sport")}),Object(d.jsx)(k.a,{exact:!0,path:"/technology",element:Object(d.jsx)(P,{setProgress:this.setProgress,useApi:this.api,pageSize:this.SetPageSize,country:"in",category:"technology"},"tech")})]})]})})}}]),a}(s.Component),C=z,A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,27)).then((function(t){var a=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,n=t.getTTFB;a(e),s(e),r(e),c(e),n(e)}))};n.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root")),A()}},[[26,1,2]]]);
//# sourceMappingURL=main.ce3cee33.chunk.js.map