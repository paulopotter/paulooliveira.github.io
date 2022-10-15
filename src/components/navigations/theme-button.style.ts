import { createUseStyles } from 'react-jss';
import { THEME, MEDIA_QUERIES } from 'theme';

export const ThemeButtonStyle = createUseStyles((theme: THEME) => ({
  button: {
    padding: '0.5em',
    height: '3em',
    width: '3em',
    top: '-3em',
    right: '3%',
    transition: 'transform 0.3s',
    zIndex: 1,
    backgroundColor: theme.button.inverted.background,

    '&:focus': {
      outline: `3px solid ${theme.button.inverted.color}`,
    },
    '&:active, &:hover, &:focus': {
      backgroundColor: theme.button.inverted.background,
    },

    [ `@media (min-width: ${MEDIA_QUERIES.xs})` ]: {
      position: 'absolute',
    },
  },

  hasJs: {
    '&$button': {
      transform: 'translate(0, 100%)',
    },
  },

  svg: {
    transform: 'rotate(180deg)',
    color: theme.button.inverted.color,
    width: 32,
    height: 32,
  },
}));
