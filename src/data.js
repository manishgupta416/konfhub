export const ticketCardData = [
  {
    id: 1,
    title: "Free Ticket",
    description:
      "This is a ticket description. This is a free ticket. This ticket is uncategorised.",
    venue: {
      name: "KonfHub Technologies",
      address: "Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
      additionalDetails: "This is additional venue details.",
    },
    availability: {
      till: "31st Aug 2034, 06:00 PM IST",
    },
    price: "₹0",
    action: "Register",
  },
  {
    id: 2,
    title: "Paid Ticket",
    description:
      "This is a ticket description. This is a paid ticket. This ticket is uncategorised.",
    venue: {
      name: "KonfHub Technologies",
      address: "Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
      additionalDetails: "This is additional venue details.",
    },
    availability: {
      till: "31st Aug 2034, 06:00 PM IST",
    },
    price: "₹1,000",
    action: "Register",
  },
  {
    id: 3,
    title: "Donation Ticket",
    description:
      "This is a ticket description. This is a donation ticket. This ticket is uncategorised.",
    venue: {
      name: "KonfHub Technologies",
      address: "Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
      additionalDetails: "This is additional venue details.",
    },
    availability: {
      till: "31st Aug 2034, 06:00 PM IST",
    },
    price: "₹200",
    action: "Donate",
  },
  {
    id: 4,
    title: "Ticket With Coupon",
    description:
      "This is a ticket description. This is a paid ticket. This ticket is uncategorised. This ticket also has a coupon. Buy minimum - 1 and maximum - 1000000 and avail 10% off.",
    venue: {
      name: "KonfHub Technologies",
      address: "Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
      additionalDetails: "This is additional venue details.",
    },
    availability: {
      till: "31st Aug 2034, 06:00 PM IST",
    },
    price: "₹1,000",
    action: "Register",
  },
];

export const accordionData = [
  {
    id: 1,
    categoryTitle: "This is a category",
    categoryDescription:
      "This is category description. This category is collapsed by default.",
    tickets: [
      {
        id: 4,
        title: "Ticket With Coupon",
        description:
          "This is a ticket description. This is a paid ticket. This ticket is uncategorised. This ticket also has a coupon. Buy minimum - 1 and maximum - 1000000 and avail 10% off.",
        venue: {
          name: "KonfHub Technologies",
          address:
            "Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
          additionalDetails: "This is additional venue details.",
        },
        availability: {
          till: "31st Aug 2034, 06:00 PM IST",
        },
        price: "₹1,000",
        action: "Register",
      },
    ],
  },
  {
    id: 2,
    categoryTitle: "This is a category",
    categoryDescription:
      "This is also a category. But with a little longer name. Also note, this category expanded by default.",
    tickets: [
      {
        id: 4,
        title: "Ticket With Coupon",
        description:
          "This is a ticket description. This is a paid ticket. This ticket is uncategorised. This ticket also has a coupon. Buy minimum - 1 and maximum - 1000000 and avail 10% off.",
        venue: {
          name: "KonfHub Technologies",
          address:
            "Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
          additionalDetails: "This is additional venue details.",
        },
        availability: {
          till: "31st Aug 2034, 06:00 PM IST",
        },
        price: "₹1,000",
        action: "Register",
      },
    ],
  },
];

export const speakerDetails = [
  {
    id: 1,
    image:
      "https://dev-media.konfhub.com/speakers/2024/June/09/1717977337424-66d3d266-64c3-4c45-a4ec-f9288d96dbc8.jpg",
    name: "Bruce Wayne",
    title: "Chairman",
    company: "Wayne Enterprises",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedIn: "#",
      website: "#",
    },
  },
  {
    id: 2,
    image:
      "https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg",
    name: "Dark Knight",
    title: "Batman",
    company: "Gotham",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedIn: "#",
      website: "#",
    },
  },
];
