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
export const workshopDetails = [
  {
    id: 1,
    image:
      "https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717977949758-0e87f502-f5b9-4799-b857-623780fc1415.png&w=1920&q=75",
    title: "How to make more money",
    eventDate: "Jun 11th, 2024 at 10:00 AM (IST)",
    speakerDetails: [
      {
        id: 1,
        name: "Bruce Wayne",
        image:
          "https://dev-media.konfhub.com/speakers/2024/June/09/1717977337424-66d3d266-64c3-4c45-a4ec-f9288d96dbc8.jpg",
      },
    ],
  },
  {
    id: 2,
    image:
      "https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717978156489-c8a828a9-13ca-4572-b117-0483bafd34d9.jpg&w=1920&q=75",
    title: "How to fight crime",
    eventDate: "Jun 1st, 2034 at 10:00 AM (IST)",
    speakerDetails: [
      {
        id: 1,
        name: "Dark Knight",
        image:
          "https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg",
      },
    ],
  },
  {
    id: 3,
    image:
      "https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717978363785-8225249d-f4dd-4572-826e-84093b5eb32f.jpg&w=1920&q=75",
    title: "This is a workshop connected to a ticket",
    eventDate: "Jun 1st, 2034 at 10:00 AM (IST)",
    speakerDetails: [
      {
        id: 1,
        name: "Dark Knight",
        image:
          "https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg",
      },
      {
        id: 2,
        name: "Bruce Wayne",
        image:
          "https://dev-media.konfhub.com/speakers/2024/June/09/1717977337424-66d3d266-64c3-4c45-a4ec-f9288d96dbc8.jpg",
      },
    ],
  },
];
