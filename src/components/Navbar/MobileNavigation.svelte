<script>
  export let links;

  let showMenu = false;

  const toggleMenu = () => showMenu = !showMenu;
</script>

<button class="menu-controller" on:click={toggleMenu} aria-controls="mobile-nav-links" aria-expanded={showMenu}>
  <svg class="hamburger" viewBox="-10 -10 120 120" width="32">
    <path
      class="line"
      stroke-width="10"
      stroke-linecap="round"
      stroke-joincap="round"
      d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70" />
  </svg>
</button>
{#if showMenu}
  <nav class="fixed left-0 right-0 h-full flex flex-col gap-2 nav-item transition-all" id="mobile-nav-links">
    {#each links as link}
      <a href={link.href}>{link.title}</a>
    {/each}
  </nav>
{/if}

<style>
  .menu-controller {
    @apply border-2 border-zinc-200 rounded-md overflow-hidden transition-all;
  }
  .hamburger {
    @apply fill-none stroke-zinc-100 transition-all duration-700;
  }
  .hamburger .line {
    @apply transition-all duration-1000;
    stroke-dasharray: 60 31 60 1000;
  }
  .menu-controller[aria-expanded="true"] .hamburger {
    translate: 2px -2px;
    rotate: 0.125turn;
  }
  .menu-controller[aria-expanded="true"] .hamburger .line {
    stroke-dasharray: 60 105 60 300;
    stroke-dashoffset: -90;
  }
</style>