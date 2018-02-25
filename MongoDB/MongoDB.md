\*Inorder to communicate with mongodb we require mongoose in server
const mongoose = require('mongoose');

* To connect to mongodb
  mongoose.connect(`mongodb://localhost/dbname`);

* mongoose can listen to eventsand attach multiple listeners
  mongoose.connection.once('open' , () =>{ //once means to listen only once
  ...
  }) .on('error' , (error) => {}) //error listener

* In a No-SQL DB collection (tables) keep records(rows) based on models schema (pattern)
  Schema tells model what to expect. Each model has a unique schema

Creating a new schema

const Schema = mongoose.Schema;
const newSchema = new Schema({
name: dataType
...
});

-- To create a model
const name = new mongoose.model('name',schema);

* Mocha is a testing tool
  describe(' Test Detail' , () => {
  it('operatiion' ,(done) => {
  assert( tests);
  //Example assert( 2 + 3 === 5);
  done(); //required for asyncronous calls
  });
  });

For mocha to run some code before tests //This is called hooks
before(function(done) {
code
done();
});

beforeEach( (done) => {} ) //done after each test

-- To save new record to a model // Used in a instance
let newItem = new ModelName ({

});
newItem.save().then(callback).catch(callback);

-- To find data (select) //USed in a Model
ModelName.find({name: Name}).then( result => {
...
done();
});

ModelName.findOne({name: Name}).then( result => {
...
done();
});

--- \_id is an object of unique document

--- DELETE document

instance.remove();
Model.remove( {criteria} );
Model.findOneAndRemove( {criteria} );

--- UPDATE Records
instance.update();
Model.update( {criteria}, {newVal} );
Model.findOneAndUpdate( {criteria}, {newVal} )

------ $inc is used to increment integer number by 1
Model.update( {name:'Subesh'} , { $inc: {weight: incval} })

//Check the documentation for more features

////////////

-----------------Relational Models are Nested in array--------

const BookSchema = new Schema({
title: String,
pages: Number
});

const AuthorSchema = new Schema ( {
name: String,
age: Number,
books: [BookSchema]
});
