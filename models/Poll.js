'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PollSchema = new Schema({
 id: String,
 name: String
});

module.exports.user = mongoose.model('Poll', PollSchema);