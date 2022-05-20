import ViewPort from "@/components/view_port";
import InsetFrom, { FormContext } from "@/features/InsetFrom/Form";
import { Button } from "@douyinfe/semi-ui";
import { memo, useContext } from "react";
import Masonry from "react-responsive-masonry"


const FormItem = memo(() => {
    const ctx: any = useContext(FormContext)
    console.log('render FormItem');

    return (
        <div>

            <Button size='small' onClick={() => {
                console.log(ctx.getValues());
            }}>执行</Button>
        </div>

    )
})

const InfiniFrom = memo(() => {

    return (
        <div>

            <Masonry columnsCount={2} >
                {
                    Array.from(new Array(100).keys()).map((e, i) => {
                        return <ViewPort key={e} style={{ marginBottom: '30px', height: 200 + i * 20 + 'px' }} >
                            <div className="fc" style={{ background: 'pink', width: '400px', height: 200 + i * 20 + 'px' }}>
                                <InsetFrom
                                    hiddenDefaultButton
                                    fields={[
                                        {
                                            field: 'name',
                                            defaultValue: '111',
                                            validate: (v) => !v ? 'none' : ''
                                        }
                                    ]}
                                >
                                    <FormItem />
                                </InsetFrom>
                            </div>
                        </ViewPort>
                    })
                }
            </Masonry>

        </div>
    )
})

export default InfiniFrom