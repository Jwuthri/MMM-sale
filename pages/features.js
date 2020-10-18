import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import FeaturesContent from '../components/HomeOne/FeaturesContent';
import TabsContent from '../components/HomeOne/TabsContent';
import SubscribeStyleTwo from '../components/Common/SubscribeStyleTwo';
import PartnerLogos from '../components/Common/PartnerLogos';
import Footer from '../components/Layouts/Footer';
import AboutContent from "../components/HomeOne/AboutContent";
import WhyChooseUs from "../components/Common/WhyChooseUs";

class Features extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner 
                    pageTitle="Features" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Features" 
                    breadcrumbUrl="/" 
                />
                {/*<FeaturesContent />*/}
                <WhyChooseUs />
                <AboutContent />
                <WhyChooseUs />
                <AboutContent />
                {/*<SubscribeStyleTwo />*/}
                <Footer />
            </React.Fragment>
        );
    }
}

export default Features;