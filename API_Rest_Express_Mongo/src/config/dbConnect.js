import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://alura:alura@cluster0.06gscop.mongodb.net/alura-node?');

let db = mongoose.connection;

export default db;