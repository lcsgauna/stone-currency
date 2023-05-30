import Logo from '../../../assets/Logo.svg'
import styles from './Header.module.css'

function Header(){
    const ls_cotacao = JSON.parse(localStorage.getItem('@cotacao'))
    const cotacao_info = ls_cotacao['USDBRL']

    return(
        <>
            <a href="">
                <img src={Logo} alt="Stone currency"/>
            </a>
            <div className='api-info'>
                <p className={styles.apiInfoTitle}>{cotacao_info['create_date']}</p>
                <p className={styles.apiInfoSubtitle}>Dados de câmbio disponibilizados pela Awesomeapi.</p>
            </div>
        </>
    )
}

export default Header