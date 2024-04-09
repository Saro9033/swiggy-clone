import React, { useState } from 'react'
import ListedItems from './ListedItems';

const ListItems = ({ item, id, BigID, items }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    };
    return (
        <div id="accordion">
            <div className="card border-0">
                <div className="card-header px-0 py-1" onClick={handleToggle} style={{ outline: 'none', cursor: 'pointer', border: 'none', background: 'rgb(255,255,255)' }}>
                    <button className="btn  py-2 px-0 w-100 d-flex justify-content-between align-items-center" >
                        <h6 style={{ fontWeight: '700' }}>{item.title} ({item.listItems.length}) </h6>
                        {!isCollapsed ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
                    </button>
                </div>
                <div id={`collapse${id}`} className={`collapse ${isCollapsed ? '' : 'show'}`} data-bs-parent="#accordion"
                    style={{ transition: 'max-height 0.5s ease' }}>
                    <div className="card-body px-0 py-1">
                        {item.listItems.map((l, i) => (
                            <ListedItems key={i} id={i} smallId={id} src={l.Limg} title={l.Ltitle} price={l.Lprice} desc={l.Ldesc} BigID={BigID} items={items} />
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListItems