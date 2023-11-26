import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { List } from '../list/list';
import { Login } from '../login/login';
import { Register } from '../register/register';

const Details = lazy(() => import('../../pages/details'));

export function AppRoutes() {
  return (
    <main>
      <Suspense>
        <Routes>
          <Route path="/" element={<List></List>}></Route>
          <Route path="/details/:id" element={<Details></Details>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
      </Suspense>
    </main>
  );
}
