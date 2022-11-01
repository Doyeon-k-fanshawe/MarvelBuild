(() => {
    // create vue instance here
    const { createApp } = Vue

    createApp({
        created() {
            
        },

        data() {
            return {
                heroData: {}
            }
        }
    }).mount('#app')
})()