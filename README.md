# webwhisperer
Web scrapping agentic AI with Chatgpt 4o, some pages might have security to block it off

# How to Setup
1. install WSL
2. manage the package with npm
```bash
npm install -g npm
```
3. cd server folder and
```bash
npm install
```
4. cd client/webwhisperer-client folder and
```bash
npm install
```
5. create **.env** in server folder with your openAI API key, this will be a paid feature where you need to top up credits
```bash
OPEN_API_KEY='your_open_ai_key'
```
6. you are good to go !

# Debug
## Frontend
cd **client/webwhisperer-client** folder
```bash
npm run dev
```
put your url into the search box
## Backend
```bash
# azure foundary agent
node azure.js
# dummy page for web scrapping (localhost:3000/DBS-1.html etc.)
node dbs.js
# openAI server
node index.js
```

## npm
10.0.2

## node
v22.15.1

# TO-DO
selenium

# Ingredients
### IDE
Visual Studio Code

### Language & Framework
Javascript <br/>
Typescript

### OS
Ubuntu 22.04

### Platform
Web App

### AI
Chatgpt 4o <br/>
OpenAI

# Screenshot
