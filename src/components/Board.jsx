import { useEffect, useState } from "react"
import { Square } from "./Square"
import { Patterns } from "./Patterns"
import { ModalWin } from "./ModalWin"
import confetti from 'canvas-confetti'

export const Board = () => {
    const [ board, setBoard ] = useState(['','','','','','','','',''])
    const [ player, setPlayer ] = useState('O')
    const [ result, setResult ] = useState({winner:'none', state:'none'})
    const [ showModal, setShowModal ] = useState(false)
    const [ gameFinish, setGameFinish ] = useState(false)
    
    useEffect(()=> {
        checkWin()
        checkIfTie()
        if(player === 'X' ){
            setPlayer('O')
        }else{
            setPlayer('X')
        }
    },[board])


    const chooseSquare = (square) => {
      setBoard(board.map((value, i)=>{
        if (i === square && value === ''){
            return player
        }
        return value;
      }));
 };
 const checkWin = () => {
    Patterns.forEach((currentPattern)=>{
        const firstPlayer = board[currentPattern[0]]
        if( firstPlayer === '') return
        let foundWinningPattern = true
        currentPattern.forEach((index)=>{
            if(board[index] !== firstPlayer)
            foundWinningPattern = false
        })
        if(foundWinningPattern){
           setResult({winner:player, state:'won'})
           setShowModal(true)
           confetti({
            particleCount:400,
            spread:200
           })
        }
    })
 }
 const checkIfTie = () => {
    const selected = board.map((square)=> square)
       const allSquare = selected.indexOf(selected.find(e => e === ''))
       if(allSquare === -1){
        setResult({winner:'No one', state:'tie'})
        setShowModal(true)
       }
    }

 
 const startGame = () =>{
    setBoard(['','','','','','','','',''])
    setResult({winner:'none', state:'none'})
    setShowModal(false)
    setPlayer('O')
    setGameFinish(false)
 }
 const closeModal = () => {
    setShowModal(false)
    setResult({winner:'none', state:'none'})
    setPlayer('O')
    setGameFinish(true)
 }
 const winner = result.state ==='won' ? `Congratulations '${result.winner}' won the game!` : result.state ==='tie' ? 'its seems that is a tie' :''
    
 return(
           <div className='container_board'>
           <div className='board'>
            <div className='row'></div>
            <Square value={board[0]}
                chooseSquare={() => chooseSquare(0)} 
                gameFinish={gameFinish}/>
            <Square value={board[1]}
                chooseSquare={() => chooseSquare(1)} 
                gameFinish={gameFinish}/>
            <Square value={board[2]}
                chooseSquare={() => chooseSquare(2)} 
                gameFinish={gameFinish}/>
            <div className='row'></div>
            <Square value={board[3]}
                chooseSquare={() => chooseSquare(3)} 
                gameFinish={gameFinish}/>
            <Square value={board[4]}
                chooseSquare={() => chooseSquare(4)} 
                gameFinish={gameFinish}/>
            <Square value={board[5]}
                chooseSquare={() => chooseSquare(5)} 
                gameFinish={gameFinish}/>
            <div className='row'></div>
            <Square value={board[6]}
                chooseSquare={() => chooseSquare(6)} 
                gameFinish={gameFinish}/>
            <Square value={board[7]}
                chooseSquare={() => chooseSquare(7)} 
                gameFinish={gameFinish}/>
            <Square value={board[8]}
                chooseSquare={() => chooseSquare(8)} 
                gameFinish={gameFinish}/>
        </div>
         {showModal ? <ModalWin 
         state = { winner}
         visibility={closeModal}
         play={startGame}/>
        : ''}
        <div className='container_button'>
        <button className='button_start_game' onClick={startGame}> Start!</button>
        </div>
        </ div>
    )
}