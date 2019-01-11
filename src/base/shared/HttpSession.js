import { session } from '../conf/site';

const request = {
  method: 'POST',
  headers: {
    Authorization: 'Basic UE9SVEFMX0NMSUVOVEU6QVE=',
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'grant_type=password&username=GS1&password=aqua'
};

const URL = session.DOMAIN + session.ENDPOINT;

export const HttpSession = fetch(URL, request)
  .then(response => {
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  })
  .catch(error => {
    console.error('fetch error', error, 'at', URL);
  });
