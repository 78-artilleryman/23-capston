// const { Configuration, OpenAIApi } = require("openai");
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let user_input =[]

// rl.on("line",(line) => {

//   user_input = line.split(' ').map(el => parseInt(el));  
//   rl.close(); // close가 없으면 무한 입력
// });
// rl.on('close',() => {
//   user_input.forEach(el => {
//     console.log(el)
//   })

//   process.exit();
// })

const { Configuration, OpenAIApi } = require("openai");
const readline = require("readline");


const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let user_input=[];

rl.on("line",(line) => {
  user_input.push(line);
  rl.close();
});

  async function general(){
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: user_input}],
    }); 
    console.log(completion.data.choices[0].message);
}

rl.on('close',() => {
  console.log(user_input);
  process.exit();
});

// general();