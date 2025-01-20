const Record = require('../models/record');
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host : 'smtp.gmail.com',
  secure: true,
  port: 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.getRecords = async (req, res) => {
  try {
    const records = await Record.findAll();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch records' });
  }
};

exports.updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  console.log(id, status)
  if (!['Open', 'Close'].includes(status)) {
    return res.status(400).json({ error: 'Invalid status value' });
  }

  try {
    const record = await Record.findByPk(id);
    if (!record) return res.status(404).json({ error: 'Record not found' });

    record.status = status;
    await record.save();

    // Send email notification
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: record.email,
      subject: `Status ${status}`,
      text: `Your status is now ${status}.`,
    });

    res.json(record);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update status' });
  }
};
