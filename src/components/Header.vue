<template>
<div class="container-fluid">
    <h1 class="my-3">ComicBook</h1>
    <div class="row">
        <div class="col p-0">
            <nav class="navbar navbar-dark bg-dark">
                <div class="col-6 d-flex justify-content-start m-0 p-0">
                    <p style="color:#ffffff" class="my-2 mx-2">Listado de Comics</p> 
                </div>
                <div class="col-6 d-flex justify-content-end m-0 p-0">
                    <a class="my-2 mr-4 enlace" href="" @click="Lista">Lista</a>
                    <a class="my-2 mr-4 enlace" href="" @click="Grilla">Grilla</a>
                </div>
            </nav>
        </div>
    </div>
</div>
    
</template>

<script>
export default {
    name: 'Header',
    methods: {
        Grilla() {
            
        },
        Lista() {
            
        }
    }
}
</script>

<style>

.enlace
{
    color: white;
}
a:hover
{
    color: white;
}

</style>