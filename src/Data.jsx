import PortfolioImg from './asserts/projects/portfolio/Screenshot.png';
import PortfolioImg1 from './asserts/projects/portfolio/Screenshot1.png';
import PortfolioImg2 from './asserts/projects/portfolio/Screenshot2.png';
import PortfolioImg3 from './asserts/projects/portfolio/Screenshot3.png';
import PortfolioImg4 from './asserts/projects/portfolio/Screenshot4.png';
import PortfolioImg5 from './asserts/projects/portfolio/Screenshot5.png';
import PortfolioImg6 from './asserts/projects/portfolio/Screenshot6.png';
import PortfolioImg7 from './asserts/projects/portfolio/Screenshot7.png';
import AutomationImg from './asserts/projects/automation/Screenshot.png';
import AutomationImg1 from './asserts/projects/automation/Screenshot1.png';
import AutomationImg2 from './asserts/projects/automation/Screenshot2.png';
import AutomationImg3 from './asserts/projects/automation/Screenshot3.png';
import AutomationImg4 from './asserts/projects/automation/Screenshot4.png';
import AutomationImg5 from './asserts/projects/automation/Screenshot5.png';
import AutomationImg6 from './asserts/projects/automation/Screenshot6.png';
import AutomationImg7 from './asserts/projects/automation/Screenshot7.png';
import AutomationImg8 from './asserts/projects/automation/Screenshot8.png';
import TeashopImg from './asserts/projects/teashop/Screenshot.png';
import TeashopImg1 from './asserts/projects/teashop/Screenshot1.png';
import TeashopImg2 from './asserts/projects/teashop/Screenshot2.png';
import TeashopImg3 from './asserts/projects/teashop/Screenshot3.png';
import TeashopImg4 from './asserts/projects/teashop/Screenshot4.png';
import TeashopImg5 from './asserts/projects/teashop/Screenshot5.png';
import TeashopImg6 from './asserts/projects/teashop/Screenshot6.png';
import TeashopImg7 from './asserts/projects/teashop/Screenshot7.png';
import TeashopImg8 from './asserts/projects/teashop/Screenshot8.png';
import TeashopImg9 from './asserts/projects/teashop/Screenshot9.png';
import TeashopImg10 from './asserts/projects/teashop/Screenshot10.png';
import FacebookBotImg from './asserts/projects/facebook_bot/Screenshot.png';
import FacebookBotImg1 from './asserts/projects/facebook_bot/Screenshot1.png';
import Blog1 from './asserts/blogs/blog.png';
import Blog2 from './asserts/blogs/blog1.png';
import Blog3 from './asserts/blogs/blog2.png';


export const links = [
    {
        name: 'Home',
        path: 'home'
    },
    {
        name: 'Services',
        path: 'services'
    },
    {
        name: 'Portfolio',
        path: 'portfolio'
    },
    {
        name: 'Testimonials',
        path: 'testimonials'
    },
    {
        name: 'Pricing',
        path: 'pricing'
    },
    {
        name: 'Blog',
        path: 'blog'
    },
    {
        name: 'Contacts',
        path: 'contact'
    }
];

export const services = [
    {
        id: 1,
        title: 'Web application',
        name: 'Development',
        description: 'We create modern web applications using React and Django. Fast, high-quality, and tailored to your business needs. Contact us for more details!'
    },
    {
        id: 2,
        title: 'Test automation',
        name: 'Automation',
        description: 'We offer test automation services to ensure the reliability and quality of your software.'
    },
    {
        id: 3,
        title: 'Infrastructure and CI / CD',
        name: 'Infrastructure',
        description: 'We provide infrastructure setup services to ensure stable and efficient operation of your systems. We will set up the environment and CI/CD for development and testing.'
    },
    {
        id: 4,
        title: 'Technical audit',
        name: 'Audit',
        description: 'Audit of your system, services and applications for errors, fault tolerance and vulnerabilities'
    },
    {
        id: 5,
        title: 'Utility services',
        name: 'Utilities',
        description: 'Writing utility services to help developers and testers. Writing mocks and fixtures for data preparation'
    },
    {
        id: 6,
        title: 'Building processes',
        name: 'Processes',
        description: 'Building development and testing processes, depending on your business'
    }
];

export const projects = [
    {
        id: 1,
        imgs: {
            primary: TeashopImg,
            secondary: [
                TeashopImg1,
                TeashopImg2,
                TeashopImg3,
                TeashopImg4,
                TeashopImg5,
                TeashopImg6,
                TeashopImg7,
                TeashopImg8,
                TeashopImg9,
                TeashopImg10
            ]
        },
        category: 'Development',
        title: 'Companhia Portugueza Do Chá',
        description: 'E - Commerce Development. Online Store for Tea in Portugal'
    },
    {
        id: 2,
        imgs: {
            primary: AutomationImg,
            secondary: [
                AutomationImg1,
                AutomationImg2,
                AutomationImg3,
                AutomationImg4,
                AutomationImg5,
                AutomationImg6,
                AutomationImg7,
                AutomationImg8
            ]
        },
        category: 'Automation',
        title: 'Rambler Afisha',
        description: 'Automation of mobile application testing'
    },
    {
        id: 3,
        imgs: {
            primary: FacebookBotImg,
            secondary: [
                FacebookBotImg1
            ]
        },
        category: 'Utilities',
        title: 'News channel "Desporto em Portugal"',
        description: 'Bot, channel promotion for Facebook, Instagram and Telegram'
    },
    {
        id: 4,
        imgs: {
            primary: PortfolioImg,
            secondary: [
                PortfolioImg1,
                PortfolioImg2,
                PortfolioImg3,
                PortfolioImg4,
                PortfolioImg5,
                PortfolioImg6,
                PortfolioImg7
            ]
        },
        category: 'Development',
        title: 'Nikita Permiakov',
        description: 'Portfolio site for a programmer: nikit34.github.io'
    },
];

export const testimonials = [
    {
        id: 1,
        author: 'Anastaia Omic',
        name: 'E - Commerce. Online Store for Tea in Portugal',
        date: '26.03.2024',
        description: 'From the very beginning, the team demonstrated a deep understanding of our needs and the market. The website design turned out to be modern and user-friendly, fully reflecting the spirit of our brand. The functionality of the site is top-notch: convenient search, simple order system, and integration with local payment systems have made our store very convenient for customers.'
    },
    {
        id: 2,
        author: 'Nikita Permiakov',
        name: 'Porfolio for developer',
        date: '13.10.2023',
        description: 'Particularly noteworthy is his professionalism and responsibility. Nikita was always available, promptly addressed any issues that arose, and provided detailed progress reports. His approach to testing and debugging code is especially commendable — everything was done efficiently and on time.'
    }
];

export const pricingData = [
    {
        id: 1,
        title: "Statistical site",
        subtitle: "Full construction",
        price: "400",
        details: [
            "Submit a request by providing the client's phone number, name, and message (the request will appear in Telegram)",
            "View the price list and select a service (the booking will appear in a table sheet and in another section of Telegram)",
            "Switch the theme (dark/light)",
            "View work samples (with video)",
            "Content moderation capability"
        ]
    },
    {
        id: 2,
        title: "Dynamical site",
        subtitle: "Full construction",
        price: "700",
        details: [
            "Payment (Stripe, PayPal)",
            "View sales statistics",
            "Add different products with varying quantities to the cart",
            "Admin panel",
            "Delivery address",
            "Discount moderation for products",
            "Sorting / Grouping products",
            "Multiple languages"
        ]
    },
    {
        id: 3,
        title: "Project activities",
        subtitle: "Project activities",
        price: "25 / hour",
        details: [
            "Automated tests of any level (e2e, integration, or unit)",
            "Common modules that can be reused for tests by different teams",
            "Mocks and services for testing",
            "CI/CD pipelines and set up the infrastructure"
        ]
    }
];

export const blogItems = [
    {
        date: "July 02, 2024",
        title: "Bot for facebook channel",
        description: "Last week we took the first step towards advertising on Facebook and spent 20 euros (the funniest and scary) on advertising - we gained 300 subscribers and on about every 10 posts someone writes comments.",
        link: "https://www.linkedin.com/posts/nikitapermikov_facebook-portugal-football-activity-7212484794952126464-Vs-C?utm_source=share&utm_medium=member_desktop",
        image: Blog2
    },
    {
        date: "November 15, 2023",
        title: "Overview of the Application of Markov Chains",
        description: "Markov chains - a model of sequence of probability events, each of which depends only on previous one",
        link: "https://www.linkedin.com/pulse/overview-application-markov-chains-%D0%BD%D0%B8%D0%BA%D0%B8%D1%82%D0%B0-%D0%BF%D0%B5%D1%80%D0%BC%D1%8F%D0%BA%D0%BE%D0%B2-ikrbf/?trackingId=Uy4psQfeiFGs%2BgWRMKzA8g%3D%3D",
        image: Blog1
    },
    {
        date: "April 28, 2024",
        title: "Launching a website selling tea",
        description: "Há oportunidade de beber o chá mais delicioso do Porto e de Vila Nova de Gaia! 🌿🍃☘☕☘🍃🌿 Visite o site, avalie e compre o produto, escreva sugestões para mim ou para Anastasia Omik (tg: @AnastasiaOmic) - desfrute de um chá de qualidade.",
        link: "https://www.linkedin.com/posts/nikitapermikov_teashop-activity-7174859588196777984-v98k?utm_source=share&utm_medium=member_desktop",
        image: Blog3
    }
];
