"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[37582],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),h=n,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return a?r.createElement(m,s(s({ref:t},u),{},{components:a})):r.createElement(m,s({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},25625:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={slug:"08-functions-azure",title:"08. Functions + Serverless On Azure",authors:["nitya","devanshi"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/banner.png",description:"Introduction to Azure Functions, from core concepts to hello world!",tags:["serverless-september","30-days-of-serverless","serverless-hacks","zero-to-hero","ask-the-expert","azure-functions","azure-container-apps","azure-event-grid","azure-logic-apps","serverless-e2e"]},s=void 0,i={permalink:"/Cloud-Native/blog/08-functions-azure",source:"@site/blog/2022-09-08/index.md",title:"08. Functions + Serverless On Azure",description:"Introduction to Azure Functions, from core concepts to hello world!",date:"2022-09-08T00:00:00.000Z",formattedDate:"September 8, 2022",tags:[{label:"serverless-september",permalink:"/Cloud-Native/blog/tags/serverless-september"},{label:"30-days-of-serverless",permalink:"/Cloud-Native/blog/tags/30-days-of-serverless"},{label:"serverless-hacks",permalink:"/Cloud-Native/blog/tags/serverless-hacks"},{label:"zero-to-hero",permalink:"/Cloud-Native/blog/tags/zero-to-hero"},{label:"ask-the-expert",permalink:"/Cloud-Native/blog/tags/ask-the-expert"},{label:"azure-functions",permalink:"/Cloud-Native/blog/tags/azure-functions"},{label:"azure-container-apps",permalink:"/Cloud-Native/blog/tags/azure-container-apps"},{label:"azure-event-grid",permalink:"/Cloud-Native/blog/tags/azure-event-grid"},{label:"azure-logic-apps",permalink:"/Cloud-Native/blog/tags/azure-logic-apps"},{label:"serverless-e2e",permalink:"/Cloud-Native/blog/tags/serverless-e-2-e"}],readingTime:4.935,hasTruncateMarker:!1,authors:[{name:"Nitya Narasimhan",title:"Senior Cloud Advocate, Illustrator",url:"https://github.com/nitya",imageURL:"https://github.com/nitya.png",key:"nitya"},{name:"Devanshi Joshi",title:"Product Marketing Manager",url:"https://github.com/devanshidiaries",imageURL:"https://github.com/devanshidiaries.png",key:"devanshi"}],frontMatter:{slug:"08-functions-azure",title:"08. Functions + Serverless On Azure",authors:["nitya","devanshi"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/banner.png",description:"Introduction to Azure Functions, from core concepts to hello world!",tags:["serverless-september","30-days-of-serverless","serverless-hacks","zero-to-hero","ask-the-expert","azure-functions","azure-container-apps","azure-event-grid","azure-logic-apps","serverless-e2e"]},prevItem:{title:"09. Hello, Azure Container Apps",permalink:"/Cloud-Native/blog/09-aca-fundamentals"},nextItem:{title:"07. Functions for Python Devs",permalink:"/Cloud-Native/blog/07-functions-python"}},l={image:a(55742).Z,authorsImageUrls:[void 0,void 0]},c=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Week 1 Recap: #30Days &amp; Functions",id:"week-1-recap-30days--functions",level:2},{value:"Advanced Functions: Code Samples",id:"advanced-functions-code-samples",level:2},{value:"E2E Scenarios: Hacks &amp; Cloud Skills",id:"e2e-scenarios-hacks--cloud-skills",level:2},{value:"What&#39;s Next? Hello, Cloud-Native!",id:"whats-next-hello-cloud-native",level:2},{value:"Take The Challenge",id:"take-the-challenge",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/blog/functions-1"}),(0,n.kt)("meta",{name:"twitter:title",content:"#30DaysOfServerless: Azure Functions Fundamentals"}),(0,n.kt)("meta",{name:"twitter:description",content:"#30DaysOfServerless: Azure Functions Fundamentals"}),(0,n.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/banners/post-kickoff.png"}),(0,n.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.kt)("meta",{name:"twitter:creator",content:"@nitya"}),(0,n.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,n.kt)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/blog/08-functions-azure"})),(0,n.kt)("hr",null),(0,n.kt)("admonition",{title:"SEP 08: CHANGE IN PUBLISHING SCHEDULE",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Starting from Week 2 (Sep 8), we'll be publishing blog posts in ",(0,n.kt)("em",{parentName:"p"},"batches")," rather than on a daily basis, so you can read a series of related posts together. ",(0,n.kt)("em",{parentName:"p"},"Don't want to miss updates?")," Just ",(0,n.kt)("a",{parentName:"p",href:"https://azure.github.io/Cloud-Native/blog/rss.xml"},"subscribe to the feed"))),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Welcome to ",(0,n.kt)("inlineCode",{parentName:"p"},"Day 8")," of #30DaysOfServerless!"),(0,n.kt)("p",null,"This marks the end of our ",(0,n.kt)("a",{parentName:"p",href:"https://azure.github.io/Cloud-Native/serverless-september/30DaysOfServerless/#azure-functions"},"Week 1 Roadmap")," focused on Azure Functions!! Today, we'll do a quick recap of all #ServerlessSeptember activities in Week 1, set the stage for Week 2 - and leave you with some excellent tutorials you should explore to build more advanced scenarios with Azure Functions."),(0,n.kt)("p",null,"Ready? Let's go."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Azure Functions: Week 1 Recap"),(0,n.kt)("li",{parentName:"ul"},"Advanced Functions: Explore Samples"),(0,n.kt)("li",{parentName:"ul"},"End-to-End: Serverless Hacks & Cloud Skills"),(0,n.kt)("li",{parentName:"ul"},"What's Next: Hello, Containers & Microservices"),(0,n.kt)("li",{parentName:"ul"},"Challenge: ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/training/paths/create-serverless-applications/?WT.mc_id=javascript-99907-cxa"},"Complete the Learning Path"))),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(55742).Z,width:"1600",height:"672"})),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"week-1-recap-30days--functions"},"Week 1 Recap: #30Days & Functions"),(0,n.kt)("p",null,"Congratulations!! We made it to the end of Week 1 of #ServerlessSeptember. Let's recap what we learned so far:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In ",(0,n.kt)("a",{parentName:"li",href:"/blog/02-functions-intro"},"Core Concepts")," we looked at where Azure Functions fits into the serverless options available on Azure. And we learned about key concepts like Triggers, Bindings, Custom Handlers and Durable Functions."),(0,n.kt)("li",{parentName:"ul"},"In ",(0,n.kt)("a",{parentName:"li",href:"/blog/03-functions-quickstart"},"Build Your First Function")," we looked at the tooling options for creating Functions apps, testing them locally, and deploying them to Azure - as we built and deployed our first Functions app."),(0,n.kt)("li",{parentName:"ul"},"In the next 4 posts, we explored new Triggers, Integrations, and Scenarios - as we looked at building Functions Apps in Java, JavaScript, .NET and Python."),(0,n.kt)("li",{parentName:"ul"},"And in the Zero-To-Hero series, we learned about ",(0,n.kt)("a",{parentName:"li",href:"/blog/zero2hero-func-02"},"Durable Entities")," - and how we can use them to create ",(0,n.kt)("em",{parentName:"li"},"stateful")," serverless solutions using a ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Azure/azure-functions-durable-extension/tree/dev/samples/entitites-csharp/Chirper"},"Chirper Sample")," as an example scenario.")),(0,n.kt)("p",null,"The illustrated roadmap below summarizes what we covered each day this week, as we bring our ",(0,n.kt)("strong",{parentName:"p"},"Functions-as-a-Service")," exploration to a close."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(73239).Z,width:"1920",height:"1080"})),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"advanced-functions-code-samples"},"Advanced Functions: Code Samples"),(0,n.kt)("p",null,"So, now that we've got our first Functions app under our belt, and validated our local development setup for tooling, where can we go next? A good next step is to explore different triggers and bindings, that drive richer end-to-end scenarios. For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/azure-functions/functions-twitter-email?WT.mc_id=javascript-99907-cxa"},(0,n.kt)("strong",{parentName:"a"},"Integrate Functions with Azure Logic Apps"))," - we'll discuss Azure Logic Apps in Week 3. For now, think of it as a ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/logic-apps/logic-apps-overview?WT.mc_id=javascript-99907-cxa"},"workflow automation")," tool that lets you integrate seamlessly with other supported Azure services to drive an end-to-end scenario. In this tutorial, we set up a workflow connecting Twitter (get tweet) to Azure Cognitive Services (analyze sentiment) - and use that to trigger an Azure Functions app to send email about the result."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/event-grid/resize-images-on-storage-blob-upload-event?tabs=nodejsv10&WT.mc_id=javascript-99907-cxa"},(0,n.kt)("strong",{parentName:"a"},"Integrate Functions with Event Grid"))," - we'll discuss Azure Event Grid in Week 3. For now, think of it as an eventing service connecting event sources (publishers) to event handlers (subscribers) at cloud scale. In this tutorial, we handle a common use case - a workflow where loading an image to Blob Storage triggers an Azure Functions app that implements a ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Azure-Samples/storage-blob-resize-function-node"},"resize function"),", helping automatically generate thumbnails for the uploaded image."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/training/modules/automatic-update-of-a-webapp-using-azure-functions-and-signalr/?WT.mc_id=javascript-99907-cxa"},(0,n.kt)("strong",{parentName:"a"},"Integrate Functions with CosmosDB and SignalR"))," to bring real-time push-based notifications to your web app. It achieves this by using a Functions app that is triggered by changes in a CosmosDB backend, causing it to broadcast that update (",(0,n.kt)("em",{parentName:"li"},"push notification")," to connected web clients over SignalR, in real time.")),(0,n.kt)("p",null,"Want more ideas? Check out the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/samples/browse/?products=azure-functions&WT.mc_id=javascript-99907-cxa"},"Azure Samples for Functions")," for implementations, and browse the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/architecture/browse/?expanded=azure&products=azure-functions&WT.mc_id=javascript-99907-cxa"},"Azure Architecture Center")," for reference architectures from real-world scenarios that involve Azure Functions usage."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"e2e-scenarios-hacks--cloud-skills"},"E2E Scenarios: Hacks & Cloud Skills"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Want to systematically work your way through a single End-to-End scenario involving Azure Functions alongside other serverless support technologies?")," Check out the ",(0,n.kt)("a",{parentName:"p",href:"/serverless-september/ServerlessHacks"},"Serverless Hacks")," activity happening during #ServerlessSeptember, and learn to build this ",(0,n.kt)("strong",{parentName:"p"},'"Serverless Tollbooth Application"')," in a series of 10 challenges. Check out the ",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/serverless-september/videos"},"video series for a reference solution in .NET")," and sign up for weekly office hours to join peers and discuss your solutions or challenges."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(89292).Z,width:"1908",height:"994"})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Or perhaps you prefer to learn core concepts with code in a structured learning path?")," We have that covered. Check out the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/training/paths/create-serverless-applications/?WT.mc_id=javascript-99907-cxa"},"12-module")," ",(0,n.kt)("strong",{parentName:"p"},'"Create Serverless Applications"')," course from Microsoft Learn which walks your through concepts, one at a time, with code. Even better - ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/learn/challenges?id=b950cd7a-d456-46ab-81ba-3bd1ad86dc1c&WT.mc_id=javascript-99907-ninarasi"},"sign up for the free Cloud Skills Challenge")," and ",(0,n.kt)("em",{parentName:"p"},"complete the same path")," (in under 30 days) but this time, with the added fun of competing against your peers for a spot on a leaderboard, and swag."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"whats-next-hello-cloud-native"},"What's Next? Hello, Cloud-Native!"),(0,n.kt)("p",null,"So where to next? In Week 2 we turn our attention from ",(0,n.kt)("em",{parentName:"p"},"Functions-as-a-Service")," to building more complex backends using ",(0,n.kt)("em",{parentName:"p"},"Containers and Microservices"),". We'll focus on two core technologies - ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/container-apps/?WT.mc_id=javascript-99907-ninarasi"},"Azure Container Apps")," and ",(0,n.kt)("a",{parentName:"p",href:"https://docs.dapr.io/?WT.mc_id=javascript-99907-ninarasi"},"Dapr")," (Distributed Application Runtime) - both key components of a broader vision around ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://azure.microsoft.com/solutions/cloud-native-apps/?WT.mc_id=javascript-99907-ninarasi"},"Building Cloud-Native Applications in Azure")),"."),(0,n.kt)("p",null,"What is Cloud-Native you ask? "),(0,n.kt)("p",null,"Fortunately for you, we have an excellent introduction in our Zero-to-Hero article on ",(0,n.kt)("a",{parentName:"p",href:"/blog/zero2hero-aca-01"},"Go Cloud-Native with Azure Container Apps")," - that explains the ",(0,n.kt)("strong",{parentName:"p"},"5 pillars of Cloud-Native")," and highlights the value of Azure Container Apps (scenarios) and Dapr (sidecar architecture) for simplified microservices-based solution with auto-scale capability. Prefer a visual summary? Here's an illustrate guide to that article for convenience."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Go Cloud-Native",src:a(29426).Z,width:"1024",height:"1024"})," ",(0,n.kt)("a",{target:"_blank",href:a(75349).Z},(0,n.kt)("strong",null,"Download a higher resolution version of the image"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"take-the-challenge"},(0,n.kt)("a",{parentName:"h2",href:"https://docs.microsoft.com/learn/challenges?id=b950cd7a-d456-46ab-81ba-3bd1ad86dc1c&WT.mc_id=javascript-99907-ninarasi"},"Take The Challenge")),(0,n.kt)("p",null,"We typically end each post with an exercise or activity to reinforce what you learned. For Week 1, we encourage you to take the Cloud Skills Challenge and work your way through at least a subset of the modules, for hands-on experience with the different Azure Functions concepts, integrations, and usage."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"See you in Week 2!")))}p.isMDXComponent=!0},75349:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/files/Go-Cloud-Native-orig-02eae8571b232d447aef410a525763f7.png"},55742:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/banner-90895ff214888259c44f6d70b6646e1c.png"},29426:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Go-Cloud-Native-f6ac3225c3d9741a1fbff81030f7f830.png"},73239:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/roadmap-Week1-e6f2178c0374c42ef50be53bee433ad9.png"},89292:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/wth-serverless-78cb1c6f4c8f3b2997e9a8a9aee4de1b.png"}}]);