import { axiosInstance } from '../axios'
import {
  PostReview,
  PostReviewResponse,
  DeleteReviewResponse,
  ReviewReponse,
} from '../interface/review'

export const getAllReviews = async <T = ReviewReponse>(id: number): Promise<T> => {
  const res = await axiosInstance.get<T>(`/assets/${id}/reviews`)
  return res.data
}

export const postReview = async <T = PostReviewResponse>(
  review: PostReview,
  id: number,
): Promise<T> => {
  const res = await axiosInstance.post<T>(`s/assets/${id}/reviews`, review)
  return res.data
}

export const editReview = async <T = PostReviewResponse>(
  review: PostReview,
  id: number,
  reviewId: number,
): Promise<T> => {
  const res = await axiosInstance.post<T>(`s/assets/${id}/reviews/${reviewId}`, review)
  return res.data
}

export const deleteReview = async <T = DeleteReviewResponse>(
  id: number,
  reviewId: number,
  userId: number,
): Promise<T> => {
  const res = await axiosInstance.post<T>(`s/assets/${id}/reviews/${reviewId}/delete`, {
    userId,
  })
  return res.data
}
