// child component
let PlanComponent = {
    template: '#plan-template',
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
        plan: PlanComponent // plan took from PlanComponent (child component)
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