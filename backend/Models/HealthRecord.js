const mongoose = require('mongoose');

const HealthRecordSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  disease: {
    type: String,
    required: true
  },
  symptoms: String,
  prescription: String,
  scanImageUrl: String
}, { timestamps: true });

module.exports = mongoose.model('HealthRecord', HealthRecordSchema);
