const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose)

const noteSchema = new Schema(
    {
        user: {type: mongoose.Schema.Types.ObjectId, require: true, ref: 'User'},
        title: {type: String, require: true},
        completed: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
    }
);
// Plugins are commonly used in web browsers, audio and video players, image editors, and other software. They can be used to add new features, improve performance, or fix bugs
noteSchema.plugin(AutoIncrement, {
    inc_fields: 'ticket',
    id: "ticketNums",
    start_seq : 500
})

const Note = mongoose.model("User", noteSchema);

module.exports = Note;