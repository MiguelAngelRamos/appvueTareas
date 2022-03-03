<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-8 offset-2">
        <input
          class="form-control"
          type="text"
          placeholder="Ingrese una tarea"
          v-model="nombreTarea"
          @keyup.enter="agregarTarea"
        />
      </div>

      <div class="col-6 offset-3 mt-2" >
        <div class="card p-2">
          <h6 class="text-center" >No hay tareas para mostrar...</h6>
        </div>
        <!-- Aqui vamos a renderizar nuestras tareas -->
        <ul class="list-group" >
          <li class="list-group-item">
            <h5>Proyecto de Vue</h5>
          </li>
        </ul>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tareas: [],
      nombreTarea: ""
    }
  },
  methods: {
    agregarTarea() {
      // console.log('AGREGANDO UNA TAREA....');

      // Nuestra tarea
      const tareaObject = {
        nombre: this.nombreTarea,
        estado: false
      }
      // console.log(tareaObject)
      this.tareas.push(tareaObject);
      console.log(this.tareas)
    }
  }
};
</script>

<style>
</style>