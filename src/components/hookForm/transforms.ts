import type { RegisterOptions, ValidationRule, Validate } from 'react-hook-form'
import {
    trim, isArray, isObject, isString, isBoolean, isRegex, isUndef, isNull,
} from './utils'

const getValueAndMessage = (validationData?: ValidationRule) => (
    isObject(validationData) && !isRegex(validationData) ?
        validationData :
        {
            value: validationData,
            message: '',
        }
)

type TransformRequired = <T>(baseRequired: RegisterOptions['required']) => Validate<T>

const required: TransformRequired = baseRequired => {
    return <T>(input: T) => {
        const trimedValue = trim(input)
        const isArrayValue = isArray(trimedValue)

        if (isString(baseRequired)) {
            // baseRequired is required message, eg: required: 'label is required'
            return (isArrayValue ? trimedValue.length === 0 : !trimedValue) ? baseRequired : undefined
        }

        if (isBoolean(baseRequired)) {
            // baseRequired is boolean, eg: required: true
            return (baseRequired && (isArrayValue ? trimedValue.length === 0 : !trimedValue)) ? '' : undefined
        }

        if (isObject(baseRequired)) {
            // baseRequired is an object, eg: { value: true, message: 'is required' }
            const { value, message = '' } = baseRequired

            return (value && (isArrayValue ? trimedValue.length === 0 : !trimedValue)) ? message : undefined
        }
    }
}

type TransformMinLength = <T>(baseMinLength: RegisterOptions['minLength']) => Validate<T>

const minLength: TransformMinLength = baseMinLength => {
    return <T>(input: T) => {
        if (isString(input) || isArray(input)) {
            const trimedValue = isString(input) ? trim(input) : input
            const { value, message } = getValueAndMessage(baseMinLength)

            const exceedMin = !isNull(value) && !isUndef(value) && trimedValue.length < value

            if (exceedMin) return message
        }
    }
}

type TransformMaxLength = <T>(baseMaxLength: RegisterOptions['maxLength']) => Validate<T>

const maxLength: TransformMaxLength = baseMaxLength => {
    return <T>(input: T) => {
        if (isString(input) || isArray(input)) {
            const trimedValue = isString(input) ? trim(input) : input
            const { value, message } = getValueAndMessage(baseMaxLength)

            const exceedMax = !isNull(value) && !isUndef(value) && trimedValue.length > value

            if (exceedMax) return message
        }
    }
}

type TransformPattern = <T>(basePattern: RegisterOptions['pattern']) => Validate<T>

const pattern: TransformPattern = basePattern => {
    return <T>(input: T) => {
        if (isString(input)) {
            const trimedValue = trim(input)
            const { value, message } = getValueAndMessage(basePattern)

            if (isRegex(value) && !trimedValue.match(value)) {
                return message
            }
        }
    }
}

type Tranforms = Record<any, <T>(v: any) => (input: T) => any> & {
    pattern: TransformPattern
    required: TransformRequired
    minLength: TransformMinLength
    maxLength: TransformMaxLength
}

const transforms: Tranforms = {
    pattern,
    required,
    maxLength,
    minLength,
}

export default transforms
