import mongoose from "mongoose";
import { BreadModel } from "./models/bread";
import { KetchupModel } from "./models/ketchup";
import { CheeseModel } from "./models/cheese";

const DB_CONNECTION =  "mongodb+srv://xorkuz:KoilKoil234@cluster0.ujzqj.mongodb.net/Freedge?retryWrites=true&w=majority&appName=Cluster0";

const connection = async () => {
    try{
        await mongoose.connect(DB_CONNECTION)

        const Bread1 = new BreadModel({plant: "Hobo", compound: "Milk, Chocolate"}) 
        await Bread1.save()
        const Ketchup1 = new KetchupModel({mark: "DobriyRano", Data: "2025-03-20",NumberDefault: "23445832"})
        await Ketchup1.save()
        const Cheese1 = new CheeseModel({name: "Chedder", "technologe": "raw"})
        console.log("Connected")
        await Cheese1.save()

    } catch(err) {
        console.log("So tired")
    }
}

connection()