'use strict';

module.exports.canary = async (event) => {
  return {
    statusCode: 200,
    body: 'Hello canary v3'
  };
};

module.exports.linear = async (event) => {
  return {
    statusCode: 200,
    body: 'Hola linear v2'
  };
};

