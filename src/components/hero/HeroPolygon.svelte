<script lang="ts">
  import type { Tweened } from "svelte/motion";
  import { writable } from "svelte/store";

  export let scrollYRelative: Tweened<number>;
  export let windowWidth: number;
  export let baseHeight: number;
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
    return windowWidth * offset;
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
  const y1 = writable(baseHeight);
  const x2 = writable(windowWidth - getWidthOffset());
  const y2 = writable(0 + (baseHeight * $scrollYRelative));
  const x3 = writable(windowWidth - getWidthOffset());
  const y3 = writable(baseHeight);

  scrollYRelative.subscribe(v => {
    y2.set(0 + (baseHeight * v) + (baseHeight * getHeightModifier()));
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

<polygon fill={$color} points="{$x1},{$y1} {$x2},{$y2} {$x3},{$y3}" />