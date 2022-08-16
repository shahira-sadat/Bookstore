const generateID = () => Math.floor((Math.random() * 100) + 1);

export default {
  books: [
    {
      id: generateID(),
      title: 'Alchemist',
      category: 'Action',
    },
    {
      id: generateID(),
      title: 'Ava',
      category: 'History',
    },
    {
      id: generateID(),
      title: 'Math',
      category: 'Learning',
    },
  ],
};
