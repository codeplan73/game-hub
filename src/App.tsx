import { useState } from 'react'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import { Genre } from './hooks/useGenres'
import { Platform } from './hooks/useGames'
import Navbar from './components/Navbar'
import GameGride from './components/GameGride'
import GenreList from './components/GenreList'
import PlatformSelector from './components/PlatformSelector'

function App() {
  const [selectedGenre, setSelectedGenere] = useState<Genre | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

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
          <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenere(genre)} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setSelectedPlatform(platform)} />
        <GameGride selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  )
}

export default App
