import React from "react";
import {Container} from './styles';
import Footer from '../Footer';
import Main from '../Main';
// import Header from '../Header';

class Layout extends React.Component{

    render(){
        return(
            <Container>
                {/* <Header/> */}
                <Main/>
                <Footer/>
            </Container>
        )
    }
}

export default Layout