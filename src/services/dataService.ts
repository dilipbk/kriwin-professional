import companyData from "../data/company.json";
import servicesData from "../data/services.json";
import type { CompanyInfo, FounderInfo, Service } from "../types";

// Simulate API calls with promises
export const dataService = {
  getCompanyInfo: (): Promise<CompanyInfo> => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(companyData.companyInfo);
      }, 100);
    });
  },

  getFounderInfo: (): Promise<FounderInfo> => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(companyData.founderInfo);
      }, 100);
    });
  },

  getServices: (): Promise<Service[]> => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(servicesData.services);
      }, 150);
    });
  },

  getServiceById: (id: string): Promise<Service | null> => {
    return new Promise(resolve => {
      setTimeout(() => {
        const service = servicesData.services.find(s => s.id === id);
        resolve(service || null);
      }, 100);
    });
  },
};
