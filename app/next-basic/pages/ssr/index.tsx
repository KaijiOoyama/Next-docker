import { GetServerSideProps, NextPage } from "next"
import Head from 'next/head'

type SSRProps = {
    message: string
}

const SSR : NextPage<SSRProps> = (props) => {
    const { message } = props

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p>
                    このページはサーバーサイドレンダリングによってアクセス時にサーバで描画されたページです
                </p>
                <p>
                    { message }
                </p>
            </main>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps<SSRProps> = async (context) => {
    // getServerSidePropsの引数のcontextではリクエストの情報などを参照できる
    // req http.IncomingMessageのインスタンスでリクエストの情報やCookieを参照できる
    // res http.ServerResponseのインスタンスでCookieをセットしたりレスポンスヘッダーを書き換えたりできる
    // resolvedUrl 実際にアクセスが有ったパス
    // query そのqueryをオブジェクトにしたもの
    const timestamp = new Date().toLocaleString()
    const message = `${timestamp}にこのページのgetServerSidePropsがじっこうされました`
    console.log(message)

    return {
        props: {
            message,
        }
    }
}

export default SSR