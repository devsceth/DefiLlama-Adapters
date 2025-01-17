const { getUniTVL } = require('../helper/unknownTokens')

module.exports = {
  misrepresentedTokens: true,
  canto: {
    tvl: getUniTVL({
      factory: '0xF80909DF0A01ff18e4D37BF682E40519B21Def46',
      useDefaultCoreAssets: true,
      hasStablePools: true,
    })
  },
  pulse: {
    tvl: getUniTVL({
      factory: '0x6B4449C74a9aF269A5f72B88B2B7B8604685D9B9',
      useDefaultCoreAssets: true,
      hasStablePools: true,
    })
  },
}
