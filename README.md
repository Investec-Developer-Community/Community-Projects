# Investec Programmable Banking Community Projects

`Let's make Open Banking a reality by building, sharing and connecting!`

👉 [community challenges:](https://gitlab.com/offerzen-beta-community/investec-programmable-banking/command-center/-/blob/master/community_challenges.md) If you're looking for something to build, or want to challenge the community to build something.

## Open source repos: Open API

| Open Source Repo | Description | Tech Stack | Author |
| - | - | - | - |
| [investec-openbanking-dotnet](https://github.com/dalion619/investec-openbanking-dotnet) | C# Open API wrapper.  | *C#* | @dalion619 |
| [Java Wrapper for Investec Programmable Banking Open API](https://gitlab.com/vchegwidden/investec-openbanking-java) | Java Open API wrapper.  | *Java* | @vchegwidden |
| [investec-openbanking-python](https://gitlab.com/vchegwidden/investec-openbanking-python) | Python Open API Wrapper. | *Python* | @vchegwidden |


## Open source repos: programmable card

| Open Source Repo | Description | Tech Stack | Author |
| - | - | - | - |
| [pdb-investec-transaction-insights](https://gitlab.com/grimx13/pdb-investec-transaction-insights) | Store programmable card transactions in Google Sheet | *AWS Serverless, Google Sheets* | @grimx13 |
| [programmable-banking-glow](https://github.com/offerzen/programmable-banking-glow) | First iteration of a team spending dashboard. | *JS, Google Script* | @jethrof @jeriko1 |
| [InvestecPOC](https://gitlab.com/wernerpereira/InvestecPOC) | Store programmable card transactions in S3. Can be extended to trigger processing on object creation. | *C#*, *Swift* | @WernerPereira |
| [ur-command-center](https://gitlab.com/dale10/ur-command-center) | Infrastructure to save programmable card transactions into S3. | *C#*, *Swift* | @dale10 |
| [investec-logs-functions](https://github.com/JeremyWalters/investec-logs-functions) | Store programmable card transactions in Firebase. | *JS, Firebase* | [@JeremyWalters](https://github.com/JeremyWalters/) |
| [investec-logs-web](https://github.com/JeremyWalters/investec-logs-web) | A Vue frontend for Firebase (builds on [investec-logs-functions](https://github.com/JeremyWalters/investec-logs-functions)  | *Vue* | [@JeremyWalters](https://github.com/JeremyWalters/) |
| [investec-command-center](https://gitlab.com/bezchristo/investec-command-center) | Process investec programmable card transactions via GCP services  | *GCP, JS* | @bezchristo |
| [programmable-banking-rules](https://gitlab.com/HagashenNaidu/programmable-banking-rules) | A Blazor WebAssembly app that uses a Warewolf back-end to allow the customization of rules for accepting/declining transactions using Investec's Programmable Banking platform.  | *Blazor WebAssembly, Warewolf* | @HagashenNaidu |
| [ynab-sync](https://github.com/ferdis/ynab-sync) | Sync programmable banking card transactions with YNAB.  | *YNAB, Python.* | [@ferdis](https://github.com/ferdis) |
| [programmable-banking-power-bi-template](https://github.com/dalion619/programmable-banking-power-bi-template) | Sync programmable banking card transactions with PowerBI.  | *PowerBI* | @dalion619 |
| [programmable-banking-cf-worker](https://github.com/dalion619/programmable-banking-cf-worker) | Cloudflare worker.  | *Cloudflare* | @dalion619 |
|[Go Backend](https://github.com/donohutcheon/gowebserver)|Go backend for programmable card transactions management.|*Go*|@donohutcheon|
|[React Frontend](https://github.com/donohutcheon/reactwebclient)|React frontend for programmable card transactions management.|*React*|@donohutcheon|


## Demos

We meet every Thursday at 6:30pm over Zoom to see demos from community members. Come support us :)!

| <img src = "/images/youtube_logo.png"> Demo | Open Source Repo | Description | Tech Stack | Author |
| ------ | ------ | ------ | ------ | ------ |
|[PDB Investec Transaction Insights](https://youtu.be/gAiP--sk4U8)|[<img src = "https://gitlab.com/grimx13/pdb-investec-transaction-insights/-/raw/master/images/investec_logger.png" width="200">](https://gitlab.com/grimx13/pdb-investec-transaction-insights)| This project utilises AWS Serverless and managed infrastructure to deliver transaction data to a Google sheet where I can draw insights from in near real time | *NodeJS*, *Python* | @grimx13 |
|[OfferZen's Spend Tracker](https://youtu.be/1dGC5E8GGQM)|[JS and Google Script Repo](https://github.com/offerzen/programmable-banking-glow)| This repo contains source code for our first iteration of a team spending dashboard, as demonstrated in the community update on 19 March 2020. | *JavaScript* |@jethrof @jeriko1|
|[Singularity](https://youtu.be/N6M4tE_KhIk)||Info management app, transaction logger, auto-create transaction with Investec Beta, charts to display spending. Third party lib: "QtWebApp HTTP Server in C++". | *C++* |*[@lcoetzer](https://gitlab.com/lcoetzer)*|
|[Transappenate](https://youtu.be/PAgcFV0wHjc)|| A mobile app for storing and cateogrising transactions. | *Appenate* |*[@matthew.alport](https://gitlab.com/matthew.alport)*|
|[Receipt Scanner](https://youtu.be/0yVRTSd19Ac)|| Simple app to fire off messages from Go through Firebase Cloud Messenger. | *Go, Firebase Cloud Messaging* |*[@brian.entersekt](https://gitlab.com/brian.entersekt)*|
|[InvestecPOC](https://youtu.be/3HDNL5CVwDs)|[<img src = "https://gitlab.com/wernerpereira/InvestecPOC/-/raw/master/main_architechture.png" width="200">](https://gitlab.com/wernerpereira/InvestecPOC)| Mobile App to categorise expenses. | *C#*, *Swift* |@WernerPereira|
|[Ur Command Center](https://youtu.be/addbahzP1ks)|[<img src = "https://gitlab.com/dale10/ur-command-center/-/raw/master/assets/CCArchitecture.png" width="200">](https://gitlab.com/dale10/ur-command-center)| Infrastructure to save transactions into S3. The idea is that S3 is the source of truth and this can be extended to trigger processing on object creation. That will come in a future iteration. | *AWS*, *Terraform*, *Lambda*, *S3*, *Grafana* |*[Dale Tristram @dale10](https://gitlab.com/dale10)*|
|[Investec Logs](https://youtu.be/Hkv8qeScXQ0)|[investec-logs-functions](https://github.com/JeremyWalters/investec-logs-functions) AND [investec-logs-web](https://github.com/JeremyWalters/investec-logs-web)| System to log transactions to Google Firebase using NodeJS and a frontend view with VueJS. | *Firebase* |@JeremyWalters|
|[Payments Splitter](https://youtu.be/qkFFE3aIGZc)|| An app that let's you split the bill for a transaction with a friend using their email address. | *Node, AWS* |*[@Yashu Tanna](yashutanna @yashutanna)*|
|[Purple Pigger](https://youtu.be/5xiRrJbblc8?t=2841)|| Linked to the beforeTransaction function, PP checks all transactions (for now) and approves or declines them, to help you control budgets in certain periods. Keeping those wild nights, not too wild. I keep a mental count of my daily spending and how it affects my budget. Now I can get a machine to do it. Basically I'm lazy!. | *Firebase, Svelte* |*[@kamogelo.sebopelo](https://gitlab.com/kamogelo.sebopelo)*|
|[Investec Oracle](https://youtu.be/tnpsjOFbkco?t=295)|[<img src = "https://gitlab.com/bezchristo/investec-command-center/-/raw/master/Investec.jpg" width="200">](https://gitlab.com/bezchristo/investec-command-center)| What it does: Routes data through cloud functions to Google pub/sub, to which I can add multiple subscriptions for different applications. Why create it? To serve as a base for all transactions to flow through and to which different applications can connect to to receive transaction data. I also wanted to have the ability to replay transactions, which Google pub/sub provides and make it easy for other users to be able to spin up their own command center with a few clicks.  | *Google Cloud Platform (Cloud functions, pub/sub, Firestore), Twillio, React, Zapper* |*[@bezchristo](https://gitlab.com/bezchristo)*|
|[HankApp](https://youtu.be/3tYfpc_rjvU?t=1202)|| Hank is banking done right. Imagine a world where banking is an intuitive pleasure. It's our mission to make that world a reality. As banks open up their API's we aim to unlock their utility for the people. | *Flutter, Firebase* |*[@Chris.Fraser](https://gitlab.com/Chris.Fraser)*|
|[Decentralised API](https://youtu.be/LrnBHsY55uA?t=636)|| What it does: The goal was to create a decentralised API to handle incoming beforeTransaction and afterTransaction requests before storing the data. This allows you to execute logic prior to storing the data and before validating transactions. Why create it? The main goal was to allow for validation logic on a transaction based on externally defined criteria, eg: limit daily spend, limit per transaction spend etc. Also, this provided an authenticated basecamp on which to build logic. | *Google Cloud Platform, Laravel* |@cwbmuller|
|[InvestecCMD](https://youtu.be/aqZotFl9fQw?t=669)|| What it does: Sync transactions to Firestore as they come in. From Firestone, you can view you transactions in the iOS app as well as details of the transactions. You will also receive pushes when transactions are approved to the iOS App. Why create it? Great opportunity to learn how the Investec APIs works & to cut my teeth on a bunch of new techs I been dying to play with: firebase, cloud functions. typescript.. | *Native iOS, Swift, Firebase (Firestore, Cloud Functions)* |@WarrenFoxley|
|[Programmable Banking Rule (PBR)](https://youtu.be/aqZotFl9fQw?t=1859)|[<img src = "https://i.imgur.com/rmifZuh.png" width="200">](https://gitlab.com/HagashenNaidu/programmable-banking-rules)| What it does: Allows the creation of rules that can be used at present for accepting/declining a transaction. Why create it?  Most banking apps only allow hard limits to be set on spend. The idea with this is to put the account holder in charge of the rules of the card.. | *.Net Core, Blazor WebAssembly, Warewolf, Sql DB* |@HagashenNaidu|
|[Investec Query Bot](https://youtu.be/DKV-4M4a6CE?t=559) || What it does: It takes a user’s input, defines their intent, extracts queryable information, and generates a query to the DB. Eg. Show me all my transactions in Cape Town above 400 during June. Why create it? I was unsure of what to do with the card data, so figured why not let the user decide what they want to do with it. | *Swift UI (iOS), Ngrok, RASA NLP/U, SQLAlchemy, Python* |@lebo0|
|[Paper Budget](https://youtu.be/DKV-4M4a6CE?t=1)|[<img src = "https://i.imgur.com/o0s176D.png" width="200">](https://github.com/ferdis/ynab-sync)| [Slide deck](https://docs.google.com/presentation/d/11mcO96L9E6iWscG9ycO_Gy4wc90PY6E5N7SPrOjMhL8/edit#slide=id.g7757fe7c3f_0_105): What it does: Sync transactions to YNAB budget and categorize them. Why create it? Keep budget up to date without manual intervention. | *Starlette, React and SQLite* |@ferdis|
|[Toshigotchi](https://www.youtube.com/watch?v=KEVJDwFvO_s)||[Slide deck](https://docs.google.com/presentation/d/1TmDkEkm6mM5yEW_A91EzmFRzayzupH9th3WGVQBLnIE/edit) - What it is: Create an emotional connection to your spending habits. Money is a very emotionally charged topic and there we should be ways to make it more personable & relatable so we can react better to various financial circumstances.||@jacousteau|
|[Transacational Insights](https://www.youtube.com/watch?v=R0i_UntwiIE)|[programmable-banking-power-bi-template](https://github.com/dalion619/programmable-banking-power-bi-template) AND [investec-openbanking-dotnet](https://github.com/dalion619/investec-openbanking-dotnet) AND [programmable-banking-cf-worker](https://github.com/dalion619/programmable-banking-cf-worker)| [Slide deck](https://docs.google.com/presentation/d/1XBhGZWm9jbvhSrpZJhqLMb6cuycb8UOYG8UFxtlUN88/edit) Data mining bank account transactions for meaningful insight. Low code approach that non-devs can use. | *PowerBI, Cloudflare, Azure Functions, Investec Open API* |*[@dalion619](https://gitlab.com/https://github.com/dalion619/)*|
|[Vanilla Transaction Dashboard]()|[Go Backend](https://github.com/donohutcheon/gowebserver) AND [React Frontend](https://github.com/donohutcheon/reactwebclient)| [Slide deck](https://docs.google.com/presentation/d/1kBH-G9Zv5yPxfdevV6IXQ3Ithiss2aVihVOcM-cfdIc/edit#slide=id.g7757fe7c3f_0_105) - Why create it? Learn stuff: Primarily Go. But also React, Heroku. Build a dashboard to record my spending habits. Create a platform upon to build something cooler.  | *React, Go, Heroku* |@donohutcheon|
|[demo](youtubelink)| description. |[<img src = "/imagelink.png" width="200">](repolink)| *Tech_Tools* |*[@author](https://gitlab.com/author)*|

## Some Useful Resources

### Auth

- [Cloudflare Auth0](https://developers.cloudflare.com/workers/tutorials/user-auth-with-auth0)
- [auth0.com](auth0.com)

### CI/CD

- [GitLab CI/CD | GitLab](https://docs.gitlab.com/ee/ci/)
- [Github actions](https://github.com/features/actions)

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
