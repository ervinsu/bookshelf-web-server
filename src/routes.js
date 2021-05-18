const addBookHandler = require('./handler/addBookHandler');
const getBookHandler = require('./handler/getBookHandler');
const editBookByIdHandler = require('./handler/editBookByIdHandler');
// const deleteBookByIdHandler = require('./handler/deleteBookByIdHandler');

const routes = [
  {
    method: 'POST',
    path: '/books/{any*}',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId?}',
    handler: getBookHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdHandler,
  },
  //   {
  //     method: 'DELETE',
  //     path: '/books/{bookId}',
  //     handler: deleteBookByIdHandler,
  //   },
];

module.exports = routes;
