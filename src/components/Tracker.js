function Tracker(props) {

    const { list, setList } = props;

    const handleRemove = ({ target }) => {
        setList(prevList => prevList.filter(o => o.date !== target.id));
    };

    return (
        <div className="Tracker">
            <div className="Track-headers">
                <p className="Header">Дата (ДД.ММ.ГГ)</p>
                <p className="Header">Пройдено км</p>
                <p className="Header">Действия</p>
            </div>
            <div className="Tracklist">
                {list.map(o => <div className="Track-entry" key={o.date}>
                    <p className="Entry-text">{o.date}</p>
                    <p className="Entry-text">{o.distance}</p>
                    <button className="Remove-button" id={o.date} onClick={handleRemove}>✘</button>
                </div>)}
            </div>
        </div>
    )
}

export default Tracker;