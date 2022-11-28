<script>
  export let links;

  let showMenu = false;

  const toggleMenu = () => showMenu = !showMenu;
</script>

<button on:click={toggleMenu} aria-controls="mobile-nav-links">Menu</button>
{#if showMenu}
  <nav class="fixed left-0 right-0 h-full flex flex-col gap-2 nav-item transition-all" id="mobile-nav-links" aria-expanded="false">
    {#each links as link}
      <a href={link.href}>{link.title}</a>
    {/each}
  </nav>
{/if}