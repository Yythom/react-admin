import { ErrorBoundary as OriginalErrorBoundary } from 'react-error-boundary'
import { Suspense } from 'react'
import { QueryErrorResetBoundary } from '@tanstack/react-query'

import React, { useContext } from 'react'
import { Button, Center, } from '@chakra-ui/react'

type BoundaryConfigType = {
    pendingFallback: React.ReactNode | null
    FallbackComponent: React.ReactNode | null | ((props: any) => JSX.Element)
    onError: (err: any, componentStack: any) => void
}

const Context = React.createContext<BoundaryConfigType>({
    pendingFallback: null,
    FallbackComponent: null,
    onError: (err: any, componentStack: any) => { }
})

export function BoundaryConfigProvider({
    children, pendingFallback, FallbackComponent, onError,
}: {
    children?: React.ReactNode
} & BoundaryConfigType) {
    const config = React.useMemo(() => ({
        pendingFallback,
        FallbackComponent,
        onError,
    }), [pendingFallback, FallbackComponent, onError])

    return (
        <Context.Provider value={config}>
            {children}
        </Context.Provider>
    )
}

export const useBoundaryConfig = () => useContext(Context)


export function ErrorBoundary({ children, ...props }: any) {
    const { FallbackComponent, onError } = useBoundaryConfig()

    return (
        <QueryErrorResetBoundary>
            {({ reset }) => (
                <OriginalErrorBoundary onReset={reset} FallbackComponent={FallbackComponent} onError={onError} {...props}>
                    {children}
                </OriginalErrorBoundary>
            )}
        </QueryErrorResetBoundary>
    )
}

export function SuspenseBoundary(props: any) {
    const { pendingFallback } = useBoundaryConfig()

    return (
        <Suspense fallback={pendingFallback} {...props} />
    )
}
/**
 * @description 将ErrorBoundary和SuspenseBoundary整合为一个组件
 * @property {ReactNode | null} fallback suspense fallback
 * @property {BoundaryProps} rest ErrorBoundary参数
 *
 * todo 在部分场景下，发生错误时我们不需要展示错误UI；只需要将FallbackComponent值设为 () => null 即可
 */
export function Boundary(props: any) {
    const {
        children, fallback, ...rest
    } = props

    return (
        <ErrorBoundary {...rest}>
            <SuspenseBoundary {...(fallback === undefined ? {} : { fallback })}>
                {children}
            </SuspenseBoundary>
        </ErrorBoundary>
    )
}

/**
 * @description 没有fallback、FallbackComponent的空boundary组件
*/
export function EmptyBoundary(props: any) {
    const { fallback, FallbackComponent, ...rest } = props
    return <Boundary fallback={null} FallbackComponent={() => null} {...rest} />
}


/**
 * @description ErrorBoundary默认的错误展示组件
 * @property {} error 错误对象
 * @property {} resetErrorBoundary 重置错误
*/
export function ErrorFallback(props: any) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { error, resetErrorBoundary } = props
    return (
        <Center flexDirection="column">
            <Button size="sm" onClick={resetErrorBoundary}>重试</Button>
        </Center>
    )
} 
