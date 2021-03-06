import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBEecjE_v8D5bC5nrfS3Xm-heojWG26L0w';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }; 
    this.videoSearch('mj');
  }

  videoSearch (term) {
    YTSearch({key: API_KEY, term: term}, (videos) =>{ 
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onTermChange={term=>this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoChange={(video)=>this.setState({selectedVideo:video})}
          videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />,document.querySelector('.yt-api'));
