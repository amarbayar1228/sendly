import css from './style.module.css'
import { RightOutlined } from '@ant-design/icons';
const LinkButton = (props) =>{
    return<button className={css.btnBounce}>
    <div>{props.name}</div>
    {/* <div className="animate__animated animate__fadeInUp animate__delay-1s animate__infinite	infinite hover:animate__faster">**</div> */}
    <div className={css.btnArray}><RightOutlined /></div>
    
</button>
}

export default LinkButton;