<script lang="ts">
  import { experiences } from './data'
  import { t, locale } from './i18n'

  const palette: Record<string, string> = {
    pink:   'var(--accent)',
    mint:   'var(--accent-5)',
    yellow: 'var(--accent-4)',
    peach:  'var(--accent-2)',
  }
</script>

<section id="experience" class="section">
  <div class="section-title">
    <span class="num">03</span>
    <h2>{$t.experience.section}</h2>
    <span class="line"></span>
  </div>

  <ol class="timeline" role="list">
    {#each experiences as e}
      <li class="row">
        <div class="rail" aria-hidden="true">
          <span class="dot" style:background={palette[e.color]}></span>
        </div>

        <article class="brutal-card card" style:--accent-color={palette[e.color]}>
          <header>
            <div>
              <h3>{e.role}</h3>
              <p class="company">{e.company} · <span class="loc">{e.location}</span></p>
            </div>
            <span class="period">{e.period[$locale]}</span>
          </header>
          <ul role="list">
            {#each e.bullets[$locale] as b}
              <li>{b}</li>
            {/each}
          </ul>
        </article>
      </li>
    {/each}
  </ol>
</section>

<style>
  .timeline {
    list-style: none;
    margin: 0; padding: 0;
    display: flex; flex-direction: column;
    gap: 20px;
    position: relative;
  }

  .row {
    display: grid;
    grid-template-columns: 48px 1fr;
    gap: 16px;
    align-items: stretch;
  }

  .rail {
    position: relative;
    display: flex;
    justify-content: center;
    padding-top: 26px;
  }
  .rail::before {
    content: '';
    position: absolute;
    top: 0; bottom: -28px;
    left: 50%;
    width: 4px;
    background: var(--border);
    border-radius: 2px;
    transform: translateX(-50%);
  }
  .row:last-child .rail::before { bottom: 50%; }

  .dot {
    position: relative;
    z-index: 1;
    width: 22px; height: 22px;
    border: 3px solid var(--border);
    border-radius: 50%;
    box-shadow: 3px 3px 0 0 var(--border);
  }

  .card { display: flex; flex-direction: column; gap: 12px; }

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
  }
  h3 { margin-bottom: 4px; }
  .company { font-weight: 600; color: var(--ink-soft); }
  .loc { color: var(--muted); font-weight: 500; }

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

  ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }
  ul li {
    position: relative;
    padding-left: 20px;
    color: var(--ink-soft);
  }
  ul li::before {
    content: '';
    position: absolute;
    left: 0; top: 9px;
    width: 10px; height: 10px;
    background: var(--accent-color);
    border: 2px solid var(--border);
    border-radius: 3px;
    transform: rotate(45deg);
  }
</style>
