const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'orange': {
          '50': '#fef7ee',
          '100': '#fdedd7',
          '200': '#f9d7af',
          '300': '#f5b97c',
          '400': '#f09247',
          '500': '#ed7d31',
          '600': '#dd5b19',
          '700': '#b74417',
          '800': '#92371a',
          '900': '#762f18',
          '950': '#40160a',
        },
        'brown': {
          '50': '#f4f3f2',
          '100': '#e3e1de',
          '200': '#c9c4bf',
          '300': '#aaa19a',
          '400': '#92857d',
          '500': '#83756f',
          '600': '#6c5f5b',
          '700': '#5b4f4d',
          '800': '#4f4544',
          '900': '#463d3d',
          '950': '#272121',
        },
        'gray': {
          '50': '#f4f4f2',
          '100': '#e3e3de',
          '200': '#c9c8bf',
          '300': '#aaa79a',
          '400': '#918c7e',
          '500': '#827d70',
          '600': '#6f6a5f',
          '700': '#5a554e',
          '800': '#4f4a45',
          '900': '#45413e',
          '950': '#272421',
        },
        'white': {
          '50': '#f6f1ee',
          '100': '#f0e9e4',
          '200': '#e1d0c7',
          '300': '#ceb1a3',
          '400': '#b98e7e',
          '500': '#aa7565',
          '600': '#9d6459',
          '700': '#83514b',
          '800': '#6b4441',
          '900': '#573937',
          '950': '#2e1d1c',
        },
        'green': {
          '50': '#f2f7f2',
          '100': '#e1ebe0',
          '200': '#c4d6c4',
          '300': '#9cb99e',
          '400': '#86a789',
          '500': '#507955',
          '600': '#3c5f41',
          '700': '#304c35',
          '800': '#283d2c',
          '900': '#213324',
          '950': '#121c15',
        },
        'red': {
          '50': '#fcf5f4',
          '100': '#fae8e6',
          '200': '#f6d5d2',
          '300': '#efb7b2',
          '400': '#e48d85',
          '500': '#d6675d',
          '600': '#c4544a',
          '700': '#a23c33',
          '800': '#86352e',
          '900': '#70322c',
          '950': '#3c1613',
        },
        'camelot': {
          '50': '#fbf4f8',
          '100': '#f8ebf1',
          '200': '#f3d7e5',
          '300': '#ebb6d0',
          '400': '#dd89b0',
          '500': '#cf6592',
          '600': '#bb4774',
          '700': '#a0365b',
          '800': '#88304e',
          '900': '#702b43',
          '950': '#431424',
        },
        'amaranth': {
          '50': '#fef2f3',
          '100': '#fde6e8',
          '200': '#fad1d5',
          '300': '#f5acb4',
          '400': '#ef7d8b',
          '500': '#e23e57',
          '600': '#d02e4e',
          '700': '#af2141',
          '800': '#931e3c',
          '900': '#7e1d39',
          '950': '#460b1b',
        },
  
        'voodoo': {
          '50': '#fdf6fc',
          '100': '#faedf9',
          '200': '#f5d9f2',
          '300': '#ecbbe4',
          '400': '#df93d1',
          '500': '#cd68ba',
          '600': '#b0499a',
          '700': '#913a7d',
          '800': '#773165',
          '900': '#522546',
          '950': '#3f1333',
        },
        'revolver': {
          '50': '#f4f0fd',
          '100': '#eae3fc',
          '200': '#dbcdf8',
          '300': '#c6aef3',
          '400': '#b78eeb',
          '500': '#aa72e2',
          '600': '#a057d4',
          '700': '#8c48ba',
          '800': '#723c97',
          '900': '#5b3778',
          '950': '#311d3f',
        },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
