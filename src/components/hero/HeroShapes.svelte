<script lang="ts">
  import { tweened } from 'svelte/motion';
  import { cubicInOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import HeroPolygon from './HeroPolygon.svelte';

  const maxHeight = writable(200);

  const scrollY = writable(window.scrollY);
  const windowWidth = writable(window.innerWidth);
  const windowHeight = writable(window.innerHeight);

  const scrollYRelative = tweened(0, {
    duration: 500,
    easing: cubicInOut,
  });

  onMount(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
      scrollYRelative.set(Math.min($scrollY / $windowHeight, 1));
    };
    const handleResize = () => {
      windowWidth.set(window.innerWidth);
      windowHeight.set(window.innerHeight);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  });
</script>

<div>
  <div>Shapes {$scrollY} ({$scrollYRelative}) {$windowWidth}</div><br />
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height={$maxHeight}>
    <HeroPolygon scrollYRelative={scrollYRelative} windowWidth={$windowWidth} baseHeight={$maxHeight} idx={2} />
    <HeroPolygon scrollYRelative={scrollYRelative} windowWidth={$windowWidth} baseHeight={$maxHeight} idx={1} />
    <HeroPolygon scrollYRelative={scrollYRelative} windowWidth={$windowWidth} baseHeight={$maxHeight} idx={0} />
  </svg>
</div>
