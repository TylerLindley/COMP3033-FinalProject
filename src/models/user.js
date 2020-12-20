import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

/**
 * Creating the mongoose Schema to add into MongoDB
 */
const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
    },
    username: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    refreshToken: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    collection: 'Users',
  },
);

userSchema.statics.findByLogin = async function (login) {
  let user = await this.findOne({
    username: login,
  });

  if (!user) {
    user = await this.findOne({
      email: login,
    });
  }

  return user;
};

userSchema.pre('save', async function(next) {
  const user = this;
  if (user.isModified('password')) {
    // encrypt the password string if it's been changed.
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model('User', userSchema);

export default User;