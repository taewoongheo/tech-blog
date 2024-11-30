import React from 'react';
import Home from './(route)/Home/page';
import { categories } from './Types/Category';

// import dynamic from 'next/dynamic';

// const Home = dynamic(() => import('./(route)/Home/page'), {
//   suspense: true,
// });

export default function Main(): React.ReactElement {
  return (
    <React.Suspense fallback={<div>loading</div>}>
      <Home></Home>
    </React.Suspense>
  );
}
