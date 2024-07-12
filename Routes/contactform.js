const express=require('express');
const router=express.Router();
const contactformController =require ('../Controllers/contactform');
const ContactForm = require('../Models/contactform');

router.post('/addformcontact',contactformController.addContactForm);
router.get('/getall', async (req, res) => {
    try {
      const contacts = await ContactForm.find();
      res.status(200).send(contacts);
    } catch (error) {
      res.status(400).send(error);
    }
  });

router.delete('/delete/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        await ContactForm.findByIdAndDelete(userId);
        res.status(200).json({ message: 'User deleted successfully' });
      } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
      }
    });
module.exports=router;


