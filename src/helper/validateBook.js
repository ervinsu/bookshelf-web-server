function validateBook(book, h) {
  if (!book.name) {
    return h
      .response({
        status: 'fail',
        message: 'Gagal menambahkan buku. Mohon isi nama buku',
      })
      .code(400);
  }
  if (book.readPage > book.pageCount) {
    return h
      .response({
        status: 'fail',
        message:
          'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
      })
      .code(400);
  }

  return h
    .response({
      status: 'success',
    })
    .code(200);
}

module.exports = validateBook;
