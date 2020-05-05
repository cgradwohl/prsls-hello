'use strict';

module.exports.hello = async event => {
  console.log('EVENT', JSON.stringify(event));
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `FOO: ${process.env.FOO} !`,
        input: event,
      },
      null,
      2
    ),
  };
};
