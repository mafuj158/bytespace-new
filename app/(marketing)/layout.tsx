import Footer from "./_components/footer"
import Header from "./_components/header"


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