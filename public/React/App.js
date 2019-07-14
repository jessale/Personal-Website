


// single stateless component 
class Weather extends React.Component {
    componentDidMount(){
        this.props.getWeather();
    }
    render() {
        return (
            <div>
                <div className="weather_top">
                <img className="wicon" src={this.props.icon}></img>
                <span className="weather">{this.props.weather}</span>
                </div>
                <div className="temperature">
                <span className="temp">{Math.ceil(this.props.temperature)}</span>
            <span className="grad">°</span>
                <p>{this.props.city}, {this.props.country}</p>
                </div>
            </div>
        );
   }
}


class Serverinfo extends React.Component {

  state = {
    system : undefined,
    mem : undefined,
    cpu : undefined
}

  getServerinfo = async (e) =>{
    const api_server = await fetch('/api/serverinfo');
      const response = await api_server.json();
      console.log(response);
            this.setState({ 
                system: response[0].test,
                mem: response[1].mem,
                cpu: response[2].cpu
            });

}
    componentDidMount(){
    this.getServerinfo();
    }

    render() {
        return (
            <div>
                <p><span className="widgInf">ram</span> {this.state.mem}% 
                <span className="widgInf"> cpu</span> 13%</p>
            </div>
        );
    }
}




class App extends React.Component {

    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        icon: undefined,
        error: undefined
    }

    getWeather = async (e) => {
        const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Augsburg&APPID=2ed24c214a4f031c0c685933094a6bf4&units=metric');
        const data = await api_call.json(); 
        console.log(data);
        this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            icon: data.weather[0].icon,
            weather: data.weather[0].main
            
        });
    };

    render(){
        return(
          <div>
                <Weather
            getWeather={this.getWeather}
            temperature={this.state.temperature}
            city={this.state.city}
            icon={'http://openweathermap.org/img/w/' + this.state.icon + '.png'}
            country={this.state.country}
            weather={this.state.weather}
                />

                <Serverinfo />
          </div>
        );
    }
}



ReactDOM.render(
        <App />,
    document.getElementById('react_container')
);
