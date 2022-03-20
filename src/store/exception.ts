import 'element-plus/es/components/message/style/css'
import {ElMessage} from 'element-plus'

const checkCode = (code: number) => {
    if (code !== 200) {
        ElMessage({
            message: '出现一点小问题',
            grouping: true,
            type: 'error',
        })
    }
}
export {checkCode}
