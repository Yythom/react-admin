import React from 'react'

export type UseLatestRef<T = any> = (value: T) => React.MutableRefObject<T>

export const useLatestRef: UseLatestRef = value => {
    const ref = React.useRef(value)
    ref.current = value

    return ref
}
