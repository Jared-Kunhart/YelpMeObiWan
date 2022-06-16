const express = require('express')
const asyncHandler = require('express-async-handler');
const { businessNotFoundError, validateBusiness } = require('../../utils/validation');
const { singleMulterUpload, singlePublicFileUpload, allowed_file } = require('../../awsS3')
const { requireAuth } = require('../../utils/auth')

const db = require('../../db/models');
const router = express.Router();
const { Business } = db;

router.get('/', asyncHandler(async(req, res) => {
    const businesses = await Business.findAll({
      include: db.Review,
    })
    return res.json({businesses})
}))

router.get('/:id', asyncHandler(async(req, res) => {
  const id = +req.params.id
  const business = await Business.findByPk(id)
  return res.json({business})
}))

router.post('/', requireAuth, singleMulterUpload("image"), asyncHandler(async(req, res) => {
    const { title, description, location } = req.body

    if (!allowed_file(req.file.originalname)) {
      return res.json({ "errors": "File type not permitted." })
    }


    const imageUrlAws = await singlePublicFileUpload(req.file);
    const ownerId = req.user.id
    const business = await Business.create({ title, description, location, imageUrl: imageUrlAws, ownerId })
    return res.json({ business })
}))

router.put('/:id(\\d+)', singleMulterUpload("image"), asyncHandler(async(req, res) => {
  const business = await Business.findByPk(req.params.id);

  if(!req.file) {
    if (business) {
      business.title = req.body.title || business.title
      business.description = req.body.description || business.description
      business.location = req.body.location || business.location
      await business.save();
      return res.json({ business })
    }
  }

  if (!allowed_file(req.file.originalname)) {
    return res.json({ "errors": "file type not permitted" })
  }

  const imageUrlAws = await singlePublicFileUpload(req.file);

  business.title = req.body.title || business.title
  business.description = req.body.description || business.description
  business.location = req.body.location || business.location
  business.imageUrl = imageUrlAws || business.imageUrl;
  await business.save()
  res.json({ business })
}))

router.delete('/:id(\\d+)', async(req, res) => {
  const business = await Business.findByPk(req.params.id)
  await business.destroy()
  res.status(204).end()
})

module.exports = router;
