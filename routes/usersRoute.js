import express from 'express'
import db from '../db.js' // import the database connection

const router = express.Router()

// Define routes
router.get('/users', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM users') //query the database
    res.json(rows) // respond with the data
  } catch (err) {
    console.error(err.message)
    res.json(err)
  }
})

// Export the router to use it in your main app
export default router
