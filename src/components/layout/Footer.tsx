import React from "react";

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer
      id="footer"
      className={`${className} bg-slate-900 text-white`}
      role="contentinfo"
    >
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center text-slate-900 font-bold text-xl mr-4">
                  K
                </div>
                <div>
                  <div className="text-2xl font-bold">Kriwin</div>
                  <div className="text-sm text-slate-400 font-medium tracking-wide">
                    PROFESSIONAL CONSULTANCY
                  </div>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed max-w-md">
                Empowering businesses with strategic financial guidance,
                innovative solutions, and uncompromising integrity for over 10
                years. Your trusted partner in financial excellence and
                sustainable growth.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                    <span className="text-amber-500">📍</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">
                      Corporate Headquarters
                    </div>
                    <div className="text-slate-400 text-sm">
                      Bagdole, Lalitpur
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                    <span className="text-amber-500">📞</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">
                      +977 9851224841
                    </div>
                    <div className="text-slate-400 text-sm">
                      24/7 Client Support
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                    <span className="text-amber-500">✉️</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">
                      info@kriwinprofessional.com
                    </div>
                    <div className="text-slate-400 text-sm">
                      General Inquiries
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <nav aria-labelledby="services-heading">
              <h4
                id="services-heading"
                className="text-lg font-bold text-white mb-6"
              >
                Services
              </h4>
              <ul className="space-y-3" role="list">
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    Audit & Assurance
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    Tax Advisory
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    Financial Consulting
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    Risk Management
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    Compliance Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    Business Valuation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    M&A Advisory
                  </a>
                </li>
              </ul>
            </nav>

            {/* Industries */}
            <nav aria-labelledby="industries-heading">
              <h4
                id="industries-heading"
                className="text-lg font-bold text-white mb-6"
              >
                Industries
              </h4>
              <ul className="space-y-3" role="list">
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    Healthcare
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    Technology
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    Manufacturing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    Real Estate
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    Financial Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    Non-Profit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    Private Equity
                  </a>
                </li>
              </ul>
            </nav>

            {/* Resources & Company */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Company</h4>
              <ul className="space-y-3 mb-8">
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    Leadership Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    News & Insights
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    Client Portal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    Contact
                  </a>
                </li>
              </ul>

              {/* Certifications */}
              <div>
                <h5 className="text-sm font-semibold text-white mb-3">
                  Certifications
                </h5>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-slate-800 text-amber-500 rounded text-xs font-medium">
                    CPA
                  </span>
                  <span className="px-2 py-1 bg-slate-800 text-amber-500 rounded text-xs font-medium">
                    CA
                  </span>
                  <span className="px-2 py-1 bg-slate-800 text-amber-500 rounded text-xs font-medium">
                    CFA
                  </span>
                  <span className="px-2 py-1 bg-slate-800 text-amber-500 rounded text-xs font-medium">
                    AICPA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-slate-800">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6 text-sm text-slate-400">
              <p>
                &copy; 2024 Kriwin Professional Consultancy. All rights
                reserved.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-slate-400">Follow us:</span>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-slate-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors group"
                >
                  <span className="text-slate-400 group-hover:text-slate-900 text-sm">
                    in
                  </span>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-slate-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors group"
                >
                  <span className="text-slate-400 group-hover:text-slate-900 text-sm">
                    f
                  </span>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-slate-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors group"
                >
                  <span className="text-slate-400 group-hover:text-slate-900 text-sm">
                    t
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
