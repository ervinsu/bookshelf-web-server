const { nanoid } = require('nanoid');

const books = require('../books');
const validateBook = require('../helper/validateBook');

const addBookHandler = (request, h) => {
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

  const id = nanoid(16);
  const finished = pageCount === readPage;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };

  const response = validateBook(newBook, h);

  if (response.statusCode === 200) {
    books.push(newBook);
  } else {
    return response;
  }

  const isSuccess = books.filter((book) => book.id === id).length > 0;

  if (isSuccess) {
    return h
      .response({
        status: 'success',
        message: 'Buku berhasil ditambahkan',
        data: {
          bookId: id,
        },
      })
      .code(201);
  }

  return h
    .response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    })
    .code(500);
};

module.exports = addBookHandler;
