import React from "react"
import ActiveStorageProvider from 'react-activestorage-provider'
import {getDog} from '../api'

class DogUpdate extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      dog: null
    }
    this.loadDog()
  }

loadDog = () => {
    getDog(this.props.match.params.id)
        .then((dog) => {
            this.setState({dog})
        })
}

  handleSubmit = (dog)=>{
    this.setState({ dog })
    this.props.getDogsLocal()
  }

  render () {
    const{ dog } = this.state
    return (
      <React.Fragment>
      {!dog && <h2>Loading</h2>}
      {dog &&
      <div>
        <h1>dog: {dog.name} </h1>
        { dog && dog.photo_url &&
          <div>
            <h2>Your Photo is: </h2>
            <img src={dog.photo_url} />
          </div>
        }
        <ActiveStorageProvider
          endpoint={{
            path: `http://localhost:3000/dogs/${dog.id}`,
            model: 'Dog',
            attribute: 'photo',
            method: 'PUT',
            port: 3000,
            host: 'localhost',
            protocol: 'http'
          }}
          onSubmit={this.handleSubmit}
          render={({ handleUpload, uploads, ready }) => (
            <div>
              <input
                type="file"
                disabled={!ready}
                onChange={e => handleUpload(e.currentTarget.files)}
              />

              {uploads.map(upload => {
                switch (upload.state) {
                  case 'waiting':
                    return <p key={upload.id}>Waiting to upload {upload.file.name}</p>
                  case 'uploading':
                    return (
                      <p key={upload.id}>
                        Uploading {upload.file.name}: {upload.progress}%
                      </p>
                    )
                  case 'error':
                    return (
                      <p key={upload.id}>
                        Error uploading {upload.file.name}: {upload.error}
                      </p>
                    )
                  case 'finished':
                    return (
                      <p key={upload.id}>Finished uploading {upload.file.name}</p>
                    )
                }
              })}
            </div>
          )}
        />
        </div>
    }
      </React.Fragment>
    );
  }
}

export default DogUpdate
