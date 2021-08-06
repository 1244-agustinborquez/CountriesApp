const express = require('express');
const router = express.Router();
const {activityPost, getActivity} = require('../functions/queries.js');


router.post('/', async (req,res,next) => {
    try {
        const postActivity = await activityPost(req.body)
        res.status(200).send(postActivity)
    } catch (error) {
        next(error)
    }
})



router.get('/', async (req,res,next) => {
    try {
        const resposeActivity = await getActivity()
        res.status(200).send(resposeActivity)
    } catch (error) {
        next(error)
    }
});

module.exports = router;