<script lang="ts">
  import { profile } from './data'
  import { t, locale } from './i18n'
  import LanguageSwitcher from './LanguageSwitcher.svelte'
  import Icon from './Icon.svelte'

  const links = $derived([
    { key: 'about',      href: '#about' },
    { key: 'projects',   href: '#projects' },
    { key: 'experience', href: '#experience' },
    { key: 'education',  href: '#education' },
  ] as const)

  let mobileOpen = $state(false)

  function toggle() { mobileOpen = !mobileOpen }
  function close()  { mobileOpen = false }
</script>

<header class="nav-wrap">
  <nav class="nav">
    <a class="brand" href="#top" onclick={close} aria-label="Home">
      <span class="brand-mark" aria-hidden="true">
        <Icon name="logo" size={22} />
      </span>
      <span class="brand-name">{profile.name}</span>
    </a>

    <ul class="nav-links" role="list">
      {#each links as l}
        <li><a href={l.href}>{$t.nav[l.key]}</a></li>
      {/each}
    </ul>

    <div class="nav-tools">
      <LanguageSwitcher />
      <a class="brutal-btn nav-cta" href="#contact" onclick={close}>
        {$t.nav.contact}
      </a>
    </div>

    <button
      class="hamburger"
      aria-label={$t.nav.toggleMenu}
      aria-expanded={mobileOpen}
      onclick={toggle}
    >
      <span class:open={mobileOpen}></span>
      <span class:open={mobileOpen}></span>
      <span class:open={mobileOpen}></span>
    </button>
  </nav>

  {#if mobileOpen}
    <div class="mobile-panel">
      <ul role="list">
        {#each links as l}
          <li><a href={l.href} onclick={close}>{$t.nav[l.key]}</a></li>
        {/each}
        <li class="lang-row">
          <LanguageSwitcher />
        </li>
        <li>
          <a class="brutal-btn" href="#contact" onclick={close}>{$t.nav.contact}</a>
        </li>
      </ul>
    </div>
  {/if}
</header>

<style>
  .nav-wrap {
    position: sticky;
    top: 16px;
    z-index: 50;
    margin: 16px auto 0;
    max-width: 1200px;
    padding: 0 24px;
  }

  .nav {
    display: flex;
    align-items: center;
    gap: 16px;
    background: #fff;
    border: 3px solid var(--border);
    border-radius: 14px;
    box-shadow: var(--shadow);
    padding: 10px 14px;
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: var(--ink);
    font-weight: 700;
  }
  .brand:hover { color: var(--ink); }

  .brand-mark {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px; height: 36px;
    background: var(--accent);
    color: #fff;
    border: 2.5px solid var(--border);
    border-radius: 8px;
    flex-shrink: 0;
  }
  .brand-name { font-family: var(--display); font-size: 1.05rem; }

  .nav-links {
    display: flex;
    gap: 6px;
    margin: 0 0 0 auto;
    padding: 0;
    list-style: none;
  }
  .nav-links a {
    display: inline-block;
    padding: 6px 12px;
    border-radius: 8px;
    color: var(--ink);
    font-weight: 600;
    text-decoration: none;
    transition: background 0.12s ease, color 0.12s ease;
  }
  .nav-links a:hover {
    background: var(--accent-4);
    color: var(--ink);
  }

  .nav-tools { display: inline-flex; align-items: center; gap: 10px; }
  .nav-cta { padding: 8px 14px; font-size: 0.9rem; }

  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 38px; height: 38px;
    background: var(--accent-4);
    border: 2.5px solid var(--border);
    border-radius: 8px;
    cursor: pointer;
    padding: 0 8px;
  }
  .hamburger span {
    display: block;
    height: 3px;
    background: var(--ink);
    border-radius: 2px;
    transition: transform 0.18s ease, opacity 0.18s ease;
  }
  .hamburger span.open:nth-child(1) { transform: translateY(8px) rotate(45deg); }
  .hamburger span.open:nth-child(2) { opacity: 0; }
  .hamburger span.open:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

  .mobile-panel {
    margin-top: 10px;
    background: #fff;
    border: 3px solid var(--border);
    border-radius: 14px;
    box-shadow: var(--shadow);
    padding: 12px;
  }
  .mobile-panel ul {
    list-style: none;
    margin: 0; padding: 0;
    display: flex; flex-direction: column; gap: 4px;
  }
  .mobile-panel a {
    display: block;
    padding: 10px 12px;
    border-radius: 8px;
    color: var(--ink);
    text-decoration: none;
    font-weight: 600;
  }
  .mobile-panel a:not(.brutal-btn):hover { background: var(--accent-4); }
  .mobile-panel .brutal-btn { width: 100%; justify-content: center; margin-top: 6px; }
  .mobile-panel .lang-row { padding: 6px 4px; }

  @media (max-width: 900px) {
    .nav-links { display: none; }
    .nav-tools { display: none; }
    .hamburger { display: flex; }
  }
</style>
