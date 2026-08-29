<script lang="ts">
  type IconName =
    | 'email' | 'linkedin' | 'instagram' | 'github'
    | 'arrow' | 'external' | 'github-mark'
    | 'code' | 'briefcase' | 'graduation' | 'sparkles' | 'globe'
    | 'logo'

  let { name, size = 20 }: { name: IconName; size?: number } = $props()
</script>

{#if name === 'email'}
  <!-- Tabler mail (from dthrees.my.id) -->
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
    <path d="M3 7l9 6l9 -6" />
  </svg>
{:else if name === 'linkedin'}
  <!-- from dthrees.my.id (Tabler brand-linkedin) -->
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M8 11v5" />
    <path d="M8 8v.01" />
    <path d="M12 16v-5" />
    <path d="M16 16v-3a2 2 0 1 0 -4 0" />
    <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
  </svg>
{:else if name === 'instagram'}
  <!-- from dthrees.my.id (Tabler brand-instagram) -->
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37a4 4 0 1 1 -7.37 -2.73a4 4 0 0 1 7.37 2.73z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
{:else if name === 'github'}
  <!-- from dthrees.my.id (Tabler brand-github) -->
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
  </svg>
{:else if name === 'arrow'}
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M5 12h14" /><path d="m13 5 7 7-7 7" />
  </svg>
{:else if name === 'external'}
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M7 17 17 7" /><path d="M17 7H7" /><path d="M17 7v10" />
  </svg>
{:else if name === 'github-mark'}
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.16c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
  </svg>
{:else if name === 'code'}
  <!-- Tabler code -->
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="m8 8-4 4 4 4" /><path d="m16 8 4 4-4 4" /><path d="m12 4-2 16" />
  </svg>
{:else if name === 'briefcase'}
  <!-- Tabler briefcase -->
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M3 7h18v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
{:else if name === 'graduation'}
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M22 10 12 5 2 10l10 5 10-5z" /><path d="M6 12v5a6 6 0 0 0 12 0v-5" />
  </svg>
{:else if name === 'sparkles'}
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z" />
    <path d="M19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9z" />
  </svg>
{:else if name === 'globe'}
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" /><path d="M12 3a14 14 0 0 1 0 18" /><path d="M12 3a14 14 0 0 0 0 18" />
  </svg>
{:else if name === 'logo'}
  <!-- dthrees.my.id favicon (Darman monogram) -->
  <svg width={size} height={size} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <polygon points="0 30.1184211 0 22.9226974 16 14 16 21.5657895 6.00369686 26.3766447 6.00369686 26.6644737 16 31.4753289 16 39" fill="currentColor" />
    <polygon points="31 7 23.9756098 43 19 43 26.0243902 7" fill="currentColor" />
    <polygon points="50 30.1184211 34 39 34 31.4753289 44.025878 26.6644737 44.025878 26.3766447 34 21.5657895 34 14 50 22.9226974" fill="currentColor" />
  </svg>
{/if}
