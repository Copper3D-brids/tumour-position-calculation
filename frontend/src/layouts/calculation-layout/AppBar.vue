<template>
  <v-navigation-drawer
    v-model="drawer"
    :rounded="true"
    :disable-resize-watcher="true"
    :width="350"
    :permanent="!temporary"
    :temporary="temporary"
  >
    <NavPanel />
  </v-navigation-drawer>

  <v-app-bar color="surface" class="d-flex justify-end">

    <v-app-bar-nav-icon class="guide-bar-nav" @click="toggleDrawer"></v-app-bar-nav-icon>

    <div class="guide-expand-panel" data-tool="expandtool"></div>
    <v-app-bar-title >
      <span class="text-capitalize"
        >Tumour Position Study
      </span>
      <span class="text-body-2 font-italic text-deep-orange">v1.0.0</span>
    </v-app-bar-title>

    <div width="" class="w-50 d-flex flex-row justify-end align-center px-2">
      <IntroPanel />
      <v-img
        class="px-5"
        width="250px"
        max-width="250px"
        src="@/assets/images/abi.png"
      ></v-img>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useTheme } from "vuetify";

import NavPanel from "@/components/nav-calculation/NavPanel.vue";
import IntroPanel from "@/components/intro/IntroPanel.vue";
import emitter from "@/plugins/bus";


const drawer = ref(false);
const temporary = ref(true);


onMounted(() => {
  manageEmitters();
});

function manageEmitters() {
  // set_nav_sticky_mode

  emitter.on("set_nav_sticky_mode", (val) => {
    temporary.value = !val;
    emitter.emit("resize-left-right-panels", {
      panel: "right",
    });
  });

  emitter.on("guide_to_drawer_status", (val)=>{
    if(val==="open" && !drawer.value){
      toggleDrawer();
    }
  });
}

function toggleDrawer() {
  drawer.value = !drawer.value;
  temporary.value = !drawer.value;

  emitter.emit("drawer_status", drawer.value);
  emitter.emit("set_nav_sticky_mode", drawer.value);
  emitter.emit("resize-left-right-panels", {
    panel: "right",
  });
}

</script>
<style></style>
