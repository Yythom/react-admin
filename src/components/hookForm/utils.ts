import React from 'react'

type FunctionType<P = any, R = any> = (...args: P[]) => R

export type AnyFunction = FunctionType
export type VoidFunction = FunctionType<any, void>

export const assert = (condition: boolean, message: string) => {
    if (condition) {
        // eslint-disable-next-line no-undef
        if (process.env.NODE_ENV === 'development') {
            console.error(message)
        }

        return true
    }
    return false
}

export const noop = () => null

export const isObject = (value: unknown): value is object => value !== null && !Array.isArray(value) && typeof value === 'object' && !(value instanceof Date) && !isFunction(value)

export const isString = (value: unknown): value is string => typeof value === 'string'

export const isBoolean = (bool: unknown): bool is boolean => typeof bool === 'boolean'

export const isUndef = (value: unknown): value is undefined => typeof value === 'undefined'

export const isNull = (value: unknown): value is null => value === null

export const isFunction = (fn: unknown): fn is Function => typeof fn === 'function'

export const isRegex = (value: unknown): value is RegExp => value instanceof RegExp

export const isArray = Array.isArray

export const isInValidNumber = (value: any) => (
    isUndef(value) ||
    isNull(value) ||
    typeof parseInt(value, 10) !== 'number' ||
    Number.isNaN(parseInt(value, 10))
)

export const trim = (value: any): any => (
    isString(value) ? value.trim() : isUndef(value) ? '' : value
)

export const hasOwn = (
    obj: Record<string, any>,
    key: string,
): key is keyof typeof obj => Object.prototype.hasOwnProperty.call(obj, key)

export const isCheckBoxInput = (element: HTMLInputElement): boolean => element.type === 'checkbox'

export const getEventValue = (event: React.ChangeEvent<HTMLInputElement>) => (
    isObject(event) && event.target ?
        isCheckBoxInput(event.target) ?
            event.target.checked :
            event.target.value :
        event
)

export const nextTick = (cb: AnyFunction): Promise<any> => Promise.resolve().then(() => cb?.()).catch(() => {})
