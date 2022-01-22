import { createSelector } from "@reduxjs/toolkit";

export const booksSelector = (state) => {
  const booksremaining = state.books.books.filter((book) => {
    return (
      book.title.toUpperCase().includes(state.filter.search) ||
      book.title.toLowerCase().includes(state.filter.search)
    );
  });

  return booksremaining;
};
export const searchTextSelector = (state) => state.filter.search;

// export const bookRemainingSelector = createSelector(
//   booksSelector,
//   searchTextSelector,
//   (books, search) => {
//     return books.filter((book) => {
//       return book.titles.includes(search);
//     });
//   }
// );
