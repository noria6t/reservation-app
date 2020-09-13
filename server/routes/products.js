const express = require('express')
const router = express.Router()
// モデルのproductを読み込み
const Product = require('../model/product')

router.get('', function(req, res){
  // OKじゃなくてDBのproductの情報を返すように変更したい
  // {} つまり何も中身をないときにerrまたはfoundProductsをレスポンスする。function(req, res)がexpressの書き方
  Product.find({}, function(err, foundProducts){
    res.json(foundProducts)
  })
})

module.exports = router