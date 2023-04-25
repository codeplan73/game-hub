import { useQuery } from '@tanstack/react-query'
import APIClient, { FetchResponse } from './../services/api-client'
import ms from 'ms'

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
    staleTime: ms('24h')
    // initialData: { count: platform.length, result: platform },
  })

export default usePlatforms
