import styles from './Tabela.module.css'

function Table() {
    return (
        <table className={styles.tabela}>
            <thead>
                <tr>
                    <th className={styles.head} >IMC</th>
                    <th className={styles.head} >Classificação</th>
                    <th className={styles.head} >Obesidade (grau)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className={styles.data} >Abaixo de 18,5</td>
                    <td className={styles.data} >Abaixo do Normal</td>
                    <td className={styles.data} >0</td>
                </tr>
                <tr>
                    <td className={styles.data} >Entre 18,5 e 24,9</td>
                    <td className={styles.data} >Peso considerado na faixa Saudável</td>
                    <td className={styles.data} >0</td>
                </tr>
                <tr>
                    <td className={styles.data} >Entre 25,0 e 29,9</td>
                    <td className={styles.data} >Peso na faixa do Sobrepeso</td>
                    <td className={styles.data} >I</td>
                </tr>
                <tr>
                    <td className={styles.data} >Entre 30,0 e 39,9</td>
                    <td className={styles.data} >Peso na faixa de Obesidade grau II</td>
                    <td className={styles.data} >II</td>
                </tr>
                <tr>
                    <td className={styles.data} >acima de 40,0</td>
                    <td className={styles.data} >Peso na faixa de Obesidade grau III</td>
                    <td className={styles.data} >III</td>
                </tr>
            </tbody>
        </table>
    )
} 

export default Table