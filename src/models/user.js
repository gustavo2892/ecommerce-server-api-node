import { Schema, model } from 'mongoose';
import moment from 'moment';
import uniqueValidator from 'mongoose-unique-validator';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

moment.locale('pt-br');

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'cannot be empty'],
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, 'cannot be empty'],
      index: true,
      match: [/\S+@\S+\.\S+/, 'it is invalid'],
    },
    store: {
      type: Schema.Types.ObjectId,
      ref: 'Store',
      required: [true, 'cannot be empty'],
    },
    permission: {
      type: Array,
      default: ['client'],
    },
    hash: String,
    salt: String,
    recovery: {
      type: {
        token: String,
        date: Date,
      },
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.plugin(uniqueValidator, {
  message: 'This email is already in use.',
});

UserSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
    .toString('hex');
};

UserSchema.methods.ValidatePassword = function (password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
    .toString('hex');
  return hash === this.hash;
};

UserSchema.methods.generateToken = function () {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 15);

  return jwt.sign(
    {
      id: this._id,
      email: this.email,
      name: this.name,
      exp: parseFloat(exp.getTime() / 1000, 10),
    },
    process.env.SECRET
  );
};

UserSchema.methods.sendAuthJSON = function () {
  return {
    name: this.name,
    email: this.email,
    store: this.store,
    role: this.permission,
    token: this.generateToken(),
  };
};

UserSchema.methods.generatePasswordRecoveryToken = function () {
  this.recovery = {};
  this.recovery.token = crypto.randomBytes(16).toString('hex');
  this.recovery.date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  return this.recovery;
};

UserSchema.methods.finalizePasswordRecoveryToken = function () {
  this.recovery = { token: null, date: null };
  return this.recovery;
};

export default model('User', UserSchema);
