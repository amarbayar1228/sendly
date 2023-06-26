const DefaultButton = (props) =>{
    return<button className="border border-white text-white px-9 py-3 rounded-md text-xs   focus:outline-none focus:ring focus:ring-blue-600">
            {props.name}
    </button>
}
export default DefaultButton;