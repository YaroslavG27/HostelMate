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

router.get('/users/:user_id', async (req, res) => {
  let user_id = req.params.user_id
  console.log(user_id)
  try {
    const { rows } = await db.query(
      `SELECT * FROM users WHERE user_id = ${user_id}`
    )
    res.json(rows[0])
  } catch (err) {
    console.error(err.message)
    res.json(err)
  }
})

// Export the router to use it in your main app
export default router
