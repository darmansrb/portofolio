import { writable, derived, type Readable } from 'svelte/store'

export type Locale = 'id' | 'en'
export const LOCALES: { code: Locale; label: string; flag: string }[] = [
  { code: 'id', label: 'ID', flag: '🇮🇩' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
]

const STORAGE_KEY = 'portfolio:locale'

function detectInitial(): Locale {
  if (typeof window === 'undefined') return 'id'
  // Always default to Indonesian unless the user has explicitly chosen otherwise.
  const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null
  if (saved === 'id' || saved === 'en') return saved
  return 'id'
}

export const locale = writable<Locale>(detectInitial())

if (typeof window !== 'undefined') {
  locale.subscribe((v) => {
    try { window.localStorage.setItem(STORAGE_KEY, v) } catch {}
    document.documentElement.lang = v
  })
}

// ---------------- dictionary ----------------

type Dict = {
  nav: { about: string; projects: string; experience: string; education: string; contact: string; toggleMenu: string }
  about: {
    section: string
    status: string
    hello: string            // "Hi, I'm {name}."
    headlineA: string        // before <span class="hl alt">
    headlineB: string        // after alt
    tagline: string
    ctaPrimary: string
    ctaSecondary: string
    metaBasedIn: string
    metaStack: string
    metaCoffee: string
    bioTitle: string
    skillsTitle: string
  }
  projects: { section: string; live: string; source: string; private: string }
  experience: { section: string }
  education:  { section: string }
  footer: {
    ctaTitleA: string        // before <span class="hl">
    ctaTitleB: string        // hl word
    ctaDesc: string
    copy: string             // contains {year} and {name}
  }
}

const dict: Record<Locale, Dict> = {
  id: {
    nav: {
      about: 'Tentang',
      projects: 'Proyek',
      experience: 'Pengalaman',
      education: 'Pendidikan',
      contact: 'Hubungi Saya',
      toggleMenu: 'Buka menu',
    },
    about: {
      section: 'Tentang',
      status: 'Terbuka untuk peluang',
      hello: 'Halo, saya {name}.',
      headlineA: 'Saya membangun hal {hl} untuk web.',
      headlineB: 'bermanfaat',
      tagline: 'Full-Stack Developer dengan fokus backend — API yang bersih, integrasi yang aman, dan sistem yang siap berkembang.',
      ctaPrimary: 'Lihat karya saya',
      ctaSecondary: 'Hubungi saya',
      metaBasedIn: 'Berdomisili di',
      metaStack: 'Stack utama',
      metaCoffee: 'Kopi',
      bioTitle: 'Sedikit tentang saya',
      skillsTitle: 'Teknologi yang saya pakai',
    },
    projects: { section: 'Proyek', live: 'Live', source: 'Source', private: 'Private' },
    experience: { section: 'Pengalaman' },
    education:  { section: 'Pendidikan' },
    footer: {
      ctaTitleA: 'Ayo bangun sesuatu yang',
      ctaTitleB: 'berdampak',
      ctaDesc: 'Punya proyek, peluang kerja, atau sekadar ingin menyapa? Inbox saya selalu terbuka.',
      copy: '© {year} {name}.',
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact me',
      toggleMenu: 'Toggle menu',
    },
    about: {
      section: 'About',
      status: 'Open to opportunities',
      hello: 'Hi, I’m {name}.',
      headlineA: 'I build {hl} things for the web.',
      headlineB: 'playful',
      tagline: 'Full-Stack Developer with a backend focus — clean APIs, secure integrations, and systems that scale.',
      ctaPrimary: 'See my work',
      ctaSecondary: 'Get in touch',
      metaBasedIn: 'Based in',
      metaStack: 'Stack',
      metaCoffee: 'Coffee',
      bioTitle: 'A bit about me',
      skillsTitle: 'Things I work with',
    },
    projects: { section: 'Projects', live: 'Live', source: 'Source', private: 'Private' },
    experience: { section: 'Experience' },
    education:  { section: 'Education' },
    footer: {
      ctaTitleA: 'Let’s build something',
      ctaTitleB: 'loud',
      ctaDesc: 'Have a project, a job opportunity, or just want to say hi? My inbox is always open.',
      copy: '© {year} {name}.',
    },
  },
}

function interpolate(template: string, vars: Record<string, string | number> = {}): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`))
}

export const t: Readable<Dict> = derived(locale, ($l) => dict[$l])

/** Reactive helper — returns a readable string with vars interpolated. */
export function tpl(key: string, vars: Record<string, string | number> = {}): Readable<string> {
  return derived(locale, ($l) => tt($l, key as keyof Dict, vars))
}

export function tt(l: Locale, key: string, vars?: Record<string, string | number>): string {
  const path = key.split('.')
  let cur: unknown = dict[l]
  for (const p of path) {
    if (cur && typeof cur === 'object' && p in (cur as object)) {
      cur = (cur as Record<string, unknown>)[p]
    } else {
      return key
    }
  }
  if (typeof cur !== 'string') return key
  return vars ? interpolate(cur, vars) : cur
}
