import Footer from "./_components/layout/footer"
import Header from "./_components/layout/header"


const MarketingLayout = ({ children }: LayoutProps<"/">) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default MarketingLayout