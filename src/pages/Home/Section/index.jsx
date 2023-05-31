import styles from './Section.module.css'
function Section(){
    return(
        <>
        <div className={styles.currencyCard}>
            <form className={styles.currencyCardForm}>
                <label>Dólar</label>
                <label>Taxa do Estado</label>
                <input placeholder='$'/>
                <input placeholder='0%'/>

                <label>Tipo de Compra</label>
                <div className={styles.currencyCardInputRadio}>
                <input type='radio' value='dinheiro'/>
                <label>Dinheiro</label>
                <input type='radio' value='cartao'/>
                <label>Cartão</label>
                </div>
            </form>
        </div>
        </>
    )
}

export default Section