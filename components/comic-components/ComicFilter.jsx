import comicsJson from './DummyComics.json';

export default function ComicFilter(name, author) {
    const comic = comicsJson.filter(obj => {return obj.name === name && obj.author === author})

    return comic;
    
}
