"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[394],{2450:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),s=(t(8561),["components"]),o={id:"unions",title:"Unions",original_id:"unions"},l=void 0,d={unversionedId:"schema-generator/writing-schemas/unions",id:"version-3.x.x/schema-generator/writing-schemas/unions",title:"Unions",description:"Marker interfaces (i.e. interfaces without any common fields or methods) are exposed as GraphQL union types. All the",source:"@site/versioned_docs/version-3.x.x/schema-generator/writing-schemas/unions.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/unions",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/writing-schemas/unions",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/writing-schemas/unions.md",tags:[],version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1677873135,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{id:"unions",title:"Unions",original_id:"unions"},sidebar:"version-3.x.x/docs",previous:{title:"Interfaces",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/writing-schemas/interfaces"},next:{title:"Annotations",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/writing-schemas/annotations"}},c={},h=[],p={toc:h};function m(e){var n=e.components,t=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Marker interfaces (i.e. interfaces without any common fields or methods) are exposed as GraphQL union types. All the\ntypes that are implementing this marker interface and are available on the classpath will be automatically exposed as\nobjects in the target schema."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'\ninterface BodyPart\n\ndata class LeftHand(val field: String): BodyPart\n\ndata class RightHand(val property: Int): BodyPart\n\nclass PolymorphicQuery {\n    fun whichHand(whichHand: String): BodyPart = when (whichHand) {\n        "right" -> RightHand(12)\n        else -> LeftHand("hello world")\n    }\n}\n\n')),(0,r.kt)("p",null,"The above will generate following GraphQL schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"\nunion BodyPart = LeftHand | RightHand\n\ntype LeftHand {\n  field: String!\n}\n\ntype RightHand {\n  property: Int!\n}\n\ntype Query {\n  whichHand(whichHand: String!): BodyPart!\n}\n\n")))}m.isMDXComponent=!0}}]);