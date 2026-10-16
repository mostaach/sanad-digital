export interface NavItem {
  label: string;
  href: string;
}

export const navigation = {
  items: [
    { label: 'Infrastructure', href: '#infrastructure' },
    { label: 'Live Systems', href: '#projects' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'About', href: '#about' },
  ] as NavItem[],
  cta: { label: 'Book a Digital Audit', href: '#audit' } as NavItem,
};
