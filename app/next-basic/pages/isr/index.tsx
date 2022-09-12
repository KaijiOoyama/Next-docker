
import { GetStaticProps, NextPage, NextPageContext } from 'next'
import Head from 'next/head'

type SSGProps = {
    message: string
}

const SSG: NextPage<SSGProps> = (props) => {
    const { message } = props

    return (
        <div>
            {/* Headコンポーネントで囲むとその要素は<head>タグに配置される */}
            <Head>
                <title>Static Site Generation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p>
                    このページは静的サイト生成によってビルド時に生成されたページです
                </p>
                <p>
                    { message }
                </p>
            </main>
        </div>
    )
}

// getStaticPropsはビルド時に実行される
// getStaticProps<SSGProps>はSSGPropsを引数にとるgetStaticPropsの型
export const getStaticProps: GetStaticProps<SSGProps> = async (context) => { // reactのcontextとは別物
    const timestamp = new Date().toLocaleString()
    const message = `${timestamp}にgetStaticPropsが実行されました`
    console.log(message)

    return {
        // ここで返したpropsをもとにページコンポーネントを描画する
        props: {
            message
        },
        // ページの有効期限を秒単位で指定  ISR
        revalidate: 60
    }
}

export default SSG