import { CardIaThird } from '../../cards/card-ia-third'
import './style.css'
import line from '../../../assets/images/home/line.svg'
import quotation_marks from '../../../assets/images/home/quotation_marks.svg'

export const IaSpecialistsSection = () => {
    return(
        <section className='content-ia-specialists-section'>
            <CardIaThird
            linha={line}
            aspas={quotation_marks}
            titulo="A IA é o maior maremoto tecnológico desde a chegada da internet."
            nome="Satya Nadella"
            cargo="CEO da Microsoft"/>
        </section>
    )
}