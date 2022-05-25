import Portals from "@/components/portals"
import { createContext, memo, useContext, useRef, useState } from "react"

const MoveContext = createContext<{ xy: [number, number], show: boolean }>({ xy: [0, 0], show: false })

const MoveBox = memo((props: any) => {
    const [show, setShow] = useState(false)
    const [xy, setXy] = useState<[number, number]>([0, 0])

    return (
        <div
            onMouseEnter={() => setShow(true)}
            onMouseMove={e => setXy([e.clientX, e.clientY + 20])}
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

const MoveSquare = memo(({ children }: any) => {
    const ctx = useContext(MoveContext);
    const ref = useRef<any>()

    return (
        <>
            {
                ctx.show &&
                <Portals >
                    <div
                        ref={ref}
                        style={{
                            left: ctx.xy[0] - ref.current?.clientWidth / 2 + 'px',
                            top: ctx.xy[1] + 'px',
                            position: 'fixed',
                            width: 'max-content',
                            height: 'max-content',
                            background: '#FFF',
                            padding: '10px',
                            boxShadow: "0 2px 5px 0 rgb(135 152 164 / 50%)",
                            borderRadius: '10px',
                            zIndex: 99
                        }}
                    >
                        <div
                            style={{
                                border: "10px solid",
                                borderColor: "transparent transparent #fff transparent",
                                position: "absolute",
                                top: "-18px",
                                left: "50%",
                                borderRadius: "2px",
                                transform: "translateX(-50%)",
                            }}

                        />
                        {children}
                    </div>
                </Portals>

            }
        </>

    )
})

const MoveTigger = memo(({ children }: any) => {
    return <>{children}</>
})

export {
    MoveBox,
    MoveSquare,
    MoveTigger
}