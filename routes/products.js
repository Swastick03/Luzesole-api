const express = require("express");
const router = express.Router();
const {getAllproducts,getAllproductsTesting,addNewProduct,updateProduct,deleteProduct} = require("../controllers/products");


router.route("/").get(getAllproducts);
router.route("/testing").get(getAllproductsTesting);
router.route("/new").post(addNewProduct);
router.route("/:id").put(updateProduct);
router.route("/:id").delete(deleteProduct);

module.exports = router;