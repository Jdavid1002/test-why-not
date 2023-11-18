import { Schema, model, models } from "mongoose";


const usersSchema = new Schema({
  name: { type: String, required: [true, 'name is required'], trim: true },
  email: { type: String, required: [true, 'email is required'], trim: true },
  password: { type: String, required: [true, 'password is required'], trim: true },
}, {
  timestamps : true
})


export default models.Users as any || model('Users', usersSchema) as any