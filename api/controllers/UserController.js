/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    createUser: function(req, res){
      var user = req.body.data;

      if(user.password !== user.confirmpassword){
          return res.negotiate('password does not match');
      }

      User.create(user).exec(function(err, createduser){
          if(err){
              return res.negotiate(err);
          }

          return res.json({
              user: createduser
          });
      });

    }
	
};

