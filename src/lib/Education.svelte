<script lang="ts">
  import { educations } from './data'
  import { t, locale } from './i18n'

  const palette: Record<string, string> = {
    pink:   'var(--accent)',
    mint:   'var(--accent-5)',
    yellow: 'var(--accent-4)',
    peach:  'var(--accent-2)',
  }
</script>

<section id="education" class="section">
  <div class="section-title">
    <span class="num">04</span>
    <h2>{$t.education.section}</h2>
    <span class="line"></span>
  </div>

  <div class="grid">
    {#each educations as e}
      <article class="brutal-card card" style:--accent-color={palette[e.color]}>
        <div class="badge" aria-hidden="true">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 10 12 5 2 10l10 5 10-5Z" />
            <path d="M6 12v5a6 6 0 0 0 12 0v-5" />
          </svg>
        </div>
        <div>
          <h3>{e.school}</h3>
          <p class="degree">{e.degree}</p>
          {#if e.notes}<p class="notes">{e.notes[$locale]}</p>{/if}
        </div>
        <span class="period">{e.period}</span>
      </article>
    {/each}
  </div>
</section>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  @media (max-width: 760px) {
    .grid { grid-template-columns: 1fr; }
  }

  .card {
    display: grid;
    grid-template-columns: 60px 1fr auto;
    gap: 16px;
    align-items: center;
  }

  .badge {
    width: 60px; height: 60px;
    display: inline-flex; align-items: center; justify-content: center;
    background: var(--accent-color);
    color: var(--ink);
    border: 3px solid var(--border);
    border-radius: 12px;
    box-shadow: 4px 4px 0 0 var(--border);
  }

  h3 { margin-bottom: 4px; }
  .degree { font-weight: 600; color: var(--ink-soft); }
  .notes  { color: var(--muted); font-size: 0.95rem; margin-top: 6px; }

  .period {
    font-family: var(--mono);
    font-size: 0.85rem;
    font-weight: 600;
    background: var(--accent-color);
    border: 2.5px solid var(--border);
    border-radius: 8px;
    padding: 4px 10px;
    white-space: nowrap;
  }

  @media (max-width: 520px) {
    .card {
      grid-template-columns: 60px 1fr;
    }
    .period { grid-column: 1 / -1; justify-self: start; }
  }
</style>
