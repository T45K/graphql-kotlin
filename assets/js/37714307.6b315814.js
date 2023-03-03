"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[49],{3795:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>m,toc:()=>d});var s=a(7462),t=a(3366),i=(a(7294),a(3905)),r=(a(8561),["components"]),o={id:"renaming-fields",title:"Renaming Fields"},l=void 0,m={unversionedId:"schema-generator/customizing-schemas/renaming-fields",id:"version-6.x.x/schema-generator/customizing-schemas/renaming-fields",title:"Renaming Fields",description:"By default, the schema generator will use the simple name of the underlying class for the type names and function/property names for fields.",source:"@site/versioned_docs/version-6.x.x/schema-generator/customizing-schemas/renaming-fields.md",sourceDirName:"schema-generator/customizing-schemas",slug:"/schema-generator/customizing-schemas/renaming-fields",permalink:"/graphql-kotlin/docs/schema-generator/customizing-schemas/renaming-fields",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-6.x.x/schema-generator/customizing-schemas/renaming-fields.md",tags:[],version:"6.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1677873135,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{id:"renaming-fields",title:"Renaming Fields"},sidebar:"docs",previous:{title:"Excluding Fields",permalink:"/graphql-kotlin/docs/schema-generator/customizing-schemas/excluding-fields"},next:{title:"Directives",permalink:"/graphql-kotlin/docs/schema-generator/customizing-schemas/directives"}},c={},d=[{value:"Known Issues",id:"known-issues",level:2}],p={toc:d};function u(e){var n=e.components,a=(0,t.Z)(e,r);return(0,i.kt)("wrapper",(0,s.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"By default, the schema generator will use the simple name of the underlying class for the type names and function/property names for fields.\nYou can change this default behavior by annotating the target class/field with ",(0,i.kt)("inlineCode",{parentName:"p"},"@GraphQLName"),". The following Kotlin ",(0,i.kt)("inlineCode",{parentName:"p"},"Widget")," class\nwill be renamed to ",(0,i.kt)("inlineCode",{parentName:"p"},"MyCustomName")," GraphQL type and its fields will also be renamed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'@GraphQLName("MyCustomName")\ndata class Widget(\n    @GraphQLName("myCustomField")\n    val value: Int?\n)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type MyCustomName {\n  myCustomField: Int\n}\n")),(0,i.kt)("h2",{id:"known-issues"},"Known Issues"),(0,i.kt)("p",null,"Due to how we deserialize input classes, if you rename a field of an input class or an enum value you must also annotate\nit with the Jackson annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"@JsonProperty"),". See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/issues/493"},"issue 493"),"\nfor more info."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'data class MyInputClass(\n    @JsonProperty("renamedField")\n    @GraphQLName("renamedField")\n    val field1: String\n)\n\n// GraphQL enums should use UPPER_CASE naming if possible, but any case is supported\nenum class Selection {\n\n  @JsonProperty("first")\n  @GraphQLName("first")\n  ONE,\n\n  @JsonProperty("second")\n  @GraphQLName("second")\n  TWO\n}\n\nclass QueryClass {\n  fun parseData(arg: MyInputClass) = "You sent ${arg.field1}"\n\n  fun chooseValue(selection: Selection): String = when (selection) {\n    Selection.ONE -> "You chose the first value"\n    Selection.TWO -> "You chose the second value"\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input MyInputClassInput {\n  # This only works if both @JsonProperty and @GraphQLName are present\n  renamedField: String!\n}\n\nenum Selection {\n  first,\n  second\n}\n\ntype Query {\n  parseData(arg: MyInputClass!): String!\n  chooseValue(selection: Selection!): String!\n}\n")))}u.isMDXComponent=!0}}]);