"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[9422],{33:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>p,toc:()=>l});var n=t(7462),s=t(3366),r=(t(7294),t(3905)),i=(t(8561),["components"]),c={id:"deprecating-schema",title:"Deprecating Schema",original_id:"deprecating-schema"},o=void 0,p={unversionedId:"schema-generator/customizing-schemas/deprecating-schema",id:"version-3.x.x/schema-generator/customizing-schemas/deprecating-schema",title:"Deprecating Schema",description:"GraphQL schemas can have fields marked as deprecated. Instead of creating a custom annotation,",source:"@site/versioned_docs/version-3.x.x/schema-generator/customizing-schemas/deprecating-schema.md",sourceDirName:"schema-generator/customizing-schemas",slug:"/schema-generator/customizing-schemas/deprecating-schema",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/deprecating-schema",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/customizing-schemas/deprecating-schema.md",tags:[],version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1677873135,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{id:"deprecating-schema",title:"Deprecating Schema",original_id:"deprecating-schema"},sidebar:"version-3.x.x/docs",previous:{title:"Directives",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/directives"},next:{title:"Advanced Features",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/advanced-features"}},d={},l=[],h={toc:l};function m(e){var a=e.components,t=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"GraphQL schemas can have fields marked as deprecated. Instead of creating a custom annotation,\n",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," just looks for the ",(0,r.kt)("inlineCode",{parentName:"p"},"kotlin.Deprecated")," annotation and will use that annotation message\nfor the deprecated reason."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'\nclass SimpleQuery {\n  @Deprecated(message = "this query is deprecated", replaceWith = ReplaceWith("shinyNewQuery"))\n  fun simpleDeprecatedQuery(): Boolean = false\n\n  fun shinyNewQuery(): Boolean = true\n}\n\n')),(0,r.kt)("p",null,"The above query would produce the following GraphQL schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'\ntype Query {\n  simpleDeprecatedQuery: Boolean! @deprecated(reason: "this query is deprecated, replace with shinyNewQuery")\n\n  shinyNewQuery: Boolean!\n}\n\n')),(0,r.kt)("p",null,"While you can deprecate any fields/functions/classes in your Kotlin code, GraphQL only supports deprecation directive on\nthe fields (which correspond to Kotlin fields and functions) and enum values."),(0,r.kt)("p",null,"Deprecation of input types is not yet supported ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/graphql/graphql-spec/pull/525"},"in the GraphQL spec"),"."))}m.isMDXComponent=!0}}]);