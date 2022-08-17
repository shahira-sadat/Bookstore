import { v4 } from 'uuid';

const arrBooks = {
  books: [
    {
      id: v4(),
      title: 'Alchemist',
      author: 'Paulo Cohlo',
      genre: 'Novel',
    },
    {
      id: v4(),
      title: 'Capital in economy',
      author: 'Suzanne Collins',
      genre: 'Education',
    },
    {
      id: v4(),
      title: 'Cooking Tricks & Tips',
      author: 'David',
      genre: 'Education',
    },
  ],
  categories: [],
};

export default arrBooks;
