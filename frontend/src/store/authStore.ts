import { create } from 'zustand'
import apiClient from '../lib/apiClient'
import type { AxiosError } from 'axios'

interface User {
  id: string
  email: string
  role: string
}

interface AuthState {
  token: string | null
  user: User | null
  isLoading: boolean
  error: string | null
}

interface AuthActions {
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, role: string) => Promise<void>
  logout: () => void
  clearError: () => void
}

interface ApiSuccessResponse {
  status: 'success'
  data: {
    token: string
    user: User
  }
}

interface ApiErrorResponse {
  status: 'error'
  message: string
}

type AuthStore = AuthState & AuthActions

export const useAuthStore = create<AuthStore>((set) => ({
  token: localStorage.getItem('token'),
  user: null,
  isLoading: false,
  error: null,

  login: async (email: string, password: string) => {
    set({ isLoading: true, error: null })
    try {
      const response = await apiClient.post<ApiSuccessResponse>('/api/auth/login', {
        email,
        password,
      })
      const { token, user } = response.data.data
      localStorage.setItem('token', token)
      set({ token, user, isLoading: false })
    } catch (err) {
      const axiosError = err as AxiosError<ApiErrorResponse>
      const message = axiosError.response?.data?.message ?? 'An error occurred'
      set({ error: message, isLoading: false })
    }
  },

  register: async (email: string, password: string, role: string) => {
    set({ isLoading: true, error: null })
    try {
      const response = await apiClient.post<ApiSuccessResponse>('/api/auth/register', {
        email,
        password,
        role,
      })
      const { token, user } = response.data.data
      localStorage.setItem('token', token)
      set({ token, user, isLoading: false })
    } catch (err) {
      const axiosError = err as AxiosError<ApiErrorResponse>
      const message = axiosError.response?.data?.message ?? 'An error occurred'
      set({ error: message, isLoading: false })
    }
  },

  logout: () => {
    localStorage.removeItem('token')
    set({ token: null, user: null, error: null })
  },

  clearError: () => {
    set({ error: null })
  },
}))
