import express from 'express'

const router = express.Router()

//Define routes
router.get('/cv', (req, res) => {
  res.send('Hello form cv!')
})

// Export the router to use it in your main app
export default router
