'use strict';

module.exports = {
  getContact: (event,context,callback) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({ "message": "getContact api method executed successfully." })
    };
    callback(null,response)
  },
  postContact: (event,context,callback) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({ "message": "postContact api method executed successfully." })
    };
    callback(null,response)
  }
};
