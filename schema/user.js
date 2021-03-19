const mongoose = require('mongoose');
/* original
// const User = mongoose.model('User', { name: String, cpf: String});
*/
const User = mongoose.model('User', { name: String, cpf: String, age: Number, cell: Number});
module.exports = User;