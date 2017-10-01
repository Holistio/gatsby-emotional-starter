import ReactDOM from 'react-dom/server'
import React from 'react'
import Typography from 'typography'
import { GoogleFont } from 'react-typography'

// TODO: update to stardust theme
const options = {
  baseFontSize: '20px',
  baseLineHeight: 1.60,
  googleFonts: [
    {
      name: 'Merriweather',
      styles: ['300', '300i', '400']
    },
    {
      name: 'Josefin Sans',
      styles: ['400', '600']
    }
  ],
  headerFontFamily: ['Josefin Sans', 'sans-serif'],
  bodyFontFamily: ['Merriweather', 'serif'],
  scaleRatio: 2.40
}

const typography = new Typography(options)

// if (process.env.NODE_ENV !== 'production') {
//   typography.injectStyles()
//   if (typeof document !== undefined) {
//     const googleFonts = ReactDOM.renderToStaticMarkup(
//       React.createFactory(GoogleFont)({ typography })
//     )
//     const head = document.getElementsByTagName('head')[0]
//     head.insertAdjacentHTML('beforeend', googleFonts)
//   }
// }

export default typography