import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import PricingContent from '../components/PricingPlans/PricingContent';
import SubscribeStyleTwo from '../components/Common/SubscribeStyleTwo';
import PartnerLogos from '../components/Common/PartnerLogos';
import Footer from '../components/Layouts/Footer';

class Pricing extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner 
                    pageTitle="Pricing" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Our Pricing Plans" 
                    breadcrumbUrl="/" 
                />
                <PricingContent />
                {/*<SubscribeStyleTwo />*/}
                {/*<PartnerLogos />*/}
                <Footer />
            </React.Fragment>
        );
    }
}

export default Pricing;