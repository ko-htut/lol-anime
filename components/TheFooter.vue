<template>
  <CFooter :fixed="false">
    <div>
      <a href="https://coreui.io" target="_blank">LOL</a>
      <span class="ml-1">&copy; {{new Date().getFullYear()}} creativeLabs.</span>
    </div>
    <div class="ml-auto">
      <span class="mr-1">Powered by</span>
      <a href="https://coreui.io/vue" target="_blank">Ko Htut</a>
    </div>
  </CFooter>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>
