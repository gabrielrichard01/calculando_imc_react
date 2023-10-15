import { useState } from "react"

import styles from './Imc.module.css';

const ImcCalculador = () => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setImc] = useState('');
    const [classificacao, setClassificacao] = useState('');


    const handleAlturaChange = (event) => {
        setAltura(event.target.value);
    }

    const handlePesoChange = (event) => {
        setPeso(event.target.value);
    }

    const handleCalculaImc = () => {
        const alturaMetros = altura / 100;
        const imcCalculado = peso / (alturaMetros * alturaMetros);

        setImc(imcCalculado.toFixed(2));

        if(imcCalculado < 18.5){
            setClassificacao('Abaixo do peso');
        }else if(imcCalculado < 24.9){
            setClassificacao('peso normal');
        }else if(imcCalculado < 29.9){
            setClassificacao('sobrepeso');
        }else if(imcCalculado < 34.9){
            setClassificacao('Obesidade grau I');
        }else if(imcCalculado < 39.9){
            setClassificacao('Obesidade grau II');
        }else{
            setClassificacao('Obesidade grau III')
        }
    };

    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Calculadora de IMC</h1>
            </div>
            <div className={styles.imcAltura}>
                <label>Altura (cm):</label>
                <input type="number" placeholder="Digite sua altura" value={altura} onChange={handleAlturaChange}/>
            </div>
            <div className={styles.imcPeso}>
                <label>Peso (kg):</label>
                <input type="number" placeholder="Digite seu peso" value={peso} onChange={handlePesoChange}/>
            </div>
            <button className={styles.btn} type="button" onClick={handleCalculaImc}>Calcular IMC</button>
            {imc && (
                <div className={styles.resultadoImc}>
                    <p>IMC: {imc}</p>
                    <p>Classificação: {classificacao}</p>
                </div>
            )}
        </div>
    );
};
export default ImcCalculador;