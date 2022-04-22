import * as React from 'react';
import { styled, Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import { useTheme } from '@mui/material/styles';

type RootSvgProps<P = unknown> = Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
  sx?: SxProps<Theme>;
  ref?: React.Ref<SVGSVGElement>;
  sc?: string;
} & P;

const RootSvg = styled('svg')({
  verticalAlign: 'bottom',
});





export default function Logo(props: RootSvgProps) {
  
  const theme = useTheme();
  const sccm = theme.palette.mode === 'dark' ? '#fff' : '#08212d';
  let sc = props.sc ? props.sc : sccm;
  return (
    <RootSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 9.65 10.122"
      {...props}
    >
     <g transform="translate(-45.175 -44.939)">
      <g fill="none" stroke={sc} strokeWidth={0.212}>
        <path d="M52.36 50A2.36 2.36 0 0 1 50 52.36 2.36 2.36 0 0 1 47.642 50a2.36 2.36 0 0 1 2.36-2.36A2.36 2.36 0 0 1 52.36 50Z" />
        <path d="M53.146 50A3.146 3.146 0 0 1 50 53.146 3.146 3.146 0 0 1 46.854 50 3.146 3.146 0 0 1 50 46.854 3.146 3.146 0 0 1 53.146 50z" />
        <path d="M53.933 50A3.933 3.933 0 0 1 50 53.933 3.933 3.933 0 0 1 46.068 50 3.933 3.933 0 0 1 50 46.067 3.933 3.933 0 0 1 53.933 50z" />
        <path d="M54.719 50a4.72 4.72 0 0 1-4.72 4.72A4.72 4.72 0 0 1 45.282 50 4.72 4.72 0 0 1 50 45.28 4.72 4.72 0 0 1 54.719 50z" />
      </g>
      <circle fill={sc} cx={50} cy={46.067} r={0.342} />
      <circle fill={sc} cx={51.706} cy={46.457} r={0.342} />
      <circle fill={sc} cx={50} cy={46.854} r={0.342} />
      <circle fill={sc} cx={46.166} cy={49.125} r={0.342} />
      <circle fill={sc} cx={48.294} cy={46.457} r={0.342} />
      <circle fill={sc} cx={50} cy={45.281} r={0.342} />
      <circle fill={sc} cx={46.925} cy={47.548} r={0.342} />
      <circle fill={sc} cx={50} cy={47.64} r={0.342} />
      <circle fill={sc} cx={52.225} cy={47.775} r={0.342} />
      <circle fill={sc} cx={47.775} cy={47.775} r={0.342} />
      <circle fill={sc} cx={53.075} cy={47.548} r={0.342} />
      <circle fill={sc} cx={53.834} cy={49.125} r={0.342} />
      <circle fill={sc} cx={46.854} cy={50} r={0.342} />
      <circle fill={sc} cx={53.146} cy={50} r={0.342} />
      <circle fill={sc} cx={53.834} cy={50.875} r={0.342} />
      <circle fill={sc} cx={46.166} cy={50.875} r={0.342} />
      <circle fill={sc} cx={50} cy={52.36} r={0.342} />
      <circle fill={sc} cx={47.775} cy={52.225} r={0.342} />
      <circle fill={sc} cx={52.225} cy={52.225} r={0.342} />
      <circle fill={sc} cx={50} cy={53.146} r={0.342} />
      <circle fill={sc} cx={46.925} cy={52.452} r={0.342} />
      <circle fill={sc} cx={50} cy={53.933} r={0.342} />
      <circle fill={sc} cx={48.294} cy={53.543} r={0.342} />
      <circle fill={sc} cx={50} cy={54.719} r={0.342} />
      <circle fill={sc} cx={53.075} cy={52.452} r={0.342} />
      <circle fill={sc} cx={51.706} cy={53.543} r={0.342} />
    </g>
    </RootSvg>
  );
}
