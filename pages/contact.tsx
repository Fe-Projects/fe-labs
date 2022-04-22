import Box from '@mui/material/Box'
import * as React from 'react'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { ColorModeContext } from '../src/theme'
import Layout from '../src/Layout'

export default function Page() {
  const theme = useTheme()
  return (
    <Layout>
      <Container maxWidth="lg">
        <Box
          marginY={10}
          component={Paper}
          borderRadius={4}
          p={{ xs: 4, base: 10 }}
        >
          <Typography
            sx={{ fontWeight: '700' }}
            variant="h2"
            component="h2"
            gutterBottom
          >
            Fe Labs
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
              }}
            >
              For any queries, find me on Discord{' '}
              <Chip
                color="primary"
                sx={{ marginLeft: 2 }}
                label="Fe#5016"
                component="a"
                href="discord://-/users/94705354285256704"
                clickable
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
              }}
            >
              or email me at{' '}
              <Chip
                color="primary"
                sx={{ marginLeft: 2 }}
                label="fe39works@gmail.com"
                component="a"
                href="mailto:fe39works@gmail.com"
                clickable
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}
