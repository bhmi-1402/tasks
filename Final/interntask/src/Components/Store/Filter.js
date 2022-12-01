import './Filter.css';
export default function Filter() {
    return <div className='filters'>
        <h1>Filters</h1>
        <h2>Cost</h2>
        <div className="costFilter">
            <div>
                <input type="radio" name="filterCost" id="1500-4000" />
                <label htmlFor="1500-4000">Rs. 1500-4000</label>
            </div>
            <div>
                <input type="radio" name="filterCost" id="4001-7000" />
                <label htmlFor="4001-7000">Rs. 4000-7000</label>
            </div>
            <div>
                <input type="radio" name="filterCost" id="7000+" />
                <label htmlFor="7000+">Rs. 7000+</label>
            </div>
        </div>
        <h2>Colour</h2>
        <div className="filterColor">
            <div className="clrpicker" id="red"></div>
            <div className="clrpicker" id="skyblue"></div>
            <div className="clrpicker" id="yellow"></div>
            <div className="clrpicker" id="lightgreen"></div>
            <div className="clrpicker" id="yellowgreen"></div>
        </div>
        <h2>Design templates</h2>
        <div className="DesTemp">
            <div>
                <input type="radio" name="FilterDesign" id="2" />
                <label htmlFor="2">2</label>
            </div>
            <div>
                <input type="radio" name="FilterDesign" id="3" />
                <label htmlFor="3">3</label>
            </div>
            <div>
                <input type="radio" name="FilterDesign" id="3+" />
                <label htmlFor="3+">3+</label>
            </div>
        </div>
        <h2>Type</h2>
        <div className="type">
            <div>
                <input type="radio" name="filterType" id="loafers" />
                <label htmlFor="loafers">Loafers</label>
            </div>
            <div>
                <input type="radio" name="filterType" id="Sneakers" />
                <label htmlFor="Sneakers">Snekers</label>
            </div>
        </div>
    </div>;
}
