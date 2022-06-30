const path = require('path');
const { tokens: { tokens } } = require('bab-style-system');

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-calc': {},
    'postcss-each': {},
    'postcss-nested-ancestors': {},
    'postcss-nested': {},
    'postcss-mixins': {
      mixins: {
        ellipsis: () => {
          return {
            '&': {
              overflow: 'hidden',
              'text-overflow': 'ellipsis',
              'white-space': 'nowrap',
            },
          };
        },
        'screen-below': (mixin, breakpoint) => {
          if (!tokens.breakpoints?.[breakpoint]) {
            throw new Error(
              `Invalid breakpoint: ${breakpoint}. Valid breakpoints are ${Object.keys(tokens.breakpoints)}`,
            );
          }
          const breakpointValue = tokens.breakpoints[breakpoint];
          return {
            [`@media (max-width: ${breakpointValue - 1}px)`]: {
              '@mixin-content': {},
            },
          };
        },
        'screen-above': (mixin, breakpoint) => {
          if (!tokens.breakpoints?.[breakpoint]) {
            throw new Error(
              `Invalid breakpoint: ${breakpoint}. Valid breakpoints are ${Object.keys(tokens.breakpoints)}`,
            );
          }
          const breakpointValue = tokens.breakpoints[breakpoint];
          return {
            [`@media (min-width: ${breakpointValue}px)`]: {
              '@mixin-content': {},
            },
          };
        },
        'screen-between': (mixin, breakpointStart, breakpointEnd) => {
          [breakpointStart, breakpointEnd].forEach((breakpoint) => {
            if (!tokens.breakpoints?.[breakpoint]) {
              throw new Error(
                `Invalid breakpoint: ${breakpoint}. Valid breakpoints are ${Object.keys(tokens.breakpoints)}`,
              );
            }
          });
          const breakpointStartValue = tokens.breakpoints[breakpointStart];
          const breakpointEndValue = tokens.breakpoints[breakpointEnd];
          return {
            [`@media (min-width: ${breakpointStartValue + 1}px) and (max-width: (${breakpointEndValue + 1}px))`]: {
              '@mixin-content': {},
            },
          };
        },
      },
    },
    'postcss-preset-env': {
      stage: 3,
    },
    cssnano: {},
  },
};
