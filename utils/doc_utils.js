export const getDocumentByAuthor = (docs, author) => {
  return docs.filter((doc) => encodeURI(doc.author) === author);
};

export const getDocumentByTag = (docs, tag) => {
  return docs.filter((doc) => doc.tags.some((_tag) => _tag === tag));
};

export const getDocumentByCategory = (docs, category) => {
  return docs.filter((doc) => doc.category === category);
};
