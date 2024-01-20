import './index.css'

const VisitCountryList = props => {
  const {eachVisitDetails, onVisitCountries} = props
  const {id, name, isVisited} = eachVisitDetails

  const onClickVisit = () => {
    onVisitCountries(id)
  }

  return (
    <li className="country-list-style">
      <p className="country-name">{name}</p>
      {isVisited === true ? (
        <p className="visitText">Visited</p>
      ) : (
        <button className="visit-btn" type="button" onClick={onClickVisit}>
          Visit
        </button>
      )}
    </li>
  )
}

export default VisitCountryList
