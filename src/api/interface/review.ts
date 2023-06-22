import { ApiResponse } from '.'

export interface Review {
  reviewId: number
  rating: number
  content: string
  userId: number
  firstName: string
  lastName: string
}

export interface ReviewData {
  hasAsset: boolean
  hasReview: boolean
  hasWishlist: boolean
  reviewList: Review[] | []
}

export type ReviewReponse = ApiResponse<ReviewData>