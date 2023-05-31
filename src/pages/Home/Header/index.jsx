import Logo from '../../../assets/Logo.svg'
import styles from './Header.module.css'

function Header(){
    const ls_cotacao = JSON.parse(localStorage.getItem('@cotacao'))
    const cotacao_info = ls_cotacao['USDBRL']
    const data_cotacao = new Date(cotacao_info['create_date']);

    function obterNomeDoMes(numeroDoMes) {
        switch (numeroDoMes) {
          case 1:
            return "Janeiro";
          case 2:
            return "Fevereiro";
          case 3:
            return "Março";
          case 4:
            return "Abril";
          case 5:
            return "Maio";
          case 6:
            return "Junho";
          case 7:
            return "Julho";
          case 8:
            return "Agosto";
          case 9:
            return "Setembro";
          case 10:
            return "Outubro";
          case 11:
            return "Novembro";
          case 12:
            return "Dezembro";
          default:
            return "Mês inválido";
        }
      }

    return(
        <>
            <div className={styles.headerContainer}>
                <a href="">
                    <img src={Logo} alt="Stone currency"/>
                </a>
                <div className='api-info'>
                    <p className={styles.apiInfoTitle}>{`${data_cotacao.getDay()} de ${obterNomeDoMes(data_cotacao.getMonth())} ${data_cotacao.getFullYear()} |  ${data_cotacao.getHours()}:${data_cotacao.getMinutes()}${data_cotacao.getSeconds()} UTC`}</p>
                    <p className={styles.apiInfoSubtitle}>Dados de câmbio disponibilizados pela Awesomeapi.</p>
                </div>
            </div>
        </>
    )
}

export default Header