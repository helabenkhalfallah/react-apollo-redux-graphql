import styled from 'styled-components'
import ThemeProvider from '../theme/Theme'

// app button theme provider
const { ThemeButtonProvider } = ThemeProvider

// button pros : color, background, align
// font, family, size, style, weight,
// border, radius, margin, padding
// custom button
const Button = styled.button.attrs({
  // get attribute from pros
  // or define default
  color: props => props.color || ThemeButtonProvider.defaultTheme.btDefaultColor,
  background: props => props.background || ThemeButtonProvider.defaultTheme.btDefaultBackground,
  align: props => props.align || ThemeButtonProvider.defaultTheme.btDefaultAlign,
  font: props => props.font || ThemeButtonProvider.defaultTheme.btDefaultFont,
  ffamily: (props) => {
    let family = (props && props.family) ? props.family : ThemeButtonProvider.defaultTheme.btDefaultFamily
    if (props && props.font) {
      family = ''
    }
    return family
  },
  fsize: (props) => {
    let size = (props && props.size) ? props.size : ThemeButtonProvider.defaultTheme.btDefaultSize
    if (props && props.font) {
      size = ''
    }
    return size
  },
  fstyle: (props) => {
    let style = (props && props.style) ? props.style : ThemeButtonProvider.defaultTheme.btDefaultStyle
    if (props && props.font) {
      style = ''
    }
    return style
  },
  fweight: (props) => {
    let weight = (props && props.weight) ? props.weight : ThemeButtonProvider.defaultTheme.btDefaultWeight
    if (props && props.font) {
      weight = ''
    }
    return weight
  },
  border: props => props.border || '0rem',
  radius: props => props.radius || '0rem',
  margin: props => props.margin || '1rem',
  padding: props => props.padding || '1rem',
}) `
  color: ${props => props.color};
  background: ${props => props.background};
  text-align: ${props => props.align};
  font: ${props => props.font};
  font-family: ${props => props.ffamily};
  font-size: ${props => props.fsize};
  font-style: ${props => props.fstyle};
  font-weight: ${props => props.fweight};
  border: ${props => props.border};
  border-radius: ${props => props.radius};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`

export default Button

