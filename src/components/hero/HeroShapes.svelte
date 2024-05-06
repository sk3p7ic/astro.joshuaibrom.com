<script lang="ts">
  import { tweened } from 'svelte/motion';
  import { cubicInOut, linear, quadInOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import HeroPolygon from './HeroPolygon.svelte';

  const SIN_DURATION = 10000;

  const maxHeight = writable(200);

  const scrollY = writable(window.scrollY);
  const windowWidth = writable(window.innerWidth);
  const windowHeight = writable(window.innerHeight);

  const scrollYRelative = tweened(0, {
    duration: 500,
    easing: cubicInOut,
  });

  const sinPos = writable(0);
  const sinuousOffset = tweened(0, {
    duration: SIN_DURATION,
    easing: quadInOut,
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
    const handleSinuous = () => {
      const pis = [
        Math.PI / 4,
        Math.PI / 2,
        (3 * Math.PI) / 4,
        Math.PI,
        (5 * Math.PI) / 4,
        (3 * Math.PI) / 2,
        (7 * Math.PI) / 4,
        2 * Math.PI,
      ];
      let newSinPos = Math.floor(Math.random() * pis.length);
      while (newSinPos === $sinPos || newSinPos + 1 === $sinPos || newSinPos - 1 === $sinPos) {
        newSinPos = Math.floor(Math.random() * pis.length);
      }
      sinPos.set(newSinPos);
      sinuousOffset.set(Math.sin(pis[$sinPos]));
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleSinuous();
    setInterval(handleSinuous, SIN_DURATION);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  });
</script>

<svg xmlns="http://www.w3.org/2000/svg" width="100%" height={$maxHeight}>
  <HeroPolygon scrollYRelative={scrollYRelative} windowWidth={windowWidth} baseHeight={maxHeight} idx={2} sinuousOffset={sinuousOffset} />
  <HeroPolygon scrollYRelative={scrollYRelative} windowWidth={windowWidth} baseHeight={maxHeight} idx={1} sinuousOffset={sinuousOffset} />
  <HeroPolygon scrollYRelative={scrollYRelative} windowWidth={windowWidth} baseHeight={maxHeight} idx={0} sinuousOffset={sinuousOffset} />
</svg>
