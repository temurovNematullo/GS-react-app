import '../../scss/style.css'
import loader from '../img/loading.svg'


let Preloader = () => {
    return (
        <div>
            <img className="loading" src={loader} alt="" /> 
        </div>
    );
}

export default Preloader