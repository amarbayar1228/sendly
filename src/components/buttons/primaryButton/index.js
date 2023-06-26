const PrimaryButton = (props) =>{
    return<button className="bg-blue-600 px-9 py-3 rounded-md text-xs focus:outline-none focus:ring focus:ring-gray-100">
            {props.name}
    </button>
}
export default PrimaryButton;