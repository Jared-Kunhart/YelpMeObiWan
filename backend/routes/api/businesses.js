const express = require('express')
const asyncHandler = require('express-async-handler');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth')

const db = require('../../db/models');
const router = express.Router();
const { Business } = db;

router.get('/', asyncHandler(async(req, res) => {
    const businesses = await Business.findAll()
    return res.json({businesses})
}))

router.get('/:id', asyncHandler(async(req, res) => {
  const id = +req.params.id
  const business = await Business.findByPk(id)
  return res.json({business})
}))

router.post('/', requireAuth, asyncHandler(async(req, res) => {
    const { title, description, location, imageUrl } = req.body
    const ownerId = req.user.id
    const business = await Business.create({ title, description, location, imageUrl, ownerId })
    return res.json({ business })
}))

router.put('/:id(\\d+)', asyncHandler(async(req, res) => {
  const business = await Business.findByPk(req.params.id);
  business.title = req.body.title || business.title
  business.description = req.body.description || business.description
  business.location = req.body.location || business.location
  business.imageUrl = req.body.imageUrl || business.imageUrl
  await business.save()
  res.json({ business })
}))

router.delete('/:id(\\d+)', async(req, res) => {
  const business = await Business.findByPk(req.params.id)
  await business.destroy()
  res.status(204).end()
})

/*

Fetch test for business

fetch('/api/notebooks', {
  method: 'GET',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `NXh3J3cu-ngitPbH7CrHWmrEdGkiYwh5xlKo`
  },
}).then(res => res.json()).then(data => console.log(data));

*/

module.exports = router;
