<script lang="ts">
  import type { Tweened } from "svelte/motion";
  import { writable, type Writable } from "svelte/store";

  export let scrollYRelative: Tweened<number>;
  export let windowWidth: Writable<number>;
  export let baseHeight: Writable<number>;
  export let sinuousOffset: Tweened<number>;
  export let idx: number;

  const getWidthOffset = () => {
    let offset: number;
    switch (idx) {
      case 1:
        offset = 0.1;
        break;
      case 2:
        offset = 0.2;
        break;
      default:
        offset = 0;
    }
    return $windowWidth * offset;
  };

  function getHeightModifier() {
    switch (idx) {
      case 1:
        return 0.1 * (1 - $scrollYRelative);
      case 2:
        return 0.0 * (1 - $scrollYRelative);
      default:
        return 0.2 * (1 - $scrollYRelative);
    }
  }

  const x1 = writable(0);
  const y1 = writable($baseHeight);
  const x2 = writable($windowWidth - getWidthOffset());
  const y2 = writable(0 + ($baseHeight * $scrollYRelative));
  const x3 = writable($windowWidth - getWidthOffset());
  const y3 = writable($baseHeight);

  scrollYRelative.subscribe(v => {
    y2.set(0 + ($baseHeight * v) + ($baseHeight * getHeightModifier()));
  });
  windowWidth.subscribe(v => {
    x2.set(v - getWidthOffset());
    x3.set(v - getWidthOffset());
  });
  sinuousOffset.subscribe(v => {
    if (idx !== 0) {
      const mod = idx === 1 ? 0.05 : 0.1;
      x2.set($windowWidth - getWidthOffset() + ($windowWidth * v * mod));
      x3.set($windowWidth - getWidthOffset() + ($windowWidth * v * mod));
    }
    y2.set(0 + ($baseHeight * $scrollYRelative) + ($baseHeight * getHeightModifier()) + ($baseHeight * v * 0.1));
  });

  const color = writable("");
  switch (idx) {
    case 1:
      color.set("#EE5396");
      break;
    case 2:
      color.set("#BE95FF");
      break;
    default:
      color.set("#FF7EB6");
  }
</script>

<polygon fill={$color} points="{$x1},{$y1} {$x2},{$y2 + 24} {$x3},{$y3 + 24}" />