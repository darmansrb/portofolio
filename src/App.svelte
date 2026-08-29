<script lang="ts">
  import Navbar from './lib/Navbar.svelte'
  import About from './lib/About.svelte'
  import Projects from './lib/Projects.svelte'
  import Experience from './lib/Experience.svelte'
  import Education from './lib/Education.svelte'
  import Footer from './lib/Footer.svelte'
</script>

<div id="top"></div>
<Navbar />

<main>
  <About />
  <Projects />
  <Experience />
  <Education />
</main>

<Footer />

<style>
  main {
    display: block;
  }
</style>
