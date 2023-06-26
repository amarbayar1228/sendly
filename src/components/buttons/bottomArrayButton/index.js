
import { DownOutlined, UpOutlined } from '@ant-design/icons';
const BottomArrayButton = (props) =>{
    return<button className="bg-blue-600 text-white hover:bg-blue-700   font-bold py-2 px-4  w-28 z-30">
        <div className="animate-trans-top text-sm">{props.toogle ? <UpOutlined /> : <DownOutlined />}</div>
    </button>
}
export default BottomArrayButton;