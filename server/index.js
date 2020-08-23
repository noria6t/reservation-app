const express = require('express')

const app = express()

// herokuとかでサーバーのポートが変わっても参照できるように
const PORT = process.env.PORT || '3001'

app.listen(PORT, function(){
  console.log('I am lanning')
})