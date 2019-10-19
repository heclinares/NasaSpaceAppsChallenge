<template id="modal-template">
  <transition name="modal">
    <div class="modal-mask" @click.stop="hideModal">
      <div class="modal-wrapper" @click.stop="catchClick">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              <div v-html="title"></div>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <div v-html="body"></div>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="btn btm-success" @click="hideModal">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  
  export default {
    name: 'Dialog',
    props: {
      showModal: { type: Boolean, required: false, default: false },
      body: '',
      title: ''
    },
    methods: {
      hideModal () {
        this.$parent.showModal = false
      },
      catchClick () {
      }
    }
  }
</script>
