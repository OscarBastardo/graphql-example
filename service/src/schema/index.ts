import { GraphQLObjectType, GraphQLSchema, GraphQLID, GraphQLList } from 'graphql';
import { find } from 'lodash';
import BookType from './Book';
import AuthorType from './Author';

const books = require('../data/books');
const authors = require('../data/authors');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {
        id: { 
          type: GraphQLID
        }
      },
      resolve(parent, args) {
        // code to get data from db / other source
        return find(books, { id: args.id });
      }
    },
    author: {
      type: AuthorType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(parent, args) {
        // code to get data from db / other source
        return find(authors, { id: args.id })
      }
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parents, args) {
        return books;
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parents, args) {
        return authors;
      }
    }
  },
})

export default new GraphQLSchema({
  query: RootQuery
})