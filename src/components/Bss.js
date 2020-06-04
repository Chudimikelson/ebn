import React, { Component } from 'react'
import Bestsellers from './Bestsellers';
import {ProductConsumer} from '../Context';

export default class ProductList extends Component {
  render() {
    return (

        <section className="mt-n5 mt-md-n6 mb-4">
          <div class="shadow-box container bring-to-front">
            <div className="row gap-y">
              <div className="col-12">
                <div class="bg-contrast p-3 rounded h-100">
                <div class="py-2"><span class="text-brand bold">Explore</span>
          <h3>Bestsellers</h3>
        </div>
                <div className="row mx-auto">
                <ProductConsumer>
                      {value => {
                        return value.bestsellers.map( bestseller => {
                          return <Bestsellers key={bestseller.id} bestseller={bestseller}/>;
                        });
                      }}
                </ProductConsumer>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section> 
    )
  }
}
