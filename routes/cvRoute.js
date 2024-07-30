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

router.get('/cv/:cv_id', async (req, res) => {
  let cv_id = req.params.cv_id
  try {
    const { rows } = await db.query(`SELECT * FROM cv WHERE cv_id = ${cv_id}`)
    res.json(rows[0])
  } catch (err) {
    console.err(err.message)
    res.json(err)
  }
})

//And an example using the URL query for an SQL query:
router.get('/cvsearch', async (req, res) => {
  try {
    const { languages, job_title, location } = req.query
    let query = 'SELECT * FROM cv WHERE availability = true'
    if (languages) {
      query += ` AND languages LIKE '%${languages}%'`
    }
    if (job_title) {
      query += ` AND job_title LIKE '%${job_title}%'`
    }
    if (location) {
      query += ` AND location LIKE '%${location}%'`
    }
    console.log(query)
    const { rows } = await db.query(query)
    // avoid respond in an empty array if there's no worker according to the requirement
    if (rows.length === 0) {
      return res.send({
        error: `There are no candidates meeting these criteria.`
      })
    }
    res.json(rows)
  } catch (err) {
    console.err(err.message)
    res.json(err)
  }
})
// Export the router to use it in your main app
export default router
