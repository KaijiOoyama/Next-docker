// 型情報
import { NextPage } from 'next'
// Next.jsに用意された組み込みコンポーネント
import Head from 'next/head'

type SSGProps = {}

const SSG: NextPage<SSGProps> = () => {
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
            </main>
        </div>
    )
}

// ページコンポーネントはexport defaultでエクスポートする
export default SSG