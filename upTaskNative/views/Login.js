import React from 'react';
import { View } from 'react-native';
import { Container, Text, Button, H1, Input, Form, Item } from 'native-base';

const Login = () => {
     return ( 
          <Container>
               <View>
                    <H1>UpTask</H1>

                    <Form>
                         <Item>
                              <Input
                                   autoCompleteType="email"
                                   placeholder="Email"
                              />
                         </Item>
                         <Item inlineLabel last>
                              <Input
                                   secureTextEntry={true}
                                   placeholder="Password"
                              />
                         </Item>
                    </Form>

                    <Button
                         square
                         block
                    >
                         <Text>Light</Text>
                    </Button>

                    <Text>Crear Cuenta</Text>
               </View>
          </Container>
      );
}
 
export default Login;