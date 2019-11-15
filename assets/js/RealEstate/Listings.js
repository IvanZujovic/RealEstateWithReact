import React, { Component} from 'react'

export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
    this.loopListings  = this.loopListings.bind(this)
  }
 loopListings(){


  var {listingsData} = this.props

  if(listingsData == undefined || listingsData.length == 0 ){
    return "Vi har inget som matchar din filtrering."
  }

  return  listingsData.map((listing, index) =>{

    if(this.props.globalState.view == 'box'){


      // boxview
       return (<div className="col-md-3" key={index}>


    <div className="listing">
      <div className="listing-img" style={{ background: `url("${listing.image}")
           no-repeat center center`}}>



    <span className="address"> {listing.address}</span>


        {/* this is gon hover */}

        <div className="details">
          <div className="col-md-3">
          <div className="user-img" style={{ background: `url("${listing.userImg}")
               no-repeat center center `}}></div>
          </div>
          <div className="col-md-9">
          <div className="user-details">
            <span className="username">{listing.userName}</span>
            <span className="post-date">{listing.date}</span>
            <div className="listing-details">
              <div className="listbox">
                <div className="floor-space"><i className="far fa-square"></i>
                <span>{listing.floorSpace} kvm&sup2;</span>
                </div>

               <div className="bedrooms">
               <i className="fas fa-door-open"></i>
               <span>{listing.rooms} Rum </span>
               </div>
               </div>
            </div>
            </div>
            <div className="view-btn">
            Titta på Boende

            </div>
            </div>

        </div>
      </div>
      <div className="bottom-info">
        <span className="price">Utropspris: {listing.price2}  Månadskostnad: {listing.rent}</span>
        <span className="location"> <i className="fas fa-map-marker-alt"></i>{listing.city}</span>
      </div>
    </div>
  </div>)
  }else
  //long view
  {


    return (<div className="col-md-12 col-lg-6" key={index}>
    <div className="listing ">
      <div className="listing-img" style={{ background: `url("${listing.image}")
           no-repeat center center`}}>



    <span className="address"> {listing.address}</span>


        {/* this is gon hover */}

        <div className="details">
          <div className="col-md-3">
          <div className="user-img" style={{ background: `url("${listing.userImg}")
               no-repeat center center `}}></div>
          </div>
          <div className="col-md-9">
          <div className="user-details">
            <span className="username">{listing.userName}</span>
            <span className="post-date">{listing.date}</span>
            <div className="listing-details">
              <div className="listbox">
                <div className="floor-space"><i className="far fa-square"></i>
                <span>{listing.floorSpace} kvm&sup2;</span>
                </div>

               <div className="bedrooms">
               <i className="fas fa-door-open"></i>
               <span>{listing.rooms} Rum </span>
               </div>
               </div>
            </div>
            </div>
            <div className="view-btn2">
            Titta på Boende
            </div>
            </div>
        </div>
      </div>
      <div className="bottom-info">
        <span className="price">Utropspris: {listing.price2}  Månadskostnad: {listing.rent}</span>
        <span className="location"> <i className="fas fa-map-marker-alt"></i>{listing.city}</span>
      </div>
    </div>
  </div>
  )
  }
  })
 }
  render () {

    return (
      <section id="listings">
        <section className="search-area">
          <input type="text" name="search" onChange={this.props.change} />

        </section>

        <section className="sortby-area">
            <div className="results">{this.props.globalState.filteredData.length}  resultat hittade</div>
            <div className="sort-options">
              <select name="sortby" className="sortby" onChange={this.props.change}>
              <option value="price-dsc"> Lägsta pris  </option>
              <option value="price-asc">Högsta pris</option>
              </select>
              <div className="view">
              <i className="fas fa-th-list" onClick={this.props.changeView.bind(null,'long')}></i>
              <i className  ="fas fa-th" onClick={this.props.changeView.bind(null,'box')}></i>
              </div>
              </div>
           </section>
        <section className="listings-result">
          {this.loopListings()}
          </section>


          <section id="pagination">
            <ul className="pages">
              <li>Föregående</li>
              <li className="active">1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>Nästa</li>
            </ul>

          </section>
      </section>
    )
  }
}
