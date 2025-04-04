import { Schema, model } from "mongoose"


const BreadSchema = new Schema({
    plant: {
        type: String,
        default: "Itralian",
        maxLength: 10,
        required: true
    },
    compound: {
        type: String,
        default: "Milk, Flour, Sugar, Salt"
    }
}, {timestamps: true})

export const BreadModel = model("Bread", BreadSchema)