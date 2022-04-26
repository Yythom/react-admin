import { Button, Form } from '@douyinfe/semi-ui';
import { memo, useMemo } from 'react';
import './form.scss'
import InsetFromInterface from './interface';
// const _fields: InsetFromInterface['fields'] = [
//     {
//         field: 'account',
//         trigger: 'blur',
//         validate: (v: any) => !v ? 'none' : '',
//     },
//     {
//         field: 'role_id',
//         type: 'RadioGroup',
//         label: '分配角色',
//         children: RoleList.list.map(e => <Radio key={e.role_id} value={e.role_id} >{e.role_name}</Radio>)
//     }
// ]
// fetch={(v, reset) => reset ? initFetch() : fetch({ ...params, search: v })}
const InsetFrom = memo(({
    fields,
    fetch,
    onChange,
    onCencel,
    children, // 额外操作按钮
    okText,
    cencelText,
}: InsetFromInterface
) => {
    const Nodes = useMemo(() => {
        return fields?.map(e => (Form as any)[e?.type || 'Input'])
    }, [fields])
    return <div className='InsetFrom'>
        <Form
            onChange={(e) => { onChange?.(e.values); }}
            onSubmit={(v: any) => {
                console.log('onSubmit :::: ', v);
                fetch?.(v)
            }}
            onReset={() => { fetch?.(undefined, true) }}
        >
            {
                Nodes?.map((Items, i) => {
                    const props = { ...fields[i] }
                    if (!props.placeholder) props.placeholder = props.label
                    delete (props.type)
                    return (
                        <div className='filds' key={props.field}>
                            <Items {...props} >
                                {props.children}
                            </Items>
                        </div>
                    )
                })
            }

            <div className="flex button-group" style={{ justifyContent: "flex-end" }}>
                {children}
                <Button htmlType='submit' theme='solid'>{okText || '查找'}</Button>
                {
                    cencelText ?
                        <Button onClick={() => onCencel && onCencel()} >{cencelText}</Button>
                        : <Button htmlType='reset'>重置</Button>
                }

            </div>
        </Form>
    </div>
})
export default InsetFrom;