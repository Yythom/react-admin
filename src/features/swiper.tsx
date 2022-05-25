import { memo } from "react";
import { Swiper as Origin } from "react-vant";

const Swiper = memo(() => {

    return (
        <div
            style={{ background: 'lightblue' }}
        >
            <Origin autoHeight>
                <Origin.Item>
                    <div style={{ height: '200px' }}>
                        1
                    </div>
                </Origin.Item>
                <Origin.Item>2</Origin.Item>
                <Origin.Item>3</Origin.Item>
                <Origin.Item>4</Origin.Item>
            </Origin>
        </div>
    )
})

export default Swiper