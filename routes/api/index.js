const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');

router.use('/thought-routes', thoughtRoutes);
router.use('/user-routes', userRoutes);

module.exports = router;
