import React from 'react'
import Search from './Searchbar';
import Table from './Table';
import Edit from './Editdetails';
import Posts from './PostDetails'
import './index.css'
const Index=()=>{
    return(
        <div className="main">
        <Search/>
        <Table/>
        <Posts/>
        <Edit/>
        </div>
    )
}
export default Index;