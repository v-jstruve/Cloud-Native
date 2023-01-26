"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30248],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={slug:"Kubernetes-101",title:"1-3. Kubernetes 101",authors:["steven"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["serverless","containers","decision-tree","aks","kubernetes","container-apps"],image:"https://azure.github.io/Cloud-Native/img/og/30-03.png",description:"What is Kubernetes? And why is it so ubiquitous in Cloud-native solutions?",tags:["cloud-native","30daysofcloudnative","zero-to-hero","ask-the-expert","azure-kubernetes-service"]},i=void 0,s={permalink:"/Cloud-Native/cnny-2023/Kubernetes-101",source:"@site/blog-cnny/2023-01-25/30days.md",title:"1-3. Kubernetes 101",description:"What is Kubernetes? And why is it so ubiquitous in Cloud-native solutions?",date:"2023-01-25T00:00:00.000Z",formattedDate:"January 25, 2023",tags:[{label:"cloud-native",permalink:"/Cloud-Native/cnny-2023/tags/cloud-native"},{label:"30daysofcloudnative",permalink:"/Cloud-Native/cnny-2023/tags/30-daysofcloudnative"},{label:"zero-to-hero",permalink:"/Cloud-Native/cnny-2023/tags/zero-to-hero"},{label:"ask-the-expert",permalink:"/Cloud-Native/cnny-2023/tags/ask-the-expert"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/cnny-2023/tags/azure-kubernetes-service"}],readingTime:2.385,hasTruncateMarker:!1,authors:[{name:"Steven Murawski",title:"Principal Cloud Advocate",url:"https://github.com/smurawski",imageURL:"https://github.com/smurawski.png",key:"steven"}],frontMatter:{slug:"Kubernetes-101",title:"1-3. Kubernetes 101",authors:["steven"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["serverless","containers","decision-tree","aks","kubernetes","container-apps"],image:"https://azure.github.io/Cloud-Native/img/og/30-03.png",description:"What is Kubernetes? And why is it so ubiquitous in Cloud-native solutions?",tags:["cloud-native","30daysofcloudnative","zero-to-hero","ask-the-expert","azure-kubernetes-service"]},prevItem:{title:"1-4. Microservices 101",permalink:"/Cloud-Native/cnny-2023/microservices-101"},nextItem:{title:"1-2. Containers 101",permalink:"/Cloud-Native/cnny-2023/containers-101"}},l={authorsImageUrls:[void 0]},u=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Introduction",id:"introduction",level:2},{value:"What is Kubernetes?",id:"what-is-kubernetes",level:2},{value:"How does Kubernetes Work?",id:"how-does-kubernetes-work",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/cnny-2023/kubernetes-101"}),(0,a.kt)("meta",{name:"twitter:title",content:"Kubernetes 101"}),(0,a.kt)("meta",{name:"twitter:description",content:"What is Kubernetes? And why is it so ubiquitous in Cloud-native solutions?"}),(0,a.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/og/30-03.png"}),(0,a.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.kt)("meta",{name:"twitter:creator",content:"@stevenmurawski"}),(0,a.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,a.kt)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/cnny-2023/kubernetes-101"})),(0,a.kt)("p",null,"Welcome to ",(0,a.kt)("inlineCode",{parentName:"p"},"Day 3 of Week 1")," of #CloudNativeNewYear!"),(0,a.kt)("p",null,"This week we'll focus on what Kubernetes is."),(0,a.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Introduction"),(0,a.kt)("li",{parentName:"ul"},"What is Kubernetes? (Video)"),(0,a.kt)("li",{parentName:"ul"},"How does Kubernetes Work? (Video)"),(0,a.kt)("li",{parentName:"ul"},"Conclusion")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(25704).Z,width:"3840",height:"654"})),(0,a.kt)("hr",null),(0,a.kt)("admonition",{title:"REGISTER & LEARN: KUBERNETES 101",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Interested in a dive into Kubernetes and a chance to talk to experts? "),(0,a.kt)("p",{parentName:"admonition"},"\ud83c\udf99: Join us ",(0,a.kt)("strong",{parentName:"p"},"Jan 26 @1pm PST"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://info.microsoft.com/ww-landing-a-quickstart-guide-to-kubernetes-concepts.html?WT.mc_id=containers-84290-stmuraws"},"by registering here")),(0,a.kt)("p",{parentName:"admonition"},"Here's what you will learn:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Key concepts and core principles of Kubernetes."),(0,a.kt)("li",{parentName:"ul"},"How to deploy, scale and manage containerized workloads."),(0,a.kt)("li",{parentName:"ul"},"Live Demo of the concepts explained"),(0,a.kt)("li",{parentName:"ul"},"How to get started with Azure Kubernetes Service for free.")),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Start your free Azure Kubernetes Trial Today!!"),": ",(0,a.kt)("a",{parentName:"p",href:"https://aka.ms/TryAKS"},"aka.ms/TryAKS"))),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Kubernetes is an open source container orchestration engine that can help with automated deployment, scaling, and management of our applications."),(0,a.kt)("p",null,"Kubernetes takes physical (or virtual) resources and provides a consistent API over them, bringing a consistency to the management and runtime experience for our applications.  Kubernetes provides us with a number of capabilities such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Container scheduling"),(0,a.kt)("li",{parentName:"ul"},"Service discovery and load balancing"),(0,a.kt)("li",{parentName:"ul"},"Storage orchestration"),(0,a.kt)("li",{parentName:"ul"},"Automated rollouts and rollbacks"),(0,a.kt)("li",{parentName:"ul"},"Automatic bin packing"),(0,a.kt)("li",{parentName:"ul"},"Self-healing"),(0,a.kt)("li",{parentName:"ul"},"Secret and configuration management")),(0,a.kt)("p",null,"We'll learn more about most of these topics as we progress through Cloud Native New Year."),(0,a.kt)("h2",{id:"what-is-kubernetes"},"What is Kubernetes?"),(0,a.kt)("p",null,"Let's hear from Brendan Burns, one of the founders of Kubernetes as to what Kubernetes actually is."),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/q1PcAawa4Bg",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,a.kt)("h2",{id:"how-does-kubernetes-work"},"How does Kubernetes Work?"),(0,a.kt)("p",null,"And Brendan shares a bit more with us about how Kubernetes works."),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/daVUONZqn88",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Kubernetes allows us to deploy and manage our applications effectively and consistently. "),(0,a.kt)("p",null,"By providing a consistent API across many of the concerns our applications have, like load balancing, networking, storage, and compute, Kubernetes improves both our ability to build and ship new software. "),(0,a.kt)("p",null,"There are standards for the applications to depend on for resources needed. Deployments, metrics, and logs are provided in a standardized fashion allowing more effecient operations across our application environments. "),(0,a.kt)("p",null,"And since Kubernetes is an open source platform, it can be found in just about every type of operating environment - cloud, virtual machines, physical hardware, shared data centers, even small devices like Rasberry Pi's!"),(0,a.kt)("p",null,"Want to learn more?  ",(0,a.kt)("a",{parentName:"p",href:"https://info.microsoft.com/ww-landing-a-quickstart-guide-to-kubernetes-concepts.html?WT.mc_id=containers-84290-stmuraws"},"Join us for a webinar on Kubernetes Concepts (or catch the playback) on Thursday, January 26th at 1 PM PST")," and watch for the rest of this series right here!"))}p.isMDXComponent=!0},25704:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/hero-banner-991129dffd470b38678db8972274c09a.png"}}]);