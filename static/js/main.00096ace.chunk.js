(this["webpackJsonppokedex-with-pokeapi"]=this["webpackJsonppokedex-with-pokeapi"]||[]).push([[0],{31:function(e,t,a){e.exports={loader:"PokemonList_loader__3mfMe",FadeAnimation:"PokemonList_FadeAnimation__21EKh",spinner:"PokemonList_spinner__Pf8Df",spin:"PokemonList_spin__1Jr6a"}},52:function(e,t,a){e.exports=a(86)},57:function(e,t,a){},58:function(e,t,a){},85:function(e,t,a){e.exports=a.p+"static/media/psyduck.ac89d4f9.png"},86:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),c=a.n(r),s=(a(57),a(58),a(14)),o=a(15),i=a(18),m=a(17),u=a(19),p=a.n(u),d=a(23),h=a(22),E=a(16),g=a(24),k=a.n(g),f=a(31),b=a.n(f),v=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={pokeList:[],pokeListCopy:[],currentPageCards:[],currentPage:1,postsPerPage:24,pageNumbers:1,totalPosts:100,isSorted:!1,isLoading:!0},n.handlePagination=n.handlePagination.bind(Object(h.a)(n)),n}return Object(o.a)(a,[{key:"handlePagination",value:function(e){this.setState({currentPage:Number(e.target.dataset.pageid)})}},{key:"handleSort",value:function(){var e=this.state.pokeListCopy.slice(),t=this.state.isSorted;e.sort((function(e,a){var n=0;return e.name<a.name&&(n=-1),e.name>a.name&&(n=1),t?t?-1*n:void 0:n})),this.setState({pokeListCopy:e,isSorted:!t})}},{key:"componentDidMount",value:function(){var e=this;function t(){return(t=Object(d.a)(p.a.mark((function t(){var a,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.a.get("https://pokeapi.co/api/v2/pokemon/?limit=".concat(e.state.totalPosts));case 3:a=t.sent,n=a.data.results.map((function(e,t){return{name:e.name,id:t+1,urlDetail:e.url,image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t+1,".png"),path:"/pokemon/".concat(e.name)}})),e.setState({pokeList:n,pokeListCopy:n,isLoading:!1}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}},{key:"render",value:function(){var e=this,t=this.state.currentPage*this.state.postsPerPage,a=t-this.state.postsPerPage,n=this.state.pokeListCopy,r=n.slice(a,t);this.state.currentPageCards=r;for(var c=[],s=1;s<=Math.ceil(n.length/this.state.postsPerPage);s++)c.push(s);var o=function(){return l.a.createElement("div",{className:"row justify-content-end mx-4"},l.a.createElement("nav",{"aria-label":"Page navigation example"},l.a.createElement("ul",{className:"pagination"},c.map((function(t){return l.a.createElement("li",{key:"page".concat(t),className:e.state.currentPage===t?"page-item active":"page-item"},l.a.createElement("div",{"data-pageid":t,onClick:e.handlePagination,className:"page-link"},t))})))))},i=function(){return l.a.createElement("div",{className:b.a.loader},l.a.createElement("div",{className:b.a.spinner}))};return l.a.createElement("section",{className:"py-5 my-5"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Pokemon lists - Page Number ",this.state.currentPage),l.a.createElement(i,null),l.a.createElement("div",{className:"container my-5"},l.a.createElement("div",{className:"row justify-content-end my-3 mx-2"},l.a.createElement("div",{className:"col-md-6 col-lg-4"},l.a.createElement("button",{onClick:function(){return e.handleSort()},className:"btn btn-light btn-block"},l.a.createElement("i",{className:"fa ".concat(this.state.isSorted?"fa-arrow-down":"fa-arrow-up"),"aria-hidden":"true"}),"  ",this.state.isSorted?"Sort Z-A":"Sort A-Z"))),l.a.createElement("div",{className:"row mx-2"},this.state.currentPageCards.map((function(e,t){return l.a.createElement("div",{key:t,className:"col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-4"},l.a.createElement("div",{className:"rounded shadow-sm"},l.a.createElement("img",{src:e.image,alt:"Pokemon ".concat(e.name),className:"bg-secondary img-fluid card-img-top"}),l.a.createElement("div",{className:"bg-light py-3"},l.a.createElement("h5",{className:"text-dark"},e.name),l.a.createElement(E.b,{key:e.path,to:"/pokemon/".concat(e.name)},l.a.createElement("button",{type:"button",className:"btn btn-danger btn-sm text-decoration-none font-weight-bold"},"Read more about ",e.name)))))}))),l.a.createElement(o,null))))}}]),a}(n.Component),y=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null))}}]),a}(n.Component);function N(e){return l.a.createElement("section",null,l.a.createElement("div",{id:"carouselIndicators",className:"carousel slide w-80 mx-auto my-3","data-ride":"carousel"},l.a.createElement("div",{className:"carousel-inner border bg-light"},l.a.createElement("div",{className:"carousel-item active"},l.a.createElement("img",{className:"d-block img-fluid mx-auto",src:e.imageFront,alt:"First slide"})),l.a.createElement("div",{className:"carousel-item"},l.a.createElement("img",{className:"d-block img-fluid mx-auto",src:e.imageBack,alt:"Second slide"})),l.a.createElement("div",{className:"carousel-item"},l.a.createElement("img",{className:"d-block img-fluid mx-auto",src:e.imageFrontShiny,alt:"Third slide"})),l.a.createElement("div",{className:"carousel-item"},l.a.createElement("img",{className:"d-block img-fluid mx-auto",src:e.imageBackShiny,alt:"Fourth slide"}))),l.a.createElement("a",{className:"carousel-control-prev btn-dark",href:"#carouselIndicators",role:"button","data-slide":"prev"},l.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Previous")),l.a.createElement("a",{className:"carousel-control-next btn-dark",href:"#carouselIndicators",role:"button","data-slide":"next"},l.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Next"))))}var x=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={isLoading:!0,pokemonDetail:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.pokemonId,t=this;function a(){return(a=Object(d.a)(p.a.mark((function a(){var n,l,r,c,s,o,i,m,u,d,h,E;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,k.a.get("https://pokeapi.co/api/v2/pokemon/".concat(e));case 3:n=a.sent,l=n.data,r=l.name,c=l.weight,s=l.height,o=l.base_experience,i=l.stats,m=l.sprites,u=m.front_default,d=m.back_default,h=m.front_shiny,E=m.back_shiny,t.setState({isLoading:!1,pokemonDetail:{name:r,weight:c,height:s,base_experience:o,stats:i,sprites:{front_default:u,back_default:d,front_shiny:h,back_shiny:E}}}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.error(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))).apply(this,arguments)}!function(){a.apply(this,arguments)}()}},{key:"render",value:function(){return l.a.createElement("section",{className:"pt-5 mt-5"},l.a.createElement("div",{className:"container"},this.state.isLoading?l.a.createElement("div",null,"The Content is Loading"):l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"text-capitalize"},this.state.pokemonDetail.name," - Pokemon details"),l.a.createElement(N,{imageFront:this.state.pokemonDetail.sprites.front_default,imageBack:this.state.pokemonDetail.sprites.back_default,imageFrontShiny:this.state.pokemonDetail.sprites.front_shiny,imageBackShiny:this.state.pokemonDetail.sprites.back_shiny}),l.a.createElement("section",null,l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement(E.b,{to:"/pokemon"},l.a.createElement("button",{type:"button",className:"btn btn-info text-decoration-none"},l.a.createElement("i",{className:"fas fa-arrow-left"}," Go back to list"))))),l.a.createElement("table",{className:"table table-bordered table-hover table-light text-dark"},l.a.createElement("thead",{className:"thead-light"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Property Name"),l.a.createElement("th",{scope:"col"},"Value"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Name"),l.a.createElement("td",null,this.state.pokemonDetail.name)),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Weight"),l.a.createElement("td",null,this.state.pokemonDetail.weight," hectograms")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Height"),l.a.createElement("td",null,this.state.pokemonDetail.height," decimeters")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Base experience for defeat"),l.a.createElement("td",null,this.state.pokemonDetail.base_experience," xp")),this.state.pokemonDetail.stats.map((function(e,t){return l.a.createElement("tr",{key:"tr-".concat(t)},l.a.createElement("th",{className:"text-capitalize",scope:"row"},e.stat.name),l.a.createElement("td",null,e.base_stat))}))))))))}}]),a}(n.Component),P=a(11),w=(a(82),a(28)),_=a(20),j=a(49),L=a(34),S=a(35),D=a(50),C=a(51),O=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(w.a,{fixed:"top",collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},l.a.createElement(w.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(w.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(_.a,{className:"mr-auto"},l.a.createElement(_.a.Link,{href:"/"},"Home page"),l.a.createElement(_.a.Link,{href:"/pokemon"},"Main List"),l.a.createElement(_.a.Link,{href:"/about"},"About project")))))},T=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(j.a,{className:"my-5"},l.a.createElement(L.a,{className:"text-white my-5"},l.a.createElement(S.a,{className:"my-5"},l.a.createElement("h1",null,"My Home Page"))),l.a.createElement(L.a,{className:"my-5"},l.a.createElement(S.a,{className:""},l.a.createElement(D.a,{style:{opacity:"0.90"},className:"bg-dark text-white"},l.a.createElement("h3",null,"Welcome at my PokeDex Project"),l.a.createElement("img",{className:"my-3",src:a(85),alt:"psyduck"}),l.a.createElement("p",null,l.a.createElement(C.a,{href:"/pokemon",variant:"primary"},"Launch list!")))))))},F=function(){return l.a.createElement("section",{className:"py-5 my-5"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"About Project"),l.a.createElement("div",{className:"my-5 p-3 text-justify",style:{backgroundColor:"rgba(119, 111, 111, 0.18)"}},l.a.createElement("p",null,"This project is another one of recruitment task for my application as Junior Front-end Developer. This time it was from one big company. The task is to create custom Pokedex (pokemon lists). The goals are:"),l.a.createElement("ul",{className:"text-left"},l.a.createElement("li",null,"The app should have list with pagination"),l.a.createElement("li",null,"The app should have at least one sort options"),l.a.createElement("li",null,"The app should use the PokeApi v2"),l.a.createElement("li",null,'The app should be launched by "npm start"'),l.a.createElement("li",null,"The app should be compatible with node.js v12"),l.a.createElement("li",null,"The app should be fully responsive")),l.a.createElement("p",null,"I met a few obstacles:"),l.a.createElement("ul",{className:"text-left"},l.a.createElement("li",null,"The PokeApi doesn't enable endpoints to sort data at backend"),l.a.createElement("li",null,"There is need for some asynchronic functions for fetches"),l.a.createElement("li",null,"Making pagination and sorting at the some time was challenging")),l.a.createElement("p",null,"Further plans for this app:"),l.a.createElement("ul",{className:"text-left"},l.a.createElement("li",null,"Javascript unit tests, which I have to learn!"),l.a.createElement("li",null,"Basic backend"),l.a.createElement("li",null,"Ux improvements"),l.a.createElement("li",null,"Users login platform")))))};var A=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E.a,{basename:"/React-pokedex"},l.a.createElement(O,null),l.a.createElement(P.c,null,l.a.createElement(P.a,{exact:!0,path:"/",component:T}),l.a.createElement(P.a,{exact:!0,path:"/pokemon",component:y}),l.a.createElement(P.a,{path:"/pokemon/:pokemonId",component:x}),l.a.createElement(P.a,{path:"/about",component:F}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.00096ace.chunk.js.map