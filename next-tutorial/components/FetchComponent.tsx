import React from 'react'

async function getProdcucts(){
    const res = await fetch('http://192.168.31.204:3000/api/user');
    const data = await res.json();
    return data
}

async function FetchComponent() {
    const products = await getProdcucts();
  return (
    <div>
        {products && products.map((product : any) => (
            <div key={product.id} className="p-4 border rounded mb-4">
                <h2 className="text-xl font-bold">{product.title}</h2>
                </div>
        ))}
    </div>
  )
}

export default FetchComponent