const postsResolvers = require('./posts');
const usersResolvers = require('./users');
const usersResolvers = require('./comments');

module.exports = {
  Query: {
    ...postsResolvers.Query
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolvers.Mutation
  }
};