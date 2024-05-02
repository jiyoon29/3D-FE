import { getAssets, getCategories, getSubCategories } from '@/api/service/asset'
import { useQuery } from '@tanstack/react-query'

export const useGetAssets = (page: number) => {
  const { data: assets } = useQuery({
    queryKey: ['assets', page],
    queryFn: () => getAssets(page),
    keepPreviousData: true,
  })

  return { assets }
}

export const useSubCategoryAssets = (page: number, category: string, subCategory: string) => {
  const { data: categoryAssets } = useQuery({
    queryKey: ['assets', category, subCategory, page],
    queryFn: () => getSubCategories(page, category, subCategory),
    keepPreviousData: true,
  })

  return { categoryAssets }
}

export const useCategoryAssets = (page: number, category: string) => {
  const { data: categoryAssets } = useQuery({
    queryKey: ['assets', category, page],
    queryFn: () => getCategories(page, category),
    keepPreviousData: true,
  })

  return { categoryAssets }
}

getCategories
