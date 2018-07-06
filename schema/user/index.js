
import util from 'util'
import mongoose from 'mongoose'
import validate from 'mongoose-validator'

const Schema = mongoose.Schema
const { String, Number, Boolean, DocumentArray, Embedded, Array,
        Buffer, Date, ObjectId, Mixed } = Schema.Types

export const rawSchema = {
  userId: {
    order: 1, fType: "string", label: "User ID", readOnly: ["U"],
    type: String, maxlength: 15,
    trim: true, unique: true, required: true, index: true, lowercase: true,
    validate: [validate({
      validator: 'isAlphanumeric',
      passIfEmpty: true,
      message: 'User ID should contain alpha-numeric characters only.'
    })]
  },
  /*password: {maxlength: 40}*/
  passwordHash: {hide: true, order: 2, fType: "string", hidden: true, required: true, label: "Hashed Password [!important: this should not be loaded on front end]", type: String, max: 255, trim: true},
  nextForgotPasswordDt: {order: 3, fType: "date", hidden: true, label: "Next Password Email Date Time [!important: this should not be loaded on front end]", type: Date},
  email: {order: 4, fType: "email", label: "Email", type: String, maxlength: 30, trim: true, unique: true, required: true, index: true, readOnly: ["U"],
    validate: [validate({
      validator: 'isEmail',
      passIfEmpty: true,
      message: 'Please enter conrrect email address.'
    })]
  },
  emailVerified: { order: 5, label: "email validated", fType: "boolean", type: Boolean, default: false, hidden: true, },
  emailVerify: {
    key: { order: 6, label: "email validate key", fType: "string", type: String, max: 255, trim: true, hidden: true, },
    cDt: { order: 7, label: "email validate create date", fType: "date", type: Date, hidden: true, },
    expireDt: { order: 8, label: "email validate expire date", fType: "date", type: Date, hidden: true, },
  },
  loginAttempts: {
    cnt: { order: 9, label: "Login Attempts", fType: "number", type: Number, max: 10, default: 0, hidden: true},
    cDt: { order: 10, label: "1st Login Attempts Date Time", fType: "date", type: Date, hidden: true},
  },
  roles: { order: 11, label: "Roles", fType: "array_string", suggestionUrl: "/i/roles",
    type: [String], createUrl: "/role" },
  permissions: {order: 12, type: Mixed, label: "Permissions", fType: "object"},
  // facebookId: {},
  // twitterId: {},
  // googleId: {},
  // avatar: { order: 10, fType: "url_image", label: 'Avatar', type: String,
  //   max: 1023, trim: true, },
  //   
  // roles: [String],
  // 
  // // star: { order: 1, fType: "boolean", label: "Star", type: Boolean,
  // //         trueTitle: "stared", falseTitle: "not stared",
  // //         trueClassName: "fa fa-star", falseClassName: "fa fa-star-o"},
  // thumbnail: { order: 2, fType: "url_image", label: "Thumbnail", type: String, max: 255, trim: true },
  // 
  // title: { order: 4, fType: "string", label: "Title", type: String, max: 255, trim: true },
  // tags: { order: 5, fType: "array_string", label: "Tags", type: [String],
  //   validate: [{
  //     validator: tags => tags && tags.length <= 10,
  //     msg: "{PATH} exceeds the limit of 10" },
  //             //  { validator: tags => tags && tags.filter(tag=>is.string(tag), true),
  //             //    msg: "{PATH} element (tag) has to be string" },                
  //   ],
  //   suggestionUrl: "/i/tags/query",
  //   createUrl: "/tag",
  //   refModel: "tag",
  // },
  // price: { order: 6, fType: "currency", label: "Price", type: Number, max: 999999999.999, },
  // shipping: {order: 7, fType: "currency", label: "Shipping Cost", type: Number, max: 999999999.999, },
  // 
  // prices: {
  //   order: 8,
  //   fType: "array_object",
  //   label: "Prices",
  //   type: [{
  //     title: { order: 1, label: "Title", fType: "string", type: String, max: 255, trim: true },
  //     price: { order: 2, label: "Price", fType: "currency", type: Number, max: 999999999.999, },
  //     thumbnail: { order: 3, label: "Thumbnail", fType: "url_image", type: String, max: 255, trim: true },
  //   }],
  //   validate: [{
  //     validator: tags => tags && tags.length <= 10,
  //     msg: "{PATH} exceeds the limit of 10" },
  //             //  { validator: tags => tags && tags.filter(tag=>is.string(tag), true),
  //             //    msg: "{PATH} element (tag) has to be string" },                
  //   ]
  // },
  // images: {
  //   fType: "array_object",
  //   label: "Images",
  //   order: 9,
  //   type: [{
  //     title: { order: 1, label: "Title", fType: "string", type: String, max: 255, trim: true },
  //     url: { order: 2, label: "Url" , fType: "url_image", type: String, max: 255, trim: true },
  //   }]
  // },
  // content: { order: 10, fType: "html", label: "Content", type: String, max: 8192, trim: true, },
  // remarks: { order: 11, fType: "string", cType: "string-textarea", label: "Remarks", type: String, max: 255, trim: true, },
  // 
  // 
  cDt: {order: 990, fType: "date", label: "User Created Since", type: Date, default: Date.now, readOnly: true, hidden: true, },
  cUser: {order: 991, type: ObjectId, ref: 'User', hidden: true, },
  uDt: {order: 992, fType: "date", label: "User Last Update", type: Date, readOnly: true, hidden: true, },
  uUser: {order: 993, type: ObjectId, ref: 'User', hidden: true, },
  dDt: {order: 994, fType: "date", label: "User Deleted Date Time", type: Date, readOnly: true, hidden: true, },
  dUser: {order: 995, type: ObjectId, ref: 'User', hidden: true, },
}

export const schema = new Schema(rawSchema,
  { strict: false, // todo
    versionKey: false, } )
export default schema
