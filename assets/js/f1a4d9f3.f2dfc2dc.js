"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[3455],{828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=(n(8561),["components"]),o={id:"maven-plugin",title:"Maven Plugin",original_id:"maven-plugin"},p=void 0,s={unversionedId:"plugins/maven-plugin",id:"version-3.x.x/plugins/maven-plugin",title:"Maven Plugin",description:"GraphQL Kotlin Maven Plugin provides functionality to introspect GraphQL schemas and generate a lightweight GraphQL HTTP client.",source:"@site/versioned_docs/version-3.x.x/plugins/maven-plugin.md",sourceDirName:"plugins",slug:"/plugins/maven-plugin",permalink:"/graphql-kotlin/docs/3.x.x/plugins/maven-plugin",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/plugins/maven-plugin.md",tags:[],version:"3.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1681792398,formattedLastUpdatedAt:"Apr 18, 2023",frontMatter:{id:"maven-plugin",title:"Maven Plugin",original_id:"maven-plugin"},sidebar:"version-3.x.x/docs",previous:{title:"Gradle Plugin",permalink:"/graphql-kotlin/docs/3.x.x/plugins/gradle-plugin"},next:{title:"Releasing a new version",permalink:"/graphql-kotlin/docs/3.x.x/contributors/release-proc"}},d={},u=[{value:"Goals",id:"goals",level:2},{value:"download-sdl",id:"download-sdl",level:3},{value:"generate-client",id:"generate-client",level:3},{value:"generate-test-client",id:"generate-test-client",level:3},{value:"introspect-schema",id:"introspect-schema",level:3},{value:"Examples",id:"examples",level:2},{value:"Downloading Schema SDL",id:"downloading-schema-sdl",level:3},{value:"Introspecting Schema",id:"introspecting-schema",level:3},{value:"Generating Client",id:"generating-client",level:3},{value:"Generating Client with Custom Scalars",id:"generating-client-with-custom-scalars",level:3},{value:"Generating Test Client",id:"generating-test-client",level:3},{value:"Complete Minimal Configuration Example",id:"complete-minimal-configuration-example",level:3},{value:"Complete Configuration Example",id:"complete-configuration-example",level:3}],m={toc:u};function c(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"GraphQL Kotlin Maven Plugin provides functionality to introspect GraphQL schemas and generate a lightweight GraphQL HTTP client."),(0,r.kt)("h2",{id:"goals"},"Goals"),(0,r.kt)("p",null,"You can find detailed information about ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-maven-plugin")," and all its goals by running ",(0,r.kt)("inlineCode",{parentName:"p"},"mvn help:describe -Dplugin=com.expediagroup:graphql-kotlin-maven-plugin -Ddetail"),"."),(0,r.kt)("h3",{id:"download-sdl"},"download-sdl"),(0,r.kt)("p",null,"GraphQL endpoints are often public and as such many servers might disable introspection queries in production environment.\nSince GraphQL schema is needed to generate type safe clients, as alternative GraphQL servers might expose private\nendpoints (e.g. accessible only from within network, etc) that could be used to download schema in Schema Definition\nLanguage (SDL) directly. This Mojo attempts to download schema from the specified ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql.endpoint"),", validates the\nresult whether it is a valid schema and saves it locally as ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.graphql")," under build directory. In general, this\ngoal provides limited functionality by itself and instead should be used to generate input for the subsequent\n",(0,r.kt)("inlineCode",{parentName:"p"},"generate-client")," goal."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Attributes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Default Lifecycle Phase"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"generate-sources"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"endpoint")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Target GraphQL server SDL endpoint that will be used to download schema.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"User property is"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"graphql.endpoint"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"headers")),(0,r.kt)("td",{parentName:"tr",align:null},"Map","<","String, Any",">"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Optional HTTP headers to be specified on a SDL request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timeoutConfiguration")),(0,r.kt)("td",{parentName:"tr",align:null},"TimeoutConfiguration"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Optional timeout configuration (in milliseconds) to download schema from SDL endpoint before we cancel the request.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default values are:")," connect timeout = 5000, read timeout = 15000.",(0,r.kt)("br",null))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameter Details")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"timeoutConfiguration")," - Timeout configuration that allows you to specify connect and read timeout values in milliseconds."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\n<timeoutConfiguration>\n    \x3c!-- timeout values in milliseconds \n    connect1000\n    read30000\n--&gt;\n\n")))),(0,r.kt)("h3",{id:"generate-client"},"generate-client"),(0,r.kt)("p",null,"Generate GraphQL client code based on the provided GraphQL schema and target queries."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Attributes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Default Lifecycle Phase"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"generate-sources")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Requires Maven Project")),(0,r.kt)("li",{parentName:"ul"},"Generated classes are automatically added to the list of compiled sources.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"allowDeprecatedFields")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating whether selection of deprecated fields is allowed or not.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),".",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"User property is"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"graphql.allowDeprecatedFields"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"converters")),(0,r.kt)("td",{parentName:"tr",align:null},"Map","<","String, ScalarConverter",">"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Custom GraphQL scalar to converter mapping containing information about corresponding Java type and converter that should be used to serialize/deserialize values.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"outputDirectory")),(0,r.kt)("td",{parentName:"tr",align:null},"File"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Target directory where to store generated files.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default value is"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"${project.build.directory}/generated-sources/graphql"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"packageName")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Target package name for generated code.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"User property is"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"graphql.packageName"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"queryFileDirectory")),(0,r.kt)("td",{parentName:"tr",align:null},"File"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Directory file containing GraphQL queries. Instead of specifying a directory you can also specify list of query file by using ",(0,r.kt)("inlineCode",{parentName:"td"},"queryFiles")," property instead.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,r.kt)("inlineCode",{parentName:"td"},"src/main/resources"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"queryFiles")),(0,r.kt)("td",{parentName:"tr",align:null},"Listfile"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of query files to be processed. Instead of a list of files to be processed you can also specify `` directory containing all the files. If this property is specified it will take precedence over the corresponding directory property.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"``"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"GraphQL schema file that will be used to generate client code.",(0,r.kt)("strong",{parentName:"td"},"User property is"),": ``.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameter Details")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"converters")," - Custom GraphQL scalar to converter mapping containing information about corresponding Java type and converter that should be used to serialize/deserialize values."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\n\n  \n    \n    java.util.UUID\n    \n    com.example.UUIDScalarConverter\n  \n--&gt;\n\n")))),(0,r.kt)("h3",{id:"generate-test-client"},"generate-test-client"),(0,r.kt)("p",null,"Generate GraphQL test client code based on the provided GraphQL schema and target queries."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Attributes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Default Lifecycle Phase"),": ``"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Requires Maven Project")),(0,r.kt)("li",{parentName:"ul"},"Generated classes are automatically added to the list of test compiled sources.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"``"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating whether selection of deprecated fields is allowed or not.",(0,r.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,r.kt)("inlineCode",{parentName:"td"},".**User property is**: "),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"``"),(0,r.kt)("td",{parentName:"tr",align:null},"Map","<","String, ScalarConverter",">"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Custom GraphQL scalar to converter mapping containing information about corresponding Java type and converter that should be used to serialize/deserialize values.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"``"),(0,r.kt)("td",{parentName:"tr",align:null},"File"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Target directory where to store generated files.",(0,r.kt)("strong",{parentName:"td"},"Default value is"),": ``")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"``"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Target package name for generated code.",(0,r.kt)("strong",{parentName:"td"},"User property is"),": ``.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"``"),(0,r.kt)("td",{parentName:"tr",align:null},"File"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Directory file containing GraphQL queries. Instead of specifying a directory you can also specify list of query file by using ",(0,r.kt)("inlineCode",{parentName:"td"},"property instead.**Default value is:**"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"``"),(0,r.kt)("td",{parentName:"tr",align:null},"List"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of query files to be processed. Instead of a list of files to be processed you can also specify `` directory containing all the files. If this property is specified it will take precedence over the corresponding directory property.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"``"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"GraphQL schema file that will be used to generate client code.",(0,r.kt)("strong",{parentName:"td"},"User property is"),": ``.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameter Details")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"converters")," - Custom GraphQL scalar to converter mapping containing information about corresponding Java type and converter that should be used to serialize/deserialize values."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\n\n  \n    \n    java.util.UUID\n    \n    com.example.UUIDScalarConverter\n  \n--&gt;\n\n")))),(0,r.kt)("h3",{id:"introspect-schema"},"introspect-schema"),(0,r.kt)("p",null,"Executes GraphQL introspection query against specified ",(0,r.kt)("inlineCode",{parentName:"p"},"and saves the underlying schema file as")," under build directory. In general, this goal provides limited functionality by itself and instead\nshould be used to generate input for the subsequent `` goal."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Attributes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Default Lifecycle Phase"),": ``")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"``"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Target GraphQL server endpoint that will be used to execute introspection queries.",(0,r.kt)("strong",{parentName:"td"},"User property is"),": ``.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"``"),(0,r.kt)("td",{parentName:"tr",align:null},"Map","<","String, Any",">"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Optional HTTP headers to be specified on an introspection query.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"``"),(0,r.kt)("td",{parentName:"tr",align:null},"TimeoutConfiguration"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Optional timeout configuration(in milliseconds) to execute introspection query before we cancel the request.",(0,r.kt)("strong",{parentName:"td"},"Default values are:")," connect timeout = 5000, read timeout = 15000.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameter Details")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"timeoutConfiguration")," - Timeout configuration that allows you to specify connect and read timeout values in milliseconds."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\n\n    1000\n    30000\n--&gt;\n\n")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"downloading-schema-sdl"},"Downloading Schema SDL"),(0,r.kt)("p",null,"Download SDL Mojo requires target GraphQL server ",(0,r.kt)("inlineCode",{parentName:"p"},"to be specified. Task can be executed directly from the\ncommand line by explicitly specifying")," property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"\n\n\n")),(0,r.kt)("p",null,"Mojo can also be configured in your Maven build file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\n\n\n")),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"goal will be executed as part of the")," ",(0,r.kt)("a",{parentName:"p",href:"https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html"},"build lifecycle phase"),"."),(0,r.kt)("h3",{id:"introspecting-schema"},"Introspecting Schema"),(0,r.kt)("p",null,"Introspection Mojo requires target GraphQL server ",(0,r.kt)("inlineCode",{parentName:"p"},"to be specified. Task can be executed directly from the\ncommand line by explicitly specifying")," property"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"\n\n\n")),(0,r.kt)("p",null,"Mojo can also be configured in your Maven build file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\n\n\n")),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"goal will be executed as part of the")," ",(0,r.kt)("a",{parentName:"p",href:"https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html"},"build lifecycle phase"),"."),(0,r.kt)("h3",{id:"generating-client"},"Generating Client"),(0,r.kt)("p",null,"This Mojo generates GraphQL client code based on the provided queries using target GraphQL ",(0,r.kt)("inlineCode",{parentName:"p"},". Classes are\ngenerated under specified "),". When using default configuration and storing GraphQL queries under ``\ndirectories, task can be executed directly from the command line by explicitly providing required properties."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"\n\n\n")),(0,r.kt)("p",null,"Mojo can also be configured in your Maven build file to become part of your build lifecycle. Plugin also provides additional\nconfiguration options that are not available on command line."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\n\n\n")),(0,r.kt)("p",null,"This will process all GraphQL queries located under `` and generate corresponding GraphQL Kotlin clients.\nGenerated classes will be automatically added to the project compile sources."),(0,r.kt)("p",null,">"," NOTE: You might need to explicitly add generated clients to your project sources for your IDE to recognize them. See\n",">"," ",(0,r.kt)("a",{parentName:"p",href:"https://www.mojohaus.org/build-helper-maven-plugin/"},"build-helper-maven-plugin")," for details."),(0,r.kt)("h3",{id:"generating-client-with-custom-scalars"},"Generating Client with Custom Scalars"),(0,r.kt)("p",null,"By default, all custom GraphQL scalars will be serialized as Strings. You can override this default behavior by specifying\ncustom ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-client/src/main/kotlin/com/expediagroup/graphql/client/converter/ScalarConverter.kt"},"scalar converter"),"."),(0,r.kt)("p",null,"For example given following custom scalar in our GraphQL schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"\n\n\n")),(0,r.kt)("p",null,"We can create a custom converter to automatically convert this custom scalar to ``"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"\n\n\n")),(0,r.kt)("p",null,"Afterwards we need to configure our plugin to use this custom converter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\n\n                    \n                        \n                        java.util.UUID\n                        \n                        com.example.UUIDScalarConverter\n                    \n                \n                com.example.generated\n                mySchema.graphql\n            \n        \n    \n--&gt;\n\n")),(0,r.kt)("h3",{id:"generating-test-client"},"Generating Test Client"),(0,r.kt)("p",null,"This Mojo generates GraphQL Kotlin test client code based on the provided queries using target GraphQL ",(0,r.kt)("inlineCode",{parentName:"p"},". Classes\nare generated under specified "),". When using default configuration and storing GraphQL queries under ``\ndirectories, task can be executed directly from the command line by explicitly providing required properties."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"\n\n\n")),(0,r.kt)("p",null,"Mojo can also be configured in your Maven build file to become part of your build lifecycle. Plugin also provides additional\nconfiguration options that are not available on command line."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\n\n\n")),(0,r.kt)("p",null,"This will process all GraphQL queries located under `` and generate corresponding GraphQL Kotlin test clients.\nGenerated classes will be automatically added to the project test compile sources."),(0,r.kt)("p",null,">"," NOTE: You might need to explicitly add generated test clients to your project test sources for your IDE to recognize them.\n",">"," See ",(0,r.kt)("a",{parentName:"p",href:"https://www.mojohaus.org/build-helper-maven-plugin/"},"build-helper-maven-plugin")," for details."),(0,r.kt)("h3",{id:"complete-minimal-configuration-example"},"Complete Minimal Configuration Example"),(0,r.kt)("p",null,"Following is the minimal configuration that runs introspection query against a target GraphQL server and generates a corresponding schema.\nThis generated schema is subsequently used to generate GraphQL client code based on the queries provided under `` directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\n\n\n")),(0,r.kt)("p",null,">"," NOTE: Both ",(0,r.kt)("inlineCode",{parentName:"p"},"and")," goals are bound to the same ",(0,r.kt)("inlineCode",{parentName:"p"},"Maven lifecycle phase.\n&gt; As opposed to Gradle, Maven does not support explicit ordering of different goals bound to the same build phase. Maven\n&gt; Mojos will be executed in the order they are defined in your")," build file."),(0,r.kt)("h3",{id:"complete-configuration-example"},"Complete Configuration Example"),(0,r.kt)("p",null,"Following is a configuration example that downloads schema SDL from a target GraphQL server that is then used to generate\nthe GraphQL client code based on the provided query."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'\n\n                true\n                \n                    \n                    \n                        \n                        java.util.UUID\n                        \n                        com.example.UUIDScalarConverter\n                    \n                \n                \n                    My-Custom-Header\n                \n                \n                    \n                    1000\n                    30000\n                \n                \n                    ${"{"}project.basedir{"}"}/src/main/resources/queries/MyQuery.graphql\n                \n            \n        \n    \n--&gt;\n\n')))}c.isMDXComponent=!0}}]);