const mongoose = require( "mongoose" );
const Schema = mongoose.Schema;


const orderSchema = new Schema( {
    data: { type: Array, required: true }, // push products in array and send it here
    user_Id:{ type:String },

}, {
    timestamps: true,
} );



module.exports = mongoose.model( "Order", orderSchema );