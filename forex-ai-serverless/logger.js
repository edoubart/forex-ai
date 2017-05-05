"use strict";

module.exports.handler = (event, context, callback) => {
  console.log('Event', JSON.stringify(event, null, 2));
  console.log('Context', JSON.stringify(context, null, 2));
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      event,
      context
    }),
  };
  return callback(null, response);
};
