import variables from './variables'
export function generateUtilityObject(
  iterations: number,
  unit = '',
  multiplier = 1,
  prefix = '',
  startAt = 0,
) {
  let arr = []
  for (let i = startAt; i < iterations + startAt; i++) {
    arr.push([`${prefix}${i}`, `${i * multiplier}${unit}`])
  }
  return Object.fromEntries(arr)
}

export function useUtilities(options = variables) {
  return {
    o: {
      removeDivider: true,
      properties: { a: ['overflow'], x: ['overflow-x'], y: ['overflow-y'] },
      values: ['auto', 'hidden', 'visible'],
    },
    di: {
      properties: ['display'],
      values: [
        'none',
        'inline',
        'inline-block',
        'block',
        'table',
        'table-row',
        'table-cell',
        'flex',
        'inline-flex',
      ],
    },
    po: {
      properties: ['position'],
      values: ['static', 'relative', 'fixed', 'absolute', 'sticky'],
    },
    he: {
      properties: {
        default: ['height'],
        min: ['min-height'],
        max: ['max-height'],
      },
      values: {
        auto: 'auto',
        '25': '25%',
        '50': '50%',
        '75': '75%',
        '100': '100%',
        '100vh': '100vh',
      },
    },
    wi: {
      properties: {
        default: ['width'],
        min: ['min-width'],
        max: ['max-width'],
      },
      values: {
        auto: 'auto',
        '25': '25%',
        '50': '50%',
        '75': '75%',
        '100': '100%',
        '100vh': '100vw',
      },
    },
    ar: {
      properties: ['aspect-ratio'],
      values: {
        '1': 1,
        '16x9': 16 / 9,
        unset: 'unset',
      },
    },
    // Flex utilities
    fl: [
      {
        properties: ['flex-direction'],
        values: ['row', 'column', 'row-reverse', 'column-reverse'],
      },
      {
        properties: { grow: ['flex-grow'] },
        values: [0, 1],
      },
      {
        properties: { shrink: ['flex-shrink'] },
        values: [0, 1],
      },
      {
        properties: ['flex-wrap'],
        values: ['wrap', 'nowrap', 'wrap-reverse'],
      },
    ],
    jc: {
      properties: ['justify-content'],
      values: {
        start: 'flex-start',
        end: 'flex-end',
        center: 'center',
        'space-between': 'space-between',
        'space-around': 'space-around',
      },
    },
    ai: {
      properties: ['align-items'],
      values: {
        start: 'flex-start',
        end: 'flex-end',
        center: 'center',
        baseline: 'baseline',
        stretch: 'stretch',
      },
    },
    as: {
      properties: ['align-self'],
      values: {
        auto: 'auto',
        start: 'flex-start',
        end: 'flex-end',
        center: 'center',
        baseline: 'baseline',
        stretch: 'stretch',
      },
    },
    // Margin utilities
    m: {
      removeDivider: true,
      properties: {
        a: ['margin'],
        x: ['margin-right', 'margin-left'],
        y: ['margin-top', 'margin-bottom'],
        t: ['margin-top'],
        r: ['margin-right'],
        b: ['margin-bottom'],
        l: ['margin-left'],
      },
      values: { ...options.negativeSpacers, ...options.spacers },
    },
    p: {
      removeDivider: true,
      properties: {
        a: ['padding'],
        x: ['padding-right', 'padding-left'],
        y: ['padding-top', 'padding-bottom'],
        t: ['padding-top'],
        r: ['padding-right'],
        b: ['padding-bottom'],
        l: ['padding-left'],
      },
      values: options.spacers,
    },
    ro: {
      properties: {
        default: ['border-radius'],
        top: ['border-top-left-radius', 'border-top-right-radius'],
        right: ['border-top-right-radius', 'border-bottom-right-radius'],
        bottom: ['border-bottom-left-radius', 'border-bottom-right-radius'],
        left: ['border-top-left-radius', 'border-bottom-left-radius'],
        'top-left': ['border-top-left-radius'],
        'top-right': ['border-top-right-radius'],
        'bottom-right': ['border-bottom-right-radius'],
        'bottom-left': ['border-bottom-left-radius'],
      },
      values: options.borderRadius,
    },
    b: {
      removeDivider: true,
      properties: {
        o: ['border-width'],
        t: ['border-top-width'],
        r: ['border-right-width'],
        b: ['border-bottom-width'],
        l: ['border-left-width'],
      },
      values: options.borderWidths,
    },
    // Text
    te: [
      {
        properties: ['text-align'],
        values: ['left', 'right', 'center', 'justify', 'start', 'end'],
      },
      {
        properties: ['overflow-wrap', 'word-break'],
        // word-break for IE & < Edge 18
        values: { break: 'break-word' },
      },
      {
        properties: ['white-space', 'overflow', 'text-overflow'],
        values: {
          truncate: ['nowrap', 'hidden', 'ellipsis'],
        },
      },
      {
        properties: ['text-transform'],
        values: ['none', 'capitalize', 'lowercase', 'uppercase'],
      },
      {
        properties: ['white-space'],
        values: {
          wrap: 'normal',
          nowrap: 'nowrap',
          pre: 'pre',
          'pre-line': 'pre-line',
          'pre-wrap': 'pre-wrap',
        },
      },
    ],
    'text-decoration': {
      properties: ['text-decoration'],
      values: ['line-through', 'none', 'overline', 'underline'],
    },
    'background-clip': {
      properties: ['background-clip'],
      values: ['border-box', 'padding-box', 'content-box', 'text'],
    },
    fs: {
      properties: ['font-size'],
      values: options.fontSizes,
    },
    fw: {
      properties: ['font-weight'],
      values: options.fontWeights,
    },
  }
}