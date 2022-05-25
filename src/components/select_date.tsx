import { isIOS } from "@/utils/js_utils/verify";
import dayjs from "dayjs";
import { memo, ReactNode, useRef, useState } from "react";

const SelectDate = memo(({ onChange, format = 'YYYY-MM-DD HH:mm:ss', range = 'time', children }: {
    onChange: (ret: { timeStamp: number, format: string }) => void
    format?: string
    range?: 'time' | 'day' | 'month'
    children?: ReactNode
}) => {
    const [v, setV] = useState<number | string>('')
    const ref = useRef<any>()

    const change = (timeStamp: number) => {
        const ret = dayjs(timeStamp).format(format)
        onChange({
            timeStamp,
            format
        })
        setV(ret)
    }
    return (
        <div
            className="date-group"
            style={{ position: 'relative' }}
            onClick={() => {
                const ele = ref.current
                if (isIOS()) {
                    ele.focus()
                } ele.click()
            }}>
            {v || '请选择'}
            {
                range === 'time' && <input
                    ref={ref}
                    style={{ position: 'absolute', top: '0', left: '0', opacity: 0 }}
                    type='datetime-local'
                    onChange={(e) => {
                        const timeStamp = new Date(e.target.value).valueOf()
                        change(timeStamp)
                    }} />
            }
            {
                range === 'month' && <input
                    ref={ref}
                    style={{ position: 'absolute', top: '0', left: '0', opacity: 0 }}
                    type='month'
                    onChange={(e) => {
                        const timeStamp = new Date(e.target.value).valueOf()
                        change(timeStamp)
                    }} />
            }
            {
                range === 'day' && <input
                    ref={ref}
                    style={{ position: 'absolute', top: '0', left: '0', opacity: 0 }}
                    type='date'
                    onChange={(e) => {
                        const timeStamp = new Date(e.target.value).valueOf()
                        change(timeStamp)
                    }} />
            }
        </div>
    )
})

export default SelectDate