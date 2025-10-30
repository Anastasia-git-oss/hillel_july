import './Button.css';


export function Button({ onClick, text, count, img, clicks }) {
    
    return (
        <div>
            <button className='btn' onClick={onClick}>
                {text}
                <img className='img' src={img} />
                <div>{clicks}</div>
            </button>
            <div>{count}</div>
        </div>
    );
}