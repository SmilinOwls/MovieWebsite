
export default {
    data() {
        return {

        }
    },

    mounted(){
        $('<script>',{src: './js/switch.js'}).appendTo('head');
    },

    methods: {

    },
    template: `
    <nav class="navbar navbar-light bg-light super-head rounded">
        <div class="header-menu-container">
            <a class="navbar-brand sub-title" href="#">20120234</a>
            <a class="navbar-brand title" href="#">Movies info</a>
            <div class="right-container">
                <a class="navbar-brand sub-title" href="#">k_jro07wuj</a>
                <div class="d-flex">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="lightSwitch" />
                        <label class="form-check-label ms-3 navbar-brand sub-title"  for="lightSwitch">
                           Dark mode
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </nav>`
}