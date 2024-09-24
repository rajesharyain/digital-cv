// src/apiErrorHandler.ts
import axios from 'axios';

// Function to handle API errors
export const handleApiError = (error: any): void => {
  if (axios.isAxiosError(error) && error.response) {
    // Server responded with a status other than 2xx
    const { status, data } = error.response;
    console.error('API Error Response:', error.response);

    // Handle different status codes
    switch (status) {
      case 401:
        alert('Unauthorized access. Please log in.');
        break;
      case 404:
        alert('Requested resource not found.');
        break;
      case 500:
        alert('Server error. Please try again later.');
        break;
      default:
        alert(data.message || 'An error occurred.');
    }
  } else if (error.request) {
    // Request was made, but no response received
    console.error('No Response:', error.request);
    alert('No response received. Please check your network.');
  } else {
    // Something happened in setting up the request
    console.error('Error:', error.message);
    alert('Request setup error. Please try again.');
  }

  // Optionally re-throw the error to be handled in the calling function
  throw error;
};
