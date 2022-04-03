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

router.post('/', requireAuth, asyncHandler(async(req, res) => {
    const { title, description, location, imageUrl } = req.body
    const ownerId = req.user.id
    const business = await Business.create({ title, description, location, imageUrl, ownerId })
    return res.json({ business })
}))

/*

Test for POSTing a business

fetch('/api/businesses', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `NXh3J3cu-ngitPbH7CrHWmrEdGkiYwh5xlKo`
  },
  body: JSON.stringify({
    title: "Adding Another Test Busines",
    description: "Adding another description",
    location: "Adding a loction",
    imageUrl: "Dead Link"
  })
}).then(res => res.json()).then(data => console.log(data));

*/

module.exports = router;
