<script>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import { T } from '@tolgee/vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    WelcomeItem,
    CommunityIcon,
    EcosystemIcon,
    SupportIcon,
    ToolingIcon,
    DocumentationIcon,
    T
  }
})
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>
      <h3><T keyName="documentation" defaultValue="Documentation" /></h3>
    </template>
    <T
      keyName="documentation_desc"
      defaultValue="Vue’s official documentation provides you with all information you need to get started."
    />
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>
      <h3><T keyName="tooling" defaultValue="Tooling" /></h3>
    </template>
    <T
      keyName="tooling_desc"
      defaultValue="This project is served and bundled with Vite. The recommended IDE setup is VSCode + Volar. If you need to test your components and web pages, check out Cypress and Cypress Component Testing. More instructions are available in README.md."
    />
    <br />

    <p><T keyName="readme" defaultValue="More instructions are available in README.md." /></p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>
      <h3><T keyName="ecosystem" defaultValue="Ecosystem" /></h3>
    </template>
    <T
      keyName="ecosystem_desc"
      defaultValue="Get official tools and libraries for your project: Pinia, Vue Router, Vue Test Utils, and Vue Dev Tools. If you need more resources, we suggest paying Awesome Vue a visit."
    />
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>
      <h3><T keyName="community" defaultValue="Community" /></h3>
    </template>
    <T
      keyName="community_desc"
      defaultValue="Got stuck? Ask your question on Vue Land, our official Discord server, or StackOverflow. You should also subscribe to our mailing list and follow the official @vuejs twitter account for latest news in the Vue world."
    />
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>
      <h3><T keyName="support" defaultValue="Support Vue" /></h3>
    </template>
    <T
      keyName="support_desc"
      defaultValue="As an independent project, Vue relies on community backing for its sustainability. You can help us by becoming a sponsor."
    />
  </WelcomeItem>
</template>
