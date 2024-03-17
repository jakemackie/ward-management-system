<template>
    <div class="flex flex-col md:flex-row">
        <div class="sidebar">
            <Sidebar />
        </div>
        <div class="navbar">
            <Navbar />
        </div>

        <div class="content">
            <NuxtPage />
        </div>
    </div>
</template>

<style>

* {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    color: #e5eaf4;
}

:root {
    --primary-color: #404756;
    --secondary-color: #3b414e;
    --tertiary-color: #565f71;
}

body {
    background-color: var(--primary-color);
}

.sidebar {
    background-color: var(--secondary-color);
    min-height: 100vh;
    min-width: 250px;
}
.navbar {
    background-color: var(--secondary-color);
    min-width: 100vw;
}
.sidebar, .navbar {
    display: none;
}
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-inline: auto;
    padding: 1rem;
}

@media screen and (max-width: 768px) {
    .sidebar {
        display: none;
    }
    .navbar {
        display: block;
    }
}

@media screen and (min-width: 768px) {
    .navbar {
        display: none;
    }
    .sidebar {
        display: flex;
    }
}

</style>