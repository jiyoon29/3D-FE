import { PostReview, DeleteReview } from '@/api/interface/review'
import { deleteReview, editReview, postReview } from '@/api/service/review'
import { RootState } from '@/store/store'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSelector } from 'react-redux'

export const usePostReview = (id: number, reviewId: number = 1) => {
  const userId = useSelector((state: RootState) => state.user.userId)
  const queryClient = useQueryClient()

  const { mutate: createMyReview } = useMutation({
    mutationFn: (review: PostReview) => postReview(review, id),
    onMutate: async (data) => {
      await queryClient.cancelQueries({ queryKey: ['review', id] })

      // Snapshot the previous value
      const prevReview = queryClient.getQueryData(['review', id])

      // Optimistically update to the new value
      queryClient.setQueryData(['review', id], data)

      // Return a context with the previous and new todo
      return { prevReview, data }
    },
    onError: (_error, _data, context) => {
      queryClient.setQueriesData(['review', id], context?.prevReview)
    },
    onSettled: () => {
      queryClient.invalidateQueries(['review', id])
    },
  })

  const { mutate: deleteMyReview } = useMutation({
    mutationFn: () => deleteReview(id, reviewId, userId),
    onMutate: async (data) => {
      await queryClient.cancelQueries({ queryKey: ['review', id] })
      const prevReview = queryClient.getQueryData(['review', id])
      queryClient.setQueryData(['review', id], data)
      return { prevReview, data }
    },
    onError: (_error, _data, context) => {
      queryClient.setQueriesData(['review', id], context?.prevReview)
    },
    onSettled: () => {
      queryClient.invalidateQueries(['review', id])
    },
  })

  const { mutate: editMyReview } = useMutation({
    mutationFn: (review: PostReview) => editReview(review, id, reviewId),
    onMutate: async (data) => {
      await queryClient.cancelQueries({ queryKey: ['review', id] })
      const prevReview = queryClient.getQueryData(['review', id])
      queryClient.setQueryData(['review', id], data)
      return { prevReview, data }
    },
    onError: (_error, _data, context) => {
      queryClient.setQueriesData(['review', id], context?.prevReview)
    },
    onSettled: () => {
      queryClient.invalidateQueries(['review', id])
    },
  })

  return { createMyReview, deleteMyReview, editMyReview }
}
