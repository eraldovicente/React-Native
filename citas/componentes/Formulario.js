import React, {useState} from 'react';
import { Text, StyleSheet, View, TextInput, Button, ScrollView, TouchableHighlight } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Formulario = () => {   

     const [paciente, guardarPaciente] = useState('');
     const [propietario, guardarPropietario] = useState('');
     const [telefono, guardarTelefono] = useState('');
     const [fecha, guardarFecha] = useState('');
     const [hora, guardarHora] = useState('');
     const [sintomas, guardarSintomas] = useState('');
     
     const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
     const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

     const showDatePicker = () => {
          setDatePickerVisibility(true);
     };

     const hideDatePicker = () => {
          setDatePickerVisibility(false);
     };

     const confirmarFecha = fecha => {
          const opciones = { year: 'numeric', month: 'long', day: '2-digit'};
          guardarFecha(date.toLocaleDateString('es-ES', opciones));
          hideDatePicker();
     };

     const showTimePicker = () => {
          setTimePickerVisibility(true);
     };

     const hideTimePicker = () => {
          setTimePickerVisibility(false);
     };

     const confirmarHora = hora => {
          const opciones = { hour: 'numeric', minute: '2-digit', hour12: false };
          guardarHora(hora.toLocaleString('en-US', opciones));
          hideTimePicker();
     };

     // Crear nueva cita
     const crearNuevaCita = () => {
          console.log('Desde crearNuevaCita');
     }

     return ( 
          <>
               <ScrollView style={styles.formulario}>
                    <View>
                         <Text style={styles.label}>Paciente:</Text>
                         <TextInput
                              style={styles.input}
                              onChangeText={ texto => guardarPaciente(texto) }
                         />
                    </View>    

                    <View>
                         <Text style={styles.label}>Dueño:</Text>
                         <TextInput
                              style={styles.input}
                              onChangeText={ texto => guardarPropietario(texto) }
                         />
                    </View>  

                    <View>
                         <Text style={styles.label}>Teléfono Contacto:</Text>
                         <TextInput
                              style={styles.input}
                              onChangeText={ texto => guardarTelefono(texto) }
                              keyboardType="numeric"
                         />
                    </View>    

                    <View>
                         <Text style={styles.label}>Fecha:</Text>
                         <Button title="Seleccionar fecha" onPress={showDatePicker} />
                         <DateTimePickerModal
                         isVisible={isDatePickerVisible}
                         mode="date"
                         onConfirm={confirmarFecha}
                         onCancel={hideDatePicker}
                         locale='es_ES'
                         />                         
                         <Text>{fecha}</Text>
                    </View> 

                    <View>
                         <Text style={styles.label}>Hora</Text>
                         <Button title="Selecsionar Hora" onPress={showTimePicker} />
                         <DateTimePickerModal
                         isVisible={isTimePickerVisible}
                         mode="time"
                         onConfirm={confirmarHora}
                         onCancel={hideTimePicker}
                         locale='es_ES'
                         is24Hour
                         />
                         <Text>{hora}</Text>
                    </View>                    

                    <View>
                         <Text style={styles.label}>Síntomas:</Text>
                         <TextInput
                              multiline
                              style={styles.input}
                              onChangeText={ texto => guardarSintomas(texto) }
                         />
                    </View>  

                    <View>
                         <TouchableHighlight onPress={ () => crearNuevaCita() } style={styles.btnSubmit}>
                              <Text style={styles.textoSubmit}>Crear Nueva Cita</Text>
                         </TouchableHighlight>
                    </View>

               </ScrollView>
                    
          </>
      );
}

const styles = StyleSheet.create({
     formulario: {
          backgroundColor: '#FFF',
          paddingHorizontal: 20,
          paddingVertical: 5,
          marginHorizontal: '2.5%'
     },
     label: {
          fontWeight: 'bold',
          fontSize: 18,
          marginTop: 20
     },
     input: {
          marginTop: 5,
          marginBottom: 10,
          height: 50,
          borderColor: '#e1e1e1',
          borderWidth: 1,
          borderStyle: 'solid'
     },
     btnSubmit: {
          padding: 10,
          backgroundColor: '#7d024e',
          marginVertical: 10
     },
     textoSubmit: {
          color: '#FFF',
          fontWeight: 'bold',
          textAlign: 'center'
     }
})
 
export default Formulario;