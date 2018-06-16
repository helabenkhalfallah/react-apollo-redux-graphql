
// button default theme values
const btDefaultColor = 'white'
const btDefaultBackground = 'black'

// center, left, right, justify
const btDefaultAlign = 'center'

// complete font values
const btDefaultFont = '1rem "Fira Sans", sans-serif;'

// https://developer.mozilla.org/fr/docs/Web/CSS/font-family
const btDefaultFamily = 'system-ui, fantasy, monospace, Arial, Georgia, serif'

// %, rem, em, larger, smaller, ...
// https://developer.mozilla.org/fr/docs/Web/CSS/font-size
const btDefaultSize = '1rem' // default size

// normal | italic | oblique | oblique 40deg , ...
// https://developer.mozilla.org/fr/docs/Web/CSS/font-style
const btDefaultStyle = 'normal' // default style

// normal | bold | lighter | bolder , 100, 200 ...
// https://developer.mozilla.org/fr/docs/Web/CSS/font-weight
const btDefaultWeight = 'lighter' // default style


// default theme
const defaultTheme = {
  // button default theme
  btDefaultColor,
  btDefaultBackground,
  btDefaultAlign,
  btDefaultFont,
  btDefaultFamily,
  btDefaultSize,
  btDefaultStyle,
  btDefaultWeight,
}

// app button theme provider
const ThemeButtonProvider = {
  defaultTheme,
}

export default ThemeButtonProvider
