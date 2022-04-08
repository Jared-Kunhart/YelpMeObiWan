const express = require('express')
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth')

const db = require('../../db/models');
const router = express.Router();
const { Review } = db;

router.get('/', asyncHandler(async(req, res) => {
    const reviews = await Review.findAll()
    return res.json({reviews})
}))

router.post('/', requireAuth, asyncHandler(async(req, res) => {
    const { content, rating, businessId } = req.body
    const userId = req.user.id
    const review = await Review.create({ content, rating, userId, businessId })
    return res.json({ review })
}))

router.put('/:id(\\d+)', asyncHandler(async(req, res) => {
    const review = await Review.findByPk(req.params.id);
    review.content = req.body.content || review.content
    review.rating = req.body.rating || review.rating
    review.businessId = req.body.businessId || review.businessId
    await review.save()
    res.json({ review })
}))

  router.delete('/:id(\\d+)', async(req, res) => {
    const review = await Review.findByPk(req.params.id)
    await review.destroy()
    res.status(204).end()
})


// fetch('/api/reviews', {
//     method: 'GET',
//     headers: {
//       "Content-Type": "application/json",
//       "XSRF-TOKEN": `X3nIy35I-VWukedH71Qh-HMZzWjdZbAx5dro`
//     },
//   }).then(res => res.json()).then(data => console.log(data));

module.exports = router;
