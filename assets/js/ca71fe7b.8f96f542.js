"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7192],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(4137));const r={slug:"zero2hero-aca-04",title:"\ud83d\ude80 | Journey to the Cloud With ACA",authors:["anthony"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","containerapps","serverless","concepts"],image:"./img/banner.png",description:"In this article, we discuss how Azure Container Apps is purpose-built to support cloud native applications.",tags:["serverless-september","zero-to-hero","azure-functions","azure-container-apps","dapr"]},i=void 0,s={permalink:"/Cloud-Native/blog/zero2hero-aca-04",source:"@site/blog/zero-to-hero/2022-09-12-containerapps.md",title:"\ud83d\ude80 | Journey to the Cloud With ACA",description:"In this article, we discuss how Azure Container Apps is purpose-built to support cloud native applications.",date:"2022-09-12T00:00:00.000Z",formattedDate:"September 12, 2022",tags:[{label:"serverless-september",permalink:"/Cloud-Native/blog/tags/serverless-september"},{label:"zero-to-hero",permalink:"/Cloud-Native/blog/tags/zero-to-hero"},{label:"azure-functions",permalink:"/Cloud-Native/blog/tags/azure-functions"},{label:"azure-container-apps",permalink:"/Cloud-Native/blog/tags/azure-container-apps"},{label:"dapr",permalink:"/Cloud-Native/blog/tags/dapr"}],readingTime:4.92,hasTruncateMarker:!1,authors:[{name:"Anthony Chu",title:"Principal Product Manager @Microsoft",url:"https://github.com/anthonychu",imageURL:"https://github.com/anthonychu.png",key:"anthony"}],frontMatter:{slug:"zero2hero-aca-04",title:"\ud83d\ude80 | Journey to the Cloud With ACA",authors:["anthony"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","containerapps","serverless","concepts"],image:"./img/banner.png",description:"In this article, we discuss how Azure Container Apps is purpose-built to support cloud native applications.",tags:["serverless-september","zero-to-hero","azure-functions","azure-container-apps","dapr"]},prevItem:{title:"09. Hello, Azure Container Apps",permalink:"/Cloud-Native/blog/09-aca-fundamentals"},nextItem:{title:"\ud83d\ude80 | Use Custom Handlers For Go",permalink:"/Cloud-Native/blog/zero2hero-func-03"}},p={image:n(7360).Z,authorsImageUrls:[void 0]},l=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Visual Studio",id:"visual-studio",level:2},{value:"Visual Studio Code",id:"visual-studio-code",level:2},{value:"Docker extension",id:"docker-extension",level:3},{value:"Azure Container Apps extension",id:"azure-container-apps-extension",level:3},{value:"Azure CLI",id:"azure-cli",level:2},{value:"CI/CD pipelines",id:"cicd-pipelines",level:2}],u={toc:l};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/blog/zero2hero-aca-01"}),(0,o.kt)("meta",{name:"twitter:title",content:"#ZeroToHero: Go Cloud Native With Azure Container Apps"}),(0,o.kt)("meta",{name:"twitter:description",content:"#ZeroToHero: Go Cloud Native With Azure Container Apps"}),(0,o.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/banners/serverless-zero2hero.png"}),(0,o.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.kt)("meta",{name:"twitter:creator",content:"@nitya"}),(0,o.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,o.kt)("link",{rel:"canonical",href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/go-cloud-native-with-azure-container-apps/ba-p/3616407"})),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Welcome to ",(0,o.kt)("inlineCode",{parentName:"p"},"Day 12")," of #30DaysOfServerless!"),(0,o.kt)("p",null,"Today, we have a special set of posts from our ",(0,o.kt)("a",{parentName:"p",href:"/serverless-september/ZeroToHero"},"Zero To Hero \ud83d\ude80")," initiative, featuring blog posts authored by our Product Engineering teams for #ServerlessSeptember. ",(0,o.kt)("em",{parentName:"p"},"Posts were originally published on the ",(0,o.kt)("a",{parentName:"em",href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/journey-to-the-cloud-with-azure-container-apps/ba-p/3622609?WT.mc_id=javascript-74010-cxa"},"Apps on Azure")," blog on Microsoft Tech Community.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using Visual Studio"),(0,o.kt)("li",{parentName:"ul"},"Using Visual Studio Code: Docker, ACA extensions"),(0,o.kt)("li",{parentName:"ul"},"Using Azure CLI"),(0,o.kt)("li",{parentName:"ul"},"Using CI/CD Pipelines")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5515).Z,width:"1600",height:"672"})),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Last week, ",(0,o.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/user/viewprofilepage/user-id/296868?WT.mc_id=javascript-74010-cxa"},"@kendallroden")," wrote about ",(0,o.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/go-cloud-native-with-azure-container-apps/ba-p/3616407"},"what it means to be cloud native")," and how Azure Container Apps provides a serverless containers platform for hosting all of your cloud native applications. Today, we\u2019ll walk through a few ways to get your apps up and running on Azure Container Apps."),(0,o.kt)("p",null,"Depending on where you are in your cloud native app development journey, you might choose to use different tools to deploy your apps."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u201cRight-click, publish\u201d")," \u2013 Deploying an app directly from an IDE or code editor is often seen as a bad practice, but it\u2019s one of the quickest ways to test out an app in a cloud environment."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Command line interface")," \u2013 CLIs are useful for deploying apps from a terminal. Commands can be run manually or in a script."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Continuous integration/deployment")," \u2013 To deploy production apps, the recommended approach is to automate the process in a robust CI/CD pipeline.")),(0,o.kt)("p",null,"Let's explore some of these options in more depth."),(0,o.kt)("h2",{id:"visual-studio"},"Visual Studio"),(0,o.kt)("p",null,"Visual Studio 2022 has built-in support for deploying .NET applications to Azure Container Apps. You can use the familiar publish dialog to provision Container Apps resources and deploy to them directly. This helps you prototype an app and see it run in Azure Container Apps with the least amount of effort."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Journey to the cloud with Azure Container Apps",src:n(9516).Z,width:"400",height:"306"})),(0,o.kt)("p",null,"Once you\u2019re happy with the app and it\u2019s ready for production, Visual Studio allows you to push your code to GitHub and set up a GitHub Actions workflow to build and deploy your app every time you push changes. You can do this by checking a box."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Journey to the cloud with Azure Container Apps",src:n(4034).Z,width:"400",height:"281"})),(0,o.kt)("h2",{id:"visual-studio-code"},"Visual Studio Code"),(0,o.kt)("p",null,"There are a couple of valuable extensions that you\u2019ll want to install if you\u2019re working in VS Code."),(0,o.kt)("h3",{id:"docker-extension"},"Docker extension"),(0,o.kt)("p",null,"The Docker extension provides commands for building a container image for your app and pushing it to a container registry. It can even do this without requiring Docker Desktop on your local machine --- the \u201cBuild image in Azure\u201d command remotely builds and pushes a container image to Azure Container Registry."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Journey to the cloud with Azure Container Apps",src:n(2407).Z,width:"400",height:"170"})),(0,o.kt)("p",null,"And if your app doesn\u2019t have a dockerfile, the extension will generate one for you."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Journey to the cloud with Azure Container Apps",src:n(1491).Z,width:"399",height:"54"})),(0,o.kt)("h3",{id:"azure-container-apps-extension"},"Azure Container Apps extension"),(0,o.kt)("p",null,"Once you\u2019ve built your container image and pushed it to a registry, the Azure Container Apps VS Code extension provides commands for creating a container app and deploying revisions using the image you\u2019ve built."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Journey to the cloud with Azure Container Apps",src:n(9559).Z,width:"399",height:"199"})),(0,o.kt)("h2",{id:"azure-cli"},"Azure CLI"),(0,o.kt)("p",null,"The Azure CLI can be used to manage pretty much anything in Azure. For Azure Container Apps, you\u2019ll find commands for creating, updating, and managing your Container Apps resources."),(0,o.kt)("p",null,"Just like in VS Code, with a few commands in the Azure CLI, you can create your Azure resources, build and push your container image, and then deploy it to a container app."),(0,o.kt)("p",null,"To make things as simple as possible, the Azure CLI also has an \u201caz containerapp up\u201d command. This single command takes care of everything that\u2019s needed to turn your source code from your local machine to a cloud-hosted application in Azure Container Apps."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"az containerapp up --name myapp --source ./src\n")),(0,o.kt)("p",null,"We saw earlier that Visual Studio can generate a GitHub Actions workflow to automatically build and deploy your app on every commit. \u201caz containerapp up\u201d can do this too. The following adds a workflow to a repo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"az containerapp up --name myapp --repo https://github.com/myorg/myproject\n")),(0,o.kt)("h2",{id:"cicd-pipelines"},"CI/CD pipelines"),(0,o.kt)("p",null,"When it\u2019s time to take your app to production, it\u2019s strongly recommended to set up a CI/CD pipeline to automatically and repeatably build, test, and deploy it. We\u2019ve already seen that tools such as Visual Studio and Azure CLI can automatically generate a workflow for GitHub Actions. You can set up a pipeline in Azure DevOps too. This is an example Azure DevOps pipeline."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"trigger:\n  branches:\n    include:\n    - main\n\npool:\n  vmImage: ubuntu-latest\n\nstages:\n\n- stage: Build\n\n  jobs:\n  - job: build\n    displayName: Build app\n\n    steps:\n    - task: Docker@2\n      inputs:\n        containerRegistry: 'myregistry'\n        repository: 'hello-aca'\n        command: 'buildAndPush'\n        Dockerfile: 'hello-container-apps/Dockerfile'\n        tags: '$(Build.BuildId)'\n\n- stage: Deploy\n\n  jobs:\n  - job: deploy\n    displayName: Deploy app\n\n    steps:\n    - task: AzureCLI@2\n      inputs:\n        azureSubscription: 'my-subscription(5361b9d6-46ea-43c3-a898-15f14afb0db6)'\n        scriptType: 'bash'\n        scriptLocation: 'inlineScript'\n        inlineScript: |\n          # automatically install Container Apps CLI extension\n          az config set extension.use_dynamic_install=yes_without_prompt\n\n          # ensure registry is configured in container app\n          az containerapp registry set \\\n            --name hello-aca \\\n            --resource-group mygroup \\\n            --server myregistry.azurecr.io \\\n            --identity system\n\n          # update container app\n          az containerapp update \\\n            --name hello-aca \\\n            --resource-group mygroup \\\n            --image myregistry.azurecr.io/hello-aca:$(Build.BuildId)\n")),(0,o.kt)("p",null,"Conclusion"),(0,o.kt)("p",null,"In this article, we looked at a few ways to deploy your cloud native applications to Azure Container Apps and how to decide which one to use based on where you are in your app\u2019s journey to the cloud."),(0,o.kt)("p",null,"To learn more, visit ",(0,o.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/services/container-apps/?WT.mc_id=javascript-74010-cxa"},"Azure Container Apps | Microsoft Azure")," today!"),(0,o.kt)("admonition",{title:"ASK THE EXPERT: LIVE Q&A",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The Azure Container Apps team will answer questions live on ",(0,o.kt)("strong",{parentName:"p"},"September 29"),". "),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactor.microsoft.com/reactor/events/17004/?WT.mc_id=javascript-74010-ninarasi"},"Sign up to attend")," for live Q&A with the team"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Azure/Cloud-Native/issues/new?assignees=&labels=ask+the+expert&template=---ask-the-expert-.md&title=%5BAsk+The+Expert%5D++"},"submit your questions")," ahead of time, for prioritization."))))}c.isMDXComponent=!0},9559:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/anthony-aca-extension-420d267387b72d29143f03f8833da305.png"},9516:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/anthony-create-new-3b4fb5406c400d538bab76fe7afe145f.png"},4034:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/anthony-deployment-type-7bdc05a874a9ccd029d95d29f291fa21.png"},2407:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/anthony-vscode-docker-6ea4d15571d8ece1448056dc390e467f.png"},1491:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/anthony-vscode-dockerfile-139bab8d59d5b6c201294b5bc8a24b5a.png"},7360:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/banner-89c6e86cfbf02935e85318d7a3d3b4ff.png"},5515:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/zero-to-hero-anthony-2bc58afc7d6bdff1e92a0c3b87ae02cc.png"}}]);