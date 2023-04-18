"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[6567],{9123:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=(a(8561),["components"]),s={id:"nullability",title:"Nullability"},o=void 0,u={unversionedId:"schema-generator/writing-schemas/nullability",id:"version-6.x.x/schema-generator/writing-schemas/nullability",title:"Nullability",description:"Both GraphQL and Kotlin have a concept of nullable as a marked typed. As a result we can automatically generate null",source:"@site/versioned_docs/version-6.x.x/schema-generator/writing-schemas/nullability.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/nullability",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/nullability",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-6.x.x/schema-generator/writing-schemas/nullability.md",tags:[],version:"6.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1681792398,formattedLastUpdatedAt:"Apr 18, 2023",frontMatter:{id:"nullability",title:"Nullability"},sidebar:"docs",previous:{title:"Types and Fields",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/fields"},next:{title:"Arguments",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/arguments"}},c={},m=[],d={toc:m};function p(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Both GraphQL and Kotlin have a concept of ",(0,r.kt)("inlineCode",{parentName:"p"},"nullable")," as a marked typed. As a result we can automatically generate null\nsafe schemas from Kotlin code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"class SimpleQuery {\n\n    fun generateNullableNumber(): Int? {\n        val num = Random().nextInt(100)\n        return if (num < 50) num else null\n    }\n\n    fun generateNumber(): Int = Random().nextInt(100)\n}\n")),(0,r.kt)("p",null,"The above Kotlin code would produce the following GraphQL schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  generateNullableNumber: Int\n\n  generateNumber: Int!\n}\n")))}p.isMDXComponent=!0}}]);