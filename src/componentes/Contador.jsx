import './contador.css';
export default function ContadorPag2({texto, onClick}){
    return(
        <button className = 'b' onClick={onClick}>
            {texto}
        </button>
    );
}