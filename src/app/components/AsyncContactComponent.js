
import React from "react";
import Loadable from 'react-loadable';

// contact route component
const LoadingComponent = () => <h3>please wait...</h3>;
const ContactComponentPromise = () => import('./ContactComponent');


const AsyncContact = Loadable( {
    loader: ContactComponentPromise,
    loading: LoadingComponent
} );

export class AsyncContactComponent extends React.Component{
    render(){
        return (
            <AsyncContact />
        );
    }
}
