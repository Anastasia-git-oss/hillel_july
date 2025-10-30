import './Button.css';

export default function Button(props) {
    const {text , onClick, IsClicked} = props;
    return (
        <button className={`btn ${IsClicked ? 'clicked' : ''}`} onClick={onClick}>
            {text}
        </button>
    );
}