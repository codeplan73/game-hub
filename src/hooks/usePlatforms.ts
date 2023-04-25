import { useQuery } from '@tanstack/react-query'
import APIClient, { FetchResponse } from './../services/api-client'

export interface Platform {
  id: number
  name: string
  slug: string
}

const apiClient =  new APIClient<Platform>('/platforms/lists/parents')
const usePlatforms = () =>
  useQuery({
    queryKey: ['platform'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    // initialData: { count: platform.length, result: platform },
  })

export default usePlatforms
