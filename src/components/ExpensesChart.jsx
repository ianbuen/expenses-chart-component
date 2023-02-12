import balance from "../logo.svg";
import data from "../data.json";
import { useEffect, useState } from "react";
import "./ExpensesChart.css"


export const ExpensesChart = () => {

    const [expenses, setExpenses] = useState(null);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setExpenses([...data]);
        setTotal(data.reduce((sum, {amount}) => sum + amount, 0));
    }, []);


    const setBar = (amount) => {
        return {
            "height": `${amount / total * 350}%`,
        }
    };

    return (
        <div className="view">
            <div className="balance">
                <p>My balance</p>
                <h1>$921.48</h1>
                <img src={balance} alt="logo-balance" />
            </div>

            <div className="chart">
                <h1>Spending - Last 7 days</h1>

                <ul>
                    {expenses?.map(({amount, day}, i) => {
                        const weekday = (new Intl.DateTimeFormat("en-US", {weekday: 'short'}).format(new Date())).toLowerCase();
                        return <li key={i}><span className={day === weekday ? "cyan" : null} style={setBar(amount)} data-value={`$${amount}`}></span>{day}</li>
                    })}
                </ul>
                
                <div className="details">
                    <p>Total this month</p>
                    <h1>$478.33</h1>

                    <p><span>+2.4%</span> from last month</p>
                </div>
            </div>
        </div>
    );
}
    

export default ExpensesChart