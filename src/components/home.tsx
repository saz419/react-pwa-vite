import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie';

const HomePage = () => {
    const [snack, setSnack] = useState({})

    function handleSetCookie(value: string) {
        const setC = Cookies.set("snack", JSON.stringify({ "cookie": value }))
        console.log(setC)
    }

    function handleRemoveCookies() {
        try {

            Cookies.remove("snack")
            console.log("Cleared cookie")
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        const ck = Cookies.get("snack")
        console.log(ck)
        if (ck !== undefined) {
            console.log(ck)
            setSnack(JSON.parse(ck))
        }
    }, [])
    return (
        <>
            <div>
                <h1>Hello World</h1>
                <button onClick={() => handleSetCookie('oreo')} >Set Cookie: Oreo</button>
                <br />
                <button onClick={() => handleRemoveCookies()} >Remove Cookie</button>

                <br />
                data: <code>
                    {JSON.stringify(snack)}
                </code>
                <br />
                <a href={import.meta.env.DEV ? '/' : '/react-pwa-vite/'}>Reload to view result</a>
                <br />
                <Link to='about'>About Us</Link>
            </div>
        </>
    )
}

export default HomePage