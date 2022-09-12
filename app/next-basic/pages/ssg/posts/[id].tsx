import { GetStaticProps, NextPage, NextPageContext, GetStaticPaths } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router' //ルーティング情報にアクセスするフック

type PostProps = {
    id: string
}

const SSG: NextPage<PostProps> = (props) => {
    const { id } = props
    const router = useRouter()

    // フォールバック向けページ
    if(router.isFallback) {
        return <div>Loading...</div>
    }

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
                    posts/{id}に対応するぺーじです
                </p>
            </main>
        </div>
    )
}

// getStaticPathsは生成したいぺーじのパスパラメータの組み合わせを返す
// このファイルはpages/ssg/posts/[id].tsxなのでパスパラメータとしてidの値を返す必要がある
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [
        {
            params: {
                id: '1'
            }
        },
        {
            params: {
                id: '2'
            }
        },
        {
            params: {
                id: '3'
            }
        }
    ]

    // fallbackをfalseにするとpathsで実装されたページ以外は404ページを表示する
    return { paths, fallback: false }
}

// getStaticPaths実行後にそれぞれのパスに対してgetStaticPropsが実行される
export const getStaticProps: GetStaticProps<PostProps> = async (context: any) => { // reactのcontextとは別物
    // context.paramsにパスパラメータの値が入っている
    // context.params['id']は string | string[]型なので値が配列かどうかの場合分けをする
    const id = Array.isArray(context.params['id']) ? context.params['id'][0] : context.params['id']

    return {
        props: {
            id,
        }
    }
}

export default SSG