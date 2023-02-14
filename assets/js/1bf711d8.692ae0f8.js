"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1178],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||n;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},18981:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=a(87462),o=(a(67294),a(3905));const n={slug:"building-with-draft",title:"4-2. Jumpstart your applications with Draft",authors:["cory"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["cloud-native","containers","decision-tree","kubernetes","serverless","microservices"],image:"https://azure.github.io/Cloud-Native/assets/ideal-img/hero-banner.e0a8d29.1030.png",description:"There are many cloud-native technologies - but which are the best fit for your projects?",tags:["cloud-native","30daysofcloudnative","zero-to-hero","ask-the-expert","azure-kubernetes-service"]},i=void 0,l={permalink:"/Cloud-Native/cnny-2023/building-with-draft",source:"@site/blog-cnny/2023-02-14/building-with-draft.md",title:"4-2. Jumpstart your applications with Draft",description:"There are many cloud-native technologies - but which are the best fit for your projects?",date:"2023-02-14T00:00:00.000Z",formattedDate:"February 14, 2023",tags:[{label:"cloud-native",permalink:"/Cloud-Native/cnny-2023/tags/cloud-native"},{label:"30daysofcloudnative",permalink:"/Cloud-Native/cnny-2023/tags/30-daysofcloudnative"},{label:"zero-to-hero",permalink:"/Cloud-Native/cnny-2023/tags/zero-to-hero"},{label:"ask-the-expert",permalink:"/Cloud-Native/cnny-2023/tags/ask-the-expert"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/cnny-2023/tags/azure-kubernetes-service"}],readingTime:2.775,hasTruncateMarker:!1,authors:[{name:"Cory Skimming",title:"Sr. Product Marketing Manager",url:"https://twitter.com/cskimming",imageURL:"https://pbs.twimg.com/profile_images/1493684068227055617/iC9r8v6Z_400x400.jpg",key:"cory"}],frontMatter:{slug:"building-with-draft",title:"4-2. Jumpstart your applications with Draft",authors:["cory"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["cloud-native","containers","decision-tree","kubernetes","serverless","microservices"],image:"https://azure.github.io/Cloud-Native/assets/ideal-img/hero-banner.e0a8d29.1030.png",description:"There are many cloud-native technologies - but which are the best fit for your projects?",tags:["cloud-native","30daysofcloudnative","zero-to-hero","ask-the-expert","azure-kubernetes-service"]},nextItem:{title:"4-1. Serverless Container Options",permalink:"/Cloud-Native/cnny-2023/serverless-containers"}},s={authorsImageUrls:[void 0]},c=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"What is Draft?",id:"what-is-draft",level:2},{value:"Draft basics",id:"draft-basics",level:2},{value:'<iframe width="560" height="315" src="https://www.youtube.com/watch?v=XDm2dqxGcvo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',id:"iframe-width560-height315-srchttpswwwyoutubecomwatchvxdm2dqxgcvo-titleyoutube-video-player-frameborder0-allowaccelerometer-autoplay-clipboard-write-encrypted-media-gyroscope-picture-in-picture-web-share-allowfullscreeniframe",level:2},{value:"Resources",id:"resources",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/cnny-2023/building-with-draft"}),(0,o.kt)("meta",{name:"twitter:title",content:"Serverless Container Options"}),(0,o.kt)("meta",{name:"twitter:description",content:"Explore technology and tooling options for building and deploying your Cloud-native solution"}),(0,o.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/og/30-05.png"}),(0,o.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.kt)("meta",{name:"twitter:creator",content:"@cksimming"}),(0,o.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,o.kt)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/cnny-2023/building-with-draft"})),(0,o.kt)("p",null,"It's the final week of #CloudNativeNewYear! This week we'll go further with Cloud-native by exploring advanced topics and best practices for the Cloud-native practitioner. In today's post, we will introduce you to the basics of the open-source project Draft and how it can be used to easily create and deploy applications to Kubernetes. "),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"It's not too late to sign up for and complete the ",(0,o.kt)("a",{parentName:"mdxAdmonitionTitle",href:"https://aka.ms/CNNY/Challenge"},"Cloud Skills Challenge"),"!")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What is Draft? "),(0,o.kt)("li",{parentName:"ul"},"Draft basics"),(0,o.kt)("li",{parentName:"ul"},"Demo: Developing to AKS with Draft"),(0,o.kt)("li",{parentName:"ul"},"Resources")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(25704).Z,width:"3840",height:"654"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"what-is-draft"},"What is Draft?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/azure/draft"},"Draft")," is an open-source tool that can be used to streamline the development and deployment of applications on Kubernetes clusters. It provides a simple and easy-to-use workflow for creating and deploying applications, making it easier for developers to focus on writing code and building features, rather than worrying about the underlying infrastructure. This is great for users who are just getting started with Kubernetes, or those who are just looking to simplify their experience."),(0,o.kt)("admonition",{title:"New to Kubernetes?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Catch ",(0,o.kt)("a",{parentName:"p",href:"https://info.microsoft.com/ww-ondemand-a-quickstart-guide-to-kubernetes-concepts.html?lcid=en-us"},"A Quickstart Guide to Kubernetes Concepts")," on demand, now!")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"draft-basics"},"Draft basics"),(0,o.kt)("p",null,"Draft streamlines Kubernetes development by taking a non-containerized application and generating the Dockerfiles, K8s manifests, Helm charts, and other artifacts associated with a containerized application. Draft can also create a GitHub Action workflow file to quickly build and deploy your application onto any Kubernetes cluster."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"'draft create'':")," Create a new Draft project by simply running the 'draft create' command - this command will walk you through a series of questions on your application specification (such as the application language) and create a Dockerfile, Helm char, and Kubernetes "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"'draft generate-workflow'':")," Automatically build out a GitHub Action using the 'draft generate-workflow' command"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"'draft setup-gh'':")," If you are using Azure, use this command to automate the GitHub OIDC set up process to ensure that you will be able to deploy your application using your GitHub Action. ")),(0,o.kt)("p",null,"At this point, you will have all the files needed to deploy your app onto a Kubernetes cluster (we told you it was easy!)."),(0,o.kt)("p",null,"You can also use the ",(0,o.kt)("strong",{parentName:"p"},"'draft info'")," command if you are looking for information on supported languages and deployment types. Let's see it in action, shall we? "),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"developing-to-aks-with-draft"},"Developing to AKS with Draft"),(0,o.kt)("p",null,"In this Microsoft Reactor session below, we'll briefly introduce Kubernetes and the Azure Kubernetes Service (AKS) and then demo how enable your applications for Kubernetes using the open-source tool Draft. We'll show how Draft can help you create the boilerplate code to containerize your applications and add routing and scaling behaviours. "),(0,o.kt)("h2",{id:"iframe-width560-height315-srchttpswwwyoutubecomwatchvxdm2dqxgcvo-titleyoutube-video-player-frameborder0-allowaccelerometer-autoplay-clipboard-write-encrypted-media-gyroscope-picture-in-picture-web-share-allowfullscreeniframe"},(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/watch?v=XDm2dqxGcvo",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})),(0,o.kt)("p",null,"#Conclusion"),(0,o.kt)("p",null,"Overall, Draft simplifies the process of building, deploying, and managing applications on Kubernetes, and can make the overall journey from ",(0,o.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/code-to-cloud-with-azure-kubernetes-service-aks/ba-p/3669916_"},"code to Kubernetes")," significantly easier. "),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"LAST WEEK")," for the ",(0,o.kt)("a",{parentName:"li",href:"https://aka.ms/Challenge"},"Cloud Skills Challenge")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Learning Resources"),": ",(0,o.kt)("a",{parentName:"li",href:"https://aka.ms/CNNY/collection"},"#30DaysOfCloudNative Collection")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Podcast:")," ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=3RIulCcDet0"},"Containerize apps to AKS wwith Draft")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Project:")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/azure/draft"},"Get started with Draft"))),(0,o.kt)("hr",null))}p.isMDXComponent=!0},25704:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hero-banner-991129dffd470b38678db8972274c09a.png"}}]);