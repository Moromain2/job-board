import './App.css'

// Data import
import jobs_data from "./data/jobs_data.json";

// Components imports
import JobOffer from './assets/components/JobOffer';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';

function App() {
  return (
    <>
      <Header title="The Job Board" />
      <div className="container offers-wrapper">
        {jobs_data.map((job) => {
          return (
            <JobOffer
              key={job.job_title}
              title={job.job_title}
              type={job.job_type}
              country={job.job_location.country}
              city={job.job_location.city}
              color={job.color}
            />
          )
        })}
      </div>
      <Footer student_name="Romain" student_url="https://github.com/Moromain2"/>
    </>
  )
}

export default App
