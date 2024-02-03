import React from 'react'
import Layout from '../components/layout'
import * as styles from  '../styles/_form-sent.module.scss'

const FormSentPage = () => {

 return (
   <Layout pageTitle="Form Sent Page">
    <div className={styles.container}>
      <h2>お問い合せいただきありがとうございました。</h2>
      <p>本日より2営業日以内に返信させていただきますので、しばらくお待ちくださいませ。</p>
    </div>
   </Layout>
 )
}
export default FormSentPage