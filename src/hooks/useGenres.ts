import genres from '../data/genres'
import { useQuery } from '@tanstack/react-query'
import APIClient from './../services/api-client'
import ms from 'ms'

export interface Genre {
  id: number
  name: string
  image_background: string
}

const apiClient = new APIClient<Genre>('/genres')

const useGenres = () =>
  useQuery({
    queryKey: ['genre'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h')
    // initialData: { count: genres.length, result: genres, next:null },
  })

export default useGenres
