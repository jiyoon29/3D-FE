import { getMyAssets } from '@/api/service/myAsset'
import { RootState } from '@/store/store'
import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'

export const useGetMyAssets = ({ page, size }: { page: number; size: number }) => {
  const userId = useSelector((state: RootState) => state.user.userId)

  const { data: myAssets, isLoading } = useQuery({
    queryKey: ['assets', page],
    queryFn: () => getMyAssets(userId, page, size),
    keepPreviousData: true,
  })
  console.log(myAssets, isLoading, '<<<<<<<< myAssets Data')

  return { myAssets, isLoading }
}
