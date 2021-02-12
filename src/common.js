export const env = window.location.hostname.endsWith('.docker') || window.location.hostname.endsWith('localhost') ? 'development' : 'production';

export const apiEndpionts = window.__coverified_overrride_api_endpoints || {
    development: 'https://embed.coverified.info/api',
    production: 'https://embed.coverified.info/api',
}

export const storyEndpoints = window.__coverified_overrride_story_endpoints || {
    development: 'http://localhost:3000',
    production: 'https://story.coverified.info',
}
