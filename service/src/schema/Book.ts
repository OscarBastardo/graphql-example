import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';
import { find } from 'lodash';
import AuthorType from './Author';

const authors = require('../data/authors');

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return find(authors, { id: parent.authorId })
      } 
    }
  })
});

export default BookType;