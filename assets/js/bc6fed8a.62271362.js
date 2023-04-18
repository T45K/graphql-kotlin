"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[9494],{6220:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=(r(8561),["components"]),p={id:"spring-graphql-context",title:"Generating GraphQL Context"},s=void 0,l={unversionedId:"server/spring-server/spring-graphql-context",id:"version-4.x.x/server/spring-server/spring-graphql-context",title:"Generating GraphQL Context",description:"graphql-kotlin-spring-server provides a Spring specific implementation of GraphQLContextFactory and the context.",source:"@site/versioned_docs/version-4.x.x/server/spring-server/spring-graphql-context.md",sourceDirName:"server/spring-server",slug:"/server/spring-server/spring-graphql-context",permalink:"/graphql-kotlin/docs/4.x.x/server/spring-server/spring-graphql-context",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/server/spring-server/spring-graphql-context.md",tags:[],version:"4.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1681792398,formattedLastUpdatedAt:"Apr 18, 2023",frontMatter:{id:"spring-graphql-context",title:"Generating GraphQL Context"},sidebar:"version-4.x.x/docs",previous:{title:"Writing Schemas with Spring",permalink:"/graphql-kotlin/docs/4.x.x/server/spring-server/spring-schema"},next:{title:"HTTP Request and Response",permalink:"/graphql-kotlin/docs/4.x.x/server/spring-server/spring-http-request-response"}},d={},c=[{value:"Federated Context",id:"federated-context",level:2}],g={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides a Spring specific implementation of ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/server/graphql-context-factory"},"GraphQLContextFactory")," and the context."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SpringGraphQLContext")," - Implements the Spring ",(0,i.kt)("inlineCode",{parentName:"li"},"ServerRequest")," and federation tracing ",(0,i.kt)("inlineCode",{parentName:"li"},"HTTPRequestHeaders")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SpringGraphQLContextFactory")," - Generates a ",(0,i.kt)("inlineCode",{parentName:"li"},"SpringGraphQLContext")," per request")),(0,i.kt)("p",null,"If you are using ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server"),", you should extend ",(0,i.kt)("inlineCode",{parentName:"p"},"SpringGraphQLContext")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SpringGraphQLContextFactory")," to maintain support with all the other features."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyGraphQLContext(val myCustomValue: String, request: ServerRequest) : SpringGraphQLContext(request)\n\n@Component\nclass MyGraphQLContextFactory : SpringGraphQLContextFactory<MyGraphQLContext>() {\n    override suspend fun generateContext(request: ServerRequest): MyGraphQLContext {\n        val customVal = request.headers().firstHeader("MyHeader") ?: "defaultValue"\n        return MyGraphQLContext(customVal, request)\n    }\n}\n')),(0,i.kt)("p",null,"Once your application is configured to build your custom ",(0,i.kt)("inlineCode",{parentName:"p"},"MyGraphQLContext"),", you can then specify it as function argument.\nWhile executing the query, the corresponding GraphQL context will be read from the environment and automatically injected to the function input arguments.\nThis argument will not appear in the GraphQL schema."),(0,i.kt)("p",null,"For more details, see the ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/schema-generator/execution/contextual-data"},"Contextual Data Documentation"),"."),(0,i.kt)("h2",{id:"federated-context"},"Federated Context"),(0,i.kt)("p",null,"If you need ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/schema-generator/federation/federation-tracing"},"federation tracing support"),", you can set the appropiate ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/server/spring-server/spring-properties"},"configuration properties"),".\nThe provided ",(0,i.kt)("inlineCode",{parentName:"p"},"SpringGraphQLContext")," implements the required federation methods for tracing, so as long as you extend this context class you will maintain feature support."))}u.isMDXComponent=!0}}]);