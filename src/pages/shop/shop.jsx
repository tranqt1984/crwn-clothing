import React from 'react';
import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview';

class ShopPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render(){
    const {collections} = this.state;
    return (
      <div className="shop-page">
        {
          collections.map(({id, items, title}) => (
            <CollectionPreview key={id} items={items} title={title}/>
          ))
        }
      </div>
    )
  }
}

export default ShopPage;