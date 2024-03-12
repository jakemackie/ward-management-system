<template>
  <div class="w-2/3">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div class="flex w-full overflow-clip rounded-lg border">
        <div v-html="svg" class="size-16"></div>
      </div>
      <div class="flex w-full overflow-clip rounded-lg border">
        <div v-html="svg" class="size-16"></div>
      </div>
      <div class="flex w-full overflow-clip rounded-lg border">
        <div v-html="svg" class="size-16"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createAvatar } from "@dicebear/core";
import { initials } from "@dicebear/collection";

const avatar = createAvatar(initials, {
  seed: "Example User",
});

const svg = avatar.toString();
</script>
