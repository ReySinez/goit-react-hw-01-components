import PropTypes from "prop-types";
import { TransactionRow } from 'components/Transactions/Transactions'
import css from './TransactionHistory.module.css'

export const TransactionHistory = ({items}) => {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                    <th className={css.header}>Type</th>
                    <th className={css.header}>Amount</th>
                    <th className={css.header}>Currency</th>
                </tr>
            </thead>

            <tbody>
                <TransactionRow items={items} />
            </tbody>
        </table>  
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    })
    ).isRequired
}
