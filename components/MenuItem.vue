<template>
    <li class="p-2 size-12 cursor-pointer">
        <NuxtLink :to="page" class="size-full" :aria-label="altText">
            <Icon :name="icon" class="size-full" color="#222222" />
        </NuxtLink>
    </li>
</template>

<script setup lang="ts">
defineProps({
    icon: {
        type: String,
        required: true,
    },
    page: {
        type: String,
        required: true,
    },
    altText: {
        type: String,
        default: '',
    },
});
</script>