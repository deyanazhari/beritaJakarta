import React, {Component} from 'react';
import './styles.css';
import axios from 'axios'
import {Button } from 'react-bootstrap'
const api = "https://api.legalisirjakarta.com"

export default class Admin extends Component {   
    constructor(props){
        super(props)
        this.state = {
         artikel:[],
         response:'',
         display:'none'
         }
        }
        componentDidMount(){
         axios.get(api+'/article?page=1&per_pages=999').then(res=> {
             console.log(res.data.data)
             this.setState({
                 artikel:res.data.data
             })
         })
         
         var el = document.getElementById("wrapper");
        var toggleButton = document.getElementById("menu-toggle");

        toggleButton.onclick = function () {
            el.classList.toggle("toggled");
        };
        } 
        render(){
        
    return (
        
        <div class="d-flex" id="wrapper">
        <div class="bg-white" id="sidebar-wrapper">
            <div class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><em className='berita'>Berita</em> Jakarta</div>
            <div class="list-group list-group-flush my-3">
                <a href="/Admin" class="list-group-item list-group-item-action bg-transparent second-text active"><i
                        class="fas fa-tachometer-alt me-2"></i>Dashboard</a>
                <a href="/Admin/Artikel" class="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        class="fas fa-project-diagram me-2"></i>Artikel</a>
                <a href="/" class="list-group-item list-group-item-action bg-transparent text-danger fw-bold"><i
                        class="fas fa-power-off me-2"></i>Logout</a>
            </div>
        </div>
       
        <div id="page-content-wrapper">
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                <div class="d-flex align-items-center">
                    <i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>
                    <h2 class="fs-2 m-0">Dashboard</h2>
                </div>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle second-text fw-bold" href="#" id="navbarDropdown"
                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-user me-2"></i>Admin
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Profile</a></li>
                                <li><a class="dropdown-item" href="#">Settings</a></li>
                                <li><a class="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>

            <div class="container-fluid px-4">
                <div class="row my-5">
                    <h3 class="fs-4 mb-3">Artikel List</h3>
                    <div class="col">
                        <table class="table bg-white rounded shadow-sm  table-hover">
                            <thead>
                                <tr>
                                    <th scope="col" width="50">No</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Date Created</th>
                                    <th scope="col">Last Modified</th>
                                    <th scope="col">Action</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.artikel.map(artikel => 
                                <tr>
                                    <th scope="row">1</th>
                                    <td>{artikel.title}</td>
                                    <td>{artikel.description.substring(0, 20)}</td>
                                    <td>{artikel.createdAt.substring(0,10)}</td>
                                    <td>{artikel.updatedAt.substring(0,10)}</td>
                                    <td>
                                        
                                        <Button href={`/EditArtikel/${artikel.id}`} variant="info">Edit</Button>
                                        
                                        </td>
                                </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
                            }
}
