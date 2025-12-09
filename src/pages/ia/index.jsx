import { CardIaPrimary } from "../../components/cards/card-ia-primary"
import { CardIaSecondary } from "../../components/cards/card-ia-secondary"
import { CardIaThird } from "../../components/cards/card-ia-third"
import { Header } from "../../components/layout/header"

export const Ia = () => {
    return (
        <>
            <Header />
            <CardIaPrimary parametro1="parametro1" parametro2="parametro2"/>
            <CardIaSecondary parametro1="parametro1" parametro2="parametro2"/>
            <CardIaThird parametro1="parametro1" parametro2="parametro2"/>
        </>
    )
}