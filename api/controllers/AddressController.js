/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  getAddress: function(req, res){
      var paymentMethod = req.allParams().payment_method;

      if(paymentMethod){
          Address.findOne({
              address_type: paymentMethod
          }).exec(function (err, foundAddress) {
              if(err) return res.negotiate(err);
              return res.json({
                  address: foundAddress
              })
          })
      }
  }

};

