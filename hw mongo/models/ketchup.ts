import { Schema, model } from "mongoose";

const ketcupSchema = new Schema({
    mark:{
        type: String,
        minLength: 5,
        required: true,
        default: "Torchin"
    },
    date:{
        type: Date,
        default: Date.now,
        required: true
    },
    NumberDefault:{
        type: String,
        required: true,
        validate: {
            validator: (NumberDefault) => { return !/[$|/]/.test(NumberDefault) }, 
            message: (prop) => "Delete '$' or '|' or '/'"
        }
    }
}, {timestamps: true})

export const KetchupModel = model("Ketchup", ketcupSchema)
