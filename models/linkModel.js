import mongoose from "mongoose";


const ClickSchema = mongoose.Schema({
    insertedAt: {
        type: Date,
        default: Date.now
    },
    ipAddress: {
        type: String,
        required: true
    }
})

const LinkSchema = mongoose.Schema({
    originalUrl: {
        type: String,
        required: true,
    },
    clicks: [ClickSchema],
    targetName: {
        type: String,
        require: true,
        default:"t",
    },
    targetValues: [mongoose.Schema({
        name: String,
        value: Number
    })]
});




export default mongoose.model("links", LinkSchema);