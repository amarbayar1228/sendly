const SimpleButton = (props) =>{
    return<button className="bg-transparent text-white hover:scale-110 duration-300  py-2 px-4 rounded-l my-3
                            md:my-0">
        {props.name}</button>
}
export default SimpleButton;