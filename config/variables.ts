import config from './config'
import { generateUtilityObject } from './utilities'
let variables = {
  ...config,
  ...{
    spacers: generateUtilityObject?.(
      config.spacers.iterations,
      config.spacers.unit,
      config.spacers.multiplier,
    ),
    negativeSpacers: generateUtilityObject?.(
      config.spacers.iterations,
      config.spacers.unit,
      -config.spacers.multiplier,
      'n',
    ),
    fontWeights: generateUtilityObject?.(
      config.fontWeights.iterations,
      config.fontWeights.unit,
      config.fontWeights.multiplier,
      '',
      1,
    ),
    borderWidths: generateUtilityObject?.(
      config.borderWidths.iterations,
      config.borderWidths.unit,
    ),
  },
}
export default variables
