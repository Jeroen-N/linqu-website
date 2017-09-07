import express from 'express';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: "LinqU - Don't let your place of residence limit your career!"
  });
});

export default router;
