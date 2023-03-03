"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[8278],{4856:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>h});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=(a(8561),["components"]),s={id:"contextual-data",title:"Contextual Data",original_id:"contextual-data"},l=void 0,p={unversionedId:"schema-generator/execution/contextual-data",id:"version-3.x.x/schema-generator/execution/contextual-data",title:"Contextual Data",description:'All GraphQL servers have a concept of a "context". A GraphQL context contains metadata that is useful to the GraphQL',source:"@site/versioned_docs/version-3.x.x/schema-generator/execution/contextual-data.md",sourceDirName:"schema-generator/execution",slug:"/schema-generator/execution/contextual-data",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/contextual-data",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/execution/contextual-data.md",tags:[],version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1677873135,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{id:"contextual-data",title:"Contextual Data",original_id:"contextual-data"},sidebar:"version-3.x.x/docs",previous:{title:"Data Fetching Environment",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/data-fetching-environment"},next:{title:"Optional Undefined Arguments",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/optional-undefined-arguments"}},c={},h=[{value:"GraphQLContext Interface",id:"graphqlcontext-interface",level:2},{value:"Spring Server",id:"spring-server",level:2},{value:"Customization",id:"customization",level:3}],u={toc:h};function d(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'All GraphQL servers have a concept of a "context". A GraphQL context contains metadata that is useful to the GraphQL\nserver, but shouldn\'t necessarily be part of the GraphQL schema. A prime example of something that is appropriate\nfor the GraphQL context would be trace headers for an OpenTracing system such as\n',(0,r.kt)("a",{parentName:"p",href:"https://expediadotcom.github.io/haystack"},"Haystack"),". The GraphQL query does not need the information to perform\nits function, but the server needs the information to ensure observability."),(0,r.kt)("p",null,"The contents of the GraphQL context vary across applications and it is up to the GraphQL server developers to decide\nwhat it should contain. For Spring based applications, ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides a simple mechanism to\nbuild context per query execution through\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/execution/GraphQLContextFactory.kt"},"GraphQLContextFactory"),".\nOnce context factory bean is available in the Spring application context it will then be used in a corresponding\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/execution/ContextWebFilter.kt"},"ContextWebFilter"),"\nto populate GraphQL context based on the incoming request and make it available during query execution. See ",(0,r.kt)("a",{parentName:"p",href:"../../spring-server/spring-graphql-context"},"graphql-kotlin-spring-server documentation"),"\nfor additional details"),(0,r.kt)("h2",{id:"graphqlcontext-interface"},"GraphQLContext Interface"),(0,r.kt)("p",null,"The easiest way to specify a context class is to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQLContext")," marker interface. This interface does not require any implementations,\nit is just used to inform the schema generator that this is the class that should be used as the context for every request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"\nclass MyGraphQLContext(val customValue: String) : GraphQLContext\n\n")),(0,r.kt)("p",null,"Then you can just use the class as an argument and it will be automatically injected during execution time."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'\nclass ContextualQuery {\n    fun contextualQuery(\n        context: MyGraphQLContext,\n        value: Int\n    ): String = "The custom value was ${context.customValue} and the value was $value"\n}\n\n')),(0,r.kt)("p",null,"The above query would produce the following GraphQL schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"\nschema {\n  query: Query\n}\n\ntype Query {\n  contextualQuery(value: Int!): String!\n}\n\n")),(0,r.kt)("p",null,"Note that the argument that implements ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQLContext")," is not reflected in the GraphQL schema."),(0,r.kt)("h2",{id:"spring-server"},"Spring Server"),(0,r.kt)("p",null,"For more details on how to create the context while using ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," see the ",(0,r.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/spring-server/spring-graphql-context"},"spring graphql context page"),"."),(0,r.kt)("h3",{id:"customization"},"Customization"),(0,r.kt)("p",null,"The context is injected into the execution through the ",(0,r.kt)("inlineCode",{parentName:"p"},"FunctionDataFetcher")," class. If you want to customize the logic on how the context is determined, that is possible to override. See more details on the ",(0,r.kt)("a",{parentName:"p",href:"./fetching-data"},"Fetching Data documentation")))}d.isMDXComponent=!0}}]);