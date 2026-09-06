import {
    Building,
    Heart,
    Scale
} from 'lucide-react'

export interface LawyerCredentials {
    bar: string
    location: string
}

export interface LawyerStatistics {
    experience: string
    casesResolved: string
    successRate: string
}

export interface LawyerContact {
    email: string
    phone: string
    workingHours: string
}

export interface LawyerPhoto {
    src: string
    placeholder: string
    alt: string
}

export interface LawyerData {
    name: string
    fullName: string
    title: string
    description: string
    detailedDescription: string
    credentials: LawyerCredentials
    statistics: LawyerStatistics
    contact: LawyerContact
    photo: LawyerPhoto
}

import { LucideIcon } from 'lucide-react'

export interface ServiceFeature {
    id: string
    title: string
    description: string
    icon: LucideIcon
    features: string[]
    gradient: string
    category: 'civil' | 'business' | 'family' | 'real-estate' | 'labor' | 'digital' | 'criminal' | 'other'
}

export interface SocialMedia {
    whatsapp: string
    instagram?: string
    linkedin?: string
    facebook?: string
}

// ============================================================================
// FORM CONFIGURATION
// ============================================================================

export interface FormConfig {
    subjects: string[]
    placeholders: {
        name: string
        email: string
        phone: string
        subject: string
        message: string
    }
    labels: {
        name: string
        email: string
        phone: string
        subject: string
        message: string
        submit: string
        loading: string
    }
}

// ============================================================================
// ABOUT SECTION CONFIGURATION
// ============================================================================

export interface AboutConfig {
    highlights: string[]
    whyChooseUs: string[]
}

// ============================================================================
// MAIN LAWYER CONFIGURATION
// ============================================================================

export interface LawyerConfig {
    lawyer: LawyerData
    services: ServiceFeature[]
    TypeOfcases: ServiceFeature[]
    socialMedia: SocialMedia
    form: FormConfig
    about: AboutConfig
}

export const LAWYER_CONFIG: LawyerConfig = {
    lawyer: {
        name: "Saurabh Mani",
        fullName: "Saurabh Mani",
        title: "Advocate | Civil, Business & Family Law",
        description:
            "Hello! I'm Saurabh Mani, an advocate practicing in Mau, Uttar Pradesh. I provide dedicated legal representation with a focus on understanding each client's situation and providing practical, professional, and personalized legal guidance.",
        detailedDescription:
            "Advocate Saurabh Mani provides legal services across civil, business, family, consumer, property, taxation, cheque bounce, RERA, NCLT, and intellectual property matters. With a client-focused approach, he believes in providing transparent legal guidance, careful case preparation, and dedicated representation tailored to the specific needs of every client.",
        credentials: {
            bar: "Bar Number: UP05314/2020",
            location: "Mau, Uttar Pradesh"
        },
        statistics: {
            experience: "Legal Practice",
            casesResolved: "Cases",
            successRate: "Dedication"
        },
        contact: {
            email: "themailtomani@gmail.com",
            phone: "+919140513327",
            workingHours:
                "Monday to Saturday: 9AM to 6PM"
        },
        photo: {
            src: "/images/perfil.png?v=",
            placeholder: "Saurabh Mani",
            alt: "Saurabh Mani - Advocate"
        }
    },

    services: [
        {
            id: "civil-law",
            title: "Civil Law",
            description:
                "Professional legal assistance for civil disputes, property matters, contracts, recovery, and other civil proceedings.",
            icon: Scale,
            features: [
                "Civil suits and disputes",
                "Property and land disputes",
                "Contractual disputes",
                "Debt recovery and civil matters",
                "Consumer disputes",
                "Property and possession matters"
            ],
            gradient: "from-yellow-500 to-orange-500",
            category: "civil"
        },

        {
            id: "criminal-law",
            title: "Criminal Law",
            description:
                "Dedicated legal representation in criminal matters, from complaints and bail proceedings to trial and defence.",
            icon: Scale,
            features: [
                "Criminal cases and complaints",
                "Bail and anticipatory bail",
                "Criminal defence",
                "Sessions Court matters",
                "POCSO and related matters",
                "Cheque bounce and related proceedings"
            ],
            gradient: "from-yellow-500 to-orange-500",
            category: "criminal"
        },

        {
            id: "matrimonial-law",
            title: "Matrimonial Law",
            description:
                "Professional and sensitive legal assistance for matrimonial and family-related disputes.",
            icon: Heart,
            features: [
                "Divorce and matrimonial disputes",
                "Maintenance proceedings",
                "Child custody and visitation",
                "Domestic violence matters",
                "Dowry-related matters",
                "Family and matrimonial disputes"
            ],
            gradient: "from-yellow-500 to-orange-500",
            category: "family"
        },

        {
            id: "other-legal-services",
            title: "Other Legal Services",
            description:
                "Legal assistance across various specialized matters based on the specific requirements of individuals and businesses.",
            icon: Building,
            features: [
                "Consumer law matters",
                "GST and tax-related matters",
                "RERA and real estate matters",
                "NCLT and corporate matters",
                "Trademark and copyright matters",
                "Business and commercial legal matters"
            ],
            gradient: "from-yellow-500 to-orange-500",
            category: "other"
        }
    ],

    TypeOfcases: [
        {
            id: "domestic-violence",
            title: "Domestic Violence Matters",
            description:
                "Legal assistance and representation in matters relating to domestic violence and protection of legal rights.",
            icon: Scale,
            features: [],
            gradient: "from-yellow-500 to-orange-500",
            category: "criminal"
        },

        {
            id: "matrimonial-family",
            title: "Matrimonial & Family Matters",
            description:
                "Professional legal assistance for matrimonial disputes and family-related legal matters.",
            icon: Heart,
            features: [],
            gradient: "from-yellow-500 to-orange-500",
            category: "family"
        },

        {
            id: "ni-act-cheque-bounce",
            title: "NI Act / Cheque Bounce Cases",
            description:
                "Legal representation in matters relating to cheque dishonour and proceedings under the Negotiable Instruments Act.",
            icon: Scale,
            features: [],
            gradient: "from-yellow-500 to-orange-500",
            category: "criminal"
        },

        {
            id: "bail-anticipatory-bail",
            title: "Bail & Anticipatory Bail Matters",
            description:
                "Legal representation and assistance in regular bail and anticipatory bail proceedings.",
            icon: Scale,
            features: [],
            gradient: "from-yellow-500 to-orange-500",
            category: "criminal"
        },

        {
            id: "sarfaesi-act",
            title: "SARFAESI Act Matters",
            description:
                "Legal assistance in disputes and proceedings relating to the SARFAESI Act and secured assets.",
            icon: Building,
            features: [],
            gradient: "from-yellow-500 to-orange-500",
            category: "civil"
        },

        {
            id: "pocso-act",
            title: "POCSO Act Matters",
            description:
                "Legal representation in matters and proceedings under the Protection of Children from Sexual Offences Act.",
            icon: Scale,
            features: [],
            gradient: "from-yellow-500 to-orange-500",
            category: "criminal"
        },

        {
            id: "sc-st-act",
            title: "SC/ST Act Matters",
            description:
                "Legal representation and assistance in matters arising under the SC/ST (Prevention of Atrocities) Act.",
            icon: Scale,
            features: [],
            gradient: "from-yellow-500 to-orange-500",
            category: "criminal"
        },

        {
            id: "property-distribution",
            title: "Property Distribution & Property Disputes",
            description:
                "Legal assistance in property distribution, ownership disputes, partition, and related civil matters.",
            icon: Building,
            features: [],
            gradient: "from-yellow-500 to-orange-500",
            category: "civil"
        },

        {
            id: "transfer-of-property",
            title: "Transfer of Property Matters",
            description:
                "Legal assistance relating to transfer, ownership, sale, purchase, and other property-related matters.",
            icon: Building,
            features: [],
            gradient: "from-yellow-500 to-orange-500",
            category: "civil"
        },

        {
            id: "family-matrimonial-disputes",
            title: "Family & Matrimonial Disputes",
            description:
                "Professional legal assistance in family disputes, matrimonial conflicts, maintenance, and related proceedings.",
            icon: Heart,
            features: [],
            gradient: "from-yellow-500 to-orange-500",
            category: "family"
        },

        {
            id: "consumer-other-legal",
            title: "Consumer & Other Legal Matters",
            description:
                "Legal assistance in consumer disputes and other legal matters based on the specific requirements of the client.",
            icon: Scale,
            features: [],
            gradient: "from-yellow-500 to-orange-500",
            category: "other"
        }
    ],

    socialMedia: {
        whatsapp: "https://wa.me/919140513327",
        instagram: "",
        linkedin:
            "https://www.linkedin.com/in/saurabh-mani-ll-b-gold-medalist-2529802b2/",
        facebook: ""
    },



    form: {
        subjects: [
            "Legal Consultation",
            "Civil Law",
            "Business & Corporate Law",
            "Family Law",
            "Consumer Law",
            "Cheque Bounce",
            "GST & Tax Law",
            "RERA",
            "NCLT",
            "Trademark & Copyright",
            "Property Law",
            "Other"
        ],

        placeholders: {
            name: "Your full name",
            email: "your@email.com",
            phone: "+91 XXXXX XXXXX",
            subject: "Select a subject",
            message: "Describe your situation or question..."
        },

        labels: {
            name: "Name",
            email: "Email",
            phone: "Phone",
            subject: "Subject",
            message: "Message",
            submit: "Send Message",
            loading: "Sending..."
        }
    },

    about: {
        highlights: [
            "LL.B Gold Medalist",
            "Practice at District & Sessions Court, Mau",
            "Focus on Civil, Business & Family Law",
            "Personalized and transparent legal service"
        ],

        whyChooseUs: [
            "Personalized legal consultation",
            "Dedicated representation",
            "Transparent communication",
            "Professional and ethical legal practice",
            "Experience across multiple areas of law"
        ]
    }
};