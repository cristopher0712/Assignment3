import express from 'express';

const app = express();
const port = 3000;

// CRUD Operation
app.route('/route')
    // Read
  .get((req, res) => {
    res.send('Practising .get() method for "Read/Retrieve"')
  })
  // Create
  .post((req, res) => {
    res.send('Practising .post() method for "Create"')
  })
  // Update
  .put((req, res) => {
    res.send('Practising .update() method for "Update"')
  })
  // Delete
  .delete((req, res) => {
    res.send('Practising .delete() method for "Delete"')
  })

app.listen(port,() => {
    console.log(`App listening on port http://localhost:${port}`)
});