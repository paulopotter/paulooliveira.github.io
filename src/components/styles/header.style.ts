
import {createUseStyles} from 'react-jss'
import { THEME_VALUE, FONT } from '../../config/config.style'

export const HeaderStyle = createUseStyles({
  skipContent: ({isDarkTheme}) => ({
    'font-size': '1em',
    'background-color': THEME_VALUE(isDarkTheme, "changeThemeButtonBg"),
    height: '3em',
    padding: '0.5em 1em',
    position: 'absolute',
    transform: 'translateY(-100%)',
    transition: 'transform 0.3s',
    color: THEME_VALUE(isDarkTheme, "changeThemeButton"),

    '&:visited': {
        color: THEME_VALUE(isDarkTheme, "changeThemeButton"),
    },

    '&:focus': {
      transform: 'translateY(0%)',
      outline:` 3px solid ${THEME_VALUE(isDarkTheme, "changeThemeButton")}`,
    }
  }),

  header: {
    overflow: 'visible',
    padding: '1.5rem 1rem',
  },
  wrapper: {
    'max-width': 1400,
    margin: '0 auto',
  },
  title: {
  'font-size': '1.25em',
  'margin-left': '0.5em',
  'vertical-align': 'middle',
  },
  titleLink: ({isDarkTheme}) => ({
    'font-family': FONT.primary,
    'text-transform': 'uppercase',
    'font-size': '1em',
    'font-weight': 400,
    'text-decoration': 'none !important',
     color: [THEME_VALUE(isDarkTheme, "text"), '!important'],
  }),
  titleName: ({isDarkTheme}) => ({
    'font-weight': 700,
    color: THEME_VALUE(isDarkTheme, "heading"),

    '@media (max-width: 400px)': {
      display: 'inline-block',
      width: '80%',
    }
  })


})
