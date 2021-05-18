const books = require('../books');
const validateBook = require('../helper/validateBook');

const editBookByIdHandler = (request, h) => {
  const bookId = request.params.bookId ? request.params.bookId : '';
  const index = books.findIndex((book) => book.id === bookId);
  const updatedAt = new Date().toISOString();

  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  if (index !== -1) {
    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      updatedAt,
    };
    const response = validateBook(books[index], h);

    if (response.statusCode !== 200) {
      return response;
    }

    return h
      .response({
        status: 'success',
        message: 'Buku berhasil diperbarui',
      })
      .code(200);
  }
  return h
    .response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan',
    })
    .code(404);
};

module.exports = editBookByIdHandler;
