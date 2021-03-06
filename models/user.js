const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /^((http|https):\/\/)(www\.)?([\w\W]){1,}(#?)$/.test(v);
      },
      message: (props) => `${props.value} является недопустимой ссылкой`,
    },
  },
}, { versionKey: false });

module.exports = mongoose.model('user', userSchema);
