<template>
<h1 class="my-3">ComicBook</h1>
    <div class="container-fluid w-100">
        <div class="row">
            <div class="col p-0">
                <nav class="navbar navbar-dark bg-dark">
                    <div class="col-6 d-flex justify-content-start m-0 p-0">
                        <p style="color:#ffffff" class="my-2 mx-2">Listado de Comics</p> 
                    </div>
                    <div class="col-6 d-flex justify-content-end m-0 p-0">
                        <button v-on:click="activeGrid = !activeGrid, activeList = !activeList"  class="button btn"><span>List</span></button>
                        <button v-on:click="activeList = !activeList, activeGrid = !activeGrid" class="button btn"><span>Grid</span></button>
                    </div>
                </nav>
            </div>
        </div>
        <transition class="mt-4">
            <Spinner v-if="activeSpinner"/>
        </transition>
        <div class="row py-3 m-0 w-100 d-flex justify-content-around" >
            <div v-show="activeGrid" v-for="item in this.comics" v-bind:key="item.id" class="col-3 comic p-0 my-3 m-0">
                <router-link v-bind:to="`${item.id}`">
                    <img class="mx-4 mb-4 w-75 h-75 rounded" v-bind:src="item.image.original_url" alt="img-comic">
                </router-link>
                <p class="mx-4 m-0">{{item.name}}</p>
                <p class="mx-4 m-0">{{item.date_added}}</p>
            </div>
        </div>
        <div v-show="activeList" class="row p-0 m-0">
            <div v-for="item in this.comics" v-bind:key="item.id" class="col-12 comic p-0 my-2 m-0 border rounded d-flex justify-content-center align-items-center">
                <div class="col-4 m-0 p-0">
                    <router-link v-bind:to="`${item.id}`">
                        <img class="mx-4 my-2 w-50 h-50 rounded img-fluid" v-bind:src="item.image.original_url" alt="img-comic">
                    </router-link>
                </div>
                <div class="col-6 m-0 p-0 align-self-start">
                    <p class="mx-4 m-3">{{item.name}}</p>
                    <p class="mx-4 m-3">{{item.date_added}}</p>
                    <p class="mx-4 m-3">{{item.deck}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Spinner from '../components/Spinner'

export default {
    name: 'Comics',
    components: {
        Spinner
    },
    data() {
        return {
            comics: [],
            activeGrid: true,
            activeList: false,
            activeSpinner: true
        }
    },
    watch: {
        "$route.query.comics": {
            inmediate: true,
            handler(comics){
                console.log(`seccion a cambiado: ${comics}`)
            }
        }
    },
    methods: {
        getComics() {
            let url = 'https://comicvine.gamespot.com/api/characters/?api_key=6f7e42c1a04a1903ca5c2a635e441781e12a537b&format=json'
            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.comics = data.results;
            })
            .catch(error => console.log(error))
            .finally(() => {
                this.activeSpinner = false
            })
        },
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

.btn {
  border: none;
  outline: none;
  padding: 12px 16px;
  background-color: #777777;
  cursor: pointer;
}

.btn:hover {
  background-color: #ddd;
}

.btn.active {
  background-color: #666;
  color: white;
}

</style>