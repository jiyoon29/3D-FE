import { getAllReviews } from '@/api/service/review'
import { useQuery } from '@tanstack/react-query'

export const useReview = (id: number) => {
  const { data: reviews } = useQuery({
    queryKey: ['review', id],
    queryFn: () => getAllReviews(id),
    select: (data) => {
      return data.data
    },
  })

  return { reviews }
}
