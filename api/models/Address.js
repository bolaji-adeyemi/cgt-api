/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        address: {
            type: 'string',
            unique: 'true'
        },
        address_type:{
            type:'string'

        }

    }

};

