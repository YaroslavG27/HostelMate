// import express
import express from 'express'
// run the express function
const app = express()

// create routes
app.get('/', (req, res) => {
  res.send('Welcome to Hostel Mate!')
})
// Import the users router module
import usersRouter from './routes/usersRoute.js'
import cvRouter from './routes/cvRoute.js'
import reviewsRouter from './routes/reviewsRoute.js'
// Tell the app to use the user router
app.use(usersRouter, cvRouter, reviewsRouter)

// keep the server open
app.listen(4000, () => {
  console.log('Server is ready to accept requests')
})
