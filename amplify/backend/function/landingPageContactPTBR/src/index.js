const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses');
const ses = new SESClient({ region: 'us-east-1' });

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const command = new SendEmailCommand({
    Destination: {
      ToAddresses: ['gugazimmermann@gmail.com'],
    },
    Message: {
      Body: {
        Text: { Data: `Email: ${body.email}` },
      },
      Subject: { Data: 'Landing Page - Contact' },
    },
    Source: 'gugazimmermann@gmail.com',
  });
  try {
    let response = await ses.send(command);
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
      body: JSON.stringify(response),
    };
  } catch (error) {
    console.log(`ERROR: ${JSON.stringify(error)}`);
  }
};
