import React, { useContext, useEffect, Fragment } from 'react';
import { StyleSheet } from 'react-native';
import FirebaseContext from '../context/firebase/firebaseContext';
import {
     Container,
     Separator,
     Content,
     List,
     ListItem,
     Thumbnail,
     Text,
     Left,
     Body
} from 'native-base';
import globalStyles from '../styles/global';

const Menu = () => {

     // Context de Firebase
     const { menu, obtenerProductos } = useContext(FirebaseContext);

     useEffect(() => {
          obtenerProductos(); 

          console.log(menu);
     }, []);

     const mostrarHeading = (categoria, i) => {

          if (i > 0) {
               const categoriaAnterior = menu[i - 1].categoria;
               if (categoriaAnterior !== categoria ) {
                    return (
                         <Separator>
                              <Text> {categoria} </Text>
                         </Separator>
                    )
               } else {
                    return (
                         <Separator>
                              <Text> {categoria} </Text>
                         </Separator>
                    )
               }
          }
     }

     return ( 
          <Container style={globalStyles.contenedor}>
               <Content style={{ backgroundColor: '#FFF' }}>
                    <List>
                         {menu.map( (platillo, i) => {
                              const { imagen, nombre, descripcion, categoria, precio, id } = platillo;

                              return (
                                   <Fragment key={id}>

                                        {mostrarHeading(categoria, i )}
                                        <ListItem
                                        
                                        >
                                             <Thumbnail large source={{ uri: imagen }} />
                                             <Body>
                                                  <Text>{nombre}</Text>
                                                  <Text
                                                       note
                                                       numberOfLines={2}
                                                  >
                                                       {descripcion}
                                                  </Text>

                                                  <Text>Precio: R$ {precio}</Text>
                                             </Body>
                                        </ListItem>
                                   </Fragment>
                              )
                         })}
                    </List>
               </Content>
          </Container>
      );
}
 
export default Menu;