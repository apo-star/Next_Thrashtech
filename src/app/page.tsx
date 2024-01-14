import { Metadata } from 'next'
import Banner from './components/banner';
import AboutSection from './components/aboutSection';
import ServicesSection from './components/servicesSection';
 
export const metadata: Metadata = {
  title: 'Thrashtech',
}
 
export default function Home() {
  return (
    <>
      <Banner />
      <AboutSection />
      <ServicesSection />
    </>
  );
}