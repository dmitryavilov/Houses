document.addEventListener('DOMContentLoaded', function(){
        const menuBlock = document.querySelector('.navigation-block'),
              menuBtn = document.querySelector('.phone-and-menu-block__menu-btn-wrapper');
        //HEADER
    //VARS

    const container = {
        template: `
        <div style="max-width:1140px; overflow:hidden; margin:0 auto; width: 98%">
             <slot></slot>
        </div>`
    }

    const textField = {
        data(){
            return{
                def: {
                    backgroundColor: 'white',
                    border: 'none',
                    borderRadius: '30px',
                    paddingLeft: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#606060',
                    fontSize: '13px',
                    fontWeight: '100'
                }
            }
        },
        props: {
            width: String,
            height: String,
            placeholder: String
        },
        template: `
        <input required aria-required="true" type="text" :style="[def, {width: width + 'px', height: height + 'px'}]" :placeholder="placeholder"></input>
        `
    }

    const btn = {
        data(){
            return {
                btnDef: {
                    color: 'white',
                    border: 'none',
                    borderRadius: '30px',
                    fontFamily: 'Roboto',
                    fontWeight: '400'
                }
            }
        },
        props: {
            bgc: String,
            width: String,
            height: String,
            textSize: String,
            btnText: String,
            classes: String
        },
        template: `
        <button :style="[btnDef, {width: width + 'px', height: height + 'px', fontSize: textSize + 'px', backgroundColor: bgc}]" :class="classes">{{btnText}}</button>`
    }

    const menuNavigation = {
        data(){
            return {
                styles: {
                    fontSize: '17px',
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    marginTop: '14px',
                    marginBottom: '14px',
                    color: 'white',
                    textAlign: 'center'
                },
                menuElems: [
                    {text: 'Наши услуги', link: '#'},
                    {text: 'Рассчитать стоимость', link: '#'},
                    {text: 'Портфолио', link: '#'},
                    {text: 'Почему мы', link: '#'},
                    {text: 'Процесс взаимодействия', link: '#'},
                    {text: 'Компании', link: '#'},
                    {text: 'Наша Команда', link: '#'},
                    {text: 'Наши услуги', link: '#'},
                    {text: 'Обратная связь', link: '#'}                   
                ]
            }        
        },
        template: `
        <nav class="navigation-block navigation-block_pos">
            <div class="navigation-block__content" style="height: 90%; width:100%; overflow-y: auto; display:flex; align-items: center; justify-content: center">
                <div class="navigation-block__content-wrapper" style="display:flex; flex-direction: column; align-items: center">
                    <p :style="styles" class="navigation-block__elem" v-for="elem in menuElems">
                        <a :href="elem.link" style="text-decoration:none; color:white" class="navigation-block__link">{{elem.text}}</a>
                    </p>
                </div>
            </div>
        </nav>`
    }
    //COMPONENTS

    new Vue({
        el: '.wrapper',
        data: {
          menuBl: document.querySelector('.navigation-block'),
          menuBtn: menuBtn
        },
        components: {
            container,
            textField,
            btn,
            menuNavigation
        },
        methods: {
            menuToggle(){
                document.querySelector('.navigation-block').classList.toggle('navigation-block_toggle');
                document.querySelectorAll('.phone-and-menu-block__elem')[0].classList.toggle('phone-and-menu-block_elem_1_active');
                document.querySelectorAll('.phone-and-menu-block__elem')[1].classList.toggle('phone-and-menu-block_elem_2_active');
                document.querySelectorAll('.phone-and-menu-block__elem')[2].classList.toggle('phone-and-menu-block_elem_3_active');
            }
        }
    });
});