const cognito_idp = new AWS.CognitoIdentityServiceProvider();
let AWS = require('aws-sdk');

exports.handler = function (request, response) {
    cognito_idp.listUsers({
        UserPoolId: "us-east-1_D10y3fy0o",
        Limit: "10"
    }, function (error, data) {
        if (error) {
            // implement error handling logic here
            throw error;
        }
        // your logic goes within this block
    });

    response.send({ "message": "Successfully executed" });
}