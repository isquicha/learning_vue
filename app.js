const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        };
    },
    methods: {
        async getUser() {
            const response = await fetch('https://randomuser.me/api');
            const { results } = await response.json();
            const randomPerson = results[0];

            this.firstName = randomPerson.name.first;
            this.lastName = randomPerson.name.last;
            this.email = randomPerson.email;
            this.gender = randomPerson.gender;
            this.picture = randomPerson.picture.large;
        }
    }
});

app.mount("#app");
