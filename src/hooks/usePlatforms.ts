import { useQuery } from '@tanstack/react-query'
import useData from './useData'
import { FetchResponse } from './useData'
import apiClient from '../services/api-client'

interface Platform {
  id: number
  name: string
  slug: string
}

const usePlatforms = () =>
  useQuery({
    queryKey: ['platform'],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>('/platforms/lists/parents')
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    // initialData: { count: platform.length, result: platform },
  })

export default usePlatforms
