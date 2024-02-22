const Login = () => {  

    const { register, formState: { errors }, handleSubmit, reset} = useForm(); 
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Usuario</label>
                <input className='model' type="text" {...register('model', {
                    required: true,
                })}/>
                {errors.model?.type === 'required' && <p className="error-message">El campo modelo es requerido</p>}
            </div>
            <div>
                <label>Velocidades</label>
                <input className='speeding' type="text" {...register('speeds', {
                    pattern: /^[0-9]{1,3}$/,
                    required: true,
                })}/>
                {errors.speeds?.type === 'pattern' && <p className="error-message">La velocidad debe ser un valor numérico</p>}
                {errors.speeds?.type === 'required' && <p className="error-message">El campo velocidades es requerido</p>}
            </div>
            <div className='cuadred'>
                <div className='frame'>
                    <label>Cuadro</label>
                    <select {...register('frame')}>
                        <option value="Aluminio">Aluminio</option>
                        <option value="Acero">Acero</option>
                        <option value="Plástico">Plástico</option>
                        <option value="Carbono">Carbono</option>
                        <option value="Otros">Otros</option>
                    </select>
                </div>
                <div className='electric'>
                    <label>Eléctrica</label>
                    <input className="checkbox-css" type="checkbox" {...register('electric')} />
                </div>
            </div>
            <div>
                <label htmlFor="imageUpload">Img URL</label>
                <input className="bicyclesimg" type="text" {...register('image', {
                pattern: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                required:true,
                })}/>
                {errors.image?.type === 'pattern' && <p className="error-message">El formato de la url de la imagen es incorrecto</p>}
                {errors.image?.type === 'required' && <p className="error-message">El campo url de la imagen es requerido</p>}
            </div>
            <input type="submit" value="Añadir" onClick={playSound}/>
       </form>
    );
}
           
export default Login;