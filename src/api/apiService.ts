// src/apiService.ts
//import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios, { InternalAxiosRequestConfig , AxiosResponse, AxiosError, AxiosRequestHeaders, AxiosHeaders } from 'axios';

import { handleApiError } from './apiErrorHandler'; // Import the error handler

// Create an Axios instance with default configuration
const apiClient = axios.create({
  baseURL: process.env.PUBLIC_URL || process.env.REACT_APP_PUBLIC_URL || '/', // Replace with your API base URL
  timeout: 10000, // Optional: request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json', // Default headers
  },
});

// Request interceptor: Customize requests before they are sent (optional)
apiClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
      // Initialize headers if not already present and set some basic headers
      config.headers = {
        ...config.headers, // Preserve existing headers if any
        'Content-Type': 'application/json', // Common for sending JSON data
        'Accept': 'application/json', // Accept JSON responses by default
        'Authorization': 'Bearer YOUR_TOKEN', // Replace with actual token or logic to retrieve it
      } as AxiosRequestHeaders;
  
      return config;
    },
    (error: AxiosError) => Promise.reject(error)
  );

// Response interceptor: Handle responses and errors globally
apiClient.interceptors.response.use(
  (response: AxiosResponse) => handleResponse(response),
  (error) => handleApiError(error) // Use the imported error handler
);


// Generic request handler
const request = async <T>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  url: string,
  data?: any,
  config: InternalAxiosRequestConfig = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    } as AxiosRequestHeaders
  }
  
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await apiClient({
      method,
      url,
      data,
      ...config,
    });
    return response.data; // Return only the data part of the response
  } catch (error) {
    throw error; // Re-throw the error to handle it in the calling function if needed
  }
};

// Generic response handler
const handleResponse = <T>(response: AxiosResponse<T>): T => {
  // You can add any custom logic to handle successful responses here
  return response.data;
};

// Exported functions for API requests
export const apiGet = <T>(url: string, config?: InternalAxiosRequestConfig ): Promise<T> =>
  request<T>('GET', url, undefined, config);

export const apiPost = <T>(url: string, data: any, config?: InternalAxiosRequestConfig ): Promise<T> =>
  request<T>('POST', url, data, config);

export const apiPut = <T>(url: string, data: any, config?: InternalAxiosRequestConfig ): Promise<T> =>
  request<T>('PUT', url, data, config);

export const apiDelete = <T>(url: string, config?: InternalAxiosRequestConfig ): Promise<T> =>
  request<T>('DELETE', url, undefined, config);
