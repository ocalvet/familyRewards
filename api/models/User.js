var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    id: { type: 'integer', primaryKey: true, unique: true },
    username  : { type: 'string', unique: true },
    email     : { type: 'email',  unique: true },
    passports : { collection: 'passport', via: 'user' },
    name: { type: 'string' },
    // role: { type:'string', enum: ['parent', 'child'] },
    children: { collection: 'user', via: 'parent' },
    // tasks: { collection: 'task' },
    parent: { model: 'user' }
  }
};

module.exports = User;
