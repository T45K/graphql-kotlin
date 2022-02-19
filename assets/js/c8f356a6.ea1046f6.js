"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[964],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>g});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),g=a,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||i;return t?n.createElement(m,o(o({ref:r},c),{},{components:t})):n.createElement(m,o({ref:r},c))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:(e,r,t)=>{t.d(r,{Z:()=>a});var n=t(7294);const a=function(e){var r=e.children,t=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:a},r)}},1395:(e,r,t)=>{t.d(r,{Z:()=>c});var n=t(7294),a=t(944),i=t(6010);const o="tabItem_vU9c",s="tabItemActive_cw6a";var l=37,p=39;const c=function(e){var r=e.lazy,t=e.block,c=e.defaultValue,u=e.values,d=e.groupId,g=e.className,m=(0,a.Z)(),v=m.tabGroupChoices,f=m.setTabGroupChoices,h=(0,n.useState)(c),b=h[0],k=h[1],y=n.Children.toArray(e.children),w=[];if(null!=d){var x=v[d];null!=x&&x!==b&&u.some((function(e){return e.value===x}))&&k(x)}var N=function(e){var r=e.currentTarget,t=w.indexOf(r),n=u[t].value;k(n),null!=d&&(f(d,n),setTimeout((function(){var e,t,n,a,i,o,l,p;(e=r.getBoundingClientRect(),t=e.top,n=e.left,a=e.bottom,i=e.right,o=window,l=o.innerHeight,p=o.innerWidth,t>=0&&i<=p&&a<=l&&n>=0)||(r.scrollIntoView({block:"center",behavior:"smooth"}),r.classList.add(s),setTimeout((function(){return r.classList.remove(s)}),2e3))}),150))},O=function(e){var r,t;switch(e.keyCode){case p:var n=w.indexOf(e.target)+1;t=w[n]||w[0];break;case l:var a=w.indexOf(e.target)-1;t=w[a]||w[w.length-1]}null==(r=t)||r.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},g)},u.map((function(e){var r=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:b===r?0:-1,"aria-selected":b===r,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":b===r}),key:r,ref:function(e){return w.push(e)},onKeyDown:O,onFocus:N,onClick:N},t)}))),r?(0,n.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map((function(e,r){return(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==b})}))))}},9443:(e,r,t)=>{t.d(r,{Z:()=>n});const n=(0,t(7294).createContext)(void 0)},944:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(7294),a=t(9443);const i=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},2537:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>p,metadata:()=>c,toc:()=>u,default:()=>g});var n=t(7462),a=t(3366),i=(t(7294),t(3905)),o=t(1395),s=t(8215),l=["components"],p={id:"spring-overview",title:"Spring Server Overview"},c={unversionedId:"server/spring-server/spring-overview",id:"version-5.x.x/server/spring-server/spring-overview",isDocsHomePage:!1,title:"Spring Server Overview",description:"graphql-kotlin-spring-server",source:"@site/versioned_docs/version-5.x.x/server/spring-server/spring-overview.mdx",sourceDirName:"server/spring-server",slug:"/server/spring-server/spring-overview",permalink:"/graphql-kotlin/docs/5.x.x/server/spring-server/spring-overview",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-5.x.x/server/spring-server/spring-overview.mdx",version:"5.x.x",lastUpdatedBy:"Matthias L\xfcneberg",lastUpdatedAt:1645309779,formattedLastUpdatedAt:"2/19/2022",frontMatter:{id:"spring-overview",title:"Spring Server Overview"},sidebar:"version-5.x.x/docs",previous:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/5.x.x/server/server-subscriptions"},next:{title:"Writing Schemas with Spring",permalink:"/graphql-kotlin/docs/5.x.x/server/spring-server/spring-schema"}},u=[{value:"WebFlux vs WebMVC",id:"webflux-vs-webmvc",children:[]},{value:"Setup",id:"setup",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Default Routes",id:"default-routes",children:[]}],d={toc:u};function g(e){var r=e.components,p=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,p,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/graphql-kotlin-spring-server"},"graphql-kotlin-spring-server"),"\nis a Spring Boot auto-configuration library that automatically configures beans required to start up a reactive GraphQL\nweb server."),(0,i.kt)("h2",{id:"webflux-vs-webmvc"},"WebFlux vs WebMVC"),(0,i.kt)("p",null,"This library is built on a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html"},"Spring WebFlux (reactive)")," stack which is a non-blocking alternative to a traditional ",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html"},"Spring Web MVC (servlet)")," based stack.\nSince the frameworks utilize different threading models they cannot and should not be intermixed.\nWhen building a GraphQL server using ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," all your queries and mutations should follow one of the supported ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/schema-generator/execution/async-models"},"asynchronous execution models"),"."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"The simplest way to create a new Kotlin Spring Boot app is by generating one using ",(0,i.kt)("a",{parentName:"p",href:"https://start.spring.io/"},"Spring Initializr.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image of https://start.spring.io/",src:t(2125).Z})),(0,i.kt)("p",null,"Once you get the sample application setup locally, you will need to add ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," dependency:"),(0,i.kt)(o.Z,{defaultValue:"gradle",values:[{label:"Gradle Kotlin",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"gradle",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("com.expediagroup", "graphql-kotlin-spring-server", latestVersion)\n'))),(0,i.kt)(s.Z,{value:"maven",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-spring-server</artifactId>\n    <version>${latestVersion}</version>\n</dependency>\n")))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"At a minimum, in order for ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," to automatically configure your GraphQL web server you need to\nspecify a list of supported packages that can be scanned for exposing your schema objects through reflections."),(0,i.kt)("p",null,"You can do this through the spring application config or by overriding the ",(0,i.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorConfig")," bean. See customization below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'graphql:\n  packages:\n    - "com.your.package"\n')),(0,i.kt)("h2",{id:"default-routes"},"Default Routes"),(0,i.kt)("p",null,"Your newly created GraphQL server starts up with following preconfigured default routes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"/graphql")," - GraphQL server endpoint used for processing queries and mutations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"/subscriptions")," - GraphQL server endpoint used for processing subscriptions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"/sdl")," - Convenience endpoint that returns current schema in Schema Definition Language format"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"/playground")," - Prisma Labs ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/prisma-labs/graphql-playground"},"GraphQL Playground IDE")," endpoint")))}g.isMDXComponent=!0},6010:(e,r,t)=>{function n(e){var r,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=n(e[r]))&&(a&&(a+=" "),a+=t);else for(r in e)e[r]&&(a&&(a+=" "),a+=r);return a}function a(){for(var e,r,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(r=n(e))&&(a&&(a+=" "),a+=r);return a}t.d(r,{Z:()=>a})},2125:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/spring-initializer-a906245aeee5602ea82b7bb98a9a50bb.png"}}]);