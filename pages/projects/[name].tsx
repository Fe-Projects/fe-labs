import * as React from 'react'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useTheme } from '@mui/material/styles'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import useMediaQuery from '@mui/material/useMediaQuery'
import { BsCircleFill, BsCircle } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import AllPaths from '../../lib/gen_paths'
import Layout from '../../src/Layout'
import GetPost from '../../lib/get_post'
import Keyboard from '../../types/keyboard'

type PostProps = {
  params: {
    name: string
  }
}

type PageProps = {
  keyboard: Keyboard
}

export default function Page({ keyboard }: PageProps) {
  const router = useRouter()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  }

  if (!keyboard) {
    return <div>404</div>
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderDotsItem = ({ isActive }: any) => {
    return (
      <IconContext.Provider
        value={{
          style: {
            margin: '5px',
          },
          className: 'global-class-name',
        }}
      >
        {isActive ? <BsCircleFill /> : <BsCircle />}
      </IconContext.Provider>
    )
  }

  if (!router.isFallback && !keyboard.name) {
    return <div>404</div>
  }
  return (
    <Layout>
      <Box marginX="5%">
        <Box
          marginY={{ xs: '1%', md: '5%' }}
          sx={{ display: 'flex', flexDirection: matches ? 'row' : 'column' }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              sx={{ fontWeight: 700 }}
              variant="h2"
              component="h1"
              align="left"
            >
              {keyboard.name}
            </Typography>
            <TableContainer sx={{ marginY: 4 }} component={Paper}>
              <Table
                sx={{ minWidth: '25%' }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 500 }}>Name</TableCell>
                    <TableCell sx={{ fontWeight: 500 }} align="right">
                      Value
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {keyboard.specs.map((row) => (
                    <TableRow
                      key={row.field_name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.field_name}
                      </TableCell>
                      <TableCell align="right">{row.field_value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box width={{ xs: '100%', md: '70%', lg: '70%' }}>
            <Box marginLeft={{ xs: 0, md: 10, lg: 20 }}>
              <AliceCarousel
                autoPlay
                autoPlayStrategy="none"
                autoPlayInterval={1000}
                animationDuration={1000}
                animationType="fadeout"
                infinite
                disableButtonsControls
                touchTracking={false}
                autoWidth
                autoHeight
                renderDotsItem={renderDotsItem}
                mouseTracking
                items={keyboard.gallery_images.map((im) => (
                  <Box
                    key={im}
                    height={{ xs: '12em', md: '20em', xl: '30em' }}
                    width={{ xs: '24em', md: '40em', xl: '60em' }}
                    sx={{
                      backgroundImage: `url(${im})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'centre',
                      backgroundSize: 'cover',
                    }}
                  />
                ))}
                responsive={responsive}
              />

              {/*                  <Box height="400px" width="100%"  sx={{backgroundImage: `url(${keyboard.gallery_images[0]})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: 'centre',
                  backgroundSize: "cover"}}>
                  </Box> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  )

  // Render post...
}

export async function getStaticProps({ params }: PostProps) {
  const p = await GetPost(params.name)
  if (p) {
    return {
      props: {
        keyboard: p,
      },
    }
  }
  return {
    redirect: {
      destination: '/projects',
    },
  }
}

export async function getStaticPaths() {
  const pathVec = await AllPaths()
  if (pathVec) {
    const paths = pathVec.map((name, inde) => ({
      params: { name: name.toLowerCase(), id: inde.toString() },
    }))
    console.log(paths)
    return {
      paths,
      fallback: true,
    }
  }
  return {
    paths: [],
    fallback: false,
  }
}
