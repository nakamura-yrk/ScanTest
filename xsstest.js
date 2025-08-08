const express = require('express');
const app = express();

app.get('/search', (req, res) => {
  const userInput = req.query.q;

  // 【脆弱性】ユーザーからの入力を無害化せずに、HTMLに直接埋め込んでいる
  res.send(`<h1>検索結果: ${userInput}</h1>`);
});

app.listen(3000);
