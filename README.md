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
Below is a table of Command Centers deployed by Beta Community members

| App Name      |Description    |Language|Author|
| ------------- |-------------| -----|-----|
| [PDB Investec Transaction Insights](https://gitlab.com/grimx13/pdb-investec-transaction-insights)| This project utilises AWS Serverless and managed infrastructure to deliver transaction data to a Google sheet where I can draw insights from in near real time | *NodeJS*, *Python* | *[pieterdb](https://gitlab.com/grimx13)* |
| [App](link)| Description of the command center | *Language* |*@author*|


### Process for adding your Command Center to the table above
*  Create a repo for your code under your personal GitLab profile
*  Edit the table below to add your project and submit a merge request
*  Ping the community team on OfferZen Community Slack to review your merge request :)

## Awards

| Award|Winner|
| -------------|-----|
| First Command Center Deployment Ever| *[pieterdb](https://gitlab.com/grimx13)* |

## Some Useful Resources

### Web App
- [Rails](https://rubyonrails.org/)

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
