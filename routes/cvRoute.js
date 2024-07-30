import express from 'express'
import db from '../db.js'

const router = express.Router()

//Define routes
router.get('/cv', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM cv') // query the database
    res.json(rows) // respond with the data
  } catch (err) {
    console.err(err.message)
    res.json(err)
  }
})

// Export the router to use it in your main app
export default router
