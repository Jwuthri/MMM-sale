import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import AboutContent from '../components/AboutUs/AboutContent';
import FeaturesArea from '../components/HomeTwo/FeaturesArea';
import ServicesContent from '../components/Common/ServicesContent';
import PricingContent from '../components/PricingPlans/PricingContent';
import ProjectsStyleTwo from '../components/Projects/ProjectsStyleTwo';
import TeamCard from '../components/Common/TeamCard';
import SubscribeStyleTwo from '../components/Common/SubscribeStyleTwo';
import PartnerLogos from '../components/Common/PartnerLogos';
import Footer from '../components/Layouts/Footer';
import WhyChooseUs from "../components/Common/WhyChooseUs";

class AboutUs extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner
                    pageTitle="About Us"
                    breadcrumbTextOne="Home"
                    breadcrumbTextTwo="About Us"
                    breadcrumbUrl="/"
                />
                <WhyChooseUs />
                {/*<FeaturesArea />*/}
                {/*<ServicesContent />*/}
                {/*<PricingContent />*/}
                {/*<ProjectsStyleTwo />*/}
                <TeamCard />
                {/*<SubscribeStyleTwo />*/}
                {/*<PartnerLogos />*/}
                <Footer />
            </React.Fragment>
        );
    }
}

export default AboutUs;