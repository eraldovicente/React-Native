import React, { useEffect, useState, useContext } from 'react'
import { FirebaseContext } from '../../firebase';

const Ordenes = () => {

     // context para las operaciones de firebase
     const { firebase } = useContext(FirebaseContext);

     // state con las ordenes
     const [ordenes, guardarOrdenes] = useState([]);
     
     useEffect(() => {
          const obtenerOrdenes = () => {
               firebase.db.collection('ordenes').where('completado', '==', false).onSnapshot(manejarSnapshot);
          }
          obtenerOrdenes();
     }, []);

     function manejarSnapshot(snapshot) {
          const ordenes = snapshot.docs.map(doc => {
               return {
                    id: doc.id,
                    ...doc.data()
               }
          });
          guardarOrdenes(ordenes);
     }

     return ( 
          <>
               <h1 className="text-3xl font-light mb-4">Ordenes</h1>
          </>
      );
}
 
export default Ordenes;