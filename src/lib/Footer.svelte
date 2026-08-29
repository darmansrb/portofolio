<script lang="ts">
  import { socials, profile } from './data'
  import { t, locale, tpl } from './i18n'
  import Icon from './Icon.svelte'

  const ctaTitle = $derived(tpl('footer.ctaTitleA', { hl: '%%HL%%' }))
  const ctaHl    = $derived($t.footer.ctaTitleB)
  const copy     = $derived(tpl('footer.copy', { year: new Date().getFullYear(), name: profile.name }))
</script>

<footer id="contact" class="footer">
  <div class="brutal-card cta">
    <h2>
      {#each $ctaTitle.split('%%HL%%') as part, i}
        {#if i === 1}
          <span class="hl">{ctaHl}</span>
        {:else}
          {part}
        {/if}
      {/each}
    </h2>
    <p>{$t.footer.ctaDesc}</p>
    <a class="brutal-btn" href={socials[0].href}>
      <Icon name="email" size={18} /> {socials[0].href.replace('mailto:', '')}
    </a>
  </div>

  <div class="meta-row">
    <div class="brand">
      <span class="brand-mark" aria-hidden="true">
        <Icon name="logo" size={26} />
      </span>
      <div>
        <strong>{profile.name}</strong>
        <p>{profile.location}</p>
      </div>
    </div>

    <ul class="socials" role="list">
      {#each socials as s}
        <li>
          <a class="social" href={s.href} target={s.href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer" aria-label={s.name}>
            <Icon name={s.icon} size={20} />
            <span>{s.name}</span>
          </a>
        </li>
      {/each}
    </ul>
  </div>

  <p class="copy">{$copy}</p>
</footer>

<style>
  .footer {
    margin: 40px 0 32px;
    display: flex; flex-direction: column; gap: 28px;
  }

  .cta {
    background: var(--accent-4);
    display: flex; flex-direction: column; gap: 14px;
    align-items: flex-start;
    padding: 36px;
  }
  .cta h2 { font-size: clamp(1.6rem, 3.5vw, 2.4rem); }
  .cta .hl { background: #fff; padding: 0 6px; border: 3px solid var(--border); border-radius: 6px; }
  .cta p { max-width: 56ch; color: var(--ink-soft); }
  .cta .brutal-btn { background: #fff; }

  .meta-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
    border-top: 4px dashed var(--border);
    padding-top: 24px;
  }

  .brand { display: inline-flex; align-items: center; gap: 12px; }
  .brand-mark {
    display: inline-flex; align-items: center; justify-content: center;
    width: 44px; height: 44px;
    background: var(--accent-5);
    color: var(--ink);
    border: 3px solid var(--border);
    border-radius: 10px;
    box-shadow: 4px 4px 0 0 var(--border);
  }
  .brand strong { display: block; font-family: var(--display); }
  .brand p { color: var(--muted); font-size: 0.9rem; }

  .socials {
    list-style: none; margin: 0; padding: 0;
    display: flex; flex-wrap: wrap; gap: 10px;
  }

  .social {
    display: inline-flex; align-items: center; gap: 8px;
    background: #fff;
    border: 2.5px solid var(--border);
    border-radius: 10px;
    padding: 8px 14px;
    color: var(--ink);
    font-weight: 600;
    text-decoration: none;
    box-shadow: 3px 3px 0 0 var(--border);
    transition: transform 0.12s ease, box-shadow 0.12s ease, background 0.12s ease;
  }
  .social:hover {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0 0 var(--border);
    background: var(--accent-5);
    color: var(--ink);
  }

  .copy {
    text-align: center;
    color: var(--muted);
    font-family: var(--mono);
    font-size: 0.85rem;
  }
</style>
