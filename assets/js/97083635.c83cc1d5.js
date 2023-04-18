"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[1045],{3518:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var n=t(7462),i=t(3366),o=(t(7294),t(3905)),d=(t(8561),["components"]),r={id:"advanced-features",title:"Advanced Features",original_id:"advanced-features"},s=void 0,c={unversionedId:"schema-generator/customizing-schemas/advanced-features",id:"version-3.x.x/schema-generator/customizing-schemas/advanced-features",title:"Advanced Features",description:"Adding Custom Additional Types",source:"@site/versioned_docs/version-3.x.x/schema-generator/customizing-schemas/advanced-features.md",sourceDirName:"schema-generator/customizing-schemas",slug:"/schema-generator/customizing-schemas/advanced-features",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/advanced-features",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/customizing-schemas/advanced-features.md",tags:[],version:"3.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1681792398,formattedLastUpdatedAt:"Apr 18, 2023",frontMatter:{id:"advanced-features",title:"Advanced Features",original_id:"advanced-features"},sidebar:"version-3.x.x/docs",previous:{title:"Deprecating Schema",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/deprecating-schema"},next:{title:"Fetching Data",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/fetching-data"}},l={},p=[{value:"Adding Custom Additional Types",id:"adding-custom-additional-types",level:2},{value:"<code>SchemaGenerator::addAdditionalTypesWithAnnotation</code>",id:"schemageneratoraddadditionaltypeswithannotation",level:3},{value:"<code>SchemaGenerator::generateAdditionalTypes</code>",id:"schemageneratorgenerateadditionaltypes",level:3}],h={toc:p};function m(e){var a=e.components,t=(0,i.Z)(e,d);return(0,o.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"adding-custom-additional-types"},"Adding Custom Additional Types"),(0,o.kt)("p",null,"There are a couple ways you can add more types to the schema without having them be directly consumed by a type in your schema.\nThis may be required for ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/federated/apollo-federation"},"Apollo Federation"),", or maybe adding other interface implementations that are not picked up."),(0,o.kt)("h3",{id:"schemageneratoraddadditionaltypeswithannotation"},(0,o.kt)("inlineCode",{parentName:"h3"},"SchemaGenerator::addAdditionalTypesWithAnnotation")),(0,o.kt)("p",null,"This method is protected so if you override the ",(0,o.kt)("inlineCode",{parentName:"p"},"SchemaGenerator")," used you can call this method to add types that have a specific annotation.\nYou can see how this is used in ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/federation/FederatedSchemaGenerator.kt"},"an example"),"."),(0,o.kt)("h3",{id:"schemageneratorgenerateadditionaltypes"},(0,o.kt)("inlineCode",{parentName:"h3"},"SchemaGenerator::generateAdditionalTypes")),(0,o.kt)("p",null,"This method is called by ",(0,o.kt)("inlineCode",{parentName:"p"},"SchemaGenerator::get")," after all the queries, mutations, and subscriptions have been generated and it is going to add all the types saved in an internal set that were not generated by reflection.\nTo change the behaviour, you can update the set and then call the super method with the new value."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"\nclass CustomSchemaGenerator(config: SchemaGeneratorConfig) : SchemaGenerator(config) {\n\n    override fun generateAdditionalTypes(types: Set<KType>): Set<GraphQLType> {\n        val newTypes = types.toMutableSet().add(MyNewType()::class.createType())\n        return super.generateAdditionalTypes(newTypes)\n    }\n}\n\n")))}m.isMDXComponent=!0}}]);