import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } from 'graphql';

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
});

export default AuthorType;