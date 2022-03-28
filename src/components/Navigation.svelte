<script lang="ts">
  import { page } from '$app/stores';

  const list = [{
    label: 'Home',
    path: '/',
  }, {
    label: 'Users',
    path: '/users',
  }];
  $: current_page = '/' + $page.url.pathname.split('/')[1];

</script>

<ul>
  {#each list as item}
    <li>
      <a
        class="item-list"
        class:active={current_page === item.path}
        href={item.path}
      >
        {item.label}
      </a>
    </li>
  {/each}
</ul>

<style lang="postcss">
  .item-list {
    @apply block p-2 text-base rounded-tr-md rounded-br-md my-1;
  }
  .item-list:hover:not(.active) {
    @apply bg-blue-50 text-black;
  }
  .active {
    @apply bg-blue-400 text-white;
  }
</style>