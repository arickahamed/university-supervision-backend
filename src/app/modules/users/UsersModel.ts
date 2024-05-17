import { Model, Schema, model } from 'mongoose'
import { IUser } from './UsersInterface'

type UserModel = Model<IUser, {}>

const userSchema = new Schema<IUser>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

export const User = model<IUser, UserModel>('User', userSchema)
