(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"2FH3":function(e,t,n){"use strict";var a=n("UutA"),l=n("Khsi"),o=n("D/Zo"),i=n("mXGw"),r=n.n(i),c=n("/FXl"),m=n("x61h"),u=n("lmz1"),s=n("eive"),d=n("vyxW"),p=n("TfOH");var f=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var b=function(e){var t=e.children;return r.a.createElement("strong",null,t)},h=n("yTQu"),y=n("YnR1"),E=n("ay+O"),g=n("9xUs"),x=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function v(e){var t=e.items,n=e.depth;return r.a.createElement(x,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(v,{items:e.items,depth:n+1}):null)})))}v.defaultProps={depth:0};var w=v,k=n("yyAh");function O(e){var t=k.a.getPath(e.location.pathname),n=k.a.getVariantAndPage(e.root,t);if(!n)return null;var a=k.a.getVariantsForPage(e.root,n.page),o=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),o.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,i.variant.title),r.a.createElement(O.Menu,{direction:e.direction,width:e.menuWidth},o)))}O.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var _=O,C=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),S=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),j=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),H=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),z=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,x=i.title,v=i.description,O=i.status,G=i.source,N=i.additionalContributors,W=void 0===N?[]:N,F=k.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:s.a,Note:d.a,Prompt:f,PromptReply:b,Screenshot:h.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(m.a,{title:x,description:v}),r.a.createElement(u.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(C,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(y.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),r.a.createElement(S,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(I,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},x),v))),null!=F?r.a.createElement(j,null,r.a.createElement(_,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:F,location:a})):null),n.tableOfContents.items?r.a.createElement(H,{display:["none",null,"block"],position:"sticky",top:u.a+24,mt:"6px",maxHeight:"calc(100vh - "+u.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(w,{items:n.tableOfContents.items})):null,r.a.createElement(z,null,O||G?r.a.createElement(l.k,{mb:3,alignItems:"center"},O?r.a.createElement(g.a,{status:O}):null,r.a.createElement(l.e,{mx:"auto"}),G?r.a.createElement(E.a,{href:G}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:o.b,mr:2}):r.a.createElement(l.r,{icon:o.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(w,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(p.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(W.map((function(e){return{login:e}})))}))))))}},H2WS:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return m}));var a=n("oedh"),l=(n("mXGw"),n("/FXl")),o=(n("2FH3"),n("CPC0")),i={},r={_frontmatter:i},c=o.a;function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"hey"),Object(l.b)(o.b,{depth:"1",mdxType:"Index"}))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-index-mdx-60959d6c48c592fc9010.js.map