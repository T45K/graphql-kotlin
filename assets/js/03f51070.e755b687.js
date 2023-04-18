"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[8600],{3995:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=n(7462),o=n(3366),a=(n(7294),n(3905)),r=(n(8561),["components"]),s={id:"subscriptions",title:"Subscriptions"},p=void 0,l={unversionedId:"schema-generator/execution/subscriptions",id:"version-5.x.x/schema-generator/execution/subscriptions",title:"Subscriptions",description:"Subscriptions are supported with graphql-java. See their documentation first:",source:"@site/versioned_docs/version-5.x.x/schema-generator/execution/subscriptions.md",sourceDirName:"schema-generator/execution",slug:"/schema-generator/execution/subscriptions",permalink:"/graphql-kotlin/docs/5.x.x/schema-generator/execution/subscriptions",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-5.x.x/schema-generator/execution/subscriptions.md",tags:[],version:"5.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1681792398,formattedLastUpdatedAt:"Apr 18, 2023",frontMatter:{id:"subscriptions",title:"Subscriptions"},sidebar:"version-5.x.x/docs",previous:{title:"Optional Undefined Arguments",permalink:"/graphql-kotlin/docs/5.x.x/schema-generator/execution/optional-undefined-arguments"},next:{title:"Introspection",permalink:"/graphql-kotlin/docs/5.x.x/schema-generator/execution/introspection"}},u={},c=[{value:"Flow Support",id:"flow-support",level:3},{value:"Subscription Hooks",id:"subscription-hooks",level:3},{value:"<code>didGenerateSubscriptionType</code>",id:"didgeneratesubscriptiontype",level:4},{value:"<code>isValidSubscriptionReturnType</code>",id:"isvalidsubscriptionreturntype",level:4},{value:"Server Implementation",id:"server-implementation",level:3}],d={toc:c};function h(e){var t=e.components,n=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Subscriptions are supported with ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql-java"),". See their documentation first:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.graphql-java.com/documentation/v16/subscriptions/"},"https://www.graphql-java.com/documentation/v16/subscriptions/")),(0,a.kt)("p",null,"To make a function a subscription function you just have to have the return type wrapped in an implementation of a\nreactive-streams ",(0,a.kt)("inlineCode",{parentName:"p"},"Publisher<T>"),". As an example, here is a function that uses Spring WebFlux to return a random number every\nsecond. Since ",(0,a.kt)("inlineCode",{parentName:"p"},"Flux")," is an implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"Publisher")," this is a valid method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun counter(): Flux<Int> = Flux.interval(Duration.ofSeconds(1)).map { Random.nextInt() }\n")),(0,a.kt)("p",null,"Then in the ",(0,a.kt)("inlineCode",{parentName:"p"},"toSchema")," method you just have to provide a ",(0,a.kt)("inlineCode",{parentName:"p"},"List<TopLevelObject>")," the same way as queries and mutations\nare provided with the ",(0,a.kt)("inlineCode",{parentName:"p"},"subscriptions")," argument."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"toSchema(\n    config = schemaConfig,\n    queries = queries.toTopLevelObjects(),\n    mutations = mutations.toTopLevelObjects(),\n    subscriptions = subscriptions.toTopLevelObjects()\n)\n")),(0,a.kt)("h3",{id:"flow-support"},"Flow Support"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," provides support for Kotlin ",(0,a.kt)("inlineCode",{parentName:"p"},"Flow")," through ",(0,a.kt)("inlineCode",{parentName:"p"},"FlowSubscriptionExecutionStrategy"),". Thanks to the Kotlin\ncoroutines interoperability, this strategy also works with any ",(0,a.kt)("inlineCode",{parentName:"p"},"Publisher")," and will automatically convert them to a ",(0,a.kt)("inlineCode",{parentName:"p"},"Flow"),"."),(0,a.kt)("h3",{id:"subscription-hooks"},"Subscription Hooks"),(0,a.kt)("h4",{id:"didgeneratesubscriptiontype"},(0,a.kt)("inlineCode",{parentName:"h4"},"didGenerateSubscriptionType")),(0,a.kt)("p",null,"This hook is called after a new subscription type is generated but before it is added to the schema. The other generator hooks are still called so you can add logic for the types and\nvalidation of subscriptions the same as queries and mutations."),(0,a.kt)("h4",{id:"isvalidsubscriptionreturntype"},(0,a.kt)("inlineCode",{parentName:"h4"},"isValidSubscriptionReturnType")),(0,a.kt)("p",null,"This hook is called when generating the functions for each subscription. It allows for changing the rules of what classes can be used as the return type. By default, graphql-java supports ",(0,a.kt)("inlineCode",{parentName:"p"},"org.reactivestreams.Publisher"),"."),(0,a.kt)("p",null,"To effectively use this hook, you should also override the ",(0,a.kt)("inlineCode",{parentName:"p"},"willResolveMonad")," hook, and if you are using ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," you should override the ",(0,a.kt)("inlineCode",{parentName:"p"},"GraphQL")," bean to specify a custom subscription execution strategy."),(0,a.kt)("h3",{id:"server-implementation"},"Server Implementation"),(0,a.kt)("p",null,"The server that runs your GraphQL schema will have to support some method for subscriptions, like WebSockets.\n",(0,a.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides a default WebSocket based implementation. See more details in the\n",(0,a.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/server/server-subscriptions"},"server documentation"),"."))}h.isMDXComponent=!0}}]);