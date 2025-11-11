import { projectId, publicAnonKey } from './supabase/info';

const BASE_URL = `https://${projectId}.supabase.co/functions/v1`;

// Get auth token from localStorage
const getAuthToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('admin_token');
  }
  return null;
};

// Make API request with proper error handling
async function apiRequest<T>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  body?: unknown,
  requiresAuth = false
): Promise<T> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  const token = getAuthToken();
  if (requiresAuth && token) {
    headers['Authorization'] = `Bearer ${token}`;
  } else if (requiresAuth) {
    throw new Error('Authentication required');
  }

  const options: RequestInit = {
    method,
    headers,
  };

  if (body && (method === 'POST' || method === 'PUT')) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, options);

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Unknown error' }));
    throw new Error(error.error || `API error: ${response.status}`);
  }

  return response.json();
}

// Authentication API
export const auth = {
  signup: async (email: string, password: string, name: string) =>
    apiRequest('/make-server-abd2a1f4/auth/signup', 'POST', { email, password, name }),
  
  login: async (email: string, password: string) =>
    apiRequest('/make-server-abd2a1f4/auth/login', 'POST', { email, password }),
  
  verify: async () =>
    apiRequest('/make-server-abd2a1f4/auth/verify', 'GET', undefined, true),
};

// Projects API
export const projects = {
  getAll: async () =>
    apiRequest('/make-server-abd2a1f4/projects', 'GET'),
  
  getById: async (id: string) =>
    apiRequest(`/make-server-abd2a1f4/projects/${id}`, 'GET'),
  
  create: async (data: unknown) =>
    apiRequest('/make-server-abd2a1f4/projects', 'POST', data, true),
  
  update: async (id: string, data: unknown) =>
    apiRequest(`/make-server-abd2a1f4/projects/${id}`, 'PUT', data, true),
  
  delete: async (id: string) =>
    apiRequest(`/make-server-abd2a1f4/projects/${id}`, 'DELETE', undefined, true),
};

// Posts API
export const posts = {
  getAll: async () =>
    apiRequest('/make-server-abd2a1f4/posts', 'GET'),
  
  getById: async (id: string) =>
    apiRequest(`/make-server-abd2a1f4/posts/${id}`, 'GET'),
  
  create: async (data: unknown) =>
    apiRequest('/make-server-abd2a1f4/posts', 'POST', data, true),
  
  update: async (id: string, data: unknown) =>
    apiRequest(`/make-server-abd2a1f4/posts/${id}`, 'PUT', data, true),
  
  delete: async (id: string) =>
    apiRequest(`/make-server-abd2a1f4/posts/${id}`, 'DELETE', undefined, true),
};

// Videos API
export const videos = {
  getAll: async () =>
    apiRequest('/make-server-abd2a1f4/videos', 'GET'),
  
  create: async (data: unknown) =>
    apiRequest('/make-server-abd2a1f4/videos', 'POST', data, true),
  
  delete: async (id: string) =>
    apiRequest(`/make-server-abd2a1f4/videos/${id}`, 'DELETE', undefined, true),
};

// Certificates API
export const certificates = {
  getAll: async () =>
    apiRequest('/make-server-abd2a1f4/certificates', 'GET'),
  
  create: async (data: unknown) =>
    apiRequest('/make-server-abd2a1f4/certificates', 'POST', data, true),
  
  delete: async (id: string) =>
    apiRequest(`/make-server-abd2a1f4/certificates/${id}`, 'DELETE', undefined, true),
};

// Jobs API
export const jobs = {
  getAll: async () =>
    apiRequest('/make-server-abd2a1f4/jobs', 'GET'),
  
  create: async (data: unknown) =>
    apiRequest('/make-server-abd2a1f4/jobs', 'POST', data, true),
  
  update: async (id: string, data: unknown) =>
    apiRequest(`/make-server-abd2a1f4/jobs/${id}`, 'PUT', data, true),
  
  delete: async (id: string) =>
    apiRequest(`/make-server-abd2a1f4/jobs/${id}`, 'DELETE', undefined, true),
};

// Reviews API
export const reviews = {
  getAll: async () =>
    apiRequest('/make-server-abd2a1f4/reviews', 'GET'),
  
  create: async (data: unknown) =>
    apiRequest('/make-server-abd2a1f4/reviews', 'POST', data, true),
  
  delete: async (id: string) =>
    apiRequest(`/make-server-abd2a1f4/reviews/${id}`, 'DELETE', undefined, true),
};

// Q&A API
export const qa = {
  getAll: async () =>
    apiRequest('/make-server-abd2a1f4/qa', 'GET'),
  
  create: async (data: unknown) =>
    apiRequest('/make-server-abd2a1f4/qa', 'POST', data, true),
  
  update: async (id: string, data: unknown) =>
    apiRequest(`/make-server-abd2a1f4/qa/${id}`, 'PUT', data, true),
  
  delete: async (id: string) =>
    apiRequest(`/make-server-abd2a1f4/qa/${id}`, 'DELETE', undefined, true),
};

// Messages API
export const messages = {
  getAll: async () =>
    apiRequest('/make-server-abd2a1f4/messages', 'GET', undefined, true),
  
  submitContact: async (data: unknown) =>
    apiRequest('/make-server-abd2a1f4/messages', 'POST', data),
  
  update: async (id: string, data: unknown) =>
    apiRequest(`/make-server-abd2a1f4/messages/${id}`, 'PUT', data, true),
  
  delete: async (id: string) =>
    apiRequest(`/make-server-abd2a1f4/messages/${id}`, 'DELETE', undefined, true),
};

// Aura AI API
export const aura = {
  chat: async (message: string) =>
    apiRequest('/make-server-abd2a1f4/aura/chat', 'POST', { message }),
  
  submitInfo: async (data: unknown) =>
    apiRequest('/make-server-abd2a1f4/aura/submit-info', 'POST', data),
};

// Settings API
export const settings = {
  get: async () =>
    apiRequest('/make-server-abd2a1f4/settings', 'GET'),
  
  update: async (data: unknown) =>
    apiRequest('/make-server-abd2a1f4/settings', 'PUT', data, true),
};

// Analytics API
export const analytics = {
  get: async () =>
    apiRequest('/make-server-abd2a1f4/analytics', 'GET', undefined, true),
};

// Convenience methods (grouped exports)
export const api = {
  auth,
  projects,
  posts,
  videos,
  certificates,
  jobs,
  reviews,
  qa,
  messages,
  aura,
  settings,
  analytics,
  // Convenience method for submitting contact
  submitContact: (data: unknown) => messages.submitContact(data),
};

export default api;
