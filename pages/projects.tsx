import * as React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Link from 'next/link'
import Layout from '../src/Layout'
import GetAllPost from '../lib/get_posts'
import Keyboard from '../types/keyboard'

type PageProps = {
  keyboards: Keyboard[]
}

function About({ keyboards }: PageProps) {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginX: '5%',
          overflow: 'hidden',
        }}
      >
        <Typography
          sx={{ fontWeight: '800' }}
          variant="h2"
          component="h1"
          gutterBottom
        >
          Projects
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3, lg: 4 }}
          columns={{ xs: 1, md: 2, lg: 3 }}
        >
          {keyboards.map((k: Keyboard, ind) => (
            <Grid
              sx={{
                cursor: 'pointer',
              }}
              item
              key={k.name}
            >
              <Link href={`/projects/${k.name.toLowerCase()}`}>
                <Box
                  height={200}
                  width={350}
                  zIndex={300}
                  sx={{
                    backgroundImage: `url(${k.cover_image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    position: 'relative',
                    backgroundPosition: 'centre',
                    '&:hover': {
                      '& .galoverlay': {
                        visibility: 'visible',
                      },
                    },
                  }}
                >
                  <Box
                    className="galoverlay"
                    sx={{
                      display: 'flex',
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      top: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.4)',
                      left: 0,
                      visibility: 'hidden',
                      '&:hover': {
                        visibility: 'visible',
                      },
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        textAlign: 'centre',
                        margin: 'auto',
                        color: 'white',
                        fontWeight: '500',
                      }}
                    >
                      {k.name}
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  )
}

export async function getStaticProps() {
  console.log('work props')
  const p = await GetAllPost()
  console.log(p)
  if (p) {
    return {
      props: {
        keyboards: p,
      },
    }
  }
  return {
    redirect: {
      destination: '/',
    },
  }
}

export default About
