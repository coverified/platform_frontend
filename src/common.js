import {ApolloClient, InMemoryCache} from '@apollo/client';

export const env = window.location.hostname.endsWith('.docker') || window.location.hostname.endsWith('localhost') ? 'development' : 'production';

export const apiEndpionts = window.__coverified_overrride_api_endpoints || {
    development: 'http://coverified-backend-keystone.docker/admin/api',
    production: 'https://gql.platform.coverified.info/admin/api',
}

export const client = new ApolloClient({
    uri: apiEndpionts[env],
    cache: new InMemoryCache(),
});
