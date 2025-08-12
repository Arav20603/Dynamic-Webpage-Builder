import express from 'express'
import { createNewPage, getPage } from '../controllers/page.controller.js'

let router = express.Router()

router.post('/', createNewPage)
router.get('/:slug', getPage)

export default router