import React, { useState } from 'react';

function Form(props) {

    const { list, setList } = props;
    const [form, setForm] = useState({
        date: "",
        distance: ""
    })

    const handleSubmit = evt => {
        evt.preventDefault();
        const index = list.findIndex(o => o.date === form.date);
        if (index === -1) {
            setList(prevList => prevList.concat({ date: form.date, distance: form.distance }).sort(compareDates));
        }
        else {
            const sumDistance = +list[index].distance + +form.distance;
            setList(prevList => prevList.filter(o => o.date !== form.date).concat({ date: form.date, distance: sumDistance }).sort(compareDates));
        }
    };

    const handleChange = ({ target }) => {
        const name = target.name;
        const value = target.value;
        setForm(prevForm => ({ ...prevForm, [name]: value }));
    };

    function compareDates(a, b) {
        const [aday, amonth, ayear] = a.date.split('.');
        const [bday, bmonth, byear] = b.date.split('.');
        const aDate = new Date(ayear, amonth, aday);
        const bDate = new Date(byear, bmonth, bday);
        if (aDate > bDate) return 1;
        if (aDate < bDate) return -1;

    }

    return (
        <form className="Form" onSubmit={handleSubmit}>
            <label htmlFor="date" className="Date-field">
                <p className="Header">Дата (ДД.ММ.ГГ)</p>
                <input className="Date-input" id="date" name="date" type="text" value={form.date} onChange={handleChange} />
            </label>
            <label htmlFor="distance" className="Dist-field">
                <p className="Header">Пройдено км</p>
                <input className="Dist-input" id="distance" name="distance" type="text" value={form.distance} onChange={handleChange} />
            </label>
            <input type="submit" className="Submit-button" value="ОК" />
        </form>
    )
}

export default Form;