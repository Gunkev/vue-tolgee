<script setup>
import { useTolgee } from '@tolgee/vue'
const tolgee = useTolgee(['language'])
const changeLanguage = (e) => {
  tolgee.value.changeLanguage(e.target.value)
}
</script>
<template>
  <select :value="tolgee.getLanguage()" v-on:change="changeLanguage" class="selector">
    <option value="en">🇬🇧 English</option>
    <option value="fr">🇫🇷 Français</option>
    <option value="es">🇪🇸 Español</option>
  </select>
</template>
