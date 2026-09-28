import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MainServicesOverview } from './components/MainServicesOverview';
import { RoiCalculator } from './components/RoiCalculator';
import { ComparisonSection } from './components/ComparisonSection';
import { TrustAndSecurity } from './components/TrustAndSecurity';
import { LeadCaptureForm } from './components/LeadCaptureForm';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedServicePill, setSelectedServicePill] = useState<string>('norma43');

  const handleSelectServicePill = (serviceId: string) => {
    setSelectedServicePill(serviceId);
    const el = document.getElementById(serviceId) || document.getElementById('servicios');
    if (el) {
      const yOffset = -140;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-slate-900 font-sans selection:bg-blue-600/10 selection:text-blue-900">
      {/* Clean Top Navigation */}
      <Header onOpenDemoModal={() => setIsDemoModalOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* First Page / Hero Section with Strong Title */}
        <Hero 
          onOpenDemoModal={() => setIsDemoModalOpen(true)} 
        />

        {/* Clean Interactive Services Overview */}
        <MainServicesOverview 
          onOpenDemoModal={() => setIsDemoModalOpen(true)}
          selectedServiceId={selectedServicePill}
        />

        {/* Interactive Savings & Efficiency ROI Calculator */}
        <RoiCalculator 
          onOpenDemoModal={() => setIsDemoModalOpen(true)} 
        />

        {/* Traditional Accounting vs GMI Contabilidad */}
        <ComparisonSection 
          onOpenDemoModal={() => setIsDemoModalOpen(true)} 
        />

        {/* 3 Pillars: Seguridad (ENS), Eficiencia, Transparencia + CC Bosco */}
        <TrustAndSecurity />

        {/* Lead Capture Form & Zaragoza Headquarters Contact */}
        <LeadCaptureForm />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Clean Institutional Footer */}
      <Footer />

      {/* Quick Demo Modal */}
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </div>
  );
}
