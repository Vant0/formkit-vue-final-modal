import { nl } from '@formkit/i18n'
import { defaultConfig } from '@formkit/vue'
import { createProPlugin, inputs } from '@formkit/pro'
import { rootClasses } from '@/formkit/formkit.theme'
import { genesisIcons } from '@formkit/icons'

const pro = createProPlugin(import.meta.env.VITE_FORMKIT_PRO_KEY, inputs)

export default defaultConfig({
  config: {
    rootClasses
  },
  locales: { nl },
  locale: 'nl',
  plugins: [pro],
  icons: {
    ...genesisIcons
  }
})
