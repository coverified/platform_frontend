import ApolloClient, {gql} from 'apollo-boost';

export const env = window.location.hostname.endsWith('.docker') || window.location.hostname.endsWith('localhost') ? 'development' : 'production';

export const apiEndpionts = window.__coverified_overrride_api_endpoints || {
    development: 'http://coverified-backend-keystone.docker/admin/api',
    production: 'https://gql.coverified.info/admin/api',
}

export const client = new ApolloClient({
    uri: apiEndpionts[env],
});

export const ENTRIES = gql`
	{
		allEntries {
            title,
            publishDate,
            id,
            content
        }
	}
`;
