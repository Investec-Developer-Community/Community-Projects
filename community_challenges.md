# Community Challenges

The intention with community challenges is to incentivise the creation of "building blocks" in the form of reusable libraries, utilities and code snippets. This should reduce the effort required for others in the community to build personal and business projects.

Challenge acceptors create open source software by completing community challenges, get featured on our Gitlab and Youtube and win cool prizes 👾 💪🏆 

*Contact Ben on [email](https://gitlab.com/offerzen-beta-community/investec-programmable-banking/command-center/-/issues/new) or [Slack](https://app.slack.com/client/T8CRG18UC/D8D0JTUBE) if you have questions.*

## Submit a challenge

- **To submit a new challenge**: Add the challenge to the `Open challenges` table by [editing `this` page](https://gitlab.com/offerzen-beta-community/investec-programmable-banking/command-center/-/edit/master/community_challenges.md), and submit a merge request.
- *Challenges should drive acceptors to create code that is reusable by the rest of the community.*

## Accept a challenge

1. **Accepting a challenge:** Move the challenge into the `Accepted challenges` table, by [editing `this` page](https://gitlab.com/offerzen-beta-community/investec-programmable-banking/command-center/-/edit/master/community_challenges.md), and submit a merge request.
2. **Build and publish code:** Build a solution, submit your code repo and get featured on the community Gitlab.
3. **Demo your solution:** Book a demo at the weekly meetup and get featured on the community Youtube channel.
4. **Claim a reward:** We will reward you with one of the prizes from The Bounty Box.

## Open challenges

These are challenges that are open to challenge acceptors i.e. **you!** Grab 'em while they're hot ;)

### Integrations

| Problem | Challenge | Use Cases |
| - | - | - |
| As a user, it's a pain to import my transactions into Sage One's Accounting software. | Build an integration using the [Sage One API](https://accounting.sageone.co.za/api/1.1.1) | As a user, if I have Programmable Banking, I can easily setup an integration with Sage One to automatically import my transactions. |
| As a user, it's a pain to import my transactions into Xero's Accounting software. | Build an integration using the [Xero API](https://developer.xero.com/) | As a user, if I have Programmable Banking, I can easily setup an integration with Sage to automatically import my transactions. |
| As a user, I want to "chat" with my bank account via Telegram to find out information about my spending habits // As a dev, I'd like to easily be able to enable "conversations" between users and their accounts.  | Telegram chatbot that sends transactions as well as tooling to manage a conversation with the user. | I can now chat with my bank account using Telegram to find out information about my spending, woohoo! / I can easily create programmable banking Telegram chat apps, woohoo! |
| As a user, I want to "chat" with my bank account via WhatsApp to find out information about my spending habits // As a dev, I'd like to easily be able to enable "conversations" between users and their accounts.  | WhatsApp chatbot that sends transactions as well as tooling to manage a conversation with the user. | I can now chat with my bank account using WhatsApp to find out information about my spending, woohoo! / I can easily create programmable banking Telegram chat apps, woohoo! |

### Libraries / wrappers

| Problem | Challenge | Use Cases |
| - | - | - |
| As a dev, I can't get timestamps from the Open API. | Create a library that merges times from card transactions with transactions from the Open API to give exact (where possible) and estimate timestamps to transactions. | I can use the library to enrich transaction data that comes back from the API. |
| As a Go dev, I am hesitant to build an app due to the setup costs. | Build an Open API Go Wrapper | I'm much less hesitant to build awesome apps because there's a great Go wrapper for the API! |
| As an Elixir dev, I am hesitant to build an app due to the setup costs. | Build an Open API Elixir Wrapper | I'm much less hesitant to build awesome apps because there's a great Elixir wrapper for the API! Open API Elixir Wrapper|@theodowling|24 July 2020|

### PoCs

| Problem | Challenge | Use Cases |
| - | - | - |
| As a user, I am hesitant to share my transaction data with app developers. | Create a JavaScript function that anonymises transaction data and sends the data to a centralised DB.| I can use the code script in my Programmable Banking IDE to share my data while keeping anonymity. |
| As a user, I am sensitive about sharing my data for machine learning purposes. | `Epic challenge` Build a [federated learning](https://federated.withgoogle.com/) app that can be used by the rest of the community to train an AI on transaction data, while keeping a client anonymous. | I can download an app that shares the learning data from my transactions while keeping my actual data and identity abstracted and anonymous, respectively. |
| As a user, I can't go full Minority report with my bank account. <img src = "https://memegenerator.net/img/instances/71965450.jpg" width="150"> | Create an augmented reality app so that a user can engage with their bank account in 3d virtual space. | As a user, I'm inside the computer! |
| As a user, I don't want to interact with my bank account/budget through a screen. | Build a reusable voice module that can be used to build a watch app / Google Home app that allows you to issue the commands. | As a user I can ask my voice assistant: Categorize transaction just made. What was my last transaction? Give me a list of recent transactions, or transactions on a specific day. What was my last payment made to merchant? value/category/when. When was my last payment to merchant? |
| As a developer I want to be able to classify and reclassify transactions based on historical classifications which should affect future classifications. | Create a ML model that can learn from existing classifications and classify future transactions accordingly. Given that transaction descriptions change and may contain strange characters you will need to use some form of ML. See this [blog post](https://blog.plaid.com/making-sense-of-messy-data/) from Plaid for some inspiration. The function should output an array of classifications with probabilities for each - Meaning multi-classification. | Myself and other developers can use the lib/api in projects to classify and reclassify transactions inteligently per user.|

## Accepted challenges

| Problem | Challenge | Use Cases | Challenge Acceptor | Due |
|-|-|-|-|-|
| As an GraphQL dev, I am hesitant to build an app due to the setup costs. | Build an Open API GraphQL Wrapper | I'm much less hesitant to build awesome apps because there's a great GraphQL wrapper for the API! Open API GraphQL Wrapper|@naartjie|14 August 2020|
| `R10k challenge 🤑` As a business, it's a pain for us to import our transactions into Sage's Business Accounting software. | Build an integration using the [Sage Business API](https://www.sage.com/en-za/sage-business-cloud/accounting/developer-api/) that enables a financial manager to click a button to sync transactions in Sage with Investec transactions. You will need to reformat the transaction data to match Sage's format. Make a clear guide on how to set this up for a user. | As a user, if I have Programmable Banking, I can easily setup an integration with Sage Business to automatically import my transactions. |@imraanp|30 July|
| As a user, it's hard to keep track of my daily allowance. // As a dev, I'd like to help a user have better visibility into their spending. | `Special challenge` Create code/software for a [magic mirror](https://youtu.be/BR_yko0gr-Y) that displays your spending habits and gives you advice based on those habits. The code/software needs to be well documented and make it really simple for other devs to build and configure their own magic mirror dashboards. | I can setup a magic mirror in my house so that I can easily be reminded of my current spending allowance. |@theodowling|26 July 2020|
| As a Ruby dev, I am hesitant to build an app due to the setup costs. | Build an Open API Ruby Wrapper | I'm much less hesitant to build awesome apps because there's a great Ruby wrapper for the API! |@jeriko1|24 July 2020|
| As a dev, I can't listen for the event when a transaction is recorded on my bank account. | Build a system that checks an account via the API to find new transactions every minute. Also, create a webhook mechanism to push new transactions to another service.  | I can now set up actions to take place whenever a transaction occurs on my accounts. |@renenw |30 July 2020|

## Completed challenges 🚀

[See community projects.](https://gitlab.com/offerzen-beta-community/investec-programmable-banking/command-center/-/blob/master/README.md)

## The Bounty Box 🏆

| Bounty | Description |
| ------ | ------ |
|![](/images/bounties/offerzenswapgpack.png)|OfferZen Swag Pack|
|![](/images/bounties/djitello.jpg)|[DJI Tello Programmable Drone](https://www.youtube.com/watch?v=_v_RknPrebI). This prize is for epic challenges only.|
|![](/images/bounties/sphero.jpg)|[Sphero SPRK+ Programmer Robot](https://www.youtube.com/watch?v=Yg8LmEkI_0c). This prize is for epic challenges only.|
|![](/images/bounties/dell27.jpeg)![](/images/bounties/pi4.jpg)|[Magic Mirror Kit: Raspberry Pi 4 Model B 8GB and Dell 27" monitor](https://www.youtube.com/watch?v=npzRf5wuIB0). This prize is for the Magic Mirror challenge only.|


## FAQs
**Can multiple people/teams work on the same challenge?**
Generally a challenge will be awarded to one person or team at a time, but that doesn't stop teams from combining forces. We will try keep it to one solution per challenge though.

**What is an epic challenge?**
An `epic challenge` is harder and therefore earns you the option to win epic challenge prizes. A `special challenge` unlocks specific/special prizes. See prize descriptions for epic and special prizes.

**May I work in a team on a challenge?**
Yes, challenge acceptors may work in teams. You will need to share prizes.

**How long do I have to complete a challenge?**
Your team has 14 days to complete the challenge.

**How is the quality of the code evaluated?**
At a minimum your code must run and be reusable by another member of the community. You must submit simple steps to set up your code. We'll be improving the evaluation criteria over time.
