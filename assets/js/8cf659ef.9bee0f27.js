"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[6541],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),i=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=i(e.components);return a.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=i(t),g=r,h=m["".concat(u,".").concat(g)]||m[g]||c[g]||o;return t?a.createElement(h,s(s({ref:n},p),{},{components:t})):a.createElement(h,s({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var i=2;i<o;i++)s[i]=t[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},596:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),s=["components"],l={id:"enums",title:"Enums"},u=void 0,i={unversionedId:"schema-generator/writing-schemas/enums",id:"version-4.x.x/schema-generator/writing-schemas/enums",title:"Enums",description:"Enums are automatically mapped to GraphQL enum type.",source:"@site/versioned_docs/version-4.x.x/schema-generator/writing-schemas/enums.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/enums",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/writing-schemas/enums",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/schema-generator/writing-schemas/enums.md",tags:[],version:"4.x.x",lastUpdatedBy:"Raman Gupta",lastUpdatedAt:1652981239,formattedLastUpdatedAt:"5/19/2022",frontMatter:{id:"enums",title:"Enums"},sidebar:"version-4.x.x/docs",previous:{title:"Scalars",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/writing-schemas/scalars"},next:{title:"Lists",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/writing-schemas/lists"}},p={},c=[{value:"Converting a Java enum to a GraphQL Enum",id:"converting-a-java-enum-to-a-graphql-enum",level:3}],m={toc:c};function g(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Enums are automatically mapped to GraphQL enum type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"enum class MyEnumType {\n  ONE,\n  TWO\n}\n")),(0,o.kt)("p",null,"Above enum will be generated as following GraphQL object"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum MyEnumType {\n  ONE\n  TWO\n}\n")),(0,o.kt)("h3",{id:"converting-a-java-enum-to-a-graphql-enum"},"Converting a Java enum to a GraphQL Enum"),(0,o.kt)("p",null,"If you want to use Java enums from another package, but you ",(0,o.kt)("strong",{parentName:"p"},"don't")," want\ninclude everything from that package using ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/schema-generator/customizing-schemas/generator-config"},(0,o.kt)("inlineCode",{parentName:"a"},"supportedPackages"))," or you want\nto customize the GraphQL type, you can use ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/schema-generator/customizing-schemas/generator-config"},"schema generator hooks")," to\nassociate the Java enum with a runtime ",(0,o.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/com.graphql-java/graphql-java/latest/index.html"},(0,o.kt)("inlineCode",{parentName:"a"},"GraphQLEnumType")),"."),(0,o.kt)("p",null,"Step 1: Create a GraphQLEnumType using the Java enum values"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// in some other package\npublic enum Status {\n  APPROVED,\n  DECLINED\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val statusEnumType = GraphQLEnumType.newEnum()\n    .name("Status")\n    .values(Status.values().map {\n      GraphQLEnumValueDefinition.newEnumValueDefinition()\n          .value(it.name)\n          .build()\n    })\n    .build()\n')),(0,o.kt)("p",null,"Step 2: Add a schema generation hook"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class CustomSchemaGeneratorHooks : SchemaGeneratorHooks {\n\n  override fun willGenerateGraphQLType(type: KType): GraphQLType? {\n    return when (type.classifier as? KClass<*>) {\n      Status::class.java -> statusEnumType\n      else -> super.willGenerateGraphQLType(type)\n    }\n  }\n}\n")),(0,o.kt)("p",null,"Step 3. Use your Java enum anywhere in your schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Component\nclass StatusQuery : Query {\n  fun currentStatus: Status = getCurrentStatus()\n}\n")))}g.isMDXComponent=!0}}]);