import React, { useEffect, useState } from 'react'
import styles from './FinancialTab.module.scss'
import { API } from '../../api'

const FinancialTab = () => {
  const [incomesList, setIncomesList] = useState([])
  const [expensesList, setExpensesList] = useState([])
  const [activeTab, setActiveTab] = useState('incomes')

  const fetchData = (type) => {
    const endpoint =
      type === 'incomes' ? 'financial-incomes' : 'financial-expenses'

    fetch(`${API}/${endpoint}/`)
      .then((response) => response.json())
      .then((data) => {
        if (type === 'incomes') {
          setIncomesList(data)
        } else {
          setExpensesList(data)
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }

  useEffect(() => {
    fetchData(activeTab)
  }, [activeTab])

  const handleTabChange = (type) => {
    setActiveTab(type)
  }

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' }
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    )
    return formattedDate
  }

  return (
    <div className={styles.tab}>
      <header>
        <button
          onClick={() => handleTabChange('incomes')}
          className={activeTab === 'incomes' ? styles.active : ''}
        >
          Поступили
        </button>
        <button
          onClick={() => handleTabChange('expenses')}
          className={activeTab === 'expenses' ? styles.active : ''}
        >
          Пожертвовали
        </button>
      </header>
      <table className={styles.table}>
        <thead className={styles.table__header}>
          <tr>
            <th>ФИО</th>
            <th>Сумма</th>
            <th>Дата</th>
          </tr>
        </thead>
        <tbody>
          {activeTab === 'incomes'
            ? incomesList.map((item) => (
                <tr key={item.id}>
                  <td>{item.full_name}</td>
                  <td>{item.amount}сом</td>
                  <td>{formatDate(item.date)}</td>
                </tr>
              ))
            : expensesList.map((item) => (
                <tr key={item.id}>
                  <td>{item.full_name}</td>
                  <td>{item.amount}сом</td>
                  <td>{formatDate(item.date)}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  )
}

export default FinancialTab
