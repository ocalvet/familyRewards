/**
* Member.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  schema: true,
  autoUpdatedAt: true,
  autoCreatedAt: true,

  attributes: {
    id: { type: 'integer', primaryKey: true, unique: true },
    name: { type: 'string' },
    picture: { type: 'string' },
    createdAt: { type: 'datetime', defaultsTo: function() { return new Date(); } },
    updatedAt: { type: 'datetime', defaultsTo: function() { return new Date(); } }
  }
};

