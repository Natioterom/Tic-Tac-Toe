 import '../App.css'
 export const Square = ({ value, chooseSquare }) => {

    return (
        <div className='square' onClick={chooseSquare}>{value}</div>
    )
 }