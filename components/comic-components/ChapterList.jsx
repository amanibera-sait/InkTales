import { useSearchParams } from 'next/navigation';
import Chapter from './Chapter';
import ComicFilter from './ComicFilter';

export default function ChapterList({chapters}) {  
    
    const listOfChapters = chapters;

    return (
        <ul>
            {listOfChapters.map((chapter, index) => (
                <Chapter key={index} {...chapter}/>
            ))}
        </ul>
    );
}