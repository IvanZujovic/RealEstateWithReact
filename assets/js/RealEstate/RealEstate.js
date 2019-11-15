import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter.js'
import Listings from './Listings.js'
import listingsData from './data/listingsData.js'
import userData from './data/userData.js'


class App extends Component {
  constructor () {
    super()
    this.state = {
      listingsData,
      city:'All',
      houseType:'All',
      rooms:0,
      min_price:0,
      max_price:10000000,
      min_floorspace:0,
      max_floorspace:1000,
      hiss:false,
      pool:false,
      förråd:false,
      källare:false,
      gym:false,
      sjötomt:false,
      innergård:false,
      filteredData: listingsData,
      populateFormsData: 'All',
      sortby:'price-dsc',
      view:'box',
      search:'',
      userData
      }
    this.change=this.change.bind(this)
    this.filteredData=this.filteredData.bind(this)
    this.populateForms= this.populateForms.bind(this)
    this.changeView= this.changeView.bind(this)


  }
  componentWillMount(){

   var listingsData = this.state.listingsData.sort((a,b) => {
    return a.price - b.price
   })

    this.setState({
      listingsData

    })
  }

  change(event){
    var name = event.target.name
    var value = (event.target.type ==='checkbox' ) ? event.target.checked : event.target.value
    this.setState({
      [name]:value
    }, () => {
      console.log(this.state)
      this.filteredData(value)
      return(this.filteredData.value)
    })


  }

  changeView(viewName){
    this.setState({
      view: viewName
    })
  }
 filteredData(){
  var newData = this.state.listingsData.filter((item) => {
    return  item.price >= this.state.min_price && item.price <= this.state.max_price && item.floorSpace >= this.state.min_floorspace && item.floorSpace <= this.state.max_floorspace && item.rooms >= this.state.rooms
  })
  if (this.state.city != 'All'){
    newData = newData.filter((item)=> {
      return item.city == this.state.city
    })
  }
  if (this.state.houseType != 'All'){
    newData = newData.filter((item)=> {
      return item.houseType == this.state.houseType
    })

  }
  if(this.state.sortby == 'price-dsc'){
    newData= newData.sort((a,b)=> {
      return a.price - b.price
    })

  }
  if(this.state.sortby == 'price-asc'){
    newData= newData.sort((a,b)=> {
      return b.price - a.price
    })

  }
  if (this.state.search != ''){
    newData = newData.filter((item)=>{
        var city  = item.city.toLowerCase()
        var searchText= this.state.search.toLowerCase()
        var n = city.match(searchText)


        if (n != null){
          return true
        }

    })
  }



  this.setState({
    filteredData: newData
  })
 }
 populateForms(){
   // city
   var cities = this.state.listingsData.map((item) =>{
    return item.city
   })
   cities = new Set(cities)
   cities = [...cities]

   cities = cities.sort()

   //housetype
  var housetypes = this.state.listingsData.map((item) =>{
    return item.houseType
   })

   housetypes = new Set(housetypes)
   housetypes = [...housetypes]
   housetypes= housetypes.sort()
   //rooms
   var rooms = this.state.listingsData.map((item) =>{
    return item.rooms
   })
   rooms = new Set(rooms)
   rooms = [...rooms]
   rooms = rooms.sort()

   this.setState({
    populateFormsData: {
      cities,
      housetypes,
      rooms,
    }
  })
 }
  render ()
  {
    return (
    <div id={'parent'}>
        <Header />
        <section id="content-area">
          <Filter  globalState={this.state} populateAction={this.populateForms} change={this.change}/>
          <Listings listingsData={this.state.filteredData} change={this.change} globalState={this.state} changeView={this.changeView} />
        </section>
    </div>
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
