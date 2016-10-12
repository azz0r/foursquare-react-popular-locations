import React from 'react'
import request from 'superagent'
import config from './config'
import _debounce from 'lodash.debounce'

export default class Search extends React.Component {

  displayName = 'Search'

  static propTypes = {
    onSearchUpdated: React.propTypes.func.isRequired
  }

  state = {
    query: '',
    venues: [],
    long: 51.481364199999994,
    lat: -0.12015400000000001,
  }

  componentWillMount() {
    this.delayedCallback = _debounce((event) => {
      let query = event.target.value

      this.openRequest = request.get(`
        ${config.apiUrl}?query=${query}&client_id=${config.clientId}&client_secret=${config.clientSecret}&style=${config.style}&v=${config.v}&ll=${this.state.long},${this.state.lat}`)
        .accept('json')
        .end((err, res) => {
          if(err) return
          let venues = res.body.response.groups[0].items
          this.props.onSearchUpdated({
            venues, 
            query,
          })
        })
    }, 500)
  }

  onSearch = (event) => {
    event.persist()
    this.delayedCallback(event)
  }

  onGeolocateMe = (event) => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }

    const success = (pos) => {
      this.setState({
        long: pos.coords.latitude,
        lat: pos.coords.longitude,
      })
    }

    const error = (err) => {
      console.warn(`Error code: ${err.code}; Error message: ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  componentWillUnmount() {
    this.openRequest.abort()
  }

  render() {
    return (
      <div className="row search">
        <div className="col-xs-8 col-lg-10">
          <div className="form-group has-feedback">
            <input
              className="form-control search__field"
              placeholder="Search"
              name="search__field"
              id="search__field"
              type="text"
              onKeyUp={this.onSearch}
              onKeyPress={this.onSearch}
            />
            <i className="glyphicon glyphicon-search form-control-feedback"></i>
          </div>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 location">
          <button
            className="location__button btn btn-success"
            title="Geo locate me"
            onClick={this.onGeolocateMe}>
            <span className="glyphicon glyphicon-screenshot" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    )
  }

}
