<script setup lang="ts">
import { computed } from "vue";

export interface SegmentedControlOption<T = string> {
    label: string;
    icon?: string;
    value: T;
    disabled?: boolean;
}

interface Props<T = string> {
    modelValue: T;
    options: SegmentedControlOption<T>[];
    size?: "xs" | "sm" | "lg" | "xl" | "xxl";
    fullWidth?: boolean;
    disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    fullWidth: false,
    disabled: false,
});

const emit = defineEmits<{
    "update:modelValue": [value: Props["modelValue"]];
}>();

const sizeClasses = computed(() => {
    return props.size ? {
        xs: "segmented-control-xs",
        sm: "segmented-control-sm",
        lg: "segmented-control-lg",
        xl: "segmented-control-xl",
        xxl: "segmented-control-2xl",
    }[props.size]
        : '';
});

function select(value: Props["modelValue"], disabled?: boolean) {
    if (props.disabled || disabled) {
        return;
    }

    emit("update:modelValue", value);
}
</script>

<template>
    <div role="tablist" :aria-disabled="disabled" class="segmented-control" :class="{ 'w-full': fullWidth }">
        <button v-for="option in options" :key="String(option.value)" type="button" role="tab"
            :aria-selected="modelValue === option.value" :disabled="disabled || option.disabled" :class="[
                'segmented-control-item',
                sizeClasses,
                fullWidth ? 'flex-1' : '',
                { 'active': modelValue === option.value }
            ]" @click="select(option.value, option.disabled)">
            {{ option.label }}
        </button>
    </div>
</template>