<script lang="ts">
  import { locale, LOCALES, type Locale } from './i18n'

  function pick(l: Locale) { locale.set(l) }
</script>

<div class="switch" role="group" aria-label="Language">
  {#each LOCALES as l}
    <button
      type="button"
      class:active={$locale === l.code}
      onclick={() => pick(l.code)}
      aria-pressed={$locale === l.code}
      title={l.label}
    >
      <span class="flag" aria-hidden="true">{l.flag}</span>
      <span class="code">{l.label}</span>
    </button>
  {/each}
</div>

<style>
  .switch {
    display: inline-flex;
    background: #fff;
    border: 2.5px solid var(--border);
    border-radius: 10px;
    padding: 2px;
    box-shadow: 3px 3px 0 0 var(--border);
  }
  button {
    appearance: none;
    border: 0;
    background: transparent;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;
    border-radius: 8px;
    font-family: var(--mono);
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--ink);
    transition: background 0.12s ease, color 0.12s ease;
  }
  button:hover { background: var(--accent-4); }
  button.active {
    background: var(--accent);
    color: #fff;
  }
  .flag { font-size: 0.95rem; line-height: 1; }
  .code { letter-spacing: 0.04em; }
</style>
