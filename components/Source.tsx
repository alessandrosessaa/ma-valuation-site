import {sources} from '../content/sources';
export default function Source({id}:{id:keyof typeof sources}){return <a className="citation" href={sources[id].url} target="_blank" rel="noreferrer">↗ {sources[id].title}</a>}
