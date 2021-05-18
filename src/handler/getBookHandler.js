const books = require('../books');

const getBookHandler = (request, h) => {
  const bookId = request.params.bookId ? request.params.bookId : '';
  if (!bookId) {
    return h
      .response({
        status: 'success',
        data: {
          books,
        },
      })
      .code(200);
  }

  const book = books.filter((n) => n.id === bookId)[0];

  if (book !== undefined) {
    return h
      .response({
        status: 'success',
        data: {
          book,
        },
      })
      .code(200);
  }

  return h
    .response({
      status: 'fail',
      message: 'Buku tidak ditemukan',
    })
    .code(404);
};

module.exports = getBookHandler;
