import { useState, useEffect } from 'react'

function SayHello() {
    // 内部で状態を持つためuseStateを使用
    const [data, setData] = useState({name: ''})
    // 外部のAPIにリクエストする処理は副作用なのでuseEffect内で処理
    useEffect(() => {
        // pages/api/hello.tsの内容にリクエスト
        fetch('/api/hello')
        .then((res) => res.json())
        .then((profile) => { 
            // profileにレスポンスでーたが入っている
            setData(profile)
        })
    },[])

    return <div>Hello. {data.name}</div>
}

export default SayHello