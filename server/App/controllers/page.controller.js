import Page from '../models/page.model.js'

export const createNewPage = async (req, res) => {
  try {
    const { slug, components } = req.body
    const page = await Page.findOne({ slug })
    if (!slug || !components) {
      return res.status(400).json({ error: "Slug and components are required" })
    }

    if (page) {
      return res.status(400).json({ error: "slug already exists" })
    }

    const newPage = await Page.create({ slug, components })
    res.status(201).json(newPage)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}


export const getPage = async (req, res) => {
  try {
    const page = await Page.findOne({ slug: req.params.slug })
    if (!page) {
      return res.status(404).json({ error: "Page not found" })
    }
    res.json(page)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}