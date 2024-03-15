<template>
    <div class="container">
        <div class="navbar">
            <Navbar />
        </div>
        <div class="sidebar">
            <Sidebar />
        </div>
        <div class="main-content">
            <NuxtPage />
        </div>
    </div>
</template>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    /* Base styles for container */
    .container {
        display: grid;
        grid-template-columns: auto 1fr; /* Sidebar takes up auto width, main content takes up remaining space */
        height: 100vh; /* Full viewport height */
        overflow: hidden; /* Hide overflow */
    }

    /* Styles for navbar */
    .navbar {
        display: none; /* Initially hide the navbar */
    }

    /* Styles for sidebar */
    .sidebar {
        width: 100%;
        height: 100%;
    }

    /* Styles for main content */
    .main-content {
        width: 100%;
        height: 100%;
    }

  /* Media query for desktop layout */
    @media (min-width: 769px) {
        .container {
        grid-template-columns: 250px 1fr; /* Adjust sidebar width for desktop */
        }
    
        .navbar {
        display: none; /* Hide navbar for desktop */
        }
    }  

  /* Media query for mobile layout */
    @media (max-width: 768px) {
        .container {
            grid-template-columns: 1fr; /* Single column layout for mobile */
            grid-template-rows: auto 1fr; /* Sticky navbar takes up auto height, main content takes up remaining space */
        }

        .navbar {
            display: block; /* Show navbar for mobile */
        }

        .sidebar {
            display: none; /* Hide sidebar on mobile */
        }
    }
</style>
