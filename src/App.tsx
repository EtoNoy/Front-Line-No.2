/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { AboutAdamPage } from './pages/AboutAdamPage';
import { PracticeAreaDetail } from './pages/PracticeAreaDetail';
import { WhyChooseUsDetail } from './pages/WhyChooseUsDetail';
import { ReviewsPage } from './pages/ReviewsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { FAQPage } from './pages/FAQPage';
import { ChatbotWidget } from './components/ChatbotWidget';

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-adam" element={<AboutAdamPage />} />
        <Route path="/practice-areas/:slug" element={<PracticeAreaDetail />} />
        <Route path="/why-choose-us" element={<WhyChooseUsDetail />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/faqs" element={<FAQPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
      </Routes>

      {/* Legal Concierge Chatbot Widget (Bottom Right) */}
      <ChatbotWidget />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
