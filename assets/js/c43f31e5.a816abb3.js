"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79245],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),g=a,h=p["".concat(l,".").concat(g)]||p[g]||d[g]||r;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var i=n(87462),a=(n(67294),n(3905));const r={slug:"bring-your-app-day-4",title:"3-4. Bringing Your Application to Kubernetes - Debugging and Instrumentation",authors:["steven"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["pods","deployments","kubernetes","aks","container-apps","cloud-native","github-actions","ci-cd"],image:"https://azure.github.io/Cloud-Native/img/og/30-14.png",description:"Using Bridge to Kubernetes to debug your application.",tags:["cloud-native","30daysofcloudnative","zero-to-hero","ask-the-expert","azure-kubernetes-service"]},o=void 0,s={permalink:"/Cloud-Native/cnny-2023/bring-your-app-day-4",source:"@site/blog-cnny/2023-02-09/index.md",title:"3-4. Bringing Your Application to Kubernetes - Debugging and Instrumentation",description:"Using Bridge to Kubernetes to debug your application.",date:"2023-02-09T00:00:00.000Z",formattedDate:"February 9, 2023",tags:[{label:"cloud-native",permalink:"/Cloud-Native/cnny-2023/tags/cloud-native"},{label:"30daysofcloudnative",permalink:"/Cloud-Native/cnny-2023/tags/30-daysofcloudnative"},{label:"zero-to-hero",permalink:"/Cloud-Native/cnny-2023/tags/zero-to-hero"},{label:"ask-the-expert",permalink:"/Cloud-Native/cnny-2023/tags/ask-the-expert"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/cnny-2023/tags/azure-kubernetes-service"}],readingTime:8.98,hasTruncateMarker:!1,authors:[{name:"Steven Murawski",title:"Principal Cloud Advocate",url:"https://github.com/smurawski",imageURL:"https://github.com/smurawski.png",key:"steven"}],frontMatter:{slug:"bring-your-app-day-4",title:"3-4. Bringing Your Application to Kubernetes - Debugging and Instrumentation",authors:["steven"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["pods","deployments","kubernetes","aks","container-apps","cloud-native","github-actions","ci-cd"],image:"https://azure.github.io/Cloud-Native/img/og/30-14.png",description:"Using Bridge to Kubernetes to debug your application.",tags:["cloud-native","30daysofcloudnative","zero-to-hero","ask-the-expert","azure-kubernetes-service"]},prevItem:{title:"3-5. Bringing Your Application to Kubernetes - CI/CD Secure Supply Chain",permalink:"/Cloud-Native/cnny-2023/bring-your-app-day-5"},nextItem:{title:"3-3. Bringing Your Application to Kubernetes - Opening your Application with Ingress",permalink:"/Cloud-Native/cnny-2023/bring-your-app-day-3"}},l={authorsImageUrls:[void 0]},u=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Debugging",id:"debugging",level:2},{value:"Bridge to Kubernetes",id:"bridge-to-kubernetes",level:2},{value:"Connecting Bridge to Kubernetes to Our Cluster",id:"connecting-bridge-to-kubernetes-to-our-cluster",level:3},{value:"Ensure your AKS cluster is the default for <code>kubectl</code>",id:"ensure-your-aks-cluster-is-the-default-for-kubectl",level:4},{value:"Open the command palette",id:"open-the-command-palette",level:4},{value:"Pick the service you want to debug",id:"pick-the-service-you-want-to-debug",level:4},{value:"Identify the port your application runs on",id:"identify-the-port-your-application-runs-on",level:4},{value:"Pick a debug configuration to extend",id:"pick-a-debug-configuration-to-extend",level:4},{value:"Forward Traffic for All Requests",id:"forward-traffic-for-all-requests",level:4},{value:"Using Bridge to Kubernetes to Debug Our Service",id:"using-bridge-to-kubernetes-to-debug-our-service",level:3},{value:"Launch the debug configuration",id:"launch-the-debug-configuration",level:4},{value:"Enable the Endpoint Manager",id:"enable-the-endpoint-manager",level:4},{value:"Access your Kubernetes cluster &quot;locally&quot;",id:"access-your-kubernetes-cluster-locally",level:4},{value:"Exploring the Running Application Environment",id:"exploring-the-running-application-environment",level:4},{value:"Going Further",id:"going-further",level:3},{value:"Instrumentation",id:"instrumentation",level:2},{value:"Logging and Tracing",id:"logging-and-tracing",level:3},{value:"Centralized Logging",id:"centralized-logging",level:3},{value:"Automated Alerting",id:"automated-alerting",level:3},{value:"End to end Visibility",id:"end-to-end-visibility",level:3},{value:"Resources",id:"resources",level:2}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/cnny-2023/bring-your-app-day-4"}),(0,a.kt)("meta",{name:"twitter:title",content:"3-4. Bringing Your Application to Kubernetes - Debugging and Instrumentation"}),(0,a.kt)("meta",{name:"twitter:description",content:"Using Bridge to Kubernetes to debug your application."}),(0,a.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/og/30-14.png"}),(0,a.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.kt)("meta",{name:"twitter:creator",content:"@stevenmurawski"}),(0,a.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,a.kt)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/cnny-2023/bring-your-app-day-4"})),(0,a.kt)("p",null,"Welcome to ",(0,a.kt)("inlineCode",{parentName:"p"},"Day 4 of Week 3")," of #CloudNativeNewYear!"),(0,a.kt)("p",null,"The theme for this week is Bringing Your Application to Kubernetes. Yesterday we exposed the eShopOnWeb app so that customers can reach it over the internet using a custom domain name and TLS. Today we'll explore the topic of debugging and instrumentation."),(0,a.kt)("admonition",{title:"Ask the Experts Thursday, February 9th at 9 AM PST",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://aka.ms/cnny/ate"},"Join us for a live Q&A with Experts from the Azure Kubernetes Service product team!"))),(0,a.kt)("admonition",{title:"Friday, February 10th at 11 AM PST",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Join us for a live demo and let us answer your questions."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://aka.ms/cnny/live-coding"},"We'll be live on YouTube walking through today's (and the rest of this week's) demos"),".  Join us Friday, February 10th and bring your questions!")),(0,a.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Debugging"),(0,a.kt)("li",{parentName:"ul"},"Bridge To Kubernetes"),(0,a.kt)("li",{parentName:"ul"},"Instrumentation"),(0,a.kt)("li",{parentName:"ul"},"Resources: For self-study!")),(0,a.kt)("h2",{id:"debugging"},"Debugging"),(0,a.kt)("p",null,"Debugging applications in a Kubernetes cluster can be challenging for several reasons:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Complexity:")," Kubernetes is a complex system with many moving parts, including pods, nodes, services, and config maps, all of which can interact in unexpected ways and cause issues."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Distributed Environment:")," Applications running in a Kubernetes cluster are often distributed across multiple nodes, which makes it harder to determine the root cause of an issue."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Logging and Monitoring:")," Debugging an application in a Kubernetes cluster requires access to logs and performance metrics, which can be difficult to obtain in a large and dynamic environment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Resource Management:")," Kubernetes manages resources such as CPU and memory, which can impact the performance and behavior of applications. Debugging resource-related issues requires a deep understanding of the Kubernetes resource model and the underlying infrastructure."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Dynamic Nature:")," Kubernetes is designed to be dynamic, with the ability to add and remove resources as needed. This dynamic nature can make it difficult to reproduce issues and debug problems.")),(0,a.kt)("p",null,"However, there are many tools and practices that can help make debugging applications in a Kubernetes cluster easier, such as using centralized logging, monitoring, and tracing solutions, and following best practices for managing resources and deployment configurations."),(0,a.kt)("p",null,"There's also another great tool in our toolbox - ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/visualstudio/bridge/overview-bridge-to-kubernetes?WT.mc_id=containers-84290-stmuraws"},"Bridge to Kubernetes"),"."),(0,a.kt)("h2",{id:"bridge-to-kubernetes"},"Bridge to Kubernetes"),(0,a.kt)("p",null,"Bridge to Kubernetes is a great tool for microservice development and debugging applications without having to locally replicate all the required microservices."),(0,a.kt)("p",null,"Bridge to Kubernetes works with ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-azuretools.mindaro&WT.mc_id=containers-84290-stmuraws"},"Visual Studio")," or ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=mindaro.mindaro&WT.mc_id=containers-84290-stmuraws"},"Visual Studio Code"),"."),(0,a.kt)("p",null,"We'll walk through using it with Visual Studio Code."),(0,a.kt)("h3",{id:"connecting-bridge-to-kubernetes-to-our-cluster"},"Connecting Bridge to Kubernetes to Our Cluster"),(0,a.kt)("h4",{id:"ensure-your-aks-cluster-is-the-default-for-kubectl"},"Ensure your AKS cluster is the default for ",(0,a.kt)("inlineCode",{parentName:"h4"},"kubectl")),(0,a.kt)("p",null,"If you've recently spun up a new AKS cluster or you have been working with a different cluster, you may need to change what cluster credentials you have configured."),(0,a.kt)("p",null,"If it's a new cluster, we can use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"RESOURCE_GROUP=<YOUR RESOURCE GROUP NAME>\nCLUSTER_NAME=<YOUR AKS CLUSTER NAME>\naz aks get-credentials az aks get-credentials --resource-group $RESOURCE_GROUP --name $CLUSTER_NAME\n")),(0,a.kt)("h4",{id:"open-the-command-palette"},"Open the command palette"),(0,a.kt)("p",null,"Open the command palette and find ",(0,a.kt)("inlineCode",{parentName:"p"},"Bridge to Kubernetes: Configure"),".  You may need to start typing the name to get it to show up."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The command palette for Visual Studio Code is open and the first item is Bridge to Kubernetes: Configure",src:n(45494).Z,width:"3852",height:"2098"})),(0,a.kt)("h4",{id:"pick-the-service-you-want-to-debug"},"Pick the service you want to debug"),(0,a.kt)("p",null,"Bridge to Kubernetes will redirect a service for you.  Pick the service you want to redirect, in this case we'll pick ",(0,a.kt)("inlineCode",{parentName:"p"},"web"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Selecting the `web` service to redirect in Visual Studio Code",src:n(89732).Z,width:"3852",height:"2098"})),(0,a.kt)("h4",{id:"identify-the-port-your-application-runs-on"},"Identify the port your application runs on"),(0,a.kt)("p",null,"Next, we'll be prompted to identify what port our application will run on locally.  For this application it'll be 5001, but that's just specific to this application (and the default for ASP.NET 7, I believe)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Setting port 5001 as the port to redirect to the `web` Kubernetes service in Visual Studio Code",src:n(73961).Z,width:"3852",height:"2098"})),(0,a.kt)("h4",{id:"pick-a-debug-configuration-to-extend"},"Pick a debug configuration to extend"),(0,a.kt)("p",null,"Bridge to Kubernetes has a couple of ways to run - it can inject it's setup and teardown to your existing debug configurations.  We'll pick ",(0,a.kt)("inlineCode",{parentName:"p"},".NET Core Launch (web)"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Telling Bridge to Kubernetes to use the .NET Core Launch (web) debug configuration in Visual Studio Code",src:n(54576).Z,width:"3852",height:"2098"})),(0,a.kt)("h4",{id:"forward-traffic-for-all-requests"},"Forward Traffic for All Requests"),(0,a.kt)("p",null,"The last prompt you'll get in the configuration is about how you want Bridge to Kubernetes to handle re-routing traffic.  The default is that all requests into the service will get your local version.  "),(0,a.kt)("p",null,"You can also redirect specific traffic.  Bridge to Kubernetes will set up a subdomain and route specific traffic to your local service, while allowing other traffic to the deployed service."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Allowing the launch of Endpoint Manager on Windows",src:n(8187).Z,width:"3852",height:"2098"})),(0,a.kt)("h3",{id:"using-bridge-to-kubernetes-to-debug-our-service"},"Using Bridge to Kubernetes to Debug Our Service"),(0,a.kt)("p",null,"Now that we've configured Bridge to Kubernetes, we see that tasks and a new launch configuration have been added."),(0,a.kt)("p",null,"Added to ",(0,a.kt)("inlineCode",{parentName:"p"},".vscode/tasks.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'        {\n            "label": "bridge-to-kubernetes.resource",\n            "type": "bridge-to-kubernetes.resource",\n            "resource": "web",\n            "resourceType": "service",\n            "ports": [\n                5001\n            ],\n            "targetCluster": "aks1",\n            "targetNamespace": "default",\n            "useKubernetesServiceEnvironmentVariables": false\n        },\n        {\n            "label": "bridge-to-kubernetes.compound",\n            "dependsOn": [\n                "bridge-to-kubernetes.resource",\n                "build"\n            ],\n            "dependsOrder": "sequence"\n        }\n')),(0,a.kt)("p",null,"And added to ",(0,a.kt)("inlineCode",{parentName:"p"},".vscode/launch.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'{\n        "name": ".NET Core Launch (web) with Kubernetes",\n        "type": "coreclr",\n        "request": "launch",\n        "preLaunchTask": "bridge-to-kubernetes.compound",\n        "program": "${workspaceFolder}/src/Web/bin/Debug/net7.0/Web.dll",\n        "args": [],\n        "cwd": "${workspaceFolder}/src/Web",\n        "stopAtEntry": false,\n        "env": {\n            "ASPNETCORE_ENVIRONMENT": "Development",\n            "ASPNETCORE_URLS": "http://+:5001"\n        },\n        "sourceFileMap": {\n            "/Views": "${workspaceFolder}/Views"\n        }\n    }\n')),(0,a.kt)("h4",{id:"launch-the-debug-configuration"},"Launch the debug configuration"),(0,a.kt)("p",null,"We can start the process with the ",(0,a.kt)("inlineCode",{parentName:"p"},".NET Core Launch (web) with Kubernetes")," launch configuration in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Debug")," pane in Visual Studio Code."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Launch the `.NET Core Launch (web) with Kubernetes` from the Debug pane in Visual Studio Code",src:n(7698).Z,width:"3852",height:"2098"})),(0,a.kt)("h4",{id:"enable-the-endpoint-manager"},"Enable the Endpoint Manager"),(0,a.kt)("p",null,"Part of this process includes a local service to help manage the traffic routing and your hosts file.  This will require admin or ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo")," privileges.  On Windows, you'll get a prompt like:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Prompt to launch the endpoint manager.",src:n(46491).Z,width:"838",height:"274"})),(0,a.kt)("h4",{id:"access-your-kubernetes-cluster-locally"},'Access your Kubernetes cluster "locally"'),(0,a.kt)("p",null,"Bridge to Kubernetes will set up a tunnel (thanks to port forwarding) to your local workstation and create local endpoints for the other Kubernetes hosted services in your cluster, as well as pretending to be a pod in that cluster (for the application you are debugging)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Output from Bridge To Kubernetes setup task.",src:n(50313).Z,width:"3852",height:"2098"})),(0,a.kt)("p",null,"After making the connection to your Kubernetes cluster, the launch configuration will continue. In this case, we'll make a debug build of the application and attach the debugger.  (This process may cause the terminal in VS Code to scroll with build output. You can find the Bridge to Kubernetes output with the local IP addresses and ports in the Output pane for Bridge to Kubernetes.)"),(0,a.kt)("p",null,"You can set breakpoints, use your debug console, set watches, run tests against your local version of the service."),(0,a.kt)("h4",{id:"exploring-the-running-application-environment"},"Exploring the Running Application Environment"),(0,a.kt)("p",null,"One of the cool things that Bridge to Kubernetes does for our debugging experience is bring the environment configuration that our deployed pod would inherit.  When we launch our app, it'll see configuration and secrets that we'd expect our pod to be running with.  "),(0,a.kt)("p",null,"To test this, we'll set a breakpoint in our application's start up to see what SQL Server is being used.  We'll set a breakpoint at ",(0,a.kt)("inlineCode",{parentName:"p"},"src/Infrastructure/Dependencies.cs")," on line 32."),(0,a.kt)("p",null,"Then, we will start debugging the application with Bridge to Kubernetes.  When it hits the breakpoint, we'll open the Debug pane and type ",(0,a.kt)("inlineCode",{parentName:"p"},'configuration.GetConnectionString("CatalogConnection")'),"."),(0,a.kt)("p",null,"When we run locally (not with Bridge to Kubernetes), we'd see:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'configuration.GetConnectionString("CatalogConnection")\n "Server=(localdb)\\\\mssqllocaldb;Integrated Security=true;Initial Catalog=Microsoft.eShopOnWeb.CatalogDb;"\n')),(0,a.kt)("p",null,"But, with Bridge to Kubernetes we see something more like (yours will vary based on the password ):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'configuration.GetConnectionString("CatalogConnection")\n "Server=db;Database=Microsoft.eShopOnWeb.CatalogDb;User Id=sa;Password=*****************;TrustServerCertificate=True;"\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Debugging our local application connected to Kubernetes.",src:n(63703).Z,width:"3852",height:"2098"})),(0,a.kt)("p",null,"We can see that the database server configured is based on our ",(0,a.kt)("inlineCode",{parentName:"p"},"db")," service and the password is pulled from our secret in Azure KeyVault (via AKS)."),(0,a.kt)("p",null,"This helps us run our local application just like it was actually in our cluster."),(0,a.kt)("h3",{id:"going-further"},"Going Further"),(0,a.kt)("p",null,"Bridge to Kubernetes also supports more advanced scenarios and, as you need to start routing traffic around inside your cluster, may require you to modify your application to pass along a ",(0,a.kt)("inlineCode",{parentName:"p"},"kubernetes-route-as")," header to help ensure that traffic for your debugging workloads is properly handled.  The docs go into much greater detail about that."),(0,a.kt)("h2",{id:"instrumentation"},"Instrumentation"),(0,a.kt)("p",null,"Now that we've figured out our debugging story, we'll need to ensure that we have the right context clues to find where we need to debug or to give us a better idea of how well our microservices are running."),(0,a.kt)("h3",{id:"logging-and-tracing"},"Logging and Tracing"),(0,a.kt)("p",null,"Logging and tracing become even more critical in Kubernetes, where your application could be running in a number of pods across different nodes. When you have an issue, in addition to the normal application data, you'll want to know what pod and what node had the issue, what the state of those resources were (were you resource constrained or were shared resources unavailable?), and if autoscaling is enabled, you'll want to know if a scale event has been triggered. There are a multitude of other concerns based on your application and the environment you maintain."),(0,a.kt)("p",null,"Given these informational needs, it's crucial to revisit your existing logging and instrumentation. Most frameworks and languages have extensible logging, tracing, and instrumentation libraries that you can iteratively add information to, such as pod and node states, and ensuring that requests can be traced across your microservices. This will pay you back time and time again when you have to troubleshoot issues in your existing environment."),(0,a.kt)("h3",{id:"centralized-logging"},"Centralized Logging"),(0,a.kt)("p",null,"To enhance the troubleshooting process further, it's important to implement centralized logging to consolidate logs from all your microservices into a single location. This makes it easier to search and analyze logs when you're troubleshooting an issue. "),(0,a.kt)("h3",{id:"automated-alerting"},"Automated Alerting"),(0,a.kt)("p",null,"Additionally, implementing automated alerting, such as sending notifications when specific conditions occur in the logs, can help you detect issues before they escalate."),(0,a.kt)("h3",{id:"end-to-end-visibility"},"End to end Visibility"),(0,a.kt)("p",null,"End-to-end visibility is also essential in understanding the flow of requests and responses between microservices in a distributed system. With end-to-end visibility, you can quickly identify bottlenecks and slowdowns in the system, helping you to resolve issues more efficiently."),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("admonition",{title:"Take the Cloud Skills Challenge!",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/training/challenges?id=a0e385b9-f970-4182-b2e2-3b4619b6c356"},"Enroll")," in the Cloud Skills Challenge! "),(0,a.kt)("p",{parentName:"admonition"},"Don't miss out on this opportunity to level up your skills and stay ahead of the curve in the world of cloud native. ")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/visualstudio/bridge/bridge-to-kubernetes-vs-code?WT.mc_id=containers-84290-stmuraws"},"Use Bridge to Kubernetes in VS Code"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-azuretools.mindaro&WT.mc_id=containers-84290-stmuraws"},"Bridge to Kubernetes Visual Studio Extension")," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=mindaro.mindaro&WT.mc_id=containers-84290-stmuraws"},"Bridge to Kubernetes Visual Studio Code Extension"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/architecture/aws-professional/eks-to-aks/monitoring?WT.mc_id=containers-84290-stmuraws"},"Kubernetes monitoring and logging"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/architecture/microservices/logging-monitoring?WT.mc_id=containers-84290-stmuraws"},"Monitor a microservices architecture in Azure Kubernetes Service (AKS)")))))}d.isMDXComponent=!0},45494:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/1-configure-bridge-to-kubernetes-33b483ced5b91fe095bbaaced8355f85.png"},7698:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/1-debug-with-bridge-to-kubernetes-a433698c3463d1d21268ce8f2ef9c4ac.png"},89732:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/2-configure-bridge-to-kubernetes-dfaff25b950fbb72bad2326144d3dee1.png"},46491:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/2-debug-with-bridge-to-kubernetes-347152aa59bf42c8e8c1d7c7849ea1de.png"},73961:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/3-configure-bridge-to-kubernetes-d934e270f2317020abe65bb496826a24.png"},50313:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/3-debug-with-bridge-to-kubernetes-3a9758005c10170e82891c63e603fe94.png"},54576:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/4-configure-bridge-to-kubernetes-ad871a07bf4fc2c9afbfa36da35ace2f.png"},8187:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/5-configure-bridge-to-kubernetes-ab4047f6e94988975e019ea3c2ecf698.png"},63703:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/5-debug-with-bridge-to-kubernetes-2d8749df96c0961a972202cd3ac2a282.png"}}]);