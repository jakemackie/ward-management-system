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


/* Global styles */
/* Elements */

* {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    color: #222222;
}

:root {
    --primary-color: #efefef;
    --secondary-color: #dddddd;
    --tertiary-color: #cdcdcd;
}

body {
    background-color: var(--primary-color);
}

.sidebar {
    position: relative;
    min-height: 100vh;
    min-width: 250px;
    padding-block: 2rem;
    padding-inline: 1rem;
    flex-shrink: 0; /* Add this line */
}
.navbar {
    min-width: 100vw;
}
.sidebar, 
.navbar {
    background-color: var(--secondary-color);
    display: none;
}
.content {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-inline: auto;
    text-align: left;
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
    .content {
        max-width: 50%;
    }
    .content > * {
        margin-top: 1rem;
    }
}

/* Typography */

h1  {   
        @apply 
        text-[48px]     
        text-[#0F172A]
        font-extrabold;  
        
}
h2  {    
        @apply 
        text-[36px] 
        text-[#0F172A]    
        font-extrabold;  
         
}
h3  {    
        @apply 
        text-[24px]     
        text-[#0F172A]
        font-extrabold;   
    }
h4  {    
        @apply 
        text-[20px]     
        text-[#0F172A]
        font-extrabold;  
}
p   {    
        @apply 
        text-[16px]  
        text-[#0F172A]     
        font-normal;
}

</style>
