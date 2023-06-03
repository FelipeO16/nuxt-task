<template>
  <div class="overflow-auto">
    <b-table
      id="my-table"
      hover
      :items="api.response.data.entities"
      small
      head-variant="dark"
      foot-clone
      select-mode="single"
      ref="selectableTable"
      selectable
      @row-selected="onRowSelected"
      :fields="fields"
    >
      <template #cell(edit)="data">
        <b-button
          v-if="isSelected(data.item)"
          variant="primary"
          @click="editRow(data.item)"
        >
          Edit
        </b-button>
      </template>
    </b-table>
    <b-pagination
      v-model="current_page"
      :total-rows="api.response.data.pagination.total"
      :per-page="api.response.data.pagination.per_page"
      aria-controls="my-table"
      @input="handlePageChange"
    >
    </b-pagination>

    <b-modal
      v-model="showModal"
      title="Edit Item"
      @hidden="closeModal"
      ref="modalRef"
      no-wrap
    >
      <div class="p-2" v-if="selectedItem">
        <b-col>
          <b-input-group prepend="ID" class="mt-4">
            <b-form-input v-model="selectedItem.id" disabled></b-form-input>
          </b-input-group>
        </b-col>
        <b-col>
          <b-input-group prepend="Name" class="mt-4">
            <b-form-input v-model="selectedItem.name"></b-form-input>
          </b-input-group>
        </b-col>
        <b-col>
          <b-input-group class="mt-4">
            <b-form-checkbox
              id="checkbox-1"
              v-model="selectedItem.active"
              name="checkbox-1"
              value="1"
              unchecked-value="0"
            >
              Active
            </b-form-checkbox>
          </b-input-group>
        </b-col>
      </div>
      <template #modal-footer>
        <b-button variant="danger" @click="deleteItem(selectedItem)"
          >Delete</b-button
        >
        <b-button variant="success" @click="saveItem(selectedItem)"
          >Save</b-button
        >
      </template>
    </b-modal>
  </div>
</template>

<script>
import Vue from 'vue'
import { BIcon, BIconCheckSquare } from 'bootstrap-vue'

export default Vue.extend({
  components: {
    BIcon,
    BIconCheckSquare,
  },
  data() {
    return {
      current_page: 1,
      selected: [],
      fields: [
        {
          key: 'id',
          sortable: true,
        },
        {
          key: 'name',
          sortable: true,
        },
        {
          key: 'active',
          sortable: true,
        },
        {
          key: 'edit',
          label: 'Edit',
          class: 'text-center',
        },
      ],
      selectedRow: null,
      showModal: false,
      selectedItem: null,
    }
  },
  computed: {
    api() {
      return this.$store.state.api
    },
  },
  async created() {
    try {
      await this.$store.dispatch('api/fetchList')
      this.current_page = this.api.current_page
    } catch (error) {
      this.$router.push('/error')
    }
  },

  methods: {
    onRowSelected(items) {
      this.selected = items
      this.selectedItem = items.length > 0 ? { ...items[0] } : null
    },
    editRow(row) {
      this.selectedItem = { ...row }
      this.showModal = true
    },
    isSelected(item) {
      return this.selected.includes(item)
    },
    handlePageChange() {
      this.$store.dispatch('api/fetchList', this.current_page)
    },
    closeModal() {
      this.showModal = false
    },
    saveItem(selectedItem) {
      this.$store.dispatch('api/updateItem', selectedItem)
      this.showModal = false
    },
    deleteItem(selectedItem) {
      this.$store.dispatch('api/deleteItem', selectedItem)
      this.showModal = false
    },
  },
})
</script>

<style scoped></style>
