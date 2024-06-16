const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");
const dialogflow = require('@google-cloud/dialogflow');
const { WebhookClient, Payload } = require('dialogflow-fulfillment');
const express = require("express");
var nodemailer = require('nodemailer');
const MODEL_NAME = "gemini-1.5-pro-latest";
const API_KEY = "AIzaSyAwbaPFT8k16GmIOM3Xd-tbX-L8Q5N5Ss8";

async function runChat(queryText) {
    const genAI = new GoogleGenerativeAI(API_KEY);
    // console.log(genAI)
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
        temperature: 1,
        topK: 0,
        topP: 0.95,
        maxOutputTokens: 50,
    };

    const chat = model.startChat({
        generationConfig,
        history: [
        ],
    });

    const result = await chat.sendMessage(queryText);
    const response = result.response;
    return response.text();
}

const webApp = express();
const PORT = process.env.PORT || 5001;
webApp.use(express.urlencoded({
    extended: true
}));
webApp.use(express.json());
webApp.use((req, res, next) => {
    console.log(`Path ${req.path} with Method ${req.method}`);
    next();
});
webApp.get('/', (req, res) => {
    res.sendStatus(200);
    res.send("Status Okay")
});

webApp.post('/dialogflow', async (req, res) => {

    var id = (res.req.body.session).substr(43);
    console.log(id)
    const agent = new WebhookClient({
        request: req,
        response: res
    });

    async function fallback() {
        let action = req.body.queryResult.action;
        let queryText = req.body.queryResult.queryText;

        if (action === 'input.unknown') {
            let result = await runChat(queryText);
            agent.add(result);
            console.log(result)
        }else{
            agent.add(result);
            console.log(result)
        }

      

    }
    function hi(agent) {
        console.log(`intent  =>  hi`);
        agent.add('assalamualikum, I am your Bookow virtual assistant, Tell me  how may I help you')

    }
    function collectingData(agent) {
        const { color ,name1 ,cowage,cowtype, budget, location ,gender,geocity,geocountry, email} = agent.parameters;
       agent.add(' Assalamualikum! $[name1]your cow of $[color]and gender $[gender]of age $[cowage]and cow type$[cowtype]will be delivered with in 24 hour to $[location]$[geocity]$[geocountry]')
    
       var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'faisalabdulrehman97@gmail.com',
    pass: 'xkjwpnpwxuxegzhm'
  }
});

var mailOptions = {
  from: 'faisalabdulrehman97@gmail.com',
  to: 'asmaf610@gmail.com',
  subject: 'Congratulations on Your Current Enrollment!',
html:'<div style="border: 1000px;"><p>Assalamualikum! $[name1]your cow of $[color]and gender $[gender]of age $[cowage]and cow type$[cowtype]will be delivered with in 24 hour to $[location]$[geocity]$[geocountry]</p></div>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

     


}
    
    let intentMap = new Map();
    intentMap.set('Default Welcome Intent', hi);
    intentMap.set('Default Fallback Intent', fallback);
    intentMap.set('collecting-info',collectingData );
    agent.handleRequest(intentMap);
});

webApp.listen(PORT, () => {
    console.log(`Server is up and running at http://localhost:${PORT}/`);
});
