/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { forwardRef, Text } from '@chakra-ui/react'
import { Button, Input } from '@chakra-ui/react'
import {
    Form,
    useForm,
    useFormContext,
    FormField,
    FormControl,
    FormLabel,
    FormError,
    useFormControl,
    Transform,
    FormCheckbox,
    useWatch
} from '.'

interface IForm {
    firstName: string
    lastName: string
    age: number,
    pattern: string
    checked: boolean
}

export const BasicUsage = () => {
    const form = useForm({ name: 'custom' })

    return (
        <Form form={form} onSubmit={data => console.log(data)}>
            <FormControl name="basicUse">
                <FormLabel>Label</FormLabel>
                <FormField>
                    <Input />
                </FormField>
            </FormControl>
            <Button type="submit">提交</Button>
        </Form>
    )
}

interface DefaultvaluesAndRulesForm {
    name: string
    age: number
    arr: any[]
}

export const DefaultvaluesAndRules = () => {
    const form = useForm<DefaultvaluesAndRulesForm>({
        mode: 'onChange',
        defaultValues: {
            name: 'name',
            age: 20,
        },
        rules: {
            name: {
                required: true,
            },
            age: {
                required: 'age is required',
                max: {
                    value: '80',
                    message: 'max age is 80',
                },
                min: {
                    value: 18,
                    message: 'min age is 18',
                },
            },
        },
    })

    const { handleSubmit } = form

    const onSubmit = (data: DefaultvaluesAndRulesForm) => console.log(data)

    return (
        <Form form={form}>
            <FormControl name="name">
                <FormField>
                    <Input />
                </FormField>
                <FormError />
            </FormControl>
            <FormControl name="age">
                <FormField>
                    <Input type="number" />
                </FormField>
                <FormError />
            </FormControl>
            <Button onClick={handleSubmit(onSubmit)}>提交</Button>
        </Form>
    )
}

const UseController = () => {
    const control = useFormControl<DefaultvaluesAndRulesForm, 'name'>()

    const { name } = control

    return (
        <>
            <Text>field name: {name}</Text>
            <Text>control: {JSON.stringify(control)}</Text>
        </>
    )
}

const CustomComponent = forwardRef(({ onChange, value }, ref) => {
    const customValue = value.join('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value.split(''))
    }

    return <Input ref={ref} value={customValue} onChange={handleChange} />
})

export const Controller = () => {
    const form = useForm<DefaultvaluesAndRulesForm>({
        mode: 'onChange',
        defaultValues: {
            name: 'name',
            age: 20,
            arr: [],
        },
        rules: {
            name: {
                required: 'name is required',
            },
            age: {
                required: 'age is required',
                max: {
                    value: '80',
                    message: 'max age is 80',
                },
                min: {
                    value: 18,
                    message: 'min age is 18',
                },
            },
            arr: {
                required: 'this is array type error',
                maxLength: {
                    value: 3,
                    message: 'max length is 3',
                },
            },
        },
    })

    const { handleSubmit } = form

    const onSubmit = (data: DefaultvaluesAndRulesForm) => console.log(data)

    return (
        <Form form={form}>
            <Text color="yellow.500">
                FormControl的验证规则相比与以前有了一些变化
            </Text>
            <Text color="yellow.500">
                在rules中，通常我们认为required、minLength、maxLength用于处理字符串（更严格的说是有”长度“的数据结构）
            </Text>
            <Text color="yellow.500">
                所以在这三个验证规则中，如果值是字符串，默认会调用trim方法去除前后空格后再进行验证
            </Text>
            <Text color="yellow.500">
                需要注意的是，在自定义校验规则validate方法中的value值并没有做这些处理，因为你可能比ts的自动推导更清楚当前字段的输入类型是什么，所以这需要你自己来处理，
                并且在没有错误的时候返回 undefined
            </Text>
            <FormControl
                name="name"
                rules={{
                    validate: value => (value !== 'joker' ? 'name is not joker' : undefined),
                }}
            >
                <FormField>
                    <Input />
                </FormField>
                <FormError />
            </FormControl>
            <FormControl name="age">
                <FormField>
                    <Input type="number" />
                </FormField>
                <FormError />
                <UseController />
            </FormControl>
            <FormControl name="arr">
                <FormField>
                    <CustomComponent />
                </FormField>
                <FormError />
            </FormControl>
            <Button onClick={handleSubmit(onSubmit)}>提交</Button>
        </Form>
    )
}

const Child = () => {
    const methods = useFormContext<IForm>()

    const values = methods.getValues()

    console.log('child', methods, values)

    return null
}

export const UseFormComp = () => {
    const form = useForm<IForm>({
        mode: 'onChange',
        defaultValues: {
            age: 20,
            checked: true,
        },
        rules: {
            firstName: {
                required: 'first name is required',
                maxLength: {
                    value: 5,
                    message: 'maxLength 5',
                },
            },
            lastName: {
                required: 'last name is required',
                minLength: {
                    value: 5,
                    message: 'minLength 5',
                },
            },
            age: {
                max: {
                    value: 88,
                    message: 'max 88',
                },
                validate: {
                    test: value => {
                        if (value < 18) {
                            return '未成年'
                        }
                    },
                },
            },
            pattern: {
                pattern: {
                    value: /^abc$/i,
                    message: 'value must be abc',
                },
            },
        },
    })

    const { setValue, setValues, handleSubmit } = form

    const onSubmit = (data: IForm) => console.log('submit------', data)

    const submit = handleSubmit(onSubmit)

    React.useEffect(() => {
        setValues({
            firstName: 'first',
        })
        setValue('lastName', 'last')
    }, [])

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const watchValue = useWatch({ name: 'firstName' }) // 监听某个值改变
    const transformName: Transform<IForm, 'firstName'> = value => value
    const transormAge: Transform<IForm, 'age'> = value => {
        console.log(value)
        return value
    }

    return (
        <Form
            form={form}
            onChange={(key, value, values) => console.log('onChnage: =====', key, value, values)}
            onSubmit={onSubmit}
        >
            <FormControl name="firstName" transformValue={transformName}>
                <FormLabel>姓名1</FormLabel>
                <FormField>
                    <Input name="firstName" />
                </FormField>
                <FormError />
            </FormControl>
            <FormControl name="lastName">
                <FormLabel>姓名2</FormLabel>
                <FormField>
                    <Input />
                </FormField>
                <FormError />
            </FormControl>
            <FormControl name="age" transformValue={transormAge}>
                <FormLabel>年龄</FormLabel>
                <FormField>
                    <Input type="number" />
                </FormField>
                <FormError />
            </FormControl>
            <FormControl name="pattern">
                <FormLabel>pattern</FormLabel>
                <FormField>
                    <Input />
                </FormField>
                <FormError />
            </FormControl>
            <FormControl
                name="checked"
                rules={{
                    required: '请选择',
                }}
            >
                <FormField>
                    <FormCheckbox>Checkbox</FormCheckbox>
                </FormField>
                <FormError />
            </FormControl>
            <Button type="submit" onClick={submit}>提交</Button>
            <Child />
        </Form>
    )
}  
