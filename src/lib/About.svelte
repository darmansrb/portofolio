<script lang="ts">
  import { profile, skills } from './data'
  import { t, locale, tpl } from './i18n'
  import Icon from './Icon.svelte'

  const helloLine   = $derived(tpl('about.hello',        { name: profile.name }))
  const headlinePre = $derived(tpl('about.headlineA',    { hl: '%%HL%%' }))
  const headlineHl  = $derived($t.about.headlineB)
</script>

<section id="about" class="section">
  <div class="section-title">
    <span class="num">01</span>
    <h2>{$t.about.section}</h2>
    <span class="line"></span>
  </div>

  <div class="grid">
    <div class="brutal-card hero">
      <div class="status">
        <span class="dot"></span>
        {profile.status[$locale]}
      </div>

      <h1>
        {$helloLine}<br />
        {#each $headlinePre.split('%%HL%%') as part, i}
          {#if i === 1}
            <span class="hl alt">{headlineHl}</span>
          {:else}
            {part}
          {/if}
        {/each}
      </h1>

      <p class="tag">{profile.tagline[$locale]}</p>

      <div class="cta-row">
        <a class="brutal-btn" href="#projects">
          {$t.about.ctaPrimary} <Icon name="arrow" size={18} />
        </a>
        <a class="brutal-btn ghost" href="#contact">
          {$t.about.ctaSecondary}
        </a>
      </div>
    </div>

    <div class="brutal-card meta">
      <ul role="list">
        <li>
          <span class="k">{$t.about.metaBasedIn}</span>
          <span class="v">{profile.location}</span>
        </li>
        <li>
          <span class="k">{$t.about.metaStack}</span>
          <span class="v">{skills.slice(0, 5).join(' · ')}</span>
        </li>
        <li>
          <span class="k">{$t.about.metaCoffee}</span>
          <span class="v">{$locale === 'id' ? 'Selalu menyeduh ☕' : 'Always brewing ☕'}</span>
        </li>
      </ul>
    </div>

    <div class="brutal-card bio">
      <h3>{$t.about.bioTitle}</h3>
      <p>{profile.bio[$locale]}</p>
    </div>

    <div class="brutal-card skills">
      <h3>{$t.about.skillsTitle}</h3>
      <ul class="tags" role="list">
        {#each skills as s}
          <li class="brutal-tag">{s}</li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1.6fr 1fr;
    grid-template-areas:
      'hero  meta'
      'hero  skills'
      'bio   bio';
    gap: 20px;
  }

  .hero    { grid-area: hero; padding: 32px; display: flex; flex-direction: column; gap: 18px; }
  .meta    { grid-area: meta; }
  .skills  { grid-area: skills; }
  .bio     { grid-area: bio; }

  .status {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    align-self: flex-start;
    background: var(--accent-5);
    border: 2.5px solid var(--border);
    border-radius: 999px;
    padding: 4px 12px;
    font-family: var(--mono);
    font-size: 0.85rem;
    font-weight: 600;
  }
  .dot {
    width: 10px; height: 10px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 0 3px #fff, 0 0 0 4px var(--border);
  }

  .hero h1 { font-size: clamp(2rem, 4.4vw, 3rem); line-height: 1.1; }
  .hl { background: linear-gradient(180deg, transparent 60%, var(--accent-4) 60%); padding: 0 4px; }
  .hl.alt { background: linear-gradient(180deg, transparent 60%, var(--accent-5) 60%); }

  .tag {
    font-size: 1.1rem;
    color: var(--ink-soft);
    max-width: 52ch;
  }

  .cta-row { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 6px; }
  .brutal-btn.ghost { background: #fff; }

  .meta ul {
    list-style: none;
    margin: 0; padding: 0;
    display: flex; flex-direction: column; gap: 14px;
  }
  .meta li { display: flex; flex-direction: column; gap: 2px; }
  .meta .k {
    font-family: var(--mono);
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--muted);
  }
  .meta .v { font-weight: 600; }

  .tags {
    list-style: none;
    margin: 14px 0 0; padding: 0;
    display: flex; flex-wrap: wrap; gap: 8px;
  }

  @media (max-width: 820px) {
    .grid {
      grid-template-columns: 1fr;
      grid-template-areas: 'hero' 'meta' 'skills' 'bio';
    }
  }
</style>
