<script>
export default {
  name: 'Header',
}
</script>

<template>
  <div>
    <header>
      <div class="pt-[2rem] pb-[2rem] flex items-center justify-center text-center gap-[1rem] w-full">
        <router-link :to="{ name: 'Home' }" class="text-[18px]">Home</router-link>
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>

</style>
