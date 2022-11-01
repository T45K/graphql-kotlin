"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[8826],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},85080:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],d={id:"type-resolution",title:"Federated Type Resolution"},s=void 0,l={unversionedId:"schema-generator/federation/type-resolution",id:"schema-generator/federation/type-resolution",title:"Federated Type Resolution",description:"In traditional (i.e. non-federated) GraphQL servers, each one of the output types is accessible through a traversal of",source:"@site/docs/schema-generator/federation/type-resolution.md",sourceDirName:"schema-generator/federation",slug:"/schema-generator/federation/type-resolution",permalink:"/graphql-kotlin/docs/schema-generator/federation/type-resolution",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/federation/type-resolution.md",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1667324215,formattedLastUpdatedAt:"Nov 1, 2022",frontMatter:{id:"type-resolution",title:"Federated Type Resolution"},sidebar:"docs",previous:{title:"Federated Directives",permalink:"/graphql-kotlin/docs/schema-generator/federation/federated-directives"},next:{title:"Federation Tracing",permalink:"/graphql-kotlin/docs/schema-generator/federation/federation-tracing"}},p={},c=[{value:"<code>_entities</code> query",id:"_entities-query",level:2},{value:"Federated Type Resolver",id:"federated-type-resolver",level:2},{value:"Federated Type Suspend Resolver",id:"federated-type-suspend-resolver",level:3},{value:"Federated Type Promise Resolver",id:"federated-type-promise-resolver",level:3},{value:"Provide FederatedTypeResolvers to FederatedSchema",id:"provide-federatedtyperesolvers-to-federatedschema",level:2}],u={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In traditional (i.e. non-federated) GraphQL servers, each one of the output types is accessible through a traversal of\nthe GraphQL schema from a corresponding query, mutation or subscription root type. Since federated GraphQL types might\nbe accessed outside of the query path we need a mechanism to access them in a consistent manner."),(0,o.kt)("h2",{id:"_entities-query"},(0,o.kt)("inlineCode",{parentName:"h2"},"_entities")," query"),(0,o.kt)("p",null,"A federated GraphQL server provides a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"_entities")," query that allows retrieving any of the federated extended types.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"_entities"),' query accept list of "representation" objects that provide all required fields to resolve the type and\nreturn an ',(0,o.kt)("inlineCode",{parentName:"p"},"_Entity")," union type of all supported federated types. Representation objects are just a map of all the fields\nreferenced in ",(0,o.kt)("inlineCode",{parentName:"p"},"@key")," directives as well as the target ",(0,o.kt)("inlineCode",{parentName:"p"},"__typename")," information. If federated query type fragments also\nreference fields with ",(0,o.kt)("inlineCode",{parentName:"p"},"@requires")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@provides")," directives, then those referenced fields should also be specified in\nthe target representation object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"query ($_representations: [_Any!]!) {\n  _entities(representations: $_representations) {\n    ... on SomeFederatedType {\n      fieldA\n      fieldB\n    }\n  }\n}\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"_entities")," queries are automatically handled by a federated gateway and their usage is transparent for the gateway clients.")),(0,o.kt)("h2",{id:"federated-type-resolver"},"Federated Type Resolver"),(0,o.kt)("p",null,"In order to simplify the integrations, ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," provides a default ",(0,o.kt)("inlineCode",{parentName:"p"},"_entities")," query data fetcher or resolver that\ninvokes the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/generator/federation/execution/FederatedTypeResolver.kt"},"TypeResolver"),"\nthat is used to resolve the specified ",(0,o.kt)("inlineCode",{parentName:"p"},"__typename"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"FederatedTypeResolver.typeName")," specifies the GraphQL type name that should match the ",(0,o.kt)("inlineCode",{parentName:"p"},"__typename")," field in the ",(0,o.kt)("inlineCode",{parentName:"p"},"_entities")," query."),(0,o.kt)("p",null,"There are two interfaces that implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"FederatedTypeResolver"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/generator/federation/execution/FederatedTypeSuspendResolver.kt"},"FederatedTypeSuspendResolver")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/generator/federation/execution/FederatedTypePromiseResolver.kt"},"FederatedTypePromiseResolver"))),(0,o.kt)("h3",{id:"federated-type-suspend-resolver"},"Federated Type Suspend Resolver"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"FederatedTypeSuspendResolver.resolve")," receives a representation of the target ",(0,o.kt)("inlineCode",{parentName:"p"},"__typename")," and will execute\nthe suspending function on a ",(0,o.kt)("inlineCode",{parentName:"p"},"CoroutineScope")," to ",(0,o.kt)("strong",{parentName:"p"},"asynchronously wait")," to complete the target entity or ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," if entity cannot be resolved."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"FederatedTypeSuspendResolver.resolve")," will be invoked based on how many representations of the target entity were\nrequested in the ",(0,o.kt)("inlineCode",{parentName:"p"},"_entities")," query."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'// This service does not own the "Product" type but is extending it with new fields\n@KeyDirective(fields = FieldSet("id"))\n@ExtendsDirective\nclass Product(@ExternalDirective val id: String) {\n  fun newField(): String = getNewFieldByProductId(id)\n}\n\n// This is how the "Product" class is created from the "_entities" query using suspending resolver\nclass ProductResolver : FederatedTypeSuspendResolver<Product> {\n    override val typeName: String = "Product"\n\n    override suspend fun resolve(\n        environment: DataFetchingEnvironment,\n        representation: Map<String, Any>\n    ): Product? {\n        val id = representation["id"]?.toString()\n        // Instantiate product using id, otherwise return null\n        return if (id != null) {\n            Product(id)\n        } else {\n            null\n        }\n    }\n}\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"this suspend implementation relies on the same coroutine scope propagation as the\ndefault ",(0,o.kt)("inlineCode",{parentName:"p"},"FunctionDataFetcher"),". See ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/execution/async-models"},"asynchronous models documentation")," for additional details.\nAdditionally you can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"FederatedTypePromiseResolver")," which is compatible with ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader"),"'s async model given that returns\na ",(0,o.kt)("inlineCode",{parentName:"p"},"CompletableFuture"),", that way you get advantage of batching and deduplication of transactions to downstream.")),(0,o.kt)("h3",{id:"federated-type-promise-resolver"},"Federated Type Promise Resolver"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"FederatedTypePromiseResolver.resolve")," receives a representation of the target ",(0,o.kt)("inlineCode",{parentName:"p"},"__typename")," and provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"CompletableFuture")," of\na nullable instance of target entity."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'// This service does not own the "Product" type but is extending it with new fields\n@KeyDirective(fields = FieldSet("id"))\n@ExtendsDirective\nclass Product(@ExternalDirective val id: String) {\n  fun newField(): String = getNewFieldByProductId(id)\n}\n\n// This is how the "Product" class is created from the "_entities" query using promise resolver\nclass ProductResolver : FederatedTypePromiseResolver<Product> {\n    override val typeName: String = "Product"\n\n    override fun resolve(\n        environment: DataFetchingEnvironment,\n        representation: Map<String, Any>\n    ): CompletableFuture<Product?> {\n        val id = representation["id"]?.toString()\n        // use dataloader to resolve Product by id\n        return environment.getDataLoader<String, Product?>("ProductDataLoader").load(id)\n    }\n}\n')),(0,o.kt)("h2",{id:"provide-federatedtyperesolvers-to-federatedschema"},"Provide FederatedTypeResolvers to FederatedSchema"),(0,o.kt)("p",null,"Provide a ",(0,o.kt)("inlineCode",{parentName:"p"},"List<FederatedTypeResolver>")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"FederatedSchemaGeneratorHooks")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," will create the\ndata fetcher or resolver using your custom federated type resolvers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val resolvers = listOf(productResolver)\nval hooks = FederatedSchemaGeneratorHooks(resolvers)\nval config = FederatedSchemaGeneratorConfig(supportedPackages = listOf("org.example"), hooks = hooks)\nval schema = toFederatedSchema(config)\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you are using ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server"),", each of your FederatedTypeResolvers can be marked as Spring Beans\nand will automatically be added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"FederatedSchemaGeneratorHooks")," by using autoconfiguration.")))}m.isMDXComponent=!0}}]);