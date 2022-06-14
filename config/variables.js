import config from './config.js'
import { generateUtilityArray } from './functions.js'
export default variables = {
  ...config,
  ...{
    spacers: generateUtilityArray(...config.spacers),
    negativeSpacers: generateUtilityArray(
      config.spacers.number,
      config.spacers.unit,
      config.spacers.multiplier,
      'n',
    ),
    fontWeights: generateUtilityArray(...config.fontWeights),
    borderWidths: generateUtilityArray(...config.borderWidths),
  },
}
