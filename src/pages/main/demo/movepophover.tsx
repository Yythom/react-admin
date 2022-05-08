import { createContext, memo, useContext, useState } from "react"

const MoveContext = createContext<{ xy: [number, number], show: boolean }>({ xy: [0, 0], show: false })

const MoveBox = memo((props) => {
    const [show, setShow] = useState(false)
    const [xy, setXy] = useState<[number, number]>([0, 0])

    return (
        <div
            onMouseEnter={() => setShow(true)}
            onMouseMove={e => setXy([e.clientX - 12, e.clientY + 20])}
            onMouseLeave={() => setShow(false)}
            style={{
                width: 'max-content',
                height: 'max-content',
                cursor: 'default',
            }}
            {...props}
        >
            <MoveContext.Provider value={{ xy, show }}>
                {props.children}
            </MoveContext.Provider>
        </div>
    )
})

const MoveSquare = memo(({ children }) => {
    const ctx = useContext(MoveContext);
    return (
        <>
            {
                ctx.show && <div
                    style={{
                        left: ctx.xy[0] + 'px',
                        top: ctx.xy[1] + 'px',
                        position: 'fixed',
                        width: 'max-content',
                        height: 'max-content',
                        background: '#FFF',
                        padding: '10px',
                        borderRadius: '10px',
                    }}
                >
                    {children}
                </div>
            }
        </>

    )
})

const MoveTigger = memo(({ children }) => {
    return <>{children}</>
})

export {
    MoveBox,
    MoveSquare,
    MoveTigger
}