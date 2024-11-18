import { API_BASE } from '../../constants';
import { API_REGISTER_URL } from '../../constants';

export const userData = {
  name: 'test',
  email: 'testEmail@gmail.com',
  password: '111fgnfgf1gg5',
  bio: '{bio}',
  avatar: {
    url: 'https://img.service.com/avatar.jpg',
    alt: 'My avatar alt text',
  },
  banner: {
    url: 'https://img.service.com/banner.jpg',
    alt: 'My banner alt text',
  },
};

export async function signUp(userData) {
  try {
    const response = await fetch(API_REGISTER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      let mappedErrors = 'Unexpected error';
      if (errorResponse.errors && errorResponse.errors.length > 0) {
        mappedErrors = errorResponse.errors.map((error) => error.message).join('\n');
      }
      alert(mappedErrors);
      throw new Error('Sign up failed');
    }
    console.log(response);
    return response.json();
  } catch (error) {
    throw error;
  }
}

// {
//     "name": "my_username", // Required
//     "email": "first.last@stud.noroff.no", // Required
//     "password": "UzI1NiIsInR5cCI", // Required
//     "bio": "This is my profile bio", // Optional
//     "avatar": {
//       "url": "https://img.service.com/avatar.jpg", // Optional
//       "alt": "My avatar alt text" // Optional
//     },
//     "banner": {
//       "url": "https://img.service.com/banner.jpg", // Optional
//       "alt": "My banner alt text" // Optional
//     },
//     "venueManager": true // Optional

// funcion is working
// error handling is working
//  error received from the server is displayed in an alert box
// Nme is required
//  only structuredClone.noroff.no emails are allowed to register
// expected object but received string
// passwors must be atleast 8 characters long
