import Box from '@mui/material/Box'
import * as React from 'react'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import Button from '@mui/material/Button'
import { ColorModeContext } from '../src/theme'
import Layout from '../src/Layout'

export default function Page() {
  const theme = useTheme()
  return (
    <Layout>
      <Container maxWidth="lg">
        <Box marginY={10} borderRadius={4} p={{ xs: 4, base: 10 }}>
          <Typography
            sx={{ fontWeight: '700' }}
            variant="h2"
            component="h2"
            gutterBottom
          >
            This Page Does not exist
          </Typography>
          <Typography
            sx={{ fontWeight: '500' }}
            variant="h4"
            component="div"
            gutterBottom
          >
            Error 404
          </Typography>
          <Button size="large" href="/" disableElevation variant="contained">
            Home
          </Button>
        </Box>
      </Container>
    </Layout>
  )
}
