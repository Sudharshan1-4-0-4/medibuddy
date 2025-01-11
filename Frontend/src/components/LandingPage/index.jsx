import React from "react";
import Header from "../Header";
import SearchSection from "../SearchSection";
import Banners from "../Banners";
import HealthCheckComponent from "../HealthCheckComponent";
import LifeStyleComponent from "../LifeStyleComponent";
import HowItWorks from "../HowItWorks";
import Faq from "../Faq";
import UserReviews from "../UserReviews";
import Info from "../Info";

function LandingPage() {
    return (
        <>
            <Header />
            <SearchSection />
            <Banners />
            <HealthCheckComponent />
            <UserReviews />
            <LifeStyleComponent />
            <HowItWorks />
            <Info />
            <Faq />

        </>
    );
}

export default LandingPage;
