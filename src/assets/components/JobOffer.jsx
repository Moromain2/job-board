const JobOffer = ({title, type, country, city, color}) => {
    return (
    <div className={`job-offer ${color}`}>
        <h2>{title}</h2>
        <p>{type} - {country} - {city}</p>
    </div>
    )
}

export default JobOffer;