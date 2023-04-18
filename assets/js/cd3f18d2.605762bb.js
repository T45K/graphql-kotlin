"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[142],{3064:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>g});var t=a(7462),i=a(3366),o=(a(7294),a(3905)),r=(a(8561),["components"]),l={id:"maven-plugin-usage",title:"Maven Plugin Usage",sidebar_label:"Usage"},p=void 0,s={unversionedId:"plugins/maven-plugin-usage",id:"version-5.x.x/plugins/maven-plugin-usage",title:"Maven Plugin Usage",description:"Downloading Schema SDL",source:"@site/versioned_docs/version-5.x.x/plugins/maven-plugin-usage.md",sourceDirName:"plugins",slug:"/plugins/maven-plugin-usage",permalink:"/graphql-kotlin/docs/5.x.x/plugins/maven-plugin-usage",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-5.x.x/plugins/maven-plugin-usage.md",tags:[],version:"5.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1681792398,formattedLastUpdatedAt:"Apr 18, 2023",frontMatter:{id:"maven-plugin-usage",title:"Maven Plugin Usage",sidebar_label:"Usage"},sidebar:"version-5.x.x/docs",previous:{title:"Goals",permalink:"/graphql-kotlin/docs/5.x.x/plugins/maven-plugin-goals"},next:{title:"Schema Generator Hooks Provider",permalink:"/graphql-kotlin/docs/5.x.x/plugins/hooks-provider"}},c={},g=[{value:"Downloading Schema SDL",id:"downloading-schema-sdl",level:2},{value:"Introspecting Schema",id:"introspecting-schema",level:2},{value:"Generating Client",id:"generating-client",level:2},{value:"Generating Client with Custom Scalars",id:"generating-client-with-custom-scalars",level:2},{value:"Generating Client using Kotlinx Serialization",id:"generating-client-using-kotlinx-serialization",level:2},{value:"Generating Test Client",id:"generating-test-client",level:2},{value:"Minimal Configuration Example",id:"minimal-configuration-example",level:2},{value:"Complete Configuration Example",id:"complete-configuration-example",level:2},{value:"Generating Multiple Clients",id:"generating-multiple-clients",level:2},{value:"Generating SDL Example",id:"generating-sdl-example",level:2},{value:"Generating SDL with Custom Hooks Provider Example",id:"generating-sdl-with-custom-hooks-provider-example",level:2}],u={toc:g};function d(e){var n=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"downloading-schema-sdl"},"Downloading Schema SDL"),(0,o.kt)("p",null,"Download SDL Mojo requires target GraphQL server ",(0,o.kt)("inlineCode",{parentName:"p"},"endpoint")," to be specified. Task can be executed directly from the\ncommand line by explicitly specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql.endpoint")," property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ mvn com.expediagroup:graphql-kotlin-maven-plugin:download-sdl -Dgraphql.endpoint="http://localhost:8080/sdl"\n')),(0,o.kt)("p",null,"Mojo can also be configured in your Maven build file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>download-sdl</goal>\n            </goals>\n            <configuration>\n                <endpoint>http://localhost:8080/sdl</endpoint>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"download-sdl")," goal will be executed as part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"generate-sources")," ",(0,o.kt)("a",{parentName:"p",href:"https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html"},"build lifecycle phase"),"."),(0,o.kt)("h2",{id:"introspecting-schema"},"Introspecting Schema"),(0,o.kt)("p",null,"Introspection Mojo requires target GraphQL server ",(0,o.kt)("inlineCode",{parentName:"p"},"endpoint")," to be specified. Task can be executed directly from the\ncommand line by explicitly specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql.endpoint")," property"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ mvn com.expediagroup:graphql-kotlin-maven-plugin:introspect-schema -Dgraphql.endpoint="http://localhost:8080/graphql"\n')),(0,o.kt)("p",null,"Mojo can also be configured in your Maven build file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>introspect-schema</goal>\n            </goals>\n            <configuration>\n                <endpoint>http://localhost:8080/graphql</endpoint>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"introspect-schema")," goal will be executed as part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"generate-sources")," ",(0,o.kt)("a",{parentName:"p",href:"https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html"},"build lifecycle phase"),"."),(0,o.kt)("h2",{id:"generating-client"},"Generating Client"),(0,o.kt)("p",null,"This Mojo generates GraphQL client code based on the provided queries using target GraphQL ",(0,o.kt)("inlineCode",{parentName:"p"},"schemaFile"),". Classes are\ngenerated under specified ",(0,o.kt)("inlineCode",{parentName:"p"},"packageName"),". When using default configuration and storing GraphQL queries under ",(0,o.kt)("inlineCode",{parentName:"p"},"src/main/resources"),"\ndirectories, task can be executed directly from the command line by explicitly providing required properties."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ mvn com.expediagroup:graphql-kotlin-maven-plugin:generate-client -Dgraphql.schemaFile="mySchema.graphql" -Dgraphql.packageName="com.example.generated"\n')),(0,o.kt)("p",null,"Mojo can also be configured in your Maven build file to become part of your build lifecycle. Plugin also provides additional\nconfiguration options that are not available on command line."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>generate-client</goal>\n            </goals>\n            <configuration>\n                <packageName>com.example.generated</packageName>\n                <schemaFile>mySchema.graphql</schemaFile>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")),(0,o.kt)("p",null,"This will process all GraphQL queries located under ",(0,o.kt)("inlineCode",{parentName:"p"},"src/main/resources")," and generate corresponding GraphQL Kotlin client\ndata models. Generated classes will be automatically added to the project compile sources."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You might need to explicitly add generated clients to your project sources for your IDE to recognize them. See\n",(0,o.kt)("a",{parentName:"p",href:"https://www.mojohaus.org/build-helper-maven-plugin/"},"build-helper-maven-plugin")," for details.")),(0,o.kt)("h2",{id:"generating-client-with-custom-scalars"},"Generating Client with Custom Scalars"),(0,o.kt)("p",null,"By default, all custom GraphQL scalars will be serialized as Strings. You can override this default behavior by specifying\ncustom ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/graphql-kotlin-client/src/main/kotlin/com/expediagroup/graphql/client/converter/ScalarConverter.kt"},"scalar converter"),"."),(0,o.kt)("p",null,"For example given following custom scalar in our GraphQL schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar UUID\n")),(0,o.kt)("p",null,"We can create a custom converter to automatically convert this custom scalar to ",(0,o.kt)("inlineCode",{parentName:"p"},"java.util.UUID")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"package com.example\n\nimport com.expediagroup.graphql.client.converter.ScalarConverter\nimport java.util.UUID\n\nclass UUIDScalarConverter : ScalarConverter<UUID> {\n    override fun toScalar(rawValue: Any): UUID = UUID.fromString(rawValue.toString())\n    override fun toJson(value: UUID): String = value.toString()\n}\n")),(0,o.kt)("p",null,"Afterwards we need to configure our plugin to use this custom converter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>generate-client</goal>\n            </goals>\n            <configuration>\n                <allowDeprecatedFields>false</allowDeprecatedFields>\n                <customScalars>\n                    <customScalar>\n                        \x3c!-- custom scalar UUID type --\x3e\n                        <scalar>UUID</scalar>\n                        \x3c!-- fully qualified Java class name of a custom scalar type --\x3e\n                        <type>java.util.UUID</type>\n                        \x3c!-- fully qualified Java class name of a custom com.expediagroup.graphql.client.converter.ScalarConverter\n                           used to convert to/from raw JSON and scalar type --\x3e\n                        <converter>com.example.UUIDScalarConverter</converter>\n                    </customScalar>\n                </customScalars>\n                <packageName>com.example.generated</packageName>\n                <schemaFile>mySchema.graphql</schemaFile>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")),(0,o.kt)("h2",{id:"generating-client-using-kotlinx-serialization"},"Generating Client using Kotlinx Serialization"),(0,o.kt)("p",null,"GraphQL Kotlin plugins default to generate client data models that are compatible with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/FasterXML/jackson"},"Jackson"),".\nWe can change this default behavior by explicitly specifying serializer type and configuring ",(0,o.kt)("inlineCode",{parentName:"p"},"kotlinx.serialization")," compiler\nplugin. See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Kotlin/kotlinx.serialization"},"kotlinx.serialization documentation")," for details."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<project>\n    <dependencies>\n        \x3c!-- other dependencies omitted for clarity --\x3e\n        <dependency>\n            <groupId>org.jetbrains.kotlinx</groupId>\n            <artifactId>kotlinx-serialization-json</artifactId>\n            <version>${kotlinx-serialization.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            \x3c!-- other plugins omitted for clarity --\x3e\n            <plugin>\n                <groupId>org.jetbrains.kotlin</groupId>\n                <artifactId>kotlin-maven-plugin</artifactId>\n                <version>${kotlin.version}</version>\n                <configuration>\n                    <jvmTarget>1.8</jvmTarget>\n                    <compilerPlugins>\n                        <plugin>kotlinx-serialization</plugin>\n                    </compilerPlugins>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>compile</id>\n                        <goals>\n                            <goal>compile</goal>\n                        </goals>\n                    </execution>\n                    <execution>\n                        <id>test-compile</id>\n                        <goals>\n                            <goal>test-compile</goal>\n                        </goals>\n                    </execution>\n                </executions>\n                <dependencies>\n                    <dependency>\n                        <groupId>org.jetbrains.kotlin</groupId>\n                        <artifactId>kotlin-maven-serialization</artifactId>\n                        <version>${kotlin.version}</version>\n                    </dependency>\n                </dependencies>\n            </plugin>\n            <plugin>\n                <groupId>com.expediagroup</groupId>\n                <artifactId>graphql-kotlin-maven-plugin</artifactId>\n                <version>${graphql-kotlin.version}</version>\n                <executions>\n                    <execution>\n                        <goals>\n                            <goal>generate-client</goal>\n                        </goals>\n                        <configuration>\n                            <packageName>com.example.generated</packageName>\n                            <schemaFile>mySchema.graphql</schemaFile>\n                            \x3c!-- optional configuration below --\x3e\n                            <serializer>KOTLINX</serializer>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n")),(0,o.kt)("h2",{id:"generating-test-client"},"Generating Test Client"),(0,o.kt)("p",null,"This Mojo generates GraphQL Kotlin test client code based on the provided queries using target GraphQL ",(0,o.kt)("inlineCode",{parentName:"p"},"schemaFile"),". Classes\nare generated under specified ",(0,o.kt)("inlineCode",{parentName:"p"},"packageName"),". When using default configuration and storing GraphQL queries under ",(0,o.kt)("inlineCode",{parentName:"p"},"src/test/resources"),"\ndirectories, task can be executed directly from the command line by explicitly providing required properties."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ mvn com.expediagroup:graphql-kotlin-maven-plugin:generate-test-client -Dgraphql.schemaFile="mySchema.graphql" -Dgraphql.packageName="com.example.generated"\n')),(0,o.kt)("p",null,"Mojo can also be configured in your Maven build file to become part of your build lifecycle. Plugin also provides additional\nconfiguration options that are not available on command line."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>generate-test-client</goal>\n            </goals>\n            <configuration>\n                <packageName>com.example.generated</packageName>\n                <schemaFile>mySchema.graphql</schemaFile>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")),(0,o.kt)("p",null,"This will process all GraphQL queries located under ",(0,o.kt)("inlineCode",{parentName:"p"},"src/test/resources")," and generate corresponding GraphQL Kotlin test clients.\nGenerated classes will be automatically added to the project test compile sources."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You might need to explicitly add generated test clients to your project test sources for your IDE to recognize them.\nSee ",(0,o.kt)("a",{parentName:"p",href:"https://www.mojohaus.org/build-helper-maven-plugin/"},"build-helper-maven-plugin")," for details.")),(0,o.kt)("h2",{id:"minimal-configuration-example"},"Minimal Configuration Example"),(0,o.kt)("p",null,"Following is the minimal configuration that runs introspection query against a target GraphQL server and generates a corresponding schema.\nThis generated schema is subsequently used to generate GraphQL client code based on the queries provided under ",(0,o.kt)("inlineCode",{parentName:"p"},"src/main/resources")," directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>introspect-schema</goal>\n                <goal>generate-client</goal>\n            </goals>\n            <configuration>\n                <endpoint>http://localhost:8080/graphql</endpoint>\n                <packageName>com.example.generated</packageName>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Both ",(0,o.kt)("inlineCode",{parentName:"p"},"introspect-schema")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"generate-client")," goals are bound to the same ",(0,o.kt)("inlineCode",{parentName:"p"},"generate-sources")," Maven lifecycle phase.\nAs opposed to Gradle, Maven does not support explicit ordering of different goals bound to the same build phase. Maven\nMojos will be executed in the order they are defined in your ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml")," build file.")),(0,o.kt)("h2",{id:"complete-configuration-example"},"Complete Configuration Example"),(0,o.kt)("p",null,"Following is a configuration example that downloads schema SDL from a target GraphQL server that is then used to generate\nthe GraphQL client data models using ",(0,o.kt)("inlineCode",{parentName:"p"},"kotlinx.serialization")," that are based on the provided query."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<project>\n    <dependencies>\n        \x3c!-- other dependencies omitted for clarity --\x3e\n        <dependency>\n            <groupId>org.jetbrains.kotlinx</groupId>\n            <artifactId>kotlinx-serialization-json</artifactId>\n            <version>${kotlinx-serialization.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            \x3c!-- other plugins omitted for clarity --\x3e\n            <plugin>\n                <groupId>org.jetbrains.kotlin</groupId>\n                <artifactId>kotlin-maven-plugin</artifactId>\n                <version>${kotlin.version}</version>\n                <configuration>\n                    <jvmTarget>1.8</jvmTarget>\n                    <compilerPlugins>\n                        <plugin>kotlinx-serialization</plugin>\n                    </compilerPlugins>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>compile</id>\n                        <goals>\n                            <goal>compile</goal>\n                        </goals>\n                    </execution>\n                    <execution>\n                        <id>test-compile</id>\n                        <goals>\n                            <goal>test-compile</goal>\n                        </goals>\n                    </execution>\n                </executions>\n                <dependencies>\n                    <dependency>\n                        <groupId>org.jetbrains.kotlin</groupId>\n                        <artifactId>kotlin-maven-serialization</artifactId>\n                        <version>${kotlin.version}</version>\n                    </dependency>\n                </dependencies>\n            </plugin>\n            <plugin>\n                <groupId>com.expediagroup</groupId>\n                <artifactId>graphql-kotlin-maven-plugin</artifactId>\n                <version>${graphql-kotlin.version}</version>\n                <executions>\n                    <execution>\n                        <goals>\n                            <goal>download-sdl</goal>\n                            <goal>generate-client</goal>\n                        </goals>\n                        <configuration>\n                            <endpoint>http://localhost:8080/sdl</endpoint>\n                            <packageName>com.example.generated</packageName>\n                            \x3c!-- optional configuration below --\x3e\n                            <schemaFile>${project.build.directory}/mySchema.graphql</schemaFile>\n                            <allowDeprecatedFields>true</allowDeprecatedFields>\n                            <customScalars>\n                                <customScalar>\n                                    \x3c!-- custom scalar UUID type --\x3e\n                                    <scalar>UUID</scalar>\n                                    \x3c!-- fully qualified Java class name of a custom scalar type --\x3e\n                                    <type>java.util.UUID</type>\n                                    \x3c!-- fully qualified Java class name of a custom com.expediagroup.graphql.client.converter.ScalarConverter\n                                       used to convert to/from raw JSON and scalar type --\x3e\n                                    <converter>com.example.UUIDScalarConverter</converter>\n                                </customScalar>\n                            </customScalars>\n                            <headers>\n                                <X-Custom-Header>My-Custom-Header</X-Custom-Header>\n                            </headers>\n                            <timeoutConfiguration>\n                                \x3c!-- timeout values in milliseconds --\x3e\n                                <connect>1000</connect>\n                                <read>30000</read>\n                            </timeoutConfiguration>\n                            <queryFiles>\n                                <queryFile>${project.basedir}/src/main/resources/queries/MyQuery.graphql</queryFile>\n                            </queryFiles>\n                            <serializer>KOTLINX</serializer>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n")),(0,o.kt)("h2",{id:"generating-multiple-clients"},"Generating Multiple Clients"),(0,o.kt)("p",null,"In order to generate GraphQL clients targeting multiple endpoints, we need to configure separate executions targeting\ndifferent endpoints."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <id>generate-first-client</id>\n            <goals>\n                <goal>introspect-schema</goal>\n                <goal>generate-client</goal>\n            </goals>\n            <configuration>\n                <endpoint>http://localhost:8080/graphql</endpoint>\n                <packageName>com.example.generated.first</packageName>\n                <queryFiles>\n                    <queryFile>${project.basedir}/src/main/resources/queries/FirstQuery.graphql</queryFile>\n                </queryFiles>\n            </configuration>\n        </execution>\n        <execution>\n            <id>generate-second-client</id>\n            <goals>\n                <goal>introspect-schema</goal>\n                <goal>generate-client</goal>\n            </goals>\n            <configuration>\n                <endpoint>http://localhost:8081/graphql</endpoint>\n                <packageName>com.example.generated.second</packageName>\n                <queryFiles>\n                    <queryFile>${project.basedir}/src/main/resources/queries/SecondQuery.graphql</queryFile>\n                </queryFiles>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")),(0,o.kt)("h2",{id:"generating-sdl-example"},"Generating SDL Example"),(0,o.kt)("p",null,"GraphQL schema can be generated directly from your source code using reflections. ",(0,o.kt)("inlineCode",{parentName:"p"},"generate-sdl")," mojo will scan your\nclasspath looking for classes implementing ",(0,o.kt)("inlineCode",{parentName:"p"},"Query"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Mutation")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Subscription")," marker interfaces and then generates the\ncorresponding GraphQL schema using ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," and default ",(0,o.kt)("inlineCode",{parentName:"p"},"NoopSchemaGeneratorHooks"),". In order to\nlimit the amount of packages to scan, this mojo requires users to provide a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"packages")," that can contain GraphQL\ntypes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>generate-sdl</goal>\n            </goals>\n            <configuration>\n                <packages>\n                    <package>com.example</package>\n                </packages>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")),(0,o.kt)("h2",{id:"generating-sdl-with-custom-hooks-provider-example"},"Generating SDL with Custom Hooks Provider Example"),(0,o.kt)("p",null,"Plugin will default to use ",(0,o.kt)("inlineCode",{parentName:"p"},"NoopSchemaGeneratorHooks")," to generate target GraphQL schema. If your project uses custom hooks\nor needs to generate the federated GraphQL schema, you will need to provide an instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider"),"\nservice provider that will be used to create an instance of your custom hooks."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"generate-sdl")," mojo utilizes ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ServiceLoader.html"},"ServiceLoader"),"\nmechanism to dynamically load available ",(0,o.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," service providers from the classpath. Service provider\ncan be provided as part of your project, included in one of your project dependencies or through explicitly provided artifact.\nSee ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/plugins/hooks-provider"},"Schema Generator Hooks Provider")," for additional details on how to create custom hooks service provider.\nConfiguration below shows how to configure GraphQL Kotlin plugin with explicitly provided artifact to generate federated\nGraphQL schema."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-maven-plugin</artifactId>\n    <version>${graphql-kotlin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>generate-sdl</goal>\n            </goals>\n            <configuration>\n                <packages>\n                    <package>com.example</package>\n                </packages>\n            </configuration>\n        </execution>\n    </executions>\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-federated-hooks-provider</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n    </dependencies>\n</plugin>\n")))}d.isMDXComponent=!0}}]);