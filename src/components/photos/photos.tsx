import './photos.css';
import Header from "../header/header";
import {Component} from "react";
import filterPhotoDatabase from "../../utils/filter-photo-database";


/**
 * Компонент для отображения фото
 */
class PhotoDiv extends Component {
    constructor(public props: any) {
        super(props);
    }
    render () {
        const {onClickPhoto, alt} = this.props;
        const photosDiv = filterPhotoDatabase(alt)
            .map(({src, id, alt}) => {
                return (
                    <div className='photo-album-item' key={id} onClick={() => onClickPhoto(id)}>
                        <img src={src} alt={alt}/>
                    </div>
                )
            });

        return (
            <div className='content'>
                <Header/>
                <div className='photo-album'>
                    {photosDiv}
                </div>
            </div>
        )
}


}

export default PhotoDiv;