import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: Genre
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, error } = useGenres()

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
              fontWeight={genre.id === selectedGenreId?.id ? 'bold': 'normal' }
              onClick={() => onSelectGenre(genre)}
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
