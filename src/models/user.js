import { Schema } from 'mongoose';
import moment from 'moment';

moment.locale('pt-br');

const userSchema = new Schema(
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

export default userSchema;
