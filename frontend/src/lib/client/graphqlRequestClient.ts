import { GraphQLClient } from 'graphql-request';
import { PROPERTIES } from '../../config/properties';

// example
const requestHeaders = {
  authorization: 'Bearer MY_TOKEN',
};

const graphqlRequestClient = new GraphQLClient(PROPERTIES.GRAPHQL_ENDPOINT, {
  headers: requestHeaders,
});

export default graphqlRequestClient;
