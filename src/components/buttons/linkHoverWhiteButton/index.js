import { RightOutlined } from '@ant-design/icons';
const LinkHoverWhiteButton = (props) =>{
    return<button className={"flex bg-transparent text-white text-xs items-center"}>
    <div>{props.name}</div>
    <div className={"pl-2 group-hover:animate-trans-right group-hover:pl-2 flex items-center"}><RightOutlined /></div>
    
</button>
}
export default LinkHoverWhiteButton;