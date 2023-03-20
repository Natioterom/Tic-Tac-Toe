import '../App.css'

export const ModalWin = ({state, visibility, play}) => {

    return(
        <div className='modal'>
        <div className='container-modal'>
            <h1 className='state-game'>{state}</h1>
            <div className='container-buttons'>
            <button className='button-modal-close' onClick={visibility}>Close</button>
            <button className='button-modal-start' onClick={play}>Start new game</button>
            </div>
        </div>
        </div>
    )
}