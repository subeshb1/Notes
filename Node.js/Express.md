* Starting a server
  const express = require('express')
  const app = express();

* Serving static file
  app.use('static',express.static('directory'));
  //use is to specify which route

\*Port
const PORT = process.env.PORT || 4000 //any available port;

\*Listening for new Request
app.listen(PORT, () => {
console.log('Listening');
});

\**
res.render(view) //used to render views with ejs
*Routers
Routers are defined for each route and respective Requests
//req = Request, res = Response,
CRUD
-post //Create
-get //Request
-put //Update
-delete //Delete

1. GET
   -Used to Request Data
   app.get('/rouute' , (req,res,next) => {
   res.status(statusCode).send(data);
   //404 for data not found
   //200 is default for data found and sent
   });

//Route Parameter Same for all other requests
app.get('/route/:id',(req,res,next) => {
req.params.id
});
//Route Query
app.get('/route/:id/countries',(req,res,next) => { ///route/1/countries?age=1&name=subesh
req.query//returns object
});

2. Put
   -Used to update Data
   app.putp('/rouute' , (req,res,next) => {
   res.status(statusCode).send(data);
   //404 for data not found
   //202 is default for data found and sent
   });

3.POST
same 201 for new data 400 for invalid

4.DELETE
204 if deleted or 404

////////////////////////////////////////////////////////////////////////////
Express.Router

* Handle specific routes, Keep each router in seperate file
  const another = express.Router();
  app.use('/another',another); //the same way can be used for nexting other routes

/////////////////////////////////////////////////////////////////
Middleware
-Are used to remove redundancy

Stacks,next() is used to call the next middleware in the sequence of file
Every Route in Express is a middleware in the stack.

For all method with common code
app.use( (req,res,next) => {
...action
next();
});

//For specific route
app.use('/path', (req,res,next) => {
...action
next();
});
//You can attach property to middleware req
req.newProp = value;
app.use([array of paths],callback);

* Control
  next() should always be at last
