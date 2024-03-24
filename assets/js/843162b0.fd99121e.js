"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4316],{9850:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var r=n(5893),i=n(1151);const t={title:"@server"},a=void 0,o={id:"operators/server",title:"@server",description:"The @server directive, applied at the schema level, provides a comprehensive set of server configurations. It dictates server behavior and helps tune Tailcall for a range of use-cases.",source:"@site/docs/operators/server.md",sourceDirName:"operators",slug:"/operators/server",permalink:"/docs/operators/server",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/operators/server.md",tags:[],version:"current",frontMatter:{title:"@server"},sidebar:"tutorialSidebar",previous:{title:"@rest",permalink:"/docs/operators/rest"},next:{title:"@telemetry",permalink:"/docs/operators/telemetry"}},l={},c=[{value:"workers",id:"workers",level:2},{value:"port",id:"port",level:2},{value:"headers",id:"headers",level:2},{value:"cacheControl",id:"cachecontrol",level:3},{value:"custom",id:"custom",level:3},{value:"experimental",id:"experimental",level:3},{value:"setCookies",id:"setcookies",level:3},{value:"cors",id:"cors",level:3},{value:"graphiql",id:"graphiql",level:2},{value:"vars",id:"vars",level:2},{value:"introspection",id:"introspection",level:2},{value:"queryValidation",id:"queryvalidation",level:2},{value:"responseValidation",id:"responsevalidation",level:2},{value:"globalResponseTimeout",id:"globalresponsetimeout",level:2},{value:"version",id:"version",level:2},{value:"cert",id:"cert",level:2},{value:"key",id:"key",level:2},{value:"showcase",id:"showcase",level:3},{value:"batchRequests",id:"batchrequests",level:2},{value:"Trade-offs",id:"trade-offs",level:3}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"@server"})," directive, applied at the schema level, provides a comprehensive set of server configurations. It dictates server behavior and helps tune Tailcall for a range of use-cases."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:"schema @server(...[ServerSettings]...){\n    query: Query\n    mutation: Mutation\n}\n"})}),"\n",(0,r.jsxs)(s.p,{children:["In this templated structure, replace ",(0,r.jsx)(s.code,{children:"...[ServerSettings]..."})," with specific configurations tailored to your project's needs. Adjust and expand these settings as necessary."]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"ServerSettings"})," options and their details appear below."]}),"\n",(0,r.jsx)(s.h2,{id:"workers",children:"workers"}),"\n",(0,r.jsxs)(s.p,{children:["Setting ",(0,r.jsx)(s.code,{children:"workers"})," to ",(0,r.jsx)(s.code,{children:"32"})," means that the Tailcall server will use 32 worker threads."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:"schema @server(workers: 32) {\n  query: Query\n  mutation: Mutation\n}\n"})}),"\n",(0,r.jsxs)(s.p,{children:["This example sets the ",(0,r.jsx)(s.code,{children:"workers"})," to ",(0,r.jsx)(s.code,{children:"32"}),", meaning the Tailcall server will use 32 worker threads."]}),"\n",(0,r.jsx)(s.h2,{id:"port",children:"port"}),"\n",(0,r.jsxs)(s.p,{children:["Setting the ",(0,r.jsx)(s.code,{children:"port"})," to ",(0,r.jsx)(s.code,{children:"8090"})," means that Tailcall will be accessible at ",(0,r.jsx)(s.code,{children:"http://localhost:8000"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:"schema @server(port: 8090) {\n  query: Query\n  mutation: Mutation\n}\n"})}),"\n",(0,r.jsxs)(s.p,{children:["This example sets the ",(0,r.jsx)(s.code,{children:"port"})," to ",(0,r.jsx)(s.code,{children:"8090"}),", making Tailcall accessible at ",(0,r.jsx)(s.code,{children:"http://localhost:8090"}),"."]}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"Always choose non-standard ports, avoiding typical ones like 80 or 8080. Make sure your chosen port is free."})}),"\n",(0,r.jsx)(s.h2,{id:"headers",children:"headers"}),"\n",(0,r.jsx)(s.p,{children:"Allows intelligent configuration of the final response headers that's produced by Tailcall."}),"\n",(0,r.jsx)(s.h3,{id:"cachecontrol",children:"cacheControl"}),"\n",(0,r.jsxs)(s.p,{children:["Activating the ",(0,r.jsx)(s.code,{children:"cacheControl"})," configuration directs Tailcall to send ",(0,r.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control",children:"Cache-Control"})," headers in its responses. The ",(0,r.jsx)(s.code,{children:"max-age"})," value in the header matches the lowest of the values in the responses that Tailcall receives from its upstream. By default, this is ",(0,r.jsx)(s.code,{children:"false"}),", which means Tailcall does not set any header."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:"schema @server(headers: {cacheControl: true}) {\n  query: Query\n  mutation: Mutation\n}\n"})}),"\n",(0,r.jsx)(s.h3,{id:"custom",children:"custom"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"custom"})," is an array of key-value pairs. These headers get added to the response of every request made to the server. This can be useful for adding headers like ",(0,r.jsx)(s.code,{children:"Access-Control-Allow-Origin"})," to allow cross-origin requests, or some headers like ",(0,r.jsx)(s.code,{children:"X-Allowed-Roles"})," for use by downstream services."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema\n  @server(\n    headers: {\n      custom: [\n        {key: "X-Allowed-Roles", value: "admin,user"}\n      ]\n    }\n  ) {\n  query: Query\n  mutation: Mutation\n}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"experimental",children:"experimental"}),"\n",(0,r.jsxs)(s.p,{children:["When the ",(0,r.jsx)(s.code,{children:"experimental"})," configuration is enabled, Tailcall can include headers starting with ",(0,r.jsx)(s.code,{children:"X-"})," in its responses, which are sourced from its upstream. By default, this feature is disabled (",(0,r.jsx)(s.code,{children:"[]"}),"), meaning Tailcall does not forward any such headers unless explicitly configured to do so."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema\n  @server(\n    headers: {experimental: ["X-Experimental-Header"]}\n  ) {\n  query: Query\n  mutation: Mutation\n}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"setcookies",children:"setCookies"}),"\n",(0,r.jsxs)(s.p,{children:["Enabling the ",(0,r.jsx)(s.code,{children:"setCookies"})," option instructs Tailcall to include ",(0,r.jsx)(s.code,{children:"set-cookie"})," headers in its responses, which are obtained from the headers of upstream responses."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:"schema @server(headers: {setCookies: true}) {\n  query: Query\n  mutation: Mutation\n}\n"})}),"\n",(0,r.jsx)(s.h3,{id:"cors",children:"cors"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"cors"})," configuration allows you to enable ",(0,r.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",children:"CORS"})," on Tailcall. This is useful when you want to access Tailcall in the browser. It has the following fields:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"allowCredentials"}),": Indicates whether the server allows credentials (e.g., cookies, authorization headers) to be sent in cross-origin requests."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"allowHeaders"}),": A list of allowed headers in cross-origin requests. This can be used to specify custom headers that are allowed to be included in cross-origin requests."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"allowMethods"}),": A list of allowed HTTP methods in cross-origin requests. These methods specify the actions that are permitted in cross-origin requests."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"allowOrigins"}),": A list of origins that are allowed to access the server's resources in cross-origin requests. An origin can be a domain, a subdomain, or even 'null' for local file schemes."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"allowPrivateNetwork"}),": Indicates whether requests from private network addresses are allowed in cross-origin requests. Private network addresses typically include IP addresses reserved for internal networks."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"exposeHeaders"}),": A list of headers that the server exposes to the browser in cross-origin responses. Exposing certain headers allows client-side code to access them in the response."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"maxAge"}),": The maximum time (in seconds) that the client should cache preflight OPTIONS requests to avoid sending excessive requests to the server."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"vary"}),": A list of header names that indicate the values of which might cause the server's response to vary, potentially affecting caching."]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema\n  @server(\n    port: 8000\n    graphiql: true\n    hostname: "0.0.0.0"\n    headers: {\n      cors: {\n        allowCredentials: false\n        allowHeaders: ["Authorization"]\n        allowMethods: [POST, GET, OPTIONS]\n        allowOrigins: ["abc.xyz"]\n        allowPrivateNetwork: true\n        exposeHeaders: ["Content-Type"]\n        maxAge: 360\n        vary: "Origin"\n      }\n    }\n  ) {\n  query: Query\n}\n'})}),"\n",(0,r.jsx)(s.h2,{id:"graphiql",children:"graphiql"}),"\n",(0,r.jsxs)(s.p,{children:["Enabling the ",(0,r.jsx)(s.code,{children:"graphiql"})," configuration activates the GraphiQL IDE at the root (/) path within Tailcall. GraphiQL is a built-in, interactive in-browser GraphQL IDE, designed to streamline query development and testing. By default, this feature is off."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:"schema @server(port: 8000, graphiql: true) {\n  query: Query\n  mutation: Mutation\n}\n"})}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"While the GraphiQL interface is a powerful tool for development, consider disabling it in production environments if you're not exposing GraphQL APIs directly to users. This ensures an added layer of security and reduces unnecessary exposure."})}),"\n",(0,r.jsx)(s.h2,{id:"vars",children:"vars"}),"\n",(0,r.jsx)(s.p,{children:"This configuration allows defining local variables for use during the server's operations. These variables are handy for storing constant configurations, secrets, or other shared information that operations might need."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema\n  @server(\n    vars: {key: "apiKey", value: "YOUR_API_KEY_HERE"}\n  ) {\n  query: Query\n  mutation: Mutation\n}\n\ntype Query {\n  externalData: Data\n    @http(\n      path: "/external-api/data"\n      headers: [\n        {\n          key: "Authorization"\n          value: "Bearer {{vars.apiKey}}"\n        }\n      ]\n    )\n}\n'})}),"\n",(0,r.jsxs)(s.p,{children:["In the provided example, setting a variable named ",(0,r.jsx)(s.code,{children:"apiKey"}),' with a placeholder value of "YOUR_API_KEY_HERE" implies that whenever Tailcall fetches data from the ',(0,r.jsx)(s.code,{children:"externalData"})," endpoint, it includes the ",(0,r.jsx)(s.code,{children:"apiKey"})," in the Authorization header of the HTTP request."]}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsxs)(s.p,{children:["Local variables, like ",(0,r.jsx)(s.code,{children:"apiKey"}),", are instrumental in securing access to external services or providing a unified place for configurations. Ensure that sensitive information stored this way is well protected and not exposed unintentionally, if your Tailcall configuration is publicly accessible."]})}),"\n",(0,r.jsx)(s.h2,{id:"introspection",children:"introspection"}),"\n",(0,r.jsxs)(s.p,{children:["This setting controls the server's allowance of introspection queries. Introspection, a core feature of GraphQL, allows clients to directly fetch schema information. This capability proves crucial for tools and client applications in comprehending the available types, fields, and operations. By default, the server enables this setting (",(0,r.jsx)(s.code,{children:"true"}),")."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:"schema @server(introspection: false) {\n  query: Query\n  mutation: Mutation\n}\n"})}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"Although introspection is beneficial during development and debugging stages, consider disabling it in production environments. Turning off introspection in live deployments can enhance security by preventing potential attackers from discerning the schema and any associated business logic or data structures."})}),"\n",(0,r.jsx)(s.h2,{id:"queryvalidation",children:"queryValidation"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"queryValidation"})," configuration determines if the server checks incoming GraphQL queries against the defined schema. Each query check ensures it matches the schema, preventing errors from incorrect or malformed queries. In some situations, you might want to disable it, notably to ",(0,r.jsx)(s.strong,{children:"enhance server performance"})," at the cost of these checks. This defaults to ",(0,r.jsx)(s.code,{children:"false"})," if not specified."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:"schema @server(queryValidation: true) {\n  query: Query\n  mutation: Mutation\n}\n"})}),"\n",(0,r.jsxs)(s.p,{children:["The example above sets ",(0,r.jsx)(s.code,{children:"queryValidation"})," to ",(0,r.jsx)(s.code,{children:"true"}),", enabling the validation phase for incoming queries."]}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"Enable this in the development environment to ensure the queries sent are correct and validated. In the production environment, consider disabling it for improved performance."})}),"\n",(0,r.jsx)(s.h2,{id:"responsevalidation",children:"responseValidation"}),"\n",(0,r.jsxs)(s.p,{children:["Tailcall can automatically infer the schema of the HTTP endpoints for you. This information can check responses received from the upstream services. Enabling this setting allows you to do that. If not specified, the default setting for ",(0,r.jsx)(s.code,{children:"responseValidation"})," is ",(0,r.jsx)(s.code,{children:"false"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:"schema @server(responseValidation: true) {\n  query: Query\n  mutation: Mutation\n}\n"})}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"Disabling this setting will offer major performance improvements, but at the potential expense of data integrity."})}),"\n",(0,r.jsx)(s.h2,{id:"globalresponsetimeout",children:"globalResponseTimeout"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"globalResponseTimeout"})," configuration sets the max duration a query can run before the server terminates it. Essentially, it acts as a safeguard against long-running queries that could strain resources or pose security concerns."]}),"\n",(0,r.jsx)(s.p,{children:"If not explicitly defined, there might be a system-specific or default value that applies."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:"schema @server(globalResponseTimeout: 5000) {\n  query: Query\n  mutation: Mutation\n}\n"})}),"\n",(0,r.jsxs)(s.p,{children:["In this given example, setting the ",(0,r.jsx)(s.code,{children:"globalResponseTimeout"})," to ",(0,r.jsx)(s.code,{children:"5000"})," milliseconds, or 5 seconds, means any query execution taking longer than this duration will be automatically terminated by"]}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"Setting an appropriate response timeout in production environments is crucial. This optimizes resource use and serves as a security measure against potential denial-of-service attacks, where adversaries might run complex queries to exhaust server resources."})}),"\n",(0,r.jsx)(s.h2,{id:"version",children:"version"}),"\n",(0,r.jsxs)(s.p,{children:["The server uses the HTTP version. If not specified, the default value is ",(0,r.jsx)(s.code,{children:"HTTP1"}),". The available options are ",(0,r.jsx)(s.code,{children:"HTTP1"})," and ",(0,r.jsx)(s.code,{children:"HTTP2"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:"schema @server(version: HTTP2) {\n  query: Query\n  mutation: Mutation\n}\n"})}),"\n",(0,r.jsx)(s.h2,{id:"cert",children:"cert"}),"\n",(0,r.jsxs)(s.p,{children:["The path to certificate(s) for running the server over HTTP2 (HTTPS). If not specified, the default value is ",(0,r.jsx)(s.code,{children:"null"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema @server(cert: "./cert.pem") {\n  query: Query\n  mutation: Mutation\n}\n'})}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsxs)(s.p,{children:["The certificate can be of any extension, but it's highly recommended to use standards (",(0,r.jsx)(s.code,{children:"pem"}),", ",(0,r.jsx)(s.code,{children:"crt"}),", ",(0,r.jsx)(s.code,{children:"key"}),")."]})}),"\n",(0,r.jsx)(s.h2,{id:"key",children:"key"}),"\n",(0,r.jsxs)(s.p,{children:["The path to the key for running the server over HTTP2 (HTTPS). If not specified, the default value is ",(0,r.jsx)(s.code,{children:"null"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema @server(key: "./key.pem") {\n  query: Query\n  mutation: Mutation\n}\n'})}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsxs)(s.p,{children:["The key can be of any extension, but it's highly recommended to use standards (",(0,r.jsx)(s.code,{children:"pem"}),", ",(0,r.jsx)(s.code,{children:"crt"}),", ",(0,r.jsx)(s.code,{children:"key"}),")."]})}),"\n",(0,r.jsx)(s.h3,{id:"showcase",children:"showcase"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"@server"})," directive's ",(0,r.jsx)(s.code,{children:"showcase"})," option allows for hands-on experimentation with server configurations in a controlled environment. This feature simplifies the process of exploring and testing different settings."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:"schema @server(showcase: true) {\n  query: Query\n}\n"})}),"\n",(0,r.jsx)(s.h2,{id:"batchrequests",children:"batchRequests"}),"\n",(0,r.jsx)(s.p,{children:"Batching in GraphQL combines requests into one, reducing server round trips."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:"schema @server(\n  port: 8000\n  batchRequests: true\n)\n"})}),"\n",(0,r.jsx)(s.h3,{id:"trade-offs",children:"Trade-offs"}),"\n",(0,r.jsx)(s.p,{children:"Batching can improve performance but may introduce latency if one request in the batch takes longer. It also makes network traffic debugging harder."})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>a});var r=n(7294);const i={},t=r.createContext(i);function a(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);