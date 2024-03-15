<template>
    <li class="w-fit cursor-pointer p-3 hover:bg-gray-100 rounded-lg">
        <NuxtLink :to="href" class="flex justify-start items-center space-x-2" aria-label="Navigation icon">
            <div class="ml-2">
                <Icon :name="icon" color="#222222" class="size-8" />
            </div>
            <div class="w-full flex justify-center">
                <span class="hidden md:block text-lg px-2">
                    <slot></slot>
                </span>
            </div>
        </NuxtLink>
            
    </li>
</template>

<script setup lang="ts">
defineProps({
    icon: {
        type: String,
        required: true,
    },
    href: {
        type: String,
        required: true,
    },
});
</script>