const express = require('express')
const router = express.Router()
// モデルのproductを読み込み
const Product = require('../model/product')

// postmanのhttp://localhost:3001/api/v1/productsで確認
router.get('', function(req, res){
  // OKじゃなくてDBのproductの情報を返すように変更したい
  // {} つまり何も中身をないときにerrまたはfoundProductsをレスポンスする。function(req, res)がexpressの書き方
  Product.find({}, function(err, foundProducts){
    return res.json(foundProducts)
  })
})

// postmanのhttp://localhost:3001/api/v1/products/_idをコピペしたもので確認。このままだと存在しないidを指定してもエラーが出ない。エラー表示させる記述はif(err)で書く
router.get('/:productId', function(req, res){
  // req.params.productIdにより'/:productId'のURLのproductIdを取得できる
  const productId = req.params.productId

  Product.findById(productId, function(err, foundProduct){
    if(err){
      // returnをきちんと書かないと下のres.jsonまで読み込まれんのでreturnを忘れない事
      // postmanのhttp://localhost:3001/api/v1/products/存在しないidでエラーが出力される
      return res.status(422).send({errors: [{title: 'Product error', detail: 'Product not found!'}]})
    }
    return res.json(foundProduct)
  })
})

module.exports = router