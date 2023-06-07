import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {DashLayout, Public, Layout, Login, Welcome, NoteList, UsersList, EditUser, NewUserForm, EditNote, NewNote} from '../index'

const App = () => {
  return (
   <Routes>

      <Route path='/' element={<Layout />}>
        <Route index element={<Public />} />
        <Route path='/login' element={<Login />} />

        <Route path='/dash' element={<DashLayout/>}>

            <Route index element={<Welcome />} />

            <Route path="users">

                <Route index element={<UsersList />} />
                <Route path=':id' element={<EditUser/>}/>
                <Route path='new' element={<NewUserForm/>}/>

            </Route>

            <Route path="notes">

                <Route index element={<NoteList />} />
                <Route path='id' element={<EditNote/>}/>
                <Route path='new' element={<NewNote/>}/>
                
            </Route>

        </Route>

      </Route>

   </Routes> 
  )
}

export default App