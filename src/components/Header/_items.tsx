export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NavItems: Array<NavItem> = [
  {
    label: "About Us",
    href: "#",
  },
  {
    label: "Packages",
    href: "#",
    children: [
      {
        label: "Catholic Pilgrimage",
        href: "#",
        children: [
          {
            label: "Holy Land",
            href: "#",
          },
          {
            label: "Marian Pilgrimage",
            href: "#",
          },
          {
            label: "Pilgrimage to the divine mercy and tour of Eastern Europe",
            href: "#",
          },
          {
            label: "The Balkans and Medugorje",
            href: "#",
          },
        ],
      },
      {
        label: "Virtual Pilgrimage",
        href: "#",
      },
      {
        label: "International",
        href: "#",
        children: [
          {
            label: "Europe",
            href: "#",
          },
          {
            label: "Turkey",
            href: "#",
          },
          {
            label: "Japan",
            href: "#",
          },
          {
            label: "Bali",
            href: "#",
          },
          {
            label: "Hongkong",
            href: "#",
          },
          {
            label: "Thailand",
            href: "#",
          },
          {
            label: "Morocco",
            href: "#",
          },
        ],
      },
      {
        label: "Domestic",
        children: [
          {
            label: "Boracay",
            href: "#",
          },
          {
            label: "Palawan",
            href: "#",
          },
          {
            label: "Batanes",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    label: "Services",
    href: "#",
  },
  {
    label: "Contact Us",
    href: "#",
  },
];
