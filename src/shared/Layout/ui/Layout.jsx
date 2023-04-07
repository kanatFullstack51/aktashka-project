import React, { Children } from 'react';
import { Header } from 'src/widgets/Header';
import { Footer } from 'src/widgets/Footer';

export const Layout = ({children}) => {
    return (
     <><Header />
     {children}
     <Footer /></>
    );
};
