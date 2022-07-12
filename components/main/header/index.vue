<template>
  <div class="row fl-shrink-1 fl-grow-0 ai-center jc-center background-primary">
    <div class="lg:col-10 md:col-10 col-12 py-3">
      <div class="row ai-center">
        <div class="col-3 di-flex fl-grow-1 ai-center he-100">
          <div class="he-100" style="width: 32px;">
            <logos-flui></logos-flui>
          </div>
          <div class="px-5 text-primary-tint-8 fw-6 fs-7">
            Flui
          </div>
        </div>
        <div class="col-6 di-flex">
          <main-header-nav to="/" icon="home" class="col">Home</main-header-nav>
          <main-header-nav to="/guide" icon="school" class="col">
            Guide
          </main-header-nav>
          <main-header-nav to="/documentation" icon="file-document" class="col">
            Docs
          </main-header-nav>
          <main-header-nav to="/toolkit/font" icon="cog" class="col">
            Create toolkit
          </main-header-nav>
        </div>
        <div class="col-3 di-flex jc-end">
          <a-button template="glassy" @click="darkMode = !darkMode">
            <a-icon>brightness-4</a-icon>
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
let darkMode = useDarkmode()
</script>
