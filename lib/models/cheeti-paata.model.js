import mongoose from "mongoose";

const cheetiPaataSchema = new mongoose.Schema(
  {
    cheetiId: {
      type: String,
      required: true,
    },
    cheetiName: {
      type: String,
      required: [true, "Please provide a name for this cheeti"],
      maxLength: [100, "Name cannot be more than 100 characters length"],
    },
    cheetiValue: {
      type: Number,
      required: [true, "Please provide input for cheeti value"],
    },
    monthlyPremium: {
      type: Number,
      required: [true, "Please provide some value for Maximum Monthly premium"],
    },
    managerName: {
      type: String,
      required: [true, "Please provide some value for Manager Name"],
    },
    cheetiTenure: {
      type: Number,
      required: [true, "Number of months cheeti will be open for bidding"],
    },
    cheetiStartMonth: {
      type: Number,
      required: [true, "Month in which the cheeti started"],
    },
    cheetiStartYear: {
      type: Number,
      required: [true, "Year in which cheeti started"],
    },
    isClosed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret, options) => {
        // console.log({ doc, ret, options });
        delete ret._id;
        delete ret.__v;
        delete ret.createdAt;
        delete ret.updatedAt;
        return ret;
      },
    },
  }
);

module.exports =
  mongoose.models.CheetiPaata ||
  mongoose.model("CheetiPaata", cheetiPaataSchema);
