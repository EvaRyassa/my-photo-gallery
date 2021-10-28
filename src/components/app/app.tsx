import {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './app.css';
import PhotoDiv from "../photos/photos";
import Sidebar from "../sidebar/sidebar";
import PhotoModal from "../photo-modal/photo-modal";
import {photosDatabase} from "../../photos-database";

interface appState {
    isOpen: boolean;
    filter: string;
    photo:any
}


class App extends Component{
    state:appState
    constructor(prop: any) {
        super(prop);
        this.state = {
            isOpen: false,
            filter: '',
            photo: null
        }
    }

    /**
     * обработка клика по фото
     * @param index - текущий индекс фото
     */
    onClickPhoto = (index:number) => {
        this.setState({isOpen: true});
        const [photoItem] = photosDatabase.filter(item => item.id === index);
        this.setState({photo: photoItem});
        (document.querySelector('.container') as any).style.overflow="hidden";
    }

    /**
     * обработчик клика по разделам
     * @param alt - идентификатор раздела
     */
    onClickFilter = (alt: string) => {
        this.setState({filter: alt});
        return true;
    }

    /**
     * обработчик клика по кнопке закрытия модального окна
     */
    onCloseModal = () => {
        this.setState({isOpen: false});
        (document.querySelector('.container') as any).style.overflow="auto";
    }

    render() {
        const filter = document.location.pathname.slice(1);
        const {isOpen, photo} = this.state;
        return (
            <div className='container'>
            <Router>
                <Sidebar onClickFilter={this.onClickFilter}/>
                <Switch>
                    <Route exact path="/">
                            <PhotoDiv alt={filter} onClickPhoto={this.onClickPhoto}/>

                    </Route>
                    <Route exact path="/nature">
                            <PhotoDiv alt='nature' onClickPhoto={this.onClickPhoto}/>

                    </Route>
                    <Route exact path="/animal">
                            <PhotoDiv alt='animal' onClickPhoto={this.onClickPhoto}/>

                    </Route>
                    <Route exact path="/auto">
                            <PhotoDiv alt="auto" onClickPhoto={this.onClickPhoto}/>

                    </Route>
                    <Route exact path="/architecture">
                            <PhotoDiv alt="architecture" onClickPhoto={this.onClickPhoto}/>

                    </Route>

                </Switch>
            </Router>
                { isOpen && (<PhotoModal album={filter} onCloseModal={this.onCloseModal} openPhoto={photo}/>)}
    </div>


        );
    }
}

export default App;
