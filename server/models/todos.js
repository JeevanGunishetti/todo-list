const {Schema, model} = require("mongoose");
const crypto = require("crypto");

const TodoSchema = new Schema(
  {
    text: {
      type:String,
      trim:true,
      required:true,
    },
    status:{
      type:String,
      required:true,
    }
  },
  { timestamps: true}
);

module.exports = model("Todo", TodoSchema);
