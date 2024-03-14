"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7143],{8423:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>n,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var s=r(5893),o=r(1151);const i={title:"Operators",description:"A list of all the custom operators supported by Tailcall."},n=void 0,d={id:"operators/index",title:"Operators",description:"A list of all the custom operators supported by Tailcall.",source:"@site/docs/operators/index.md",sourceDirName:"operators",slug:"/operators/",permalink:"/docs/operators/",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/operators/index.md",tags:[],version:"current",frontMatter:{title:"Operators",description:"A list of all the custom operators supported by Tailcall."},sidebar:"tutorialSidebar",previous:{title:"Watch Mode",permalink:"/docs/guides/watch-mode"},next:{title:"@addField",permalink:"/docs/operators/add-field"}},a={},l=[];function c(e){const t={a:"a",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Tailcall DSL builds on your existing GraphQL knowledge by allowing the addition of some custom operators. These operators provide powerful compile time guarantees to ensure your API composition is tight and robust. The system automatically generates highly optimized resolver logic for your types using the operator information."}),"\n",(0,s.jsx)(t.p,{children:"Here is a list of all the custom operators supported by Tailcall:"}),"\n",(0,s.jsx)(t.p,{children:"Certainly! Here's the table with hyperlinks added back to the operator names:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Operator"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/operators/add-field",children:"@addField"})}),(0,s.jsx)(t.td,{children:"Simplifies data structures and queries by adding, inlining, or flattening fields or nodes within the schema."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/operators/cache",children:"@cache"})}),(0,s.jsx)(t.td,{children:"Enables caching for the query, field or type applied to."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/operators/call",children:"@call"})}),(0,s.jsx)(t.td,{children:"Invokes a query or mutation from another query or mutation field."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/operators/const",children:"@const"})}),(0,s.jsx)(t.td,{children:"Allows embedding of a constant response within the schema."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/operators/graphql",children:"@graphQL"})}),(0,s.jsx)(t.td,{children:"Resolves a field or node by a GraphQL API."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/operators/grpc",children:"@grpc"})}),(0,s.jsx)(t.td,{children:"Resolves a field or node by a gRPC API."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/operators/http",children:"@http"})}),(0,s.jsx)(t.td,{children:"Resolves a field or node by a REST API."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/operators/link",children:"@link"})}),(0,s.jsx)(t.td,{children:"Imports external resources such as config files, certs, protobufs, etc in the schema."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/operators/modify",children:"@modify"})}),(0,s.jsx)(t.td,{children:"Enables changes to attributes of fields or nodes in the schema."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/operators/omit",children:"@omit"})}),(0,s.jsx)(t.td,{children:"Excludes fields or nodes from the generated schema, making them inaccessible through the GraphQL API."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/operators/server",children:"@server"})}),(0,s.jsx)(t.td,{children:"Provides server configurations for behavior tuning and tailcall optimization in specific use-cases."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/operators/telemetry",children:"@telemetry"})}),(0,s.jsx)(t.td,{children:"Integrates with open-telemetry to provide observability of the running tailcall service."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/operators/upstream",children:"@upstream"})}),(0,s.jsx)(t.td,{children:"Controls aspects of the upstream server connection, including timeouts and keep-alive settings."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>d,a:()=>n});var s=r(7294);const o={},i=s.createContext(o);function n(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);