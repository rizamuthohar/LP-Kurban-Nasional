/**
 * @license
 * PT Distribusi Kurban Nasional - Investment Landing Page
 * National Kurban Marketplace & Digital Ecosystem
 */

import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { OpportunitySection } from './components/OpportunitySection';
import { ProblemSection } from './components/ProblemSection';
import { AmplifierSection } from './components/AmplifierSection';
import { BusinessModelSection } from './components/BusinessModelSection';
import { PlatformPillarsSection } from './components/PlatformPillarsSection';
import { EcosystemNodesSection } from './components/EcosystemNodesSection';
import { StrategicPartnershipSection } from './components/StrategicPartnershipSection';
import { YearRoundMarketingSection } from './components/YearRoundMarketingSection';
import { CustomerJourneySection } from './components/CustomerJourneySection';
import { MudhohiExperienceSection } from './components/MudhohiExperienceSection';
import { KurbanSultanSection } from './components/KurbanSultanSection';
import { CompetitiveAdvantageSection } from './components/CompetitiveAdvantageSection';
import { FlywheelSection } from './components/FlywheelSection';
import { RevenueModelSection } from './components/RevenueModelSection';
import { InvestmentOpportunitySection } from './components/InvestmentOpportunitySection';
import { RoadmapSection } from './components/RoadmapSection';
import { BigVisionSection } from './components/BigVisionSection';
import { FaqAccordionSection } from './components/FaqAccordionSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { InquiryModal } from './components/InquiryModal';
import { StandaloneExportBar } from './components/StandaloneExportBar';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'inquiry' | 'deck'>('inquiry');

  const handleOpenInquiry = () => {
    setModalMode('inquiry');
    setModalOpen(true);
  };

  const handleOpenInvestorDeck = () => {
    setModalMode('deck');
    setModalOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="kn-page">
      {/* 
        NO HEADER, NO NAVBAR, NO FOOTER 
        As requested, this landing page is designed to be embedded directly into an existing website.
      */}

      {/* 1. HERO SECTION */}
      <HeroSection 
        onOpenInvestorDeck={handleOpenInvestorDeck}
        onScrollToSection={handleScrollToSection}
      />

      {/* 2. THE OPPORTUNITY */}
      <OpportunitySection />

      {/* 3. THE PROBLEM */}
      <ProblemSection />

      {/* 4. ECOSYSTEM AMPLIFIER / VISION */}
      <AmplifierSection />

      {/* 5. BUSINESS MODEL & FUNNEL */}
      <BusinessModelSection />

      {/* 6. PLATFORM INFRASTRUCTURE PILLARS */}
      <PlatformPillarsSection />

      {/* 7. NATIONAL ECOSYSTEM NODE DIAGRAM */}
      <EcosystemNodesSection />

      {/* 8. STRATEGIC PARTNERSHIP (DOMPET DHUAFA & KEMENTAN TARGET ANCHORS) */}
      <StrategicPartnershipSection />

      {/* 9. YEAR-ROUND MARKETING */}
      <YearRoundMarketingSection />

      {/* 10. CUSTOMER JOURNEY */}
      <CustomerJourneySection />

      {/* 11. MUDHOHI EXPERIENCE & TRACKING MOCKUP */}
      <MudhohiExperienceSection />

      {/* 12. KURBAN SULTAN (PREMIUM) */}
      <KurbanSultanSection onOpenInquiry={handleOpenInquiry} />

      {/* 13. COMPETITIVE ADVANTAGE MATRIX */}
      <CompetitiveAdvantageSection />

      {/* 14. BUSINESS FLYWHEEL */}
      <FlywheelSection />

      {/* 15. REVENUE MODEL */}
      <RevenueModelSection />

      {/* 16. INVESTMENT OPPORTUNITY (Rp 150 JUTA) */}
      <InvestmentOpportunitySection onOpenInquiry={handleOpenInquiry} />

      {/* 17. 6 MONTH ROADMAP */}
      <RoadmapSection />

      {/* 18. THE BIG VISION */}
      <BigVisionSection />

      {/* 19. ACCORDION FAQ */}
      <FaqAccordionSection />

      {/* 20. FINAL CTA */}
      <FinalCtaSection 
        onOpenInquiry={handleOpenInquiry}
        onOpenInvestorDeck={handleOpenInvestorDeck}
      />

      {/* INTERACTIVE MODAL */}
      <InquiryModal 
        isOpen={modalOpen}
        mode={modalMode}
        onClose={() => setModalOpen(false)}
      />

      {/* CONTROL FLOATING TOOLBAR */}
      <StandaloneExportBar 
        onOpenDeck={handleOpenInvestorDeck}
        onOpenInquiry={handleOpenInquiry}
      />
    </div>
  );
}
