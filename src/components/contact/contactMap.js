// Componente del mapa de Google Mpas, para cambiar la dirección solo se cambia el src

const ContactMap = () => {
    return(
        <div className='contactMap'>
			<iframe title='Google Map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7531.378227218644!2d-99.69541805395102!3d19.295881216711297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1620454289782!5m2!1ses-419!2smx" width="100%" height="450" style={{border: "0" }} loading="lazy"></iframe>
		</div>
    )
}

export default ContactMap