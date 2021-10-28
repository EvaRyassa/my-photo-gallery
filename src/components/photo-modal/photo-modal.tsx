import './photo-modal.css';
import {Component} from "react";
import filterPhotoDatabase from "../../utils/filter-photo-database";
import getRandomPersone from "../../utils/get-random-persone";
import {getComments} from "../../utils/get-comments";
import {saveToLocalStorage} from "../../photos-database";
interface photoModalState {
    hide: boolean
    index: number | null
    comment: string
    like: null | boolean
}
class PhotoModal extends Component {
    state: photoModalState;
    constructor(public props: any) {
        super(props);
        this.state = {
            hide: true,
            index: null,
            comment: '',
            like: null
        }
    }

    /**
     * определяет текущее фото
     */
    currentPhotoItem = () => {
        const {openPhoto,album} = this.props;
        const photos = filterPhotoDatabase(album);
        let index = this.state.index;
        if (index === null) {
            index = photos.map(e => e.id).indexOf(openPhoto.id);
        }
        const length = photos.length;
        if (this.state.like === null)
        {
            this.setState({like: photos[index].like});
        }
        return {photos, index, length, photo:photos[index]}
    }

    /**
     * рендер блока с фото
     */
    photoView = () => {
        const {index, length,photo} = this.currentPhotoItem();
        return (

            <div className="photo-view">
                <div className="fa fa-chevron-left btn-prev" onClick={()=> this.onClickPrev(index, length)}></div>
                <div className="fa fa-chevron-right btn-next" onClick={()=> this.onClickNext(index, length)}></div>
                <img src={photo.src} alt=""/>

            </div>
        )
    };

    /**
     * рендер блока с информацией о фото
     */
    photoInfo = () => {
        const {album} = this.props;
        const {index, length} = this.currentPhotoItem();
        let name;
        switch (album) {
            case '': name ="All pictures";
            break;
            case 'nature': name ="Nature";
                break;
            case 'animal': name ="Animals";
                break;
            case 'auto': name ="Auto";
                break;
            case 'architecture': name ="Architecture";
                break;
        }

        return (
            <div className="photo-info">
                Выбранный раздел: {name} / Фото {index+1} из {length}
            </div>
        )
    };

    /**
     * рендер блока с комментариями
     */
    commentItem = () => {
        const {photo} = this.currentPhotoItem();
        return photo.comments.map((item, i)=> {
            return (
                <div key={i} style={{marginBottom: 10}}>
                    <div className="user-photo">
                        <img src="https://thispersondoesnotexist.com/image" alt="avatar"/>
                    </div>
                    <div className="comment-content">
                        <div className="comment-author">{item.name}</div>
                        <div className="comment-text">{item.text}</div>
                    </div>
                </div>
            )
        })
    }

    /**
     * рендер блока с полем для ввода комментариев и действиями
     */
    commentBlock = () => {
        const {like} = this.state;

        return (
            <div className="modal-comment-block">
                <textarea value={this.state.comment} onChange={this.onChangeTextarea} name="comment" placeholder='Написать комментарий...'></textarea>
                <div className="action">
                    <div className={"fa fa-heart"+(like ? " active" : "")} onClick={this.onToggleLike}></div>
                    <div className="submit" onClick={this.onSubmit}>Отправить</div>
                </div>
                <div className='comment-items'>
                    {this.commentItem()}
                </div>

            </div>
        )
    };

    /**
     * обработчик клика по кнопке вперед
     * @param index индекс текущего элемента (фото)
     * @param length общее количество фото в массиве
     */
    onClickNext = (index:number, length:number) => {
        if (index+1 < length) {
            this.setState({index: index + 1, like:null});
        } else this.setState({index: 0, like:null});
    }

    /**
     * обработчик клика по кнопке назад
     * @param index индекс текущего элемента (фото)
     * @param length общее количество фото в массиве
     */
    onClickPrev = (index:number, length:number) => {
        if (index > 0) {
            this.setState({index: index - 1, like:null});
        } else this.setState({index: length-1, like:null});
    }

    /**
     * отслеживание изменений в поле ввода комментариев
      * @param e
     */
    onChangeTextarea = (e:any) =>{
        this.setState({
            comment: e.target.value
        })
    }

    /**
     * обработчик клика по кнопке "Отправить" комментарий
     */
    onSubmit = () => {
        if (this.state.comment.length > 0) {
            const {photo} = this.currentPhotoItem();
            const name = getRandomPersone();
            const text =  this.state.comment;
            photo.comments.push({
                name: name,
                text: text,
            });
            saveToLocalStorage(photo.id, {
                comments: photo.comments,
                like: photo.like
            });
        }
        this.setState({comment: ''})
    }

    /**
     * переключатель состояния лайка
     */
    onToggleLike = () => {
        const {photo} = this.currentPhotoItem();
        photo.like = !photo.like;
        this.setState({like: photo.like});
        saveToLocalStorage(photo.id, {
            comments: photo.comments,
            like: photo.like
        });

    }

    render() {
        const {onCloseModal} = this.props;
        return (
            <div className="modal-wrapper">
                <div className="modal-close" onClick={onCloseModal}>
                    <div className="fa fa-close"></div>
                </div>
                <div className="modal-body">
                    <div className="modal-photo-block">
                        {this.photoView()}
                        {this.photoInfo()}
                    </div>
                    {this.commentBlock()}
                </div>
            </div>
        )
    }
};

export default PhotoModal;