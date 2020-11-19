//
// Configuration section
//
// Follow the instructions in the Lab guide to set
// the following constants to run the web application
// against your AWS account:
//
//      API_GATEWAY_ENDPOINT_URI
//      IOT_BROKER_ENDPOINT
//      COGNITO_IDENTITY_POOL_ID
//      AWS_REGION
//
(function () {
    'use strict';

    angular
        .module('app')

        .constant('COGNITO_IDENTITY_POOL_ID',   'ap-southeast-1:ba067b34-4413-4e8f-91c8-4320463d33bb')
        .constant('COGNITO_USER_POOL',          'ap-southeast-1_2IYlDp4Gn')
        .constant('COGNITO_USER_POOL_CLIENT_ID','1mm17t67j2fdvett8d3dp9j3p8')
        .constant('COGNITO_APP_WEB_DOMAIN',     'mod-b65eb01514c84fc1-s3bucketwebsite18ddbcd4-orndbi8fml6i')

        .constant('AWS_REGION',                 'ap-southeast-1')
        .constant('APP_BANNER',                 'TravelBuddy')

})();
