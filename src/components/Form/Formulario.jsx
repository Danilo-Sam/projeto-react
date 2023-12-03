import { useState } from "react"

import styles from './Formulario.module.css';

function Formulario() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [result, setResult] = useState(null);
        
    const calculaIMC = () => {
        const alturaNum = parseFloat(altura);
        const pesoNum = parseFloat(peso);

        if (isNaN(alturaNum) || isNaN(pesoNum) || alturaNum <= 0 || pesoNum <= 0) {
            setResult('Por favor, insira valores validos para peso e altura.');
            return;
        }

        const inputNumber = pesoNum / (alturaNum * alturaNum);
        let imc = inputNumber.toFixed(2);
        setResult(`O Seu IMC é: ${imc}`);
    };

    return (

        <div className={styles.formulario}>
                <h1 className={styles.title}>Calculadora de IMC</h1>
                <label className={styles.text} >Peso (kg): </label>
                <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
                <label className={styles.text} >Altura (m): </label>
                <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
            <a href="#" className={styles.btn} onClick={calculaIMC}>
                <span>Calcular</span>
                </a>
            {result && <p className={styles.resultado} >{result}</p>}
            
        </div>
    )
}

export default Formulario
