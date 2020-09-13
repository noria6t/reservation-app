const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/dev')
const SampleDb = require('./sample-db')

// 111のままだとサイドindex。js走らせるとDBのデータがが４つでなく８つまた走らせると１２..と増えてしまう
// 順番によって処理の順番めっちゃ大事
// DBの初期化中にダミーデータを入れたら、濃０ーデタまで一緒に消えてしまう。
// これを避けるためには…
// AwaitとAsync

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(
  () => {
    const sampleDb = new SampleDb()
    sampleDb.initDb()
  }
);

const app = express()

// コールバックfunctionのfunction(req, res)の形はexpress側のルールでの書き方。/productsというリクエストが来たらsuccessというのを呼び出した下の方で実行してね。
app.get('/products', function(req, res){
  res.json({'success': true})
})

// herokuとかでサーバーのポートが変わっても参照できるように
const PORT = process.env.PORT || '3001'

app.listen(PORT, function(){
  console.log('I am lanning!')
})

// mongoose mongoDBにアクセスする便利なフレームワーク
// npm install mongoose --save
// --saveとはインストール情報がpackage.jsonとpackage.lock.json(インストールフレームのインストール情報入ってる)の２つあるのだが、--saveとうつとpackageの情報がlockの方へ記憶される。
// 新しくチームメンバーが参加して、空っぽの人がsaveなしでnpm install mongooseとうつと、lockの内容がそのままコピーされる
