import { NextPage } from "next"
import Head from 'next/head'
// ページ遷移系の組み込みコンポーネント
import Link from 'next/link'
// useRouterを使用
import { useRouter } from 'next/router'

const PageLink: NextPage = () => {
    const router = useRouter()

    const onPush = () => {
        // 文字列での指定
        // router.push('/ssr')

        // オブジェクトでの指定も可能
        router.push({
            pathname: '/ssr',
            query: { keyword: 'hello' }
        })
    }

    const onReload = () => {
        // 呼ぶとページがリロードされる
        router.reload()
    }

    const onBack = () => {
        // 呼ぶと前のページに遷移される
        router.back()
    }


    return (
        <div style={{ padding: '40px' }}>
            <div style={{ marginBottom: '40px' }}>
                {/* ssrへのリンクを作成 */}
                <Link href="/ssr">
                    <a>Go To SSR</a>
                </Link>
            </div>
            <div style={{ marginBottom: '40px' }}>
                {/* hrefにオブジェクトをしていすることでも設定可能 */}
                <Link href={
                    {
                        pathname: '/ssg', 
                        query: {keyword: 'hello'}
                    }
                }>
                    <a>Go To SSG</a>
                </Link>
            </div>
            <div style={{ marginBottom: '40px' }}>
                {/* aの代わりにbuttonを使うとonClickが呼ばれたタイミングで遷移する */}
                <Link href="/ssr">
                    <button>Go To SSG Button</button>
                </Link>
            </div>
        </div>
    )
}

export default PageLink