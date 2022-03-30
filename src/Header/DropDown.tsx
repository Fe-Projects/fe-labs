import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link'
import Drawer from '@mui/material/Drawer';
import { GiHamburgerMenu } from 'react-icons/gi'

const drawerWidth = 240;

const Anchor = styled('a')<{ component?: React.ElementType; noLinkStyle?: boolean }>(
  ({ theme }) => ({
    ...theme.typography.body2,
    fontWeight: 700,
    textDecoration: 'none',
    border: 'none',
    width: '100%',
    backgroundColor: 'transparent',
    color: theme.palette.mode === 'dark' ? '#fff' : '#08212d',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    transition: theme.transitions.create('background'),
    '&:hover, &:focus': {
      backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.primaryDark[700] : theme.palette.grey[100],
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  }),
);

const UList = styled('ul')({
  listStyleType: 'none',
  padding: 0,
  margin: 0,
});


export default function HeaderNavDropdown() {
  const [open, setOpen] = React.useState(false);
  const hambugerRef = React.useRef<HTMLButtonElement | null>(null);


  return (
    <React.Fragment>
      <IconButton
        color="primary"
        aria-label="Menu"
        ref={hambugerRef}
        disableRipple
        onClick={() => setOpen((value) => !value)}
        sx={{
          position: 'relative',
          '& rect': {
            transformOrigin: 'center',
            transition: '0.2s',
          },
          ...(open && {
            '& rect:first-of-type': {
              transform: 'translate(1.5px, 1.6px) rotateZ(-45deg)',
            },
            '& rect:last-of-type': {
              transform: 'translate(1.5px, -1.2px) rotateZ(45deg)',
            },
          }),
        }}
      >
        <GiHamburgerMenu />
      </IconButton>
      <ClickAwayListener
        onClickAway={(event) => {
          if (hambugerRef.current && !hambugerRef.current.contains(event.target as Node)) {
            setOpen(false);
          }
        }}
      >
        <Drawer
          anchor="right"
          open={open}
          variant="temporary"
          onClose={() => setOpen((value) => !value)}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            boxShadow: (theme) =>
              `0px 4px 20px ${
                theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(170, 180, 190, 0.3)'
              }`,
            bgcolor: 'background.paper',
          }}
        >
          <Box
            sx={{
              p: 2,
              bgcolor: 'background.paper',
              maxHeight: 'calc(100vh - 56px)',
              overflow: 'auto',
            }}
          >
            <UList>
              <li>
              <Link  href = "/">
                <Anchor noLinkStyle>
                  Docs
                </Anchor>
              </Link>
              </li>
              <li>
              <Link href = "/">
                <Anchor noLinkStyle>
                  Pricing
                </Anchor>
              </Link>
              </li>
              <li>
              <Link href = "/">
                <Anchor noLinkStyle>
                  About us
                </Anchor>
              </Link>
              </li>
              <li>
              <Link href = "/">
                <Anchor noLinkStyle>
                  Blog
                </Anchor>
              </Link>
              </li>
            </UList>
          </Box>
        </Drawer>
      </ClickAwayListener>
    </React.Fragment>
  );
}
