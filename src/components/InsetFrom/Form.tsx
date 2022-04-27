import { Button, Form } from '@douyinfe/semi-ui';
import dayjs from 'dayjs';
import { memo, useMemo, useRef } from 'react';
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
/**    
 * fetch={(v: any, reset) => reset ? initFetch() : fetch({ ...params, search: v })}
 */
const InsetFrom = memo(({
    fields,
    fetch,
    onChange,
    onCencel,
    children, // 额外操作按钮
    okText,
    cencelText,
    formItem
}: InsetFromInterface
) => {
    const form = useRef<any>();
    const Nodes = useMemo(() => {
        return fields?.map(e => (Form as any)[e?.type || 'Input'])
    }, [fields])
    return <div className='InsetFrom'>
        <Form
            getFormApi={(from) => (form.current = from)}
            onChange={(e) => { onChange?.(e.values); }}
            onSubmit={(v: any) => {
                const p = JSON.parse(JSON.stringify(v))
                const isDateArr = Object.keys(v)?.filter(e => e.indexOf('_date') !== -1 || e.indexOf('_time') !== -1);

                isDateArr.forEach(k => {
                    if (Array.isArray(p[k])) {
                        const start = v[k]?.length === 2 ? dayjs(v[k][0]).unix() : ''
                        const end = v[k]?.length === 2 ? dayjs(v[k][1]).unix() : ''
                        p[k] = { start, end }
                    } else {
                        p[k] = dayjs(v[k]).unix()
                    }
                })
                console.log('onSubmit :::: ', p);
                fetch?.(p)
            }}
            onReset={() => { fetch?.(undefined, true) }}
        >
            <div className='flex' style={{ flexWrap: 'wrap' }}>
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
                {formItem}
            </div>

            <div className="flex button-group" style={{ justifyContent: "flex-end" }}>
                {
                    typeof children === 'function' ? children(form.current) : children
                }
                <Button htmlType='submit' theme='solid'>{okText || '查找'}</Button>
                {
                    cencelText ?
                        <Button onClick={() => onCencel && onCencel()} >{cencelText}</Button>
                        : <Button htmlType='reset'>重置</Button>
                }

            </div>
        </Form>
    </div >
})

export default InsetFrom;