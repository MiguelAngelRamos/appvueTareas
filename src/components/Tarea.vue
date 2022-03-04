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

      <div class="col-6 offset-3 mt-2">
        <div v-if="tareas.length === 0" class="card p-2 alert alert-warning">
          <h6 class="text-center">No hay tareas para mostrar...</h6>
        </div>

        <!-- Aqui vamos a renderizar nuestras tareas -->
        <ul class="list-group">
          <li
            v-for="(tarea, index) of tareas"
            :key="index"
            class="
              list-group-item
              d-flex
              align-items-center
              justify-content-between
            "
          >
            <span class="cursor" @click="actualizarTarea(tarea, index)">
              <i
                :class="
                  tarea.estado
                    ? 'fas fa-check-circle text-success'
                    : 'far fa-circle'
                "
              ></i>
              <!-- <i :class='tarea.estado?"fas fa-check-circle text-success":"far fa-circle"'></i> -->
            </span>

            <h5>{{ tarea.nombre }}</h5>

            <span class="cursor text-danger" @click="eliminarTarea(index)">
              <i class="fa fa-trash-alt"></i>
            </span>
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
      nombreTarea: "",
    };
  },
  methods: {
    agregarTarea() {
      if (this.nombreTarea === "") {
        this.$swal.fire({
          title: "Debes crear una tarea!!!",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        return;
      }
      // console.log('AGREGANDO UNA TAREA....');

      // Nuestra tarea
      const tareaObject = {
        nombre: this.nombreTarea,
        estado: false,
      };

      this.nombreTarea = "";
      // console.log(tareaObject)
      this.tareas.push(tareaObject);
      console.log(this.tareas);
      localStorage.setItem("tareas-storage", JSON.stringify(this.tareas));
      
    },
    eliminarTarea(indice) {
      this.$swal.fire({
          title: "Estas seguro?",
          text: "No podrás revertir esto!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#30d6a1",
          cancelButtonColor: "",
          confirmButtonText: "Si, Eliminar tarea!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            // tareas['angular', 'react', 'vue']
            // indice indicamos donde queremos empezar a eliminar
            // con el 1 indicamos cuantos elementos deseamos eliminar
            this.tareas.splice(indice, 1);
            Swal.fire("Eliminada!", "Tu tarea ha sido eliminada.", "success");
          }
        });
    },
    actualizarTarea(tarea, indice) {
      this.tareas[indice].estado = !tarea.estado; // tarea.estado esta en false
      console.log(this.tareas);
    },
  },
  created() {
    // llamar la información que existe dentro del local storage
    if(localStorage.getItem("tareas-storage")) {
      console.log("EXISTE INFORMACION EN EL LOCAL STORAGE");
      this.tareas = JSON.parse(localStorage.getItem("tareas-storage"));
    }
  }
};
</script>

<style>
.cursor {
  cursor: pointer;
}
</style>