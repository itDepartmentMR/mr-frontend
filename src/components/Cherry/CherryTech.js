import { FcAndroidOs, FcMultipleSmartphones, FcServices } from "react-icons/fc";
import imgR from '../../img/Jhan Aguirre.png'
function CherryTech() {
    return ( 
        <section id="afterParty">
            <div className='contHeaderImg'>
                <div className='contBodyImg'>
                    <div className='contCardImg' id='top'>
                    
                    </div>
                    <div className='contCardImg' id='down'>
                        
                    </div>
                </div>
                <div className='contFooter'>
                    
                    <button className='btn'>
                        Descargar
                        <FcAndroidOs className="icon"/>
                    </button>
                    <div className='contIcons'>
                         
                    </div>
                </div>
            </div>
            <div className='contBody'>
                <div className='contCard'>
                    <div className='contCardImg'>
                        <FcMultipleSmartphones className="icon"/>
                    </div>
                    <div className='contCardTitle'>
                        <b>After Party</b>
                        <p>Nuevo</p>
                    </div>
                    <div className='contCardText'>
                        <p>Lanzamiento Alfa Abierta Diciembre 15 2022</p>
                    </div>
                </div>
                <div className='contCard'>
                    <div className='contCardImg'>
                        <FcServices className="icon"/>
                    </div>
                    <div className='contCardTitle'>
                        <b>Principales Desarrolladores</b>
                    </div>
                    <div className='contCardText'>
                        <img src={imgR} alt="jhan"/>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default CherryTech;