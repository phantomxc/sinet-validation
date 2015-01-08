'use strict';

module.exports = {
    'user' : {
        'name'     : {
            'presence' : true
        },
        'email'    : {
            'email'    : true,
            'presence' : true
        },
        'password' : {
            'length' : {
                'minimum' : 8
            }
        }
    }
};
