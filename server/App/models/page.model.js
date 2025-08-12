import mongoose, { Schema } from "mongoose";

const componentSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  props: {
    type: Object,
    default: {}
  }
})

const pageSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
    unique: true
  },
  components: [componentSchema]
})

const pageModel = mongoose.model('Page', pageSchema)
export default pageModel