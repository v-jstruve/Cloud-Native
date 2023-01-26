"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14988:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={slug:"containers-101",title:"1-2. Containers 101",authors:["steven","paul","josh"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["serverless","containers","decision-tree","aks","kubernetes","container-apps"],image:"https://azure.github.io/Cloud-Native/img/og/30-02.png",description:"Let's dive into the various technologies behind Cloud Native development, starting with Containers.",tags:["cloud-native","30daysofcloudnative","zero-to-hero","ask-the-expert","azure-kubernetes-service","containers"]},r=void 0,s={permalink:"/Cloud-Native/cnny-2023/containers-101",source:"@site/blog-cnny/2023-01-24/30days.md",title:"1-2. Containers 101",description:"Let's dive into the various technologies behind Cloud Native development, starting with Containers.",date:"2023-01-24T00:00:00.000Z",formattedDate:"January 24, 2023",tags:[{label:"cloud-native",permalink:"/Cloud-Native/cnny-2023/tags/cloud-native"},{label:"30daysofcloudnative",permalink:"/Cloud-Native/cnny-2023/tags/30-daysofcloudnative"},{label:"zero-to-hero",permalink:"/Cloud-Native/cnny-2023/tags/zero-to-hero"},{label:"ask-the-expert",permalink:"/Cloud-Native/cnny-2023/tags/ask-the-expert"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/cnny-2023/tags/azure-kubernetes-service"},{label:"containers",permalink:"/Cloud-Native/cnny-2023/tags/containers"}],readingTime:3.965,hasTruncateMarker:!1,authors:[{name:"Steven Murawski",title:"Principal Cloud Advocate",url:"https://github.com/smurawski",imageURL:"https://github.com/smurawski.png",key:"steven"},{name:"Paul Yu",title:"Senior Cloud Advocate",url:"https://github.com/pauldotyu",imageURL:"https://github.com/pauldotyu.png",key:"paul"},{name:"Josh Duffney",title:"Cloud-Native Advocate @Microsoft",url:"https://github.com/duffney",imageURL:"https://github.com/duffney.png",key:"josh"}],frontMatter:{slug:"containers-101",title:"1-2. Containers 101",authors:["steven","paul","josh"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["serverless","containers","decision-tree","aks","kubernetes","container-apps"],image:"https://azure.github.io/Cloud-Native/img/og/30-02.png",description:"Let's dive into the various technologies behind Cloud Native development, starting with Containers.",tags:["cloud-native","30daysofcloudnative","zero-to-hero","ask-the-expert","azure-kubernetes-service","containers"]},prevItem:{title:"1-3. Kubernetes 101",permalink:"/Cloud-Native/cnny-2023/Kubernetes-101"},nextItem:{title:"1-1. Cloud-native Fundamentals",permalink:"/Cloud-Native/cnny-2023/cloud-native-fundamentals"}},l={authorsImageUrls:[void 0,void 0,void 0]},c=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Introduction",id:"introduction",level:2},{value:"How do Containers Work?",id:"how-do-containers-work",level:2},{value:"Why is Containerization so Popular?",id:"why-is-containerization-so-popular",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Resources",id:"resources",level:2},{value:"Learning Path",id:"learning-path",level:2}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/cnny-2023/containers-101"}),(0,o.kt)("meta",{name:"twitter:title",content:"Container 101"}),(0,o.kt)("meta",{name:"twitter:description",content:"Let's dive into the various technologies behind Cloud Native development, starting with Containers."}),(0,o.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/og/30-02.png"}),(0,o.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.kt)("meta",{name:"twitter:creator",content:"@stevenmurawski"}),(0,o.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,o.kt)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/cnny-2023/containers-101"})),(0,o.kt)("p",null,"Welcome to ",(0,o.kt)("inlineCode",{parentName:"p"},"Day 2 of Week 1")," of #CloudNativeNewYear!"),(0,o.kt)("p",null,"Today, we'll focus on building an understanding of containers."),(0,o.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Introduction"),(0,o.kt)("li",{parentName:"ul"},"How do Containers Work?"),(0,o.kt)("li",{parentName:"ul"},"Why are Containers Becoming so Popular?"),(0,o.kt)("li",{parentName:"ul"},"Conclusion"),(0,o.kt)("li",{parentName:"ul"},"Resources"),(0,o.kt)("li",{parentName:"ul"},"Learning Path")),(0,o.kt)("h2",{id:""},(0,o.kt)("img",{src:n(25704).Z,width:"3840",height:"654"})),(0,o.kt)("admonition",{title:"REGISTER & LEARN: KUBERNETES 101",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Interested in a dive into Kubernetes and a chance to talk to experts? "),(0,o.kt)("p",{parentName:"admonition"},"\ud83c\udf99: Join us ",(0,o.kt)("strong",{parentName:"p"},"Jan 26 @1pm PST"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://info.microsoft.com/ww-landing-a-quickstart-guide-to-kubernetes-concepts.html?lcid=en-us"},"by registering here")),(0,o.kt)("p",{parentName:"admonition"},"Here's what you will learn:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Key concepts and core principles of Kubernetes."),(0,o.kt)("li",{parentName:"ul"},"How to deploy, scale and manage containerized workloads."),(0,o.kt)("li",{parentName:"ul"},"Live Demo of the concepts explained"),(0,o.kt)("li",{parentName:"ul"},"How to get started with Azure Kubernetes Service for free.")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Start your free Azure Kubernetes Trial Today!!"),": ",(0,o.kt)("a",{parentName:"p",href:"https://aka.ms/TryAKS"},"aka.ms/TryAKS"))),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In the beginning, we deployed our applications onto physical servers.  We only had a certain number of those servers, so often they hosted multiple applications.  This led to some problems when those applications shared dependencies.  Upgrading one application could break another application on the same server.  "),(0,o.kt)("p",null,"Enter virtualization.  Virtualization allowed us to run our applications in an isolated operating system instance.  This removed much of the risk of updating shared dependencies.  However, it increased our overhead since we had to run a full operating system for each application environment. "),(0,o.kt)("p",null,"To address the challenges created by virtualization, containerization was created to improve isolation without duplicating kernel level resources. Containers provide efficient and consistent deployment and runtime experiences for our applications and have become very popular as a way of packaging and distributing applications. "),(0,o.kt)("h2",{id:"how-do-containers-work"},"How do Containers Work?"),(0,o.kt)("p",null,"Containers build on two capabilities in the Linux operating system, namespaces and cgroups.  These constructs allow the operating system to provide isolation to a process or group of processes, keeping their access to filesystem resources separate and providing controls on resource utilization.  This, combined with tooling to help package, deploy, and run container images has led to their popularity in today\u2019s operating environment.  This provides us our isolation without the overhead of additional operating system resources. "),(0,o.kt)("p",null,"When a container host is deployed on an operating system, it works at scheduling the access to the OS (operating systems) components. This is done by providing a logical isolated group that can contain processes for a given application, called a namespace. The container host then manages /schedules access from the namespace to the host OS.  The container host then uses cgroups to allocate compute resources. Together, the container host with the help of cgroups and namespaces can schedule multiple applications to access host OS resources.  "),(0,o.kt)("p",null,"Overall, this gives the illusion of virtualizing the host OS, where each application gets its own OS. In actuality, all the applications are running on the same operating system and sharing the same kernel as the container host. "),(0,o.kt)("h2",{id:"why-is-containerization-so-popular"},"Why is Containerization so Popular?"),(0,o.kt)("p",null,"Containers are popular in the software development industry because they provide several benefits over traditional virtualization methods. Some of these benefits include: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Portability"),": Containers make it easy to move an application from one environment to another without having to worry about compatibility issues or missing dependencies. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Isolation"),": Containers provide a level of isolation between the application and the host system, which means that the application running in the container cannot access the host system's resources. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Scalability"),": Containers make it easy to scale an application up or down as needed, which is useful for applications that experience a lot of traffic or need to handle a lot of data. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Resource Efficiency"),": Containers are more resource-efficient than traditional virtualization methods because they don't require a full operating system to be running on each virtual machine. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cost-Effective"),": Containers are more cost-effective than traditional virtualization methods because they don't require expensive hardware or licensing fees. ")),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Containers are a powerful technology that allows developers to package and deploy applications in a portable and isolated environment. This technology is becoming increasingly popular in the world of software development and is being used by many companies and organizations to improve their application deployment and management processes. With the benefits of portability, isolation, scalability, resource efficiency, and cost-effectiveness, containers are definitely worth considering for your next application development project. "),(0,o.kt)("p",null,"Containerizing applications is a key step in modernizing them, and there are many other patterns that can be adopted to achieve cloud-native architectures, including using serverless platforms, Kubernetes, and implementing DevOps practices. "),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/resources/cloud-computing-dictionary/what-is-a-container/?WT.mc_id=containers-84290-stmuraws"},"What are Containers")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/dotnet/architecture/microservices/container-docker-introduction/?WT.mc_id=containers-84290-stmuraws"},"Containerizing .NET Applications")," ")),(0,o.kt)("h2",{id:"learning-path"},"Learning Path"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/intro-to-docker-containers/?WT.mc_id=containers-84290-stmuraws"},"Introduction to Docker Containers"))))}p.isMDXComponent=!0},25704:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hero-banner-991129dffd470b38678db8972274c09a.png"}}]);