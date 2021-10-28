import getRandomPersone from "./utils/get-random-persone";
import {photoDatabaseItem} from "./types/common.type";

export const photosDatabase: photoDatabaseItem[] = [
    {
        src: "/images/nature/05da8387a34b4b8dc4896287fe722451.jpg",
        id: 1,
        alt: 'nature',
        like: true,
        comments: [
            {name: getRandomPersone(), text: 'Like'},
            {name: getRandomPersone(), text: 'Hello'},
            {name: getRandomPersone(), text: 'Like'},
        ]

    },
    {
        src: "/images/nature/521559-reflection.jpg",
        id: 2,
        alt: 'nature',
        like: false,
        comments: []
    },
    {
        src: "/images/nature/b3c72b846202cf22ab5ff37f6a8f206d.jpg",
        id: 3,
        alt: 'nature',
        like: false,
        comments: []
    },
    {
        src: "/images/nature/bac020913e6638820026d45933f60f49.jpg",
        id: 4,
        alt: 'nature',
        like: false,
        comments: []
    },
    {
        src: "/images/nature/canada-moraine-lake-ozero-gory.jpg",
        id: 5,
        alt: 'nature',
        like: false,
        comments: []
    },
    {
        src: "/images/nature/EGhg21XW4AASqyM.jpg",
        id: 6,
        alt: 'nature',
        like: false,
        comments: []
    },
    {
        src: "/images/nature/gori-1920x1080-les-ozero-nebo-16034.jpg",
        id: 7,
        alt: 'nature',
        like: false,
        comments: []
    },
    {
        src: "/images/nature/wallpaper-moraine-lake-lake-louise-banff-national-park-canada.jpg",
        id: 8,
        alt: 'nature',
        like: false,
        comments: []
    },
    {
        src: "/images/animals/0f6b450a0fed90f0139416424ef58147.jpeg",
        id: 9,
        alt: 'animal',
        like: false,
        comments: []
    },
    {
        src: "/images/animals/350479-admin.jpg",
        id: 10,
        alt: 'animal',
        like: false,
        comments: []
    },
    {
        src: "/images/animals/1289634687_12863.jpg",
        id: 11,
        alt: 'animal',
        like: false,
        comments: []
    },
    {
        src: "/images/animals/animals-tiger-wildlife-big-cats-Zoo-baby-animals-jungle-Jaguar-fauna-mammal-cat-like-mammal-savanna-261179.jpg",
        id: 12,
        alt: 'animal',
        like: false,
        comments: []
    },
    {
        src: "/images/animals/e6a14edc773253cf2361def810f2cb96.jpeg",
        id: 13,
        alt: 'animal',
        like: false,
        comments: []
    },
    {
        src: "/images/animals/Leopards_526111_2500x1667.jpg",
        id: 14,
        alt: 'animal',
        like: false,
        comments: []
    },
    {
        src: "/images/animals/zhirafy-afrika-savanna-zelen.jpg",
        id: 15,
        alt: 'animal',
        like: false,
        comments: []
    },
    {
        src: "/images/auto/2801_953979786.jpg",
        id: 16,
        alt: 'auto',
        like: false,
        comments: []
    },
    {
        src: "/images/auto/49932.jpg",
        id: 17,
        alt: 'auto',
        like: false,
        comments: []
    },
    {
        src: "/images/auto/maserati-granturismo-black-6260.jpg",
        id: 18,
        alt: 'auto',
        like: false,
        comments: []
    },
    {
        src: "/images/auto/spajder-priroda-stoit.jpg",
        id: 19,
        alt: 'auto',
        like: false,
        comments: []
    },
    {
        src: "/images/architecture/9e04655b65347e001018a6611f0f1ab5.jpeg",
        id: 20,
        alt: 'architecture',
        like: false,
        comments: []
    },
    {
        src: "/images/architecture/1579455663_1-1.jpg",
        id: 21,
        alt: 'architecture',
        like: false,
        comments: []
    },
    {
        src: "/images/architecture/ea1d738a8b3c376a7cc3b82c754a9531.jpeg",
        id: 22,
        alt: 'architecture',
        like: false,
        comments: []
    },
    {
        src: "/images/architecture/siettl-sovremennaya-arxitektura-blur-neboskreby.jpg",
        id: 23,
        alt: 'architecture',
        like: false,
        comments: []
    },

];