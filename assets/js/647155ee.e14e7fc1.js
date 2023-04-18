"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[7061],{3541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>h,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=(n(8561),["components"]),i={id:"nested-arguments",title:"Nested Resolvers and Shared Arguments"},h=void 0,l={unversionedId:"schema-generator/writing-schemas/nested-arguments",id:"version-4.x.x/schema-generator/writing-schemas/nested-arguments",title:"Nested Resolvers and Shared Arguments",description:"There are a few ways in which shared arguments can be accessed from different resolver levels. Say we have the following schema:",source:"@site/versioned_docs/version-4.x.x/schema-generator/writing-schemas/nested-arguments.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/nested-arguments",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/writing-schemas/nested-arguments",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/schema-generator/writing-schemas/nested-arguments.md",tags:[],version:"4.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1681792398,formattedLastUpdatedAt:"Apr 18, 2023",frontMatter:{id:"nested-arguments",title:"Nested Resolvers and Shared Arguments"},sidebar:"version-4.x.x/docs",previous:{title:"Annotations",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/writing-schemas/annotations"},next:{title:"Generator Configuration & Hooks",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/customizing-schemas/generator-config"}},c={},m=[{value:"DataFetchingEnvironment",id:"datafetchingenvironment",level:2},{value:"GraphQL Context",id:"graphql-context",level:2},{value:"Excluding Arguments from the Schema",id:"excluding-arguments-from-the-schema",level:2},{value:"Spring Integration",id:"spring-integration",level:2}],g={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are a few ways in which shared arguments can be accessed from different resolver levels. Say we have the following schema:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  findUser(id: String!): User\n}\n\ntype User {\n  photos(numberOfPhotos: Int!): [Photo!]!\n}\n\ntype Photo {\n  url: String!\n}\n")),(0,o.kt)("p",null,"In Kotlin code, when we are resolving  ",(0,o.kt)("inlineCode",{parentName:"p"},"photos"),", if we want access to the parent field ",(0,o.kt)("inlineCode",{parentName:"p"},"findUser")," and its arguments there\nare a couple ways we can access it:"),(0,o.kt)("h2",{id:"datafetchingenvironment"},"DataFetchingEnvironment"),(0,o.kt)("p",null,"You can add the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataFetchingEnvironment")," as an argument. This class will be ignored by the schema generator and will allow\nyou to view the entire query sent to the server. See more in the ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/schema-generator/execution/data-fetching-environment"},"DataFetchingEnvironment documentation")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class User {\n    fun photos(environment: DataFetchingEnvironment, numberOfPhotos: Int): List<Photo> {\n      val username = environment.executionStepInfo.parent.arguments["id"]\n      return getPhotosFromDataSource(username, numberOfPhotos)\n    }\n}\n')),(0,o.kt)("h2",{id:"graphql-context"},"GraphQL Context"),(0,o.kt)("p",null,"You can add the ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContext")," as an argument. This class will be ignored by the schema generator and will allow you to\nview the context object you set up in the data fetchers. See more in the ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/schema-generator/execution/contextual-data"},"GraphQLContext documentation")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class User {\n    fun photos(context: MyContextObject, numberOfPhotos: Int): List<Photo> {\n      val userId = context.getDataFromMyCustomFunction()\n      return getPhotosFromDataSource(userId, numberOfPhotos)\n    }\n}\n")),(0,o.kt)("h2",{id:"excluding-arguments-from-the-schema"},"Excluding Arguments from the Schema"),(0,o.kt)("p",null,"You can construct the child objects by passing down arguments as non-public fields or annotate the argument with ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/schema-generator/customizing-schemas/excluding-fields"},"@GraphQLIgnore")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class User(private val userId: String) {\n\n    fun photosProperty(numberOfPhotos: Int): List<Photo> {\n      return getPhotosFromDataSource(userId, numberOfPhotos)\n    }\n\n    fun photosIgnore(@GraphQLIgnore userId: String, numberOfPhotos: Int): List<Photo> {\n      return getPhotosFromDataSource(userId, numberOfPhotos)\n    }\n}\n")),(0,o.kt)("h2",{id:"spring-integration"},"Spring Integration"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/server/spring-server/spring-schema"},"Writing Schemas with Spring")," for integration details."))}u.isMDXComponent=!0}}]);