import { useState } from "react"

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
        let imc = inputNumber.toFixed() / 100;
        setResult(`O Seu IMC é: ${imc}`);
        console.log(imc);
        console.log(inputNumber);
    };

    return (

        <div className="Formulario">
            <h1>Calculadora de IMC</h1>
            <div>
                <label>Peso (kg): </label>
                <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
            </div>
            <div>
                <label>Altura (m): </label>
                <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
            </div>
            <button onClick={calculaIMC}>Calcular</button>
            {result && <p>{result}</p>}
        </div>
    )
}

export default Formulario;