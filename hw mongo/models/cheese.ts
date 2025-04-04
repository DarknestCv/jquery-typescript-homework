import { Schema, model } from "mongoose"

const CheeseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    technologe: {
        type: String,
        enum: ["raw", "purn", "kilu"]
    }
}, {timestamps: true})

export const CheeseModel = model("Cheese", CheeseSchema)