module.exports = {

    getCharacters: (req, res)=>res.send('En teoria esto deberia devolver todos los caracteres pero aun no se quien me los va dar.'),

    getCharacter: (req,res) => {
    
        /* aca hago los queryparams que son los que vienen despues del signo de pregunta */
        const id= req.params.id;
        const queryParams = req.query;
        console.log(queryParams); 
        /* 
        Entonces, en postman me va seguir devolviendo el res.send con el mensaje, pero en la consola me devuelve los queryparams que hardcode por get en postman localhost:4001/character/1?order=asc&filter=new 
    
        otra forma: Como se que le estoy mandand order y filter podria hacer
        
        const {order, filter} = req,params;
        console.log(order);
        console.log(filter);
    
        basicamente le aplico destructiring al objeto. y los tomo por separado
        
        En resumen los pathParams son los que a mi me van a ayudar a identificar cuestiones especificas de la ruta y los queryParams son los parametros que me van ayudar a identificar caracteristicas diferentes de una misma ruta, porque a una ruta la podes recibir con order:asc o order:desc o con filter:xxx etc etc. Su uso podria ser para filtrar por precio por nuevo por orden etc, buscar en tablas de busquedas */
        res.send('En teoria yo tendria que devolver el character con el id proporcionado pero aun no se quien me lo va dar.')
    },

    createCharacter: (req,res)=>res.send('En teoria yo tendria que enviar los datos para crear un nuevo character'),

    deleteCharacter: (req, res)=>res.send('En teoria tendria que enviar los datos para eliminar un character en funcion del ID proporcionado.')
}
    
