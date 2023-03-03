"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[4870],{1876:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=t(7462),n=t(3366),o=(t(7294),t(3905)),i=(t(8561),["components"]),s={id:"graphql-server",title:"GraphQLServer"},l=void 0,p={unversionedId:"server/graphql-server",id:"version-5.x.x/server/graphql-server",title:"GraphQLServer",description:"graphql-kotlin-server provides common code and basic interfaces to setup a GraphQL server in any framework.",source:"@site/versioned_docs/version-5.x.x/server/graphql-server.md",sourceDirName:"server",slug:"/server/graphql-server",permalink:"/graphql-kotlin/docs/5.x.x/server/graphql-server",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-5.x.x/server/graphql-server.md",tags:[],version:"5.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1677873135,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{id:"graphql-server",title:"GraphQLServer"},sidebar:"version-5.x.x/docs",previous:{title:"Federation Tracing",permalink:"/graphql-kotlin/docs/5.x.x/schema-generator/federation/federation-tracing"},next:{title:"GraphQLRequestParser",permalink:"/graphql-kotlin/docs/5.x.x/server/graphql-request-parser"}},h={},c=[{value:"<code>GraphQLServer</code>",id:"graphqlserver",level:2}],d={toc:c};function m(e){var r=e.components,t=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-server")," provides common code and basic interfaces to setup a GraphQL server in any framework."),(0,o.kt)("p",null,"The official reference implementations are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/graphql-kotlin/docs/5.x.x/server/spring-server/spring-overview"},"graphql-kotlin-spring-server"))),(0,o.kt)("p",null,"We recommend using one of the implementations as the common code has very little logic but you can still use the common\npackage to create implementation for other libraries (Ktor, Spark, etc)."),(0,o.kt)("p",null,"There are demos of how to use these server libraries in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/examples")," folder of the repo."),(0,o.kt)("h2",{id:"graphqlserver"},(0,o.kt)("inlineCode",{parentName:"h2"},"GraphQLServer")),(0,o.kt)("p",null,"The top level object in the common package is ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLServer<T>"),".\nThis class is open for extensions and requires that you specify the type of the http requests you will be handling."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For ",(0,o.kt)("a",{parentName:"li",href:"https://spring.io/reactive"},"Spring Reactive")," we would define a ",(0,o.kt)("inlineCode",{parentName:"li"},"GraphQLServer<ServerRequest>")),(0,o.kt)("li",{parentName:"ul"},"For ",(0,o.kt)("a",{parentName:"li",href:"https://ktor.io/"},"Ktor")," we would define a ",(0,o.kt)("inlineCode",{parentName:"li"},"GraphQLServer<ApplicationRequest>"))),(0,o.kt)("p",null,"In its simplest form, a GraphQL server has the following responsibilties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Parse the GraphQL request info from the HTTP request"),(0,o.kt)("li",{parentName:"ul"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"GraphQLContext")," object from the HTTP request to be used during execution"),(0,o.kt)("li",{parentName:"ul"},"Send the request and the context to the GraphQL schema to execute and get a response (may contain ",(0,o.kt)("inlineCode",{parentName:"li"},"data")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"errors"),")"),(0,o.kt)("li",{parentName:"ul"},"Send the reponse back to the client over HTTP")),(0,o.kt)("p",null,"Most of the logic in a GraphQL server that is specific to your application is already in the schema, so if we have interfaces for all these\ncommon functions, we can abstract away the library specific features."),(0,o.kt)("p",null,"The one method we don't have an interface for is sending back the response to the client. Once you get the response back from ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLServer"),",\nwe leave the rest up to your application to call it's server specific methods to encode and send the response."))}m.isMDXComponent=!0}}]);