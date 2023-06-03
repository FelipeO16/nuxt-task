<template>
  <b-container class="rules-group h-100">
    <b-row>
      <b-col cols="10" />
      <RulesHeader />
    </b-row>
    <b-row class="h-25 d-none d-lg-flex">
      <b-col><RulesImage /></b-col>
    </b-row>
    <b-row class="">
      <b-col cols="2"></b-col>
      <b-col cols="12" lg="8" class="bg-light rounded-lg">
        <b-row align-v="center">
          <b-col cols="10"><h1>House Rules</h1></b-col>
          <b-col cols="2" @click="showAddModal = true"
            ><DefaultButton to="">Add</DefaultButton></b-col
          >
        </b-row>
        <RulesBody />
      </b-col>
      <b-col cols="2"></b-col>
    </b-row>
    <b-modal v-model="showAddModal" title="Adicionar Regra" @ok="addRule">
      <b-form @submit.stop>
        <b-form-group label="Nome" label-for="rule-name">
          <b-form-input
            id="rule-name"
            v-model="newRule.name"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Ativo" label-for="rule-active">
          <b-form-checkbox
            id="rule-active"
            v-model="newRule.active"
          ></b-form-checkbox>
        </b-form-group>
      </b-form>
    </b-modal>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      showAddModal: false,
      newRule: {
        name: '',
        active: false,
      },
    }
  },
  methods: {
    addRule() {
      this.$store.dispatch('api/createItem', this.newRule)
      this.showAddModal = false
    },
  },
}
</script>
