import React, { Component} from 'react'

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      
    }
    this.cities = this.cities.bind(this)
    this.housetypes = this.housetypes.bind(this)
    this.rooms = this.rooms.bind(this)


  }
 componentWillMount(){
   this.props.populateAction()
 }
 cities(){
   if (this.props.globalState.populateFormsData.cities != undefined){
     var { cities } = this.props.globalState.populateFormsData
     return cities.map((item)=> {
       return(
         <option key={item} value={item}>{item}</option>
       )
     })
   }
 }
  
 housetypes(){
  if (this.props.globalState.populateFormsData.housetypes != undefined){
    var { housetypes } = this.props.globalState.populateFormsData
    return housetypes.map((item)=> {
      return(
        <option key={item} value={item}>{item}</option>
      )
    })
  }
}
rooms(){
  if (this.props.globalState.populateFormsData.rooms != undefined){
    var { rooms } = this.props.globalState.populateFormsData
    console.log(rooms)
    return rooms.map((item)=> {
      return(
        <option key={item} value={item}>{item} + </option>
      )
    })
  }
}

  render () {
    return (
      <section id="filter">
        <div className="inside">
        <h4>Filter</h4>
        <label htmlFor="city">Område</label>
        <select name="city" className=" filters neighbourhood" onChange={this.props.change}>
        <option value="All">Alla</option>
         {this.cities()}

        </select>
        <label htmlFor="houseType">Boende</label>

        <select name="houseType" className="filters housetype"onChange={this.props.change} >
          <option value="All">Alla objekt</option>
          {this.housetypes()}
        


        </select>
        <label htmlFor="rooms">Antal RoK</label>

        <select name="rooms" className="filters rooms" onChange={this.props.change}>      
        {this.rooms()}

        </select>
        <div className="filters price">
          <span className="title">Price</span>
        <input type="text" name="min_price" className="minPrice" onChange={this.props.change} value={this.props.globalState.min_price}/>
        <input type="text" name="max_price" className="maxPrice" onChange={this.props.change} value={this.props.globalState.max_price}/>
        </div>
        <div className="filters floorspace">
          <span className="title">Boende Area</span>
        <input type="text" name="min_floorspace"className="minFloorspace" onChange={this.props.change} value={this.props.globalState.min_floorspace}/>
        <input type="text" name="max_floorspace" className="maxFloorspace" onChange={this.props.change} value={this.props.globalState.max_floorspace}/>
        </div>
          <div className="filters extras">
            <span className="title">Extra filter</span>
            <label htmlFor="extras" className="bla"> <span>Hiss</span> 
            <input name="hiss" value="hiss" type="checkbox" onChange={this.props.change} /> 
              </label>
            <label htmlFor="extras" className="bla"> <span>Pool</span> 
            <input name="pool" value="pool" type="checkbox" onChange={this.props.change}/>  
            </label>
            <label htmlFor="extras" className="bla"> <span>Förråd</span> 
            <input name="förråd" value="förråd" type="checkbox" onChange={this.props.change}/> 
            </label>
            <label htmlFor="extras" className="bla"> <span>Källare</span> 
            <input name="källare" value="källare" type="checkbox" onChange={this.props.change}/> 
            </label>
            <label htmlFor="extras" className="bla"> <span>Gym</span> 
            <input name="gym" value="gym" type="checkbox" onChange={this.props.change}/> 
            </label>
            <label htmlFor="extras" className="bla"> <span>Sjötomt</span> 
            <input name="sjötomt" value="sjötomt" type="checkbox" onChange={this.props.change}/> 
            </label>
            <label htmlFor="extras" className="bla"> <span>Innergård</span> 
            <input name="innergård" value="innergård" type="checkbox" onChange={this.props.change}/> 
            </label>


            </div>
          </div>
      </section>
    )
  }
}

