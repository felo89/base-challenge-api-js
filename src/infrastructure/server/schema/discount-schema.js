var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DiscountSchema = new Schema({
	brand : String,
	threshold : Number,
	discount : Number,
});

const DiscountModel = mongoose.model('Discount', DiscountSchema, 'discounts');
module.exports = DiscountModel;
