import {
  HStack,
  List,
  ListItem,
  Image,
  Button,
  Heading,
} from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'
import useGameQueryStore from '../store'

const GenreList = () => {
  const { data, error } = useGenres()
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId)
  const setSelectedGenreId = useGameQueryStore(s => s.setGenreId)

  if (error) return null

  // if (loading) return <Spinner />

  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
    <List>
      {data?.results.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
              objectFit='cover'
            />
            <Button
              fontWeight={genre.id === selectedGenreId ? 'bold': 'normal' }
              onClick={() => setSelectedGenreId(genre.id)}
              fontSize="large"
              variant="link"
              whiteSpace='normal'
              textAlign='left'
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  )
}

export default GenreList
