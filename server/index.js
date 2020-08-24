const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/dev')
mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express()

// コールバックfunctionのfunction(req, res)の形はexpress側のルールでの書き方。/productsというリクエストが来たらsuccessというのを呼び出した下の方で実行してね。
app.get('/products', function(req, res){
  res.json({'success': true})
})

// herokuとかでサーバーのポートが変わっても参照できるように
const PORT = process.env.PORT || '3001'

app.listen(PORT, function(){
  console.log('I am lanning')
})

// mongoose mongoDBにアクセスする便利なフレームワーク
// npm install mongoose --save
// --saveとはインストール情報がpackage.jsonとpackage.lock.json(インストールフレームのインストール情報入ってる)の２つあるのだが、--saveとうつとpackageの情報がlockの方へ記憶される。
// 新しくチームメンバーが参加して、空っぽの人がsaveなしでnpm install mongooseとうつと、lockの内容がそのままコピーされる
