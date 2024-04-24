import mongoose from "mongoose";

const cheetiPaataPaymentSchema = new mongoose.Schema(
  {
    cheetiId: {
      type: String,
      required: true,
    },
    paymentId: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: [true, "Please provide payment amount"],
    },
    paataDate: {
      type: Date,
      required: [true, "Paata Date is required"],
    },
    bidAmount: {
      type: Number,
      required: [true, "Bid Amount is required"],
    },
    youPaid: {
      type: Number,
      required: [true, "How much you paid is required"],
    },
    isOwned: {
      type: Boolean,
      default: false,
      required: [true, "isOwned field is required"],
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret, options) => {
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
  mongoose.models.CheetiPaataPayment ||
  mongoose.model("CheetiPaataPayment", cheetiPaataPaymentSchema);
