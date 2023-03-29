import { Text, SimpleGrid } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameQuery} from '../App'

interface Props {
  gameQuery: GameQuery;
}

const GameGride = ({ gameQuery }: Props) => {
  const { data, error, loading } = useGames(gameQuery)
  const skeletons = [1, 2, 3, 4, 5, 6]

  if(error) return <Text>{error}</Text>
  return (
    
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 2, xl: 4 }}
        spacing={6}
        padding="10px"
      >
        {loading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
  )
}

export default GameGride
