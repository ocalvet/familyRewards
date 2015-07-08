var Member = {
  // Enforce model schema in the case of schemaless databases
  schema: true,
	
  identity: 'user',

  attributes: {
    // username  : { type: 'string', unique: true },
	//email     : { type: 'email',  unique: true },
	  name: { type: 'string' }
    // tasks: { collection: 'task' }
  }
};

module.exports = Member;