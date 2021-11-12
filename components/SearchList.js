import React from 'react'
import Card from './Card';
export default function SearchList ({filteredCard}) {
    const filtered = filteredCard.map(item =>  <Card key={item.id} data={item} />); 
    return (
      <div className="container">
        <div className="row">  
          {filtered}
        </div>
        
      </div>
    );
}
