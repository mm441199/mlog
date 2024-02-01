import * as React from 'react'
import Layout from '../components/layout'
import { navigate } from "gatsby"
import * as styles from  '../styles/_form.module.scss'

const FormPage = ({location}) => {
return (
    <Layout location = {location} title = "Form Page">
      <div className={styles.container}>
        <form
          onSubmit={ () => {navigate("/form_sent/")}} 
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSecVNwQFPuENI0u2xCJq5eC091NfGcrv43FHXLEV1FOrYZ-sQ/formResponse"
          target="hidden_iframe"
        >
          <h2 className={styles.pageTitle}>お問い合わせ</h2>
          <div>
              <label htmlFor="name">お名前</label>
              <input id="name" type="text" name="entry.821697552" required></input>
          </div>
          <div>
              <label htmlFor="email">メールアドレス</label>
              <input id="email" type="text" name="entry.2053107589" required></input>
          </div>
          <div>
              <label htmlFor="email">お問い合わせ内容</label>
              <textarea
                  id="email"
                  type="text"
                  name="entry.1354757102"
                  wrap="soft"
                  required></textarea>
          </div>
          <button type="submit">送信</button>
        </form>
        <iframe title="hidden_iframe" name="hidden_iframe" style={{display:'none'}}></iframe>
      </div>
    </Layout>
)
}
export default FormPage