'use client';
import React from 'react';
import Home from './Home/page';

export default class Page extends React.Component {
  //className="flex min-h-screen flex-col items-center justify-between p-24"
  render() {
    return <main style={{ height: '100%' }}>
      <Home></Home>
    </main>
  }
}
