import PropTypes from "prop-types";
import css from './Transactions.module.css'

export const Transaction = ({ items }) => {
    return (items.map(item => {
                   return <tr key={item.id} className={css.item}>
                        <td className={css.tableCell}>{item.type}</td>
                        <td className={css.tableCell}>{item.amount}</td>
                        <td className={css.tableCell}>{item.currency}</td>
                    </tr>
    }))
}
            
Transaction.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    })
    ).isRequired
}