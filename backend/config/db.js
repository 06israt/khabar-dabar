import mongoose from "mongoose";

export const connectDB = async ()=> {
    await mongoose.connect('mongodb+srv://tomato:0Uhn2PJxkFRRbDYW@cluster0.ty8oapk.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}