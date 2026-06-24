import { sectionHeaders } from '@/data/sectionHeader';

export const getSectionHeader = (section: keyof typeof sectionHeaders) =>
  sectionHeaders[section];
