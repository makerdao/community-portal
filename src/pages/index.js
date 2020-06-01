/** @jsx jsx */
import React from "react"
import {Card, Box, Label, Input, Button, Heading, jsx, useColorMode} from 'theme-ui'

import SEO from "../modules/utility/seo"

const IndexPage = () => {
  const [colorMode, setColorMode] = useColorMode()
  
  return (
    <>
      <SEO title="Home" />
      <Card>
        <Heading variant="h2" as="h2"> Current Theme: {colorMode === 'default' ? 'Maker Default' : 'Oasis'}</Heading>
        <Box>
          <Label>Example Input</Label>
          <Input defaultValue="Default Text"></Input>
          <Button sx={{mt: 3}} onClick={() => setColorMode(colorMode === 'default' ? 'oasis' : 'default')}>Toggle Theme</Button>
        </Box>
      </Card>
    </>
  )
}

export default IndexPage
