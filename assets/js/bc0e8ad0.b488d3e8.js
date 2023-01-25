"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[66242],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(a),m=i,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,l=new Array(o);l[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},89997:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const o={slug:"cloud-native-fundamentals",title:"1-1. Cloud-native Fundamentals",authors:["cory"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["cloud-native","containers","decision-tree","kubernetes"],image:"https://azure.github.io/Cloud-Native/assets/ideal-img/hero-banner.e0a8d29.1030.png",description:"The fundamentals of Cloud-native!",tags:["cloud-native","30daysofcloudnative","zero-to-hero","ask-the-expert","azure-kubernetes-service"]},l=void 0,r={permalink:"/Cloud-Native/cnny-2023/cloud-native-fundamentals",source:"@site/blog-cnny/2023-01-23/cloud-native-fundamentals.md",title:"1-1. Cloud-native Fundamentals",description:"The fundamentals of Cloud-native!",date:"2023-01-23T00:00:00.000Z",formattedDate:"January 23, 2023",tags:[{label:"cloud-native",permalink:"/Cloud-Native/cnny-2023/tags/cloud-native"},{label:"30daysofcloudnative",permalink:"/Cloud-Native/cnny-2023/tags/30-daysofcloudnative"},{label:"zero-to-hero",permalink:"/Cloud-Native/cnny-2023/tags/zero-to-hero"},{label:"ask-the-expert",permalink:"/Cloud-Native/cnny-2023/tags/ask-the-expert"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/cnny-2023/tags/azure-kubernetes-service"}],readingTime:4.06,hasTruncateMarker:!1,authors:[{name:"Cory Skimming",title:"Sr. Product Marketing Manager",url:"https://twitter.com/cskimming",imageURL:"https://pbs.twimg.com/profile_images/1493684068227055617/iC9r8v6Z_400x400.jpg",key:"cory"}],frontMatter:{slug:"cloud-native-fundamentals",title:"1-1. Cloud-native Fundamentals",authors:["cory"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["cloud-native","containers","decision-tree","kubernetes"],image:"https://azure.github.io/Cloud-Native/assets/ideal-img/hero-banner.e0a8d29.1030.png",description:"The fundamentals of Cloud-native!",tags:["cloud-native","30daysofcloudnative","zero-to-hero","ask-the-expert","azure-kubernetes-service"]},prevItem:{title:"1-2. Containers 101",permalink:"/Cloud-Native/cnny-2023/containers-101"},nextItem:{title:"Kicking Off 30DaysOfCloudNative!",permalink:"/Cloud-Native/cnny-2023/cnny-kickoff"}},s={authorsImageUrls:[void 0]},c=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"1. What is cloud-native?",id:"1-what-is-cloud-native",level:2},{value:"2. So, what exactly is a cloud-native application?",id:"2-so-what-exactly-is-a-cloud-native-application",level:2},{value:"3. The benefits of cloud-native",id:"3-the-benefits-of-cloud-native",level:2},{value:"4. The pillars of cloud-native",id:"4-the-pillars-of-cloud-native",level:2},{value:"Resources",id:"resources",level:2}],d={toc:c};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Welcome to ",(0,i.kt)("inlineCode",{parentName:"p"},"Week 1")," of #CloudNativeNewYear!"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Cloud-native New Year",src:a(78576).Z,width:"1920",height:"1080"})),(0,i.kt)("p",null,'You will often hear the term "cloud-native" when discussing modern application development, but even a quick online search will return a huge number of articles, tweets, and web pages with a variety of definitions. So, what does cloud-native actually mean? Also, what makes an application a ',(0,i.kt)("em",{parentName:"p"},"cloud-native application"),' versus a "regular" application? '),(0,i.kt)("p",null,"Today, we will address these questions and more as we kickstart our learning journey (and our new year!) with an introductory dive into the wonderful world of cloud-native. "),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What is cloud-native? "),(0,i.kt)("li",{parentName:"ul"},"What is a cloud-native application?"),(0,i.kt)("li",{parentName:"ul"},"The benefits of cloud-native"),(0,i.kt)("li",{parentName:"ul"},"The five pillars of cloud-native "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Exercise"),": Take the ",(0,i.kt)("a",{parentName:"li",href:"https://aka.ms/CNNY/Challenge"},"Cloud Skills Challenge"),"!")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"1-what-is-cloud-native"},"1. What is cloud-native?"),(0,i.kt)("p",null,'The term "cloud-native" can seem pretty self-evident (yes, hello, native to the cloud?), and in a way, it is.\nWhile there are lots of definitions of cloud-native floating around, at it\'s core, cloud-native simply refers to a modern approach to building software that takes advantage of cloud services and environments. This includes using cloud-native technologies, such as containers, microservices, and serverless, and following best practices for deploying, scaling, and managing applications in a cloud environment.'),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Official definition")," from the ",(0,i.kt)("a",{parentName:"mdxAdmonitionTitle",href:"https://www.cncf.io/"},"Cloud Native Computing Foundation"),":"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("em",{parentName:"p"},"Cloud-native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach.")),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("em",{parentName:"p"},"These techniques enable loosely coupled systems that are resilient, manageable, and observable. Combined with robust automation, they allow engineers to make high-impact changes frequently and predictably with minimal toil.")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cncf/foundation/blob/main/charter.md"},"Source"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"2-so-what-exactly-is-a-cloud-native-application"},"2. So, what exactly is a cloud-native application?"),(0,i.kt)("p",null," Cloud-native applications are ",(0,i.kt)("em",{parentName:"p"},"specifically"),' designed to take advantage of the scalability, resiliency, and distributed nature of modern cloud infrastructure.  But how does this differ from a "traditional" application?'),(0,i.kt)("p",null,"Traditional applications are generally been built, tested, and deployed as a single, monolithic unit.  The monolithic nature of this type of architecture creates close dependencies between components.  This complexity and interweaving only increases as an application grows and can make it difficult to evolve (not to mention troubleshoot) and challenging to operate over time. "),(0,i.kt)("p",null,"To contrast, in cloud-native architectures the application components are decomposed into loosely coupled services, rather than built and deployed as one block of code. This decomposition into multiple self-contained services enables teams to manage complexity and improve the speed, agility, and scale of software delivery. Many small parts enables teams to make targeted updates, deliver new features, and fix any issues without leading to broader service disruption. "),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"3-the-benefits-of-cloud-native"},"3. The benefits of cloud-native"),(0,i.kt)("p",null,"Cloud-native architectures can bring many benefits to an organization, including: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Scalability:")," easily scale up or down based on demand, allowing organizations to adjust their resource usage and costs as needed."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Flexibility:")," deploy and run on any cloud platform, and easily move between clouds and on-premises environments."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"High-availability:")," techniques such as redundancy, self-healing, and automatic failover help ensure that cloud-native applications are designed to be highly-available and fault tolerant."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Reduced costs:")," take advantage of the pay-as-you-go model of cloud computing, reducing the need for expensive infrastructure investments."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Improved security:")," tap in to cloud security features, such as encryption and identity management, to improve the security of the application."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Increased agility:")," easily add new features or services to your applications to meet changing business needs and market demand.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"4-the-pillars-of-cloud-native"},"4. The pillars of cloud-native"),(0,i.kt)("p",null,"There are five areas that are generally cited as the core building blocks of cloud-native architecture: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/devops/deliver/what-are-microservices"},"Microservices"),": Breaking down monolithic applications into smaller, independent, and loosely-coupled services that can be developed, deployed, and scaled independently."),(0,i.kt)("li",{parentName:"ol"},"Containers: Packaging software in lightweight, portable, and self-sufficient containers that can run consistently across different environments."),(0,i.kt)("li",{parentName:"ol"},"Automation: Using automation tools and DevOps processes to manage and operate the cloud-native infrastructure and applications, including deployment, scaling, monitoring, and self-healing."),(0,i.kt)("li",{parentName:"ol"},"Service discovery: Using service discovery mechanisms, such as APIs & service meshes, to enable services to discover and communicate with each other."),(0,i.kt)("li",{parentName:"ol"},"Observability: Collecting and analyzing data from the infrastructure and applications to understand and optimize the performance, behavior, and health of the system.")),(0,i.kt)("p",null,"These can (and should!) be used in combination to deliver cloud-native solutions that are highly scalable, flexible, and available. "),(0,i.kt)("admonition",{title:"WHAT'S NEXT",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Stay tuned, as we will be diving deeper into these topics in the coming weeks:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Jan 24"),": Containers 101"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Jan 25"),": Adopting Microservices with Kubernetes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Jan 26"),": Kubernetes 101"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Jan 27"),": Exploring your Cloud-native Options"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Register")," for the ",(0,i.kt)("a",{parentName:"li",href:"https://aka.ms/Challenge"},"Cloud Skills Challenge")," - 30 days to complete it!"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Resources"),": ",(0,i.kt)("a",{parentName:"li",href:"https://aka.ms/CNNY/collection"},"#30DaysOfCloudNative Collection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"eBook:")," ",(0,i.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/resources/cloud-native-infrastructure-with-microsoft-azure/"},"Cloud Native Infrastructure with Azure"))),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Don't forget to ",(0,i.kt)("a",{parentName:"p",href:"https://azure.github.io/Cloud-Native/cnny-2023/rss.xml?WT.mc_id=javascript-74010-ninarasi"},"subscribe")," to the blog to get daily posts delivered directly to your favorite feed reader!"),(0,i.kt)("hr",null))}u.isMDXComponent=!0},78576:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cnny-event-card-df287cbd24f042a3ac51e30b416f458d.png"}}]);