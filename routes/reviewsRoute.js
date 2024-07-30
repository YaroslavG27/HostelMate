import { Router } from 'express'
const router = Router()
import db from '../db.js' // import the database connection

router.get('/reviews', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM reviews') // query the database
    res.json(rows) // respond with the data
  } catch (err) {
    console.error(err.message)
    res.json(err)
  }
})

router.get('/reviews/:reviewId', async (req, res) => {
  let reviewId = req.params.reviewId
  console.log(reviewId)
  try {
    const { rows } = await db.query(
      `SELECT * FROM reviews WHERE review_id = ${reviewId}`
    )
    res.json(rows[0]) // respond with the data
  } catch (err) {
    console.error(err.message)
    res.json(err)
  }
})

export default router
