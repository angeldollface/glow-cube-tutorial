import React from 'react';
import { ReactElement } from 'react'
import { renderModel } from './render';
export class ModelCog extends React.Component {
    render(): ReactElement {
        return (
          <>
          </>			
        );
    }
    componentDidMount(): void {
        renderModel();
    }
}
export default ModelCog;