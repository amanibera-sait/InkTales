import comicsJson from './DummyComics.json';
import ComicCardBox from './ComicCardBox'

export default function ComicList() {  
    return (
        <ul className='flex overflow-x-auto'>
            {comicsJson.map((comic, index) => (
                <ComicCardBox key={index} {...comic}/>
            ))}
        </ul>
    );
}