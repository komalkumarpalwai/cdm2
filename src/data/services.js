export const servicesData = {
  webDevelopment: {
    title: "Web Development Services",
    description: "Custom digital solutions engineered for performance, scalability, and seamless user experiences.",
    icon: "💻",
    services: [
      {
        name: "Custom Website Development",
        highlights: [
          "Responsive, mobile-first design",
          "CMS integration (WordPress, Webflow)",
          "Headless architecture solutions",
          "Single-page applications (SPAs)"
        ],
        pricing: "Starting at $2,500"
      },
      {
        name: "E-Commerce Solutions",
        highlights: [
          "Shopify/WooCommerce development",
          "Payment gateway integration",
          "Product catalog management",
          "Checkout optimization"
        ],
        pricing: "Starting at $4,500"
      },
      {
        name: "Web Applications",
        highlights: [
          "SaaS platform development",
          "CRM/ERP systems",
          "Progressive Web Apps (PWAs)",
          "API integration"
        ],
        pricing: "Custom quotes"
      },
      {
        name: "Website Maintenance",
        highlights: [
          "Performance optimization",
          "Security updates",
          "Content updates",
          "Backup management"
        ],
        pricing: "From $99/month"
      }
    ]
  },
  
  digitalMarketing: {
    title: "Digital Marketing Services",
    description: "Data-driven strategies to amplify your online presence and drive qualified leads.",
    icon: "📈",
    services: [
      {
        name: "Search Engine Optimization (SEO)",
        highlights: [
          "Technical SEO audit",
          "Keyword strategy",
          "Content optimization",
          "Backlink building"
        ],
        pricing: "From $800/month"
      },
      {
        name: "Pay-Per-Click (PPC) Advertising",
        highlights: [
          "Google Ads management",
          "Facebook/Instagram ads",
          "Remarketing campaigns",
          "Conversion tracking"
        ],
        pricing: "From $1,200/month"
      },
      {
        name: "Social Media Marketing",
        highlights: [
          "Content strategy",
          "Community management",
          "Influencer collaborations",
          "Performance analytics"
        ],
        pricing: "From $750/month"
      },
      {
        name: "Content Marketing",
        highlights: [
          "Blog content creation",
          "Email campaigns",
          "Video production",
          "Infographics"
        ],
        pricing: "From $600/month"
      }
    ]
  },

  additionalServices: {
    title: "Specialized Solutions",
    services: [
      {
        name: "Brand Identity Design",
        category: "Design"
      },
      {
        name: "Conversion Rate Optimization",
        category: "Marketing"
      },
      {
        name: "Website Hosting",
        category: "Infrastructure"
      }
    ]
  },

  // For comparison tables
  serviceTiers: {
    basic: {
      name: "Starter",
      suitedFor: "Small businesses",
      webDev: ["5-page website", "Basic SEO", "Mobile responsive"],
      digitalMarketing: ["Social media setup", "4 posts/month"],
      price: "$1,999"
    },
    professional: {
      name: "Professional",
      suitedFor: "Growing businesses",
      webDev: ["Up to 15 pages", "Advanced SEO", "CMS integration"],
      digitalMarketing: ["Google Ads management", "16 posts/month"],
      price: "$4,500"
    },
    enterprise: {
      name: "Enterprise",
      suitedFor: "Large organizations",
      webDev: ["Custom web apps", "API integrations", "Priority support"],
      digitalMarketing: ["Full-funnel strategy", "Dedicated account manager"],
      price: "Custom"
    }
  }
}