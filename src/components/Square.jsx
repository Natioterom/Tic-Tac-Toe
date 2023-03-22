 import '../App.css'
 export const Square = ({ value, chooseSquare,gameFinish }) => {
    const classSquare = gameFinish ? 'disable-square' : 'square'
    return (
        <div className={classSquare} onClick={chooseSquare}>{value}</div>
    )
 }