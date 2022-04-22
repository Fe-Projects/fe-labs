import * as React from 'react';
import { styled } from '@mui/material/styles';
import Link from 'next/link'

const Navigation = styled('nav')(({ theme }) => ({
  '& ul': {
    padding: 0,
    margin: 0,
    listStyle: 'none',
    display: 'flex',
  },
  '& li': {
    color: theme.palette.text.primary,
    ...theme.typography.body2,
    fontWeight: 700,
    '& > a, & > div': {
      display: 'inline-block',
      color: 'inherit',
      textDecoration: 'none',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      borderRadius: '20px',
      '&:hover, &:focus': {
        backgroundColor:
          theme.palette.mode === 'dark' ? '#fff' : '#08212d',
        color:
          theme.palette.mode === 'dark' ? '#08212d' : '#fff',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'initial',
        },
      },
    },
    '& > div': {
      cursor: 'default',
    },
  },
}));

export default function HeaderNavBar() {
  const navRef = React.useRef<HTMLUListElement | null>(null);
 
  return (
    <Navigation>
      <ul ref={navRef} role="menubar" >
        <li role="none">
          <Link href="/">
            Home
          </Link>
        </li>
        <li role="none">
          <Link href="/projects">
            Projects
          </Link>
        </li>
        <li role="none">
          <Link href="/thoughts">
            Thoughts
          </Link>
        </li>
        <li role="none">
          <Link href="/recommendations">
            Recommendations
          </Link>
        </li>
        <li role="none">
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </Navigation>
  );
}
