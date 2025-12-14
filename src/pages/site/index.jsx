import { Header } from "../../components/layout/header"
import { SiteMainSection } from "../../components/layout/site_main_section"
import { SiteReasonsSection } from "../../components/layout/site_reasons_section"

export const Site = () => {
    return (
        <>
            <Header />
            <SiteMainSection/>
            <SiteReasonsSection/>
        </>
    )
}