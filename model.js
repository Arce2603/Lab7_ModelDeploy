let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);

let comentariosCollection = mongoose.Schema({
    id: { type: String },
    titulo: {type:String},
    autor: { type: String },
    contenido: { type: String },
    fecha: {type: Date}
});

let Comentario = mongoose.model('comentarios', comentariosCollection);

let commentList = {
    getComentarios: function () {
        return Comentario.find()
            .then( response => { return response;})
            .catch(err => { throw Error(err);});
    },
    getComByAut: function (autor) {
        return Comentario.find({ 'autor': autor })
            .then(response => { return response; })
            .catch(err => { throw Error(err); });
    },
    addComment: function (newComment) {
        return Comentario.create(newComment)
            .then(response => { return response })
            .catch(err => { throw Error(err);})
    },
    //editComment: function (comment) {

    //},
    deleteComment: function (id) {
        return Comentario.findOneAndDelete({ 'id': id })
            .then(response => { return response; })
            .catch(err => { throw Error(err);});
    }
}

module.exports = { commentList };
