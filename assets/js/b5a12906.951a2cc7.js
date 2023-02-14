"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[81744],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},93267:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={slug:"serverless-containers",title:"4-1. Serverless Container Options",authors:["nitya"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["serverless","containers","decision-tree","aks","kubernetes","container-apps"],image:"https://azure.github.io/Cloud-Native/img/og/30-16.png",description:"Explore serverless container options for development - including managed options like AKS and ACA",tags:["cloud-native","30daysofcloudnative","zero-to-hero","ask-the-expert","azure-kubernetes-service"]},o=void 0,s={permalink:"/Cloud-Native/cnny-2023/serverless-containers",source:"@site/blog-cnny/2023-02-13/30days.md",title:"4-1. Serverless Container Options",description:"Explore serverless container options for development - including managed options like AKS and ACA",date:"2023-02-13T00:00:00.000Z",formattedDate:"February 13, 2023",tags:[{label:"cloud-native",permalink:"/Cloud-Native/cnny-2023/tags/cloud-native"},{label:"30daysofcloudnative",permalink:"/Cloud-Native/cnny-2023/tags/30-daysofcloudnative"},{label:"zero-to-hero",permalink:"/Cloud-Native/cnny-2023/tags/zero-to-hero"},{label:"ask-the-expert",permalink:"/Cloud-Native/cnny-2023/tags/ask-the-expert"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/cnny-2023/tags/azure-kubernetes-service"}],readingTime:6.82,hasTruncateMarker:!1,authors:[{name:"Nitya Narasimhan",title:"Senior Cloud Advocate, Illustrator",url:"https://github.com/nitya",imageURL:"https://github.com/nitya.png",key:"nitya"}],frontMatter:{slug:"serverless-containers",title:"4-1. Serverless Container Options",authors:["nitya"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["serverless","containers","decision-tree","aks","kubernetes","container-apps"],image:"https://azure.github.io/Cloud-Native/img/og/30-16.png",description:"Explore serverless container options for development - including managed options like AKS and ACA",tags:["cloud-native","30daysofcloudnative","zero-to-hero","ask-the-expert","azure-kubernetes-service"]},prevItem:{title:"4-2. Jumpstart your applications with Draft",permalink:"/Cloud-Native/cnny-2023/building-with-draft"},nextItem:{title:"3-5. Bringing Your Application to Kubernetes - CI/CD Secure Supply Chain",permalink:"/Cloud-Native/cnny-2023/bring-your-app-day-5"}},l={authorsImageUrls:[void 0]},p=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Azure Compute Landscape",id:"azure-compute-landscape",level:2},{value:"Azure Serverless Compute",id:"azure-serverless-compute",level:2},{value:"Azure Container Apps",id:"azure-container-apps",level:2},{value:"Other Container Options",id:"other-container-options",level:2},{value:"Exercise",id:"exercise",level:2},{value:"Resources",id:"resources",level:2}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/cnny-2023/serverless-containers"}),(0,n.kt)("meta",{name:"twitter:title",content:"Serverless Container Options For Azure"}),(0,n.kt)("meta",{name:"twitter:description",content:"Explore serverless container options for development - including managed options like AKS and ACA"}),(0,n.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/og/30-16.png"}),(0,n.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.kt)("meta",{name:"twitter:creator",content:"@nitya"}),(0,n.kt)("meta",{name:"twitter:site",content:"@nitya"}),(0,n.kt)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/cnny-2023/serverless-containers"})),(0,n.kt)("p",null,"Welcome to ",(0,n.kt)("inlineCode",{parentName:"p"},"Week 4")," of #CloudNativeNewYear!"),(0,n.kt)("p",null,"This week we'll ",(0,n.kt)("em",{parentName:"p"},"go further with Cloud-native")," by exploring advanced topics and best practices for the Cloud-native practitioner. We'll start with an exploration of ",(0,n.kt)("em",{parentName:"p"},"Serverless Container Options"),"  - ranging from managed services to Azure Kubernetes Service (AKS) and Azure Container Apps (ACA), to options that allow more granular control!"),(0,n.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Azure Compute Landscape"),(0,n.kt)("li",{parentName:"ul"},"Serverless Compute on Azure"),(0,n.kt)("li",{parentName:"ul"},"Comparing Container Options On Azure"),(0,n.kt)("li",{parentName:"ul"},"Other Considerations"),(0,n.kt)("li",{parentName:"ul"},"Exercise: Try this yourself!"),(0,n.kt)("li",{parentName:"ul"},"Resources: For self-study!")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(90878).Z,width:"1001",height:"420"})),(0,n.kt)("hr",null),(0,n.kt)("p",null,"We started this series with an introduction to core concepts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In ",(0,n.kt)("a",{parentName:"li",href:"/cnny-2023/containers-101"},"Containers 101"),", we learned ",(0,n.kt)("strong",{parentName:"li"},"why containerization matters"),". Think portability, isolation, scalability, resource-efficiency and cost-effectiveness. ",(0,n.kt)("em",{parentName:"li"},"But not all apps can be containerized.")),(0,n.kt)("li",{parentName:"ul"},"In ",(0,n.kt)("a",{parentName:"li",href:"/cnny-2023/Kubernetes-101"},"Kubernetes 101"),", we learned ",(0,n.kt)("strong",{parentName:"li"},"how orchestration works"),". Think systems to automate container deployment, scaling, and management. ",(0,n.kt)("em",{parentName:"li"},"But using Kubernetes directly can be complex"),"."),(0,n.kt)("li",{parentName:"ul"},"In ",(0,n.kt)("a",{parentName:"li",href:"/cnny-2023/explore-options"},"Exploring Cloud Native Options")," we asked the real questions: ",(0,n.kt)("strong",{parentName:"li"},"can we containerize - and should we?"),". The first depends on app characteristics, the second on your requirements.")),(0,n.kt)("p",null,"For example: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Can we containerize?")," The answer might be no if your app has system or OS dependencies, requires access to low-level hardware, or maintains complex state across sessions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Should we containerize?")," The answer might be yes if your app is microservices-based, is stateless by default, requires portability, or is a legaacy app that can benefit from container isolation.")),(0,n.kt)("p",null,"As with every technology adoption decision process, there are no clear yes/no answers - just ",(0,n.kt)("em",{parentName:"p"},"tradeoffs")," that you need to evaluate based on your ",(0,n.kt)("strong",{parentName:"p"},"architecture")," and ",(0,n.kt)("strong",{parentName:"p"},"application requirements"),". In today's post, we try to look at this from two main perspectives:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("em",{parentName:"li"},"Should you go serverless?")," Think: managed services that let you focus on app, not infra."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("em",{parentName:"li"},"What Azure Compute should I use?")," Think: best fit for my architecture & technology choices.")),(0,n.kt)("h2",{id:"azure-compute-landscape"},"Azure Compute Landscape"),(0,n.kt)("p",null,"Let's answer the second question first by exploring all ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/architecture/guide/technology-choices/compute-decision-tree?WT.mc_id=javascript-84290-ninarasi"},(0,n.kt)("strong",{parentName:"a"},"available compute options on Azure")),". The illustrated decision-flow below is my favorite ways to navigate the choices, with questions like:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Are you migrating an existing app or building a new one?"),(0,n.kt)("li",{parentName:"ul"},"Can you app be containerized?"),(0,n.kt)("li",{parentName:"ul"},"Does it use a specific technology (Spring Boot, Red Hat Openshift)?"),(0,n.kt)("li",{parentName:"ul"},"Do you need access to the Kubernetes API?"),(0,n.kt)("li",{parentName:"ul"},"What characterizes the workload? (event-driven, web app, microservices etc.)")),(0,n.kt)("p",null,"Read the docs to understand how your choices can be influenced by the ",(0,n.kt)("em",{parentName:"p"},"hosting model")," (IaaS, PaaS, FaaS), supported ",(0,n.kt)("em",{parentName:"p"},"features")," (Networking, DevOps, Scalability, Availability, Security), ",(0,n.kt)("em",{parentName:"p"},"architectural styles")," (Microservices, Event-driven, High-Performance Compute, Task Automation,Web-Queue Worker) etc. "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learn.microsoft.com/azure/architecture/guide/technology-choices/images/compute-choices.png",alt:"Compute Choices"})),(0,n.kt)("p",null,"Now that we know ",(0,n.kt)("em",{parentName:"p"},"all")," available compute options, let's address the second question: ",(0,n.kt)("em",{parentName:"p"},"why go serverless?")," and what are my serverless compute options on Azure?"),(0,n.kt)("h2",{id:"azure-serverless-compute"},"Azure Serverless Compute"),(0,n.kt)("p",null,"Serverless gets defined many ways, but from a compute perspective, we can focus on a few key characteristics that are key to influencing this decision:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"managed services")," - focus on application, let cloud provider handle infrastructure."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"pay for what you use")," - get cost-effective resource utilization, flexible pricing options."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"autoscaling on demand")," - take advantage of built-in features like KEDA-compliant triggers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"use preferred languages")," - write code in Java, JS, C#, Python etc. (specifics based on service)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"cloud-native architectures")," - can support event-driven solutions, APIs, Microservices, DevOps!")),(0,n.kt)("p",null,"So what are some of the key options for ",(0,n.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/solutions/serverless/#solutions?WT.mc_id=javascript-84290-ninarasi"},(0,n.kt)("strong",{parentName:"a"},"Serverless Compute on Azure")),"? The article dives into serverless support for ",(0,n.kt)("em",{parentName:"p"},"fully-managed end-to-end serverless solutions")," with comprehensive support for DevOps, DevTools, AI/ML, Database, Storage, Monitoring and Analytics integrations. But we'll just focus on the ",(0,n.kt)("strong",{parentName:"p"},"4 categories of applications")," when we look at Compute!"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Serverless Containerized Microservices")," ",(0,n.kt)("em",{parentName:"li"},"using ",(0,n.kt)("a",{parentName:"em",href:"https://azure.microsoft.com/en-us/services/container-apps/?WT.mc_id=javascript-84290-ninarasi"},"Azure Container Apps")),". Code in your preferred language, exploit full Dapr support, scale easily with any KEDA-compliant trigger."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Serverless Application Environments")," ",(0,n.kt)("em",{parentName:"li"},"using ",(0,n.kt)("a",{parentName:"em",href:"https://azure.microsoft.com/products/app-service/?WT.mc_id=javascript-84290-ninarasi"},"Azure App Service")),". Suitable for hosting monolithic apps (vs. microservices) in a managed service, with built-in support for on-demand scaling."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Serverless Kubernetes")," ",(0,n.kt)("em",{parentName:"li"},"using ",(0,n.kt)("a",{parentName:"em",href:"https://azure.microsoft.com/products/kubernetes-service/?WT.mc_id=javascript-84290-ninarasi"},"Azure Kubernetes Service (AKS)")),". Spin up pods inside container instances and deploy Kubernetes-based applications with built-in KEDA-compliant autoscaling."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Serverless Functions")," ",(0,n.kt)("em",{parentName:"li"},"using ",(0,n.kt)("a",{parentName:"em",href:"https://azure.microsoft.com/products/functions/?WT.mc_id=javascript-84290-ninarasi"},"Azure Functions")),'. Execute "code at the granularity of functions" in your preferred language, and scale on demand with event-driven compute.')),(0,n.kt)("p",null,"We'll talk about these, and other compute comparisons, at the end of the article. But let's start with the core option you might choose if you want a managed serverless compute solution with built-in features for delivering containerized microservices at scale. Hello, ",(0,n.kt)("strong",{parentName:"p"},"Azure Container Apps!"),"."),(0,n.kt)("h2",{id:"azure-container-apps"},"Azure Container Apps"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/container-apps/?WT.mc_id=javascript-84290-ninarasi"},"Azure Container Apps (ACA)")," became generally available in May 2022 - providing customers with the ability to run ",(0,n.kt)("strong",{parentName:"p"},"microservices and containerized applications on a serverless, consumption-based platform"),". The figure below showcases the different types of applications that can be built with ACA. Note that it comes with built-in KEDA-compliant autoscaling triggers, and other auto-scale criteria that may be better-suited to the type of application you are building."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://techcommunity.microsoft.com/t5/image/serverpage/image-id/401522iACA9C8FFC49FE161/image-size/large?v=v2&px=999",alt:"About ACA"})),(0,n.kt)("p",null,"So far in the series, we've put the spotlight on Azure Kubernetes Service (AKS) - so you're probably asking yourself: ",(0,n.kt)("em",{parentName:"p"},"How does ACA compare to AKS?"),". We're glad you asked. Check out our ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://azure.github.io/Cloud-Native/blog/zero2hero-aca-01"},"Go Cloud-native with Azure Container Apps"))," post from the #ServerlessSeptember series last year for a deeper-dive, or review the figure below for the main comparison points. "),(0,n.kt)("p",null,"The key takeaway is this. Azure Container Apps (ACA) ",(0,n.kt)("strong",{parentName:"p"},"also runs on Kubernetes")," but abstracts away its complexity in a ",(0,n.kt)("em",{parentName:"p"},"managed service offering")," that lets you get productive quickly without requiring detailed knowledge of Kubernetes workings or APIs. However, if you ",(0,n.kt)("strong",{parentName:"p"},"want full access and control over the Kubernetes API")," then go with Azure Kubernetes Service (AKS) instead."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://techcommunity.microsoft.com/t5/image/serverpage/image-id/401287i073CFBD50CB3A0B9/image-size/large?v=v2&px=999&WT.mc_id=javascript-74010-cxa",alt:"Comparison"})),(0,n.kt)("h2",{id:"other-container-options"},"Other Container Options"),(0,n.kt)("p",null,"Azure Container Apps is the preferred ",(0,n.kt)("strong",{parentName:"p"},"Platform As a Service (PaaS)")," option for a fully-managed serverless solution on Azure that is purpose-built for cloud-native microservices-based application workloads. But - there are other options that may be suitable for your specific needs, from a requirements and tradeoffs perspective. Let's review them quickly:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://learn.microsoft.com/azure/azure-functions/functions-overview?WT.mc_id=javascript-84290-ninarasi"},"Azure Functions"))," is the serverless ",(0,n.kt)("em",{parentName:"li"},"Functions-as-a-Service")," (FaaS) option, as opposed to ACA which supports a PaaS approach. It's optimized for running event-driven applications built at the granularity of ",(0,n.kt)("em",{parentName:"li"},"ephemeral functions")," that can be deployed as code or containers."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://learn.microsoft.com/azure/app-service/?WT.mc_id=javascript-84290-ninarasi"},"Azure App Service"))," provides fully managed hosting for web applications that may be deployed using code or containers. It can be integrated with other services including Azure Container Apps and Azure Functions. It's optimized for deploying traditional web apps."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://learn.microsoft.com/azure/aks/intro-kubernetes?WT.mc_id=javascript-84290-ninarasi"},"Azure Kubernetes Service"))," provides a fully managed Kubernetes option capable of running any Kubernetes workload, with  direct access to the Kubernetes API."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://learn.microsoft.com/azure/container-instances/?WT.mc_id=javascript-84290-ninarasi"},"Azure Container Instances"))," provides a ",(0,n.kt)("em",{parentName:"li"},"single pod"),' of Hyper-V isolated containers on demand, making them more of a low-level "building block" option compared to ACA.')),(0,n.kt)("p",null,"Based on the ",(0,n.kt)("strong",{parentName:"p"},"technology choices you made for application development")," you may also have more specialized options you want to consider. For instance:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://learn.microsoft.com/azure/spring-apps/overview?WT.mc_id=javascript-84290-ninarasi"},"Azure Spring Apps"))," is ideal if you're running Spring Boot or Spring Cloud workloads on Azure,"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://learn.microsoft.com/azure/openshift/intro-openshift?WT.mc_id=javascript-84290-ninarasi"},"Azure Red Hat OpenShift"))," is ideal for integrated Kubernetes-powered OpenShift on Azure."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://learn.microsoft.com/azure/confidential-computing/choose-confidential-containers-offerings"},"Azure Confidential Computing"))," is ideal if you have data/code integrity and confidentiality needs."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://learn.microsoft.com/azure/architecture/operator-guides/aks/choose-kubernetes-edge-compute-option"},"Kubernetes At The Edge"))," is ideal for bare-metal options that extend compute to edge devices.")),(0,n.kt)("p",null,"This is just the tip of the iceberg in your decision-making journey - but hopefully, it gave you a good sense of the options and criteria that influences your final choices. Let's wrap this up with a look at self-study resources for skilling up further."),(0,n.kt)("h2",{id:"exercise"},"Exercise"),(0,n.kt)("p",null,"Want to get hands on learning related to these technologies?"),(0,n.kt)("admonition",{title:"TAKE THE CLOUD SKILLS CHALLENGE",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/training/challenges?id=a0e385b9-f970-4182-b2e2-3b4619b6c356&WT.mc_id=javascript-84290-ninarasi"},"Register today")," and level up your skills by completing free learning modules, while competing with your peers for a place on the leaderboards!")),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/architecture/guide/technology-choices/compute-decision-tree?WT.mc_id=javascript-84290-ninarasi"},"Choose an Azure compute service")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/solutions/serverless/#solutions?WT.mc_id=javascript-84290-ninarasi"},"Serverless On Azure")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://azure.github.io/Cloud-Native/blog/zero2hero-aca-01?WT.mc_id=javascript-84290-ninarasi"},"Go Cloud-native with Azure Container Apps")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/container-apps/compare-options?WT.mc_id=javascript-84290-ninarasi"},"Comparing Container Apps with other Azure container options"))))}u.isMDXComponent=!0},90878:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/30-16-a5828b89fd19d381a38742d0d80ea2d1.png"}}]);