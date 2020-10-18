import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeTwo/MainBanner';
// import MainBanner from '../components/HomeOne/MainBanner';
import FeaturesContent from '../components/HomeOne/FeaturesContent';
import FeaturesArea from '../components/HomeTwo/FeaturesArea';
import AboutContent from '../components/HomeOne/AboutContent';
import ServicesContent from '../components/Common/ServicesContent';
import WhyChooseUs from '../components/Common/WhyChooseUs';
import TabsContent from '../components/HomeOne/TabsContent';
import ProjectsStyleOne from '../components/Projects/ProjectsStyleOne';
import TeamCard from '../components/Common/TeamCard';
import TestimonialSection from '../components/HomeOne/TestimonialSection';
import AnalysisFormContent from '../components/HomeOne/AnalysisFormContent';
import BlogCardSection from '../components/Common/BlogCardSection';
import PartnerLogos from '../components/HomeOne/PartnerLogos';
import SubscribeStyleOne from '../components/Common/SubscribeStyleOne';
import Footer from '../components/Layouts/Footer';
import SubscribeStyleTwo from "../components/Common/SubscribeStyleTwo";

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <MainBanner />
                {/*<FeaturesArea />*/}
                {/*<ServicesContent />*/}
                {/*<PartnerLogos />*/}
                <FeaturesContent />
                <TabsContent />
                {/*<TabsContent />*/}
                {/*<ProjectsStyleOne /> */}
                {/*<TeamCard />*/}
                {/*<TestimonialSection />*/}
                {/*<AnalysisFormContent />*/}
                {/*<BlogCardSection />*/}
                {/*<SubscribeStyleTwo />*/}
                <SubscribeStyleOne />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;