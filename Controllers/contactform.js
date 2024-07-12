const ContactForm = require('../Models/contactform')

exports.addContactForm = async (req, res) => {
    const { nom, prenom, email, telephone, message } = req.body;
  
    const newContactForm = new ContactForm({
      nom,
      prenom,
      telephone,
      email,
      message
    });
  
    try {
      const savedContactForm = await newContactForm.save();
      res.status(201).json(savedContactForm);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.deleteMessage = async (req, res) => {
    try {
      const userId = req.params.id;
      await User.findByIdAndDelete(userId);
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  };
