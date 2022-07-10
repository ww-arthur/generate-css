export default function () {
  return useState('colors', () => [
    { name: 'orange', hash: '#dc793d' },
    { name: 'yellow', hash: '#ffeb3b' },
    { name: 'red', hash: '#dd2c00' },
    { name: 'green', hash: '#4caf50' },

    {
      name: 'grey',
      hash: '#808080',
      options: { tints: 15, shades: 15, alphas: 10, tones: 0 },
    },
  ])
}
