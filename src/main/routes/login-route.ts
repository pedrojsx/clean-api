import { Router } from 'express'

export default (router: Router): void => {
  router.get('/login', (req, res) => {
    return res.status(201).json({ env: true })
  })
}
