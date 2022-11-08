

const functions = require('firebase-functions');
const app = require('express')();

const {
    getAllTodos,
    postOneTodo,
    deleteTodo,
    editTodo,
} = require('./APIs/todos')


app.post('/todo', postOneTodo);
app.get('/todos', getAllTodos);
app.delete('/todo/:todoId', deleteTodo);

exports.api = functions.https.onRequest(app);

const {
    loginUser,
    signUpUser
} = require('./APIs/users')

// Users
app.post('/login', loginUser);
app.post('/signup', signUpUser);