/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // reference the library only
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: {
        40: '#FDF0FF',
        light: '#FDF0FF',
        50: '#F6E1F9',
        100: '#F0CEF5',
        200: '#E3B2EB',
        300: '#CE92D6',
        400: '#BD77C7',
        500: '#A35AAD',
        600: '#8B3D99',
        700: '#742384',
        DEFAULT: '#742384',
        800: '#5E186C',
        action: '#5E186C',
        900: '#3F0D4A',
        dark: '#3F0D4A',
      },
      purple: {
        40: '#FDF0FF',
        light: '#FDF0FF',
        50: '#F6E1F9',
        100: '#F0CEF5',
        200: '#E3B2EB',
        300: '#CE92D6',
        400: '#BD77C7',
        500: '#A35AAD',
        600: '#8B3D99',
        700: '#742384',
        DEFAULT: '#742384',
        800: '#5E186C',
        action: '#5E186C',
        900: '#3F0D4A',
        dark: '#3F0D4A',
      },
      secondary: {
        40: '#E5FFFC',
        light: '#E5FFFC',
        50: '#C2FFF7',
        100: '#94FFF2',
        200: '#5FF7E4',
        300: '#2BEED5',
        400: '#12DEC4',
        500: '#10CBB4',
        DEFAULT: '#10CBB4',
        600: '#00AD97',
        action: '#00AD97',
        700: '#008C7B',
        800: '#006B5F',
        dark: '#006B5F',
        900: '#004D43',
      },
      mint: {
        40: '#E5FFFC',
        light: '#E5FFFC',
        50: '#C2FFF7',
        100: '#94FFF2',
        200: '#5FF7E4',
        300: '#2BEED5',
        400: '#12DEC4',
        500: '#10CBB4',
        DEFAULT: '#10CBB4',
        600: '#00AD97',
        action: '#00AD97',
        700: '#008C7B',
        800: '#006B5F',
        dark: '#006B5F',
        900: '#004D43',
      },
      gray: {
        40: '#F6F4FB',
        light: '#F6F4FB',
        45: '#EEECF3',
        50: '#2C2044',
        100: '#CECAD6',
        200: '#EEECF3',
        300: '#2C2044',
        400: '#918AA0',
        500: '#7D758D',
        DEFAULT: '#7D758D',
        600: '#69607B',
        action: '#69607B',
        700: '#544A69',
        800: '#403556',
        dark: '#403556',
        900: '#2C2044',
        text: '#2C2044',
      },
      screens: {
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      background: '#fff',
      white: '#fff',
      black: '#000',
      transparent: 'transparent',
      fontWeight: {
        regular: '400',
        medium: '500',
        bold: '700',
        black: '900',
      },
    },
    borderRadius: {
      '2xl': '16px',
    },
    fontSize: {
      sm: '10px', // Desktop/OVERLINE
      base: '14px', // Desktop/Subtitle 2
      xl: '16px', // Desktop/Subtitle 1
      '2xl': '20px', // Desktop/Headline 6
      '3xl': '24px', // Desktop/Headline 5
      '4xl': '34px', // Desktop/Headline 4
      '5xl': '48px', // Desktop/Headline 3
    },
  },
  plugins: [require('tailwindcss-animate')],
}
