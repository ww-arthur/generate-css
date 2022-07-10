import config from './config'
import { generateUtilityValues } from './utilities'
let variables = {
  ...config,
  ...{
    spacers: generateUtilityValues?.(
      config.spacers.iterations + 1,
      config.spacers.unit,
      config.spacers.multiplier,
    ),
    negativeSpacers: generateUtilityValues?.(
      config.spacers.iterations + 1,
      config.spacers.unit,
      -config.spacers.multiplier,
      'n',
    ),
    fontWeights: generateUtilityValues?.(
      config.fontWeights.iterations,
      config.fontWeights.unit,
      config.fontWeights.multiplier,
      '',
      1,
    ),
    borderWidths: generateUtilityValues?.(
      config.borderWidths.iterations + 1,
      config.borderWidths.unit,
      config.borderWidths.multiplier,
    ),
  },
}
export default variables
