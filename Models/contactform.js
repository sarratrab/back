const mongoose = require('mongoose');

const contactFormSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  email: { type: String, required: true },
  telephone:{type:String, required:true},
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ContactForm', contactFormSchema);

