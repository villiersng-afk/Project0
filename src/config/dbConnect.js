import mongoose from "mongoose"

export const connectDB = async () =>{
    try {
        await mongoose.connect("---")
    console.log("connected 🐒 MongoDB!!!!!!!")
    } catch (error) {
        console.log("error☠️ :", error.message);
        process.exit(1); // it terminate the code
    }
}