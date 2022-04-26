// from @chakra/react-utils
export function composeEventHandlers(...fns: Function[]) {
    return function func(event: any) {
        fns.some(fn => {
            fn?.(event)
            return event?.defaultPrevented
        })
    }
}