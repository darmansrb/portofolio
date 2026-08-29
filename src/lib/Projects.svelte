<script lang="ts">
  import { projects } from './data'
  import { t, locale } from './i18n'
  import Icon from './Icon.svelte'

  const palette: Record<string, string> = {
    pink:   'var(--accent)',
    mint:   'var(--accent-5)',
    yellow: 'var(--accent-4)',
    peach:  'var(--accent-2)',
  }
</script>

<section id="projects" class="section">
  <div class="section-title">
    <span class="num">02</span>
    <h2>{$t.projects.section}</h2>
    <span class="line"></span>
  </div>

  <div class="grid">
    {#each projects as p}
      <article class="brutal-card card" style:--accent-color={palette[p.color]}>
        <div class="thumb" aria-hidden="true">
          <span class="thumb-dot a"></span>
          <span class="thumb-dot b"></span>
          <span class="thumb-dot c"></span>
        </div>

        <div class="body">
          <h3>{p.title}</h3>
          <p>{p.desc[$locale]}</p>

          <ul class="tags" role="list">
            {#each p.stack as s}
              <li class="brutal-tag">{s}</li>
            {/each}
          </ul>

          <div class="links">
            {#if p.link}
              <a class="brutal-btn small" href={p.link} target="_blank" rel="noreferrer">
                {$t.projects.live} <Icon name="external" size={16} />
              </a>
            {/if}
            {#if p.repo}
              <a class="brutal-btn small ghost" href={p.repo} target="_blank" rel="noreferrer">
                {$t.projects.source} <Icon name="github-mark" size={16} />
              </a>
            {/if}
            {#if !p.link && !p.repo}
              <span class="private-pill">
                <Icon name="github-mark" size={14} /> {$t.projects.private}
              </span>
            {/if}
          </div>
        </div>
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
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 0;
  }

  .thumb {
    height: 140px;
    background: var(--accent-color);
    border-bottom: 3px solid var(--border);
    position: relative;
    overflow: hidden;
  }
  .thumb-dot {
    position: absolute;
    border: 3px solid var(--border);
    border-radius: 50%;
  }
  .thumb-dot.a { width: 80px; height: 80px; background: #fff; top: 20px; left: 24px; }
  .thumb-dot.b { width: 46px; height: 46px; background: var(--accent-4); bottom: 18px; right: 60px; }
  .thumb-dot.c { width: 26px; height: 26px; background: var(--accent); top: 30px; right: 30px; }

  .body {
    padding: 22px;
    display: flex; flex-direction: column; gap: 12px;
  }
  .body p { color: var(--ink-soft); }

  .tags { list-style: none; padding: 0; margin: 4px 0 0; display: flex; flex-wrap: wrap; gap: 6px; }

  .links { display: flex; gap: 10px; margin-top: 6px; flex-wrap: wrap; align-items: center; }
  .brutal-btn.small { padding: 6px 12px; font-size: 0.85rem; }
  .brutal-btn.ghost { background: #fff; }

  .private-pill {
    display: inline-flex; align-items: center; gap: 6px;
    font-family: var(--mono);
    font-size: 0.78rem; font-weight: 700;
    color: var(--ink);
    background: var(--accent-2);
    border: 2.5px solid var(--border);
    border-radius: 8px;
    padding: 4px 10px;
  }
</style>
