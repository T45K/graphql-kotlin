"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[1932],{8456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=n(3366),d=(n(7294),n(3905)),i=(n(8561),["components"]),o={id:"federated-schemas",title:"Federated Schemas",original_id:"federated-schemas"},s=void 0,l={unversionedId:"federated/federated-schemas",id:"version-3.x.x/federated/federated-schemas",title:"Federated Schemas",description:"graphql-kotlin-federation library extends the functionality of the graphql-kotlin-schema-generator and allows you to",source:"@site/versioned_docs/version-3.x.x/federated/federated-schemas.md",sourceDirName:"federated",slug:"/federated/federated-schemas",permalink:"/graphql-kotlin/docs/3.x.x/federated/federated-schemas",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/federated/federated-schemas.md",tags:[],version:"3.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1681792398,formattedLastUpdatedAt:"Apr 18, 2023",frontMatter:{id:"federated-schemas",title:"Federated Schemas",original_id:"federated-schemas"},sidebar:"version-3.x.x/docs",previous:{title:"Apollo Federation",permalink:"/graphql-kotlin/docs/3.x.x/federated/apollo-federation"},next:{title:"Federated Directives",permalink:"/graphql-kotlin/docs/3.x.x/federated/federated-directives"}},p={},c=[{value:"Base Schema",id:"base-schema",level:3},{value:"Extended Schema",id:"extended-schema",level:4},{value:"Federated GraphQL schema",id:"federated-graphql-schema",level:4}],h={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,d.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,(0,d.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," library extends the functionality of the ",(0,d.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," and allows you to\neasily generate federated GraphQL schemas directly from the code. Federated schema is generated by calling\n",(0,d.kt)("inlineCode",{parentName:"p"},"toFederatedSchema")," function that accepts federated configuration as well as a list of regular queries, mutations and\nsubscriptions exposed by the schema."),(0,d.kt)("p",null,"All ",(0,d.kt)("a",{parentName:"p",href:"federated-directives"},"federated directives")," are provided as annotations that are used to decorate your classes,\nproperties and functions. Since federated types might not be accessible through the regular query execution path, they\nare explicitly picked up by the schema generator based on their directives. Due to the above, we also need to provide\na way to instantiate the underlying federated objects by implementing corresponding ",(0,d.kt)("inlineCode",{parentName:"p"},"FederatedTypeResolvers"),". See\n",(0,d.kt)("a",{parentName:"p",href:"type-resolution"},"type resolution wiki")," for more details on how federated types are resolved. Final federated schema\nis then generated by invoking the ",(0,d.kt)("inlineCode",{parentName:"p"},"toFederatedSchema")," function\n(",(0,d.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/federation/toFederatedSchema.kt#L34"},"link"),")."),(0,d.kt)("p",null,(0,d.kt)("strong",{parentName:"p"},"In order to generate valid federated schemas, you will need to annotate both your base schema and the one extending\nit"),". Federated Gateway (e.g. Apollo) will then combine the individual graphs to form single federated graph."),(0,d.kt)("p",null,">"," NOTE: If you are using custom ",(0,d.kt)("inlineCode",{parentName:"p"},"Query")," type then all of you federated GraphQL services have to use the same type. It is\n",">"," not possible for federated services to have multiple definitions of ",(0,d.kt)("inlineCode",{parentName:"p"},"Query")," type."),(0,d.kt)("h3",{id:"base-schema"},"Base Schema"),(0,d.kt)("p",null,"Base schema defines GraphQL types that will be extended by schemas exposed by other GraphQL services. In the example\nbelow, we define base ",(0,d.kt)("inlineCode",{parentName:"p"},"Product")," type with ",(0,d.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,d.kt)("inlineCode",{parentName:"p"},"description")," fields. ",(0,d.kt)("inlineCode",{parentName:"p"},"id")," is the primary key that uniquely\nidentifies the ",(0,d.kt)("inlineCode",{parentName:"p"},"Product")," type object and is specified in ",(0,d.kt)("inlineCode",{parentName:"p"},"@key")," directive. Since it is a base schema that doesn't expose\nany extended functionality our FederatedTypeRegistry does not include any federated resolvers."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-kotlin"},'\n@KeyDirective(fields = FieldSet("id"))\ndata class Product(val id: Int, val description: String)\n\nclass ProductQuery {\n  fun product(id: Int): Product? {\n    // grabs product from a data source, might return null\n  }\n}\n\n// Generate the schema\nval federatedTypeRegistry = FederatedTypeRegistry(emptyMap())\nval config = FederatedSchemaGeneratorConfig(supportedPackages = listOf("org.example"), hooks = FederatedSchemaGeneratorHooks(federatedTypeRegistry))\nval queries = listOf(TopLevelObject(ProductQuery()))\n\ntoFederatedSchema(config, queries)\n\n')),(0,d.kt)("p",null,"Example above generates the following schema with additional federated types:"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},'\nschema {\n  query: Query\n}\n\nunion _Entity = Product\n\ntype Product @key(fields : "id") {\n  description: String!\n  id: Int!\n}\n\ntype Query @extends {\n  _entities(representations: [_Any!]!): [_Entity]!\n  _service: _Service\n  product(id: Int!): Product\n}\n\ntype _Service {\n  sdl: String!\n}\n\n')),(0,d.kt)("h4",{id:"extended-schema"},"Extended Schema"),(0,d.kt)("p",null,"Extended federated GraphQL schemas provide additional functionality to the types already exposed by other GraphQL\nservices. In the example below, ",(0,d.kt)("inlineCode",{parentName:"p"},"Product")," type is extended to add new ",(0,d.kt)("inlineCode",{parentName:"p"},"reviews")," field to it. Primary key needed to\ninstantiate the ",(0,d.kt)("inlineCode",{parentName:"p"},"Product")," type (i.e. ",(0,d.kt)("inlineCode",{parentName:"p"},"id"),") has to match the ",(0,d.kt)("inlineCode",{parentName:"p"},"@key")," definition on the base type. Since primary keys are\ndefined on the base type and are only referenced from the extended type, all of the fields that are part of the field\nset specified in ",(0,d.kt)("inlineCode",{parentName:"p"},"@key")," directive have to be marked as ",(0,d.kt)("inlineCode",{parentName:"p"},"@external"),'. Finally, we also need to specify an "entry point"\nfor the federated type\u200a-\u200awe need to create a FederatedTypeResolver that will be used to instantiate the federated\n',(0,d.kt)("inlineCode",{parentName:"p"},"Product")," type when processing federated queries."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-kotlin"},'\n@KeyDirective(fields = FieldSet("id"))\n@ExtendsDirective\ndata class Product(@ExternalDirective val id: Int) {\n\n    fun reviews(): List<Review> {\n        // returns list of product reviews\n    }\n}\n\ndata class Review(val reviewId: String, val text: String)\n\n// Generate the schema\nval productResolver = object: FederatedTypeResolver<Product> {\n    override suspend fun resolve(representations: List<Map<String, Any>>): List<Product?> = representations.map { keys ->\n        keys["id"]?.toString()?.toIntOrNull()?.let { id ->\n            Product(id)\n    }\n    }\n}\nval federatedTypeRegistry = FederatedTypeRegistry(mapOf("Product" to productResolver))\nval config = FederatedSchemaGeneratorConfig(supportedPackages = listOf("org.example"), hooks = FederatedSchemaGeneratorHooks(federatedTypeRegistry))\n\ntoFederatedSchema(config)\n\n')),(0,d.kt)("p",null,"Our extended schema will then be generated as:"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},'\nschema {\n  query: Query\n}\n\nunion _Entity = Product\n\ntype Product @extends @key(fields : "id") {\n  id: Int! @external\n  reviews: [Review!]!\n}\n\ntype Query @extends {\n  _entities(representations: [_Any!]!): [_Entity]!\n  _service: _Service\n}\n\ntype Review {\n  reviewId: String!\n  text: String!\n}\n\ntype _Service {\n  sdl: String!\n}\n\n')),(0,d.kt)("h4",{id:"federated-graphql-schema"},"Federated GraphQL schema"),(0,d.kt)("p",null,"Once we have both base and extended GraphQL services up and running, we will also need to configure Federated Gateway\nto combine them into a single schema. Using the examples above, our final federated schema will be generated as:"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"\nschema {\n  query: Query\n}\n\ntype Product {\n  description: String!\n  id: Int!\n  reviews: [Review!]!\n}\n\ntype Review {\n  reviewId: String!\n  text: String!\n}\n\ntype Query {\n  product(id: String!): Product\n}\n\n")),(0,d.kt)("p",null,"See our ",(0,d.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/3.x.x/examples/federation"},"federation example")," for additional details."))}u.isMDXComponent=!0}}]);