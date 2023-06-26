import { RightOutlined } from '@ant-design/icons';
const LinkHoverButton = (props) =>{
    return<button className={"flex bg-transparent text-blue-600 text-xs hover:text-blue-700 items-center"}>
    <div>{props.name}</div>
    {/* <div className="animate__animated animate__fadeInUp animate__delay-1s animate__infinite	infinite hover:animate__faster">**</div> */}
    <div className={"pl-2 group-hover:animate-trans-right group-hover:pl-2 flex items-center"}><RightOutlined /></div>
    
</button>
}
export default LinkHoverButton;