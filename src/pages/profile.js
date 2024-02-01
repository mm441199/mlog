import * as React from "react"


import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import * as styles from "../styles/_profile.module.scss"

const ProfilePage = () => {
  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <section className={`${styles.sectionBlock} ${styles.sectionBlockGray}`}>
          <div className={styles.introduction}>
            <div className={styles.introductionImage}>
              <StaticImage
                src='../images/icon.jpg'
                alt='アイコン画像'
                className={styles.introductionImage}
              />
              </div>
            <div className={styles.introductionBody}>
              <h3 className={styles.introductionTitle}>Welcome to my portfolio site!</h3>
              <p>ShopifyのECサイト構築をメインにフリーランスでエンジニアをしている皆本大樹（みなもとまさき）と申します。
  2022年から独学でプログラミングを学んでいます。</p>
              <ul>
                <li>1994年生まれ</li>
                <li>神奈川県出身、東京都在住</li>
                <li>B型、ISFP</li>
              </ul>
            </div>
          </div>
        </section>
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>service</h2>
          <div className={styles.service}>
            <div className={styles.serviceBlock}>
              <StaticImage
                src="../images/service-shoppingcart-icon.svg"
                alt="ショッピングカートのイメージ"
                className={styles.serviceImage}
              />
              <h3 className={styles.serviceTitle}>ECサイト構築</h3>
              <p className={styles.serviceText}>全世界100万社以上が利用しているECプラットホーム「Shopify」をもとにECサイトを構築いたします。現在、他社のプラットホーム（BASE・STORES等）からShopifyへの移行も可能です。</p>
            </div>
            <div className={styles.serviceBlock}>
              <StaticImage
                src="../images/service-line-icon.svg"
                alt="ショッピングカートのイメージ"
                className={styles.serviceImage}
              />
              <h3 className={styles.serviceTitle}>LINE公式アカウント運用</h3>
              <p className={styles.serviceText}>顧客と1対1で対話ができるLINEは、非常に有効な販促ツールです。友だち登録限定クーポンの発行や効果的な販売促進広告のアドバイスをいたしますのでお任せください。</p>
            </div>
            <div className={styles.serviceBlock}>
              <StaticImage
                src="../images/service-map-icon.svg"
                alt="ショッピングカートのイメージ"
                className={styles.serviceImage}
              />
              <h3 className={styles.serviceTitle}>MEO対策</h3>
              <p className={styles.serviceText}>Google Mapの検索でお店の情報が検索結果上位に表示されやすくなる施策です。実店舗の経営にも注力されている事業者様には、ぜひお話だけでもさせていただければと思います。</p>
            </div>
          </div>
        </section>
        <section className={`${styles.sectionBlock} ${styles.sectionBlockGray}`}>
            <h2 className={styles.sectionTitle}>skills</h2>
          <div className={styles.skills}>
            <div className={styles.skillsGroup}>
              <h3>Language</h3>
              <div className={styles.skillsItem}>
                <StaticImage src="../images/skill-icon/html.svg" alt="" className={styles.skillsIcon} />
                <span className={styles.skillsName}>HTML5</span>
              </div>
              <div className={styles.skillsItem}>
                <StaticImage src="../images/skill-icon/css.svg" alt="" className={styles.skillsIcon} />
                <span className={styles.skillsName}>CSS3</span>
              </div>
              <div className={styles.skillsItem}>
                <StaticImage src="../images/skill-icon/javascript.svg" alt="" className={styles.skillsIcon} />
                <span className={styles.skillsName}>JavaScript</span>
              </div>
              <div className={styles.skillsItem}>
                <StaticImage src="../images/skill-icon/sass.svg" alt="" className={styles.skillsIcon} />
                <span className={styles.skillsName}>Sass</span>
              </div>
            </div>
            <div className={styles.skillsGroup}>
              <h3>Tools</h3>
              <div className={styles.skillsItem}>
                <StaticImage src="../images/skill-icon/vscode.svg" alt="" className={styles.skillsIcon} />
                <span className={styles.skillsName}>vscode</span>
              </div>
              <div className={styles.skillsItem}>
                <StaticImage src="../images/skill-icon/git.svg" alt="" className={styles.skillsIcon} />
                <span className={styles.skillsName}>git</span>
              </div>
              <div className={styles.skillsItem}>
                <StaticImage src="../images/skill-icon/shopify.svg" alt="" className={styles.skillsIcon} />
                <span className={styles.skillsName}>shopify</span>
              </div>
              <div className={styles.skillsItem}>
                <StaticImage src="../images/skill-icon/gatsby.svg" alt="" className={styles.skillsIcon} />
                <span className={styles.skillsName}>gatsby</span>
              </div>
              <div className={styles.skillsItem}>
                <StaticImage src="../images/skill-icon/react.svg" alt="" className={styles.skillsIcon} />
                <span className={styles.skillsName}>react</span>
              </div>
              <div className={styles.skillsItem}>
                <StaticImage src="../images/skill-icon/wordpress.svg" alt="" className={styles.skillsIcon} />
                <span className={styles.skillsName}>Wordpress</span>
              </div>
              <div className={styles.skillsItem}>
                <StaticImage src="../images/skill-icon/photoshop.svg" alt="" className={styles.skillsIcon} />
                <span className={styles.skillsName}>Photoshop</span>
              </div>
              <div className={styles.skillsItem}>
                <StaticImage src="../images/skill-icon/illustrator.svg" alt="" className={styles.skillsIcon} />
                <span className={styles.skillsName}>Illustrator</span>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>Blog</h2>
          <div className={styles.blog}>
            <div className={styles.blogImage}>
              <StaticImage
                src='../images/mlog-icon.png'
                alt='ブログアイコン画像'
                className={styles.blogImage}
              />
            </div>
            <div className={styles.blogBody}>
              <h3 className={styles.blogTitle}>mlog</h3>
              <span>Since 2022.3〜</span>
              <div className={styles.blogText}>
                <p>Liquidを用いたShopifyのテーマカスタマイズなど、学習の記録を残しているブログです。Reactの学習も兼ねてGatsbyJSでヘッドレスブログを作成しました。</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 

export const Head = () => <Seo title="Home" />

export default ProfilePage