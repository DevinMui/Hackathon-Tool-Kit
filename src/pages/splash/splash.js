import { useEffect } from 'react'

function Splash() {
    useEffect(() => {
        document.title = 'Coding in the Dark | Test your CSS skills'
    }, [])

    return (
        <div
            className="container"
            style={{
                height: '100%',
            }}
        >
            <div
                style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <h1
                    className="text-center"
                    style={{
                        marginBottom: '40px',
                    }}
                >
                    Name
                </h1>
            </div>
        </div>
    )
}

export default Splash
