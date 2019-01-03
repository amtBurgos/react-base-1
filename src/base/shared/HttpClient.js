const customFetch = (method, url, body, isBlob) => {
  const request = {
    method,
    mode: 'cors',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Cache-Control': 'max-age=1800',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE',
      'Access-Control-Allow-Headers':
        'Origin, Content-Type, Authorization, X-Auth-Token, X-Requested-With, Accept',
      'Access-Control-Request-Method': method
    },
    body: body && JSON.stringify(body)
  };

  return fetch(url, request)
    .then(response => {
      if (!response.ok) throw new Error(response.statusText);
      return isBlob ? response.blob() : response.json();
    })
    .catch(error => {
      console.error('fetch error', error, 'at', url);
    });
};

export const HTTPClient = domain => ({
  DOWNLOAD: url => customFetch('GET', domain + url, null, true),

  GET: url => customFetch('GET', domain + url, null),

  POST: (url, body) => customFetch('POST', domain + url, body),

  PUT: (url, body) => customFetch('PUT', domain + url, body),

  PATCH: (url, body) => customFetch('PATCH', domain + url, body),

  DELETE: url => customFetch('DELETE', domain + url, null)
});
