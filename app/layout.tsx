import {
  NEXT_PUBLIC_SITE_TITLE,
  NEXT_PUBLIC_SITE_DESCRIPTION,
} from './server-constants'
import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/global.css'
import '../styles/syntax-coloring.css'
import styles from '../styles/shared.module.css'

export const metadata = {
  title: NEXT_PUBLIC_SITE_TITLE,
  description: NEXT_PUBLIC_SITE_DESCRIPTION,
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode,
}) => (
  <html lang="ja" prefix="og: https://ogp.me/ns#">
    <meta name="google-site-verification" content="KqH_rqHwgpBRCo-uApyrZAN8wAY0V8vo02DJ3tM0fss" />
    <body>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          {children}
        </div>
        <Footer />
      </div>
    </body>
  </html>
)

export default RootLayout
