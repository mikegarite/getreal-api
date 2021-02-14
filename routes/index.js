var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({message: 'alive'});
});

const userRoutes = require('./user');
const amenityRoutes = require('./amenity');
const apartmentRoutes = require('./apartment');
const businessRoutes = require('./business');
const companyRoutes = require('./company');
const designRoutes = require('./design');
const emailRoutes = require('./email');
const floorplanRoutes = require('./floorplan');

router.use('/users', userRoutes);
router.use('/amenities', amenityRoutes);
router.use('/apartments', apartmentRoutes);
router.use('/businesses', businessRoutes);
router.use('/companies', companyRoutes);
router.use('/designs', designRoutes);
router.use('/emails', emailRoutes);
router.use('/floorplans', floorplanRoutes);


module.exports = router;
