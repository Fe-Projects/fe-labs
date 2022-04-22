import * as React from 'react'
import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from 'next/link'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { IconContext } from 'react-icons'
import { SiInstagram, SiTwitch, SiDiscord } from 'react-icons/si'
import Copyright from '../src/Copyright'
import ProTip from '../src/ProTip'
import Layout from '../src/Layout'

import Logo from '../src/icons/Logo'

export default function Home() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  return (
    <Layout>
      <Container maxWidth="lg">
        <Box
          sx={{
            marginBottom: 4,
            py: 10,
            display: 'flex',
            flexDirection: matches ? 'row' : 'column',
            // justifyContent: 'center',
            // alignItems: 'center',
            color: '#fff',
            backgroundImage: `linear-gradient(#08212d, #08212d),url(https://media.discordapp.net/attachments/840744933517951036/898808433149640724/image0.png)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'centre',
            backgroundBlendMode: 'saturation',
          }}
        >
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'right',
              alignItems: 'right',
              filter: 'brightness(100%)',
            }}
            width={matches ? '50%' : '100%'}
          >
            <Typography
              sx={{ fontWeight: '800' }}
              variant="h1"
              component="h1"
              gutterBottom
            >
              Fe Labs
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                cursor: 'pointer',
              }}
            >
              <IconContext.Provider
                value={{
                  size: '2em',
                  style: { margin: '5px' },
                  className: 'global-class-name',
                }}
              >
                <Link href="https://discord.gg/j7uXAapCba" passHref>
                  <SiInstagram />
                </Link>
                <Link href="https://discord.gg/j7uXAapCba" passHref>
                  <SiTwitch />
                </Link>
                <Link href="https://discord.gg/j7uXAapCba" passHref>
                  <SiDiscord />
                </Link>
              </IconContext.Provider>
            </Box>
          </Box>
          {/*
        <Box>
          <Logo width={300} />
        </Box> */}
        </Box>
        <Box mt={6}>
          <Box>
            <Typography
              sx={{ fontWeight: '700', opacity: 1.0 }}
              variant="h3"
              component="h3"
            >
              hi, i&apos;m fe
            </Typography>
            <Typography
              sx={{ fontWeight: '700', opacity: 0.9 }}
              variant="h3"
              component="h3"
            >
              rectangle enthusiast
            </Typography>
            <Typography
              sx={{ fontWeight: '700', opacity: 0.8 }}
              variant="h3"
              component="h3"
            >
              electron fan
            </Typography>
            <Typography
              sx={{ fontWeight: '700', opacity: 0.7 }}
              variant="h3"
              component="h3"
            >
              pcb designer
            </Typography>
            <Typography
              sx={{ fontWeight: '700', opacity: 0.6 }}
              variant="h3"
              component="h3"
            >
              retro game enjoyer
            </Typography>
            <Typography
              sx={{ fontWeight: '700', opacity: 0.5 }}
              variant="h3"
              component="h3"
            >
              follow me
            </Typography>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}
