import { CardSitePrimary } from "../../components/cards/card-site-primary"
import { CardSiteSecondary } from "../../components/cards/card-site-secondary"
import { Header } from "../../layout/header"

export const Site = () => {
    return (
        <>
            <Header />
            <CardSitePrimary parametro1="parametro1" parametro2="parametro2"/>
            <CardSiteSecondary parametro1="parametro1" parametro2="parametro2"/>
        </>
    )
}