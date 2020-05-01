# Programmable Banking Command Center Challenge

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
| [Repo](repolink)|[<img src = "/images/youtube_logo.png">](youtubelink)| Description. | *Tech_Tools* |*[@author](ADD_AUTHOR_DEV_PROFILE)*|

### Process for adding your Command Center to the table above
*  Create a repo for your code under your personal GitLab profile
*  Edit the table below to add your project and submit a merge request
*  Ping the community team on OfferZen Community Slack to review your merge request :)

## Awards

| Award|Winner|
| -------------|-----|
| 🥇 First Command Center Deployment Ever| *[pieterdb](https://gitlab.com/grimx13)* |

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
