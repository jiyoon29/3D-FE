import { ApiResponse } from '.'

export interface Review {
  reviewId: number
  rating: number
  content: string
  userId: number
  firstName: string
  lastName: string
}

export type PostReview = Omit<Review, 'reviewId' | 'firstName' | 'lastName'>
export type DeleteReview = Omit<PostReview, 'rating' | 'content'>

export interface ReviewData {
  hasAsset: boolean
  hasReview: boolean
  hasWishlist: boolean
  reviewList: Review[] | []
}

export type ReviewReponse = ApiResponse<ReviewData>
export type PostReviewResponse = ApiResponse<PostReview>
export type DeleteReviewResponse = ApiResponse<DeleteReview>
