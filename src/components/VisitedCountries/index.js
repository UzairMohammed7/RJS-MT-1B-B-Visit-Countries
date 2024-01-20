import './index.css'

const VisitedCountries = props => {
  const {eachCountryDetails, onRemoveCountries} = props
  const {id, imageUrl, name} = eachCountryDetails

  const onClickRemove = () => {
    onRemoveCountries(id)
  }

  return (
    <li className="visited-country-list-style">
      <img src={imageUrl} alt="thumbnail" className="country-img" />
      <div className="country-and-btn">
        <p className="country-name">{name}</p>
        <button
          className="remove-btn"
          type="button"
          data-testid="delete"
          onClick={onClickRemove}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
