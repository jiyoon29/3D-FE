import { getToken } from '@/utils/token'
import axios, { AxiosRequestConfig, AxiosError } from 'axios'

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})

axiosInstance.interceptors.request.use(
  (request) => {
    const accessToken = getToken()

    if (accessToken) request.headers['Authorization'] = `Bearer ${accessToken}`
    return request
  },
  (error: AxiosError) => {
    console.log(error)
    return Promise.reject(error)
  },
)
