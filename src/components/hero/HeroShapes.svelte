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
  const mousePos = writable({ x: 0, y: 0 });

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
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.set({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });
</script>

<svg xmlns="http://www.w3.org/2000/svg" width="100%" height={$maxHeight}>
  <HeroPolygon scrollYRelative={scrollYRelative} windowWidth={windowWidth} windowHeight={windowHeight} baseHeight={maxHeight} idx={2} mousePos={mousePos} />
  <HeroPolygon scrollYRelative={scrollYRelative} windowWidth={windowWidth} windowHeight={windowHeight} baseHeight={maxHeight} idx={1} mousePos={mousePos} />
  <HeroPolygon scrollYRelative={scrollYRelative} windowWidth={windowWidth} windowHeight={windowHeight} baseHeight={maxHeight} idx={0} mousePos={mousePos} />
</svg>
