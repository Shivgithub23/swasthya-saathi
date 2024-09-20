import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'

const Help = () => {
  return (
    <Jumbotron>
      <h3>About Swaasthya-Saathi</h3>
      <span>
        Dummy.
      </span>
      <div className="mt-5">
        <h3>Help</h3>
        <ul>
          <li>Healthcare</li>
        </ul>
      </div>
      <div className="mt-5">
        <h3>Contact</h3>
        <p> Fax: +91-9611071663</p>
        <p>
          {' '}
          E-Mail:<a href="mailto:swasthyasaathi23@gmail.com"> swasthyasaathi23@gmail.com</a>{' '}
        </p>
      </div>
    </Jumbotron>
  )
}

export default Help
