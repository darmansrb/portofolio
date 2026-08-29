import type { Locale } from './i18n'

export type Localized<T> = Record<Locale, T>

export type Social = {
  name: string
  href: string
  icon: 'email' | 'linkedin' | 'instagram' | 'github'
}

export type Project = {
  title: string
  desc: Localized<string>
  stack: string[]
  link?: string
  repo?: string
  color: 'pink' | 'mint' | 'yellow' | 'peach'
}

export type Experience = {
  role: string
  company: string
  period: Localized<string>
  location: string
  bullets: Localized<string[]>
  color: 'pink' | 'mint' | 'yellow' | 'peach'
}

export type Education = {
  school: string
  degree: string
  period: string
  notes?: Localized<string>
  color: 'pink' | 'mint' | 'yellow' | 'peach'
}

export const profile = {
  name: 'Darman Sarbunan',
  tagline: {
    id: 'Full-Stack Developer dengan fokus backend — API yang bersih, integrasi yang aman, dan sistem yang siap berkembang.',
    en: 'Full-Stack Developer with a backend focus — clean APIs, secure integrations, and systems that scale.',
  } as Localized<string>,
  bio: {
    id: `Full-Stack Developer yang fokus utama pada pengembangan backend dan sistem
terintegrasi. Terbiasa bekerja dengan API, database, serta arsitektur aplikasi
yang bersih, aman, dan scalable. Saya menikmati proses memecahkan masalah
kompleks dan menerjemahkannya menjadi solusi teknis yang efisien serta mudah
dipelihara.

Saat ini saya bekerja di sebuah bank daerah, terlibat langsung dalam
pengembangan sistem switching yang terintegrasi dengan core banking — mencakup
pengelolaan transaksi, integrasi berbagai layanan, serta menjaga keandalan dan
keamanan sistem finansial. Selain backend, saya juga berpengalaman dalam
mengembangkan aplikasi web dan mobile, sehingga mampu membangun sistem secara
end-to-end: server, logika bisnis, hingga antarmuka pengguna.`,
    en: `A Full-Stack Developer whose main focus is backend development and integrated
systems. I’m comfortable working with APIs, databases, and clean, secure, scalable
application architecture. I enjoy breaking down complex problems and turning them
into efficient, maintainable technical solutions.

Currently, I work at a regional bank, directly involved in developing switching
systems integrated with core banking — covering transaction management, service
integration, and keeping the financial system reliable and secure. Beyond backend,
I also have experience building web and mobile apps, so I understand and ship
systems end-to-end: server, business logic, and user interface.`,
  } as Localized<string>,
  location: 'Kupang, Indonesia',
  status: {
    id: 'Terbuka untuk peluang',
    en: 'Open to opportunities',
  } as Localized<string>,
  initials: 'DS',
}

export const socials: Social[] = [
  { name: 'Email',     href: 'mailto:darmansarbunan@gmail.com',                  icon: 'email' },
  { name: 'LinkedIn',  href: 'https://www.linkedin.com/in/darman-sarbunan/',     icon: 'linkedin' },
  { name: 'Instagram', href: 'https://www.instagram.com/darman_sarbunan',        icon: 'instagram' },
  { name: 'GitHub',    href: 'https://github.com/darmansrb',                     icon: 'github' },
]

export const skills = [
  'Progress 4GL', 'Open Edge', 'React', 'Laravel', 'Kotlin',
  'Golang', 'PHP', 'Docker', 'API', 'PostgreSQL', 'MySQL',
  'ClickHouse', 'Python', 'Linux Server', 'Jetpack Compose',
]

export const projects: Project[] = [
  {
    title: 'Qris Event NTT',
    desc: {
      id: 'Layanan pembayaran digital berbasis QRIS yang dirancang khusus untuk event — menerima pembayaran tiket, registrasi, dan transaksi booth melalui satu QR standar. Dilengkapi pemantauan transaksi real-time, meniadakan uang tunai, meningkatkan keamanan, dan memudahkan pengelolaan pendapatan event secara transparan.',
      en: 'A QRIS-based digital payment service built specifically for events. Lets organizers accept ticket payments, registrations, and booth transactions through one standard QR — with real-time transaction monitoring that removes the need for cash, improves security, and makes revenue tracking transparent and efficient.',
    },
    stack: ['Kotlin', 'PHP', 'API'],
    color: 'pink',
  },
  {
    title: 'Door To Door BPAD NTT',
    desc: {
      id: 'Aplikasi pendataan lapangan dengan dukungan offline untuk berbagai wilayah. Pengguna dapat mencatat informasi penting langsung di lokasi dan melakukan sinkronisasi saat kembali online — menjaga akurasi data di area dengan keterbatasan jaringan.',
      en: 'An offline-first field data collection and management app for regional use. Lets users record important information on-site even without internet, then sync and upload once back online. Keeps the data pipeline accurate and reliable in low-connectivity areas.',
    },
    stack: ['Kotlin', 'PHP', 'API'],
    link: 'https://play.google.com/store/apps/details?id=com.darman.dortodor',
    color: 'mint',
  },
  {
    title: 'Pembayaran E-Wallet Bank NTT (EDC)',
    desc: {
      id: 'Aplikasi pada perangkat EDC Bank NTT yang mendukung penerimaan pembayaran non-tunai dari berbagai layanan e-wallet. Memungkinkan merchant bertransaksi cepat, aman, dan terintegrasi langsung dengan sistem perbankan.',
      en: 'An EDC-based application that supports cashless payment acceptance from multiple e-wallet services on Bank NTT’s EDC devices. Lets merchants run payment transactions fast, securely, and integrated directly with the banking system.',
    },
    stack: ['Progress 4GL'],
    color: 'yellow',
  },
  {
    title: 'UNTAS Mobile',
    desc: {
      id: 'Pendataan keanggotaan dengan fitur input data secara offline maupun online ketika upload data — fleksibel untuk digunakan di lapangan dengan keterbatasan jaringan, dan otomatis sinkron saat kembali online.',
      en: 'Membership data collection app with both offline input and online data upload — flexible enough to use in the field with limited connectivity, and syncs automatically when back online.',
    },
    stack: ['Kotlin', 'Jetpack Compose', 'PHP', 'Laravel', 'API'],
    link: 'https://play.google.com/store/apps/details?id=com.molucassdev.untasmobile',
    color: 'peach',
  },
]

export const experiences: Experience[] = [
  {
    role: 'Programmer',
    company: 'Bank NTT',
    period: {
      id: 'Sep 2024 — Sekarang',
      en: 'Sep 2024 — Present',
    },
    location: 'NTT, Indonesia',
    bullets: {
      id: [
        'Mengembangkan dan memelihara sistem aplikasi perbankan yang terintegrasi dengan core banking.',
        'Membangun API dan integrasi layanan untuk mendukung proses transaksi dan operasional bank.',
        'Mendukung pengembangan aplikasi web dan mobile sesuai kebutuhan layanan digital Bank NTT.',
      ],
      en: [
        'Develop and maintain banking application systems integrated with the core banking platform.',
        'Build APIs and service integrations to support transaction processing and bank operations.',
        'Support web and mobile application development to meet Bank NTT’s digital service needs.',
      ],
    },
    color: 'pink',
  },
  {
    role: 'Programmer',
    company: 'BPAD Provinsi NTT',
    period: {
      id: 'Agu 2020 — Agu 2024',
      en: 'Aug 2020 — Aug 2024',
    },
    location: 'NTT, Indonesia',
    bullets: {
      id: [
        'Mengembangkan dan memelihara sistem pembayaran pajak kendaraan daerah.',
        'Memelihara jaringan server dan database untuk memastikan ketersediaan layanan.',
        'Berkolaborasi dengan pihak ketiga untuk integrasi sistem pembayaran online.',
      ],
      en: [
        'Developed and maintained the regional vehicle-tax payment system.',
        'Maintained server and database infrastructure to keep services available and reliable.',
        'Collaborated with third parties on online payment system integrations.',
      ],
    },
    color: 'mint',
  },
  {
    role: 'Teknisi Indihome',
    company: 'Telkom Akses',
    period: {
      id: 'Nov 2019 — Jul 2020',
      en: 'Nov 2019 — Jul 2020',
    },
    location: 'NTT, Indonesia',
    bullets: {
      id: [
        'Memasang dan mengonfigurasi layanan Indihome untuk pelanggan baru.',
        'Memberikan dukungan teknis dan pemecahan masalah kepada pelanggan.',
        'Melakukan pemeliharaan rutin pada jaringan dan perangkat keras.',
      ],
      en: [
        'Installed and configured Indihome service for new customers.',
        'Provided technical support and troubleshooting for end customers.',
        'Performed routine maintenance on network and hardware.',
      ],
    },
    color: 'yellow',
  },
]

export const educations: Education[] = [
  {
    school: 'STIKOM Uyelindo Kupang',
    degree: 'S1 Teknik Informatika',
    period: '2014 — 2018',
    notes: {
      id: 'Fokus pada pengembangan perangkat lunak. Menyelesaikan tugas akhir di bidang sistem informasi dan aktif membangun aplikasi selama masa perkuliahan.',
      en: 'Focused on software development. Completed a final project in information systems and built hands-on experience shipping apps throughout college.',
    },
    color: 'peach',
  },
  {
    school: 'BNSP',
    degree: 'Sertifikasi Kompetensi Programmer',
    period: '2023',
    notes: {
      id: 'Sertifikasi kompetensi nasional di bidang pengembangan perangkat lunak — mencakup pengembangan aplikasi, pemrograman, dan pengujian sistem.',
      en: 'National competency certification in software development — covering application development, programming, and system testing.',
    },
    color: 'mint',
  },
]
