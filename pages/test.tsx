import React from 'react';
import { logoAndMenu } from '../lib/dataQueries';

export default function Test({data}) {

  return (
    <>
        <div>
            <h1>Test</h1>
        </div>
    </>
  );
}
export async function getStaticProps() {
    const data = await logoAndMenu
    return {
      props:{
        data:data,
      }
    }
  }