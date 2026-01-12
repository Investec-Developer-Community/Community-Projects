# 🌟 Investec Developer Community Projects

A **community‑curated directory** of open‑source tools, demos, and apps built with **Investec APIs** and **Programmable Banking**.

> This repo is the “show‑and‑tell” corner of the community — come browse, borrow ideas, and ship something great.

**Heads-up:** projects listed here are created by the community and are **not official Investec products**. Always review code before running it and prefer **Sandbox** when testing.

[![GitHub License](https://img.shields.io/github/license/investec-developer-community/community-projects)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=round-square)](../../pulls)

---

## 🧭 Start here (pick your quest)

### 🚀 I’ve built something — I want it featured
1. Submit your project via the **Build Submission Form**  
   👉 [Submit a build](../../issues/new?template=build-submission.yml)
2. After review, it will appear on the **Community Showcase**  
   👉 [View the showcase](https://investec-developer-community.github.io/Community-Projects/)

**No build is too small.** The community learns fastest when people share their “rough diamonds” — not just polished gems.

### 🧪 I want to build something — where do I begin?
- [Official API products & docs](https://developer.investec.com/za/api-products)
- [Community wiki](https://investec.gitbook.io/programmable-banking-community-wiki) (tutorials, templates, events)
- [Build events & challenges](https://investec.gitbook.io/programmable-banking-community-wiki/get-building/build-events)

### 🧰 I want to improve this repo
- Fix a broken link, improve a description, or add a new project entry: 👉 [Open a pull request](../../pulls)

---

## 🔒 Security & privacy (because: bank)

Please **do not submit or link to projects that include**:
- API keys, secrets, tokens, private certs (even “temporary” ones)
- personal/customer data (including screenshots with sensitive info)
- instructions that encourage abuse of the platform

If your project needs credentials, use a `.env.example` and document setup for **Sandbox** safely.

---

## ✅ What makes a top‑class submission?

A project is easiest to review (and most likely to get attention) when it includes:
- a one‑line **tagline** (“what is this?”)
- clear **setup/run** steps in the project README
- the **tech stack** + what Investec capability it uses (Accounts API / Card / both)
- a **screenshot/GIF** (devs are visual creatures)
- a **license** (so others know what they can do with it)

---

## 🗂️ Contents

- [Browse by use case](#browse-by-use-case)
  - [Budgeting & personal finance](#budgeting-personal-finance)
  - [Business & team finance](#business-team-finance)
  - [Spend controls & subscriptions](#spend-controls-subscriptions)
  - [Alerts, logging & monitoring](#alerts-logging-monitoring)
  - [Accounting & exports](#accounting-exports)
  - [Automations & savings](#automations-savings)
  - [AI & categorisation](#ai-categorisation)
  - [Developer tooling, SDKs & local dev](#developer-tooling-sdks-local-dev)
- [Hackathon Build Submissions (archive)](#hackathon-build-submissions-archive)
- [Demos (archive)](#demos-archive)
- [Resources](#resources)
- [Get Involved](#get-involved)

---
<a id="browse-by-use-case"></a>

## 🔎 Browse by use case

This list is **use‑case first** (because “I want to do X” beats “I want to use endpoint Y”).  
Tip: use **Cmd/Ctrl+F** to jump to `Python`, `React`, `Telegram`, etc.

**Legend:** 🏆 = originally submitted as a challenge/bounty entry.

<a id="budgeting-personal-finance"></a>

### 💸 Budgeting & personal finance

| Project | What it does | Tech | Maintainer |
|---|---|---|---|
| [Investec-ActualBudget](https://github.com/sean-gordon/Investec-ActualBudget) | Sync Investec transactions into a self-hosted [Actual Budget](https://actualbudget.org/) instance (includes a web UI). | TypeScript, React, Node.js, Docker | [@sean-gordon](https://github.com/sean-gordon) |
| [openbanking-investec-dashboard](https://github.com/pivendren/openbanking-investec-dashboard) | Configurable dashboard for account/transaction insights. | Blazor WebAssembly, .NET, Azure Functions | [@pivendren](https://github.com/pivendren) |
| [SparaBox](https://github.com/RendaniDau/Sparabox) + [SparaBoxFlutter](https://github.com/RendaniDau/SparaBoxFlutter) | Personal budget app exploring programmable banking. | Spring Boot, Flutter, Android | [@RendaniDau](https://github.com/RendaniDau) |
| 🏆 [InvestEase](https://github.com/Nevvyboi/InvestEase) | Web dashboard using the Sandbox API to view accounts, balances, transactions, and docs. | Web | [@Nevvyboi](https://github.com/Nevvyboi) |
| 🏆 [Financial Budget Monitor](https://github.com/thandhla/Financial-Budget-Monitor) | Web app for tracking and managing personal finances. | Web | [@thandhla](https://github.com/thandhla) |
| 🏆 [Budget Buddy Management](https://github.com/mazhape/budget-buddy-management) | Financial wellness app for budget management and spending tracking. | — | [@mazhape](https://github.com/mazhape) |
| 🏆 [Finance Tracker](https://github.com/Londolani/FinanceTracker) | iOS app to set savings goals linked to accounts/loans and track progress. | iOS | [@Londolani](https://github.com/Londolani) |
| 🏆 [Ascendia](https://github.com/JohannesMogashoa/ascendia) | Early platform to track transactions with lightweight AI insights. | Web | [@JohannesMogashoa](https://github.com/JohannesMogashoa) ([docs](https://ascendia.johannesmogashoa.co.za/)) |
| 🏆 [Investa Transact Analysis](https://github.com/JohannesMogashoa/investa-save) | Summarises transactions and highlights types and amounts. | — | [@JohannesMogashoa](https://github.com/JohannesMogashoa) |
| 🏆 [Investec Senior Tech Hub](https://replit.com/@innoemailbox/SeniorFinanceGuide#drizzle.config.ts) | Financial wellness platform for seniors with accessibility features. | Web (Replit) | Innocent Jackson |
| [Zebra Finance](https://github.com/davidrmellors/zebra-finance) | React Native app that auto‑categorises spending + AI chat insights. | React Native | [@davidrmellors](https://github.com/davidrmellors) |
| [AI Budget Tracking](https://offerzenbv.sharepoint.com/:x:/r/sites/SpreadsheetBanking/_layouts/15/doc2.aspx?sourcedoc=%7BCFC738F9-7D3D-4CEC-8589-25EFA7A82CD6%7D&file=Spreadsheet%20Banking.xlsx&action=default&mobileredirect=true&cid=682de773-383b-479f-a8d2-47380c92cada) | AI‑assisted budget tracking spreadsheet (Spreadsheet Banking). | Spreadsheet | Luyanda Gumede ([download](https://drive.google.com/file/d/1Ng8I0mKufm7UVTlr4bd6ul181Qminj7R/view)) |

<a id="business-team-finance"></a>

### 🏢 Business & team finance

| Project | What it does | Tech | Maintainer |
|---|---|---|---|
| [Team Spend Tracker](https://github.com/Offerzen/roz) | Team spend reconciliation for Investec Business Banking accounts. | Ruby on Rails, PostgreSQL | [@OfferZen](https://github.com/OfferZen) |
| [programmable-banking-glow](https://github.com/offerzen/programmable-banking-glow) | Early iteration of a team spending dashboard. | JavaScript, Google Apps Script | [@OfferZen](https://github.com/OfferZen) |
| 🏆 [SweepPay](https://github.com/Brodreger/SweepPay) | Automates monthly wage calculations and payments (e.g., for domestic workers). | — | [@Brodreger](https://github.com/Brodreger) |
| 🏆 [Nest Bundle](https://github.com/alecshelembe/investec-sandbox-app) | Sandbox-focused banking prototype designed to improve financial operations. | — | [@alecshelembe](https://github.com/alecshelembe) |

<a id="spend-controls-subscriptions"></a>

### 💳 Spend controls & subscriptions

| Project | What it does | Tech | Maintainer |
|---|---|---|---|
| [Subtrack](https://www.subtrack.co.za/) | Subscription management web app built on programmable card rules. | JavaScript, Framer | [@nicbotes](https://github.com/nicbotes) |
| 🏆 [Virtual Card Fortress](https://github.com/petersmythe/investec-virtual-card-fortress) | Moves recurring subscription payments to a separate virtual card. | — | [@petersmythe](https://github.com/petersmythe) |
| [programmable-banking-rules](https://gitlab.com/HagashenNaidu/programmable-banking-rules) | Web app for creating configurable approval/decline rules for transactions. | Blazor WebAssembly, Warewolf | [@HagashenNaidu](https://gitlab.com/HagashenNaidu) |
| [Card Guard](https://dev.azure.com/RiderZebraDevops/blueprints) | Web UI for creating programmable card rules (aimed at non-technical users). | C#, TypeScript, Angular | CSTech ([demo](https://zebrabluebrints.azurewebsites.net/demo)) |

<a id="alerts-logging-monitoring"></a>

### 🔔 Alerts, logging & monitoring

| Project | What it does | Tech | Maintainer |
|---|---|---|---|
| [InvestecPushNotifications](https://github.com/cole-miles/InvestecPushNotifications) | Sends push notifications for new transactions (Pushover) and avoids duplicates. | Node.js, Google Cloud Functions, Firestore | [@cole-miles](https://github.com/cole-miles) |
| 🏆 [Payment Pinger 💸](https://github.com/roberto-aldera/card-payment-notifier) | Sends card payment notifications to Telegram (includes non‑ZAR anomaly detection). | — | [@roberto-aldera](https://github.com/roberto-aldera) |
| 🏆 [Teleidop](https://github.com/mattvanniekerk/teleidop/) | Programmable Card transaction notifications via Telegram. | — | [@mattvanniekerk](https://github.com/mattvanniekerk) |
| [Card-notifier](https://github.com/dominicsanto/card-notifier) | Notifies an external service once a card transaction has completed. | JavaScript | [@dominicsanto](https://github.com/dominicsanto) |
| [investec-logs-functions](https://github.com/JeremyWalters/investec-logs-functions) + [investec-logs-web](https://github.com/JeremyWalters/investec-logs-web) | Logs programmable card transactions to Firebase + provides a Vue UI to view them. | JavaScript, Vue, Firebase | [@JeremyWalters](https://github.com/JeremyWalters) |
| [InvestecPOC](https://gitlab.com/wernerpereira/InvestecPOC) | Stores programmable card transactions in S3 (extendable for event triggers). | C#, Swift | [@wernerpereira](https://gitlab.com/wernerpereira) |
| [ur-command-center](https://gitlab.com/dale10/ur-command-center) | Infrastructure to store programmable card transactions in S3 (source of truth pattern). | C#, Swift | [@dale10](https://gitlab.com/dale10) |
| [investec-command-center](https://gitlab.com/bezchristo/investec-command-center) | Processes programmable card transactions via GCP services. | GCP, JavaScript | [@bezchristo](https://gitlab.com/bezchristo) |
| [Command center bridge](https://gitlab.com/fisher.adam.online/command-center-bridge) | Single approval “bridge” for programmable banking solutions (secure transaction forwarding). | AWS CDK, TypeScript | [@fisher.adam.online](https://gitlab.com/fisher.adam.online) |

<a id="accounting-exports"></a>

### 🧾 Accounting & exports

| Project | What it does | Tech | Maintainer |
|---|---|---|---|
| 🏆 [Card To Sheet Sync](https://github.com/dominicsanto/card-to-sheet-sync) | Sends card transactions to a Google Sheets document. | — | [@dominicsanto](https://github.com/dominicsanto) |
| [pdb-investec-transaction-insights](https://gitlab.com/grimx13/pdb-investec-transaction-insights) | Stores card transactions in Google Sheets. | AWS Serverless, Google Sheets | [@grimx13](https://gitlab.com/grimx13) |
| [Investec to Sage One](https://github.com/imraanparker/investec-to-sage-one) | Sync Investec transactions with Sage One accounting. | Python, FastAPI (plus Sage API) | [@imraanparker](https://github.com/imraanparker) |
| [ynab-sync](https://github.com/ferdis/ynab-sync) | Sync programmable card transactions with YNAB. | Python, YNAB | [@ferdis](https://github.com/ferdis) |
| [programmable-banking-power-bi-template](https://github.com/dalion619/programmable-banking-power-bi-template) | PowerBI template for programmable card transactions. | PowerBI | [@dalion619](https://github.com/dalion619) |
| [Telegram to Wave Receipt Capture](https://gitlab.com/benblaine/bill/) | Telegram reminder workflow for capturing receipts into Wave. | Telegram Bot API, Email, Wave Receipts | [@benblaine](https://gitlab.com/benblaine) |

<a id="automations-savings"></a>

### ⚙️ Automations & savings

| Project | What it does | Tech | Maintainer |
|---|---|---|---|
| 🏆 [Swipe 'n Save](https://github.com/petersmythe/investec-swipe-n-save) | Demo integrating the Private Banking API (OAuth2) with the Programmable Card API. | — | [@petersmythe](https://github.com/petersmythe) |
| [The Maintainer](https://github.com/rijnhardtkotze/investec-maintain-balance) | Automatically maintains balances (e.g., moves money into savings frequently). | Python | [@rijnhardtkotze](https://github.com/rijnhardtkotze) |
| [Savings Roulette](https://github.com/FrikkieSnyman/investec-tools/blob/master/src/cards/savingsRoulette.js) | Random transaction rejections funnelled into savings (you control the rules). | JavaScript | [@FrikkieSnyman](https://github.com/FrikkieSnyman) |
| 🏆 [CarbonCooler](https://github.com/Brodreger/CarbonCooler) | Tracks the carbon footprint of fuel purchases and supports carbon offset initiatives. | — | [@Brodreger](https://github.com/Brodreger) + [@petersmythe](https://github.com/petersmythe) |
| 🏆 [Automate the App](https://github.com/petersmythe/investec-automate-the-app) | OCR + regex tool to streamline capturing beneficiary details (Android). | — | [@petersmythe](https://github.com/petersmythe) |

<a id="ai-categorisation"></a>

### 🧠 AI & categorisation

| Project | What it does | Tech | Maintainer |
|---|---|---|---|
| [Investec Query Bot](https://github.com/lebomorojele/investecbot) | Natural-language querying over Programmable Card transactions. | Python (Flask, SQLAlchemy, Rasa) | [@lebomorojele](https://github.com/lebomorojele) |
| [ZATechRadio](https://github.com/Vutlhari/paycat) | AI-powered transaction categoriser. | — | [@Vutlhari](https://github.com/Vutlhari) |
| 🏆 [Fintrackr](https://github.com/HappyDevs1/fintrackr) | AI-powered money tracker predicting future balance and spending patterns. | — | [@HappyDevs1](https://github.com/HappyDevs1) |
| [Investec API MCP Server](https://github.com/acambitsis/mcp-investec-sapb-simple) | Simple MCP server for interacting with Investec’s API (built for auditability and security). | — | [@acambitsis](https://github.com/acambitsis) |
| [Investec SAPB MCP Server](https://github.com/acambitsis/investec-sapb-mcp) | Python MCP server for AI integration with Investec’s API. | Python | [@acambitsis](https://github.com/acambitsis) |

<a id="developer-tooling-sdks-local-dev"></a>

### 🧰 Developer tooling, SDKs & local dev

#### 🧪 Sandboxes & local development

| Project | What it’s for | Tech | Maintainer |
|---|---|---|---|
| [Mock API Simulator](https://github.com/devinpearson/programmable-banking-sim) | Local simulator of the Programmable Banking APIs for development and demos. | JavaScript / Node.js | [@devinpearson](https://github.com/devinpearson) |
| [CLI for Card Code](https://github.com/devinpearson/ipb) | CLI to deploy Programmable Card code, plus an emulator for local testing. | JavaScript / Node.js | [@devinpearson](https://github.com/devinpearson) |

#### 📦 SDKs & wrappers

| Project | Language | What it gives you | Maintainer |
|---|---|---|---|
| [Zebra.NET](https://github.com/rudepiece/Zebra.NET) | C# / .NET | .NET client library for the Investec OpenAPI. | [@rudepiece](https://github.com/rudepiece) |
| [investec-api (npm)](https://www.npmjs.com/package/investec-api) | JavaScript | NPM package for interacting with Investec's Open API. | [@FrikkieSnyman](https://github.com/FrikkieSnyman) |
| [investec-openapi](https://github.com/barrymichaeldoyle/investec-openapi) | JavaScript / TypeScript | JavaScript/TypeScript Open API wrapper. | [@barrymichaeldoyle](https://github.com/barrymichaeldoyle) |
| [investec-api-python](https://github.com/tailucas/investec-api-python) | Python | Python client for Investec Programmable Banking. | [@tailucas](https://github.com/tailucas) |
| [investec-openapi-wrapper](https://github.com/GoosenA/ipb-python-wrapper) | Python | Python wrapper for the IPB OpenAPI Personal Banking API. | [@GoosenA](https://github.com/GoosenA) |
| [investec-openbanking-python](https://gitlab.com/vchegwidden/investec-openbanking-python) | Python | Python Open API wrapper (GitLab). | [@vchegwidden](https://gitlab.com/vchegwidden) |
| 🏆 [investec-api-wrapper (PHP)](https://github.com/devNenyasha/investec-api-wrapper) | PHP | PHP wrapper for Investec APIs (Private Banking + ICIB). | [@devNenyasha](https://github.com/devNenyasha) |
| [investec-openbanking-dotnet](https://github.com/dalion619/investec-openbanking-dotnet) | C# | C# Open API wrapper. | [@dalion619](https://github.com/dalion619) |
| [investec-openbanking-java](https://gitlab.com/vchegwidden/investec-openbanking-java) | Java | Java Open API wrapper (GitLab). | [@vchegwidden](https://gitlab.com/vchegwidden) |
| [GolangInvestecOpenAPI](https://github.com/investec-programmable-banking/GolangInvestecOpenAPI) | Go | Go package for Investec's Open API. | Amnon Melzer ([LinkedIn](https://www.linkedin.com/in/amnon-melzer-01b2431/)) |
| [investec_open_api (Ruby)](https://rubygems.org/gems/investec_open_api) | Ruby | Ruby gem for Investec Open API. | [@OfferZen](https://github.com/OfferZen) |
| [investec_open_api wrapper (Ruby)](https://github.com/Offerzen/investec_open_api) | Ruby | Wrapper repo for the Open API gem. | [@OfferZen](https://github.com/OfferZen) |
| [investec_open_api (Elixir)](https://hex.pm/packages/investec_open_api) | Elixir | Elixir package for Investec Open API. | [@theodowling](https://gitlab.com/theodowling) |
| [elixir-investec-open-api (wrapper)](https://gitlab.com/theodowling/elixir-investec-open-api) | Elixir | Wrapper repo for the Elixir package. | [@theodowling](https://gitlab.com/theodowling) |
| [investec-api (Clojure)](https://github.com/walterl/investec-api) | Clojure | Clojure wrapper for Investec's Programmable Banking API. | [@walterl](https://github.com/walterl) |
| [investec.graphql](https://github.com/naartjie/investec.graphql) | F# / .NET | GraphQL API wrapper for Investec Open Banking. | [@naartjie](https://github.com/naartjie) |

#### 🛠️ CLIs & utilities

| Project | What it does | Tech | Maintainer |
|---|---|---|---|
| [Investec Open Banking CLI](https://github.com/adrianhopebailie/investec) | Interactive CLI app for working with Investec Open Banking APIs (built with Deno). | Deno, TypeScript | [@adrianhopebailie](https://github.com/adrianhopebailie) |
| [investecli](https://github.com/banchee/investecli) | Python CLI wrapper for Investec Private Bank Accounts. | Python | [@banchee](https://github.com/banchee) |
| [programmable-banking-cf-worker](https://github.com/dalion619/programmable-banking-cf-worker) | Cloudflare Worker utilities for programmable banking. | Cloudflare Workers | [@dalion619](https://github.com/dalion619) |


<a id="hackathon-build-submissions-archive"></a>

## 🚀 Hackathon Build Submissions (archive)

<details>
<summary><strong>Show hackathon submissions</strong></summary>


Check out the creative solutions from our hackathon events.

| Hackathon Date | Team Name | Description | Open Source Repo | Demo Video |
| - | - | - | - | - |
| [Q4 2020](https://drive.google.com/file/d/1j3xv81VSj563uhcfbF-0Ms8bINguhvYb/view?usp=sharing) | [Ziggy](https://github.com/pgoosen/ziggy) | Our solution gives users a fun and practical way of developing better spending habits, through individualised objectives and instant progress feedback. | [Ziggy](https://github.com/pgoosen/ziggy) | [Demo recording](https://www.youtube.com/watch?v=075jidzoJQs) |
&nbsp; | [ECSMS : Employee Card and Spend Management System](https://gitlab.com/michielj.kruger/dmr_card_management) | Companies will be able to integrate their HR system with our platform to allocate cards to specific employees.  The HR or Payroll departments will be able to customise allowable expenditure in various ways and automatically decline all card expenses if an employee was terminated on the HR system. | [ECSM](https://gitlab.com/michielj.kruger/dmr_card_management) | [Demo recording](https://youtu.be/6gKs0gLEiUQ) |
&nbsp; | [CardShark](https://dev.d2slfnum00jv29.amplifyapp.com/#/) | Our product allows businesses to easily restrict and manage the use of Investec credit cards at specific merchants. Parent’s can restrict their children’s spending, universities can make sure that funds are spent in bookshops, and transport businesses can allow their vehicles to be filled up at any garage. | [CardShark](https://bitbucket.org/Sfisoc/rsg/src) | [Demo recording](https://www.youtube.com/watch?v=rxnkDSY453A&feature=youtu.be) |
&nbsp; | [Budgie](https://budgie.industrialcuriosity.com/) | A platform on which a variety of tools can be built to make use of individual as well as anonymized collective transaction data | [Budgie](https://gitlab.com/insert-name-here) | [Demo recording](https://youtu.be/ZTc3vBNmIUQ) |
&nbsp; | [Home Assistant Integration](https://www.youtube.com/watch?v=FPR8_tDS60c&feature=youtu.be) | Your personal finances are placed at your fingertips, or peripheral vision, depending on how much you like your Home assistant. This could allow you to better track your financial goals, on a day to day basis. Every drop in the bucket helps, why not count every penny to secure your financial future. | [Python Library:](https://pypi.org/project/investec/) and [Home Assistant Integration](https://github.com/Aurelian-Shuttleworth/core/tree/investec/homeassistant/components/investec) | [Demo recording](https://www.youtube.com/watch?v=FPR8_tDS60c&feature=youtu.be) |
&nbsp; | [Snack or Save](https://snackorsave-hackathon.herokuapp.com/) | Initially block purchases by category to help counteract impulse spend. | [Snack or Save](https://github.com/vince-platform45/snackorsave) | [Demo recording](https://www.youtube.com/watch?v=mN9YgP_6neQ&ab_channel=JonathanVos) |
&nbsp; | [SafeWord](https://safeword-hackathon.herokuapp.com/) | Block online trial subscriptions from billing you via a blocklist. | [SafeWord](https://github.com/vince-platform45/safeword) | [Demo recording](https://www.youtube.com/watch?v=1IbfLKcs0ag&ab_channel=JonathanVos) |
&nbsp; | [Investec Wealth Projection](https://github.com/pivendren/project-penguin) | Investec’s Wealth Projection, shows you long term benefits of short term spending patterns, and how it affects your financial wellbeing. | [Investec Wealth Projection](https://github.com/pivendren/project-penguin) | [Demo recording](https://youtu.be/dPk_xqaY3PQ) |
[Q2 2021](https://docs.google.com/spreadsheets/d/1Rh7bjikdBxGVXoCIKS8XU3apjvCwUIxagt1Nziuz_u0/edit?usp=sharing) | [Insert-name-here](https://docs.google.com/presentation/d/1g1EEvF8hY-eqtKzHIiTfEV9ZiXQVwvD3BAXMtwkwEJo/edit#slide=id.ge132b111e7_11_22) | Open Source Participation Tokens: A mechanism for contributors to be fairly and transparently recognised for their contributions to projects. | [Trophies](https://gitlab.com/insert-name-here/trophies-demo-project/-/blob/master/README.md) | [Demo recording](https://drive.google.com/file/d/1pD9mrOsFyVVgvnXUPVWO9Di71xBuES6G/view?usp=sharing) |
&nbsp; | [Snitch](https://docs.google.com/presentation/d/177qQ8U3h-sXn021fztf3PRrLMO1q--y85UDOu0rhCpQ/edit?usp=sharing) | Automatically track subscriptions on multiple credit cards. Maintain a list of subscriptions to update once a credit card expires. | [Snitch](https://github.com/GoosenA/snitch) | [Demo recording](https://youtu.be/OUf_G66UDpc) |
&nbsp; | [CSTech](https://docs.google.com/presentation/d/1nTHKZcP0S0FuuEefGQOiY7nRCzmdY6loxEw9je2dkfk/edit?usp=sharing) | A web solution for Investec clients to create their own rules using a web interface.| [Card Guard](https://dev.azure.com/RiderZebraDevops/blueprints) | [Demo recording](https://zebrabluebrints.azurewebsites.net/demo) |
&nbsp; | [Bits&Bytes](https://docs.google.com/presentation/d/1aPC0dpVbRgCZsvGCf4cgkFQI5J5LsDM5nQnapcSIhZI/edit#slide=id.gdf5e288de8_2_45) | An app to allow teams to add members, and elect an employee for ”Employee of the Month” The solution will auto pay the winner at the end of each term. | [In-cent-ive](https://github.com/Kryptonite11/Investec_Incentive/blob/main/README.md) | [Demo recording](https://www.youtube.com/watch?v=MdOtp5hbuEU) |
[Q4 2021](https://docs.google.com/spreadsheets/d/1cWZQtru2zXkkVjEnbOZiCbwbTW1LcpgEsUalt1Vwlog/edit?usp=sharing) | [DivZero](https://github.com/RussellKnight/BankBot/blob/main/01%20-%20Hackathon%20%20Q4%20Transfer%20API%20Pitch.pdf) | Ingests and categorizes transaction and balance data extracted via the Investec Open API. | [BankBot](https://github.com/RussellKnight/BankBot) | [Demo recording](https://youtu.be/HuDx9cL2yEM) |
&nbsp; | [Jan](https://github.com/jandremarais/runToTheBills/blob/main/pitch.pdf) | Automatically track usage of items and then transfer savings contributions based on the usage, item life expectancy and replacement value. | [Run to the Bills](https://github.com/jandremarais/runToTheBills) | [Demo recording](https://youtu.be/QeQIWEU_b1c) |
&nbsp; | [Frikkie](https://docs.google.com/presentation/d/1K0MgZfjnHw8S94btozMVsgocaG8648WbuFDfbXSjL8s/edit?usp=sharing) | Keeping a minimum balance in our transactional account, we put all our money in our savings/loan account. If we swipe our cards, or a debit order goes off, we transfer money back from the savings/loan account to our transactional account, preventing us from using our facility. | [Investec Interest Maximizer](https://github.com/FrikkieSnyman/investec-tools/blob/master/docs/INTEREST_MAXIMIZER.MD) | [Demo recording](https://drive.google.com/file/d/1eOpRYl0Qc_HyEVb8Fx8T5eDJnUgbBS3O/view?usp=sharing) |
&nbsp; | [Cache Yo Cash](https://docs.google.com/presentation/d/1XxQZjxn3FjtQ2zvlFHwmvIuJz1buhc24Fkona6Qli9s/edit?usp=sharing) | Track transactions on a primary business account and provide a UI mechanism to process transactions and add details on their tax relevance. | [Cache Yo Cash](https://gitlab.com/MikeJamesWhite/cache-yo-cash) | [Demo recording](https://drive.google.com/file/d/1Ift8YBt53FG5pu95z8qWjOKOT_o5z2-5/view?usp=sharing) |
&nbsp; | [Peter & Tiaan](https://drive.google.com/file/d/1mv_XYBSZg-EoBUgPNx_XTHK7kYFpYwtz/view?usp=sharing) | Automatically detect when a large deposit (e.g. a salary) is made into the Investec Transactional Account, and move it to the (home loan) account. Thereafter, move the money (or part thereof) back when needed (e.g. when the balance drops below a threshold). | [Home Loan Interest Saver](https://gitlab.com/muisvoel/home-loan-saver/-/wikis/Home) | [Demo recording](https://youtu.be/G8Rs5vAzW9U) |
&nbsp; | [Something Bubbly](https://docs.google.com/presentation/d/1ZTUgVeR34upwmYFUj_EYo5MUZo1HTYbr746QFWwss8w/edit#slide=id.ge01e9a868f_0_0) | Scheduling transfers as a portion of revenue, based on legislation or percentage of account credits. | [Bubbling](https://github.com/whyimnobody/bubbling) | [Demo recording](https://drive.google.com/file/d/1YDuVXgdDGembQAsICmqQcFHcxeYonyIJ/view?usp=sharing ) |
&nbsp; | [Members 404](https://docs.google.com/presentation/d/1yWXx7iUEZUbQAKpm86J8sSbAjxXd9L_EQ0b7A80sjKY/edit?usp=sharing) | Keep money in higher interest bearing accounts, round up transactions and save the difference. | [Bank My Change](https://gitlab.com/storecaster/bankmychange/-/tree/master) | [Demo recording](https://youtu.be/-G-fYsYFqGs) |
[Q2 2022](https://offerzen.gitbook.io/programmable-banking-community-wiki/build-events/q2-2022-hackathon-or-low-code-no-code/2022-hackathon-or-low-code-no-code-or-submissions) | [ProSSBanking](https://drive.google.com/file/d/12RYiGyLucTMObqXEwbCFPyquibtDUQen/view?usp=sharing) | Spreadsheet Banking: A single source of financial truth. | [ProSSBanking3](https://drive.google.com/drive/folders/1kE_vGhc898H2upWVYkIx0yDAJONyTyCt?usp=sharing) | [Demo recording](https://drive.google.com/file/d/1V_pLjoSQjy1XmTffe0lgjgaHatF4lopd/view?usp=sharing) |
&nbsp; | [AI Budget tracking](https://drive.google.com/file/d/1Ng8I0mKufm7UVTlr4bd6ul181Qminj7R/view?usp=sharing) | Spreadsheet Banking: AI Budget tracking Spreadsheet. | [Budget Tracking](https://offerzenbv.sharepoint.com/:x:/r/sites/SpreadsheetBanking/_layouts/15/doc2.aspx?sourcedoc=%7BCFC738F9-7D3D-4CEC-8589-25EFA7A82CD6%7D&file=Spreadsheet%20Banking.xlsx&action=default&mobileredirect=true&cid=682de773-383b-479f-a8d2-47380c92cada) | [Demo recording](https://drive.google.com/file/d/1CDM7Myu4WyO-RztSHPVIdvoYSrW3aYw0/view?usp=sharing) |
&nbsp; | [ZATechRadio](https://drive.google.com/file/d/123e5JUwjsO3jORL9EX5sZdN5nEHr8F47/view?usp=sharing) | Spreadsheet Banking: AI Powered Transaction Categorizer. | [ZATechRadio](https://github.com/Vutlhari/paycat) | [Demo recording](https://drive.google.com/file/d/1oWhjem0AXijTzjThcquqdkp8caUk2wnC/view?usp=sharing) |
&nbsp; | [CaptainPlanet](https://drive.google.com/file/d/1Ze5-hQ3rvGlN8vl25BNb53NK7LaVyk1Q/view?usp=sharing) | Spreadsheet Banking: Turning spending into saving… Mother Nature ❤️. | [CaptainPlanet](https://1drv.ms/x/s!Ajr1vRcXcgpma1QvZMVeZGicDyI?e=hb661H) | [Demo recording](https://drive.google.com/file/d/1gvJOav4V4ScLgP8lSLI99zfjJkwWuqj7/view?usp=sharing) |
&nbsp; | [Telegrammetry](https://drive.google.com/file/d/1mLjBW_xwABud0eNlDRaYmlz7zloa-wqf/view?usp=sharing) | Spreadsheet Banking: Your own 24/7 private banker. | [Telegrammetry](https://1drv.ms/x/s!AtkUJn0N8CerboundGT57hRpQzg?e=PRfpnr) | [Demo recording](https://drive.google.com/file/d/1bFM8l696_5LiHA3eOWXcuqkEEquTRBBY/view?usp=sharing) |

</details>




<a id="demos-archive"></a>

## 🎥 Demos (archive)

<details>
<summary><strong>Show demos & recorded talks</strong></summary>


Watch [past recorded Meetups here](https://www.youtube.com/watch?v=PcU0aT5ckDM&list=PLjTry3duaTAGJ6UOW5ISS_ymV46-VqkPa) and [newly recorded meetups here](https://www.youtube.com/playlist?list=PLdtUNQ2k27WiAdJFzLeF-a7weue5U12Kl).

| Demo | Open Source Repo | Description | Tech Stack | Author |
|------|------------------|-------------|------------|--------|
|[Watch](https://youtu.be/xG_gqGwfnhQ) Consuming about GraphQL in the Browser | [<img src = "https://offerzen.ghost.io/content/images/2020/11/Programmable-Banking-Community-Marcin-s-GraphQL-Wrapper-for-the-OpenAPI_Inner-Article-Image.png" width="200">](https://github.com/naartjie) | As a follow up to his presentation [GraphQL Wrapper for Investec open API](https://youtu.be/PmGy-2p3dwo), Marcin took us on a deep dive into the frontend developer experience. It was a really insightful session. If you want to learn more about the power of GraphQL and get some ideas of what you can do with the Investec Open API then you should check it out. Thanks Marcin!.| ** | [Marcin](https://github.com/naartjie) |
|[Watch](https://www.youtube.com/watch?v=ROzQkNj3xP8&ab_channel=OfferZen) or [Read](https://www.offerzen.com/blog/programmable-banking-community-renens-transaction-notifications) Transaction Event Listening | [<img src = "https://offerzen.ghost.io/content/images/2020/11/Programmable-Banking-Community--Renen-s-Transaction-Notifications_Inner-Article-Image.png" width="200">]() | [Slide deck](https://drive.google.com/file/d/17_JJttJ5PYsrhw0wlltNx9Xl6Ah8RKL6/view) - Renen Watermeyer shows how he built a system that checks an account via the Investec OpenAPI to find new transactions every minute. He also demos how he created a webhook mechanism to push new notifications to another service.| ** | [Renen](https://github.com/sasa-solutions/investec_poller/) |
|[Watch](https://www.youtube.com/watch?v=g13lB10RFcw&list=PLjTry3duaTAGJ6UOW5ISS_ymV46-VqkPa&index=3&t=0s) or [Read](https://www.offerzen.com/blog/programmable-banking-community-lishens-temporary-store-of-value) about Temporary Store of Value | [<img src = "https://offerzen.ghost.io/content/images/2020/10/Investec-Programmable-Banking-Meetup----Lishen-s-Temporary-Store-of-Value_-Programmable-Banking-Community--Michael-s-Use-of-Protobuf-for-OpenAPI_Inner-Article-Image.png" width="200">](https://github.com/ihiresolutions?tab=repositories&q=investec&type=&language=) | [Slide deck](https://docs.google.com/presentation/d/e/2PACX-1vSwtUBwBAUydVpNyERES8L70a5V8yt_Hibc-x3OSKxvHZUKA5ACAi9aBkpCBuqlSL7zuNeDR_HrUdtK/pub?start=false&loop=false&delayms=3000&slide=id.g92d0868e55_0_169) - Lishen Ramsudh discusses the tool he’s been working on to streamline business operations and open up product possibilities through the use of a temporary store of value. The temporary store of value and automation of certain operations opens up a different trust relationship with a process being the custodian instead of hoping that a transaction is upheld.| *C# DotNet Core 3.1, Postgres, Redis, Xamarin Forms, (eventually include Docker, AWS ECS Fargate and API Gateway, AWS Aurora)* | [Lishen](https://github.com/ihiresolutions) |
|[Watch](https://www.youtube.com/watch?v=B_7XU11TkzM) or [Read](https://www.offerzen.com/blog/programmable-banking-community-christos-crypto-hedge) about Crypto Hedge | [<img src = "https://offerzen.ghost.io/content/images/2020/11/Programmable-Banking-Community--Christo-s-Crypto-Hedge_Inner-Article-Image.png" width="200">]() | [Slide deck](https://docs.google.com/presentation/d/10Oz005QN8axJvkCh2yEpjZrvFLhNRmSlCCEz8904vB4/edit) - Christo Bezuidenhout shares how he built a tool to hedge his spending against the Rand using crypto. His goal was to see if he could build something to 10X using programmable banking.| *Next.js, React, GCP (PubSub, Functions), Firestore, Auth0, Ant Design, Puppeteer.* | [Christo Bezuidenhout]() |
|[WATCH: GraphQL Wrapper for Investec open API](https://youtu.be/PmGy-2p3dwo) | [<img src = "https://offerzen.ghost.io/content/images/2020/11/Programmable-Banking-Community-Marcin-s-GraphQL-Wrapper-for-the-OpenAPI_Inner-Article-Image.png" width="200">](https://github.com/naartjie/investec.graphql) | [Slide deck](https://docs.google.com/presentation/d/e/2PACX-1vS_Hb3oZbY3-aXCugroKkyEbelPEL8ApLYsfXF4wZJbMBpvxYztHGWcOUvLQ7nwdXKdXEEgjEAjqc9o/pub?start=false&loop=false&delayms=3000) - Exploring functional languages to create a GraphQL wrapper for restful apis. This week he will take us through round 1, an F# implementation.| *F#, GraphQL* | [@naartjie](https://github.com/naartjie/investec.graphql) |
|[WATCH: OneCart - Fraud detection and prevention](https://www.youtube.com/watch?v=4DimmR1AkMc) | <img src = "https://offerzen.ghost.io/content/images/2020/09/Michael_Programmable-Banking-Community--Using-programmable-banking-for-fraud-detection-and-prevention_Inner-Article-Image.png"  width="200"> | [Slide deck](https://docs.google.com/presentation/d/e/2PACX-1vTgs0DmoCq5n03x1nvoXOsfste4DYdVf8RpMO3tETBmP-LD5-JWG2xXgYB3hb9X_3JawTtULj2GYOuI/pub?start=false&loop=false&delayms=3000)] - Problem: OneCart has around 140+ shoppers working daily across SA. Each shopper has their own OneCart debit card and are fulfilling customer orders. They steal! Why solve this? Reduce shopper theft and be more proactive to shrinkage. Solution: Real-time alerts of suspicious activity on cards. | *Investec Programmable Card, Serverless, Slack webhooks, QlikView* | @michaellouis157 |
|[WATCH: Client Creator](https://www.youtube.com/watch?v=rcZTnfBQ7mA&t=1205s)] | [<img src = "https://offerzen.ghost.io/content/images/2020/10/_Programmable-Banking-Community--Michael-s-Use-of-Protobuf-for-OpenAPI_Inner-Article-Image@2x.png" width="200">](https://www.offerzen.com/blog/programmable-banking-community-michaels-client-creator) | [Slide deck](https://docs.google.com/presentation/d/e/2PACX-1vRbvnrwKUAwXaEG80n3VQlahSDTzP1xqCfoOBsDjX0p2ZSrwTM4nv-eSm9v8ABTNQws-soQBRLPqtpb/pub?start=false&loop=false&delayms=3000) - How to use proto to create open banking clients.| *protobuff* | @mikewl |
|[WATCH: Receipt Capture App](https://www.youtube.com/watch?v=rcZTnfBQ7mA&t=0s) | [<img src = "https://offerzen.ghost.io/content/images/2020/11/Programmable-Banking-Community--Loic-s-Receipt-Capture-App_Inner-Article-Image.png" width="200">](https://www.offerzen.com/blog/programmable-banking-community-loics-receipt-capture-app) | [Slide deck](https://docs.google.com/presentation/d/e/2PACX-1vQL56yCJ2t11oqdpHMkL7847ddVa-6P4WBKb_Gpl2yEldxK8fAYZrV3k1-5uuUadoz16K-L8T-4o8Ps/pub?start=false&loop=false&delayms=3000)] | *Flutter, Flask, Firebase* | @LoicAn21 |
|[WATCH: O I CR What You *Almost* Did There](https://www.youtube.com/watch?v=vS9PcwWAAac&t=708s)| [<img src = "https://i.imgur.com/7W5VM4A.jpg" width="200">](https://gitlab.com/benblaine/bill/) |[Slide deck](https://docs.google.com/presentation/d/e/2PACX-1vS47ev6jYFzupo1fHVCJjO6nsIj72PlKxnOWTqB6P9w94WP7DnwnvAyDRTRVEbb8entjdo7NBfZVAyd/pub?start=false&loop=false&delayms=3000) - What it does: Problem: I don’t know if I’m spending too much money on cheese - and the info is lost with the receipts I wantonly discard. Why solve this? Figure out if I’m “over-cheesing”. Solution: My Friend “Bill” who reminds me to capture my receipts..| *Telegram Bot API, Email, Wave* |*@benblaine*|
|[WATCH: Investec @ Home](https://www.youtube.com/watch?v=vS9PcwWAAac&t=1s)|[<img src = "https://offerzen.ghost.io/content/images/2020/11/Programmable-Banking-Community--Jo-rg-s-Smart-Home-Device-Extension_Inner-Article-Image.png" width="200">](https://www.offerzen.com/blog/programmable-banking-community-jorgs-smart-home-device-extension) |[Slide deck](https://docs.google.com/presentation/d/e/2PACX-1vSB-UTh-O3BuSuyLuCzdvqE40DrlsjbW9_sCPC5GQrdC8fwKnLBB96nLiv1KTvmMWGfYYQcrIIdqIHt/pub?start=false&loop=false&delayms=3000) - A quick and dirty experiment to get my Investec account to interact with physical devices or a smart home.| *HomeBridge, Node.js, MQTT, HomeKit.* |*@avgjoe*|
|[WATCH: Investec Open Banking CLI](http://www.youtube.com/watch?v=kMdfLQ5fJwo&t=26m2s)| [<img src = "https://offerzen.ghost.io/content/images/2020/10/Programmable-Banking-Community--Adrian-s-Open-Banking-CLI_Inner-Article-Image@2x.png" width="200">](https://www.offerzen.com/blog/programmable-banking-community-adrians-open-banking-cli) |[Slide deck](https://docs.google.com/presentation/d/e/2PACX-1vR8X1I48VzrgB9eJGTJEuy0H-Bm1ZH9PUcH1LQvZZ9lbxZSCYMPbU8-WMt_Qj9ZPlDOH2u3xDXLJLsk/pub?start=false&loop=false&delayms=3000) - What it does: CLI for working with your bank account(s). No need to log into app or Web. Built to learn Deno. How it works: Very simple (one Typescript file). REPL (Read Eval Print Loop). Basic state held in-memory and shown in prompt (e.g. :closed_lock_with_key: vs :unlock:). Logged in (valid access token). Selected Account. Privacy mode. Auto-login if possible (looks in ENV variables for credentials)..| *Deno* |*@adrianhopebailie*|
|[WATCH: Sync Investec to Sage One](http://www.youtube.com/watch?v=kMdfLQ5fJwo&t=0m1s)| [<img src = "https://offerzen.ghost.io/content/images/2020/09/Programmable-Banking-Community--Syncing-Investec-to-Sage-One_Inner-Article-Image.png" width="200">](https://www.offerzen.com/blog/syncing-transactions-into-sage-one-with-investec-programmable-banking) |[Slide deck](https://docs.google.com/presentation/d/e/2PACX-1vQ7MlSACjBSTg0L3rQNOM0Un6IbFxtE-OOZ6MRmXqUwBrba7nrL1N6xSOIeS09HdUt3fv3St8y1xAoH/pub?start=false&loop=false&delayms=3000) - What it does: Syncing transactions automatically from Investec into Sage One. The current methods of importing transactions are manual or where you have to give your credentials to a third party. How it works: Retrieves the transactions from both Investec and Sage to compare. Removes transactions already synced. Sage will have the transaction hash. Compares manually added transactions in Sage One to stop duplication. Imports the transactions that are left over..| *FastAPI, Sage API, Python, Heroku, Python Investec OpenAPI Wrapper* |*@imraanp*|
|[WATCH: Flutterflys in Spring](https://www.youtube.com/watch?v=7Mr4E_w14sE&t=0s)| [SparaBox](https://github.com/RendaniDau/Sparabox) and [SparaBoxFlutter](https://github.com/RendaniDau/SparaBoxFlutter) <img src = "https://offerzen.ghost.io/content/images/2020/08/Programmable-Banking-Community--Rendani-s-Personal-Budget-App_Inner-Article-Image@2x.png" width="200"> |[Slide deck](https://docs.google.com/presentation/d/e/2PACX-1vS_soKErMuTtiW_zqRJopznnIadQONEXOkG5POxh0z8z_MjFLVkpuoyzUQL1NScShwH6K-F98yUzLMZ/pub?start=false&loop=false&delayms=3000) - Personal budget app to explore the potentials of programmable banking..| *Spring Boot, Keycloak, Flutter, Android* |*@rendani10*|
|[WATCH: OfferZen Finance App](https://www.youtube.com/watch?v=7Mr4E_w14sE&t=840s)| |[Slide deck](https://docs.google.com/presentation/d/1Q7_8RGpXqA1F20enKxojbcM3avdW8Y6XmgBX3DgC7Yg/edit#slide=id.p) - Empowering the OfferZen team to spend money and helping the Finance team manage that spend easily and confidently.| *Ruby on Rails, PostgreSQL, Heroku* |*[@OfferZen](https://github.com/Offerzen/investec_open_api)*|
|[WATCH: Command center bridge](https://youtu.be/mszU70RzQWQ)| [<img src = "https://gitlab.com/offerzen-beta-community/investec-programmable-banking/command-center/-/raw/master/images/command-center-bridge-architecture.jpg" width="200">](https://gitlab.com/fisher.adam.online/command-center-bridge) | A bridge solution for other programmable banking solutions that enables a single point of contact for approval determination and secure transaction forwarding to other APIs. Constructed in conjunction with [aws-cdk-js-dev-guide](https://github.com/therightstuff/aws-cdk-js-dev-guide).| *Tools: CDK (a mix of TypeScript and Javascript) Components: AWS: api-gateway, lambda, sqs, dynamodb* |*[@fisher.adam.online](https://gitlab.com/fisher.adam.online/command-center-bridge)*|
|[WATCH: Investec CLI Tool](https://youtu.be/-HrEy_8OwgI?t=1116)| [REPO](https://github.com/banchee/investecli)| Get accounts, balance and transactions in your CLI.| *Python Tabulate, Python Fire (CLI)* |*[@rpurdon-nf](https://github.com/rpurdon-nf)*|
|[Shared Expenes](https://youtu.be/-HrEy_8OwgI)|  |[Slide deck](https://www.youtube.com/redirect?v=-HrEy_8OwgI&event=video_description&q=https%3A%2F%2Fdocs.google.com%2Fpresentation%2Fd%2F141EWHLj84RxiMXCSzgl6EkEUhGHDUrwrJARa6OeqCZ4%2Fedit%23slide%3Did.g7757fe7c3f_0_136&redir_token=QUFFLUhqbERBNW5TZS1Za1Z4UXdMaXk2Ni05bGpiaWVCUXxBQ3Jtc0tuUHAtNjd4S0xBb0RQaFM0M04wSTYxb1N2bHdfN2U3VERqVjRDMVl1UVJ2N3o2OGdoOEdBZmstR19xaDR0a3VvMFVncWhiWTZDc0lfUnpHbnFqdFlORlEyNklaellXUDNTT1phUF8tSTRFdVhjdWtOSQ%3D%3D) - Simple sharing of expenses in small groups. Existing shared expense app needed Investec Programmable Banking to make adding expense easier..| *Rails, React, Redux, Postgres* |*@jethrof*|
|[WATCH: Money Report Dashboard Mirror](https://youtu.be/F7qDvejZs9o)| [<img src = "/images/projectSystemDiagrams/pivendrenDashboard.png" width="200">](https://github.com/pivendren/openbanking-investec-dashboard) |[Slide deck](https://docs.google.com/presentation/d/1yP8lLos60CFcL3dhWuKQf_u6_FRtzdoGEA5iS1Xv3Qo/edit#slide=id.g7757fe7c3f_0_105) Component based dashboard configurable by user.| *Blazor WebAssembly, Entity Framework, .NET Core, ML.NET, SQL DB, Azure Functions* |*[@pivendren](https://github.com/pivendren)*|
|[WATCH: Vanilla Transaction Dashboard](https://youtu.be/2Z3IERMvXak)|[Go Backend](https://github.com/donohutcheon/gowebserver) AND [React Frontend](https://github.com/donohutcheon/reactwebclient)| [Slide deck](https://docs.google.com/presentation/d/1kBH-G9Zv5yPxfdevV6IXQ3Ithiss2aVihVOcM-cfdIc/edit#slide=id.g7757fe7c3f_0_105) - Why create it? Learn stuff: Primarily Go. But also React, Heroku. Build a dashboard to record my spending habits. Create a platform upon to build something cooler.  | *React, Go, Heroku* |@donohutcheon|
|[WATCH: Transacational Insights](https://www.youtube.com/watch?v=R0i_UntwiIE)|[programmable-banking-power-bi-template](https://github.com/dalion619/programmable-banking-power-bi-template) AND [investec-openbanking-dotnet](https://github.com/dalion619/investec-openbanking-dotnet) AND [programmable-banking-cf-worker](https://github.com/dalion619/programmable-banking-cf-worker)| [Slide deck](https://docs.google.com/presentation/d/1XBhGZWm9jbvhSrpZJhqLMb6cuycb8UOYG8UFxtlUN88/edit) Data mining bank account transactions for meaningful insight. Low code approach that non-devs can use. | *PowerBI, Cloudflare, Azure Functions, Investec Open API* |*[@dalion619](https://gitlab.com/https://github.com/dalion619/)*|
|[WATCH: Toshigotchi](https://www.youtube.com/watch?v=KEVJDwFvO_s)||[Slide deck](https://docs.google.com/presentation/d/1TmDkEkm6mM5yEW_A91EzmFRzayzupH9th3WGVQBLnIE/edit) - What it is: Create an emotional connection to your spending habits. Money is a very emotionally charged topic and there we should be ways to make it more personable & relatable so we can react better to various financial circumstances.||@jacousteau|
|[WATCH: Paper Budget](https://youtu.be/DKV-4M4a6CE?t=1)|[<img src = "https://i.imgur.com/o0s176D.png" width="200">](https://github.com/ferdis/ynab-sync)| [Slide deck](https://docs.google.com/presentation/d/11mcO96L9E6iWscG9ycO_Gy4wc90PY6E5N7SPrOjMhL8/edit#slide=id.g7757fe7c3f_0_105): What it does: Sync transactions to YNAB budget and categorize them. Why create it? Keep budget up to date without manual intervention. | *Starlette, React and SQLite* |@ferdis|
|[WATCH: Investec Query Bot](https://youtu.be/DKV-4M4a6CE?t=559) |[<img src = "https://github.com/lebomorojele/investecbot/raw/master/example.gif" width="200">](https://github.com/lebomorojele/investecbot)| What it does: It takes a user’s input, defines their intent, extracts queryable information, and generates a query to the DB. Eg. Show me all my transactions in Cape Town above 400 during June. Why create it? I was unsure of what to do with the card data, so figured why not let the user decide what they want to do with it. | *Swift UI (iOS), Ngrok, RASA NLP/U, SQLAlchemy, Python* |@lebo0|
|[WATCH: Programmable Banking Rule (PBR)](https://youtu.be/aqZotFl9fQw?t=1859)|[<img src = "https://i.imgur.com/rmifZuh.png" width="200">](https://gitlab.com/HagashenNaidu/programmable-banking-rules)| What it does: Allows the creation of rules that can be used at present for accepting/declining a transaction. Why create it?  Most banking apps only allow hard limits to be set on spend. The idea with this is to put the account holder in charge of the rules of the card.. | *.Net Core, Blazor WebAssembly, Warewolf, Sql DB* |@HagashenNaidu|
|[WATCH: InvestecCMD](https://youtu.be/aqZotFl9fQw?t=669)|| What it does: Sync transactions to Firestore as they come in. From Firestone, you can view you transactions in the iOS app as well as details of the transactions. You will also receive pushes when transactions are approved to the iOS App. Why create it? Great opportunity to learn how the Investec APIs works & to cut my teeth on a bunch of new techs I been dying to play with: firebase, cloud functions. typescript.. | *Native iOS, Swift, Firebase (Firestore, Cloud Functions)* |@WarrenFoxley|
|[WATCH: Decentralised API](https://youtu.be/LrnBHsY55uA?t=636)|| What it does: The goal was to create a decentralised API to handle incoming beforeTransaction and afterTransaction requests before storing the data. This allows you to execute logic prior to storing the data and before validating transactions. Why create it? The main goal was to allow for validation logic on a transaction based on externally defined criteria, eg: limit daily spend, limit per transaction spend etc. Also, this provided an authenticated basecamp on which to build logic. | *Google Cloud Platform, Laravel* |@cwbmuller|
|[WATCH: HankApp](https://youtu.be/3tYfpc_rjvU?t=1202)|| Hank is banking done right. Imagine a world where banking is an intuitive pleasure. It's our mission to make that world a reality. As banks open up their API's we aim to unlock their utility for the people. | *Flutter, Firebase* |*[@Chris.Fraser](https://gitlab.com/Chris.Fraser)*|
|[WATCH: Investec Oracle](https://youtu.be/tnpsjOFbkco?t=295)| | What it does: Routes data through cloud functions to Google pub/sub, to which I can add multiple subscriptions for different applications. Why create it? To serve as a base for all transactions to flow through and to which different applications can connect to to receive transaction data. I also wanted to have the ability to replay transactions, which Google pub/sub provides and make it easy for other users to be able to spin up their own command center with a few clicks.  | *Google Cloud Platform (Cloud functions, pub/sub, Firestore), Twillio, React, Zapper* |*[@bezchristo](https://gitlab.com/bezchristo)*|
|[WATCH: Purple Pigger](https://youtu.be/5xiRrJbblc8?t=2841)|| Linked to the beforeTransaction function, PP checks all transactions (for now) and approves or declines them, to help you control budgets in certain periods. Keeping those wild nights, not too wild. I keep a mental count of my daily spending and how it affects my budget. Now I can get a machine to do it. Basically I'm lazy!. | *Firebase, Svelte* |*[@kamogelo.sebopelo](https://gitlab.com/kamogelo.sebopelo)*|
|[WATCH: Payments Splitter](https://youtu.be/qkFFE3aIGZc)|| An app that let's you split the bill for a transaction with a friend using their email address. | *Node, AWS* |*[@Yashu Tanna](yashutanna @yashutanna)*|
|[WATCH: Investec Logs](https://youtu.be/Hkv8qeScXQ0)|[investec-logs-functions](https://github.com/JeremyWalters/investec-logs-functions) AND [investec-logs-web](https://github.com/JeremyWalters/investec-logs-web)| System to log transactions to Google Firebase using NodeJS and a frontend view with VueJS. | *Firebase* |@JeremyWalters|
|[WATCH: Ur Command Center](https://youtu.be/addbahzP1ks)|[<img src = "https://gitlab.com/dale10/ur-command-center/-/raw/master/assets/CCArchitecture.png" width="200">](https://gitlab.com/dale10/ur-command-center)| Infrastructure to save transactions into S3. The idea is that S3 is the source of truth and this can be extended to trigger processing on object creation. That will come in a future iteration. | *AWS*, *Terraform*, *Lambda*, *S3*, *Grafana* |*[Dale Tristram @dale10](https://gitlab.com/dale10)*|
|[WATCH: InvestecPOC](https://youtu.be/3HDNL5CVwDs)| | Mobile App to categorise expenses. | *C#*, *Swift* |@WernerPereira|
|[WATCH: Receipt Scanner](https://youtu.be/0yVRTSd19Ac)|| Simple app to fire off messages from Go through Firebase Cloud Messenger. | *Go, Firebase Cloud Messaging* |*[@brian.entersekt](https://gitlab.com/brian.entersekt)*|
|[WATCH: Transappenate](https://youtu.be/PAgcFV0wHjc)|| A mobile app for storing and cateogrising transactions. | *Appenate* |*[@matthew.alport](https://gitlab.com/matthew.alport)*|
|[WATCH: Singularity](https://youtu.be/N6M4tE_KhIk)||Info management app, transaction logger, auto-create transaction with Investec Beta, charts to display spending. Third party lib: "QtWebApp HTTP Server in C++". | *C++* |*[@lcoetzer](https://gitlab.com/lcoetzer)*|
|[OfferZen's Spend Tracker](https://youtu.be/1dGC5E8GGQM)|[JS and Google Script Repo](https://github.com/offerzen/programmable-banking-glow)| This repo contains source code for our first iteration of a team spending dashboard, as demonstrated in the community update on 19 March 2020. | *JavaScript* |@jethrof @jeriko1|
|[WATCH: PDB Investec Transaction Insights](https://youtu.be/gAiP--sk4U8)|[<img src = "https://gitlab.com/grimx13/pdb-investec-transaction-insights/-/raw/master/images/investec_logger.png" width="200">](https://gitlab.com/grimx13/pdb-investec-transaction-insights)| This project utilises AWS Serverless and managed infrastructure to deliver transaction data to a Google sheet where I can draw insights from in near real time | *NodeJS*, *Python* | @grimx13 |

</details>

<a id="resources"></a>

## 📚 Resources
- [Use Cases](https://investec.gitbook.io/programmable-banking-community-wiki/get-building/use-cases)
- [Sample Apps](https://investec.gitbook.io/programmable-banking-community-wiki/get-started/sample-apps)
- [API Quick Start Guide](https://investec.gitbook.io/programmable-banking-community-wiki/get-started/api-quick-start-guide)
- [Card Quick Start Guide](https://investec.gitbook.io/programmable-banking-community-wiki/get-started/card-quick-start-guide)
- [Build Tutorials & Templates](https://investec.gitbook.io/programmable-banking-community-wiki/get-building/build-something-simple)
- [Community Libraries & Tools](https://investec.gitbook.io/programmable-banking-community-wiki/get-building/community-libraries-and-tools)

<a id="get-involved"></a>

## 🤝 Get Involved
We welcome contributions from developers of all skill levels. Check out [how to get involved](https://investec.gitbook.io/programmable-banking-community-wiki/community/get-involved) to get started. Join our community events and connect with fellow innovators!

Contributions are welcome to this, or any other repo! If you have any ideas, improvements, or new apps to add, please create a pull request.

Thank you for the support! 🙏

[![Star History Chart](https://api.star-history.com/svg?repos=Investec-Developer-Community/Community-Projects&type=Date)](https://www.star-history.com/#Investec-Developer-Community/Community-Projects&Date)

---

Feel free to reach out if you have any questions or need support. Follow us on [LinkedIn](https://www.linkedin.com/showcase/investecdeveloper/) to stay updated. Happy coding! 🚀
