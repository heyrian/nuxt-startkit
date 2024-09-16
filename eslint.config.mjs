import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    stylistic: {
      semi: false,
      indent: 4, // 4 or 'tab'
      // ... and more
    },
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off'
  }
})
