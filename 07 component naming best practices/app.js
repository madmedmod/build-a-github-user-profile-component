// child component
let PlanPickerItemComponent = {
    template: '#plan-picker-item-template',
    props: {
        name: {
            type: String,
            required: true
        },
        selectedPlan: {
            type: String
        }
    },
    computed: {
        isSelected() {
            return this.name === this.selectedPlan
        }
    },
    methods: {
        select() {
            this.$emit('select', this.name)
        }
    }
}

// parent component
let PlanPickerComponent = {
    template: '#plan-picker-template',
    components: {
        'plan-picker-item': PlanPickerItemComponent // plan took from PlanPickerItemComponent (child component)
    },
    data() {
        return {
            plans: ['The Single', 'The Curious', 'The Addict'],
            selectedPlan: null
        }
    },
    methods: {
        selectPlan(plan) {
            this.selectedPlan = plan
        }
    }
}

// root element
new Vue ({
    el: '#app',
    components: {
        'plan-picker': PlanPickerComponent // plan-picker took from PlanPickerComponent (one level down this root element)
    }
})