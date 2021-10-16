module.exports = {
  purge: ['*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flexGrow: {
        '5': 5
      },
      skew: {
       '20': '20deg',
       '-20': '-20deg',
      },
      transitionDelay: {
        '5000': '5000ms'
      },
    },
  },
  variants: {
    extend: {
      flexGrow: ['hover', 'focus', 'group-hover'],
      display: ['hover', 'focus', 'group-hover'],
      transitionDelay: ['hover', 'focus', 'group-hover'],
      scale: ['hover', 'focus', 'active', 'group-hover'],
      translate: ['hover', 'focus', 'active', 'group-hover'],
    },
  },
  plugins: [],
}
