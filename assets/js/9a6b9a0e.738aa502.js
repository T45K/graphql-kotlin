"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[9485],{5230:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>h});var r=a(7462),n=a(3366),s=(a(7294),a(3905)),o=(a(8561),["components"]),l={id:"graphql-request-handler",title:"GraphQLRequestHandler"},i=void 0,p={unversionedId:"server/graphql-request-handler",id:"version-4.x.x/server/graphql-request-handler",title:"GraphQLRequestHandler",description:"The GraphQLRequestHandler is an open and extendable class that contains the basic logic to get a GraphQLResponse.",source:"@site/versioned_docs/version-4.x.x/server/graphql-request-handler.md",sourceDirName:"server",slug:"/server/graphql-request-handler",permalink:"/graphql-kotlin/docs/4.x.x/server/graphql-request-handler",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/server/graphql-request-handler.md",tags:[],version:"4.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1677873135,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{id:"graphql-request-handler",title:"GraphQLRequestHandler"},sidebar:"version-4.x.x/docs",previous:{title:"GraphQLContextFactory",permalink:"/graphql-kotlin/docs/4.x.x/server/graphql-context-factory"},next:{title:"Data Loaders",permalink:"/graphql-kotlin/docs/4.x.x/server/data-loaders"}},d={},h=[],c={toc:h};function u(e){var t=e.components,a=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"GraphQLRequestHandler")," is an open and extendable class that contains the basic logic to get a ",(0,s.kt)("inlineCode",{parentName:"p"},"GraphQLResponse"),"."),(0,s.kt)("p",null,"It requires a ",(0,s.kt)("inlineCode",{parentName:"p"},"GraphQLSchema")," and a ",(0,s.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/server/data-loaders"},"DataLoaderRegistryFactory")," in the constructor.\nFor each request, it accepts a ",(0,s.kt)("inlineCode",{parentName:"p"},"GraphQLRequest")," and an optional ",(0,s.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/server/graphql-context-factory"},"GraphQLContext"),", and calls the ",(0,s.kt)("inlineCode",{parentName:"p"},"DataLoaderRegistryFactory")," to generate a new ",(0,s.kt)("inlineCode",{parentName:"p"},"DataLoaderRegistry"),".\nThen all of these objects are sent to the schema for execution and the result is mapped to a ",(0,s.kt)("inlineCode",{parentName:"p"},"GraphQLResponse"),"."),(0,s.kt)("p",null,"There shouldn't be much need to change this class but if you wanted to add custom logic or logging it is possible to override it or just create your own."))}u.isMDXComponent=!0}}]);