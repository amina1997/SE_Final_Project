import React, { Component } from 'react';
import "../styles/ShowTheBug.css";
import axios from "axios";
import showTheBug from '../assets/showTheBug.svg';
import StbAnime from '../components/STB_Anime';
import Event from '../components/Event';
import ReactCircleModal from 'react-circle-modal'
import { Redirect } from "react-router-dom";
import searchPic from '../assets/search.svg';


class ShowTheBug extends Component {

  constructor(props) {
    super(props);
    this.state = {
      eventList: [],
      query:'',
      list:[],
    };
  }

  componentDidMount() {
    this.getList();
  }

  getList = () => {
    axios
      .get("http://localhost:8000/api/events/", {
            headers: {
              Authorization: `JWT ${localStorage.getItem('token')}`
            }
          })
      .then((res) => this.setState({ eventList: res.data }))
      .catch((err) => console.log(err));
  };

  renderItems = () => {

    return this.state.eventList.map((item) => (

        <div className='event'>
            <img className='pic' src={showTheBug} alt="profile..." />
            <h4>{item.title}</h4>
            <p>{item.speaker}</p>
            <h4>{item.date}</h4>

            <ReactCircleModal backgroundColor="rgba(23,68,119, 0.8)" toogleComponent={onClick => ( <a href="#" onClick={onClick} >Show Event</a> )} offsetX={0} offsetY={0} >
                {(onClick) => (
                    <div style={{ backgroundColor: 'rgba(0,0,0, 0)', padding: '10px', margin: 'auto', width: '50%' }}>
                        <button type="button" className="btn btn-danger exit" onClick={onClick}>X</button>
                        <div >
                            <iframe width="727" height="409" src={item.videoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true" ></iframe>
                            <form>
                              <fieldset>
                                <span class="star-cb-group">
                                  <input type="radio" id="rating-5" name="rating" value="5" />
                                  <label htmlFor="rating-5">5</label>
                                  <input type="radio" id="rating-4" name="rating" value="4" checked="checked" />
                                  <label htmlFor="rating-4">4</label>
                                  <input type="radio" id="rating-3" name="rating" value="3" />
                                  <label htmlFor="rating-3">3</label>
                                  <input type="radio" id="rating-2" name="rating" value="2" />
                                  <label htmlFor="rating-2">2</label>
                                  <input type="radio" id="rating-1" name="rating" value="1" />
                                  <label htmlFor="rating-1">1</label>
                                  <input type="radio" id="rating-0" name="rating" value="0" class="star-cb-clear" />
                                  <label htmlFor="rating-0">0</label>
                                </span>
                              </fieldset>
                            </form>
                        </div>
                    </div>
                )}
            </ReactCircleModal>
        </div>

    ));
  }

    render() {

         async function searchYouTube(q) {
          q = encodeURIComponent(q);
          const response = await fetch("https://youtube-search-results.p.rapidapi.com/youtube-search/?q=" + q, {
            "method": "GET",
            "headers": {
              "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
              "x-rapidapi-key": "c8a87c564cmsh097330e17bda44fp12ef8ejsna56d0aff56d6"
            }
          });
          const body = await response.json();
          console.log(body);
          return body.items.filter(item => item.type === 'video');
        }

          const search = (e) => {
            e.preventDefault();
            searchYouTube(this.state.query).then(response => {this.setState({list: response});});
          };
            return (

            <div id='main_page'>
                <div id="clouds">
                    <div className="cloud x1"></div>
                    <div className="cloud x2"></div>
                    <div className="cloud x3"></div>
                    <div className="cloud x4"></div>
                    <div className="cloud x5"></div>
                </div>
                <StbAnime />

                <div id='events'>
                    <div class="separator">Upcoming Events</div>


                    {this.renderItems()}

                    <p className='clear-sides'></p><br/>
                    <div class="separator">Previous Events</div>
                    <img className='search-pic' src={searchPic} alt="search" />
                    <div className="SearchPreviousEvents">
                      <form id='searchForm' onSubmit={search}>
                        <input value={this.state.query} onChange={e => this.setState({query:e.target.value})} />
                        <button>Search Previous Events</button>
                      </form>
                      {this.state.list &&
                        (this.state.list.length === 0
                          ? <p>No results</p>
                          : (
                            <ul className="items">
                              {this.state.list.map(Pitem => (
                                <li className="item" key={Pitem.id}>
                                  <div>
                                    <b><a href={Pitem.url}>{Pitem.title}</a></b>
                                    <p>{Pitem.description}</p>
                                  </div>
                                  <ul className="meta">
                                    <li>By: <a href={Pitem.author.ref}>{Pitem.author.name}</a></li>
                                    <li>Views: {Pitem.views}</li>
                                    <li>Duration: {Pitem.duration}</li>
                                    <li>Uploaded: {Pitem.uploadedAt}</li>
                                  </ul>
                                  <img alt="" src={Pitem.bestThumbnail.url} />
                                </li>
                              ))}
                            </ul>
                          )
                        )
                      }
                    </div>
                </div>
            </div>
            );
    }
}

export default ShowTheBug;
