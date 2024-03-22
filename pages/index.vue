<template>
    <div class="text-center">
        <h1>
            Ward Management System
        </h1>
        <p>
            <!--
                &#40; is the HTML entity for an open bracket
                &#41; is the HTML entity for a close bracket
                &comma; is the HTML entity for a comma
            -->
            
            A clinical application that allows users to book patients 
            into beds on 2 wards. This web application is a fullstack
            project. I used Nuxt &#40;a JavaScript Framework&#41; to 
            integrate the frontend with thebackend.
        </p>
        
        <div class="mt-10 flex flex-col xl:flex-row *:text-left">
            <div class="w-full xl:w-1/2">
                <h2>The frontend:</h2>
        
                <ul class="list-disc *:m-4">
                    <li>
                        <p>
                            <b>Vue.js</b>&comma; a JavaScript library 
                            for frontend development that features reusable 
                            components and state management logic.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Tailwind CSS</b>&comma; a JavaScript library
                            for frontend development that aims to simplify
                            css syntax and boost performance. This combined
                            with Vue.js allows for a more dynamic and
                            responsive webpages.
                        </p>
                    </li>
                </ul>
            </div>
            
            <div class="w-full xl:w-1/2">
                <h2>The backend:</h2>
        
                <ul class="list-disc *:m-4">
                    <li>
                        <p>
                            <b>Nuxt.js</b>&comma; a JavaScript framework 
                            for fullstack development that allows for
                            server-side rendering of pages and integration
                            with the backend.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>MySQL</b>&comma; a relational database that
                            stores data in tables and allows for easy
                            querying of data.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Prisma</b>&comma; an Object Relational Mapper
                            &#40;ORM&#41; that allows for easy integration 
                            with databases and simplifies the process of
                            querying data.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Zod</b>&comma; a TypeScript library I used to
                            validate type-safe data before it is sent to Prisma.
                        </p>
                    </li>
                </ul>
            </div>
        </div>

        <div class="text-left">        
            <h2>The result?</h2>
            <p>
                A web application that allows users to book patients into beds 
                on 2 wards. The application is fully responsive and allows for 
                easy navigation between pages. The application is also 
                integrated with a backend that allows for easy querying of data 
                and updating of patient details.
            </p>
        </div>
    </div>
</template>
