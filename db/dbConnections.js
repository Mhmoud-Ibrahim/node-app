import mongoose from "mongoose"

function dbConnections() {
try {
    mongoose.connect(process.env.URI)
    console.log(' DB connected successfully');
} catch (error) {
    console.log(error);
}
}

export default dbConnections
