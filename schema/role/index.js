
import util from 'util'
import mongoose from 'mongoose'
import validate from 'mongoose-validator'

const Schema = mongoose.Schema
const { String, Number, Boolean, DocumentArray, Embedded, Array,
        Buffer, Date, ObjectId, Mixed } = Schema.Types

export const rawSchema = {
  title: {
    order: 1, fType: "string", label: "Title", readOnly: ["U"],
    type: String, maxlength: 30,
    trim: true, required: true, unique: true,
    validate: [validate({
      validator: 'isAlphanumeric',
      passIfEmpty: true,
      message: 'Title should contain alpha-numeric characters only.'
    })]
  },
  code: {
    order: 2, fType: "string", label: "User ID", readOnly: ["U"],
    type: String, maxlength: 30,
    trim: true, unique: true, required: true, index: true, lowercase: true,
    validate: [validate({
      validator: 'isAlphanumeric',
      passIfEmpty: true,
      message: 'Code should contain alpha-numeric characters only.'
    })]
  },
  desc: {
    order: 1, fType: "string", label: "User ID", readOnly: ["U"],
    type: String, maxlength: 255,
    trim: true,
    validate: [validate({
      validator: 'isAlphanumeric',
      passIfEmpty: true,
      message: 'Descriptions should contain alpha-numeric characters only.'
    })]
  },

  cDt: {order: 990, fType: "date", label: "User Created Since", type: Date, default: Date.now, readOnly: true, hidden: true, },
  // cUser: {order: 991, type: Obj},
  uDt: {order: 998, fType: "date", label: "User Last Update", type: Date, readOnly: true, hidden: true, },
  dDt: {order: 999, fType: "date", label: "User Deleted Date Time", type: Date, readOnly: true, hidden: true, },
}

export const schema = new Schema(rawSchema,
  { strict: false, // todo
    versionKey: false, } )
export default schema
