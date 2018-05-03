import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const perSchema = new Schema({
    name: String,
    sex: String,
    birthday: String,
    area: String,
    phone: String,
    email: String,
    detail: Object,
}, { versionKey: false });

module.exports = mongoose.model('per_messgaes', perSchema);
