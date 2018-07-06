
import util from 'util'
import mongoose from 'mongoose'
import validate from 'mongoose-validator'

const Schema = mongoose.Schema
const { String, Number, Boolean, DocumentArray, Embedded, Array,
        Buffer, Date, ObjectId, Mixed } = Schema.Types
import CUDDtUser from  '../common/CUDDtUser'

export const collectionName = "navs"
export const name = collectionName

export const rawSchema = {
  navId: {
    order: 1, fType: "string", label: "Navigation", readOnly: ["U"],
    type: String, maxlength: 16,
    trim: true, unique: true, required: true, index: true, lowercase: true,
  },
  type: {
    order: 2, fType: "string", label: "Type",
    type: String, maxlength: 16,
    trim: true, required: true, lowercase: true,
  },
  title: {
    order: 3, fType: "string", label: "Title",
    type: String, maxlength: 64,
    trim: true, required: true, lowercase: true,
  },
  order: {
    order: 4, fType: "number", label: "Order",
    type: Number,
  },
  icon: {
    order: 5, fType: "string", label: "Icon",
    type: "string", maxlength: 64,
  },
  to: {
    order: 6, fType: "string", label: "To Url",
    type: "string", maxlength: 128,
    trim: true
  },
  pageName: {
    order: 7, fType: "string", label: "Page Name", readOnly: ["U"],
    type: String, maxlength: 32,
    trim: true, required: true, lowercase: true,
  },
  rules: {
    order: 8, fType: "string",
    type: Mixed
  },
  parentId: {
    order: 9, fType: "string",
    type: String, maxlength: 128,
  },
  keywords: {
    order: 10, fType: "string",
    type: [String]
  },
  
  ...CUDDtUser
}

export const schema = new Schema(rawSchema,
  { strict: false, // todo
    versionKey: false, 
    // autoIndex: false, // for dev only
  } )
  
Object.defineProperty(schema, 'name', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: collectionName
})
Object.defineProperty(schema, 'collectionName', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: collectionName
})

export default schema

