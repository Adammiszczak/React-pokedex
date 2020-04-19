(this["webpackJsonppokedex-with-pokeapi"]=this["webpackJsonppokedex-with-pokeapi"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(32),c=a.n(r),s=(a(70),a(71),a(22)),o=a(23),i=a(26),m=a(24),u=a(27),p=a.n(u),h=a(34),d=a(33),E=a(10),k=a(43),g=a.n(k),b=a(29),f=a(62),y=a(13),v=a(18),x=a(15),N=a(37),w=a(48),P=a(60),_=a.n(P),j=a(35),L=a.n(j),S=(a(44),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={pokeList:[],pokeListCopy:[],currentPageCards:[],currentPage:1,postsPerPage:24,pageNumbers:1,totalPosts:100,isSorted:!1,isLoading:!0},n.handlePagination=n.handlePagination.bind(Object(d.a)(n)),n}return Object(o.a)(a,[{key:"handlePagination",value:function(e){this.setState({currentPage:Number(e.target.dataset.pageid)})}},{key:"handleSort",value:function(){var e=this.state.pokeListCopy.slice(),t=this.state.isSorted;e.sort((function(e,a){var n=0;return e.name<a.name&&(n=-1),e.name>a.name&&(n=1),t?t?-1*n:void 0:n})),this.setState({pokeListCopy:e,isSorted:!t})}},{key:"componentDidMount",value:function(){var e=this;function t(){return(t=Object(h.a)(p.a.mark((function t(){var a,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,L.a.get("https://pokeapi.co/api/v2/pokemon/?limit=".concat(e.state.totalPosts));case 3:return a=t.sent,n=a.data.results.map((function(e,t){return{name:e.name,id:t+1,urlDetail:e.url,image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t+1,".png"),path:"/pokemon/".concat(e.name)}})),t.next=7,e.setState({pokeList:n,pokeListCopy:n,isLoading:!1});case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}},{key:"render",value:function(){var e=this,t=this.state.currentPage*this.state.postsPerPage,a=t-this.state.postsPerPage,n=this.state.pokeListCopy,r=n.slice(a,t);this.state.currentPageCards=r;for(var c=[],s=1;s<=Math.ceil(n.length/this.state.postsPerPage);s++)c.push(s);var o=function(){return l.a.createElement(w.a,{className:"mr-3"},c.map((function(t){return l.a.createElement(w.a.Item,{onClick:e.handlePagination,"data-pageid":t,key:"page".concat(t),className:e.state.currentPage===t?"page-item active":"page-item"},t)})))};return l.a.createElement(l.a.Fragment,null,l.a.createElement(x.a,{className:"my-5"},l.a.createElement(y.a,{className:"text-white my-5"},l.a.createElement(v.a,{className:"my-5"},l.a.createElement("h1",null,"Pokemon lists - Page Number ",this.state.currentPage)))),l.a.createElement(x.a,{className:"mt-5"},l.a.createElement(y.a,{className:"text-white justify-content-end mb-2"},l.a.createElement(v.a,{className:"mb-2",lg:4,md:6},l.a.createElement("button",{onClick:function(){return e.handleSort()},className:"btn btn-light btn-block text-primary"},l.a.createElement("i",{className:"fa ".concat(this.state.isSorted?"fa-arrow-down":"fa-arrow-up"),"aria-hidden":"true"}),"  ",this.state.isSorted?"Sort Z-A":"Sort A-Z"))),l.a.createElement(y.a,{className:"text-white my-2 text-justify"},this.state.currentPageCards.map((function(e,t){return l.a.createElement(v.a,{className:"mb-3",key:t,xl:3,lg:4,md:6,sm:6,xs:12},l.a.createElement(f.a,null,l.a.createElement(b.a,{border:"dark"},l.a.createElement(b.a.Img,{as:_.a,fallbackImage:g.a,initialImage:g.a,className:"bg-secondary",variant:"top",src:e.image,alt:"Pokemon ".concat(e.name)}),l.a.createElement(b.a.Body,{className:"text-dark text-center"},l.a.createElement(b.a.Title,null,e.name),l.a.createElement(b.a.Text,null,l.a.createElement(N.a,{as:E.b,to:"/pokemon/".concat(e.name),variant:"danger"},"Read more"))))))}))),l.a.createElement(y.a,{className:"text-white justify-content-end"},l.a.createElement(o,null))))}}]),a}(n.Component)),T=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(S,null))}}]),a}(n.Component),D=(a(59),a(28));function F(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(x.a,{className:"px-0 my-3"},l.a.createElement(D.a,{indicators:!1,prevIcon:l.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon bg-dark"}),className:"bg-dark",style:{opacity:"0.90"}},l.a.createElement(D.a.Item,null,l.a.createElement("img",{className:"d-block img-fluid mx-auto",src:e.imageFront,alt:"First slide"})),l.a.createElement(D.a.Item,null,l.a.createElement("img",{className:"d-block img-fluid mx-auto",src:e.imageBack,alt:"Third slide"})),l.a.createElement(D.a.Item,null,l.a.createElement("img",{className:"d-block img-fluid mx-auto",src:e.imageFrontShiny,alt:"Third slide"})),l.a.createElement(D.a.Item,null,l.a.createElement("img",{className:"d-block img-fluid mx-auto",src:e.imageBackShiny,alt:"Third slide"})))))}var O=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={isLoading:!0,pokemonDetail:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.pokemonId,t=this;function a(){return(a=Object(h.a)(p.a.mark((function a(){var n,l,r,c,s,o,i,m,u,h,d,E;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,L.a.get("https://pokeapi.co/api/v2/pokemon/".concat(e));case 3:n=a.sent,l=n.data,r=l.name,c=l.weight,s=l.height,o=l.base_experience,i=l.stats,m=l.sprites,u=m.front_default,h=m.back_default,d=m.front_shiny,E=m.back_shiny,t.setState({isLoading:!1,pokemonDetail:{name:r,weight:c,height:s,base_experience:o,stats:i,sprites:{front_default:u,back_default:h,front_shiny:d,back_shiny:E}}}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.error(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))).apply(this,arguments)}!function(){a.apply(this,arguments)}()}},{key:"render",value:function(){return l.a.createElement("section",{className:"pt-5 mt-5"},l.a.createElement("div",{className:"container"},this.state.isLoading?l.a.createElement("div",null,"The Content is Loading"):l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"text-capitalize text-white mb-5"},this.state.pokemonDetail.name," - Pokemon details"),l.a.createElement(F,{imageFront:this.state.pokemonDetail.sprites.front_default,imageBack:this.state.pokemonDetail.sprites.back_default,imageFrontShiny:this.state.pokemonDetail.sprites.front_shiny,imageBackShiny:this.state.pokemonDetail.sprites.back_shiny}),l.a.createElement("section",null,l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement(E.b,{to:"/pokemon"},l.a.createElement("button",{type:"button",className:"btn btn-info text-decoration-none"},l.a.createElement("i",{className:"fas fa-arrow-left"}," Go back to list"))))),l.a.createElement("table",{className:"table table-bordered table-hover table-light text-dark"},l.a.createElement("thead",{className:"thead-light"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Property Name"),l.a.createElement("th",{scope:"col"},"Value"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Name"),l.a.createElement("td",null,this.state.pokemonDetail.name)),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Weight"),l.a.createElement("td",null,this.state.pokemonDetail.weight," hectograms")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Height"),l.a.createElement("td",null,this.state.pokemonDetail.height," decimeters")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Base experience for defeat"),l.a.createElement("td",null,this.state.pokemonDetail.base_experience," xp")),this.state.pokemonDetail.stats.map((function(e,t){return l.a.createElement("tr",{key:"tr-".concat(t)},l.a.createElement("th",{className:"text-capitalize",scope:"row"},e.stat.name),l.a.createElement("td",null,e.base_stat))}))))))))}}]),a}(n.Component),C=a(16),I=a(40),A=a(31),B=a(47),M=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(I.a,{collapseOnSelect:!0,fixed:"top",expand:"lg",bg:"dark",variant:"dark"},l.a.createElement(I.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(I.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(A.a,{className:"mr-auto"},l.a.createElement(A.a.Link,{as:E.b,to:"/"},"Home Page"),l.a.createElement(A.a.Link,{as:E.b,to:"/pokemon"},"Main List"),l.a.createElement(A.a.Link,{as:E.b,to:"/about"},"About project")))))},J=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(x.a,{className:"my-5"},l.a.createElement(y.a,{className:"text-white my-5"},l.a.createElement(v.a,{className:"my-5"},l.a.createElement("h1",null,"My Home Page"))),l.a.createElement(y.a,{className:"my-5"},l.a.createElement(v.a,{className:""},l.a.createElement(B.a,{style:{opacity:"0.90"},className:"bg-dark text-white"},l.a.createElement("h3",null,"Welcome at my PokeDex Project"),l.a.createElement("img",{className:"my-3",src:a(99),alt:"psyduck"}),l.a.createElement("p",null,l.a.createElement(E.b,{to:"/pokemon"},l.a.createElement(N.a,{size:"lg",variant:"primary"},"Launch list!"))))))))},W=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(x.a,{className:"my-5"},l.a.createElement(y.a,{className:"text-white my-5 text-justify"},l.a.createElement(v.a,{className:"my-5 text-center"},l.a.createElement("h1",null,"About project")),l.a.createElement(B.a,{style:{opacity:"0.90"},className:"bg-dark text-white"},l.a.createElement("p",null,"This project is another one of recruitment task for my application as Junior Front-end Developer. This time it was from one big company. The task is to create custom Pokedex (pokemon lists). The goals are:"),l.a.createElement("ul",null,l.a.createElement("li",null,"The app should have list with pagination"),l.a.createElement("li",null,"The app should have at least one sort options"),l.a.createElement("li",null,"The app should use the PokeApi v2"),l.a.createElement("li",null,'The app should be launched by "npm start"'),l.a.createElement("li",null,"The app should be compatible with node.js v12"),l.a.createElement("li",null,"The app should be fully responsive")),l.a.createElement("p",null,"I met a few obstacles:"),l.a.createElement("ul",null,l.a.createElement("li",null,"The PokeApi doesn't enable endpoints to sort data at backend"),l.a.createElement("li",null,"There is need for some asynchronic functions for fetches"),l.a.createElement("li",null,"Making pagination and sorting at the some time was challenging")),l.a.createElement("p",null,"Further plans for this app:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Javascript unit tests, which I have to learn!"),l.a.createElement("li",null,"Basic backend"),l.a.createElement("li",null,"Ux improvements"),l.a.createElement("li",null,"Users login platform"))))))};var z=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E.a,{basename:"/React-pokedex"},l.a.createElement(M,null),l.a.createElement(C.c,null,l.a.createElement(C.a,{exact:!0,path:"/",component:J}),l.a.createElement(C.a,{exact:!0,path:"/pokemon",component:T}),l.a.createElement(C.a,{path:"/pokemon/:pokemonId",component:O}),l.a.createElement(C.a,{path:"/about",component:W}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},43:function(e,t,a){e.exports=a.p+"static/media/pokeball.6a3a5232.png"},44:function(e,t,a){e.exports={loader:"PokemonList_loader__3mfMe",FadeAnimation:"PokemonList_FadeAnimation__21EKh",spinner:"PokemonList_spinner__Pf8Df",spin:"PokemonList_spin__1Jr6a"}},65:function(e,t,a){e.exports=a(100)},70:function(e,t,a){},71:function(e,t,a){},99:function(e,t,a){e.exports=a.p+"static/media/psyduck.ac89d4f9.png"}},[[65,1,2]]]);
//# sourceMappingURL=main.cac09822.chunk.js.map