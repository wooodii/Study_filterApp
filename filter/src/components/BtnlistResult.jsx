const BtnlistResult = (props) => {
    const {content, handleClick, elementIndex, isSelected} = props;
    
    return (
        <div>
            <li onClick={() => handleClick(elementIndex)} 
            style={isSelected ? {backgroundColor : "green"} : {backgroundColor : "blue"}}>
                {content}
            </li>
        </div>
    );
}

export default BtnlistResult;