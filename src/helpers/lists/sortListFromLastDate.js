import {filter, find, propEq, sort} from 'ramda'
import {isBefore} from 'date-fns'

const diff = (prev, next) => {
  const {dates: prevDates} = prev
  const {dates: nextDates} = next
  const {date: prevOnSaleDate} = find(propEq('type', 'onsaleDate'))(prevDates)
  const {date: nextOnSaleDate} = find(propEq('type', 'onsaleDate'))(nextDates)

  return new Date(nextOnSaleDate) - new Date(prevOnSaleDate)
}

const removeAfterTodayElement = list =>
  filter(({dates}) => {
    const {date: onSaleDate} = find(propEq('type', 'onsaleDate'))(dates)

    return isBefore(new Date(onSaleDate), Date.now())
  }, list)

const sortComicListFromLastDate = list => {
  const filteredList = removeAfterTodayElement(list)

  return sort(diff, filteredList)
}

export default sortComicListFromLastDate
