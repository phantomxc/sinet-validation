'use strict';

( function ( isNode, isAngular ) {
    var constraints = {
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
    if ( isAngular ) {
        angular.module( 'sinet.validation', [] ).factory( 'SinetValidation', function () {
            return constraints;
        } );
    } else if ( isNode ) {
        module.exports = constraints;
    }
} )( typeof module !== 'undefined' && module.exports, typeof angular !== 'undefined' );
