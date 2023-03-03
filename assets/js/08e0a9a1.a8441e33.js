"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[8903],{8096:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var a=n(7462),l=n(3366),i=(n(7294),n(3905)),r=(n(8561),["components"]),o={id:"arguments",title:"Arguments",original_id:"arguments"},s=void 0,u={unversionedId:"schema-generator/writing-schemas/arguments",id:"version-3.x.x/schema-generator/writing-schemas/arguments",title:"Arguments",description:"Method arguments are automatically exposed as part of the arguments to the corresponding GraphQL fields.",source:"@site/versioned_docs/version-3.x.x/schema-generator/writing-schemas/arguments.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/arguments",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/writing-schemas/arguments",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/writing-schemas/arguments.md",tags:[],version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1677873135,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{id:"arguments",title:"Arguments",original_id:"arguments"},sidebar:"version-3.x.x/docs",previous:{title:"Nullability",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/writing-schemas/nullability"},next:{title:"Scalars",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/writing-schemas/scalars"}},p={},d=[{value:"Input Types",id:"input-types",level:2},{value:"Optional input fields",id:"optional-input-fields",level:2},{value:"Default values",id:"default-values",level:2}],m={toc:d};function h(e){var t=e.components,n=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Method arguments are automatically exposed as part of the arguments to the corresponding GraphQL fields."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"\nclass SimpleQuery{\n  fun doSomething(value: Int): Boolean = true\n}\n\n")),(0,i.kt)("p",null,"The above Kotlin code will generate following GraphQL schema:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"\ntype Query {\n  doSomething(value: Int!): Boolean!\n}\n\n")),(0,i.kt)("p",null,"This behavior is true for all arguments except for the special classes for the ",(0,i.kt)("a",{parentName:"p",href:"../execution/contextual-data"},"GraphQLContext")," and the ",(0,i.kt)("a",{parentName:"p",href:"../execution/data-fetching-environment"},"DataFetchingEnvironment")),(0,i.kt)("h2",{id:"input-types"},"Input Types"),(0,i.kt)("p",null,"Query and mutation function arguments are automatically converted to corresponding GraphQL input fields. GraphQL makes a\ndistinction between input and output types and requires unique names for all the types. Since we can use the same\nobjects for input and output in our Kotlin functions, ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," will automatically append\nan ",(0,i.kt)("inlineCode",{parentName:"p"},"Input")," suffix to the query input objects."),(0,i.kt)("p",null,"For example, the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"\nclass WidgetMutation {\n    fun processWidget(widget: Widget): Widget {\n        if (null == widget.value) {\n            widget.value = 42\n        }\n        return widget\n    }\n}\n\ndata class Widget(var value: Int? = nul) {\n    fun multiplyValueBy(multiplier: Int) = value?.times(multiplier)\n}\n\n")),(0,i.kt)("p",null,"Will generate the following schema:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"\ntype Mutation {\n  processWidget(widget: WidgetInput!): Widget!\n}\n\ntype Widget {\n  value: Int\n  multiplyValueBy(multiplier: Int!): Int\n}\n\ninput WidgetInput {\n  value: Int\n}\n\n")),(0,i.kt)("p",null,"Please note that only fields are exposed in the input objects. Functions will only be available on the GraphQL output\ntypes."),(0,i.kt)("p",null,"If you know a type will only be used for input types you can call your class something like ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomTypeInput"),". The library will not\nappend ",(0,i.kt)("inlineCode",{parentName:"p"},"Input")," if the class name already ends with ",(0,i.kt)("inlineCode",{parentName:"p"},"Input")," but that means you can not use this type as output because\nthe schema would have two types with the same name and that would be invalid."),(0,i.kt)("h2",{id:"optional-input-fields"},"Optional input fields"),(0,i.kt)("p",null,"Kotlin requires variables/values to be initialized upon their declaration either from the user input OR by providing\ndefaults (even if they are marked as nullable). Therefore in order for a GraphQL input field to be optional it needs to be\nnullable and also specify a default Kotlin value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'\nfun doSomethingWithOptionalInput(requiredValue: Int, optionalValue: Int?) = "required value=$requiredValue, optional value=$optionalValue"\n\n')),(0,i.kt)("p",null,"NOTE: Non nullable input fields will always require users to specify the value regardless of whether a default Kotlin value\nis provided or not."),(0,i.kt)("p",null,"NOTE: Even though you could specify a default values for arguments in Kotlin ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalValue: Int? = null"),", this will not\nbe used. If query does not explicitly specify root argument values, our function data fetcher will default to use null as\nthe value. This is because Kotlin properties always have to be initialized, and we cannot determine whether underlying\nargument has default value or not. As a result, Kotlin default value will never be used. For example, with argument\n",(0,i.kt)("inlineCode",{parentName:"p"},"optionalList: List<Int>? = emptyList()"),", the value will be null if not passed a value by the client."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"../execution/optional-undefined-arguments"},"optional undefined arguments")," for details how to determine whether argument\nwas specified or not."),(0,i.kt)("h2",{id:"default-values"},"Default values"),(0,i.kt)("p",null,"Default argument values are currently not supported. See issue ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/issues/53"},"#53"),"\nfor more details."))}h.isMDXComponent=!0}}]);