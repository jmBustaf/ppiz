<template>

    <div class="container p-0 w-100">
        <div class="row py-4 m-0 w-100 d-flex justify-content-around">
            <div v-for="(item, index) in this.comics" v-bind:key="index" class="col-3 comic p-0 my-3 m-0"> 
                <img class="mx-4 mb-4 w -75 h-75 rounded" v-bind:src="item.image.original_url" alt="img-comic">
                <!-- <router-link @click="getLink" v-bind:comics="this.comics.detalle[index]" v-bind:to="`/${this.comics.nombre[index]}`">
                    
                </router-link> -->
                <p class="mx-4 m-0">nombre: {{item.name}}</p>
                <p class="mx-4 m-0">fecha: {{item.date}}</p>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    name: 'Comics',
    data() {
        return {
            comics: [
                {
                    image: '',
                    fecha: '', 
                    nombre: '',
                    detalle: ''
                }
            ],
        }
    },
    methods: {
        getComics() {
            let url = 'https://comicvine.gamespot.com/api/characters/?api_key=6f7e42c1a04a1903ca5c2a635e441781e12a537b&format=json'
            fetch(url)
            .then(res => res.json())
            .then(data => {
                /* let arrayImage = []
                let arrayFechas = []
                let arrayNombres = []
                let arrayDetalle = []

                this.comics.image = arrayImage
                this.comics.fecha = arrayFechas
                this.comics.nombre = arrayNombres
                this.comics.detalle = arrayDetalle

                data.results.forEach(element => {
                    this.comics.image.push(element.image.original_url)
                    this.comics.fecha.push(element.date_added)
                    this.comics.nombre.push(element.name)
                    this.comics.detalle.push(element.api_detail_url + '?api_key=6f7e42c1a04a1903ca5c2a635e441781e12a537b&format=json')
                }); 
                this.comics.push(data.results)
                 */

                this.comics = data.results;
                console.log(this.comics)
            })
            .catch(error => console.log(error))
        },
        getLink() {
            this.$emit('getLink', this.comics.detalle)  
        }
    },
    created() {
        this.getComics()
    }
}
</script>

<style>

body
{
    margin: auto;
    position: relative;
}
.comic
{
    height: 50vh;
}
/* .img
{
    
} */

</style>
