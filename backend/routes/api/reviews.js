const express = require('express')
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth')

const db = require('../../db/models');
const router = express.Router();
const { Review } = db;

router.get('/', asyncHandler(async(req, res) => {
    const reviews = await Review.findAll({
        include: db.User,
    })
    console.log(reviews)
    return res.json({reviews})
}))

router.post('/', requireAuth, asyncHandler(async(req, res) => {
    const { content, rating, businessId } = req.body

    const userId = req.user.id
    const newReview = await Review.create({ content, rating, userId, businessId })
    const review = await Review.findOne({
        where: {
            id: newReview.id,
        },
        include: db.User
    })
    return res.json({ review })
}))

router.put('/:id(\\d+)', requireAuth, asyncHandler(async(req, res) => {
    const newReview = await Review.findByPk(req.params.id);
    const userId = req.user.id
    newReview.content = req.body.content || newReview.content
    newReview.rating = req.body.rating || newReview.rating
    newReview.businessId = req.body.businessId || newReview.businessId
    await newReview.save()
    const review = await Review.findOne({
        where: {
            id: newReview.id,
        },
        include: db.User
    })
    console.log(review)
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

// fetch('/api/comments', {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json",
//       "XSRF-TOKEN": `X3nIy35I-VWukedH71Qh-HMZzWjdZbAx5dro`
//     },
//     body: JSON.stringify({
//         "comment": "hello roger"
//         "imageId": 1
//     })
//   }).then(res => res.json()).then(data => console.log(data));

module.exports = router;
