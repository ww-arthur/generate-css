import variables from './variables'
export function generateUtilityValues(
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
      properties: { v: ['overflow'], x: ['overflow-x'], y: ['overflow-y'] },
      values: ['auto', 'hidden', 'visible'],
      name: 'Overflow',
      description:
        'Controls what happens when there is too much content to fit in an element.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/overflow',
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
      name: 'Display',
      description:
        'Controls how an element will affect the layout or its children.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/display',
    },
    po: {
      properties: ['position'],
      values: ['static', 'relative', 'fixed', 'absolute', 'sticky'],
      name: 'Position',
      description: 'Controls how an element is positioned in a document.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/position',
    },
    to: {
      properties: ['top'],
      values: {
        '0': '0',
        '25': '25%',
        '50': '50%',
        '75': '75%',
        '100': '100%',
      },
      name: 'Top',
      description:
        'Controls how far the element will be from the top (Must be used with non-static positions).',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/top',
    },
    le: {
      properties: ['left'],
      values: {
        '0': '0',
        '25': '25%',
        '50': '50%',
        '75': '75%',
        '100': '100%',
      },
      name: 'Left',
      description:
        'Controls how far the element will be from the left (Must be used with non-static positions).',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/left',
    },
    bo: {
      properties: ['bottom'],
      values: {
        '0': '0',
        '25': '25%',
        '50': '50%',
        '75': '75%',
        '100': '100%',
      },
      name: 'Bottom',
      description:
        'Controls how far the element will be from the bottom (Must be used with non-static positions).',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/bottom',
    },
    ri: {
      properties: ['right'],
      values: {
        '0': '0',
        '25': '25%',
        '50': '50%',
        '75': '75%',
        '100': '100%',
      },
      name: 'Right',
      description:
        'Controls how far the element will be from the right (Must be used with non-static positions).',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/right',
    },

    tr: {
      properties: ['transform'],
      values: {
        'translate-top': 'translate(0, -100%)',
        'translate-bottom': 'translate(0, 100%)',
        'translate-left': 'translate(-100%,0)',
        'translate-right': 'translate(100%,0)',
        'translate-center': 'translate(-50%, -50%)',
        'rotate-45': 'rotate(45deg)',
        'rotate-90': 'rotate(90deg)',
        'rotate-180': 'rotate(180deg)',
        'rotate-270': 'rotate(270deg)',
        'scale-0': 'scale(0)',
        'scale-1': 'scale(1)',
        'scale-1-5': 'scale(1.5)',
      },
      name: 'Transform',
      description: 'Controls translate, rotate, and scale of an element.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform',
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
      name: 'Height',
      description: 'Controls the height of an element.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/height',
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
      name: 'Width',
      description: 'Controls the width of an element.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/width',
    },
    ar: {
      properties: ['aspect-ratio'],
      values: {
        '1': 1,
        '16x9': 16 / 9,
        unset: 'unset',
      },
      name: 'Aspect ratio',
      description: 'Controls the width/height ratio of an element.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio',
    },
    // Flex utilities
    fl: [
      {
        properties: ['flex-direction'],
        values: ['row', 'column', 'row-reverse', 'column-reverse'],
        name: 'Flex direction',
        description:
          'Controls how elements are placed inside a FlexBox element',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction',
      },
      {
        properties: { grow: ['flex-grow'] },
        values: [0, 1],
        name: 'Flex grow',
        description:
          'Controls whether an element inside a FlexBox element will grow.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow',
      },
      {
        properties: { shrink: ['flex-shrink'] },
        values: [0, 1],
        name: 'Flex shrink',
        description:
          'Controls whether an element inside a FlexBox element will shrink.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink',
      },
      {
        properties: ['flex-wrap'],
        values: ['wrap', 'nowrap', 'wrap-reverse'],
        name: 'Flex wrap',
        description:
          'Controls what happens if childrens of an FlexBox element overflows.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap',
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
        stretch: 'stretch',
      },
      name: 'Justify content',
      description:
        'Controls the alignment of children elements along the main-axis.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content',
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
      name: 'Align items',
      description:
        'Controls the alignment of children elements along the cross-axis.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/align-items',
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
      name: 'Align self',
      description:
        'Controls the alignment of an element inside a FlexBox element along the cross-axis.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/align-self',
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
      name: 'Margin',
      description: 'Controls the margin area of an element, or outside spacing',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/margin',
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
      name: 'Padding',
      description: 'Controls the padding area of an element, or inside spacing',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/padding',
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
      name: 'Rounded',
      description: 'Controls how round the edges of an element will be.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius',
    },
    bw: {
      properties: {
        default: ['border-width'],
        top: ['border-top-width'],
        right: ['border-right-width'],
        bottom: ['border-bottom-width'],
        left: ['border-left-width'],
      },
      values: options.borderWidths,
      name: 'Border width',
      description:
        'Controls the size of the border of an element (borders should have colors to appear).',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-width',
    },
    // Text
    te: [
      {
        properties: ['text-align'],
        values: ['left', 'right', 'center', 'justify', 'start', 'end'],
        name: 'Text align',
        description: 'Controls the alignment of a text inside an element.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-align',
      },
      {
        properties: ['overflow-wrap', 'word-break'],
        // word-break for IE & < Edge 18
        values: { break: 'break-word' },
        name: 'Text break',
        description:
          'Defines that text will break to a new line when it overflows an element.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap',
      },
      {
        properties: ['white-space', 'overflow', 'text-overflow'],
        values: {
          truncate: ['nowrap', 'hidden', 'ellipsis'],
        },
        name: 'Text truncate',
        description:
          'Defines that text will add "..." at it\'s breakpoint when it overflows an element.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow',
      },
      {
        properties: ['text-transform'],
        values: ['none', 'capitalize', 'lowercase', 'uppercase'],
        name: 'Text transform',
        description: 'Controls the capitalization of a text inside an element.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform',
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
        name: 'White-space',
        description: 'Controls how white space inside an element is handled.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/white-space',
      },
      {
        properties: { decoration: ['text-decoration'] },
        values: ['line-through', 'none', 'overline', 'underline'],
        name: 'Text decoration',
        description:
          'Controls the appearance of decorative lines of a text inside an element.',
        link:
          'https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration',
      },
    ],
    bc: {
      properties: ['background-clip'],
      values: ['border-box', 'padding-box', 'content-box', 'text'],
      name: 'Background clip',
      description:
        'Controls where the background should appear inside an element.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip',
    },
    fs: {
      properties: ['font-size'],
      values: options.fontSizes,
      name: 'Font size',
      description: 'Controls the size of the text inside an element.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-size',
    },
    fw: {
      properties: ['font-weight'],
      values: options.fontWeights,
      name: 'Font weight',
      description: 'Controls how bold the text will be inside an element.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-size',
    },
    cursor: {
      properties: ['cursor'],
      values: [
        'none',
        'default',
        'pointer',
        'progress',
        'wait',
        'not-allowed',
        'n-resize',
        'e-resize',
      ],
      name: 'Cursor',
      description:
        'Controls what cursor should appear when hovering an element.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/cursor',
    },
  }
}
