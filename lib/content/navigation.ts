export interface NavItem {
  label: string;
  href: string;
}

export const navigation = {
  items: [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Systems', href: '#systems' },
    { label: 'Projects', href: '#projects' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'About', href: '#about' },
  ] as NavItem[],
  cta: { label: 'Book a Digital Audit', href: '#audit' } as NavItem,
};
