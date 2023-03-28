const OpenAI = require('openai')
const {Configuration, OpenAIApi} = OpenAI
// const {Configuration, OpenAIApi} = require('openai');

const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3002;

const configuration = new Configuration({
//  organization: "org-61MEulc6s1BeLM2RoTdq7Wyg", 
// 회사가 아니라서 불필요
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res) => {
  const { message } = req.body
  const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${message}`,
      max_tokens: 4000,
      temperature: 0,
  });
  console.log(response.data)
  if (response.data) {
      if (response.data.choices) {
          res.json({
              message: response.data.choices[0].text
          })
      }
  }
})

app.listen(port, () => {
  console.log('Example app port: ' + port);
})