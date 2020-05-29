document.addEventListener("DOMContentLoaded",(function(){document.querySelector(".navigation-block"),document.querySelector(".phone-and-menu-block__menu-btn-wrapper");const e={props:{styles:String},template:'\n        <div :style="" style="max-width:1140px; overflow:hidden; margin:0 auto; width: 95%">\n             <slot></slot>\n        </div>'},l={data:()=>({def:{backgroundColor:"white",border:"none",borderRadius:"30px",paddingLeft:"30px",display:"flex",alignItems:"center",color:"#606060",fontSize:"13px",fontWeight:"100"}}),props:{width:String,height:String,placeholder:String,classes:String},template:'\n        <input required aria-required="true" :class="classes" type="text" :style="[def, {width: width + \'px\', height: height + \'px\'}]" :placeholder="placeholder"></input>\n        '},a={data:()=>({btnDef:{color:"white",border:"none",borderRadius:"30px",fontFamily:"Roboto",fontWeight:"400",position:"relative",zIndex:0}}),props:{bgc:String,width:String,height:String,textSize:String,btnText:String,classes:String},template:"\n        <button :style=\"[btnDef, {width: width + 'px', height: height + 'px', fontSize: textSize + 'px', backgroundColor: bgc}]\" :class=\"classes\">{{btnText}}</button>"},o={data:()=>({styles:{fontSize:"17px",fontFamily:"Roboto",fontWeight:400,marginTop:"14px",marginBottom:"14px",color:"white",textAlign:"center"},menuElems:[{text:"Наши услуги",link:"#block-1"},{text:"Рассчитать стоимость",link:"#block-2"},{text:"Портфолио",link:"#block-3"},{text:"Почему мы",link:"#block-4"},{text:"Процесс взаимодействия",link:"#block-5"},{text:"Компании",link:"#"},{text:"Наша Команда",link:"#"},{text:"Наши услуги",link:"#"},{text:"Обратная связь",link:"#"}]}),methods:{menuToggle(){document.querySelector(".navigation-block").classList.toggle("navigation-block_toggle"),document.querySelectorAll(".phone-and-menu-block__elem")[0].classList.toggle("phone-and-menu-block_elem_1_active"),document.querySelectorAll(".phone-and-menu-block__elem")[1].classList.toggle("phone-and-menu-block_elem_2_active"),document.querySelectorAll(".phone-and-menu-block__elem")[2].classList.toggle("phone-and-menu-block_elem_3_active")}},template:'\n        <nav class="navigation-block navigation-block_pos">\n            <div class="navigation-block__content" style="height: 95%; width:100%; overflow-y: auto; display:flex; align-items: center; justify-content: center">\n                <div class="navigation-block__content-wrapper" style="display:flex; flex-direction: column; align-items: center">\n                    <p :style="styles" class="navigation-block__elem" v-for="elem in menuElems">\n                        <a href="#" v-scroll-to=elem.link @click="menuToggle()" style="text-decoration:none; color:white" class="navigation-block__link">{{elem.text}}</a>\n                    </p>\n                </div>\n            </div>\n        </nav>'},n={data:()=>({blockStyles:{width:"100%",height:"56px",textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",marginTop:"62px",marginBottom:"30px"},lineStyles:{width:"377px",height:"1px"}}),props:{text:String,textColor:String,lineColor:String},template:'\n        <div class="page-title-block" :style="blockStyles">\n            <h2 class="page-title-block__text" :style="{color: textColor}" style="font-size: 36px; font-family: \'Roboto\';font-weight: 400">{{text}}</h2>\n            <div class="page-title-block__underline" :style="[lineStyles, {backgroundColor: lineColor}]"></div>\n        </div>'},s={data:()=>({blockStyles:{width:"100%",height:"340px",display:"flex",alignItems:"center",justifyContent:"space-between"},titleStyles:{fontFamily:"Roboto",fontWeight:400,fontSize:"28px",color:"#19b5fe"},descriptionStyles:{fontFamily:"Roboto",fontWeight:300,fontSize:"18px",color:"#464646",lineHeight:"24px"},mainWrapperStyles:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"flex-start",height:"191px"},textWrapperStyles:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"115px",width:"555px"},imgStyles:{width:"555px",height:"320px"},transfers:[{title:"Дизайн интерьера",description:"\n                            Услуга, направленная на разработку интерьеров помещений с\n                            целью обеспечить удобство и эстетически приятное ощущение у\n                            человека при нахождении в помещении",imgLink:"img/transfer/1.webp"},{title:"Дизайн экстерьера",description:"\n                            Услуга, направленная на разработку дизайна прилегающих элементов \n                            зданий, а также дизайн самих зданий, позволяющая обе \n                            спечить удобство людей при нахождении на территории",imgLink:"img/transfer/2.webp"},{title:"Визуализация",description:"\n                            Услуга, направленная на визуализацию помещений с\n                            понять, как оно будет выглядеть в итоге. Это позволяет\n                            исключить ошибки при выборе дизайна",imgLink:"img/transfer/3.webp"}]}),template:'\n        <div class="transfer-list-block">\n            <div class="transfer-list-block__elem" v-for="transfer in transfers" :style="blockStyles">\n                <div class="transfer-list-block__main-wrapper" :style="mainWrapperStyles">\n                    <div class="transfer-list-block__text-wrapper" :style="textWrapperStyles">\n                        <h2 :style="titleStyles" class="transfer-list-block__title">{{transfer.title}}</h2>\n                        <p  :style="descriptionStyles" class="transfer-list-block__description">{{transfer.description}}</p>\n                    </div>\n                    <slot>\n                    \n                    </slot>\n                </div>\n               <img :src="transfer.imgLink" :style="imgStyles" class="transfer-list-block__img">\n            </div>\n        </div>'},c={data:()=>({tabs:[{text:"ВСЕ ПРОЕКТЫ",class:"tabulation-block_tab_active tabulation-block_tab_1"},{text:"ЭКСТЕРЬЕРЫ",class:"tabulation-block_tab_2"},{text:"ЖИЛЫЕ ИНТЕРЬЕРЫ",class:"tabulation-block_tab_3"},{text:"ОБЩЕСТВЕННЫЕ ИНТЕРЬЕРЫ",class:"tabulation-block_tab_4"}],allProjects:[{img:"img/portfolio/1.webp"},{img:"img/portfolio/2.webp"},{img:"img/portfolio/3.webp"},{img:"img/portfolio/4.webp"},{img:"img/portfolio/5.webp"},{img:"img/portfolio/6.webp"}],exteriors:[{img:"img/portfolio/1.webp"},{img:"img/portfolio/2.webp"},{img:"img/portfolio/3.webp"},{img:"img/portfolio/6.webp"}],liveInteriors:[{img:"img/portfolio/1.webp"},{img:"img/portfolio/2.webp"},{img:"img/portfolio/4.webp"},{img:"img/portfolio/5.webp"},{img:"img/portfolio/6.webp"}],publicInteriors:[{img:"img/portfolio/5.webp"},{img:"img/portfolio/4.webp"},{img:"img/portfolio/6.webp"}]}),methods:{tabToggle(t){const e=document.querySelectorAll(".tabulation-block__tab"),l=document.querySelectorAll(".tabulation-block__projects-wrapper");for(i=0;i<e.length;i++)e[i].classList.remove("tabulation-block_tab_active"),l[i].classList.remove("tabulation-block_projects_active");let a=event.target;a.closest(".tabulation-block__tab").classList.add("tabulation-block_tab_active"),a.closest(".tabulation-block__tab").classList.contains("tabulation-block_tab_1")?l[0].classList.add("tabulation-block_projects_active"):a.closest(".tabulation-block__tab").classList.contains("tabulation-block_tab_2")?l[1].classList.add("tabulation-block_projects_active"):a.closest(".tabulation-block__tab").classList.contains("tabulation-block_tab_3")?l[2].classList.add("tabulation-block_projects_active"):a.closest(".tabulation-block__tab").classList.contains("tabulation-block_tab_4")&&l[3].classList.add("tabulation-block_projects_active")}},template:'\n        <div class="tabulation-block">\n            <div class="tabulation-block__tabs-wrapper">\n                <div :class="tab.class" class="tabulation-block__tab" @click="tabToggle($event)" v-for="tab in tabs">\n                    <h2 class="tabulation-block__tab-text">{{tab.text}}</h2>\n                </div>\n            </div>\n            <div class="tabulation-block__content-wrapper">\n                <div class="tabulation-block__projects-wrapper tabulation-block_projects_active animation fade-in">\n                    <img v-for="project in allProjects" class="tabulation-block__project" :src="project.img">\n                </div>\n                <div class="tabulation-block__projects-wrapper animation fade-in">\n                    <img v-for="project in exteriors" class="tabulation-block__project" :src="project.img">\n                </div>\n                <div class="tabulation-block__projects-wrapper animation fade-in">\n                    <img v-for="project in liveInteriors" class="tabulation-block__project" :src="project.img">\n                </div>\n                <div class="tabulation-block__projects-wrapper animation fade-in">\n                    <img v-for="project in publicInteriors" class="tabulation-block__project" :src="project.img">\n                </div>          \n            </div>\n        </div>'},r={data:()=>({advantages:[{img:"img/advantages/1.png",text:"Профессиональные дизайнеры и визуализаторы с зарубежной практикой работы",width:"73px",height:"58px"},{img:"img/advantages/2.png",text:"Интеративный подход, работаем до полного согласования с Вами",width:"75px",height:"65px"},{img:"img/advantages/3.png",text:"Решаем вопрос закупки, берем авторский надзор на себя (пакет Full)",width:"60px",height:"57px"},{img:"img/advantages/4.png",text:"Над проектом работает группа специалистов под началом project менеджера в ERP системе",width:"70px",height:"61px"},{img:"img/advantages/5.png",text:"Выполнение раньше установленных сроков",width:"70px",height:"64px"},{img:"img/advantages/6.png",text:"Дарим альбом проекта, вместе с 25% скидкой на следующее обращение",width:"74px",height:"64px"}]}),template:'\n        <div class="advantages-block">\n            <div class="advantages-block__advantage" v-for="advantage in advantages">\n                <div class="advantages-block__img-wrapper">\n                    <img class="advantages-block__img" :style="{height: advantage.height, width: advantage.width}" :src="advantage.img">\n                </div>\n                <p class="advantages-block__text">\n                    {{advantage.text}}\n                </p>\n            </div>\n        </div>'},p={data:()=>({items:[{text:"Заполнение брифа",img:"img/process/1.webp"},{text:"Исследование",img:"img/process/2.webp"},{text:"Идея",img:"img/process/3.webp"},{text:"Завершение",img:"img/process/4.webp"}]}),template:'\n        <div class="process-list-block">\n            <div class="process-list-block__item" v-for="item in items">\n                <img class="process-list-block__img" :src="item.img">\n                <div class="process-list-block__text-wrapper">\n                    <h2 class="process-list-block__text">{{item.text}}</h2>\n                </div>\n            </div>\n        </div>'},b={data:()=>({team:[{img:"img/team/1.webp",name:"Ирина Притыкина",desc:"Директор компании"},{img:"img/team/2.webp",name:"Игорь Карий",desc:"Финансовый директор"},{img:"img/team/3.webp",name:"Илья Кондрашин",desc:"Инженер модельер"},{img:"img/team/4.webp",name:"Маргарита Гордеева",desc:"3D дизайнер"},{img:"img/team/5.webp",name:"Светлана Коток",desc:"Дизайнер интерьеров"},{img:"img/team/6.webp",name:"Максим Ковальский",desc:"Дизайнер ландшафтов"}]}),template:'\n        <div class="team-block">\n            <div class="team-block__person" v-for="item in team">\n                <img :src="item.img" class="team-block__img">\n                <h2 class="team-block__title">{{item.name}}</h2>\n                <p class="team-block__description">{{item.desc}}</p>\n            </div>\n        </div>'};VueScrollTo.setDefaults({container:"body",duration:500,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),new Vue({el:".wrapper",data:{meter:5,defaultPrice:4850,objectPrice:48500,finalPrice:64020},components:{container:e,textField:l,btn:a,menuNavigation:o,blockTitle:n,transferList:s,tabulation:c,advantages:r,processList:p,teamList:b},filters:{format:t=>t.toString().replace(/(\d)(?=(\d{3})+([^\d]|$))/g,"$1 ")},methods:{menuToggle(){document.querySelector(".navigation-block").classList.toggle("navigation-block_toggle"),document.querySelectorAll(".phone-and-menu-block__elem")[0].classList.toggle("phone-and-menu-block_elem_1_active"),document.querySelectorAll(".phone-and-menu-block__elem")[1].classList.toggle("phone-and-menu-block_elem_2_active"),document.querySelectorAll(".phone-and-menu-block__elem")[2].classList.toggle("phone-and-menu-block_elem_3_active")},calcBtnActive(e){const l=document.querySelectorAll(".calculator-block__button");for(i=0;i<l.length;i++)l[i].classList.remove("calculator-block_button_active");return t=event.target.closest(".calculator-block__button"),t.classList.add("calculator-block_button_active"),l[0].classList.contains("calculator-block_button_active")?this.finalPrice=3*(+this.defaultPrice+ +this.objectPrice)/5:l[1].classList.contains("calculator-block_button_active")?this.finalPrice=6*(+this.defaultPrice+ +this.objectPrice)/5:l[2].classList.contains("calculator-block_button_active")?this.finalPrice=9*(+this.defaultPrice+ +this.objectPrice)/5:void 0},resultToggleOn(){document.querySelector(".calculator-block__result-wrapper-sm").classList.contains("calculator-block_result-wrapper-sm_active")||document.querySelector(".calculator-block__result-wrapper-sm").classList.add("calculator-block_result-wrapper-sm_active")},resultToggleOff(){document.querySelector(".calculator-block__result-wrapper-sm").classList.remove("calculator-block_result-wrapper-sm_active")}}})}));