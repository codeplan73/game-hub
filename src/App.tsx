import { useState } from 'react'
import { Grid, GridItem, Show, HStack } from '@chakra-ui/react'
import { Genre } from './hooks/useGenres'
import { Platform } from './hooks/useGames'
import Navbar from './components/Navbar'
import GameGride from './components/GameGride'
import GenreList from './components/GenreList'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" padding={5}>
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...platform, platform })} />
          <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}/>
        </HStack>
        <GameGride gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
