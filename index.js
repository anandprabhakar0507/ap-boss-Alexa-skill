/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 **/

const Alexa = require('alexa-sdk');

const FACTS = [
"I am going to tell you a fact from bhagvad geeta spoken by lord krishna in mahabharata
yada yada hi dharmasya,
glanir bhavti bhartah,
abyuthanm adharmasya,
tadaatmaanam srijanyahamm,
paritranaay saadhunaam vinaashay cha dushkritaam,
dharma sansthapnaarthya,
sambhavaami yuge yuge!!
means  
god says that whenever there is an occurence of lust,cheating, violence on earth then
i come again and again and destroy all those bad evils and establish a fresh and pure life again on earth",
"Let me tell you about someone named Anand prabhakar.He is a student,web developer,data scientist and an active programmer he learns and practices html,css,js,python,java,go,sql,node-json,bootstrap,jquery and php and he loves exploring new things",
"Do you know than i am made using a serverless application at lambda arn..and i can also be configured in echo dot devices i am amazon alexa i am the live example of artificial intelligence",
"i am going to tell you a fact spoken by saige valmiki in ramayan,Mother and motherland is more great than the heaven",
"Earth is the only known planet till now that have life and we are very lucky that we belong from earth..The whole earth is family",
];

const SKILL_NAME = 'My School Facts';
const GET_FACT_MESSAGE = "Here's your school fact: ";
const HELP_MESSAGE = 'You can say tell me a fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

const handlers = {
  'LaunchRequest': function () {
    this.emit('GetFactIntent');
  },
  'GetFactIntent': function () {
    const factArr = FACTS;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    this.response.cardRenderer(SKILL_NAME, randomFact);
    this.response.speak(speechOutput);
    this.emit(':responseReady');
  },
  'SessionEndedRequest': function () {
  },
  'AMAZON.HelpIntent': function () {
    const speechOutput = HELP_MESSAGE;
    const reprompt = HELP_REPROMPT;

    this.response.speak(speechOutput).listen(reprompt);
    this.emit(':responseReady');
  },
  'AMAZON.CancelIntent': function () {
    this.response.speak(STOP_MESSAGE);
    this.emit(':responseReady');
  },
  'AMAZON.StopIntent': function () {
    this.response.speak(STOP_MESSAGE);
    this.emit(':responseReady');
  },
};

exports.handler = function (event, context, callback) {
  const alexa = Alexa.handler(event, context, callback);
  alexa.appId = "amzn1.ask.skill.b71d9e6d-0e93-4fcd-8c4a-187ceda51652";
  alexa.registerHandlers(handlers);
  alexa.execute();
};
