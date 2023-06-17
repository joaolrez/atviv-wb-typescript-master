import 'materialize-css/dist/css/materialize.min.css'
import  Navbar  from '../components/nav';
import { MdModeEdit,MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useEffect, useState, useCallback, SetStateAction } from 'react';
import { AxiosError } from 'axios';
import { api } from '../services/api';

interface ICliente {
    nome: string;
    sobreNome: string;
    id: number;
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: number;
    codigoPostal: string;
    informacoesAdicionais: string;
  }



  
function Clientes (){

    
    const [clientes, setClientes] = useState<ICliente[]>([]);
  


    const getAllClientes = useCallback(() => {
      api
        .get('/clientes', {
        })
        .then(({ data }) => {
          console.log(data);
          setClientes(data);
        })
        .catch((error: Error | AxiosError) => {
          console.log(error);
        });
      setTimeout(() => {
      }, 5000);
    }, [setClientes]);
  
    useEffect(() => {
      getAllClientes();
    }, []);



        return (
            <> 

                <Navbar/>
                <div className="listagem">
                    <main>
                        <div>
                            <div className='col s12 m12 l6 estilo'>
                                <div>
                                    <h4>Clientes</h4>
                                    <table className="responsive-table highlight">
                                        <thead>
                                            <tr>
                                                <th>Nome</th>
                                                <th>Sobrenome</th>
                                                <th>Estado</th>
                                                <th>Cidade</th>
                                                <th>Bairro</th>
                                                <th>Rua</th>
                                                <th>Numero</th>
                                                <th>CodPostal</th>
                                                <th>Complemento</th>
                                                <th>Editar</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {clientes && clientes?.map(cli => {
                                                    return (
                                                        <tr>
                                                            <td>{cli.nome}</td>
                                                            <td>{cli.sobreNome}</td>
                                                            <td>{cli.estado}</td>
                                                            <td>{cli.cidade}</td>
                                                            <td>{cli.bairro}</td>
                                                            <td>{cli.rua}</td>
                                                            <td>{cli.numero}</td>
                                                            <td>{cli.codigoPostal}</td>
                                                            <td>{cli.informacoesAdicionais}</td> 
                                                            <td><Link className='icon' to={`/editar/${cli.id}`}><MdModeEdit/></Link>
                                                            <Link className='icon' to={`/delete/${cli.id}`}><MdDeleteForever/></Link></td>
                                                        </tr>
                                                    )
                                                })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <br />
                        </div>
                        <br />
                    </main>
                </div>

            </>
        )
    }


export default Clientes;