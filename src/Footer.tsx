import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import Logo from './icons/Logo'

export default function Footer() {
  return (
    <Box
      marginTop={10}
      sx={{
        backgroundImage:
          'url(https://cdn.discordapp.com/attachments/902233332862025750/958371380192243772/16by9red.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
      }}
    >
      <Box
        sx={{
          paddingX: { xs: 2, md: 8 },
          paddingY: { xs: 2, md: 4 },

          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            color: 'black',
          }}
        >
          <Logo width={50} sc="#08212d" />
          <Link href="/thoughts" passHref>
            <Typography
              sx={{ cursor: 'pointer' }}
              marginTop={3}
              variant="h6"
              gutterBottom
              component="div"
            >
              Thoughts
            </Typography>
          </Link>
          <Link href="/recommendations" passHref>
            <Typography
              sx={{ cursor: 'pointer' }}
              variant="h6"
              gutterBottom
              component="div"
            >
              Recommendations
            </Typography>
          </Link>
          <Link href="/projects" passHref>
            <Typography
              sx={{ cursor: 'pointer' }}
              variant="h6"
              gutterBottom
              component="div"
            >
              Projects
            </Typography>
          </Link>
          <Link href="/contact" passHref>
            <Typography
              sx={{ cursor: 'pointer' }}
              variant="h6"
              gutterBottom
              component="div"
            >
              Contact
            </Typography>
          </Link>
          <Typography gutterBottom component="div">
            © All rights reserved
          </Typography>
          <Typography gutterBottom component="div">
            Made by daggy1234 <a href="https://daggy.tech">daggy.tech</a>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
