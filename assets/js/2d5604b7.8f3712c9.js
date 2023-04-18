"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[2943],{3321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=(n(8561),["components"]),d={id:"federation-tracing",title:"Federation Tracing"},p=void 0,l={unversionedId:"schema-generator/federation/federation-tracing",id:"version-6.x.x/schema-generator/federation/federation-tracing",title:"Federation Tracing",description:"graphql-kotlin-federation module relies on apollographql/federation-jvm",source:"@site/versioned_docs/version-6.x.x/schema-generator/federation/federation-tracing.md",sourceDirName:"schema-generator/federation",slug:"/schema-generator/federation/federation-tracing",permalink:"/graphql-kotlin/docs/schema-generator/federation/federation-tracing",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-6.x.x/schema-generator/federation/federation-tracing.md",tags:[],version:"6.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1681792398,formattedLastUpdatedAt:"Apr 18, 2023",frontMatter:{id:"federation-tracing",title:"Federation Tracing"},sidebar:"docs",previous:{title:"Federated Type Resolution",permalink:"/graphql-kotlin/docs/schema-generator/federation/type-resolution"},next:{title:"GraphQLServer",permalink:"/graphql-kotlin/docs/server/graphql-server"}},s={},c=[{value:"GraphQL Context Map",id:"graphql-context-map",level:3},{value:"<code>FederatedGraphQLContext</code> (Deprecated)",id:"federatedgraphqlcontext-deprecated",level:3}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," module relies on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apollographql/federation-jvm"},"apollographql/federation-jvm"),"\npackage to provide support for Apollo Federation tracing. Tracing is turned on by including ",(0,o.kt)("inlineCode",{parentName:"p"},"FederatedTracingInstrumentation"),"\nin your GraphQL instance. In order for the ",(0,o.kt)("inlineCode",{parentName:"p"},"FederatedTracingInstrumentation")," to know whether incoming request should be\ntraced, we need to provide it a ",(0,o.kt)("inlineCode",{parentName:"p"},"apollo-federation-include-trace")," header value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val schema = toFederatedSchema(myFederatedConfig, listOf(TopLevelObject(MyFederatedQuery())))\nval graphQL = GraphQL.newGraphQL(schema)\n    .instrumentation(FederatedTracingInstrumentation())\n    .build()\n")),(0,o.kt)("h3",{id:"graphql-context-map"},"GraphQL Context Map"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Default ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContextFactory")," provided by ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," populates this header information automatically.")),(0,o.kt)("p",null,"Tracing header information can be provided by populating info directly on the GraphQL context map."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val contextMap = mutableMapOf<Any, Any>()\n    .also { map ->\n        request.headers().firstHeader(FEDERATED_TRACING_HEADER_NAME)?.let { headerValue ->\n            map[FEDERATED_TRACING_HEADER_NAME] = headerValue\n        }\n    }\n\nval executionInput = ExecutionInput.newExecutionInput()\n    .graphQLContext(contextMap)\n    .query(queryString)\n    .build()\ngraphql.executeAsync(executionInput)\n")),(0,o.kt)("h3",{id:"federatedgraphqlcontext-deprecated"},(0,o.kt)("inlineCode",{parentName:"h3"},"FederatedGraphQLContext")," (Deprecated)"),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Support for custom GraphQL context object is deprecated and will be removed in future releases. Please migrate to use\ngeneric GraphQL context map.")),(0,o.kt)("p",null,"To best support tracing, the context must implement a specific method to get the HTTP headers from the request.\nThis is done by implementing the ",(0,o.kt)("inlineCode",{parentName:"p"},"FederatedGraphQLContext")," interface instead of just the ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContext")," interface\nfrom ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MyFederatedGraphQLContext(private val request: ServerRequest) : FederatedGraphQLContext {\n    override fun getHTTPRequestHeader(caseInsensitiveHeaderName: String): String? =\n        request.headers().firstHeader(caseInsensitiveHeaderName)\n}\n\nval executionInput = ExecutionInput.newExecutionInput()\n    .context(MyFederatedGraphQLContext(httpRequest))\n    .query(queryString)\n    .build()\ngraphql.executeAsync(executionInput)\n")))}m.isMDXComponent=!0}}]);