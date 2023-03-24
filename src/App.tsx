import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGride from './components/GameGride'
import GenreList from './components/GenreList'

function App() {
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
        <GridItem area="aside" paddingY={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGride />
      </GridItem>
    </Grid>
  )
}

export default App
