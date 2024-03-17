<template>
    <div>
        <div v-if="responseData" class="bg-gray-100 p-2 rounded-lg">
            <pre>{{ responseData }}</pre>
        </div>
        <div v-else class="animate-pulse bg-gray-100 p-2 rounded-lg">
            <p class="animate-pulse">Fetching Data...</p>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';

    const responseData = ref(null);

    onMounted(async () => {
        // Wait 1 second to avoid stressing the API
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const config = useRuntimeConfig();
        try {
            const response = await axios.get(`${config.public.APP_URL}/api/users`);
            responseData.value = response.data;
        } catch (error) {
            responseData.value = error;
        }
    });
</script>