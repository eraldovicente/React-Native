const Usuario = require('../models/Usuario');
const Proyecto = require('../models/Proyecto');
const Tarea = require('../models/Tarea');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config({path: 'variables'});

// Crea y firma un JWT
const crearToken = (usuario, secreta, expiresIn) => {
     // console.log(usuario);
     const { id, email } = usuario;

     return jwt.sign( { id, email }, secreta, { expiresIn } );
}

const resolvers = {
     Query: {
          obtenerProyectos: async (_, {}, ctx) => {
              const proyectos = await Proyecto.find({ creador: ctx.usuario.id }) ;

              return proyectos;
          }
     },
     Mutation: {
          crearUsuario: async (_, {input}) => {
              const { email, password } = input;

              const existeUsuario = await Usuario.findOne({ email });

              // si el usuario existe
              if (existeUsuario) {
                   throw new Error('El usuario ya esta registrado')
              }

              try {

                    // Hashear password
                    const salt = await bcryptjs.genSalt(10);
                    input.password = await bcryptjs.hash(password, salt);

                    const nuevoUsuario = new Usuario(input);
                    // console.log(nuevoUsuario);

                    nuevoUsuario.save();
                    return "Usuario creado correctamente!";
              } catch (error) {
                   console.log(error);
              }
          },
          autenticarUsuario: async (_, {input}) => {
               const { email, password} = input;

               // Si el usuario existe
               const existeUsuario = await Usuario.findOne({ email });

               // si el usuario existe
               if (!existeUsuario) {
                    throw new Error('El usuario no existe')
               }

               // Si el password es correcto
               const passwordCorrecto = await bcryptjs.compare(password, existeUsuario.password);

               if (!passwordCorrecto) {
                    throw new Error('Password Incorrecto');
               }

               // Dar acceso a la app
               return {
                    token: crearToken(existeUsuario, process.env.SECRETA, '24hr')
               }

          },
          nuevoProyecto: async (_, {input}, ctx) => {
               
               try {
                    const proyecto = new Proyecto(input);

                    // asociar el creador
                    proyecto.creador = ctx.usuario.id;

                    // almacenarlo en la BD
                    const resultado = await proyecto.save();

                    return resultado;
               } catch (error) {
                    console.log(error);
               }
          },
          actualizarProyecto: async (_, {id, input}, ctx) => {
               // Revisar si el proyecto existe o no
               let proyecto = await Proyecto.findById(id);

               if (!proyecto) {
                    throw new Error('Proyecto no encontrado!');
               }

               // Revisar que si la persona que trata de editarlo, es el creador
               if (proyecto.creador.toString() !== ctx.usuario.id) {
                    throw new Error('No tienes las credenciales para editar!');
               }
               // Guardar el proyecto
               proyecto = await Proyecto.findOneAndUpdate({ _id: id}, input, { new: true, useFindAndModify: false });
               return proyecto;
          },
          eliminarProyecto: async (_, {id}, ctx) => {
               // Revisar si el proyecto existe o no
               let proyecto = await Proyecto.findById(id);

               if (!proyecto) {
                    throw new Error('Proyecto no encontrado!');
               }

               // Revisar que si la persona que trata de editarlo, es el creador
               if (proyecto.creador.toString() !== ctx.usuario.id) {
                    throw new Error('No tienes las credenciales para editar!');
               }

               // Eliminar
               await Proyecto.findOneAndDelete({ _id : id});

               return "Proyecto Eliminado!";
          },
          nuevaTarea: async (_, {input}, ctx) => {
               try {
                    const tarea = new Tarea(input);
                    tarea.creador = ctx.usuario.id;
                    const resultado = await tarea.save();
                    return resultado;
               } catch (error) {
                   console.log(error); 
               }
          }
     }
}

module.exports = resolvers;