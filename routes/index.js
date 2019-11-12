const express = require("express");
const router = express.Router();
const Products = require("../store/Products");
const Comment = require("../store/Comment");

/* GET home page. */
router.get("/", function(_, res) {
  Products.get().then(function(products) {
    res.render("index", { products });
  });
});

router.get("/product/:id", function(req, res) {
  Products.getById(req.params.id).then(function(product) {
    /* busca comentários */
    Comment.find({
      id_product: req.params.id
    }).then(comments =>
      res.render("product", { product: product[0], comments })
    );
  });
});

router.post("/product", function(req, res) {
  /* salvar comentário */
  Comment.create({
    id_product: req.body.id_product,
    author: req.body.name,
    comment: req.body.comment
  }).then(() => res.send("Comentário adicionado com sucesso!"));
});

module.exports = router;
