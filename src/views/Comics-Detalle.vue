<template>

  <div class="Comics-Detalle">
    <h2 class="d-flex align-items-center justify-content-center navbar-dark bg-dark titulo p-3">{{this.comic.name}}</h2>
    <div class="container-fluid">
        <div class="row my-3">
            <div class="col-7">
                <div class="row mt-3">
                    <div class="col">
                        <h3 class="text-left mx-2">Casa editorial</h3>
                        <hr>
                        <br>
                        <p>{{this.comic.publisher.name}}</p>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col">
                        <h3 class="text-left mx-2">Nombre real</h3>
                        <hr>
                        <br>
                        <p>{{this.comic.real_name}}</p>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col">
                        <h3 class="text-left mx-2">Prmera aparición</h3>
                        <hr>
                        <br>
                        <!-- <p>{{this.comic.first_appeared_in_issue.name}}</p> -->
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col">
                        <h3 class="text-left mx-2">Fecha Lanzamiento</h3>
                        <hr>
                        <br>
                        <p>{{this.comic.date_added}}</p>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col">
                        <h3 class="text-left mx-2">Historia</h3>
                        <hr>
                        <br>
                        <p>{{this.comic.deck}}</p>
                    </div>
                </div>
            </div>
            <div class="col-5">
                <!-- <img v-bind:src="this.comic.image.super_url" class="img-fluid mt-3" alt=""> -->
            </div>
        </div>
    </div>
  </div>

</template>

<script>

export default {
    name: 'Comics-Detalle',
    data() {
        return {
            comic: { name: "" },
            /* characters: {}, */
        }
    },
    methods: {
        getComic() {
            let url = 'https://comicvine.gamespot.com/api/characters/?api_key=6f7e42c1a04a1903ca5c2a635e441781e12a537b&format=json'
            let id = this.$route.params.id
            let temp = {}
            fetch(url)
            .then(res => res.json())
            .then(data => {
                const comics = data.results;
                comics.forEach(function (elem) {
                    if(elem.id === +id)
                    {
                        temp = elem
                    }
                })
                this.comic = temp
                console.log(id)
            })
            .catch(error => console.log(error))
            .finally(() => {
                
            })
        },
        /* getCharacters() {
            let url = this.comic.origin.api_detail.url + '?api_key=6f7e42c1a04a1903ca5c2a635e441781e12a537b&format=json'
            let temp = {}
            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.characters = data.results;
                this.characters.forEach(function (elem) {
                    if(elem.characters.name === this.comic.name)
                    {
                        temp = elem
                    }
                })
                this.characters = temp
                console.log(this.characters)
            })
            .catch(error => console.log(error))
        }, */
    },     
    created() {
        this.getComic()
    }
}
</script>

<style>

.titulo
{
    color: white;
}

</style>