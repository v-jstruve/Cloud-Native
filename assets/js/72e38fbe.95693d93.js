"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53470],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8414:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={slug:"fundamentals-day-2",title:"2-2. Kubernetes Fundamentals - Services and Ingress",authors:["paul"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["cloudnative","azure","kubernetes","serivce","ingress"],image:"https://azure.github.io/Cloud-Native/img/og/30-07.png",description:"A Step-by-Step Guide using Kubernetes Service and Ingress Resources on AKS",tags:["cloud-native-new-year","azure-kubernetes-service","aks","kubernetes","service","ingress"]},s=void 0,i={permalink:"/Cloud-Native/cnny-2023/fundamentals-day-2",source:"@site/blog-cnny/2023-01-31/index.md",title:"2-2. Kubernetes Fundamentals - Services and Ingress",description:"A Step-by-Step Guide using Kubernetes Service and Ingress Resources on AKS",date:"2023-01-31T00:00:00.000Z",formattedDate:"January 31, 2023",tags:[{label:"cloud-native-new-year",permalink:"/Cloud-Native/cnny-2023/tags/cloud-native-new-year"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/cnny-2023/tags/azure-kubernetes-service"},{label:"aks",permalink:"/Cloud-Native/cnny-2023/tags/aks"},{label:"kubernetes",permalink:"/Cloud-Native/cnny-2023/tags/kubernetes"},{label:"service",permalink:"/Cloud-Native/cnny-2023/tags/service"},{label:"ingress",permalink:"/Cloud-Native/cnny-2023/tags/ingress"}],readingTime:10.2,hasTruncateMarker:!1,authors:[{name:"Paul Yu",title:"Senior Cloud Advocate",url:"https://github.com/pauldotyu",imageURL:"https://github.com/pauldotyu.png",key:"paul"}],frontMatter:{slug:"fundamentals-day-2",title:"2-2. Kubernetes Fundamentals - Services and Ingress",authors:["paul"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["cloudnative","azure","kubernetes","serivce","ingress"],image:"https://azure.github.io/Cloud-Native/img/og/30-07.png",description:"A Step-by-Step Guide using Kubernetes Service and Ingress Resources on AKS",tags:["cloud-native-new-year","azure-kubernetes-service","aks","kubernetes","service","ingress"]},prevItem:{title:"2-3. Kubernetes Fundamentals - ConfigMaps and Secrets",permalink:"/Cloud-Native/cnny-2023/fundamentals-day-3"},nextItem:{title:"2-1. Kubernetes Fundamentals - Pods and Deployments",permalink:"/Cloud-Native/cnny-2023/fundamentals-day-1"}},l={authorsImageUrls:[void 0]},p=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Exposing Pods via Service",id:"exposing-pods-via-service",level:2},{value:"Exposing Services via Ingress",id:"exposing-services-via-ingress",level:2},{value:"Takeaways",id:"takeaways",level:2},{value:"Resources",id:"resources",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/cnny-2023/fundamentals-day-2"}),(0,r.kt)("meta",{name:"twitter:title",content:"2-2. Kubernetes Fundamentals - Services and Ingress"}),(0,r.kt)("meta",{name:"twitter:description",content:"A Step-by-Step Guide using Kubernetes Service and Ingress Resources on AKS"}),(0,r.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/og/30-07.png"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{name:"twitter:creator",content:"@pauldotyu"}),(0,r.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,r.kt)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/cnny-2023/fundamentals-day-2"})),(0,r.kt)("p",null,"Welcome to ",(0,r.kt)("inlineCode",{parentName:"p"},"Day 2 of Week 2")," of #CloudNativeNewYear!"),(0,r.kt)("p",null,"The theme for this week is #Kubernetes fundamentals. Yesterday we talked about how to deploy a containerized web app workload to Azure Kubernetes Service (AKS). Today we'll explore the topic of services and ingress and walk through the steps of making our containers accessible both internally as well as over the internet so that you can share it with the world \ud83d\ude0a"),(0,r.kt)("admonition",{title:"Ask the Experts Thursday, February 9th at 9 AM PST",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/ateonlearn"},"Join us for a live Q&A with Experts from the Azure Kubernetes Service product team!"))),(0,r.kt)("admonition",{title:"Catch the Replay of the Live Demo",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Join us for a live demo and let us answer your questions."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/cnny/week2-demo"},"We were live on YouTube walking through today's (and the rest of this week's) demos"),".  ")),(0,r.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Exposing Pods via Service"),(0,r.kt)("li",{parentName:"ul"},"Exposing Services via Ingress"),(0,r.kt)("li",{parentName:"ul"},"Takeaways"),(0,r.kt)("li",{parentName:"ul"},"Resources")),(0,r.kt)("h2",{id:"exposing-pods-via-service"},"Exposing Pods via Service"),(0,r.kt)("p",null,"There are a few ways to expose your pod in Kubernetes. One way is to take an imperative approach and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl expose")," command. This is probably the quickest way to achieve your goal but it isn't the best way. A better way to expose your pod by taking a declarative approach by creating a ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/aks/concepts-network?WT.mc_id=containers-84290-pauyu#services"},"services")," manifest file and deploying it using the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl apply")," command."),(0,r.kt)("p",null,"Don't worry if you are unsure of how to make this manifest, we'll use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," to help generate it."),(0,r.kt)("p",null,"First, let's ensure we have the database deployed on our AKS cluster."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udcdd NOTE: If you don't have an AKS cluster deployed, please head over to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/azure-voting-app-rust/tree/main"},"Azure-Samples/azure-voting-app-rust"),", clone the repo, and follow the instructions in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/azure-voting-app-rust/blob/main/README.md"},"README.md")," to execute the Azure deployment and setup your ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," context.  Check out ",(0,r.kt)("a",{parentName:"p",href:"/Cloud-Native/cnny-2023/fundamentals-day-1#setting-up-a-kubernetes-environment-in-azure"},"the first post this week for more on the environment setup"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./manifests/deployment-db.yaml\n")),(0,r.kt)("p",null,"Next, let's deploy the application. If you are following along from yesterday's content, there isn't anything you need to change; however, if you are deploy the app from scratch, you'll need to modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment-app.yaml")," manifest and update it with your image tag and database pod's IP address."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./manifests/deployment-app.yaml\n")),(0,r.kt)("p",null,"Now, let's expose the database using a service so that we can leverage Kubernetes' built-in service discovery to be able to reference it by name; not pod IP. Run the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl expose deployment azure-voting-db \\\n  --port=5432 \\\n  --target-port=5432\n")),(0,r.kt)("p",null,"With the database exposed using service, we can update the app deployment manifest to use the service name instead of pod IP. This way, if the pod ever gets assigned a new IP, we don't have to worry about updating the IP each time and redeploying our web application. Kubernetes has internal service discovery mechanism in place that allows us to reference a service by its name."),(0,r.kt)("p",null,"Let's make an update to the manifest. Replace the environment variable for ",(0,r.kt)("inlineCode",{parentName:"p"},"DATABASE_SERVER")," with the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"- name: DATABASE_SERVER\n  value: azure-voting-db\n")),(0,r.kt)("p",null,"Re-deploy the app with the updated configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./manifests/deployment-app.yaml\n")),(0,r.kt)("p",null,"One service down, one to go. Run the following command to expose the web application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl expose deployment azure-voting-app \\\n  --type=LoadBalancer \\\n  --port=80 \\\n  --target-port=8080\n")),(0,r.kt)("p",null,"Notice the ",(0,r.kt)("inlineCode",{parentName:"p"},"--type")," argument has a value of ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalancer"),". This service type is implemented by the ",(0,r.kt)("inlineCode",{parentName:"p"},"cloud-controller-manager")," which is part of the Kubernetes control plane. When using a managed Kubernetes cluster such as Azure Kubernetes Service, a ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/aks/load-balancer-standard?WT.mc_id=containers-84290-pauyu#use-the-public-standard-load-balancer"},"public standard load balancer")," will be able to provisioned when the service type is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalancer"),". The load balancer will also have a public IP assigned which will make your deployment publicly available."),(0,r.kt)("p",null,"Kubernetes supports four ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types"},"service types"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ClusterIP"),": this is the default and limits service access to internal traffic within the cluster"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NodePort"),": this assigns a port mapping on the node's IP address and allows traffic from the virtual network (outside the cluster)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LoadBalancer"),": as mentioned above, this creates a cloud-based load balancer"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ExternalName"),": this is used in special case scenarios where you want to map a service to an external DNS name")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udcdd NOTE: When exposing a web application to the internet, allowing external users to connect to your ",(0,r.kt)("strong",{parentName:"p"},"Service")," directly is not the best approach. Instead, you should use an ",(0,r.kt)("strong",{parentName:"p"},"Ingress"),", which we'll cover in the next section.")),(0,r.kt)("p",null,"Now, let's confirm you can reach the web app from the internet. You can use the following command to print the URL to your terminal."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo \"http://$(kubectl get service azure-voting-app -o jsonpath='{.status.loadBalancer.ingress[0].ip}')\"\n")),(0,r.kt)("p",null,"Great! The ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl expose")," command gets the job done, but as mentioned above, it is not the best method of exposing deployments. It is better to expose deployments declaratively using a ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},"service")," manifest, so let's delete the services and redeploy using manifests."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete service azure-voting-db azure-voting-app\n")),(0,r.kt)("p",null,"To use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," to generate our manifest file, we can use the same ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl expose")," command that we ran earlier but this time, we'll include  ",(0,r.kt)("inlineCode",{parentName:"p"},"--output=yaml")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--dry-run=client"),". This will instruct the command to output the manifest that would be sent to the ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-api")," server in YAML format to the terminal."),(0,r.kt)("p",null,"Generate the manifest for the database service."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl expose deployment azure-voting-db \\\n  --type=ClusterIP \\\n  --port=5432 \\\n  --target-port=5432 \\\n  --output=yaml \\\n  --dry-run=client > ./manifests/service-db.yaml\n")),(0,r.kt)("p",null,"Generate the manifest for the application service."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl expose deployment azure-voting-app \\\n  --type=LoadBalancer \\\n  --port=80 \\\n  --target-port=8080 \\\n  --output=yaml \\\n  --dry-run=client > ./manifests/service-app.yaml\n")),(0,r.kt)("p",null,"The command above redirected the YAML output to your manifests directory. Here is what the web application service looks like."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"apiVersion: v1\nkind: Service\nmetadata:\n  creationTimestamp: null\n  labels:\n    app: azure-voting-app\n  name: azure-voting-app\nspec:\n  ports:\n  - port: 80\n    protocol: TCP\n    targetPort: 8080\n  selector:\n    app: azure-voting-app\n  type: LoadBalancer\nstatus:\n  loadBalancer: {}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 TIP: To view the schema of any ",(0,r.kt)("inlineCode",{parentName:"p"},"api-resource")," in Kubernetes, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl explain")," command. In this case the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl explain service")," command will tell us exactly what each of these fields do.")),(0,r.kt)("p",null,"Re-deploy the services using the new service manifests."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./manifests/service-db.yaml -f ./manifests/service-app.yaml\n\n# You should see TYPE is set to LoadBalancer and the EXTERNAL-IP is set\nkubectl get service azure-voting-db azure-voting-app\n")),(0,r.kt)("p",null,"Confirm again that our application is accessible again. Run the following command to print the URL to the terminal."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo \"http://$(kubectl get service azure-voting-app -o jsonpath='{.status.loadBalancer.ingress[0].ip}')\"\n")),(0,r.kt)("p",null,"That was easy, right? We just exposed both of our pods using Kubernetes services. The database only needs to be accessible from within the cluster so ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterIP")," is perfect for that. For the web application, we specified the type to be ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," so that we can access the application over the public internet."),(0,r.kt)("p",null,"But wait... remember that if you want to expose web applications over the public internet, a Service with a public IP is not the best way; the better approach is to use an Ingress resource."),(0,r.kt)("h2",{id:"exposing-services-via-ingress"},"Exposing Services via Ingress"),(0,r.kt)("p",null,"If you read through the Kubernetes documentation on ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/#what-is-ingress"},"Ingress")," you will see a diagram that depicts the Ingress sitting in front of the Service resource with a routing rule between it. In order to use Ingress, you need to deploy an Ingress Controller and it can be configured with many routing rules to forward traffic to one or many backend services. So effectively, an Ingress is a load balancer for your Services."),(0,r.kt)("p",null,"With that said, we no longer need a service type of ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," since the service does not need to be accessible from the internet. It only needs to be accessible from the Ingress Controller (internal to the cluster) so we can change the service type to ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterIP"),"."),(0,r.kt)("p",null,"Update your ",(0,r.kt)("inlineCode",{parentName:"p"},"service.yaml")," file to look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  creationTimestamp: null\n  labels:\n    app: azure-voting-app\n  name: azure-voting-app\nspec:\n  ports:\n  - port: 80\n    protocol: TCP\n    targetPort: 8080\n  selector:\n    app: azure-voting-app\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udcdd NOTE: The default service type is ClusterIP so we can omit the ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," altogether.")),(0,r.kt)("p",null,"Re-apply the app service manifest."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./manifests/service-app.yaml\n\n# You should see TYPE set to ClusterIP and EXTERNAL-IP set to <none>\nkubectl get service azure-voting-app\n")),(0,r.kt)("p",null,"Next, we need to install an ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/"},"Ingress Controller"),". There are quite a few options, and the Kubernetes-maintained ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/ingress-nginx"},"NGINX Ingress Controller")," is commonly deployed."),(0,r.kt)("p",null,"You could install this manually by following ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/deploy/#azure"},"these instructions"),", but if you do that you'll be responsible for maintaining and supporting the resource."),(0,r.kt)("p",null,"I like to take advantage of free maintenance and support when I can get it, so I'll opt to use the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/aks/web-app-routing?WT.mc_id=containers-84290-pauyu&tabs=without-osm"},"Web Application Routing add-on for AKS"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 TIP: Whenever you install an AKS add-on, it will be maintained and fully supported by Azure Support.")),(0,r.kt)("p",null,"Enable the web application routing add-on in our AKS cluster with the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"az aks addon enable \\\n  --name <YOUR_AKS_NAME> \\\n  --resource-group <YOUR_AKS_RESOURCE_GROUP>\n  --addon web_application_routing\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f WARNING: This command can take a few minutes to complete")),(0,r.kt)("p",null,"Now, let's use the same approach we took in creating our service to create our Ingress resource. Run the following command to generate the Ingress manifest."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl create ingress azure-voting-app \\\n  --class=webapprouting.kubernetes.azure.com \\\n  --rule="/*=azure-voting-app:80" \\\n  --output yaml \\\n  --dry-run=client > ./manifests/ingress.yaml\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--class=webapprouting.kubernetes.azure.com")," option activates the AKS web application routing add-on. This AKS add-on can also integrate with other Azure services such as ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/dns/dns-overview?WT.mc_id=containers-84290-pauyu"},"Azure DNS")," and ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/key-vault/general/overview?WT.mc_id=containers-84290-pauyu"},"Azure Key Vault")," for TLS certificate management and this special class makes it all work."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},'--rule="/*=azure-voting-app:80"')," option looks confusing but we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," again to help us understand how to format the value for the option."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ingress --help\n")),(0,r.kt)("p",null,"In the output you will see the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"--rule=[]:\n    Rule in format host/path=service:port[,tls=secretname]. Paths containing the leading character '*' are\n    considered pathType=Prefix. tls argument is optional.\n")),(0,r.kt)("p",null,"It expects a ",(0,r.kt)("inlineCode",{parentName:"p"},"host")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," separated by a forward-slash, then expects the backend ",(0,r.kt)("inlineCode",{parentName:"p"},"service")," name and ",(0,r.kt)("inlineCode",{parentName:"p"},"port")," separated by a colon. We're not using a hostname for this demo so we can omit it. For the path, an asterisk is used to specify a wildcard path prefix."),(0,r.kt)("p",null,"So, the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"/*=azure-voting-app:80")," creates a routing rule for all paths following the domain (or in our case since we don't have a hostname specified, the IP) to route traffic to our ",(0,r.kt)("inlineCode",{parentName:"p"},"azure-voting-app")," backend service on port ",(0,r.kt)("inlineCode",{parentName:"p"},"80"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udcdd NOTE: Configuring the hostname and TLS is outside the scope of this demo but please visit this URL ",(0,r.kt)("a",{parentName:"p",href:"https://bit.ly/aks-webapp-routing"},"https://bit.ly/aks-webapp-routing")," for an in-depth hands-on lab centered around Web Application Routing on AKS.")),(0,r.kt)("p",null,"Your ",(0,r.kt)("inlineCode",{parentName:"p"},"ingress.yaml")," file should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  creationTimestamp: null\n  name: azure-voting-app\nspec:\n  ingressClassName: webapprouting.kubernetes.azure.com\n  rules:\n  - http:\n      paths:\n      - backend:\n          service:\n            name: azure-voting-app\n            port:\n              number: 80\n        path: /\n        pathType: Prefix\nstatus:\n  loadBalancer: {}\n")),(0,r.kt)("p",null,"Apply the app ingress manifest."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./manifests/ingress.yaml\n")),(0,r.kt)("p",null,"Validate the web application is available from the internet again. You can run the following command to print the URL to the terminal."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo \"http://$(kubectl get ingress azure-voting-app -o jsonpath='{.status.loadBalancer.ingress[0].ip}')\"\n")),(0,r.kt)("h2",{id:"takeaways"},"Takeaways"),(0,r.kt)("p",null,"Exposing your applications both internally and externally can be easily achieved using Service and Ingress resources respectively. If your service is HTTP or HTTPS based and needs to be accessible from outsie the cluster, use Ingress with an internal Service (i.e., ClusterIP or NodePort); otherwise, use the Service resource.  If your TCP-based Service needs to be publicly accessible, you set the type to LoadBalancer to expose a public IP for it. To learn more about these resources, please visit the links listed below."),(0,r.kt)("p",null,"Lastly, if you are unsure how to begin writing your service manifest, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," and have it do most of the work for you \ud83e\udd73"),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("admonition",{title:"Take the Cloud Skills Challenge!",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/training/challenges?id=a0e385b9-f970-4182-b2e2-3b4619b6c356"},"Enroll")," in the Cloud Skills Challenge! "),(0,r.kt)("p",{parentName:"admonition"},"Don't miss out on this opportunity to level up your skills and stay ahead of the curve in the world of cloud native. ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/aks/concepts-network?WT.mc_id=containers-84290-pauyu#services"},"Services")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/aks/concepts-network?WT.mc_id=containers-84290-pauyu#ingress-controllers"},"Ingress Controllers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/aks-webapp-routing-lab"},"Hands-on Lab: Web Application Routing on AKS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/aks/ingress-basic??WT.mc_id=containers-84290-pauyu&tabs=azure-cli"},"How-to Guide: Ingress Controller in AKS"))))}c.isMDXComponent=!0}}]);