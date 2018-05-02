import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const perSchema = new Schema({
    name: String,
    phone: String
}, { versionKey: false });

module.exports = mongoose.model('egg1', perSchema);
