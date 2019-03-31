import { GraphQLObjectType, GraphQLSchema, GraphQLID } from 'graphql';
import { find } from 'lodash';
import BookType from './Book';

const books = require('../data/books');

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
    }
  },
})

export default new GraphQLSchema({
  query: RootQuery
})