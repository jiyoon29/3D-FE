import { getAssetDetail } from '@/api/service/asset'
import { useQuery } from '@tanstack/react-query'

export const useAssetDetail = (id: number) => {
  const { data: asset } = useQuery({
    queryKey: ['assets', 'detail', id],
    queryFn: () => getAssetDetail(id),
    select(data) {
      return data.data
    },
  })

  return { asset }
}
