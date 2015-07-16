var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    username  : { type: 'string', unique: true },
    email     : { type: 'email',  unique: true },
    passports : { collection: 'passport', via: 'user' },
    name: { type: 'string' },
    // role: { type:'string', enum: ['parent', 'child'] },
    // children: { collection: 'user', via: 'parent_of' },
    tasks: { collection: 'task' }
  }
};

module.exports = User;
