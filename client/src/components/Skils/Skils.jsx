import React from "react"






export default function Home() {
    
    return (
        <div>


            <div className={s.backround}>
                <div className={s.container}>
                <img className={s.image} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="fotopersona"/>
                <h5 className={s.text}>Hola mi nombre es -NOMBRE- , soy un programador FullStack,pertenezco al MEJOR STAND. Bienvenidos a mi pagina, Te invito a que me conozcas</h5>
                </div>
            </div>
    
                <h3>Mi Experiencia</h3>
                <Carrousel />
                 <h3>Skilsssss</h3>
        </div>
    )

};
