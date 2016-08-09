var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;
var spamcount = 0;

var fs = require('fs');
fs.writeFile("message.txt", "Hey there!", function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 

var ryanQuotes = ["Excited",
                    "Kk",
                    "Uh oh",
                    "It'll be okay",
                    "Do it",
                    "Yep",
                    "I'm just here for the memes",
                    "Noah Smith, what a damn good fella","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
  
function sleep(milliseconds){
  var start = new Date().getTime();
  for(var i=0; i<1e7;i++){
    if((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}  
  
function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegexExams = /^\/exams/;  botRegexNumber = /^\/number/;  botRegexHeart = /^\/totalhearts/;  botRegexKiss = /^\/kiss/;  botRegexRock = /^\/rockpaperscissors/; botRegexGif = /^\/gif/;
      botRegexBurn = /^\/burn/;  botRegex = /^\/cool guy/;  botRegexBall = /^\/8ball/;  botRegexSpook = /^\/spooky/; botRegexRoll = /^\/roll \/roll/;  botRegexDie = /^\/roll/;  
      botRegexCoin = /^\/flip a coin/; botRegexMeme = /^\/meme/; botRegexSalt = /^\/salt/; botRegexPraise = /^\/praise cool guy/; botDuck = /^\/duck/;
      botRegexRyan = /^\/ryan/i; botRegexSpam = /^\/spam/;  botRegexSh = /^\/shrug/; botRegexRyanPurge = /^\/purge/; botRegexRandom = /^\/random/; botRegexRandomSpam = /^\/randomspam/; botRegexEmoji = /^\/rockpaperemoji/; 
  var randomCommands = [botRegexExams, botRegexNumber, botRegexHeart, botRegexKiss, botRegexRock, botRegexGif, botRegexBurn, botRegex, botRegexBall, botRegexSpook, botRegexDie,
                        botRegexCoin, botRegexMeme, botRegexSalt, botRegexPraise, botDuck, botRegexRyan, botRegexSpam, botRegexSh, botRegexEmoji];
  var mockQuotes = ["911 What is your emergency?",
                    "With nowhere else to turn, he got on his knees and prayed",
                    "He was happy to answer the little girl's question. He bent down and said to her",
                    "'Where do you see yourself in five years?' Ryan was relieved. He had practiced for this questions many times in the mirror the night before. He confidently said",
                    "The fart was louder than expected. Everyone was staring. He could have apologized, but instead he stood up on his desk and loudly proclaimed",
                    "Ryan's mom:\n'Honey is there anything else you would like me to send you in the care package?'\nRyan:",
                    "Sir, have you been drinking tonight?",
                    "Do you solemnly swear that you will tell the truth, the whole truth, and nothing but the truth, so help you God?",
                    "The girl across the bar clearly wanted him to come over, so he did.\nGirl:\n'I'm Jennifer'\nRyan:",
                    "How do you plead?",
                    "When the historian came asking to see his award winning collection of memes, Ryan said",
                    "The night was going great, she wanted him, he knew it, it was just a matter of sealing the deal. He leaned in close. He could smell the perfume on her neck. He whispered into her ear",
                    "With his pants around his ankles and 12 angry women surrounding him in the produce aisle he said \n'Ladies, I can explain...'",
                    "He shook the President's hand and said",
                    "'Alright Ryan' his mother said 'you can get one toy'",
                    "Welcome to Olive Garden, what can I get for you today?",
                    "Son, what's this I found under your bed?",
                    "As they strapped him into the electric chair, he had but one last thing to say",
                    "The bodies surrounded him. His childhood home was ablaze. A single tear was shed as he walked away. Turning back one last time, he shouted",
                    "Hey what are you doing this weekend?",
                    "What's you deepest sexual fantasy?",
                    "How's work going?",
                    "'I do' the groom said. Ryan couldn't watch. He couldn't bare the thought of the love of his life getting away.\nThe bride opened her mouth.\n'I d-'\n'WAIT!' Ryan screamed",
                    "When asked about his views on the war in the middle east he said",
                    "His high school bully walked toward him. He said the only thing he could think of to delay the attack",
                    "I'm...I'm sorry but the results came up positive",
                    "When asked about his views on global warming he said",
                    "Ryan was a good man. We all lived by his inspiring words. I think the one quote we all knew him for was",
                    "Where was the last page of his notes? He hadn't memorized the speech. He stood there in silence in front of the entire UN. He was going to have to improvise his closing.\n'In summary...'",
                    "He woke up next to a strange woman in his bed. Or is it her bed? Definitely her bed. Oh god she's hideous, better bounce. He looked for a piece of paper to leave a note. He didn't even know this woman, what should he write? Oh good her ID. Susie? Okay well here it goes.\n'Dear Susie...'"];
  
  var awake = "";
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } 
  else if(request.text && botRegexRyan.test(request.text)) {
    this.res.writeHead(200);
    var randomQuote = "";
    while(randomQuote == ""){
      randomQuote = ryanQuotes[Math.floor(Math.random() * 100)];
    }
    postMessage(mockQuotes[Math.floor(Math.random() * 30)] + "\n'" + randomQuote + "'");
    this.res.end();
  }  
  else if(request.text && botRegexHeart.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Idk. Like..." + Math.floor(Math.random() * 5000) + "?");
    this.res.end();
  }   
  else if(request.text && botRegexRandomSpam.test(request.text)) {
    this.res.writeHead(200);
    var aRandomNumber = (Math.floor(Math.random() * 10) + 1);
    var commandNumber1 = 0;
    var commandText1 = "";
    //var commandText2 = "";
    for(var k = 0; k < aRandomNumber; k++){
      commandNumber1 = Math.floor(Math.random() * randomCommands.length);
      commandText1 = randomCommands[commandNumber1].toString();
      commandText1 = commandText1.substring(3,commandText1.length - 1);
      postMessage(commandText1);
      //commandText2 = commandText2 + " " + commandText1;
    }
    /*
    //this part didnt' work
    //ryan/i causes problems
    postMessage(commandText2);
    for(k = 0; k < (aRandomNumber - 1); k++){
      commandText2 = commandText2.substring(1,commandText2.length);
      commandText2 = commandText2.substring(commandText2.indexOf("/"), commandText2.length);
      postMessage(commandText2);
    }*/
    this.res.end();
  } 
  else if(request.text && botRegexRandom.test(request.text)) {
    this.res.writeHead(200);
    var commandNumber = Math.floor(Math.random() * randomCommands.length);
    var commandText = randomCommands[commandNumber].toString();
    commandText = commandText.substring(3,commandText.length - 1);
    postMessage(commandText);
    this.res.end();
  } 
  else if(request.text && botRegexNumber.test(request.text)) {
    this.res.writeHead(200);
    var low = Math.floor(Math.random() * 20);
    var high = Math.floor(Math.random() * 2000) + 3000;
    var number = 0;
    if(Math.random() < 0.5){
      number = low;
    }
    else{
      number = high;
    }
    postMessage("For sure " + number);
    this.res.end();
  } 
  else if(request.text && botRegexRyanPurge.test(request.text)) {
    this.res.writeHead(200);
    var numbercount = 0;
    var quotelist = "";
    while(numbercount < 30){
      quotelist = quotelist + "$~" + ryanQuotes[numbercount];
      numbercount++;
    }
    postMessage(quotelist);
    this.res.end();
  }   
  else if(request.text && botRegexRock.test(request.text)) {
    this.res.writeHead(200);
    var req1 = request.text.substring(18,request.text.length);
    req1 = req1.trim();
    var rockQuotes = ["✌","✊","✋"];
    var req2 = rockQuotes[Math.floor(Math.random() * 3)];
    postMessage(req2);
    sleep(1000);
    if((req1 != "✌") && (req1 != "✊") && (req1 != "✋")){
      postMessage("CALCULATING\n\n...\n\n" + req2 + " beats " + req1);
    }
    this.res.end();
  }  
    else if(request.text && botRegexEmoji.test(request.text)) {
    this.res.writeHead(200);
    var emojiList = ["😄","😃","😊","☺","😉","😍","😘","😚","😜","😝","😳","😁","😔","😌","😒","😞","😣","😢","😂","😭","😪","😥","😰","😅","😓","😩","😫","😨","😱","😠","😡","😤","😖","😆","😋","😷","😎","😵","😲","😈","👿","😐","😶","😇","😏","👲","👳","👮","👷","💂","👶","👦","👧","👨","👩","👴","👵","👱","👼","👸","😺","😸","😻","😽","😼","🙀","😿","😹","😾","👹","👺","🙈","🙉","🙊","💀","👽","💩","🔥","✨","🌟","💫","💥","💢","💦","💧","💤","💨","👂","👀","👃","👅","👄","👍","👎","👌","👊","✊✌","👋","✋","👐","👆","👇","👉","👈","🙌","🙏","☝","👏","💪","🚶","🏃","💃","👫","👪","💏","💑","👯","🙆","🙅","💁","🙋","💆","💇","💅","👰","🙎","🙍","🙇","🎩","👑","👒","👟","👞","👡","👠","👢","👕","👔","👚","👗","🎽","👖","👘","👙","💼","👜","👝","👛","👓","🎀","🌂","💄","💛","💙","💜","💚","❤","💔","💗","💓","💕","💖","💞","💘","💌","💋","💍","💎","👤","💬","👣","🐶","🐺","🐱","🐭","🐹","🐰","🐸","🐯","🐨","🐻","🐷","🐽","🐮","🐗","🐵","🐒","🐴","🐑","🐘","🐼","🐧","🐦","🐤","🐥","🐣","🐔","🐍","🐢","🐛","🐝","🐜","🐞","🐌","🐙","🐚","🐠","🐟","🐬","🐳","🐎","🐲","🐡","🐫","🐩","🐾","💐","🌸","🌷","🍀","🌹","🌻","🌺","🍁","🍃","🍂","🌿","🌾","🍄","🌵","🌴","🌰","🌱","🌼","🌑","🌓","🌔","🌕","🌛","🌙","🌏","🌋","🌌","🌠","⭐☀","⛅☁","⚡☔","❄⛄","🌀","🌁","🌈","🌊","🎍","💝","🎎","🎒","🎓","🎏","🎆","🎇","🎐","🎑","🎃","👻","🎅","🎄","🎁","🎋","🎉","🎊","🎈","🎌","🔮","🎥","📷","📹","📼","💿","📀","💽","💾","💻","📱","☎","📞","📟","📠","📡","📺","📻","🔊","🔔","📢","📣","⏳⌛","⏰⌚","🔓","🔒","🔏","🔐","🔑","🔎","💡","🔦","🔌","🔋","🔍","🛀","🚽","🔧","🔩","🔨","🚪","🚬","💣","🔫","🔪","💊","💉","💰","💴","💵","💳","💸","📲","📧","📥","📤","✉","📩","📨","📫","📪","📮","📦","📝","📄","📃","📑","📊","📈","📉","📜","📋","📅","📆","📇","📁","📂","✂","📌","📎","✒✏","📏","📐","📕","📗","📘","📙","📓","📔","📒","📚","📖","🔖","📛","📰","🎨","🎬","🎤","🎧","🎼","🎵","🎶","🎹","🎻","🎺","🎷","🎸","👾","🎮","🃏","🎴","🀄","🎲","🎯","🏈","🏀","⚽","⚾","🎾","🎱","🏉","🎳","⛳","☕","🍵","🍶","🍺","🍻","🍸","🍹","🍷","🍴","🍕","🍔","🍟","🍗","🍖","🍝","🍛","🍤","🍱","🍣","🍥","🍙","🍘","🍚","🍜","🍲","🍢","🍡","🍳","🍞","🍩","🍮","🍦","🍨","🍧","🎂","🍰","🍪","🍫","🍬","🍭","🍯","🍎","🍏","🍊","🍋","🍒","🍇","🍉","🍓","🍑","🍈","🍌","🍍","🍠","🍆","🍅","🌽","🏠","🏡","🏫","🏢","🏣","🏥","🏦","🏪","🏩","🏨","💒","⛪","🏬","🌇","🌆","🏯","🏰","⛺","🏭","🗼","🗾","🗻","🌄","🌅","🌃","🗽","🌉","🎠","🎡","⛲","🎢","🚢","⛵","🚤","⚓","🚀","✈","💺","🚉","🚄","🚅","🚇","🚃","🚌","🚙","🚗","🚕","🚚","🚨","🚓","🚒","🚑","🚲","💈","🚏","🎫","🚥","⚠","🚧","🔰","⛽","🏮","🎰","♨","🗿","🎪","🎭","📍","🚩"];
    var req3 = request.text.substring(15,request.text.length);
    req3 = req3.trim();
    var req4 = emojiList[Math.floor(Math.random() * emojiList.length)];
    postMessage(req4);
    if(Math.random() < 0.5){
      postMessage("\n\nCALCULATING\n\n...\n\n" + req4 + " beats " + req3 + "\n🍆🍆🍆YOU LOSE🍆🍆🍆");
    }
    else{
      postMessage("\n\nCALCULATING\n\n...\n\n" + req3 + " beats " + req4 + "\n🎺🎺🎺YOU WIN🎺🎺🎺");
    }
    this.res.end();
  }  
    else if(request.text && botRegexSpam.test(request.text)) {
    this.res.writeHead(200);
    postMessage(request.name + " has been banned for conspiracy to commit /spam");
    this.res.end();
  }   
  else if(request.text && botRegexPraise.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Praise be unto you");
    this.res.end();
  }  
  else if(request.text && botRegexExams.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/c4jt321.png");
    this.res.end();
  }  
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/B5BSVqH.png");
    this.res.end();
  } 
  else if(request.text && botRegexGif.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://replygif.net/i/"+Math.floor((1497*Math.random())+100)+".gif");
    this.res.end();
  }
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
  else if(request.text.substring(0,5) && botRegexBall.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.indra.com/8ball/"+Math.floor((20*Math.random())+1)+".gif");
    this.res.end();
  }
  else if(request.text && botRegexMeme.test(request.text)) {
    this.res.writeHead(200);
    function rand(){
      return Math.floor(Math.random() * 10);
    }
    postMessage("http://www.memecreator.org/static/images/memes/38"+rand()+rand()+rand()+rand()+rand()+".jpg");
    this.res.end();
  }
  else if(request.text && botRegexRoll.test(request.text)) {
    this.res.writeHead(200);
    postMessage(request.name + " has been banned for /rolling https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    this.res.end();
  }
  else if(request.text && botRegexDie.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    req = req.trim();
    req = req[0].toUpperCase() + req.slice(1);
    postMessage(req + " was rolled");
    this.res.end();
  }
  else if(request.text && botRegexCoin.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Heads");
    this.res.end();
  }
  else if(request.text && botRegexSpook.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/1bgaiT0clnf0I/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexBurn.test(request.text)) {
    this.res.writeHead(200);
    postMessage("༼⁰o⁰；༽ SICK BURN ༼⁰o⁰；༽");
    this.res.end();
  }
  else if(request.text && botRegexKiss.test(request.text)) {
    this.res.writeHead(200);
    postMessage("lol no homo");
    this.res.end();
  }
  else if(request.name == "Ryan Sharkey") {
    this.res.writeHead(200);
    var ryanAction = Math.random();
    ryanQuotes[Math.floor(ryanAction * 100)] = request.text;
    if((ryanAction <= 0.012) && (ryanAction > 0.006)){
      postMessage("Ryan is undoot\nType /meme to doot Ryan");
    }
    else if ((ryanAction <= 0.006) && (ryanAction > 0.003)){
      postMessage("Ryan Sharkey? More like Ryan ShLAMEkey\nType /burn to put Ryan in his place");
    }
    else if (ryanAction <= 0.003){
      postMessage("Woah, do you kiss your motherboard with that mouth?\nType /kiss to kiss Ryan's motherboard");
    }
    else {}
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  awake = request.text;
  //}//if awake
  //}//while
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
