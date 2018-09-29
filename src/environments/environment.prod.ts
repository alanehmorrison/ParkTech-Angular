export let ApiUrl = '';

switch (window.location.hostname) {
  case 'rmw-parkstndtech.herokuapp.com':
    ApiUrl += 'https://parksandtech.azurewebsites.net/';
    break;
  default:
  ApiUrl += 'https://parksandtech.azurewebsites.net/';

}

export const environment = {
  production: true
};
