import request from "../config";

class DemoService {
    static demo = async (data: any) => {
        const result = await request({
            url: '/demo',
            data,
        })
        return result;
    }
}
export default DemoService