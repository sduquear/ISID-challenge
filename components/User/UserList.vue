<template>
  <div>
    <h1>{{ title }}</h1>
    <el-table :data="users">
      <el-table-column prop="name" label="Nombre"> </el-table-column>
      <el-table-column prop="email" label="Email"> </el-table-column>
      <el-table-column prop="address.city" label="Ciudad"> </el-table-column>
      <el-table-column prop="phone" label="Teléfono"> </el-table-column>
      <el-table-column prop="company.name" label="Empresa"> </el-table-column>
      <el-table-column fixed="right" label="Operaciones">
        <template>
          <table-button :type="'primary'" :name="'Editar'"></table-button>
          <table-button :type="'danger'" :name="'Eliminar'"></table-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import TableButton from "@/components/Base/TableButton.vue";
export default {
  name: "UserList",
  components: {
    TableButton,
  },
  data() {
    return {
      title: "Listado de Usuarios",
    };
  },
  computed: {
    ...mapState("user", ["users"]),
  },
  async created() {
    await this.getUsers();
  },
  methods: {
    ...mapActions({
      getUsers: "user/getUsers",
    }),
  },
};
</script>
