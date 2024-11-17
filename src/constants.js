export const API_BASE = 'https://v2.api.noroff.dev';
export const API_REGISTER_URL = `${API_BASE}/auth/register`;
export const API_LOGIN_URL = `${API_BASE}/auth/login`;
export const API_CREATE_API_KEY = `${API_BASE}/auth/create-api-key`;
//
export const API_GET_ALL_LISTINGS = `${API_BASE}/auction/listings`;
export const API_CREATE_LISTING = `${API_BASE}/auction/listings`;

//
// const options = {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//       "X-Noroff-API-Key": apiKey.data.key
//     }
//   }

//   const response = await fetch(`${NOROFF_API_URL}/social/posts`, options)
//   const data = await response.json()
