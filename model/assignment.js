let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let AssignmentSchema = Schema({
  id: Number,
  dateDeRendu: Date,
  nom: String,
  rendu: Boolean,
  auteur: String,
  remarques: String,
  note: Number,
  nomMatiere: String,
});

const Assignment = mongoose.model("Assignment", AssignmentSchema);
module.exports = Assignment;
