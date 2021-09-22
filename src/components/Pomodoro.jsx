import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import {BiArrowFromBottom} from 'react-icons/bi'
import {BiArrowFromTop} from 'react-icons/bi'
import { VscDebugStart } from 'react-icons/vsc'
import {VscDebugRestart} from 'react-icons/vsc'
import {GiStopSign} from 'react-icons/gi'



export default function Pomodoro() {

    const [espera, setEspera] = useState(5);
    const [tiempo, setTiempo] = useState(25)
    const [minut, setMinut] = useState(tiempo);
    const [segundos, setSegundos] = useState(0);
    const [displayMensaje, setDisplayMensaje] = useState(false);
    const [intervaloId, setIntervaloId] = useState(0);
    const [pausa, setPausa] = useState(true);
    

    
    const incrementE = () => {
        setEspera(espera + 1)
    }

    const incrementT = () => {
        setTiempo(tiempo +1)
    }

    const decrementE = () => {
        if(tiempo > 1){
            setEspera(espera -1)
        }
    }

    const decrementT = () => {
        if(tiempo > 1){
            if(pausa){
                setMinut(tiempo -1)
                setTiempo(tiempo -1)
            } else{
                tiempo(tiempo -1)
            }
        }
    }

    const pauss = () => {
        setPausa(true)
    }

    const avanzar = () => {
        setPausa(false)
    }

    const reset = () => {
        setEspera(5)
        setTiempo(25)
        setPausa(true)
        setMinut(tiempo)
        setSegundos(0)
        displayMensaje&&
        setDisplayMensaje(!displayMensaje);
      }
    

    useEffect(() => {
        if(pausa === false) {
            const newIntervaloId = setInterval(() => {
                clearInterval(newIntervaloId);

                if(segundos === 0) {
                    if (minut !== 0) {
                      setSegundos(59);
                      setMinut(m => - 1);
                    } else {
                        let minut = displayMensaje ? tiempo - 1 : espera - 1;
                        let segundos = 59;

                        setSegundos(segundos);
                        setMinut(minut);
                        setDisplayMensaje(!displayMensaje);
                        }
                        } else {
                            setSegundos(s => - 1);
                        }
                        }, 1000);
                        setIntervaloId(newIntervaloId);
                        } else {
                        clearInterval(intervaloId);
                        setIntervaloId(0);
                        }
    }, [segundos, pausa]);
 


  const tiempoMinutos = minut < 10 ? `0${minut}` : minut;
  const tiempoSegundos = segundos < 10 ? `0${segundos}` : segundos;

    return (
        <div className="container">
                           
        <br /><br />
            <h2 className="text-center"> 25 + 5 Reloj Pomodoro </h2>
            <br /><br /><br />
            <div className="text-center">
            <div className="row align-items-center">
                <div className="col">
            <label>Duración del Tiempo</label><br/>
                <button
                onClick={decrementT}
                className="border border-none"
                ><BiArrowFromTop/>
                </button>
                
                <label className="tiempo-label" > {tiempo}</label>{""}
                <button
                onClick={incrementT}
                className="border border-none"
                > <BiArrowFromBottom/>
                </button>
                <div className="col">
                <div className="increment">
                    <label>Longitud Length</label><br/>
                    <button
                    onClick={decrementE}
                    className="border border-none"
                    ><BiArrowFromTop/>
                    </button>
                    
                    <label className="espera-label" > {espera}</label>{""}
                    <button
                    onClick={incrementE}
                    className="border border-none"
                    > <BiArrowFromBottom/>
                    </button>
                    </div>
                </div>
                </div>
            </div>
            
      <div className="mensaje">
        {displayMensaje && <div>{reset}</div>}
      </div>
      <div className="time">
      <label></label>
        {tiempoMinutos}:{tiempoSegundos}
      </div>
      <Button
      onClick={avanzar}> <VscDebugStart/>
      </Button>
      <Button className="btn btn-warning"
      onClick={pauss}> <GiStopSign/>
          </Button>
        <Button className="btn btn-success"
        onClick={reset}> <VscDebugRestart/>
        </Button>
        </div>
      </div>

 
    )
}
    
    // return (
    //   <div className="Pomodoro ">
    //         <div className="container hclassNameden-sm-down col-md-4">
    //         <h1 className="text-center"> 25 + 5 Reloj</h1><br/>
    //             <div className="row">
    //                 <div className="col">
    //                     <Button className="btn btn-dark"> - </Button> Longitud <Button className="btn btn-dark"> + </Button>
    //                 </div>
    //                 <div class="col">
    //                     <Button className="btn btn-dark"> - </Button> Duracion <Button className="btn btn-dark"> + </Button>
    //                 </div>
    //             </div>
    //         </div>
    //         <br/><br/>
    //         <div className="btn hidden-sm-down col-md-4">
    //             <Button className="btn btn-primary" onClick={empezar}>Empezar</Button>
    //             <Button className="btn btn-warning">Stop</Button>
    //             <Button className="btn btn-success">Reiniciar</Button>
    //         </div>
    //         <div>{secondsLeft} seconds left</div>
    //   </div>
      
    // );
  