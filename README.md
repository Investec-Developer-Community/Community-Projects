# Programmable Banking Command Center Challenge

[👉 Jump to Community Project Demos](https://gitlab.com/offerzen-beta-community/investec-programmable-banking/command-center#command-center-deployments)

##  Welcome

For this challenge we will be each be creating our own `Programmable Banking Command Center` to be able to do useful things with the card transaction data.

<img src = "/images/starcraft_command_center.gif">

### Command Center Components

We'll build our Command Centers out of components that can be replaced or extended. This approach should promote borrowing open-source ideas from each other. Below is the current component layout: up for reconfiguration and debate!

<img src = " images/command_center_components.jpg">

## Challenge

### Basic Goals

Setting up your command center: to build momentum, we recommend doing the least amount of effort to get through steps 1-3 and then iterate through them.

1. Store your transactions in a DB of some kind
2. Create a view for your transactions i.e. app, chat or web-page
3. Create a GitLab Tutorial for setting up your Command Center. See the [Starter Challenge example](https://gitlab.com/offerzen-beta-community/investec-programmable-banking/programmable-card-starter-challenge).

### Stretch Goals
Once your basic setup is running nicely, you'll start deplyoying your Command Center's capabilities :)

1. Add ability to write to your DB from your Frontend e.g. categorising transactions necessary/luxury, mine/not mine...
2. Create a realtime budget interface i.e. "You've spent X on luxury this month."

## Command Center Deployments
Projects built by the community and demo'd at the weekly Beta Community Founder Get Together.

[Upcoming community demo roster](https://gitlab.com/offerzen-beta-community/investec-programmable-banking/command-center/-/blob/master/community_demo_roster.md)

|App Repo|App Demo|Description|Tech Stack|Author|
|-|-|-|-|-|
| [PDB Investec Transaction Insights](https://gitlab.com/grimx13/pdb-investec-transaction-insights)|[<img src = "/images/youtube_logo.png">](https://youtu.be/gAiP--sk4U8)| This project utilises AWS Serverless and managed infrastructure to deliver transaction data to a Google sheet where I can draw insights from in near real time | *NodeJS*, *Python* | *[pieterdb](https://gitlab.com/grimx13)* |
| [Repo: OfferZen's Spend Tracker](https://github.com/offerzen/programmable-banking-glow) |[<img src = "/images/youtube_logo.png">](https://youtu.be/1dGC5E8GGQM)| This repo contains source code for our first iteration of a team spending dashboard, as demonstrated in the community update on 19 March 2020. | *JavaScript* |*[@jethrof](https://gitlab.com/jethrof)* & [@jeriko1](https://gitlab.com/jeriko1)|
| Singularity|[<img src = "/images/youtube_logo.png">](https://youtu.be/N6M4tE_KhIk)|Info management app, transaction logger, auto-create transaction with Investec Beta, charts to display spending. Third party lib: "QtWebApp HTTP Server in C++". | *C++* |*[@lcoetzer](https://gitlab.com/lcoetzer)*|
| Transappenate|[<img src = "/images/youtube_logo.png">](https://youtu.be/PAgcFV0wHjc)| A mobile app for storing and cateogrising transactions. | *Appenate* |*[@matthew.alport](https://gitlab.com/matthew.alport)*|
| Receipt Scanner|[<img src = "/images/youtube_logo.png">](https://youtu.be/0yVRTSd19Ac)| Simple app to fire off messages from Go through Firebase Cloud Messenger. | *Go, Firebase Cloud Messaging* |*[@brian.entersekt](https://gitlab.com/brian.entersekt)*|
| [InvestecPOC](https://gitlab.com/wernerpereira/InvestecPOC)|[<img src = "/images/youtube_logo.png">](https://youtu.be/3HDNL5CVwDs)| Mobile App to categorise expenses. | *C#*, *Swift* |*[@WernerPereira](https://gitlab.com/wernerpereira)*|
| [Ur Command Center](https://gitlab.com/dale10/ur-command-center)|[<img src = "/images/youtube_logo.png">](https://youtu.be/addbahzP1ks)| Infrastructure to save transactions into S3. The idea is that S3 is the source of truth and this can be extended to trigger processing on object creation. That will come in a future iteration. | *AWS*, *Terraform*, *Lambda*, *S3*, *Grafana* |*[Dale Tristram @dale10](https://gitlab.com/dale10)*|
| [Investec Logs Functions - NodeJS/Firebase](https://github.com/JeremyWalters/investec-logs-functions) AND [Investec Logs Web - VueJS](https://github.com/JeremyWalters/investec-logs-web)|[<img src = "/images/youtube_logo.png">](https://youtu.be/Hkv8qeScXQ0)| System to log transactions to Google Firebase using NodeJS and a frontend view with VueJS. | *Firebase* |*[@JeremyWalters](https://github.com/JeremyWalters)*|
| [Twatbot](repolink)|[<img src = "/images/youtube_logo.png">](https://youtu.be/E-JPH0R4UU0)| Description. | *WhatsApp, Twilio* |*[@Dave Saunders](ADD_AUTHOR_DEV_PROFILE)*|
| [Payments Splitter](repolink)|[<img src = "/images/youtube_logo.png">](https://youtu.be/qkFFE3aIGZc)| An app that let's you split the bill for a transaction with a friend using their email address. | *Node, AWS* |*[@Yashu Tanna](yashutanna @yashutanna)*|
| [Purple Pigger](repolink)|[<img src = "/images/youtube_logo.png">](https://youtu.be/5xiRrJbblc8?t=2841)| Linked to the beforeTransaction function, PP checks all transactions (for now) and approves or declines them, to help you control budgets in certain periods. Keeping those wild nights, not too wild. I keep a mental count of my daily spending and how it affects my budget. Now I can get a machine to do it. Basically I'm lazy!. | *Firebase, Svelte* |*[@kamogelo.sebopelo](https://gitlab.com/kamogelo.sebopelo)*|
| [Investec Oracle](https://gitlab.com/bezchristo/investec-command-center)|[<img src = "/images/youtube_logo.png">](https://youtu.be/tnpsjOFbkco?t=295)| What it does: The goal was to create a decentralised API to handle incoming beforeTransaction and afterTransaction requests before storing the data. This allows you to execute logic prior to storing the data and before validating transactions. Why create it? The main goal was to allow for validation logic on a transaction based on externally defined criteria, eg: limit daily spend, limit per transaction spend etc. Also, this provided an authenticated basecamp on which to build logic.  | *Google Cloud Platform (Cloud functions, pub/sub, Firestore), Twillio, React, Zapper* |*[@bezchristo](https://gitlab.com/bezchristo)*|
| [<img src = "https://i.imgur.com/CEnasl9.jpg">](http://hankapp.co.za/)|[<img src = "/images/youtube_logo.png">](https://youtu.be/3tYfpc_rjvU?t=1202)| Hank is banking done right. Imagine a world where banking is an intuitive pleasure. It's our mission to make that world a reality. As banks open up their API's we aim to unlock their utility for the people. | *Flutter, Firebase* |*[@Chris.Fraser](https://gitlab.com/Chris.Fraser)*|
| [Decentralised API](repolink)|[<img src = "/images/youtube_logo.png">](https://youtu.be/LrnBHsY55uA?t=636)| What it does: Routes data through cloud functions to Google pub/sub, to which I can add multiple subscriptions for different applications. Why create it? To serve as a base for all transactions to flow through and to which different applications can connect to to receive transaction data. I also wanted to have the ability to replay transactions, which Google pub/sub provides and make it easy for other users to be able to spin up their own command center with a few clicks. | *Google Cloud Platform, Laravel* |*[@cwbmuller](https://gitlab.com/cwbmuller)*|
| [InvestecCMD](repolink)|[<img src = "/images/youtube_logo.png">](https://youtu.be/aqZotFl9fQw?t=669)| What it does: Sync transactions to Firestore as they come in. From Firestone, you can view you transactions in the iOS app as well as details of the transactions. You will also receive pushes when transactions are approved to the iOS App. Why create it? Great opportunity to learn how the Investec APIs works & to cut my teeth on a bunch of new techs I been dying to play with: firebase, cloud functions. typescript.. | *Native iOS, Swift, Firebase (Firestore, Cloud Functions)* |*[@WarrenFoxley](https://gitlab.com/WarrenFoxley)*|
| [Programmable Banking Rule (PBR)](repolink)|[<img src = "/images/youtube_logo.png">](https://youtu.be/aqZotFl9fQw?t=1859)| What it does: Allows the creation of rules that can be used at present for accepting/declining a transaction. Why create it?  Most banking apps only allow hard limits to be set on spend. The idea with this is to put the account holder in charge of the rules of the card.. | *.Net Core, Blazor WebAssembly, Warewolf, Sql DB* |*[@HagashenNaidu](https://gitlab.com/HagashenNaidu)*|
| [Investec Query Bot](https://docs.google.com/presentation/d/1CWsEj7uf2529mm2qDhH4BpckhALFIalXhcDvr4L_x74/edit#slide=id.g7757fe7c3f_0_105)|[<img src = "/images/youtube_logo.png">](https://youtu.be/DKV-4M4a6CE?t=559) | What it does: It takes a user’s input, defines their intent, extracts queryable information, and generates a query to the DB. Eg. Show me all my transactions in Cape Town above 400 during June. Why create it? I was unsure of what to do with the card data, so figured why not let the user decide what they want to do with it. | *Swift UI (iOS), Ngrok, RASA NLP/U, SQLAlchemy, Python* |*[@lebo0](https://gitlab.com/lebo0)*|
| [Paper Budget](https://docs.google.com/presentation/d/11mcO96L9E6iWscG9ycO_Gy4wc90PY6E5N7SPrOjMhL8/edit#slide=id.g7757fe7c3f_0_105)|[<img src = "/images/youtube_logo.png">](https://youtu.be/DKV-4M4a6CE?t=1)| What it does: Sync transactions to YNAB budget and categorize them. Why create it? Keep budget up to date without manual intervention. | *Starlette, React and SQLite* |*[@ferdis](https://gitlab.com/ferdis)*|
| Transacational Insights, [power-bi-template](https://github.com/dalion619/programmable-banking-power-bi-template), [investec-openbanking-dotnet](https://github.com/dalion619/investec-openbanking-dotnet), [cf-worker](https://github.com/dalion619/programmable-banking-cf-worker)|[<img src = "/images/youtube_logo.png">](youtubelink)| Data mining bank account transactions for meaningful insight. Low code approach that non-devs can use. | *PowerBI, Cloudflare, Azure Functions, Investec Open API* |*[@dalion619](https://gitlab.com/https://github.com/dalion619/)*|
| [Repo](repolink)|[<img src = "/images/youtube_logo.png">](youtubelink)| Description. | *Tech_Tools* |*[@author](https://gitlab.com/author)*|

### Process for adding your Command Center to the table above
*  Create a repo for your code under your personal GitLab profile
*  Edit the table below to add your project and submit a merge request
*  Ping the community team on OfferZen Community Slack to review your merge request :)


## Some Useful Resources

### Prototyping tools
- [ngrok - secure introspectable tunnels to localhost](https://ngrok.com/)

### Web App
- [Ruby on Rails | A web-application framework](https://rubyonrails.org/)

### Database / Storage

- [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine)
- [InfluxDB](https://www.influxdata.com/)
- [RethinkDB](https://rethinkdb.com/)

### Front-end
- [VueJS](https://vuejs.org/)
- [ReactJS](https://reactjs.org/)

### Chat/Chatbots

#### Chat Interfaces

- [Telegram Bots: An introduction for developers](https://core.telegram.org/bots)
- [Facebook Messenger: Chatfuel](https://chatfuel.com/)
- [Slack Bots API](https://api.slack.com/bot-users)

#### Dialogflow - NLP

If you want to create chat logic so that you can interact with your chatbot via text, this is a great platform.

- [Basic Tutorial](https://developers.google.com/actions/dialogflow/first-app) 
- [Website](https://dialogflow.com/) 
- [Sample Apps](https://dialogflow.com/docs/examples/) 
- [Starter example with API integration](https://dialogflow.com/docs/getting-started/basic-fulfillment-conversation) 
- [Crafting a Conversation](https://developers.google.com/actions/design/walkthrough#write_dialogs)

#### Other NLP Solutions
- [Wit.ai](https://wit.ai/) 
- [Rasa](http://rasa.com/) 
