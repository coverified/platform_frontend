import {ApolloClient, InMemoryCache} from '@apollo/client';

export const env = window.location.hostname.endsWith('.docker') || window.location.hostname.endsWith('localhost') ? 'development' : 'production';

export const apiEndpionts = window.__coverified_overrride_api_endpoints || {
    development: 'https://embed.coverified.info/api',
    production: 'https://embed.coverified.info/api',
}

export const client = new ApolloClient({
    uri: apiEndpionts[env],
    cache: new InMemoryCache(),
});
