import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

import { Tomato } from './shortcodes'

const shortcodes = { Tomato }

const Markdown = ({ children }) => (
  <div>
    {/* MDXProviderで独自に作成したコンポーネントをマークダウンに追加 */}
    <MDXProvider components={shortcodes}>
      {/* MDXRendererでコンテンツを表示 */}
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
  </div>
)

export default Markdown