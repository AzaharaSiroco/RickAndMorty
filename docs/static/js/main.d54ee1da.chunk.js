(this.webpackJsonpcharacter=this.webpackJsonpcharacter||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(16),s=c.n(n),r=(c(22),c(14)),i=function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,species:e.species,status:e.status,image:e.image,origin:e.origin.name,episode:e.episode.length}}))}))},l=(c(23),c(7)),j=c(1),h=function(e){return Object(j.jsxs)(l.b,{to:"/character/".concat(e.character.id),children:[Object(j.jsx)("img",{className:"photo",src:e.character.image,alt:"Aqu\xed est\xe1 ".concat(e.name)}),Object(j.jsx)("h5",{className:"character_name",children:e.character.name}),Object(j.jsx)("p",{className:"character_specie",children:e.character.species})]})},o=function(e){var t=e.character.map((function(e){return Object(j.jsx)("li",{className:"eachCharacter",children:Object(j.jsx)(h,{className:"listCharacter",character:e})},e.id)}));return 0===t.length?Object(j.jsx)("h1",{children:"PERSONAJE NO ENCONTRADO"}):Object(j.jsx)("ul",{children:t})},d=function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("label",{className:"labelFilterName",children:"Encuentra tu personaje favorito"}),Object(j.jsx)("input",{type:"text",name:"name",id:"name",value:e.filterName,onChange:function(t){t.preventDefault(),e.handleChange({value:t.target.value,key:"name"})}})]})},u=function(e){return Object(j.jsx)("section",{children:Object(j.jsx)("form",{children:Object(j.jsx)(d,{handleChange:e.handleChange})})})},m=function(e){return Object(j.jsxs)("article",{className:"eachDetail",children:[Object(j.jsx)(l.b,{to:"/",children:Object(j.jsx)("span",{className:"characterDetailClose",children:"Cerrar"})}),Object(j.jsx)("img",{className:"photo_detail",src:e.image,alt:"Aqu\xed est\xe1 ".concat(e.name)}),Object(j.jsx)("h5",{className:"character_name_detail",children:e.name}),Object(j.jsx)("p",{className:"character_specie_detail",children:e.species}),Object(j.jsxs)("p",{className:"character_origin_detail",children:[" ",e.origin," "]}),Object(j.jsxs)("p",{className:"character_episode_detail",children:[" ",e.episode," "]}),Object(j.jsxs)("p",{className:"character_status_detail",children:[" ",e.status," "]})]},e.id)},b=c(2),O=c.p+"static/media/Rick_and_Morty_-_logo.de13d484.png",p=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),l=Object(r.a)(s,2),h=l[0],d=l[1],p=c.filter((function(e){return e.name.toLowerCase().includes(h.toLowerCase())}));Object(a.useEffect)((function(){i().then((function(e){n(e)}))}),[]);return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{className:"noSee",children:"RICK Y MORTY"}),Object(j.jsx)("img",{src:O,alt:"Logo",title:"Logo"}),Object(j.jsxs)(b.c,{children:[Object(j.jsxs)(b.a,{exact:!0,path:"/",children:[Object(j.jsx)(u,{handleChange:function(e){"name"===e.key&&d(e.value)}}),Object(j.jsx)(o,{character:p})]}),Object(j.jsx)(b.a,{path:"/character/:id",render:function(e){var t=parseInt(e.match.params.id);console.log(c);var a=c.find((function(e){return e.id===t}));return void 0===a?Object(j.jsx)("p",{children:"Oye eso existe"}):Object(j.jsx)(m,{image:a.image,name:a.name,species:a.species,origin:a.origin,episode:a.episode,status:a.status})}}),Object(j.jsx)(b.a,{path:"*",children:Object(j.jsx)("p",{children:"No existe"})})]})]})})};s.a.render(Object(j.jsx)(l.a,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.d54ee1da.chunk.js.map