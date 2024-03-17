<template>
    <li class="w-fit md:w-full cursor-pointer p-2 md:p-3 hover:bg-[#404756] rounded-lg" :class="{ 'bg-[var(--tertiary-color)]': isActive(), 'bg-[var(--secondary-color)]': !isActive() }">
        <NuxtLink :to="href" class="flex justify-start items-center space-x-2" aria-label="Navigation icon">
            <div class="ml-2">
                <Icon :name="icon" color="#222222" class="size-8" />
            </div>
            <div class="w-full flex justify-center md:justify-start">
                <span class="hidden md:block text-lg px-2">
                    <slot></slot>
                </span>
            </div>
        </NuxtLink>
    </li>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { defineProps } from '@vue/runtime-core';

const props = defineProps({
    icon: {
        type: String,
        required: true,
    },
    href: {
        type: String,
        required: true,
    },
});

const route = useRoute();

const isActive = () => {
    if (route.path === props.href) {
        return true;
    }
};
</script>
