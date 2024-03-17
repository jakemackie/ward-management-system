<template>
    <div>
        <Card v-if="responseData">
            <pre>{{ responseData }}</pre>
        </Card>
        <Card v-else class="animate-pulse">
            <p class="animate-pulse">Fetching Data...</p>
        </Card>
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