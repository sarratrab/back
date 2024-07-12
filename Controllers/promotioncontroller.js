const Promotion = require('../Models/promotion')

exports.getAllPromotions = async (req, res) => {
  try {
    const promotions = await Promotion.find();
    res.status(200).json(promotions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addPromotion = async (req, res) => {
  const { price, description } = req.body;

  if (!price || !description) {
    return res.status(400).json({ message: 'Price and description are required.' });
  }

  try {
    const newPromotion = new Promotion({ price, description });
    await newPromotion.save();
    res.status(201).json(newPromotion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deletePromotion = async (req, res) => {
  try {
    const promotion = await Promotion.findById(req.params.id);
    if (!promotion) return res.status(404).json({ message: 'Promotion not found.' });

    await promotion.remove();
    res.status(200).json({ message: 'Promotion deleted.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
