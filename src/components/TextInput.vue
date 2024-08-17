<template>
  <div class="text-input-wrapper">
    <label v-if="label"> {{ label }} </label>
    <div class="input-wrapper">
      <input
        type="text"
        :placeholder="placeholder"
        :value="value"
        @input="setValue"
        @keydown.enter="(e) => $emit('submited', e)"
      />
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    value: String || Number,
    label: String,
    placeholder: String,
  },
  emits: ["update:value", "submited"],
  methods: {
    setValue(e) {
      this.$emit("update:value", e.target.value);
    },
  },
};
</script>
  
<style lang="scss" scope>
.text-input-wrapper {
  display: flex;
  flex-direction: column;
  .input-wrapper {
    display: flex;
  }
  label {
    margin-top: 10px;
  }
  input {
    outline: none;
    border: none;
    border: 2px solid var(--color-gray-1);
    padding: 16px 8px;
    font-size: 14px;
    line-height: 14px;
    color: var(--color-gray-3);
    background: transparent;
    transition: all 0.2s;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    border-radius: 8px;
  }
}
</style>
  