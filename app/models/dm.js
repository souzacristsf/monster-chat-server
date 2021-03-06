module.exports = (app) => {
  const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

  const DmSchema = new Schema(
    {
      messageId: {
        type: Schema.Types.ObjectId,
        required: true
      },
      body: {
        type: String,
        required: true
      },
      author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      to: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    },
    {
      timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
    }
  );

  return mongoose.model('Dm', DmSchema);
};
