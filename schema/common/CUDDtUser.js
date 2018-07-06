
// import mongoose from 'mongoose'
// const Schema = mongoose.Schema
import Schema from 'mongoose/lib/schema'

const { String, Number, Boolean, DocumentArray, Embedded, Array,
        Buffer, Date, ObjectId, Mixed } = Schema.Types
        
export const CUDDtUser = {
  cDt: {order: 990, fType: "date", label: "User Created Since", type: Date, default: Date.now, readOnly: true, hidden: true, },
  cUser: {order: 991, type: ObjectId, ref: 'User', hidden: true, },
  uDt: {order: 992, fType: "date", label: "User Last Update", type: Date, readOnly: true, hidden: true, },
  uUser: {order: 993, type: ObjectId, ref: 'User', hidden: true, },
  dDt: {order: 994, fType: "date", label: "User Deleted Date Time", type: Date, readOnly: true, hidden: true, },
  dUser: {order: 995, type: ObjectId, ref: 'User', hidden: true, },
}

export default CUDDtUser
