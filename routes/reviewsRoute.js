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
    // avoid respond in an empty array if reviewId doesn't exist
    if (rows.length === 0) {
      return res.send({
        error: `review id ${reviewId} doesn't exist.`
      })
    }
    res.json(rows[0]) // respond with the data
  } catch (err) {
    console.error(err.message)
    res.json(err)
  }
})

export default router
