"use strict";(self.webpackChunktailcall_run=self.webpackChunktailcall_run||[]).push([[6515],{2041:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>c,metadata:()=>m,toc:()=>u});var l=a(7462),n=a(7294),i=a(3905),r=a(614);const o=()=>{const[e,t]=(0,n.useState)();return(0,n.useEffect)((()=>{(async()=>{const e=await fetch("https://api.github.com/repos/tailcallhq/tailcall/releases/latest"),a=await e.json();"string"==typeof a?.tag_name&&t(a.tag_name)})().catch(console.error)}),[]),n.createElement(n.Fragment,null,e)},s=()=>n.createElement("div",null,n.createElement(r.Z,null,"curl -sSL https://raw.githubusercontent.com/tailcallhq/tailcall/master/install.sh | bash -s -- ",n.createElement(o,null))),c={title:"Installation",sidebar_position:1,slug:"/getting_started"},p=void 0,m={unversionedId:"getting_started/installation",id:"getting_started/installation",title:"Installation",description:'You can install the latest version -{" "}',source:"@site/docs/getting_started/installation.mdx",sourceDirName:"getting_started",slug:"/getting_started",permalink:"/docs/getting_started",draft:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/getting_started/installation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Installation",sidebar_position:1,slug:"/getting_started"},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/docs/intro/architecture"},next:{title:"Configuration",permalink:"/docs/getting_started/configuration"}},d={},u=[{value:"NPM",id:"npm",level:2},{value:"Homebrew",id:"homebrew",level:2},{value:"Curl",id:"curl",level:2},{value:"Docker",id:"docker",level:2}],h={toc:u},k="wrapper";function g(e){let{components:t,...a}=e;return(0,i.kt)(k,(0,l.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(n.Fragment,null,"You can install the latest version -"," ",(0,i.kt)("b",null,(0,i.kt)(o,{mdxType:"Version"})),", by using",(0,i.kt)("b",null," NPM"),"."),(0,i.kt)("h2",{id:"npm"},"NPM"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you don't already have ",(0,i.kt)("strong",{parentName:"p"},"nodejs")," installed, you can find the instructions ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en/learn/getting-started/how-to-install-nodejs"},"here"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install Tailcall by running the following command in your terminal:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -g tailcallhq/tailcall\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Verify that Tailcall is installed correctly by running:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"tc\n")),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Do not use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--force")," flag during npm installations, as it ignores installing platform-specific builds.")))),(0,i.kt)("h2",{id:"homebrew"},"Homebrew"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you don't already have Homebrew installed, you can find the instructions ",(0,i.kt)("a",{parentName:"p",href:"https://brew.sh/"},"here"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the Tailcall repository to Homebrew by running the following command in your terminal:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brew tap tailcallhq/tailcall\nbrew install tailcall\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Verify that Tailcall is installed correctly by running:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"tc\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once installation is done, ",(0,i.kt)("strong",{parentName:"p"},"upgrades")," can be performed via:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brew update\nbrew upgrade tailcall\n")))),(0,i.kt)("h2",{id:"curl"},"Curl"),(0,i.kt)("p",null,"Follow the steps below to manually install the cli on your system:"),(0,i.kt)(s,{mdxType:"InstallCommand"}),(0,i.kt)("p",null,"This command fetches and executes the Tailcall installation script. The installed files are located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.tailcall")," directory."),(0,i.kt)("p",null,"Upon completion of the installation, extend your ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable to include the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.tailcall/bin")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=$PATH:~/.tailcall/bin\n")),(0,i.kt)("h2",{id:"docker"},"Docker"),(0,i.kt)("p",null,"If you want to install Tailcall with Docker, follow the steps below. Before starting, ensure Docker is installed on your system. If not, you can download it from ",(0,i.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop"},"here"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Pull the latest Tailcall Docker image using the following command:"),(0,i.kt)(r.Z,{language:"bash",mdxType:"CodeBlock"},"docker pull ghcr.io/tailcallhq/tailcall/tc-server:",(0,i.kt)(o,{mdxType:"Version"})),(0,i.kt)("p",{parentName:"li"},"This command fetches the latest version of the Tailcall Docker image from the Docker registry.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run the Tailcall Docker container with the following command:"),(0,i.kt)(r.Z,{language:"bash",mdxType:"CodeBlock"},"docker run -p 8080:8080 -p 8081:8081 ghcr.io/tailcallhq/tailcall/tc-server:",(0,i.kt)(o,{mdxType:"Version"})),(0,i.kt)("p",{parentName:"li"},"This command starts the Tailcall server in a Docker container. Similar to the homebrew installation, it exposes a the graphQL endpoint on port 8080."))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Once the installation is compeleted, you should verify the if the version printed on running ",(0,i.kt)("inlineCode",{parentName:"p"},"tc")," command match the actual installed versions.")))}g.isMDXComponent=!0}}]);