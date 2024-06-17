/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md             all over
 *  - package.json          app-slug and version
 *  - public/manifest.json  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  // Name: 'big-AGI',
  // UpperName: 'BIG-AGI',
  Title: {
    Common: (process.env.NODE_ENV === 'development' ? '' : '') + '10xGPT',
  },
  Meta: {
    SiteName: '10xGPT',
    Title: '10xGPT',
    Description: '10xGPT a general artificial intelligence (AGI) that can solve any problem.',
    Keywords: 'artificial general intelligence, agi, openai, gpt-4, ai personas, code execution, pdf import, voice i/o, ai chat, artificial intelligence, harlan lewis',
    ThemeColor: '#EFEFEF',
  },
  URIs: {
    // Slug: 'big-agi',
    Home: 'https://www.harlanlewis.com',
    CardImage: 'https://gpt.harlanlewis.com/icons/card-dark-1200.png',
    OpenRepo: 'https://github.com/harlanlewis/nextjs-chatgpt-app/',
    SupportInvite: 'https://discord.gg/MkH4qj2Jp9',
  },
};