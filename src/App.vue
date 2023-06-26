<script>
import { TolgeeProvider, T } from '@tolgee/vue'
import HelloWorld from './components/HelloWorld.vue'
import Selector from './components/Selector.vue'
import TheWelcome from './components/TheWelcome.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: { Selector, HelloWorld, TheWelcome, TolgeeProvider, T },
  setup() {}
})
</script>

<template>
  <TolgeeProvider>
    <header>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld :msg="$t('hello')" />
      </div>
      <Selector />
    </header>
    <main>
      <TheWelcome />
    </main>
  </TolgeeProvider>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-end;
    flex-wrap: wrap;
  }
}
</style>
