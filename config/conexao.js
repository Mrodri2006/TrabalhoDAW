import mongoose from 'mongoose';

const url = "mongodb+srv://mig180506:mMOPHz17Vw7KqtGj@miguel.f4fxnqp.mongodb.net/?retryWrites=true&w=majority&appName=Miguel"

const conexao = await mongoose.connect(url)
export default mongoose