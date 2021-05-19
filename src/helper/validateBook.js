/* eslint-disable operator-linebreak */
function validateBook(book, h, isUpdate) {
  let returnedMessage = '';

  if (!book.name) {
    if (isUpdate) {
      returnedMessage = 'Gagal memperbarui buku. Mohon isi nama buku';
    } else {
      returnedMessage = 'Gagal menambahkan buku. Mohon isi nama buku';
    }
    return h
      .response({
        status: 'fail',
        message: returnedMessage,
      })
      .code(400);
  }
  if (book.readPage > book.pageCount) {
    if (isUpdate) {
      returnedMessage =
        'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount';
    } else {
      returnedMessage =
        'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount';
    }
    return h
      .response({
        status: 'fail',
        message: returnedMessage,
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
