
const UserSchema = new mongoose.Schema({
  telegramId: { type: String, required: true, unique: true },
  superliveId: { type: String },
  language: { type: String, required: true, default: 'en' } // Default language set to Spanish
});

const User = mongoose.model('User', UserSchema);

module.exports = { User };
