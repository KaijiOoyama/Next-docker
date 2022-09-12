import { NextPage } from "next"
import Image from 'next/image'

import MyImage from '../../public/images/WFlnN9.png'

const ImageSample: NextPage<void> = () => {
    return (
        <div>
            <h1>画像表示の比較</h1>
            <p>imgタグで表示した場合</p>
            <img src="/images/WFlnN9.png"/>
            <p>Imageで表示した場合は事前に描画エリアが確保される</p>
            <br />
            <p>ファイルサイズはimgで表示する場合の半分以下になる</p>
            <Image src={MyImage} />
        </div>
    )
}

export default ImageSample