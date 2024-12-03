import { Router } from 'express'

export default (router: Router) => {
  router.get('/api/users', (req, res) => {
    res.json({ message: 'Hello from API!' })
  })
}
