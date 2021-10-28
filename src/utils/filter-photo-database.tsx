import {photosDatabase} from "../photos-database";

/**
 * Фильтр фото по выбранному разделу
 * @param alt идентификатор раздела
 */
const filterPhotoDatabase = (alt: string) => {
    const photosDiv = photosDatabase
        .filter(item => { if (alt === '') return true
            return (item.alt === alt)
        })
    return photosDiv;
}

export default filterPhotoDatabase;