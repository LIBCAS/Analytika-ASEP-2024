<script>
	import { onMount } from "svelte";
  let view  = false;
  onMount(() => {
    view  = true;
  });
</script>
{#if (view)}
  <div class="c-loader1"></div>
{/if}
