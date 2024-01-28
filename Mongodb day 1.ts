// Find all the information about each product:
db.products.find({});
// Find the product price which is between 400 to 800:
db.products.find({ product_price: { $gte: 400, $lte: 800 } });
// Find the product price which is not between 400 to 600:
db.products.find({ product_price: { $not: { $gte: 400, $lte: 600 } } });
// List the four products which are greater than 500 in price:
db.products.find({ product_price: { $gt: 500 } }).limit(4);
// Find the product name and product material of each product:
db.products.find({}, { product_name: 1, product_material: 1, _id: 0 });
// Find the product with a row id of 10:
db.products.findOne({ id: "10" });
// Find only the product name and product material:
db.products.find({}, { product_name: 1, product_material: 1, _id: 0 });
// Find all products which contain the value 'soft' in product material:
db.products.find({ product_material: { $regex: /soft/i } });
// Find products which contain product color 'indigo' and product price 492.00:
db.products.find({ product_color: "indigo", product_price: 492.0 });
// Delete the products which product price value is the same:
db.products.remove({ product_price: { $eq: 492.0 } });
